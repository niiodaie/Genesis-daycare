import BookingEmbed from "@/components/BookingEmbed";

export default function BookTourPage() {
  const url = process.env.NEXT_PUBLIC_CALENDLY_TOUR_URL || "";
  return (
    <div className="py-10">
      <h1 className="text-4xl font-extrabold font-display">Book a Tour</h1>
      <p className="mt-4 text-gray-700">Choose a time that works for your family. We look forward to meeting you!</p>
      <div className="mt-8">
        <BookingEmbed url={url} />
      </div>
    </div>
  );
}
