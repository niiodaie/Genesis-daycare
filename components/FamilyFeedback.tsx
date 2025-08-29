import { Star } from "lucide-react";

const testimonials = [
  {
    initials: "SM",
    name: "Sarah Martinez",
    subtitle: "Parent of Emma, 3 years old",
    color: "bg-royalPurple",
    text:
      "Genesis Royalty has been amazing for Emma! The teachers are so caring and the daily reports help me stay connected to her day.",
  },
  {
    initials: "DJ",
    name: "David Johnson",
    subtitle: "Parent of Marcus, 2 years old",
    color: "bg-emerald-500",
    text:
      "The staff treats Marcus like family. He’s learned so much and always comes home happy. The online portal is incredibly convenient too!",
  },
  {
    initials: "LC",
    name: "Lisa Chen",
    subtitle: "Parent of Sophie, 4 years old",
    color: "bg-amber-500",
    text:
      "Sophie has thrived at Genesis Royalty. The preschool program has prepared her so well for kindergarten. We feel blessed to have found this center!",
  },
];

export default function FamilyFeedback() {
  return (
    <section className="py-16">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold heading">Family Feedback</h2>
        <p className="mt-3 max-w-3xl mx-auto text-slate-600">
          Find out why Genesis Royalty Daycare families are so happy!
        </p>
      </div>

      <div className="container-p mt-10 grid gap-8 lg:grid-cols-3">
        {testimonials.map((t) => (
          <article key={t.name} className="rounded-3xl bg-white shadow-soft border p-6">
            <div className="flex items-center gap-4">
              <div className={`h-12 w-12 rounded-full ${t.color} text-white grid place-items-center font-bold`}>
                {t.initials}
              </div>
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-slate-500 text-sm">{t.subtitle}</div>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-1 text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>

            <p className="mt-4 text-slate-700">{t.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
