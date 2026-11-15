/**
 * Installing the app on the phone ("download the app"). Chrome on Android offers a real install
 * prompt (the `beforeinstallprompt` event, kept here as soon as the page loads); Safari on iPhone
 * has none, so the learner is shown the steps; any other mobile browser gets the generic steps.
 */

interface InstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

/** `hidden`: already installed or not a phone. `prompt`: one tap installs. `ios` and `manual`: show the steps. */
export type InstallMode = "hidden" | "prompt" | "ios" | "manual";

let deferred: InstallPromptEvent | null = null;
const listeners = new Set<() => void>();
const notify = () => listeners.forEach((listener) => listener());

if (typeof window !== "undefined") {
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferred = event as InstallPromptEvent;
    notify();
  });
  window.addEventListener("appinstalled", () => {
    deferred = null;
    notify();
  });
}

export const subscribeInstall = (listener: () => void): (() => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

const isStandalone = (): boolean => window.matchMedia("(display-mode: standalone)").matches || (navigator as Navigator & { standalone?: boolean }).standalone === true;

const isIos = (): boolean => /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

const isMobileBrowser = (): boolean => window.matchMedia("(pointer: coarse)").matches && (/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) || isIos());

/** A primitive, so `useSyncExternalStore` can compare snapshots. */
export const installMode = (): InstallMode => {
  if (isStandalone() || !isMobileBrowser()) return "hidden";
  if (deferred) return "prompt";
  if (isIos()) return "ios";
  return "manual";
};

export const promptInstall = async (): Promise<void> => {
  if (!deferred) return;
  const prompt = deferred;
  deferred = null;
  notify();
  await prompt.prompt();
  await prompt.userChoice;
};

/** Registers the pass-through service worker (production only) so Chrome treats the site as installable. */
export const registerServiceWorker = (): void => {
  if (process.env.NODE_ENV !== "production" || !("serviceWorker" in navigator)) return;
  navigator.serviceWorker.register("/sw.js").catch(() => {
    // Not installable here (private window, blocked): the site still works as a normal page.
  });
};
