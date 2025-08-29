export default function BookingEmbed({ url }: { url: string }) {
  if (!url) {
    return <p className="text-sm text-gray-600">Add your Calendly/Cal.com link via <code>NEXT_PUBLIC_CALENDLY_TOUR_URL</code> or <code>NEXT_PUBLIC_CALENDLY_COUNSEL_URL</code>.</p>
  }
  return (
    <div className="w-full">
      <iframe
        className="w-full h-[900px] rounded-3xl border"
        src={url}
      />
    </div>
  );
}
