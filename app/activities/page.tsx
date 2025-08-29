import Image from "next/image";

const activities = [
  {
    title: "Outdoor Play",
    desc: "Safe playground equipment and structured outdoor activities.",
    img: "/hero-image-1.jpg",
  },
  {
    title: "Arts & Crafts",
    desc: "Creative expression through art, music, and crafts.",
    img: "/hero-image-2.jpg",
  },
  {
    title: "Nutritious Meals",
    desc: "Healthy meals and snacks following USDA guidelines.",
    img: "/hero-image-3.jpg",
  },
  {
    title: "Story Time",
    desc: "Daily reading sessions to develop language skills.",
    img: "/children-playing.jpg",
  },
  {
    title: "Learning Games",
    desc: "Educational puzzles and games for cognitive development.",
    img: "/hero-image-1.jpg",
  },
  {
    title: "Rest Time",
    desc: "Quiet time and naps for proper rest and development.",
    img: "/hero-image-3.jpg",
  },
];

export default function ActivitiesPage() {
  return (
    <div className="py-14">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold heading">Daily Activities</h1>
        <p className="mt-3 max-w-2xl mx-auto text-slate-600">
          Children learn best through play, so there&apos;s no shortage of fun learning
          experiences here!
        </p>
      </div>

      <div className="container-p mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {activities.map((a) => (
          <article key={a.title} className="rounded-3xl bg-white shadow-soft overflow-hidden border">
            <div className="relative aspect-video">
              <Image src={a.img} alt={a.title} fill className="object-cover" />
            </div>
            <div className="p-5">
              <h2 className="font-semibold">{a.title}</h2>
              <p className="mt-2 text-slate-700">{a.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
