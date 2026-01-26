export default function TeamSkeleton() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="h-8 w-24 bg-muted/20 rounded-full mb-4 animate-pulse" />
          <div className="h-12 w-64 bg-muted/20 rounded-lg mb-4 animate-pulse" />
          <div className="h-4 w-96 max-w-full bg-muted/20 rounded animate-pulse" />
        </div>

        {/* Imagem da Equipe Skeleton */}
        <div className="mb-16">
          <div className="w-full max-w-4xl mx-auto rounded-2xl bg-muted/20 aspect-video animate-pulse" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-64 bg-muted/20 rounded-2xl animate-pulse"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
