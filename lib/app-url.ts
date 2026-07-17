// Base URL for the dApp (app.prigeex.com). The marketing site has no dApp
// routes of its own, so every "Launch App" / nav link points here.
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.prigeex.com";

export const appPath = (path: string) => `${APP_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
