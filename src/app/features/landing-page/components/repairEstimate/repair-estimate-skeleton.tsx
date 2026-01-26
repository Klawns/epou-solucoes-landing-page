export default function RepairEstimateSkeleton() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="h-10 w-3/4 bg-muted/20 rounded-lg animate-pulse" />
            <div className="h-4 w-full bg-muted/20 rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-muted/20 rounded animate-pulse" />
            <div className="h-12 w-40 bg-muted/20 rounded-lg animate-pulse mt-8" />
          </div>
          <div className="h-[500px] w-full bg-muted/20 rounded-2xl animate-pulse" />
        </div>
      </div>
    </section>
  );
}
