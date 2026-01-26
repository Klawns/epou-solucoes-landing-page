import { CarouselItem } from "@/app/components/ui/carousel";
import type { GaleryItem } from "@/app/types/galery.type";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { cn } from "@/app/lib/utils";

/**
 * Renders a single card within the gallery carousel.
 *
 * This component displays a gallery item, which can be either an image or a
 * Lucide icon, along with a title and a description. It is designed to be used
 * as a child of the `CarouselContent` component.
 *
 * @param {GaleryItem} props - The props for the component, conforming to the `GaleryItem` type.
 * @param {number} props.id - A unique identifier for the gallery item.
 * @param {string} props.title - The title of the gallery item.
 * @param {string} props.description - A brief description of the gallery item.
 * @param {LucideIcon | string | null} props.icon - The icon or image for the gallery item.
 * @param {'horizontal' | 'vertical'} [props.orientation] - The orientation of the image, used to adjust the card's aspect ratio.
 * @returns {JSX.Element} The rendered carousel card component.
 */
export default function CarroselCard({
  id,
  title,
  description,
  icon: Icon,
  orientation,
}: GaleryItem) {
  const isHorizontal = orientation === "horizontal";
  const isVertical = orientation === "vertical";

  const carouselItemClass = cn(
    "pl-4 md:pl-6",
    isHorizontal ? "md:basis-1/2" : "md:basis-1/3"
  );

  const cardContentClass = cn(
    "bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center overflow-hidden relative",
    {
      "aspect-video": isHorizontal,
      "aspect-[9/16]": isVertical,
      "aspect-4/3": !isHorizontal && !isVertical,
    }
  );

  return (
    <CarouselItem key={id} className={carouselItemClass}>
      <Card className="h-full border-border hover:border-gray-400 transition-all duration-300 hover:shadow-lg overflow-hidden group">
        <CardContent className="p-0">
          <div className={cardContentClass}>
            {Icon && typeof Icon === "string" ? (
              <img
                src={Icon}
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : Icon ? (
              <Icon
                className="w-16 h-16 text-gray-400 transition-transform duration-500 group-hover:scale-110"
                strokeWidth={1}
              />
            ) : null}
          </div>
        </CardContent>
        <CardHeader className="p-4">
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    </CarouselItem>
  );
}
