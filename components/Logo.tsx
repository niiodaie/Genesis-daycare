import Image from "next/image";
import Link from "next/link";

type Props = {
  size?: number;           // desired display height in px (defaults to 40)
  className?: string;
  priority?: boolean;      // true in header to avoid CLS
};

export default function Logo({ size = 40, className = "", priority = true }: Props) {
  // We give Next a large intrinsic size for sharpness on hi-DPI screens,
  // then cap the display height with Tailwind.
  const intrinsic = size * 4; // retina crispness

  return (
    <Link href="/" aria-label="Genesis Royalty Daycare — Home" className={`inline-flex items-center ${className}`}>
      <div className="relative" style={{ height: size, width: size }}>
        <Image
          src="/logo.png"             // <-- use the trimmed PNG you just added
          alt="Genesis Royalty Daycare logo"
          fill
          sizes={`${size}px`}
          priority={priority}
          className="object-contain"
        />
      </div>
    </Link>
  );
}
