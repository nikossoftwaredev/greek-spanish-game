"use client";

import { FileText } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { PdfBook } from "@/lib/pdf/books";
import { useDialogStore } from "@/lib/stores/dialog-store";

import { PDF_VIEWER_DIALOG } from "./pdf-viewer-dialog";

interface SourceLinkProps {
  book: PdfBook;
  /** PDF page (1 is the cover). For an Aula page printed as N, pass `aulaPdfPage(N)`. */
  page: number;
  label?: string;
  variant?: "chunky" | "chunky-outline" | "ghost" | "secondary";
  size?: "sm" | "xs" | "default";
}

/** A button that opens the real page of the course book, from the learner's own PDF. */
export const SourceLink = ({ book, page, label = "Δες στο βιβλίο", variant = "chunky-outline", size = "sm" }: SourceLinkProps) => {
  const openDialog = useDialogStore((state) => state.openDialog);

  return (
    <Button type="button" variant={variant} size={size} onClick={() => openDialog(PDF_VIEWER_DIALOG, { book, page })} icon={<FileText />}>
      {label}
    </Button>
  );
};
