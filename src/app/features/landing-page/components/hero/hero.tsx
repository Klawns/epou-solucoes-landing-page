import { Button } from "@/app/components/ui/button";
import { ArrowDown } from "lucide-react";
import EpouLogo from "@/app/assets/logos/vetor nova logo épou.svg";

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
          <span className="animate-fade-up inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-muted-foreground relative z-20">
            Assistência Técnica Especializada em Imperatriz
          </span>

          <img
            src={EpouLogo}
            alt="Logo Épou Soluções"
            className="h-72 w-72 md:h-100 md:w-100 animate-fade-up mx-auto -my-16 md:-my-24 relative z-10"
          />

          <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance relative z-20">
            Especialistas em manutenção de iPhones, smartphones Android, iPads e
            MacBooks, com diagnóstico preciso, reparos seguros e atendimento que
            prioriza transparência e confiança.
          </p>

          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" asChild>
              <a href="#contato">Fale Conosco</a>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <a href="#contato">Solicitar Orçamento</a>
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
