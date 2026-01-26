import { MessageCircle } from "lucide-react";
import { testimonials } from "@/app/constants/testimonials";
import { TestimonialCarousel } from "./components/TestimonialCarousel";

/**
 * Renders the testimonials section of the landing page.
 *
 * This component displays customer feedback in a carousel format, using the
 * `TestimonialCarousel` component. The data for the testimonials is sourced
 * from the `testimonials` constant. The section also includes decorative
 * background elements to enhance its visual appeal.
 *
 * @returns {JSX.Element} The rendered testimonials section.
 */
const Testimonials = () => {
  return (
    <section
      id="feedback"
      className="py-24 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-foreground rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm font-medium text-muted-foreground mb-6">
            <MessageCircle className="w-4 h-4" />
            Feedbacks Reais
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            O que nossos clientes
            <span className="block text-muted-foreground">estão dizendo</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Prints reais de conversas com nossos clientes satisfeitos.
            Transparência total!
          </p>
        </div>

        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
};

export default Testimonials;
