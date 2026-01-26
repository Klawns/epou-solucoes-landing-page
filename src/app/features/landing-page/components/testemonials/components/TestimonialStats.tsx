const stats = [
    { value: "500+", label: "Clientes satisfeitos" },
    { value: "4.9", label: "Avaliação média" },
    { value: "98%", label: "Recomendações" },
    { value: "5 anos", label: "De experiência" },
  ];

/**
 * Renders a section with key statistics related to customer satisfaction and company experience.
 *
 * This component displays a grid of statistics, such as the number of satisfied
 * clients, average rating, and years of experience. The data for these stats is
 * defined in a local `stats` array.
 *
 * @returns {JSX.Element} The rendered testimonial stats section.
 */
export const TestimonialStats = () => {
  return (
    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
      {stats.map((stat, index) => (
        <div key={index} className="text-center p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border">
          <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
          <p className="text-sm text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};
