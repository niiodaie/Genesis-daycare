import HeroVideo from "@/components/HeroVideo";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <HeroVideo />

      {/* Intro / value prop */}
      <section className="py-16 bg-gradient-to-b from-royalBlue/5 to-transparent">
        <div className="container-p">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-royalBlue">
              Dedicated to a bright start
            </h2>
            <p className="mt-4 text-lg text-slate-700">
              Genesis Royalty Daycare Center provides a safe, nurturing early learning environment
              in partnership with our local church facility—serving infants through preschool with
              a royal standard of care.
            </p>
          </div>
        </div>
      </section>

      {/* 3-card highlights */}
      <section className="py-10">
        <div className="container-p grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Playful learning", desc: "Children learn best through play—our days are filled with rich, age-appropriate exploration." },
            { title: "Health & safety first", desc: "Hygiene habits, secure check-in, and attentive staff keep little ones safe and thriving." },
            { title: "Family connection", desc: "Daily updates through our parent app and a warm, open-door relationship with families." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-royalBlue">{c.title}</h3>
              <p className="mt-2 text-slate-700">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section className="py-14 bg-slate-50">
        <div className="container-p">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Programs & care</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Infants (6 wks–18 mos)", copy: "Warm, responsive care with primary caregivers, tummy time, music, and sensory play." },
              { name: "Toddlers & Preschool", copy: "A structured early-learning curriculum to build language, motor skills, and independence." },
              { name: "After-school & Camps", copy: "Homework help, enrichment activities, and summer/holiday care for busy families." },
            ].map((p) => (
              <div key={p.name} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-royalBlue">{p.name}</h3>
                <p className="mt-2 text-slate-700">{p.copy}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex gap-3">
            <Link href="/programs" className="btn btn-primary">Explore programs</Link>
            <Link href="/book-tour" className="btn btn-ghost">Book a tour</Link>
          </div>
        </div>
      </section>

      {/* Testimonial/video slot (optional) */}
      <section className="py-14">
        <div className="container-p grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Why families choose Genesis Royalty</h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>• Loving, faith-inspired culture</li>
              <li>• Staff-to-child ratios at or better than state requirements</li>
              <li>• Nutritious meals & outdoor play</li>
              <li>• Licensed in Virginia</li>
            </ul>
          </div>
          <div className="aspect-video w-full overflow-hidden rounded-2xl bg-slate-200 shadow-sm">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/vheeQM4DyzM"
              title="Genesis Royalty Overview"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-royalBlue text-white">
        <div className="container-p flex flex-col items-start gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Come see the difference</h2>
          <p className="max-w-2xl opacity-90">
            Tour our classrooms, meet our teachers, and discover a warm, structured path for your child’s early learning.
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <Link href="/book-tour" className="btn btn-light">Schedule a tour</Link>
            <Link href="/payments" className="btn btn-ghost-white">Make a payment</Link>
          </div>
        </div>
      </section>
    </>
  );
}
