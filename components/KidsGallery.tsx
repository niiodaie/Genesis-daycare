"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/children-playing.jpg", label: "Outdoor Play", alt: "Children playing outdoors" },
  { src: "/hero-image-2.jpg",      label: "Arts & Crafts", alt: "Kids doing arts and crafts" },
  { src: "/hero-image-3.jpg",      label: "Nutritious Snacks", alt: "Healthy snack time" },
  { src: "/hero-image-1.jpg",      label: "Story Time", alt: "Story time in class" },
  { src: "/children-playing.jpg",  label: "Learning Games", alt: "Learning games on the mat" },
  { src: "/hero-image-2.jpg",      label: "Music & Movement", alt: "Music and movement" },
];

const tilts = ["-rotate-2", "rotate-1", "rotate-2", "-rotate-1", "rotate-1", "-rotate-2"];

export default function KidsGallery() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.min(600, el.clientWidth * 0.9);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="py-14">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold heading">Smiles from our day</h2>
        <p className="mt-3 max-w-2xl mx-auto text-slate-600">
          A peek at the joy, curiosity, and creativity in our classrooms.
        </p>
      </div>

      <div className="relative mt-8">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent" />

        {/* controls (hidden on very small screens) */}
        <div className="container-p absolute inset-y-0 flex items-center justify-between">
          <button
            aria-label="Scroll gallery left"
            onClick={() => scrollBy("left")}
            className="hidden sm:grid place-items-center rounded-full bg-white/90 shadow-soft w-10 h-10 hover:bg-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Scroll gallery right"
            onClick={() => scrollBy("right")}
            className="hidden sm:grid place-items-center rounded-full bg-white/90 shadow-soft w-10 h-10 hover:bg-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* scroller */}
        <div ref={trackRef} className="no-scrollbar overflow-x-auto scroll-smooth">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex gap-6 md:gap-8">
              {images.map((img, i) => (
                <figure
                  key={`${img.src}-${i}`}
                  className={`relative shrink-0 w-[240px] sm:w-[280px] md:w-[320px] aspect-[4/3] rounded-3xl border-4 border-white shadow-soft overflow-hidden bg-slate-100 ${tilts[i % tilts.length]}`}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 280px, 320px" />
                  <figcaption className="absolute bottom-2 left-2 right-2 rounded-xl bg-white/85 px-3 py-2 text-sm font-semibold text-slate-800 backdrop-blur">
                    {img.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
