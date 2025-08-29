export default function ActivitiesPage() {
  const blocks = [
    { time: "6:30–8:30 AM", title: "Arrival & Free Play" },
    { time: "8:30–9:00 AM", title: "Morning Circle & Songs" },
    { time: "9:00–10:00 AM", title: "Learning Centers" },
    { time: "10:00–10:30 AM", title: "Snack" },
    { time: "10:30–11:30 AM", title: "Outdoor Play" },
    { time: "11:30–12:00 PM", title: "Storytime" },
    { time: "12:00–1:00 PM", title: "Lunch" },
    { time: "1:00–3:00 PM", title: "Nap/Quiet Time" },
    { time: "3:00–3:30 PM", title: "Snack" },
    { time: "3:30–5:30 PM", title: "Enrichment & Free Play" },
    { time: "5:30–6:00 PM", title: "Pick-Up" },
  ];

  return (
    <div className="py-10">
      <h1 className="text-4xl font-extrabold font-display">Daily Activities</h1>
      <p className="mt-4 text-gray-700">A sample rhythm for our toddlers and preschoolers (infants follow individualized schedules).</p>

      <div className="mt-8 grid gap-4">
        {blocks.map((b, i)=> (
          <div key={i} className="card flex items-center justify-between">
            <div className="font-semibold">{b.title}</div>
            <div className="text-gray-600">{b.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
