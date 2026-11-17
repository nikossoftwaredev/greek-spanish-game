"use client";

import { Play } from "lucide-react";
import { useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useSettingsStore } from "@/lib/stores/settings-store";
import { describeVoice, spanishVoiceKey, spanishVoices, speakAsLola, subscribeVoices, voiceAvailable } from "@/lib/voice";

/** The value of the "let the app choose" option, since a Select needs a string. */
const AUTO = "auto";

const SAMPLE = "¡Hola, mi amor! ¿Qué tal estás? Hoy vamos a aprender muchas palabras.";

/**
 * Lets the learner choose which of the device's Spanish voices Lola uses, and hear it. Voice names
 * and genders differ from phone to phone, so this is the way to be sure she sounds like a woman.
 */
export const VoicePicker = () => {
  const chosen = useSettingsStore((state) => state.lolaVoiceName);
  const setChosen = useSettingsStore((state) => state.setLolaVoiceName);
  const key = useSyncExternalStore(subscribeVoices, spanishVoiceKey, () => "");
  const voices = key ? spanishVoices() : [];

  if (voices.length === 0) {
    return (
      <p className="rounded-2xl bg-muted px-4 py-3 text-sm text-muted-foreground">
        Αυτή η συσκευή δεν έχει ισπανική φωνή, γι&apos; αυτό η Λόλα δεν μιλάει. Στον Microsoft Edge (Windows ή Android) υπάρχουν δωρεάν φυσικές φωνές, και στο Chrome του κινητού η «Spanish (United States)».
      </p>
    );
  }

  const value = chosen && voices.some((voice) => voice.name === chosen) ? chosen : AUTO;
  const noWoman = value === AUTO && !voiceAvailable();

  return (
    <div className="space-y-2">
      <Label htmlFor="lola-voice-name" className="font-bold">
        Φωνή της Λόλας
      </Label>
      <div className="flex flex-wrap items-center gap-2">
        <Select value={value} onValueChange={(next) => setChosen(next === AUTO ? null : next)}>
          <SelectTrigger id="lola-voice-name" className="min-w-0 flex-1 sm:max-w-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={AUTO}>Αυτόματα (γυναικεία, λατινοαμερικάνικη)</SelectItem>
            {voices.map((voice) => (
              <SelectItem key={voice.name} value={voice.name}>
                {describeVoice(voice)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button type="button" variant="chunky-outline" size="sm" onClick={() => speakAsLola({ text: SAMPLE, mood: "happy" })} icon={<Play />}>
          Άκουσέ την
        </Button>
      </div>
      {noWoman && <p className="text-sm font-bold text-destructive">Η συσκευή δεν έχει γυναικεία ισπανική φωνή που να αναγνωρίζω, οπότε αυτόματα η Λόλα δεν μιλάει. Διάλεξε μία από τη λίστα.</p>}
      <p className="text-xs text-muted-foreground">
        Αν ακούγεται άντρας, διάλεξε άλλη φωνή. Ψάξε όνομα γυναίκας και «Colombia», «México» ή «United States».
      </p>
    </div>
  );
};
