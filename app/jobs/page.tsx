import JobForm from "@/components/JobForm";

export default function JobsPage() {
  const jobs = [
    { title: "Lead Teacher (Full-Time)", desc: "Plan and lead classroom activities with an age-appropriate curriculum." },
    { title: "Assistant Teacher (Part-Time)", desc: "Support classroom routines, supervision, and enrichment." },
    { title: "Cook / Nutrition Assistant", desc: "Prepare meals and snacks following USDA guidelines." },
  ];

  return (
    <div className="py-10">
      <h1 className="text-4xl font-extrabold font-display">Job Opportunities</h1>
      <p className="mt-4 text-gray-700">Join our mission-driven team and make a lasting impact on young learners.</p>

      <div className="mt-8 grid gap-4">
        {jobs.map((j, i)=> (
          <div key={i} className="card">
            <h3 className="text-xl font-bold">{j.title}</h3>
            <p className="text-gray-700 mt-2">{j.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold">Apply Now</h2>
        <p className="text-gray-700 mt-2">Complete the application form and our team will contact you.</p>
        <div className="mt-4">
          <JobForm />
        </div>
      </div>
    </div>
  );
}
