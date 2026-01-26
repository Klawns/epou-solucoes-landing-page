export default function FAQSkeleton() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="h-8 w-20 bg-muted/20 rounded-full mb-4 animate-pulse" />
          <div className="h-10 w-64 bg-muted/20 rounded-lg mb-4 animate-pulse" />
        </div>

        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-16 bg-muted/20 rounded-xl animate-pulse"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
