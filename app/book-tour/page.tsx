import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Book a Tour | Genesis Royalty Daycare Center",
  description:
    "See our classrooms, meet our teachers and explore our safe, faith-inspired environment. Schedule a tour online.",
};

const CAL_URL =
  process.env.NEXT_PUBLIC_CALENDLY_TOUR_URL ||
  process.env.NEXT_PUBLIC_CALENDLY_COUNSEL_URL ||
  "";

export default function BookTourPage() {
  return (
    <div className="pb-14">
      {/* HERO */}
      <section className="container-p pt-8 md:pt-10">
        <span className="badge">Visit Us</span>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold">
          Book a tour that fits your schedule
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          We’d love to show you around—classrooms, play spaces and our daily
          rhythm. Pick a time below. If you prefer,{" "}
          <Link href="/contact" className="text-royalRed font-semibold">
            contact us
          </Link>{" "}
          and we’ll find a time together.
        </p>
        <div className="mt-5 flex gap-3">
          <a href="#schedule" className="btn btn-primary">Choose a time</a>
          <a href="#peek" className="btn btn-outline">See our space</a>
        </div>
      </section>

      {/* QUICK PEEK VIDEO (optional) */}
      <section id="peek" className="container-p mt-10">
        <div className="rounded-2xl overflow-hidden shadow-soft aspect-video bg-slate-100">
          {/* If /public/videos/tour.mp4 exists it will play; otherwise the poster shows. */}
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/hero-image-2.jpg"
          >
            <source src="/videos/tour.mp4" type="video/mp4" />
          </video>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          Tip: Replace <code>/public/videos/tour.mp4</code> with a 30–60s
          classroom reel. A simple phone video works great.
        </p>
      </section>

      {/* GALLERY */}
      <section className="container-p mt-10">
        <h2 className="text-2xl md:text-3xl font-bold">A look inside</h2>
        <p className="mt-2 text-slate-600">
          Bright classrooms, outdoor play, and cozy infant spaces built for
          happy, safe learning.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <figure className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-soft">
            <Image src="/children-playing.jpg" alt="Outdoor play area" fill className="object-cover" />
          </figure>
          <figure className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-soft">
            <Image src="/hero-image-1.jpg" alt="Toddler classroom" fill className="object-cover" />
          </figure>
          <figure className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-soft">
            <Image src="/hero-image-2.jpg" alt="Creative corner" fill className="object-cover" />
          </figure>
          <figure className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-soft sm:col-span-2">
            <Image src="/hero-image-3.jpg" alt="Preschool group activity" fill className="object-cover" />
          </figure>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="container-p mt-10">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Meet our teachers",
              d: "Learn about our experience, ratios and how we support each child’s growth.",
            },
            {
              t: "See daily rhythms",
              d: "Meals, naps, outdoor play, early learning and faith-inspired moments.",
            },
            {
              t: "Ask anything",
              d: "Tuition, schedules, enrollment timing—bring your questions!",
            },
          ].map((c) => (
            <div key={c.t} className="card">
              <h3 className="font-semibold text-royalBlue">{c.t}</h3>
              <p className="mt-1 text-slate-700">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SCHEDULER */}
      <section id="schedule" className="container-p mt-12">
        <h2 className="text-2xl md:text-3xl font-bold">Schedule your visit</h2>
        <p className="mt-2 text-slate-600">
          Choose a time that works best for your family. Tours typically take 20–30 minutes.
        </p>

        <div className="mt-6">
          {CAL_URL ? (
            <CalendlyEmbed url={CAL_URL} />
          ) : (
            <div className="rounded-2xl border bg-white p-6 shadow-soft">
              <p className="text-slate-700">
                Add your Calendly/Cal.com link via{" "}
                <code>NEXT_PUBLIC_CALENDLY_TOUR_URL</code> (or{" "}
                <code>NEXT_PUBLIC_CALENDLY_COUNSEL_URL</code>) in your env
                to show the embedded scheduler here.
              </p>
              <div className="mt-4 flex gap-3">
                <a href="/contact" className="btn btn-primary">Contact us</a>
                <Link href="/programs" className="btn btn-outline">Explore programs</Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* MAP (optional simple embed) */}
      <section className="container-p mt-12">
        <h3 className="text-xl font-bold">Find us</h3>
        <p className="mt-1 text-slate-600">
          37018 Glendale St., Purcellville, VA 20132
        </p>
        <div className="mt-4 rounded-2xl overflow-hidden border shadow-soft">
          <iframe
            title="Google Map"
            width="100%"
            height="380"
            loading="lazy"
            style={{ border: 0 }}
            className="w-full"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=37018%20Glendale%20St,%20Purcellville,%20VA%2020132&output=embed"
          />
        </div>
      </section>
    </div>
  );
}
