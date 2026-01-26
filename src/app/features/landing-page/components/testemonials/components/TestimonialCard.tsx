import { ImageIcon } from "lucide-react";
import type { Testimonial } from "@/app/types/testimonial.type";


/**
 * Renders a card for a single testimonial.
 *
 * This component displays the testimonial's image or its content as a fallback.
 * The `isCenter` prop controls the card's appearance, making the centered card
 * larger and more prominent.
 *
 * @todo There is a significant amount of commented-out code in this component
 * that should be reviewed. It may contain unfinished features or code that is
 * no longer needed and can be removed.
 *
 * @param {object} props - The props for the component.
 * @param {Testimonial} props.testimonial - The testimonial object to display.
 * @param {boolean} props.isCenter - Whether the card is the center item in the carousel.
 * @returns {JSX.Element} The rendered testimonial card.
 */
export const TestimonialCard = ({
  testimonial,
  isCenter,
}: {
  testimonial: Testimonial;
  isCenter: boolean;
}) => {
  const hasImage = testimonial.imageUrl && testimonial.imageUrl.trim() !== "";

  return (
    <div
      className={`relative transition-all duration-500 ${
        isCenter ? "scale-100 opacity-100 z-20" : "scale-90 opacity-50 z-10"
      }`}
    >
      <div
        className={`bg-card border border-border rounded-2xl overflow-hidden shadow-xl ${
          isCenter ? "ring-2 ring-foreground/10" : ""
        }`}
      >
        {/* Área da imagem/print */}
        <div className="relative aspect-[4/5] bg-secondary overflow-hidden">
          {hasImage ? (
            <img
              src={testimonial.imageUrl}
              alt={`Feedback de ${testimonial.name}`}
              className="w-full h-full object-contain"
            />
          ) : (
            // Placeholder quando não há imagem
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <ImageIcon className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Print não disponível
              </p>
              <div className="bg-background/80 backdrop-blur-sm rounded-xl p-4 w-full">
                <p className="text-sm text-foreground italic">
                  "{testimonial.content}"
                </p>
              </div>
            </div>
          )}

          {/* Overlay gradient */}
          {hasImage && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          )}

          {/* Badge da plataforma */}
          {/*
          <div className="absolute top-3 left-3">
            <PlatformBadge platform={testimonial.platform} />
          </div>

          */}

          {/* Rating 
                    <div className="absolute top-3 right-3 flex gap-0.5">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star
                key={i}
                className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          
          */}
        </div>

        {/* Info do cliente 
        
        <div className="p-4 border-t border-border">
          <p className="font-semibold text-foreground truncate">
            {testimonial.name}
          </p>
          <p className="text-xs text-muted-foreground">Cliente verificado</p>
        </div>
        */}
      </div>
    </div>
  );
};
