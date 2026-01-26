import { Team as TeamData } from "@/app/constants/team";
import TeamCard from "@/app/features/landing-page/components/team/components/TeamCard.tsx";
import teamImage from "@/app/assets/equipe.jpeg";

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
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-muted-foreground mb-4">
            Conheça
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Nossa Equipe
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profissionais qualificados e prontos para atender você com
            excelência.
          </p>
        </div>

        {/* Imagem da Equipe */}
        <div className="mb-16">
          <img
            src={teamImage}
            alt="Nossa Equipe Reunida"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg object-cover"
            style={{ aspectRatio: "16/9" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {TeamData.map((team) => (
            <TeamCard key={team.id} {...team} />
          ))}
        </div>
      </div>
    </section>
  );
}
