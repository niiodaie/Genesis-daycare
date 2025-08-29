import BookingEmbed from "@/components/BookingEmbed";

export default function CounselingPage() {
  const url = process.env.NEXT_PUBLIC_CALENDLY_COUNSEL_URL || "";
  return (
    <div className="py-10">
      <h1 className="text-4xl font-extrabold font-display">Online Counseling</h1>
      <p className="mt-4 text-gray-700">Schedule a virtual meeting with our team for enrollment, billing, or parenting support.</p>
      <div className="mt-8">
        <BookingEmbed url={url} />
      </div>
    </div>
  );
}
