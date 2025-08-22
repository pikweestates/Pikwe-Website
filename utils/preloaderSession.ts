export const SESSION_TTL_MS = 2 * 60 * 60 * 1000; // 2 hours
const VISITED_KEY = "preloaderVisitedRoutes";
const LAST_ACTIVE_KEY = "preloaderLastActive";

export function normalizePath(pathname: string) {
  // strip leading locale for consistency: /en/xyz -> /xyz
  return pathname.replace(/^\/(en|fr)(?=\/|$)/, "");
}

export function refreshSessionClock() {
  if (typeof window === "undefined") return;
  const now = Date.now();
  const last = Number(localStorage.getItem(LAST_ACTIVE_KEY) || 0);
  if (!last || now - last > SESSION_TTL_MS) {
    sessionStorage.removeItem(VISITED_KEY);
  }
  localStorage.setItem(LAST_ACTIVE_KEY, String(now));
}

export function getVisited(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(sessionStorage.getItem(VISITED_KEY) || "[]");
  } catch {
    return [];
  }
}

export function isVisited(pathname: string): boolean {
  const key = normalizePath(pathname);
  return getVisited().includes(key);
}

export function markVisited(pathname: string) {
  if (typeof window === "undefined") return;
  const key = normalizePath(pathname);
  const list = getVisited();
  if (!list.includes(key)) {
    list.push(key);
    sessionStorage.setItem(VISITED_KEY, JSON.stringify(list));
  }
}
