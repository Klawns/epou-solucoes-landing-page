import { Phone, User } from "lucide-react";
import { type TeamCardProps } from "../TeamCard.type";

export default function TeamCard({
  photoUrl,
  personName,
  position,
  description,
  phone,
}: TeamCardProps) {
  return (
    <div className="group bg-card rounded-2xl p-6 text-center hover-lift border border-border flex flex-col items-center">
      <div className="w-24 h-24 rounded-full bg-secondary mx-auto mb-6 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 overflow-hidden">
        {photoUrl ? (
          <img src={photoUrl} alt={personName} className="w-full h-full object-cover" />
        ) : (
          <User className="w-10 h-10 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
        )}
      </div>

      <h3 className="text-xl font-bold mb-1">{personName}</h3>
      <p className="text-sm text-primary uppercase font-semibold tracking-wider mb-3">
        {position}
      </p>
      <p className="text-muted-foreground text-center mb-6 grow">
        {description}
      </p>

      <a
        href={`tel:${phone.replace(/\D/g, "")}`}
        className="inline-flex items-center gap-2 px-6 py-2 bg-secondary rounded-full text-md font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 mt-auto"
      >
        <Phone className="w-4 h-4" />
        {phone}
      </a>
    </div>
  );
}