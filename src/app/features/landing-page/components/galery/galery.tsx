import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import { galeryItems } from "@/app/constants/galery";
import CarroselCard from "./components/CarroselCard";

/**
 * Renders the gallery section of the landing page as a carousel.
 *
 * This component uses the `embla-carousel-autoplay` plugin to automatically
 * slide through the gallery items. The items are sourced from the `galeryItems`
 * constant. The carousel is responsive, with navigation buttons for desktop
 * and a touch-friendly interface for mobile devices.
 *
 * @returns {JSX.Element} The rendered gallery section.
 */
export default function Galery() {
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );
  return (
    <section id="galeria" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Título da seção */}
        <div className="text-center mb-12">
          {/*
          <span className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-muted-foreground mb-4">
            Nossa Loja
          </span>
          */}

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Conheça Nosso Espaço
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-justify">
            Ambiente moderno, organizado e equipado com tecnologia de ponta para
            oferecer serviços de assistência técnica com máxima qualidade e
            segurança.
          </p>
        </div>

        {/* Carrossel de imagens com autoplay */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[autoplayPlugin.current]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {galeryItems.map((item) => (
              <CarroselCard key={item.id} {...item} />
            ))}
          </CarouselContent>

          {/* Botões de navegação */}
          <CarouselPrevious className="hidden md:flex -left-12 bg-background border-border hover:bg-secondary" />
          <CarouselNext className="hidden md:flex -right-12 bg-background border-border hover:bg-secondary" />
        </Carousel>

        {/* Indicadores para mobile */}

        <p className="text-center text-sm text-muted-foreground mt-6">
          Cada detalhe da Épou Soluções foi pensado para garantir confiança,
          transparência e excelência em serviços de assistência técnica.
        </p>
        <p className="text-center text-sm text-muted-foreground mt-6 md:hidden">
          Deslize para ver mais →
        </p>
      </div>
    </section>
  );
}
