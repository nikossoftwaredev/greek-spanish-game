import { useEffect } from "react";

interface EnterKeyParams {
  enabled: boolean;
  /** The current exercise has been answered. */
  checked: boolean;
  /** There is an answer waiting to be checked. */
  canCheck: boolean;
  onCheck: () => void;
  onContinue: () => void;
}

/** Enter checks the answer (when there is one) and, once it is checked, moves on to the next exercise. */
export const useEnterKey = ({ enabled, checked, canCheck, onCheck, onContinue }: EnterKeyParams) => {
  useEffect(() => {
    if (!enabled) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Enter") return;
      const target = event.target as HTMLElement | null;
      if (!checked && target?.tagName === "BUTTON") return;
      event.preventDefault();
      if (checked) onContinue();
      else if (canCheck) onCheck();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });
};
