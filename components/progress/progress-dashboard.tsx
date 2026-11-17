"use client";

import { AudioLines, BookMarked, Download, Flame, GraduationCap, Languages, Layers, RotateCcw, Share2, Smile, Star, Trash2, Trophy, Upload, Volume2 } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { toast } from "sonner";

import { InstallButton } from "@/components/app-shell/install-app";
import { CONFIRM_DIALOG } from "@/components/confirm-dialog";
import { PdfBookLoader } from "@/components/pdf/pdf-book-loader";
import { VoicePicker } from "@/components/progress/voice-picker";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { UNITS } from "@/content";
import { useHydrated } from "@/hooks/use-hydrated";
import { applyBackup, currentSummary, describeSummary, exportBackup, readBackup, resetEverything, shareBackup, summarize } from "@/lib/backup";
import { masteryForUnits } from "@/lib/game/mastery";
import { todayKey } from "@/lib/game/text";
import { cn } from "@/lib/general/utils";
import { PDF_BOOK_IDS, PDF_BOOKS } from "@/lib/pdf/books";
import { useDialogStore } from "@/lib/stores/dialog-store";
import { computeStreak, useProgressStore } from "@/lib/stores/progress-store";
import { useSettingsStore } from "@/lib/stores/settings-store";

const GOALS = [30, 50, 80, 120];

const Tile = ({ icon, label, value, sub }: { icon: React.ReactNode; label: string; value: string; sub?: string }) => (
  <div className="rounded-3xl border-2 border-border bg-card p-4 shadow-[0_3px_0_0_var(--border)]">
    <div className="flex items-center gap-2 text-xs font-extrabold tracking-wide text-muted-foreground uppercase">
      {icon} {label}
    </div>
    <p className="mt-1 text-3xl font-extrabold tabular-nums">{value}</p>
    {sub && <p className="text-xs text-muted-foreground">{sub}</p>}
  </div>
);

const lastDays = (count: number): string[] =>
  Array.from({ length: count }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (count - 1 - index));
    return todayKey(date);
  });

interface SettingSwitchProps {
  id: string;
  icon: React.ReactNode;
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}

/** One on/off setting: an icon, what it does, and the switch. */
const SettingSwitch = ({ id, icon, label, checked, onChange }: SettingSwitchProps) => (
  <div className="flex items-center justify-between gap-3">
    <Label htmlFor={id} className="flex items-center gap-2 font-bold">
      <span className="[&_svg]:size-4" aria-hidden>
        {icon}
      </span>{" "}
      {label}
    </Label>
    <Switch id={id} checked={checked} onCheckedChange={onChange} />
  </div>
);

