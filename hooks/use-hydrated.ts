"use client";

import { useSyncExternalStore } from "react";

import { useHomeworkStore } from "@/lib/stores/homework-store";
import { useProgressStore } from "@/lib/stores/progress-store";
import { useSettingsStore } from "@/lib/stores/settings-store";

const STORES = [useProgressStore, useHomeworkStore, useSettingsStore];

const subscribe = (onChange: () => void) => {
  const unsubscribers = STORES.map((store) => store.persist.onFinishHydration(onChange));
  return () => unsubscribers.forEach((unsubscribe) => unsubscribe());
};

const getSnapshot = () => STORES.every((store) => store.persist.hasHydrated());

const getServerSnapshot = () => false;

/** Loads every persisted store from localStorage. Mounted once, in the root layout. */
export const rehydrateStores = () => {
  STORES.forEach((store) => store.persist.rehydrate());
};

/**
 * Persisted stores load from localStorage after the first render (`skipHydration`), so the server
 * HTML and the first client render always match. True once all of them have loaded.
 */
export const useHydrated = (): boolean => useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
