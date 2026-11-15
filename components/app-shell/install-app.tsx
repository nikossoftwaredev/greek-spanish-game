"use client";

import { Download, X } from "lucide-react";
import { useState, useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";
import { installMode, promptInstall, subscribeInstall } from "@/lib/pwa";
import { useDialogStore } from "@/lib/stores/dialog-store";

import { INSTALL_DIALOG } from "./install-dialog";

const DISMISSED_KEY = "vamos:install-dismissed";
const DISMISS_FOR_MS = 7 * 24 * 60 * 60 * 1000;

const useInstallMode = () => useSyncExternalStore(subscribeInstall, installMode, () => "hidden" as const);

/** «Κατέβασε την εφαρμογή»: only on a phone's browser, never inside the installed app. */
export const InstallButton = ({ variant = "chunky", size = "default" }: { variant?: "chunky" | "chunky-outline"; size?: "default" | "sm" | "lg" }) => {
  const mode = useInstallMode();
  const openDialog = useDialogStore((state) => state.openDialog);
  if (mode === "hidden") return null;

  const handleClick = () => {
    if (mode === "prompt") promptInstall();
    else openDialog(INSTALL_DIALOG, { ios: mode === "ios" });
  };

  return (
    <Button type="button" variant={variant} size={size} onClick={handleClick} icon={<Download />}>
      Κατέβασε την εφαρμογή
    </Button>
  );
};

const wasDismissedRecently = (): boolean => {
  if (typeof window === "undefined") return false;
  try {
    return Date.now() - Number(localStorage.getItem(DISMISSED_KEY) ?? 0) < DISMISS_FOR_MS;
  } catch {
    return false;
  }
};

/** A card at the top of the home page that offers the install, and stays away for a week once closed. */
export const InstallBanner = () => {
  const mode = useInstallMode();
  const [dismissed, setDismissed] = useState(wasDismissedRecently);
  if (mode === "hidden" || dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    try {
      localStorage.setItem(DISMISSED_KEY, String(Date.now()));
    } catch {
      // Private window: it simply shows again next time.
    }
  };

  return (
    <section className="flex items-center gap-3 rounded-3xl border-2 border-primary/40 bg-primary/10 p-4" aria-label="Εγκατάσταση εφαρμογής">
      <div className="min-w-0 flex-1 space-y-2">
        <p className="text-sm font-bold">Βάλε το Vamos στην αρχική οθόνη του κινητού σου: ανοίγει πλήρους οθόνης, σαν κανονική εφαρμογή.</p>
        <InstallButton size="sm" />
      </div>
      <Button type="button" variant="ghost" size="icon" aria-label="Όχι τώρα" onClick={handleDismiss}>
        <X />
      </Button>
    </section>
  );
};
