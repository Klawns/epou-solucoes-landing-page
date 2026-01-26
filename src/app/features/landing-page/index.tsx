import Contact from "./components/contact/contact";
import RepairEstimate from "./components/repairEstimate/repair-estimate";
import Footer from "../../components/layout/footer";
import Galery from "@/app/features/landing-page/components/galery/galery";
import Header from "../../components/layout/header";
import Hero from "./components/hero/hero";
import LocationMap from "./components/locationMap/location-map";
import OfferedServices from "./components/offeredServices/offered-services";
import Team from "@/app/features/landing-page/components/team/team";
import Testimonials from "./components/testemonials/testimonials";
import FAQ from "./components/FAQ/FAQ";

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
  return (
    <main>
      <Header />
      <Hero />
      <OfferedServices />
      <Team />
      <Galery />
      <LocationMap />
      <RepairEstimate />
      <FAQ /> 
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
