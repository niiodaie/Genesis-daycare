export default function AboutPage() {
  return (
    <div className="py-10">
      <h1 className="text-4xl font-extrabold font-display">About Genesis Royalty</h1>
      <p className="mt-4 text-lg text-gray-700">
        Genesis Royalty Daycare Center LLC operates in partnership with a local church facility in Purcellville, VA.
        We focus on early childhood learning, character development, and enrichment activities to support children and working families.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-bold">Business Objectives</h3>
          <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
            <li>Obtain full Virginia daycare licensing within the first 6 months.</li>
            <li>Enroll 15–20 children within 3 months; grow to 40+ by year one.</li>
            <li>Maintain a staff-to-child ratio exceeding state requirements.</li>
            <li>Build strong relationships with families, church, and local schools.</li>
            <li>Reach financial sustainability within 18–24 months.</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="font-bold">Features Families Love</h3>
          <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
            <li>Nutritious meals and snacks (USDA guidelines)</li>
            <li>Indoor & outdoor play spaces</li>
            <li>Daily parent reports & communication app</li>
            <li>Developmental & faith-based activities</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
