"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/general/utils";

import { isActivePath, NAV_ITEMS } from "./nav-items";

const MOBILE_ITEMS = NAV_ITEMS.filter((item) => item.mobile);

export const BottomNav = () => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Κύρια πλοήγηση"
      className="safe-bottom fixed inset-x-0 bottom-0 z-40 border-t-2 border-border bg-card/95 backdrop-blur-md md:hidden"
    >
      <ul className="mx-auto grid max-w-lg grid-cols-5">
        {MOBILE_ITEMS.map((item) => {
          const active = isActivePath({ pathname, href: item.href });
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex flex-col items-center gap-0.5 px-1 pt-2 pb-2.5 text-[0.68rem] font-bold transition-colors",
                  active ? "text-primary" : "text-muted-foreground",
                )}
              >
                <span
                  className={cn(
                    "grid h-7 w-12 place-items-center rounded-full transition-colors",
                    active && "bg-primary/14",
                  )}
                >
                  <item.icon className="size-5" aria-hidden />
                </span>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
