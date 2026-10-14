'use client';

let activeAudio: HTMLAudioElement | null = null;
const audioCache = new Map<string, string>();

function scoreVoice(voice: SpeechSynthesisVoice) {
  const name = voice.name.toLowerCase();
  const lang = voice.lang.toLowerCase();
  let score = 0;

  if (lang === 'en-gb') score += 100;
  else if (lang.startsWith('en-gb')) score += 90;
  else if (lang.startsWith('en')) score += 30;

  if (name.includes('natural')) score += 40;
  if (name.includes('neural')) score += 35;
  if (name.includes('google uk english')) score += 30;
  if (name.includes('sonia')) score += 25;
  if (name.includes('libby')) score += 20;
  if (voice.localService) score += 3;

  return score;
}

function browserFallback(text: string) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

  const synth = window.speechSynthesis;
  synth.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  const voices = synth.getVoices().filter((voice) => voice.lang.toLowerCase().startsWith('en'));
  const bestVoice = [...voices].sort((a, b) => scoreVoice(b) - scoreVoice(a))[0];

  if (bestVoice) utterance.voice = bestVoice;
  utterance.lang = bestVoice?.lang || 'en-GB';
  utterance.rate = 0.82;
  utterance.pitch = 1;
  utterance.volume = 1;
  synth.speak(utterance);
}

async function getAudioUrl(text: string) {
  const cached = audioCache.get(text);
  if (cached) return cached;

  const response = await fetch(`/api/speech?text=${encodeURIComponent(text)}`);
  if (!response.ok) throw new Error(`Speech API returned ${response.status}`);

  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  audioCache.set(text, url);
  return url;
}

export async function speakEnglish(text: string) {
  const cleanText = text.trim();
  if (!cleanText || typeof window === 'undefined') return;

  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
  }
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();

  try {
    const url = await getAudioUrl(cleanText);
    const audio = new Audio(url);
    activeAudio = audio;
    audio.preload = 'auto';
    await audio.play();
  } catch (error) {
    console.warn('High-quality speech unavailable, using selected English browser voice.', error);
    browserFallback(cleanText);
  }
}
