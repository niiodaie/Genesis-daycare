import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const programs = [
  {
    title: "Infant Care",
    age: "6 weeks – 1 year",
    img: "/children-playing.jpg",
    desc:
      "Safe, secure, and happy environment with dedicated primary caregivers who bond and develop trust with little ones.",
    bullets: [
      "Primary caregiver system",
      "Daily care reports",
      "Nutritious meals & feeding",
    ],
  },
  {
    title: "Toddler Program",
    age: "1 – 2 years",
    img: "/hero-image-2.jpg",
    desc:
      "Energy and excitement channeled into positive learning with ample room to move and explore.",
    bullets: [
      "Physical skill development",
      "Social interaction activities",
      "Early language development",
    ],
  },
  {
    title: "Preschool Program",
    age: "3 – 5 years",
    img: "/hero-image-3.jpg",
    desc:
      "Explore early math and science through puzzles, blocks, and hands-on learning materials.",
    bullets: [
      "School readiness preparation",
      "Math & science concepts",
      "Creative arts & crafts",
    ],
  },
];

export default function ProgramsPage() {
  return (
    <div className="py-14">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold heading">Our Programs</h1>
        <p className="mt-3 max-w-2xl mx-auto text-slate-600">
          Comprehensive programs designed for each stage of your child&apos;s development from
          6 weeks to 5 years.
        </p>
      </div>

      <div className="container-p mt-10 grid gap-8 lg:grid-cols-3">
        {programs.map((p) => (
          <article key={p.title} className="rounded-3xl bg-white shadow-soft overflow-hidden border">
            <div className="relative aspect-video">
              <Image src={p.img} alt={p.title} fill className="object-cover" priority={false} />
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-xl font-semibold">{p.title}</h2>
                <span className="text-sm font-semibold text-royalPurple">{p.age}</span>
              </div>

              <p className="mt-3 text-slate-700">{p.desc}</p>

              <ul className="mt-4 space-y-2 text-slate-700">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link href="/book-tour" className="btn bg-royalPurple text-white w-full sm:w-auto">
                  Learn More
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
