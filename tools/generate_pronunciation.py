from __future__ import annotations

import argparse
import hashlib
from pathlib import Path

import soundfile as sf
from kokoro import KPipeline

SAMPLE_RATE = 24000


def audio_id(text: str) -> str:
    # Must match src/lib/speech.ts (FNV-1a over UTF-8 bytes).
    value = 0x811C9DC5
    for byte in text.strip().encode('utf-8'):
        value ^= byte
        value = (value * 0x01000193) & 0xFFFFFFFF
    return f'{value:08x}'


def read_phrases(path: Path) -> list[str]:
    phrases: list[str] = []
    seen: set[str] = set()
    for raw_line in path.read_text(encoding='utf-8').splitlines():
        text = raw_line.strip()
        if not text or text.startswith('#') or text in seen:
            continue
        seen.add(text)
        phrases.append(text)
    return phrases


def main() -> None:
    parser = argparse.ArgumentParser(description='Generate bundled British-English pronunciation WAV files.')
    parser.add_argument('--input', default='tools/pronunciation_texts.txt')
    parser.add_argument('--output', default='public/audio/en-gb')
    parser.add_argument('--voice', default='bf_emma')
    parser.add_argument('--speed', type=float, default=0.92)
    args = parser.parse_args()

    input_path = Path(args.input)
    output_dir = Path(args.output)
    output_dir.mkdir(parents=True, exist_ok=True)

    phrases = read_phrases(input_path)
    pipeline = KPipeline(lang_code='b')

    for index, text in enumerate(phrases, start=1):
        target = output_dir / f'{audio_id(text)}.wav'
        if target.exists():
            print(f'[{index}/{len(phrases)}] exists  {text}')
            continue

        generator = pipeline(text, voice=args.voice, speed=args.speed)
        chunks = [audio for _, _, audio in generator]
        if not chunks:
            raise RuntimeError(f'No audio generated for: {text}')

        # Short app phrases normally produce one chunk. If Kokoro splits a phrase,
        # concatenate chunks before writing one deterministic asset.
        if len(chunks) == 1:
            audio = chunks[0]
        else:
            import numpy as np
            audio = np.concatenate(chunks)

        sf.write(target, audio, SAMPLE_RATE, subtype='PCM_16')
        print(f'[{index}/{len(phrases)}] wrote   {target.name}  {text}')


if __name__ == '__main__':
    main()
