"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import {
  refreshSessionClock,
  isVisited,
  markVisited,
} from "@/utils/preloaderSession";

export function usePreloaderGate(localState: string) {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  const isTranslating = localState === "Translating State";

  useEffect(() => {
    if (typeof window === "undefined" || !pathname) return;
    refreshSessionClock();

    if (isTranslating) {
      setShow(true);
      return;
    }

    setShow(!isVisited(pathname));
  }, [pathname, isTranslating]);

  const onFinished = useCallback(() => {
    if (typeof window === "undefined" || !pathname) return;
    markVisited(pathname);
    refreshSessionClock();
  }, [pathname]);

  return useMemo(
    () => ({ showPreloader: show, onFinished }),
    [show, onFinished]
  );
}
