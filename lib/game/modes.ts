import type { SessionMode } from "@/lib/game/types";

export const MODE_TITLES: Record<SessionMode, string> = {
  mix: "Μάθημα",
  flashcards: "Φλας κάρτες",
  match: "Αντιστοίχιση",
  type: "Γράψε τη λέξη",
  verbs: "Κλίση ρημάτων",
  grammar: "Γραμματική",
  review: "Επανάληψη",
  learn: "Μάθε βήμα βήμα",
};

export const SESSION_MODES = Object.keys(MODE_TITLES) as SessionMode[];
