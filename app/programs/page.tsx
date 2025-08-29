export default function ProgramsPage() {
  const programs = [
    { title: "Infant Care", age: "6 weeks – 18 months", desc: "Warm, attentive care with sensory play, tummy time, and soothing routines." },
    { title: "Toddler Program", age: "18 months – 3 years", desc: "Language development, fine & gross motor skills, and social-emotional growth." },
    { title: "Preschool Program", age: "3 – 5 years", desc: "Kindergarten readiness, early literacy & math through play-based learning." },
    { title: "After-School Care", age: "School-age", desc: "Homework help, enrichment activities, and character-building games." },
    { title: "Part-Time & Drop-In", age: "Flexible", desc: "Options for busy families who need flexible care." },
    { title: "Summer & Holiday Care", age: "Varies", desc: "Themed weekly camps with outdoor play and exploration." },
  ];

  return (
    <div className="py-10">
      <h1 className="text-4xl font-extrabold font-display">Programs</h1>
      <p className="mt-4 text-gray-700">We offer full-time, part-time, and drop-in care with structured learning and plenty of play.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {programs.map((p, i) => (
          <div key={i} className="card">
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="text-sm text-gray-500">{p.age}</p>
            <p className="mt-3 text-gray-700">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
