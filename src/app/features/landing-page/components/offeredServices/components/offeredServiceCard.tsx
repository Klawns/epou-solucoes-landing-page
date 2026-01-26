import type { OfferedService as OfferedServiceCardProps } from "@/app/types/offered-service.type";

/**
 * Renders a card for a single service offered by the company.
 *
 * This component displays the service's icon, title, and a brief description.
 * It features a subtle "lift" effect on hover and a staggered fade-in animation
 * based on its ID.
 *
 * @param {OfferedServiceCardProps} props - The props for the component, conforming to the `OfferedServiceCardProps` type.
 * @param {number} props.id - A unique identifier for the service, used for the animation delay.
 * @param {string} props.title - The title of the service.
 * @param {string} props.description - A brief description of the service.
 * @param {LucideIcon} props.Icon - The Lucide icon component representing the service.
 * @returns {JSX.Element} The rendered offered service card.
 */
export default function OfferedServiceCard({
  id,
  title,
  description,
  Icon,
}: OfferedServiceCardProps) {
  return (
    <div
      key={id}
      className=" bg-background rounded-2xl p-8 hover-lift border border-border group animate-fade-up rounded-3xl p-10 transition-all duration-300 ease-in-out hover:bg-background border border-transparent hover:border-primary/50 hover:shadow-lg hover:-translate-y-2"
      style={{ animationDelay: `${id * 0.1}s` }}
    >
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary">
        <Icon className="w-8 h-8 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
