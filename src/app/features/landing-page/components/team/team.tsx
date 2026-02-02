import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Team as TeamData } from "@/app/constants/team";
import TeamCard from "@/app/features/landing-page/components/team/components/TeamCard.tsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";

/**
 * Renders the section of the landing page that introduces the team members.
 *
 * This component fetches team data from the `Team` constant and maps over it
 * to render a `TeamCard` for each team member. It provides a personal touch
 * by showcasing the experts behind the services.
 *
 * @returns {JSX.Element} The rendered team section.
 */
export default function Team() {
  return (
    <section id="equipe" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          {/*
          <span className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-muted-foreground mb-4">
            Conheça
          </span>
          */}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Nossa Equipe
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profissionais qualificados e experientes, preparados para oferecer
            soluções técnicas com excelência, transparência e responsabilidade.
          </p>
        </div>

        {/* Imagem da Equipe (uniforme) */}
        {/*
        <div className="mb-16">
          <img
            src={localTeamImage}
            alt="Equipe com uniforme"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg object-cover"
            style={{ aspectRatio: "16/9" }}
            loading="lazy"
            decoding="async"
          />
        </div>
        */}

        {/* Carousel of team members */}
        <div>
          <div className="w-full max-w-5xl mx-auto">
            <Carousel
              opts={{ align: "start", loop: true }}
              plugins={[
                useRef(Autoplay({ delay: 2500, stopOnInteraction: true }))
                  .current,
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {TeamData.map((team) => (
                  <CarouselItem
                    key={team.id}
                    className={`pl-4 md:pl-6 min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/2 ${
                      team.id === 1 || team.id === 4 ? "md:pl-12" : ""
                    }`}
                  >
                    <TeamCard {...team} />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="hidden md:flex -left-12 bg-background border-border hover:bg-secondary" />
              <CarouselNext className="hidden md:flex -right-12 bg-background border-border hover:bg-secondary" />
            </Carousel>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6 md:hidden">
            Deslize para ver mais →
          </p>
        </div>
      </div>
    </section>
  );
}
