"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect } from "react";

import { DialogProvider } from "@/components/dialog-provider";
import { LolaCompanion } from "@/components/mascot/lola-companion";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { rehydrateStores } from "@/hooks/use-hydrated";
import { registerServiceWorker } from "@/lib/pwa";
import { usePdfStore } from "@/lib/stores/pdf-store";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    rehydrateStores();
    usePdfStore.getState().refresh();
    registerServiceWorker();
  }, []);

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <TooltipProvider>{children}</TooltipProvider>
      <LolaCompanion />
      <DialogProvider />
      <Toaster />
    </NextThemesProvider>
  );
};
