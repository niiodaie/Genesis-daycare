"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = { src: string; alt: string };

export default function PhotoSlider({
  slides,
  caption,
  autoplayMs = 4000,
  height = { base: 220, sm: 260, md: 320, lg: 380 },
}: {
  slides: Slide[];
  caption?: string;
  autoplayMs?: number; // autoplay interval (ms)
  height?: { base: number; sm: number; md: number; lg: number };
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const next = () => {
    const el = trackRef.current;
    if (!el) return;
    const delta = el.clientWidth * 0.9;

    // if near the end, loop back to start
    const nearEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    if (nearEnd) {
      el.scrollTo({ left: 0, behavior: "auto" });
    } else {
      el.scrollBy({ left: delta, behavior: "smooth" });
    }
  };

  const prev = () => {
    const el = trackRef.current;
    if (!el) return;
    const delta = el.clientWidth * 0.9;
    if (el.scrollLeft <= 4) {
      // jump to end
      el.scrollTo({ left: el.scrollWidth, behavior: "auto" });
    } else {
      el.scrollBy({ left: -delta, behavior: "smooth" });
    }
  };

  // autoplay loop
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, autoplayMs);
    return () => clearInterval(id);
  }, [autoplayMs, paused]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Track */}
      <div
        ref={trackRef}
        className="
          no-scrollbar overflow-x-auto scroll-smooth scroll-px-4
          snap-x snap-mandatory
          flex gap-4 px-1
        "
        aria-label={caption || "Photo gallery"}
        role="region"
      >
        {slides.map((s, i) => (
          <figure
            key={i}
            className="
              snap-start shrink-0
              min-w-[85%] sm:min-w-[60%] md:min-w-[48%] lg:min-w-[33%]
              rounded-2xl overflow-hidden shadow-soft bg-slate-100
            "
            style={{ height: `${height.base}px` }}
          >
            {/* responsive heights */}
            <style jsx>{`
              @media (min-width: 640px) {
                figure { height: ${height.sm}px; }
              }
              @media (min-width: 768px) {
                figure { height: ${height.md}px; }
              }
              @media (min-width: 1024px) {
                figure { height: ${height.lg}px; }
              }
            `}</style>
            <div className="relative h-full w-full">
              <Image src={s.src} alt={s.alt} fill className="object-cover" />
            </div>
          </figure>
        ))}
      </div>

      {/* Controls */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2">
        <button
          type="button"
          onClick={prev}
          className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-white/90 backdrop-blur ring-1 ring-black/10 shadow-soft hover:bg-white w-10 h-10"
          aria-label="Previous photos"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-white/90 backdrop-blur ring-1 ring-black/10 shadow-soft hover:bg-white w-10 h-10"
          aria-label="Next photos"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
