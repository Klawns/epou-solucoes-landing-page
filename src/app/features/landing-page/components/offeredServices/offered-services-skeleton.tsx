export default function OfferedServicesSkeleton() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="h-8 w-32 bg-muted/20 rounded-full mb-4 animate-pulse" />
          <div className="h-12 w-80 bg-muted/20 rounded-lg mb-4 animate-pulse" />
          <div className="h-4 w-96 max-w-full bg-muted/20 rounded animate-pulse" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="h-80 bg-muted/20 rounded-2xl animate-pulse"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
