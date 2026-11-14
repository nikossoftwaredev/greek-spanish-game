"use client";

import { Flame, MessageCircleQuestion, Moon, Star, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

import { ASK_LOLA_DIALOG } from "@/components/mascot/ask-lola-dialog";
import { Button } from "@/components/ui/button";
import { useHydrated } from "@/hooks/use-hydrated";
import { cn } from "@/lib/general/utils";
import { useDialogStore } from "@/lib/stores/dialog-store";
import { computeStreak, useProgressStore } from "@/lib/stores/progress-store";

import { isActivePath, NAV_ITEMS } from "./nav-items";

const HeaderStats = () => {
  const hydrated = useHydrated();
  const xp = useProgressStore((state) => state.xp);
  const activeDays = useProgressStore((state) => state.activeDays);
  const streak = hydrated ? computeStreak(activeDays).current : 0;

  return (
    <Link href="/progress" aria-label="Η πρόοδός μου" className="flex items-center gap-1.5 text-sm font-extrabold tabular-nums">
      <span
        title="Ημέρες στη σειρά"
        className={cn(
          "flex items-center gap-1 rounded-full px-2.5 py-1",
          streak > 0 ? "bg-primary/12 text-primary" : "bg-muted text-muted-foreground",
        )}
      >
        <Flame className="size-4" aria-hidden /> {streak}
      </span>
      <span title="Πόντοι εμπειρίας" className="flex items-center gap-1 rounded-full bg-sun/25 px-2.5 py-1 text-foreground">
        <Star className="size-4 fill-sun text-sun-edge" aria-hidden /> {hydrated ? xp : 0}
      </span>
    </Link>
  );
};

const AskLolaButton = () => {
  const openDialog = useDialogStore((state) => state.openDialog);
  return (
    <Button type="button" variant="ghost" size="icon" aria-label="Ρώτα τη Λόλα" title="Ρώτα τη Λόλα πώς λέγεται κάτι στα ισπανικά" onClick={() => openDialog(ASK_LOLA_DIALOG)}>
      <MessageCircleQuestion />
    </Button>
  );
};

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label="Αλλαγή θέματος"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun className="hidden dark:block" />
      <Moon className="dark:hidden" />
    </Button>
  );
};

export const AppHeader = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b-2 border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center gap-4 px-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Vamos, αρχική σελίδα">
          <span className="grid size-8 place-items-center rounded-lg bg-primary font-es text-lg font-bold text-primary-foreground shadow-[0_3px_0_0_var(--primary-edge)]">
            ¡V
          </span>
          <span className="font-es text-2xl font-bold tracking-tight italic">Vamos</span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1 md:flex" aria-label="Κύρια πλοήγηση">
          {NAV_ITEMS.map((item) => {
            const active = isActivePath({ pathname, href: item.href });
            return (
              <Link
                key={item.href}
                href={item.href}
                title={item.label}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-bold whitespace-nowrap transition-colors",
                  active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <item.icon className="size-4" aria-hidden />
                <span className={active ? "" : "hidden xl:inline"}>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-1 md:ml-0">
          <HeaderStats />
          <AskLolaButton />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
