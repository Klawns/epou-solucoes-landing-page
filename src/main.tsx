import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "@/routes/app-routes";

/**
 * The main entry point for the React application.
 *
 * This file uses `createRoot` from `react-dom/client` to render the main
 * `AppRoutes` component into the DOM element with the ID "root". The application
 * is wrapped in `StrictMode` to enable development-time checks and warnings.
 */
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
);

// Register service worker if available and in production
// if (typeof window !== "undefined" && "serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     if (import.meta.env.PROD) {
//       navigator.serviceWorker.register("/sw.js").catch(() => {});
//     }
//   });
// }
