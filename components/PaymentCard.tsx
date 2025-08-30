import { ReactNode } from "react";

export default function PaymentCard({
  id,
  title,
  subtitle,
  icon,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="card border">
      <div className="flex items-start gap-3">
        {icon && <div className="shrink-0 mt-0.5">{icon}</div>}
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          {subtitle && <p className="text-slate-600 text-sm mt-0.5">{subtitle}</p>}
        </div>
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}
