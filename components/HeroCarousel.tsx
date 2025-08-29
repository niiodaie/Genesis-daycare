"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
    headline: "Loving Care for Little Royals",
    sub: "A safe, faith-aligned home for growth and joy."
  },
  {
    url: "https://images.unsplash.com/photo-1584697964190-2ed86b7a6ade?q=80&w=1600&auto=format&fit=crop",
    headline: "Early Learning that Sparks Curiosity",
    sub: "Play-based curriculum for 6 weeks – 5 years."
  },
  {
    url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1600&auto=format&fit=crop",
    headline: "Partnering with Families & Community",
    sub: "In the heart of Purcellville, VA."
  },
];

export default function HeroCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });
  return (
    <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
      <div className="flex">
        {slides.map((s, i) => (
          <div key={i} className="relative flex-[0_0_100%]">
            <Image src={s.url} alt={s.headline} width={1600} height={800} className="w-full h-[60vh] object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-6">
                <h2 className="text-3xl md:text-5xl font-extrabold">{s.headline}</h2>
                <p className="mt-3 md:text-lg">{s.sub}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
