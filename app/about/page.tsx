import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Genesis Royalty Daycare Center",
  description:
    "We’re a safe, nurturing, faith-aligned daycare and early learning center in Purcellville, VA. Learn about our mission, vision, staff, and programs.",
};

export default function AboutPage() {
  return (
    <div className="pb-16">
      {/* HERO */}
      <section className="container-p pt-8 md:pt-12 grid gap-8 lg:grid-cols-2 items-start">
        <div>
          <span className="badge">About Us</span>
          <h1 className="mt-2 text-3xl md:text-4xl font-extrabold heading">
            <span className="text-royalRed">GENESIS</span>{" "}
            <span className="text-royalYellow">Royalty</span>
          </h1>
          <p className="mt-3 max-w-2xl text-slate-700">
            We’re a safe, nurturing, faith-aligned daycare and early learning center
            operating within a local church facility in Purcellville, VA. Our care blends
            play-based learning with strong character development—so every child feels
            seen, loved, and ready to grow.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/book-tour" className="btn btn-primary">Book a Tour</Link>
            <Link href="/programs" className="btn btn-outline">See Programs</Link>
          </div>
        </div>

        {/* Right panel: video (with graceful fallback) */}
        <div className="rounded-2xl overflow-hidden shadow-soft">
          <div className="relative aspect-video bg-gradient-to-br from-royalTeal/15 via-royalYellow/15 to-royalPurple/20">
            {/* If /public/videos/tour.mp4 exists it will play; else poster renders */}
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/hero-image-2.jpg"
            >
              <source src="/videos/tour.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="p-4 bg-white border-t">
            <div className="text-sm text-slate-600">
              School tour video{" "}
              <span className="font-semibold text-slate-800">coming soon</span>. Want a look
              around today?{" "}
              <Link href="/book-tour" className="text-royalRed font-semibold">Book a tour</Link>.
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="container-p mt-10 grid gap-6 lg:grid-cols-2">
        <div className="card">
          <h2 className="text-xl font-bold">Our Mission</h2>
          <p className="mt-2 text-slate-700">
            To provide a royal standard of care that nurtures, educates, and empowers
            children to thrive in a safe, loving, and faith-inspired environment.
          </p>
        </div>
        <div className="card">
          <h2 className="text-xl font-bold">Our Vision</h2>
          <p className="mt-2 text-slate-700">
            To be Purcellville’s most trusted childcare center—known for excellence in
            early learning, compassionate care, and community partnership.
          </p>
        </div>
      </section>

      {/* FAST FACTS */}
      <section className="container-p mt-10">
        <h2 className="text-2xl md:text-3xl font-bold">Fast Facts</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div className="card">
            <h3 className="font-semibold text-royalBlue">Ages & Hours</h3>
            <p className="mt-1 text-slate-700">
              6 weeks – 5 years<br />Mon–Fri · 6:30 AM – 6:00 PM
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-royalBlue">Where</h3>
            <p className="mt-1 text-slate-700">
              37018 Glendale St., Purcellville, VA 20132<br />
              Inside a local church facility
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-royalBlue">Programs</h3>
            <p className="mt-1 text-slate-700">
              Infant · Toddler · Preschool · Part-Time/Drop-In · Summer/Holiday
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-royalBlue">Faith-Aligned Values</h3>
            <p className="mt-1 text-slate-700">
              Character, kindness, and community—every day.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-royalBlue">Play-Based Learning</h3>
            <p className="mt-1 text-slate-700">
              Language, math, motor & social skills—through play.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-royalBlue">Family Connection</h3>
            <p className="mt-1 text-slate-700">
              Daily updates via our parent communication app.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-royalBlue">Meals & Nutrition</h3>
            <p className="mt-1 text-slate-700">Nutritious meals & snacks.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-royalBlue">Outdoor Play</h3>
            <p className="mt-1 text-slate-700">Safe, structured time outside daily (weather permitting).</p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-royalBlue">Small Ratios</h3>
            <p className="mt-1 text-slate-700">Warm relationships and consistent routines.</p>
          </div>
        </div>
      </section>

      {/* LICENSING / STAFF */}
      <section className="container-p mt-10">
        <h2 className="text-2xl md:text-3xl font-bold">Licensing & Staff</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="card">
            <h3 className="font-semibold text-royalBlue">Licensed in Virginia</h3>
            <p className="mt-1 text-slate-700">
              We meet or exceed all state health & safety requirements.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-royalBlue">Background-Checked</h3>
            <p className="mt-1 text-slate-700">
              Every staff member completes background checks and reference screening.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-royalBlue">CPR / First Aid</h3>
            <p className="mt-1 text-slate-700">
              Teachers maintain up-to-date CPR & First Aid certifications.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-royalBlue">Ongoing Training</h3>
            <p className="mt-1 text-slate-700">
              We invest in continuous professional development and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* PHOTO STRIP */}
      <section className="container-p mt-10">
        <h2 className="text-2xl md:text-3xl font-bold">A Peek Inside</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { src: "/children-playing.jpg", alt: "Outdoor play" },
            { src: "/hero-image-1.jpg", alt: "Toddler classroom" },
            { src: "/hero-image-2.jpg", alt: "Creative corner" },
            { src: "/hero-image-3.jpg", alt: "Group activity" },
          ].map((img) => (
            <figure key={img.src} className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-soft">
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-p mt-12">
        <div className="rounded-2xl bg-royalBlue text-white p-8 md:p-10 shadow-soft">
          <h2 className="text-2xl md:text-3xl font-bold">Come see the difference</h2>
          <p className="mt-2 max-w-2xl opacity-90">
            Tour our classrooms, meet our teachers, and discover a warm, structured path
            for your child’s early learning.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/book-tour" className="btn btn-light">Schedule a tour</Link>
            <Link href="/programs" className="btn btn-ghost-white">Explore programs</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
