import Link from "next/link";

export const metadata = {
  title: "About | GENESIS Royalty Daycare",
  description:
    "A warm, faith-aligned early learning community in Purcellville serving ages 6 weeks–5 years.",
};

export default function AboutPage() {
  const videoUrl = process.env.NEXT_PUBLIC_ABOUT_VIDEO_URL || ""; // optional
  const poster = process.env.NEXT_PUBLIC_ABOUT_VIDEO_POSTER || "/logo.jpg"; // optional

  return (
    <div className="py-12">
      {/* Intro + Video */}
      <section className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold font-display">About GENESIS Royalty</h1>
          <p className="mt-4 text-lg text-gray-700">
            We’re a safe, nurturing, faith-aligned daycare and early learning center
            operating within a local church facility in Purcellville, VA. Our care blends
            play-based learning with strong character development—so every child feels seen,
            loved, and ready to grow.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/book-tour" className="btn btn-primary">Book a Tour</Link>
            <Link href="/programs" className="btn btn-outline">See Programs</Link>
          </div>
        </div>

        <div className="relative">
          {/* If a video url is provided, show it; otherwise show a friendly placeholder */}
          {videoUrl ? (
            <div className="rounded-3xl overflow-hidden shadow-soft">
              <video
                src={videoUrl}
                poster={poster}
                className="w-full h-[300px] md:h-[360px] object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls
                aria-label="School tour video"
              />
            </div>
          ) : (
            <div className="rounded-3xl overflow-hidden shadow-soft flex items-center justify-center h-[300px] md:h-[360px] bg-gradient-to-br from-royalTeal/20 via-royalYellow/20 to-royalPurple/20">
              <div className="text-center px-6">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-white/80 flex items-center justify-center shadow">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-royalRed">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">School tour video coming soon</h3>
                <p className="text-gray-700 mt-2">
                  Want to look around today? <Link href="/book-tour" className="underline font-semibold">Book a tour</Link>.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Mission / Vision – simple and focused */}
      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="card">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="mt-3 text-gray-700">
            To provide a royal standard of care that nurtures, educates, and empowers children to
            thrive in a safe, loving, and faith-inspired environment.
          </p>
        </div>
        <div className="card">
          <h2 className="text-2xl font-bold">Our Vision</h2>
          <p className="mt-3 text-gray-700">
            To be Purcellville’s most trusted childcare center—known for excellence in early
            learning, compassionate care, and community partnership.
          </p>
        </div>
      </section>

      {/* At a glance – quick facts only */}
      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="card">
          <h3 className="font-bold">Ages & Hours</h3>
          <p className="mt-2 text-gray-700">6 weeks – 5 years<br/>Mon–Fri · 6:30 AM – 6:00 PM</p>
        </div>
        <div className="card">
          <h3 className="font-bold">Where</h3>
          <p className="mt-2 text-gray-700">37018 Glendale St., Purcellville, VA 20132<br/>Inside a local church facility</p>
        </div>
        <div className="card">
          <h3 className="font-bold">Programs</h3>
          <p className="mt-2 text-gray-700">
            Infant · Toddler · Preschool · After-School · Part-Time/Drop-In · Summer/Holiday
          </p>
        </div>
      </section>

      {/* Why families choose us – short and sweet */}
      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          { t: "Nurturing, Small-Ratio Care", d: "Warm relationships and consistent routines." },
          { t: "Play-Based Early Learning", d: "Language, math, motor, and social skills—through play." },
          { t: "Faith-Aligned Values", d: "Character, kindness, and community—every day." },
        ].map((c, i) => (
          <div key={i} className="card">
            <h3 className="font-bold">{c.t}</h3>
            <p className="mt-2 text-gray-700">{c.d}</p>
          </div>
        ))}
      </section>

      {/* Soft CTA */}
      <section className="mt-12 rounded-3xl bg-gradient-to-r from-royalRed/10 via-royalYellow/10 to-royalPurple/10 p-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Come see us in person</h2>
          <p className="text-gray-700 mt-1">Take a tour, meet our team, and explore the classrooms.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/book-tour" className="btn btn-primary">Book a Tour</Link>
          <Link href="/contact" className="btn btn-outline">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
