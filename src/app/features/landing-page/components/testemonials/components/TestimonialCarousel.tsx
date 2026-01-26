"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/app/components/ui/carousel";

import type { Testimonial } from "@/app/types/testimonial.type";
import { TestimonialCard } from "./TestimonialCard";
import { useEffect, useRef, useState } from "react";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

/**
 * Renders a carousel of testimonials.
 *
 * This component uses the `TestimonialCard` to display each testimonial and
 * leverages the `embla-carousel-autoplay` plugin for automatic sliding. It
 * also tracks the currently centered slide to apply special styling, making
 * the active testimonial more prominent.
 *
 * @param {TestimonialCarouselProps} props - The props for the component.
 * @param {Testimonial[]} props.testimonials - An array of testimonial objects to display.
 * @returns {JSX.Element} The rendered testimonial carousel.
 */
export const TestimonialCarousel = ({
  testimonials,
}: TestimonialCarouselProps) => {
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      setApi={setApi}
      plugins={[autoplayPlugin.current]}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {testimonials.map((testimonial, i) => (
          <CarouselItem
            key={i}
            className="pl-4 md:basis-1/2 lg:basis-1/3 flex justify-center py-8"
          >
            <div className="w-[265px] lg:w-[280px]">
              <TestimonialCard
                testimonial={testimonial}
                isCenter={i === current}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="hidden md:flex -left-12 bg-background border-border hover:bg-secondary" />
      <CarouselNext className="hidden md:flex -right-12 bg-background border-border hover:bg-secondary" />
    </Carousel>
  );
};
