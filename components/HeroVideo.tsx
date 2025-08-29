"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function HeroVideo() {
  const phone = process.env.NEXT_PUBLIC_PHONE || "";
  // Prefer env (easy to swap CDN/WordPress), fall back to local assets
  const src = process.env.NEXT_PUBLIC_HERO_VIDEO_URL || "/videos/hero.mp4";
  const poster = process.env.NEXT_PUBLIC_HERO_POSTER || "/hero-poster.jpg";

  const vidRef = useRef<HTMLVideoElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const v = vidRef.current;
    if (!v) return;

    // Respect users who minimize motion or use data saver
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // @ts-ignore: not all browsers expose this
    const saveData = typeof navigator !== "undefined" && navigator.connection?.saveData;

    if (prefersReducedMotion || saveData) {
      v.pause();
      v.removeAttribute("autoplay");
      v.currentTime = 0;
    }
  }, []);

  return (
    <section className="relative isolate">
      {/* Video background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          ref={vidRef}
          className={`h-full w-full object-cover transition-opacity duration-500 ${ready ? "opacity-100" : "opacity-0"}`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          onLoadedData={() => setReady(true)}
          aria-label="Genesis Royalty Daycare – school tour video background"
        >
          {/* Supply both if you have webm; mp4 is fine */}
          {/* <source src={src.replace(/\.mp4$/, ".webm")} type="video/webm" /> */}
          <source src={src} type="video/mp4" />
        </video>

        {/* Soft gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-p min-h-[72vh] md:min-h-[80vh] flex items-center">
        <div className="max-w-3xl text-white drop-shadow-md">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm leading-6">
            <span className="h-2 w-2 rounded-full bg-royalYellow" /> Now enrolling
          </div>

          <h1 className="text-4xl leading-tight font-extrabold md:text-6xl">
            Where little hearts grow, learn &amp; shine
          </h1>

          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            A safe, loving, faith-inspired environment for infants to preschoolers—nurturing social,
            emotional, and cognitive growth while giving parents peace of mind.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/book-tour" className="btn btn-primary">Book a tour</Link>
            <Link href="/about" className="btn btn-light">Our mission</Link>
            {phone && <a href={`tel:${phone}`} className="btn btn-ghost">Call us</a>}
          </div>

          {/* Trust line */}
          <p className="mt-6 text-sm leading-6 opacity-90">
            Licensed in Virginia • Nutritious meals • Parent communication app
          </p>
        </div>
      </div>
    </section>
  );
}
