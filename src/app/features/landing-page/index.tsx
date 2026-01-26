import Header from "../../components/layout/header";
import Hero from "./components/hero/hero";
import React, { Suspense } from "react";

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
      {/* Carregamento Imediato (Crucial para SEO e UX inicial) */}
      <Header />
      <Hero />

      {/* Carregamento Sob Demanda (Melhora a performance inicial) */}
      <Suspense fallback={<OfferedServicesSkeleton />}>
        <OfferedServices />
      </Suspense>

      <Suspense fallback={<TeamSkeleton />}>
        <Team />
      </Suspense>

      <Suspense fallback={<GalerySkeleton />}>
        <Galery />
      </Suspense>

      <Suspense fallback={<LocationMapSkeleton />}>
        <LocationMap />
      </Suspense>

      <Suspense fallback={<RepairEstimateSkeleton />}>
        <RepairEstimate />
      </Suspense>

      <Suspense fallback={<FAQSkeleton />}>
        <FAQ />
      </Suspense>
      {/* <Testimonials /> */}
      <Suspense fallback={<ContactSkeleton />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<FooterSkeleton />}>
        <Footer />
      </Suspense>
    </main>
  );
}
