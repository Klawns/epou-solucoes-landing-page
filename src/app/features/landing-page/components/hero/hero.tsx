import { Button } from "@/app/components/ui/button";
import { ArrowDown } from "lucide-react";
import AppleLogo from "@/app/assets/logos/apple.svg";

/**
 * Renders the main hero section of the landing page.
 *
 * This component serves as the first impression for visitors, featuring a
 * prominent headline, a brief description of the company's services, and
 * call-to-action buttons to guide users to other sections of the page. It
 * also includes a subtle grid background and an animated "scroll down" arrow
 * to encourage exploration.
 *
 * @returns {JSX.Element} The rendered hero section.
 */
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#F5F5F5_1px,transparent_1px),linear-gradient(to_bottom,#F5F5F5_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="animate-fade-up inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-muted-foreground mb-8">
            Assistência Técnica Especializada
          </span>

          <h1 className="animate-fade-up-delay-1 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance flex items-center justify-center gap-4">
            Épou Soluções
            <img
              src={AppleLogo}
              alt="Apple Logo"
              className="h-16 w-16 md:h-20 md:w-20"
            />
          </h1>

          <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance">
            Especialistas em manutenção de celulares, iPads, MacBooks e
            dispositivos Apple. Conserto rápido, qualidade garantida e
            atendimento de excelência.
          </p>

          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" asChild>
              <a href="#contato">Fale Conosco</a>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <a href="#equipe">Conheça a Equipe</a>
            </Button>
          </div>
          <a
            href="#serviços"
            className="mt-20 inline-block animate-bounce"
            aria-label="Rolar para baixo"
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
}
