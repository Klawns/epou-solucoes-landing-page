import Header from "../../components/layout/header";
import Hero from "./components/hero/hero";
import React, { Suspense } from "react";
import Reveal from "@/app/components/ui/reveal";

import GalerySkeleton from "./components/galery/galery-skeleton";
import LocationMapSkeleton from "./components/locationMap/location-map-skeleton";
import OfferedServicesSkeleton from "./components/offeredServices/offered-services-skeleton";
import TeamSkeleton from "./components/team/team-skeleton";
import RepairEstimateSkeleton from "./components/repairEstimate/repair-estimate-skeleton";
import FAQSkeleton from "./components/FAQ/faq-skeleton";
import ContactSkeleton from "./components/contact/contact-skeleton";
import FooterSkeleton from "../../components/layout/footer-skeleton";

/**
 * The main component for the landing page.
 *
 * This component assembles all the different sections of the landing page,
 * including the header, hero section, offered services, team, gallery,
 * location map, repair estimate, contact form, testimonials, and footer.
 *
 * @returns {JSX.Element} The rendered landing page.
 */
export default function Index() {
  // Componentes "Abaixo da dobra" carregados sob demanda
  const OfferedServices = React.lazy(
    () => import("./components/offeredServices/offered-services"),
  );
  const Team = React.lazy(
    () => import("@/app/features/landing-page/components/team/team"),
  );
  const Galery = React.lazy(
    () => import("@/app/features/landing-page/components/galery/galery"),
  );
  const LocationMap = React.lazy(
    () => import("./components/locationMap/location-map"),
  );
  const RepairEstimate = React.lazy(
    () => import("./components/repairEstimate/repair-estimate"),
  );
  const FAQ = React.lazy(() => import("./components/FAQ/FAQ"));
  const Contact = React.lazy(() => import("./components/contact/contact"));
  const Footer = React.lazy(() => import("../../components/layout/footer"));

  return (
    <main>
      <Header />
      <Reveal>
        <Hero />
      </Reveal>

      <Suspense fallback={<OfferedServicesSkeleton />}>
        <Reveal>
          <OfferedServices />
        </Reveal>
      </Suspense>

      <Suspense fallback={<TeamSkeleton />}>
        <Reveal>
          <Team />
        </Reveal>
      </Suspense>

      <Suspense fallback={<GalerySkeleton />}>
        <Reveal>
          <Galery />
        </Reveal>
      </Suspense>

      <Suspense fallback={<LocationMapSkeleton />}>
        <Reveal>
          <LocationMap />
        </Reveal>
      </Suspense>

      <Suspense fallback={<RepairEstimateSkeleton />}>
        <Reveal>
          <RepairEstimate />
        </Reveal>
      </Suspense>

      <Suspense fallback={<FAQSkeleton />}>
        <Reveal>
          <FAQ />
        </Reveal>
      </Suspense>
      <Suspense fallback={<ContactSkeleton />}>
        <Reveal>
          <Contact />
        </Reveal>
      </Suspense>
      <Suspense fallback={<FooterSkeleton />}>
        <Reveal>
          <Footer />
        </Reveal>
      </Suspense>
    </main>
  );
}
