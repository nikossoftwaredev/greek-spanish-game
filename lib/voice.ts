import type { LolaMood } from "@/lib/mascot/lines";
import { useSettingsStore } from "@/lib/stores/settings-store";

/**
 * Lola's voice, with the browser's own free text-to-speech. The first version of the app read
 * Spanish with whatever voice the device had and mispronounced it, so now she only speaks when the
 * device has a real Spanish voice, and prefers a female one. With no Spanish voice she stays silent
 * (and the speaker button does not show) instead of reading Spanish with a Greek or English one.
 */

const FEMALE_SPANISH = /helena|elvira|laura|m[oó]nica|paulina|luc[ií]a|marisol|sabina|paloma|dalia|female|google espa/i;

const voices = (): SpeechSynthesisVoice[] => (typeof window !== "undefined" && "speechSynthesis" in window ? window.speechSynthesis.getVoices() : []);

const pickVoice = (): SpeechSynthesisVoice | undefined => {
  const spanish = voices().filter((voice) => voice.lang.toLowerCase().replace("_", "-").startsWith("es"));
  return spanish.find((voice) => FEMALE_SPANISH.test(voice.name) && /es-es/i.test(voice.lang)) ?? spanish.find((voice) => FEMALE_SPANISH.test(voice.name)) ?? spanish.find((voice) => /es-es/i.test(voice.lang)) ?? spanish[0];
};

/** For `useSyncExternalStore`: a primitive that changes when the device's voices finish loading. */
export const voiceAvailable = (): boolean => pickVoice() !== undefined;

export const subscribeVoices = (listener: () => void): (() => void) => {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return () => {};
  window.speechSynthesis.addEventListener("voiceschanged", listener);
  return () => window.speechSynthesis.removeEventListener("voiceschanged", listener);
};

/** Says `text` in Spanish, a little sharper when she is angry. Does nothing without a Spanish voice. */
export const speakAsLola = ({ text, mood = "teaching" }: { text: string; mood?: LolaMood }): void => {
  const voice = pickVoice();
  if (!voice || !text.trim()) return;
  const synth = window.speechSynthesis;
  synth.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = voice;
  utterance.lang = voice.lang;
  const angry = mood === "angry" || mood === "annoyed";
  utterance.rate = angry ? 1.12 : 1;
  utterance.pitch = angry ? 1.15 : 1.05;
  synth.speak(utterance);
};

/** Speaks her line when the "Lola speaks aloud" setting is on. */
export const speakLine = ({ text, mood }: { text: string; mood: LolaMood }): void => {
  if (!useSettingsStore.getState().lolaVoice) return;
  speakAsLola({ text, mood });
};
