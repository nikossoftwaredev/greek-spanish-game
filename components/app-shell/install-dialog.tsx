"use client";

import { MoreVertical, PlusSquare, Share } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useDialogStore } from "@/lib/stores/dialog-store";

export const INSTALL_DIALOG = "install-app";

interface InstallData {
  ios?: boolean;
}

const STEPS_IOS = [
  { icon: Share, text: "Πάτα το κουμπί «Κοινοποίηση» του Safari (το τετράγωνο με το βελάκι προς τα πάνω)." },
  { icon: PlusSquare, text: "Διάλεξε «Προσθήκη στην οθόνη Αφετηρίας»." },
  { icon: PlusSquare, text: "Πάτα «Προσθήκη». Το Vamos μπαίνει στην αρχική οθόνη και ανοίγει σαν κανονική εφαρμογή." },
];

const STEPS_OTHER = [
  { icon: MoreVertical, text: "Πάτα το μενού του browser (οι τρεις τελείες πάνω δεξιά)." },
  { icon: PlusSquare, text: "Διάλεξε «Εγκατάσταση εφαρμογής» ή «Προσθήκη στην αρχική οθόνη»." },
  { icon: PlusSquare, text: "Επιβεβαίωσε. Το Vamos μπαίνει στην αρχική οθόνη και ανοίγει σαν κανονική εφαρμογή." },
];

/** How to put the app on the home screen, for browsers that cannot do it with one tap. */
export const InstallDialog = () => {
  const currentDialog = useDialogStore((state) => state.currentDialog);
  const data = useDialogStore((state) => state.dialogData) as InstallData | null;
  const closeDialog = useDialogStore((state) => state.closeDialog);
  const steps = data?.ios ? STEPS_IOS : STEPS_OTHER;

  return (
    <Dialog
      open={currentDialog === INSTALL_DIALOG}
      onOpenChange={(isOpen) => {
        if (!isOpen) closeDialog(INSTALL_DIALOG);
      }}
    >
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Βάλε το Vamos στο κινητό σου</DialogTitle>
          <DialogDescription>Τρία βήματα και η εφαρμογή ανοίγει πλήρους οθόνης, με σταθερά τα κουμπιά.</DialogDescription>
        </DialogHeader>
        <ol className="space-y-3">
          {steps.map((step, index) => (
            <li key={step.text} className="flex items-start gap-3 text-sm">
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-primary text-xs font-extrabold text-primary-foreground">{index + 1}</span>
              <span className="pt-0.5 leading-snug">{step.text}</span>
            </li>
          ))}
        </ol>
        <Button type="button" variant="chunky" onClick={() => closeDialog(INSTALL_DIALOG)}>
          Κατάλαβα
        </Button>
      </DialogContent>
    </Dialog>
  );
};
