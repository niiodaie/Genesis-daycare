import HeroMedia from "@/components/HeroMedia";
import Link from "next/link";
import Image from "next/image";
import MapEmbed from "@/components/MapEmbed";

export default function Home() {
  return (
    <div className="py-10">
      <section className="gradient-splash rounded-3xl p-6 md:p-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="badge">Purcellville, VA · Ages 6 weeks – 5 years</span>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold font-display leading-tight">
              Royal care that nurtures hearts and minds
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              We provide a safe, loving, faith-aligned environment where children grow socially, emotionally, and academically.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/book-tour" className="btn btn-primary">Book a Tour</Link>
              <Link href="/programs" className="btn btn-outline">View Programs</Link>
            </div>
          </div>
          <div>
            <HeroMedia />
          </div>
        </div>
      </section>

      <section className="mt-16 grid md:grid-cols-3 gap-6">
        {[
          { title:"Full & Part-Time Care", desc:"Flexible schedules for busy families.", icon:"🧸" },
          { title:"Early Learning Curriculum", desc:"Play-based, age-appropriate activities.", icon:"📚" },
          { title:"Faith-Inspired Values", desc:"Character development and compassion.", icon:"🌟" },
        ].map((c, i)=> (
          <div key={i} className="card">
            <div className="text-4xl">{c.icon}</div>
            <h3 className="mt-3 text-xl font-bold">{c.title}</h3>
            <p className="text-gray-600 mt-2">{c.desc}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image src="/logo.jpg" alt="Genesis Royalty Logo" width={600} height={600} className="rounded-3xl shadow-soft" />
        </div>
        <div>
          <h2 className="text-3xl font-extrabold font-display">Mission & Vision</h2>
          <p className="mt-4 text-gray-700">
            Our mission is to provide a royal standard of care that nurtures, educates, and empowers children to thrive in a safe, loving, and faith-inspired environment.
          </p>
          <p className="mt-3 text-gray-700">
            We envision becoming the most trusted childcare center in Purcellville—known for excellence in early learning, compassionate care, and community partnership.
          </p>
          <div className="mt-6 flex gap-4">
            <Link href="/about" className="btn btn-outline">Learn More</Link>
            <Link href="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-extrabold font-display mb-6">Visit Us</h2>
        <MapEmbed />
      </section>
    </div>
  );
}
