/**
 * Machine translation for «Ρώτα τη Λόλα», straight from the browser to MyMemory (free, no key,
 * CORS open). Only the phrase the learner typed in the Ask box leaves the device, never anything
 * else about them. Answers are cached in localStorage so a repeated question works offline.
 */

export type TranslateDirection = "el-es" | "es-el";

const CACHE_KEY = "vamos:ask:v1";
const CACHE_LIMIT = 100;
const CACHE_TTL_MS = 30 * 24 * 60 * 60 * 1000;
const MAX_LENGTH = 200;

interface CachedTranslation {
  text: string;
  at: number;
}

const readCache = (): Record<string, CachedTranslation> => {
  try {
    return JSON.parse(localStorage.getItem(CACHE_KEY) ?? "{}") as Record<string, CachedTranslation>;
  } catch {
    return {};
  }
};

const writeCache = (cache: Record<string, CachedTranslation>) => {
  try {
    const kept = Object.entries(cache).sort((a, b) => b[1].at - a[1].at).slice(0, CACHE_LIMIT);
    localStorage.setItem(CACHE_KEY, JSON.stringify(Object.fromEntries(kept)));
  } catch {
    // Storage full or blocked: the answer is simply not cached.
  }
};

/**
 * Translates `text`. Resolves with `undefined` when the service has no useful answer, and throws
 * on a network failure so the caller can show an offline message.
 */
export const translateText = async ({ text, direction }: { text: string; direction: TranslateDirection }): Promise<string | undefined> => {
  const query = text.trim().slice(0, MAX_LENGTH);
  if (!query) return undefined;

  const key = `${direction}:${query.toLowerCase()}`;
  const hit = readCache()[key];
  if (hit && Date.now() - hit.at < CACHE_TTL_MS) return hit.text;

  const pair = direction === "el-es" ? "el|es" : "es|el";
  const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(query)}&langpair=${pair}`);
  if (!response.ok) throw new Error(`Translation failed with status ${response.status}`);
  const data = (await response.json()) as { responseStatus?: number | string; quotaFinished?: boolean; responseData?: { translatedText?: string } };

  if (data.quotaFinished || Number(data.responseStatus) !== 200) return undefined;
  const translated = data.responseData?.translatedText?.trim();
  if (!translated || /MYMEMORY WARNING|QUERY LENGTH LIMIT|INVALID/i.test(translated)) return undefined;
  if (translated.toLowerCase() === query.toLowerCase()) return undefined;

  writeCache({ ...readCache(), [key]: { text: translated, at: Date.now() } });
  return translated;
};
