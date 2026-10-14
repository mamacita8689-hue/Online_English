import { NextRequest } from 'next/server';

const DEFAULT_MODEL = 'gpt-4o-mini-tts';
const DEFAULT_VOICE = 'cedar';
const MAX_TEXT_LENGTH = 160;

function isAllowedLearningText(text: string) {
  return /^[A-Za-z0-9'’.,!?\- ]+$/.test(text);
}

export async function GET(request: NextRequest) {
  const text = request.nextUrl.searchParams.get('text')?.trim() ?? '';

  if (!text || text.length > MAX_TEXT_LENGTH || !isAllowedLearningText(text)) {
    return Response.json({ error: 'Unsupported speech text.' }, { status: 400 });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: 'OPENAI_API_KEY is not configured. Browser fallback will be used.' },
      { status: 503 },
    );
  }

  const response = await fetch('https://api.openai.com/v1/audio/speech', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: process.env.OPENAI_TTS_MODEL ?? DEFAULT_MODEL,
      voice: process.env.OPENAI_TTS_VOICE ?? DEFAULT_VOICE,
      input: text,
      response_format: 'mp3',
      speed: 0.9,
      instructions:
        'Speak in clear, natural British English for a 7-8 year old language learner. Pronounce exactly the supplied text and do not add words. Use careful dictionary-style pronunciation without exaggeration. If the text is one capital letter, say the English letter name. If it starts with one capital letter followed by a period and a word, say the letter name, pause briefly, then say the word.',
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    console.error('OpenAI speech generation failed:', response.status, details);
    return Response.json({ error: 'Speech generation failed.' }, { status: 502 });
  }

  const audio = await response.arrayBuffer();

  return new Response(audio, {
    status: 200,
    headers: {
      'Content-Type': 'audio/mpeg',
      'Cache-Control': 'public, max-age=604800, stale-while-revalidate=86400',
    },
  });
}
