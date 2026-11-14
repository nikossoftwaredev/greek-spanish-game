"use client";

import { Languages } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/general/utils";
import { useSettingsStore } from "@/lib/stores/settings-store";

interface TranslationProps {
  /** The Greek translation. */
  text: string;
  /** Styles the text once it is shown. */
  className?: string;
}

/**
 * A Greek translation that stays hidden behind a «Μετάφραση» button, so the learner reads the
 * Spanish first. The «Να φαίνονται πάντα οι μεταφράσεις» setting shows it straight away.
 */
export const Translation = ({ text, className }: TranslationProps) => {
  const always = useSettingsStore((state) => state.showTranslations);
  const [open, setOpen] = useState(false);

  if (always || open) return <p className={cn("text-base text-muted-foreground", className)}>{text}</p>;

  return (
    <Button type="button" variant="ghost" size="xs" className="-ml-1 text-inherit" onClick={() => setOpen(true)} icon={<Languages />}>
      Μετάφραση
    </Button>
  );
};