export const ProgressDashboard = () => {
  const hydrated = useHydrated();
  const openDialog = useDialogStore((state) => state.openDialog);
  const fileInput = useRef<HTMLInputElement>(null);

  const xp = useProgressStore((state) => state.xp);
  const xpByDay = useProgressStore((state) => state.xpByDay);
  const activeDays = useProgressStore((state) => state.activeDays);
  const dailyGoal = useProgressStore((state) => state.dailyGoal);
  const setDailyGoal = useProgressStore((state) => state.setDailyGoal);
  const cards = useProgressStore((state) => state.cards);
  const sessionsDone = useProgressStore((state) => state.sessionsDone);
  const savedWords = useProgressStore((state) => state.savedWords);
  const removeSavedWord = useProgressStore((state) => state.removeSavedWord);
  const mascot = useSettingsStore((state) => state.mascot);
  const sounds = useSettingsStore((state) => state.sounds);
  const setSounds = useSettingsStore((state) => state.setSounds);
  const lolaVoice = useSettingsStore((state) => state.lolaVoice);
  const setLolaVoice = useSettingsStore((state) => state.setLolaVoice);
  const setMascot = useSettingsStore((state) => state.setMascot);
  const showTranslations = useSettingsStore((state) => state.showTranslations);
  const setShowTranslations = useSettingsStore((state) => state.setShowTranslations);

  const streak = computeStreak(activeDays);
  const all = masteryForUnits({ unitIds: UNITS.map((unit) => unit.id), cards });
  const days = lastDays(14);
  const maxXp = Math.max(dailyGoal, ...days.map((day) => xpByDay[day] ?? 0));

  const handleImport = async (file: File | undefined) => {
    if (!file) return;
    try {
      const backup = await readBackup(file);
      const incoming = summarize(backup);
      const current = currentSummary();
      const apply = () => {
        applyBackup(backup);
        toast.success(`Φορτώθηκε αντίγραφο με ${describeSummary(incoming)}.`);
      };
      const isEmpty = current.xp === 0 && current.words === 0 && current.tasks === 0 && current.taught === 0;
      if (isEmpty) {
        apply();
        return;
      }
      openDialog(
        CONFIRM_DIALOG,
        {
          title: "Να φορτωθεί το αντίγραφο;",
          description: `Το αντίγραφο έχει ${describeSummary(incoming)}. Αυτή η συσκευή έχει τώρα ${describeSummary(current)}. Η φόρτωση θα αντικαταστήσει όσα έχεις τώρα.`,
          actionLabel: "Φόρτωση",
        },
        apply,
      );
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Δεν μπόρεσα να διαβάσω το αρχείο.");
    }
  };

  const handleShare = async () => {
    const outcome = await shareBackup();
    if (outcome === "downloaded") toast.success("Το αντίγραφο κατέβηκε ως αρχείο.");
  };

  const handleReset = () =>
    openDialog(
      CONFIRM_DIALOG,
      {
        title: "Διαγραφή όλης της προόδου;",
        description: "Θα σβηστούν οι πόντοι, οι λέξεις που έμαθες και οι εργασίες σου σε αυτή τη συσκευή. Δεν γίνεται αναίρεση.",
        actionLabel: "Διαγραφή όλων",
      },
      () => {
        resetEverything();
        toast("Η πρόοδος μηδενίστηκε.");
      },
    );

  if (!hydrated)
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-64" />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-28 rounded-3xl" />
          ))}
        </div>
      </div>
    );

  return (
    <div className="space-y-8">
      <header className="space-y-1">
        <h1 className="font-es text-4xl font-bold italic sm:text-5xl">Η πρόοδός μου</h1>
        <p className="max-w-2xl text-muted-foreground">Όλα αποθηκεύονται μόνο σε αυτή τη συσκευή. Κράτα ένα αντίγραφο ασφαλείας αν αλλάξεις κινητό ή υπολογιστή.</p>
      </header>

      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4" aria-label="Στατιστικά">
        <Tile icon={<Star className="size-4 fill-sun text-sun-edge" />} label="Πόντοι" value={String(xp)} sub={`${sessionsDone} γύροι`} />
        <Tile icon={<Flame className="size-4 text-primary" />} label="Σειρά" value={`${streak.current}`} sub={`Ρεκόρ: ${streak.longest} ημέρες`} />
        <Tile icon={<GraduationCap className="size-4 text-success" />} label="Λέξεις που ξέρεις" value={`${all.known + all.mastered}`} sub={`από ${all.total}`} />
        <Tile icon={<Layers className="size-4 text-sky" />} label="Για επανάληψη" value={String(all.due)} sub="σήμερα" />
      </section>

      <section className="space-y-3 rounded-3xl border-2 border-border bg-card p-5 shadow-[0_4px_0_0_var(--border)]" aria-label="Πόντοι ανά ημέρα">
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-extrabold">Τις τελευταίες 14 ημέρες</h2>
          <span className="text-xs font-bold text-muted-foreground">Στόχος: {dailyGoal} πόντοι</span>
        </div>
        <div className="flex h-36 items-end gap-1.5">
          {days.map((day) => {
            const value = xpByDay[day] ?? 0;
            const reached = value >= dailyGoal;
            return (
              <div key={day} className="flex h-full flex-1 flex-col items-center justify-end gap-1" title={`${day}: ${value} πόντοι`}>
                <div
                  className={cn("w-full rounded-t-lg", reached ? "bg-success" : "bg-primary/70", value === 0 && "bg-muted")}
                  style={{ height: `${Math.max(value === 0 ? 4 : 10, (value / maxXp) * 100)}%` }}
                />
                <span className="text-[0.6rem] font-bold text-muted-foreground tabular-nums">{day.slice(8)}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="space-y-3" aria-label="Πρόοδος ανά κεφάλαιο">
        <h2 className="text-lg font-extrabold">Ανά κεφάλαιο</h2>
        <ul className="space-y-2">
          {UNITS.map((unit) => {
            const mastery = masteryForUnits({ unitIds: [unit.id], cards });
            const part = (count: number): string => `${mastery.total ? (count / mastery.total) * 100 : 0}%`;
            return (
              <li key={unit.id}>
                <Link
                  href={`/units/${unit.id}`}
                  className="flex items-center gap-3 rounded-2xl border-2 border-border bg-card px-3 py-2.5 transition-colors hover:bg-muted"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl font-es text-xl font-bold text-white" style={{ background: unit.color }}>
                    {unit.id}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex justify-between gap-2 text-sm font-bold">
                      <span className="truncate">{unit.titleEs}</span>
                      <span className="tabular-nums">{mastery.percent}%</span>
                    </span>
                    <span className="mt-1 flex h-2.5 overflow-hidden rounded-full bg-muted">
                      <span className="bg-success" style={{ width: part(mastery.mastered) }} />
                      <span className="bg-success/70" style={{ width: part(mastery.known) }} />
                      <span className="bg-sun" style={{ width: part(mastery.learning) }} />
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><i className="size-2.5 rounded-full bg-success" /> Κατακτημένες</span>
          <span className="flex items-center gap-1.5"><i className="size-2.5 rounded-full bg-success/70" /> Γνωστές</span>
          <span className="flex items-center gap-1.5"><i className="size-2.5 rounded-full bg-sun" /> Τις μαθαίνεις</span>
        </p>
      </section>

      {savedWords.length > 0 && (
        <section className="space-y-3" aria-label="Οι λέξεις μου">
          <h2 className="flex items-center justify-between text-lg font-extrabold">
            Οι λέξεις μου
            <Button asChild variant="chunky" size="sm">
              <Link href="/play/flashcards?saved=1&back=%2Fprogress">
                <Layers /> Φλας κάρτες
              </Link>
            </Button>
          </h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {savedWords.map((word) => (
              <li key={word.id} className="flex items-center gap-3 rounded-2xl border-2 border-border bg-card px-3 py-2.5">
                <div className="min-w-0 flex-1">
                  <p className="font-es text-xl font-semibold">{word.es}</p>
                  <p className="truncate text-sm text-muted-foreground">{word.el}</p>
                </div>
                <Button type="button" variant="ghost" size="icon-sm" aria-label={`Διαγραφή ${word.es}`} onClick={() => removeSavedWord(word.id)}>
                  <Trash2 />
                </Button>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="space-y-4 rounded-3xl border-2 border-border bg-card p-5 shadow-[0_4px_0_0_var(--border)]" aria-label="Τα βιβλία μου">
        <div>
          <h2 className="flex items-center gap-2 text-lg font-extrabold">
            <BookMarked className="size-5 text-primary" aria-hidden /> Τα βιβλία μου (PDF)
          </h2>
          <p className="text-sm text-muted-foreground">
            Φόρτωσε τα PDF των δύο βιβλίων σου και κάθε λέξη, θέμα και εργασία θα έχει κουμπί «Δες στο βιβλίο» που ανοίγει την πραγματική σελίδα. Τα αρχεία μένουν μόνο σε αυτή τη συσκευή και δεν ανεβαίνουν πουθενά.
          </p>
        </div>
        {PDF_BOOK_IDS.map((book) => (
          <div key={book} className="space-y-1 rounded-2xl bg-muted p-3">
            <p className="font-es text-lg font-bold">{PDF_BOOKS[book].title}</p>
            <PdfBookLoader book={book} />
          </div>
        ))}
      </section>

      <section className="space-y-4 rounded-3xl border-2 border-border bg-card p-5 shadow-[0_4px_0_0_var(--border)]" aria-label="Μεταφορά προόδου">
        <div>
          <h2 className="flex items-center gap-2 text-lg font-extrabold">
            <Download className="size-5 text-primary" aria-hidden /> Μεταφορά προόδου (κινητό και υπολογιστής)
          </h2>
          <p className="text-sm text-muted-foreground">
            Η πρόοδος μένει στη συσκευή που παίζεις. Για να τη φέρεις αλλού, φτιάξε ένα αντίγραφο και φόρτωσέ το στην άλλη συσκευή.
          </p>
        </div>
        <ol className="space-y-1.5 text-sm">
          <li>
            <span className="font-extrabold">1.</span> Στη συσκευή που έχει την πρόοδο πάτα «Στείλε το αντίγραφο». Στο κινητό ανοίγει το μενού κοινοποίησης (Viber, Telegram, Drive, email).
          </li>
          <li>
            <span className="font-extrabold">2.</span> Στην άλλη συσκευή πάτα «Φόρτωση αντιγράφου» και διάλεξε το αρχείο <span className="font-es font-bold">vamos-backup-…json</span>.
          </li>
        </ol>
        <div className="flex flex-wrap gap-2">
          <Button type="button" variant="chunky" onClick={handleShare} icon={<Share2 />}>
            Στείλε το αντίγραφο
          </Button>
          <Button type="button" variant="chunky-outline" onClick={exportBackup} icon={<Download />}>
            Κατέβασε αρχείο
          </Button>
          <Button type="button" variant="chunky-outline" onClick={() => fileInput.current?.click()} icon={<Upload />}>
            Φόρτωση αντιγράφου
          </Button>
          <input
            ref={fileInput}
            type="file"
            accept="application/json,.json"
            className="hidden"
            onChange={(event) => {
              handleImport(event.target.files?.[0]);
              event.target.value = "";
            }}
          />
        </div>
        <p className="text-xs text-muted-foreground">Το αντίγραφο έχει πόντους, λέξεις που έμαθες, εργασίες, τικ της ύλης και ρυθμίσεις. Τα PDF των βιβλίων δεν περιλαμβάνονται, τα φορτώνεις ξεχωριστά σε κάθε συσκευή.</p>
      </section>

      <section className="space-y-5 rounded-3xl border-2 border-border bg-card p-5 shadow-[0_4px_0_0_var(--border)]" aria-label="Ρυθμίσεις">
        <h2 className="text-lg font-extrabold">Ρυθμίσεις</h2>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <Label htmlFor="goal" className="flex items-center gap-2 font-bold">
            <Trophy className="size-4" aria-hidden /> Ημερήσιος στόχος
          </Label>
          <Select value={String(dailyGoal)} onValueChange={(value) => setDailyGoal(Number(value))}>
            <SelectTrigger id="goal" className="w-44">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {GOALS.map((goal) => (
                <SelectItem key={goal} value={String(goal)}>
                  {goal} πόντοι
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <SettingSwitch id="mascot" icon={<Smile />} label="Η Λόλα μένει στην οθόνη και σχολιάζει τις απαντήσεις (και με μαλώνει)" checked={mascot} onChange={setMascot} />

        <SettingSwitch id="sounds" icon={<Volume2 />} label="Ήχος όταν απαντάς σωστά" checked={sounds} onChange={setSounds} />

        <SettingSwitch id="lola-voice" icon={<AudioLines />} label="Η Λόλα μιλάει φωναχτά (αν το κινητό έχει ισπανική φωνή)" checked={lolaVoice} onChange={setLolaVoice} />

        <VoicePicker />

        <InstallButton variant="chunky-outline" />

        <SettingSwitch id="translations" icon={<Languages />} label="Να φαίνονται πάντα οι μεταφράσεις (αλλιώς τις βλέπεις με κουμπί)" checked={showTranslations} onChange={setShowTranslations} />

        <div className="flex flex-wrap gap-2 border-t-2 border-border pt-5">
          <Button type="button" variant="ghost" className="text-destructive hover:text-destructive" onClick={handleReset} icon={<RotateCcw />}>
            Μηδένισε την πρόοδο
          </Button>
        </div>
      </section>
    </div>
  );
};
