import type { MetadataRoute } from "next";

/** Lets phones install the app to the home screen and open it full screen, like an app. */
const manifest = (): MetadataRoute.Manifest => ({
  name: "Vamos · Ισπανικά για την τάξη",
  short_name: "Vamos",
  description: "Παιχνίδια, φλας κάρτες, ρήματα και εργασίες για τα ισπανικά, πάνω στα δύο βιβλία της τάξης.",
  start_url: "/",
  display: "standalone",
  orientation: "portrait",
  lang: "el",
  background_color: "#f8f3e8",
  theme_color: "#e5481f",
  icons: [
    { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    { src: "/icons/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
  ],
});

export default manifest;
