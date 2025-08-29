import Image from "next/image";
import Link from "next/link";

export default function Logo({ className="" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      <Image src="/logo.jpg" alt="Genesis Royalty Daycare" width={48} height={48} className="rounded-lg" />
      <span className="font-extrabold font-display text-xl">
        <span className="text-royalRed">GENESIS</span>{" "}
        <span className="text-royalYellow">ROYALTY</span>
      </span>
    </Link>
  );
}
