export default function MapEmbed() {
  const q = encodeURIComponent("37018 Glendale St., Purcellville, VA 20132");
  return (
    <iframe
      className="w-full h-96 rounded-3xl border"
      loading="lazy"
      src={`https://www.google.com/maps?q=${q}&output=embed`}
    />
  );
}
