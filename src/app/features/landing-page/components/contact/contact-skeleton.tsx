export default function ContactSkeleton() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="h-10 w-64 bg-muted/20 rounded-lg animate-pulse" />
            <div className="h-4 w-full bg-muted/20 rounded animate-pulse" />
            <div className="space-y-4 pt-4">
              <div className="h-20 bg-muted/20 rounded-xl animate-pulse" />
              <div className="h-20 bg-muted/20 rounded-xl animate-pulse" />
              <div className="h-20 bg-muted/20 rounded-xl animate-pulse" />
            </div>
          </div>
          <div className="h-[600px] bg-muted/20 rounded-2xl animate-pulse" />
        </div>
      </div>
    </section>
  );
}
