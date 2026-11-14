import { BookOpen, BookText, ClipboardList, Gamepad2, Home, Languages, ListChecks, type LucideIcon, Trophy } from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  /** Shown in the mobile bottom bar. */
  mobile: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Αρχική", icon: Home, mobile: true },
  { href: "/units", label: "Aula", icon: BookOpen, mobile: true },
  { href: "/gramatica", label: "Gramática", icon: BookText, mobile: true },
  { href: "/grammar", label: "Ύλη", icon: ListChecks, mobile: false },
  { href: "/practice", label: "Παιχνίδια", icon: Gamepad2, mobile: true },
  { href: "/homework", label: "Εργασίες", icon: ClipboardList, mobile: true },
  { href: "/verbs", label: "Ρήματα", icon: Languages, mobile: false },
  { href: "/progress", label: "Πρόοδος", icon: Trophy, mobile: false },
];

export const isActivePath = ({ pathname, href }: { pathname: string; href: string }): boolean => {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
};
