import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { faqItems } from "@/app/constants/faqItems";

/**
 * Frequently Asked Questions (FAQ) section component.
 *
 * Displays a list of common questions and answers in a two-column layout,
 * using an accordion component to show/hide the answers.
 * The questions are imported from `faqItems`.
 *
 * @returns {JSX.Element} The rendered FAQ section.
 */
export default function FAQ() {
  // Splits the list of questions in two to create a two-column layout.
  const leftColumn = faqItems.slice(0, Math.ceil(faqItems.length / 2));
  const rightColumn = faqItems.slice(Math.ceil(faqItems.length / 2));
    return (
        <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-muted-foreground mb-4">
            Tire suas dúvidas
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Respondemos as principais dúvidas sobre nossos serviços de assistência técnica.
          </p>
        </div>

        {/* Two-column Accordion Layout */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Left Column */}
          <Accordion type="single" collapsible className="space-y-3">
            {leftColumn.map((item, index) => (
              <AccordionItem
                key={index}
                value={`left-${index}`}
                className="bg-secondary/50 rounded-xl border-none px-6 data-[state=open]:bg-secondary"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5 text-base font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Right Column */}
          <Accordion type="single" collapsible className="space-y-3">
            {rightColumn.map((item, index) => (
              <AccordionItem
                key={index}
                value={`right-${index}`}
                className="bg-secondary/50 rounded-xl border-none px-6 data-[state=open]:bg-secondary"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5 text-base font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
    )
}