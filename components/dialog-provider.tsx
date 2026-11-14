"use client";

import { ConfirmDialog } from "@/components/confirm-dialog";
import { ClassNotesDialog } from "@/components/homework/class-notes-dialog";
import { HomeworkDialog } from "@/components/homework/homework-dialog";
import { AskLolaDialog } from "@/components/mascot/ask-lola-dialog";
import { PdfViewerDialog } from "@/components/pdf/pdf-viewer-dialog";
import { WordLookupDialog } from "@/components/word-lookup-dialog";

export const DialogProvider = () => {
  return (
    <>
      <ConfirmDialog />
      <WordLookupDialog />
      <HomeworkDialog />
      <ClassNotesDialog />
      <PdfViewerDialog />
      <AskLolaDialog />
    </>
  );
};
