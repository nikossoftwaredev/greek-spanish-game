import { BookOpen, type LucideIcon, PencilLine, Repeat2, Sparkles, SpellCheck, Type } from "lucide-react";

import type { SessionMode } from "@/lib/game/types";
import type { HomeworkKind } from "@/lib/stores/homework-store";

export interface HomeworkKindInfo {
  value: HomeworkKind;
  label: string;
  hint: string;
  icon: LucideIcon;
  /** The practice mode that helps with this kind of task. */
  mode: SessionMode;
}

export const HOMEWORK_KINDS: HomeworkKindInfo[] = [
  { value: "read", label: "Διάβασμα", hint: "π.χ. «Διαβάστε το κεφάλαιο 3»", icon: BookOpen, mode: "mix" },
  { value: "exercise", label: "Άσκηση", hint: "π.χ. «Άσκηση 5, σελίδα 31»", icon: PencilLine, mode: "mix" },
  { value: "vocab", label: "Λεξιλόγιο", hint: "π.χ. «Μάθετε τα επαγγέλματα»", icon: Type, mode: "flashcards" },
  { value: "grammar", label: "Γραμματική", hint: "π.χ. «Ήμουν, είμαι: ser και estar»", icon: SpellCheck, mode: "mix" },
  { value: "verbs", label: "Ρήματα", hint: "π.χ. «Κλίση του tener»", icon: Repeat2, mode: "verbs" },
  { value: "other", label: "Άλλο", hint: "Ό,τι άλλο ζήτησε η καθηγήτρια", icon: Sparkles, mode: "mix" },
];

export const HOMEWORK_KIND_BY_VALUE = new Map(HOMEWORK_KINDS.map((kind) => [kind.value, kind]));
