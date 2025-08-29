export default function AboutPage() {
  return (
    <div className="py-10">
      <h1 className="text-4xl font-extrabold font-display">About GENESIS Royalty</h1>
      <p className="mt-4 text-lg text-gray-700">
        GENESIS Royalty Daycare Center LLC provides a safe, nurturing, and educational childcare environment in partnership
        with a local church facility. We focus on early childhood learning, character development, and enrichment activities
        to support children and working families in the Purcellville area.
      </p>

      {/* Mission & Vision */}
      <section className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-2xl font-bold">Mission</h2>
          <p className="mt-3 text-gray-700">
            To provide a royal standard of care that nurtures, educates, and empowers children to thrive in a safe,
            loving, and faith-inspired environment.
          </p>
        </div>
        <div className="card">
          <h2 className="text-2xl font-bold">Vision</h2>
          <p className="mt-3 text-gray-700">
            To become the leading trusted childcare center in Purcellville, known for excellence in early learning,
            compassionate care, and community partnership.
          </p>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="mt-10 card">
        <h2 className="text-2xl font-bold">Executive Summary</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-4 text-gray-700">
          <div>
            <p><strong>Business Name:</strong> GENESIS Royalty Daycare Center LLC</p>
            <p><strong>Business Structure:</strong> Limited Liability Company (LLC)</p>
            <p><strong>Owner:</strong> Mariam Marie Jalloh</p>
            <p><strong>Industry:</strong> Childcare / Early Childhood Education</p>
          </div>
          <div>
            <p><strong>Location:</strong> 37018 Glendale St., Purcellville, VA 20132 (Operating within a church facility)</p>
            <p><strong>Target Age Group:</strong> 6 weeks – 5 years</p>
            <p><strong>Services:</strong> Full-time and part-time daycare, after-school care, early learning programs</p>
          </div>
        </div>
        <p className="mt-4 text-gray-700">
          Our mission is to deliver high-quality, faith-aligned care that encourages social, emotional, and cognitive growth
          while giving parents peace of mind.
        </p>
      </section>

      {/* Business Objectives */}
      <section className="mt-10 card">
        <h2 className="text-2xl font-bold">Business Objectives</h2>
        <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-2">
          <li>Obtain full Virginia daycare licensing within the first 6 months of operation.</li>
          <li>Enroll at least 15–20 children within the first 3 months and grow to 40+ by the first year.</li>
          <li>Maintain a staff-to-child ratio that exceeds state requirements.</li>
          <li>Build strong relationships with families, the church community, and local schools.</li>
          <li>Achieve financial sustainability within 18–24 months.</li>
        </ul>
      </section>

      {/* Services Offered */}
      <section className="mt-10 card">
        <h2 className="text-2xl font-bold">Services Offered</h2>
        <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-2">
          <li>Full-Time Childcare (Monday–Friday, 6:30 AM – 6:00 PM)</li>
          <li>Part-Time & Drop-In Care</li>
          <li>Infant Care (6 weeks – 18 months)</li>
          <li>Toddler & Preschool Programs (Structured early learning curriculum)</li>
          <li>After-School Care (Homework help and enrichment)</li>
          <li>Summer Camps & Holiday Care</li>
        </ul>
      </section>

      {/* Additional Features */}
      <section className="mt-10 card">
        <h2 className="text-2xl font-bold">Additional Features</h2>
        <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-2">
          <li>Nutritious meals and snacks (following USDA guidelines)</li>
          <li>Indoor and outdoor play spaces adapted from the church facility</li>
          <li>Daily reports and parent communication app</li>
          <li>Developmental and faith-based activities</li>
        </ul>
      </section>
    </div>
  );
}
