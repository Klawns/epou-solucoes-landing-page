import type { LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon | string;
  title?: string;
  description?: string;
  href?: string;
  target?: string;
  rel?: string;
}

export function ContactCard({
  icon,
  title,
  description,
  href,
  target,
  rel,
}: ContactCardProps) {
  const isStringIcon = typeof icon === "string";
  const Icon = !isStringIcon ? icon : null;

  return (
    <a
      className="flex flex-col items-center p-8 bg-primary-foreground/5 rounded-2xl hover:bg-primary-foreground/10 transition-colors duration-300 backdrop-blur-sm"
      href={href}
      target={target}
      rel={rel}
    >
      <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4">
        {isStringIcon ? (
          <img src={icon as string} alt={title || "Icon"} className="w-6 h-6" />
        ) : (
          Icon && <Icon className="w-6 h-6" />
        )}
      </div>
      {title && <h3 className="font-semibold mb-1">{title}</h3>}
      {description && (
        <p className="text-primary-foreground/70 text-sm">{description}</p>
      )}
    </a>
  );
}
