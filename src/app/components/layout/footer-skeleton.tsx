export default function FooterSkeleton() {
  return (
    <footer className="bg-secondary/30 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-4">
              <div className="h-6 w-32 bg-muted/20 rounded animate-pulse mb-6" />
              <div className="h-4 w-full bg-muted/20 rounded animate-pulse" />
              <div className="h-4 w-2/3 bg-muted/20 rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-muted/20 rounded animate-pulse" />
            </div>
          ))}
        </div>
        <div className="h-px w-full bg-muted/20 mb-8" />
        <div className="h-4 w-64 mx-auto bg-muted/20 rounded animate-pulse" />
      </div>
    </footer>
  );
}
