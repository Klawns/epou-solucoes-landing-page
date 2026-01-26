import { OfferedServices as ServicesData } from "@/app/constants/offeredServices";
import OfferedServiceCard from "./components/offeredServiceCard";

/**
 * Renders the section of the landing page that displays the services offered.
 *
 * This component fetches service data from the `OfferedServices` constant and
 * maps over it to render an `OfferedServiceCard` for each service. It provides
 * a clear and organized overview of what the company does.
 *
 * @returns {JSX.Element} The rendered offered services section.
 */
export default function OfferedServices() {
  return (
    <section id="serviços" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-background rounded-full text-sm font-medium text-muted-foreground mb-4">
            O que fazemos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Consertamos e cuidamos dos seus dispositivos com peças de qualidade
            e mão de obra especializada.
          </p>
        </div>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ServicesData.map((service) => (
            <OfferedServiceCard key={service.id} {...service} />
          ))}
        </ul>
      </div>
    </section>
  );
}
