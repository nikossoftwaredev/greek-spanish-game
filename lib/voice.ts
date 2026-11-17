import type { LolaMood } from "@/lib/mascot/lines";
import { useSettingsStore } from "@/lib/stores/settings-store";

/**
 * Lola's voice, with the browser's own free text-to-speech. The first version of the app read
 * Spanish with whatever voice the device had and mispronounced it, so now she only speaks with a
 * real Spanish voice, never with a voice whose name is a known man's, and prefers a woman with a
 * Latin American accent (Colombian first, then Mexican and US Spanish) over a Castilian one. The
 * learner can pick the voice by hand in the settings, because voice names differ from device to
 * device. With no usable Spanish voice she stays silent (and the speaker button does not show)
 * instead of reading Spanish with a Greek or English one.
 */

const FEMALE_NAME =
  /helena|elvira|laura|m[oó]nica|paulina|luc[ií]a|marisol|sabina|paloma|dalia|salom[eé]|elena|camila|valentina|catalina|ximena|marina|isabela|francisca|soledad|ang[eé]lica|female|mujer|google espa/i;

const MALE_NAME = /pablo|ra[uú]l|jorge|juan|diego|carlos|gonzalo|[aá]lvaro|enrique|miguel|tom[aá]s|alonso|lorenzo|pedro|andr[eé]s|luis|sergio|rodrigo|antonio|manuel|mario|fernando|[oó]scar|\bmale\b|masculin/i;

/** Latin American Spanish first (Colombian, like the learner's idea of her, then Mexican and US), Castilian last. */
const REGION_SCORE: Record<string, number> = { "es-co": 30, "es-mx": 25, "es-us": 25, "es-419": 25, "es-ar": 20, "es-cl": 20, "es-pe": 20, "es-ve": 20, "es-es": 10 };
const OTHER_LATIN_AMERICA = 15;

const allVoices = (): SpeechSynthesisVoice[] => (typeof window !== "undefined" && "speechSynthesis" in window ? window.speechSynthesis.getVoices() : []);

const langOf = (voice: SpeechSynthesisVoice): string => voice.lang.toLowerCase().replace("_", "-");

const isMan = (voice: SpeechSynthesisVoice): boolean => MALE_NAME.test(voice.name);

const scoreOf = (voice: SpeechSynthesisVoice): number => {
  let score = REGION_SCORE[langOf(voice)] ?? OTHER_LATIN_AMERICA;
  if (isMan(voice)) score -= 100;
  else if (FEMALE_NAME.test(voice.name)) score += 50;
  if (/natural|online|neural/i.test(voice.name)) score += 15;
  return score;
};

/** The Spanish voices of the device, the ones she would use first at the top. */
export const spanishVoices = (): SpeechSynthesisVoice[] =>
  allVoices()
    .filter((voice) => langOf(voice).startsWith("es"))
    .sort((a, b) => scoreOf(b) - scoreOf(a));

/** The voice the learner chose, else the best Spanish voice that is not a man's. */
const pickVoice = (): SpeechSynthesisVoice | undefined => {
  const voices = spanishVoices();
  const chosen = useSettingsStore.getState().lolaVoiceName;
  const picked = chosen ? voices.find((voice) => voice.name === chosen) : undefined;
  if (picked) return picked;
  const best = voices[0];
  return best && !isMan(best) ? best : undefined;
};

/** For `useSyncExternalStore`: a primitive that changes when the device's voices finish loading. */
export const voiceAvailable = (): boolean => pickVoice() !== undefined;

/** For `useSyncExternalStore`: the names of the Spanish voices, so a list can follow the device's voices loading. */
export const spanishVoiceKey = (): string => spanishVoices().map((voice) => voice.name).join("|");

export const subscribeVoices = (listener: () => void): (() => void) => {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return () => {};
  window.speechSynthesis.addEventListener("voiceschanged", listener);
  return () => window.speechSynthesis.removeEventListener("voiceschanged", listener);
};

/** How a voice is shown in the picker: Microsoft names already say the country ("Salome Online (Natural) - Spanish (Colombia)"), the others get their language code. */
export const describeVoice = (voice: SpeechSynthesisVoice): string => {
  const name = voice.name.replace(/^Microsoft\s+/, "");
  return /-\s*Spanish/i.test(name) ? name : `${name} (${voice.lang})`;
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
