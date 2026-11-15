import { useSettingsStore } from "@/lib/stores/settings-store";

/**
 * A short, bright "ding-ding" for a right answer, made with the Web Audio API: no sound files, no
 * network. It only plays after the learner has tapped something (answering is a tap), which is
 * when browsers allow sound.
 */

let audio: AudioContext | null = null;

const context = (): AudioContext | null => {
  if (typeof window === "undefined") return null;
  const Constructor = window.AudioContext ?? (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Constructor) return null;
  audio ??= new Constructor();
  if (audio.state === "suspended") void audio.resume();
  return audio;
};

const note = ({ ctx, frequency, start, duration }: { ctx: AudioContext; frequency: number; start: number; duration: number }) => {
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  oscillator.type = "sine";
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(0.16, start + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain).connect(ctx.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.05);
};

export const playCorrect = (): void => {
  if (!useSettingsStore.getState().sounds) return;
  const ctx = context();
  if (!ctx) return;
  const now = ctx.currentTime;
  note({ ctx, frequency: 1046.5, start: now, duration: 0.16 });
  note({ ctx, frequency: 1568, start: now + 0.11, duration: 0.3 });
};
