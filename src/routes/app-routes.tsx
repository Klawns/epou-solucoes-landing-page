import LandingPage from "@/app/features/landing-page";
import NotFoundPage from "@/app/features/not-found";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/**
 * Defines the main routing structure for the application.
 *
 * This component uses `react-router-dom` to set up the application's routes.
 * It maps the root path ("/") to the `LandingPage` component and includes a
 * catch-all route ("*") that directs any unmatched paths to the `NotFoundPage`.
 *
 * @returns {JSX.Element} The rendered routes for the application.
 */
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
