'use client';

let activeAudio: HTMLAudioElement | null = null;

function audioId(text: string) {
  const bytes = new TextEncoder().encode(text.trim());
  let hash = 0x811c9dc5;

  for (const byte of bytes) {
    hash ^= byte;
    hash = Math.imul(hash, 0x01000193);
  }

  return (hash >>> 0).toString(16).padStart(8, '0');
}

function audioPath(text: string) {
  return `/audio/en-gb/${audioId(text)}.wav`;
}

function stopCurrentAudio() {
  if (!activeAudio) return;
  activeAudio.pause();
  activeAudio.currentTime = 0;
  activeAudio = null;
}

function playClip(text: string) {
  return new Promise<void>((resolve, reject) => {
    const audio = new Audio(audioPath(text));
    activeAudio = audio;
    audio.preload = 'auto';

    audio.addEventListener('ended', () => {
      if (activeAudio === audio) activeAudio = null;
      resolve();
    }, { once: true });

    audio.addEventListener('error', () => {
      if (activeAudio === audio) activeAudio = null;
      reject(new Error(`Missing prepared pronunciation for: ${text}`));
    }, { once: true });

    void audio.play().catch(reject);
  });
}

export async function speakEnglishSequence(parts: string[]) {
  if (typeof window === 'undefined') return;

  stopCurrentAudio();

  try {
    for (const part of parts) {
      const cleanText = part.trim();
      if (!cleanText) continue;
      await playClip(cleanText);
    }
  } catch (error) {
    // Deliberately no browser-TTS fallback: a random system voice is worse than
    // a clearly missing clip in a pronunciation-learning application.
    console.error('Prepared pronunciation is unavailable.', error);
  }
}

export async function speakEnglish(text: string) {
  await speakEnglishSequence([text]);
}
