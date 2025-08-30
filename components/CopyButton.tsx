"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyButton({
  value,
  label = "Copy",
  className = "",
}: { value: string; label?: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        } catch {}
      }}
      className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-slate-50 ${className}`}
      aria-label={`${label}: ${value}`}
    >
      {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
      {copied ? "Copied!" : label}
    </button>
  );
}
