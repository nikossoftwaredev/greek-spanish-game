import { type ClassValue,clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

/** Keeps `value` between `min` and `max`. */
export const clamp = ({ value, min, max }: { value: number; min: number; max: number }): number => Math.min(Math.max(value, min), max);
