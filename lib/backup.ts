import { type HomeworkTask, useHomeworkStore } from "@/lib/stores/homework-store";
import { type ProgressStore, snapshotProgress, useProgressStore } from "@/lib/stores/progress-store";
import { useSettingsStore } from "@/lib/stores/settings-store";

const BACKUP_VERSION = 1;

export interface BackupFile {
  app: "vamos";
  version: number;
  exportedAt: string;
  progress: ReturnType<typeof snapshotProgress>;
  homework: HomeworkTask[];
  settings: { mascot?: boolean; showTranslations?: boolean; cardDirection?: "es-el" | "el-es" };
}

export interface BackupSummary {
  xp: number;
  words: number;
  taught: number;
  exercises: number;
  tasks: number;
}

const filename = (): string => `vamos-backup-${new Date().toISOString().slice(0, 10)}.json`;

const currentBackup = (): BackupFile => {
  const settings = useSettingsStore.getState();
  return {
    app: "vamos",
    version: BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    progress: snapshotProgress(useProgressStore.getState() as ProgressStore),
    homework: useHomeworkStore.getState().tasks,
    settings: { mascot: settings.mascot, showTranslations: settings.showTranslations, cardDirection: settings.cardDirection },
  };
};

export const summarize = (backup: BackupFile): BackupSummary => ({
  xp: backup.progress.xp ?? 0,
  words: Object.keys(backup.progress.cards ?? {}).length,
  taught: (backup.progress.taughtLessons ?? []).length,
  exercises: (backup.progress.doneExercises ?? []).length,
  tasks: backup.homework.length,
});

const plural = (count: number, [one, many]: [string, string]): string => `${count} ${count === 1 ? one : many}`;

/** "32 πόντους, 4 λέξεις και 1 εργασία", with the right singular or plural for each count. */
export const describeSummary = (summary: BackupSummary): string =>
  `${plural(summary.xp, ["πόντο", "πόντους"])}, ${plural(summary.words, ["λέξη", "λέξεις"])} και ${plural(summary.tasks, ["εργασία", "εργασίες"])}`;

/** What this browser holds right now, to compare with a backup before replacing it. */
export const currentSummary = (): BackupSummary => summarize(currentBackup());

const toFile = (): File => new File([JSON.stringify(currentBackup(), null, 2)], filename(), { type: "application/json" });

const download = (file: File): void => {
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = file.name;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};

/** Everything the learner has stored in this browser, as a downloadable JSON file. */
export const exportBackup = (): void => download(toFile());

/**
 * Hands the backup to the phone's share sheet (Viber, Telegram, Drive, mail...) when the browser can.
 * Everywhere else it downloads the file. Returns how it went.
 */
export const shareBackup = async (): Promise<"shared" | "downloaded" | "cancelled"> => {
  const file = toFile();
  if (typeof navigator.canShare === "function" && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({ files: [file], title: "Vamos: αντίγραφο προόδου" });
      return "shared";
    } catch (error) {
      if ((error as { name?: string } | null)?.name === "AbortError") return "cancelled";
    }
  }
  download(file);
  return "downloaded";
};

const isBackup = (value: unknown): value is BackupFile =>
  typeof value === "object" &&
  value !== null &&
  (value as BackupFile).app === "vamos" &&
  typeof (value as BackupFile).progress === "object" &&
  Array.isArray((value as BackupFile).homework);

/** Reads and checks a backup file without applying it. Throws a Greek message when it is not one. */
export const readBackup = async (file: File): Promise<BackupFile> => {
  let parsed: unknown;
  try {
    parsed = JSON.parse(await file.text());
  } catch {
    throw new Error("Το αρχείο δεν είναι αντίγραφο ασφαλείας της εφαρμογής.");
  }
  if (!isBackup(parsed)) throw new Error("Το αρχείο δεν είναι αντίγραφο ασφαλείας της εφαρμογής.");
  if (parsed.version > BACKUP_VERSION) throw new Error("Το αντίγραφο είναι από νεότερη έκδοση της εφαρμογής. Άνοιξε την εφαρμογή στη νεότερη έκδοση και δοκίμασε ξανά.");
  return parsed;
};

/** Replaces the stored progress, homework and settings with the backup. */
export const applyBackup = (backup: BackupFile): void => {
  useProgressStore.getState().importData(backup.progress);
  useHomeworkStore.getState().replaceAll(backup.homework);
  if (backup.settings) {
    useSettingsStore.getState().setMascot(backup.settings.mascot !== false);
    useSettingsStore.getState().setShowTranslations(backup.settings.showTranslations === true);
    useSettingsStore.getState().setCardDirection(backup.settings.cardDirection === "es-el" ? "es-el" : "el-es");
  }
};

export const resetEverything = (): void => {
  useProgressStore.getState().resetAll();
  useHomeworkStore.getState().replaceAll([]);
};
