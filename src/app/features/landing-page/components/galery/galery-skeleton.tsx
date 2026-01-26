export default function GalerySkeleton() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Cabeçalho do Skeleton */}
        <div className="text-center mb-12 flex flex-col items-center">
          <div className="h-8 w-32 bg-muted/20 rounded-full mb-4 animate-pulse" />
          <div className="h-10 w-64 bg-muted/20 rounded-lg mb-4 animate-pulse" />
          <div className="h-4 w-96 max-w-full bg-muted/20 rounded animate-pulse" />
        </div>

        {/* Carrossel Skeleton */}
        <div className="w-full max-w-5xl mx-auto">
          <div className="flex gap-4 overflow-hidden">
            {/* Simulando 3 cartões visíveis */}
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex-none w-[85%] md:w-[45%] lg:w-[30%] aspect-[3/4] bg-muted/20 rounded-xl animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
