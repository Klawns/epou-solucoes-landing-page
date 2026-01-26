export default function LocationMapSkeleton() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Lado do Conteúdo (Texto) */}
          <div className="space-y-6">
            <div className="h-8 w-24 bg-muted/20 rounded-full animate-pulse" />
            <div className="h-12 w-3/4 bg-muted/20 rounded-lg animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-muted/20 rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-muted/20 rounded animate-pulse" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="h-24 bg-muted/20 rounded-xl animate-pulse" />
              <div className="h-24 bg-muted/20 rounded-xl animate-pulse" />
            </div>
          </div>

          {/* Lado do Mapa */}
          <div className="h-[400px] w-full bg-muted/20 rounded-2xl animate-pulse" />
        </div>
      </div>
    </section>
  );
}
