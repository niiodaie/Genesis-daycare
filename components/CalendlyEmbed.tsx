"use client";

import { useMemo } from "react";

/**
 * Drop a full Calendly or Cal.com URL in NEXT_PUBLIC_CALENDLY_TOUR_URL.
 * Works with either service. Example:
 *  - https://calendly.com/yourlink/tour?hide_event_type_details=1
 *  - https://cal.com/yourteam/tour?layout=month_view
 */
export default function CalendlyEmbed({
  url,
  height = 780,
  title = "Schedule a Tour",
}: {
  url: string;
  height?: number;
  title?: string;
}) {
  // Add hostname as embed_domain if Calendly and not already present.
  const src = useMemo(() => {
    if (!url) return "";
    try {
      const u = new URL(url);
      const isCalendly = u.hostname.includes("calendly.com");
      if (isCalendly && !u.searchParams.has("embed_domain")) {
        u.searchParams.set("embed_domain", window.location.hostname);
        u.searchParams.set("embed_type", "Inline");
      }
      return u.toString();
    } catch {
      return url;
    }
  }, [url]);

  if (!src) return null;

  return (
    <iframe
      title={title}
      src={src}
      className="w-full rounded-2xl border shadow-soft"
      style={{ height }}
      loading="lazy"
    />
  );
}
