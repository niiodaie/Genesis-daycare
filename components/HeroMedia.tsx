'use client';
export default function HeroMedia() {
  const src = process.env.NEXT_PUBLIC_HERO_VIDEO_URL || '';
  const hasVideo = !!src;
  if (hasVideo) {
    return (
      <div className="relative rounded-3xl overflow-hidden shadow-soft">
        <video
          className="w-full h-[60vh] object-cover"
          src={src}
          autoPlay
          playsInline
          muted
          loop
          controls={false}
          aria-label="Hero background video"
        />
        <div className="absolute inset-0 pointer-events-none bg-black/10" />
      </div>
    );
  }
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-soft flex items-center justify-center h-[60vh] bg-gradient-to-br from-royalTeal/20 via-royalYellow/20 to-royalPurple/20">
      <div className="text-center px-6">
        <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-white/80 flex items-center justify-center shadow">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="text-royalRed">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold">Hero video placeholder</h3>
        <p className="text-gray-700 mt-2">Set <code className="font-mono">NEXT_PUBLIC_HERO_VIDEO_URL</code> to enable autoplay.</p>
      </div>
    </div>
  );
}
