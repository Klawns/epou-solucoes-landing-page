import { User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { type TeamCardProps } from "../TeamCard.type";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/app/components/ui/card";

export default function TeamCard({
  photos,
  personName,
  position,
  description,
}: TeamCardProps) {
  let src: string | null = null;
  if (Array.isArray(photos)) {
    src = photos.length > 0 ? photos[0] : null;
  } else if (typeof photos === "string" && photos.length > 0) {
    src = photos;
  }
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [sectionIsDark, setSectionIsDark] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    // Find nearest ancestor section
    let parent: HTMLElement | null = el.parentElement;
    while (parent && parent.tagName.toLowerCase() !== "section") {
      parent = parent.parentElement;
    }
    if (!parent) return;

    const bg = getComputedStyle(parent).backgroundColor;
    // parse rgb(a)
    const rgb = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
    if (!rgb) return;
    const r = Number(rgb[1]);
    const g = Number(rgb[2]);
    const b = Number(rgb[3]);

    // relative luminance
    const [R, G, B] = [r, g, b].map((c) => {
      const cs = c / 255;
      return cs <= 0.03928 ? cs / 12.92 : Math.pow((cs + 0.055) / 1.055, 2.4);
    });
    const lum = 0.2126 * R + 0.7152 * G + 0.0722 * B;
    setSectionIsDark(lum < 0.5);
  }, []);

  return (
    <div ref={rootRef}>
      <Card className="h-[640px] min-h-[480px] border-border hover:border-gray-400 transition-all duration-300 hover:shadow-lg overflow-hidden group rounded-2xl">
        <CardContent className="p-0">
          <div className="relative w-full">
            <div className="w-full h-80 md:h-96 lg:h-[440px] overflow-hidden bg-secondary">
              {src ? (
                <img
                  src={src}
                  alt={personName}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <User className="w-16 h-16 text-muted-foreground transition-colors duration-300" />
                </div>
              )}
              {/* gradient to blend image into header - adapt to section background */}
              <div
                className={`absolute left-0 right-0 bottom-0 h-28 pointer-events-none ${
                  sectionIsDark
                    ? "bg-gradient-to-t from-black/40 to-transparent"
                    : "bg-gradient-to-t from-white/60 to-transparent"
                }`}
              />
            </div>
          </div>
        </CardContent>

        <CardHeader className="p-6 pt-4 text-center flex flex-col items-center">
          <CardTitle className="text-xl font-bold">{personName}</CardTitle>
          <CardDescription className="text-sm text-primary uppercase font-semibold tracking-wider">
            {position}
          </CardDescription>
          <p className="text-muted-foreground text-center mt-4 max-h-28 overflow-hidden text-ellipsis">
            {description}
          </p>
        </CardHeader>
      </Card>
    </div>
  );
}
