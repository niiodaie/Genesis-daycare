// components/HeroVideo.tsx
"use client";

import Link from "next/link";

export default function HeroVideo() {
  const phone = process.env.NEXT_PUBLIC_PHONE || "";

  return (
    <section className="relative isolate">
      {/* Video background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.jpg"   // optional poster if you have one
          preload="metadata"
        >
          {/* If you only uploaded /public/hero.mp4, keep just this source */}
          {/* Add .webm later for extra compatibility/size savings */}
          <source src="/hero.mp4" type="video/mp4" />
          {/* <source src="/hero.webm" type="video/webm" /> */}
        </video>

        {/* Soft gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-p min-h-[72vh] md:min-h-[80vh] flex items-center">
        <div className="max-w-3xl text-white drop-shadow-md">
          <h1 className="text-4xl leading-tight font-extrabold md:text-6xl">
            Where little hearts grow, learn & shine
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            A safe, loving, faith-inspired environment for infants to preschoolers—
            nurturing social, emotional, and cognitive growth while giving parents
            peace of mind.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/book-tour" className="btn btn-primary">Book a tour</Link>
            <Link href="/about" className="btn btn-light">Our mission</Link>
            {phone && (
              <a href={`tel:${phone}`} className="btn btn-ghost">Call us</a>
            )}
          </div>

          <div className="mt-6 text-sm/6 opacity-90">
            Licensed in Virginia • Nutritious meals • Parent communication app
          </div>
        </div>
      </div>
    </section>
  );
}
