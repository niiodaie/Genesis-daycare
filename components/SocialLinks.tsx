// components/SocialLinks.tsx
import React from "react";

type SocialLink = {
  href: string;
  label: string;
  src: string;      // local SVG path in /public/social
};

type Props = {
  className?: string;
  size?: number;        // icon size (px)
  withHeading?: boolean; // show "Follow us" heading + helper text
};

const LINKS: SocialLink[] = [
  { href: "https://facebook.com/YourPage",       label: "Facebook",  src: "/social/facebook.svg" },
  { href: "https://twitter.com/YourHandle",      label: "X (Twitter)",src: "/social/x.svg" },
  { href: "https://youtube.com/@YourChannel",    label: "YouTube",   src: "/social/youtube.svg" },
  { href: "https://tiktok.com/@YourHandle",      label: "TikTok",    src: "/social/tiktok.svg" },
  { href: "https://instagram.com/YourHandle",    label: "Instagram", src: "/social/instagram.svg" },
  // { href: "https://linkedin.com/company/YourOrg", label: "LinkedIn",  src: "/social/linkedin.svg" }, // optional
];

export default function SocialLinks({ className = "", size = 36, withHeading = false }: Props) {
  return (
    <div className={className}>
      {withHeading && (
        <>
          <h2 className="text-xl font-bold">Follow us</h2>
          <p className="mt-2 text-slate-600">
            Get updates, photos, and announcements from Genesis Royalty.
          </p>
        </>
      )}

      <div className={`mt-4 flex flex-wrap gap-3 ${withHeading ? "" : ""}`}>
        {LINKS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="group rounded-full border bg-white/80 p-2 transition hover:-translate-y-0.5 hover:shadow-soft"
          >
            {/* local SVGs: <img> keeps things simple */}
            <img
              src={s.src}
              alt={s.label}
              width={size}
              height={size}
              className="block"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
