"use client";
import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
};

export default function Reveal({
  children,
  className = "",
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [overlayBg, setOverlayBg] = useState<string | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold, rootMargin },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let parent: HTMLElement | null = el.parentElement;
    while (parent && parent.tagName.toLowerCase() !== "section") {
      parent = parent.parentElement;
    }
    if (!parent) return;

    const bg = getComputedStyle(parent).backgroundColor;
    const rgb = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
    if (!rgb) {
      setOverlayBg("rgba(255,255,255,0.95)");
      return;
    }
    const r = Number(rgb[1]);
    const g = Number(rgb[2]);
    const b = Number(rgb[3]);

    const [R, G, B] = [r, g, b].map((c) => {
      const cs = c / 255;
      return cs <= 0.03928 ? cs / 12.92 : Math.pow((cs + 0.055) / 1.055, 2.4);
    });
    const lum = 0.2126 * R + 0.7152 * G + 0.0722 * B;
    if (lum > 0.5) {
      setOverlayBg("rgba(255,255,255,0.95)");
    } else {
      setOverlayBg("rgba(0,0,0,0.6)");
    }
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} relative overflow-hidden transform transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* color-aware overlay that fades out when visible */}
      {overlayBg && (
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ease-out ${
            visible ? "opacity-0" : "opacity-100"
          }`}
          style={{ backgroundColor: overlayBg }}
        />
      )}
      {children}
    </div>
  );
}
