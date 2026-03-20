import type { ReactNode } from "react";

type InfoCardProps = {
  eyebrow?: string;
  title: string;
  text: string;
  icon?: ReactNode;
  accent?: "navy" | "red";
  className?: string;
};

export function InfoCard({
  eyebrow,
  title,
  text,
  icon,
  accent = "navy",
  className = ""
}: InfoCardProps) {
  const accentClasses =
    accent === "red"
      ? "border-brand-red/15 bg-brand-red/5 text-brand-red"
      : "border-brand-navy/10 bg-white text-brand-navy";
  const eyebrowClasses =
    accent === "red" ? "text-brand-red/75" : "text-brand-navy/70";

  return (
    <article
      className={`card-hover flex h-full flex-col rounded-[1.5rem] border p-6 sm:p-7 ${accentClasses} ${className}`}
    >
      {icon ? (
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-current/10">
          <span className="h-6 w-6">{icon}</span>
        </div>
      ) : null}
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${eyebrowClasses}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h3 className="text-xl font-semibold sm:text-[1.35rem]">{title}</h3>
      <p className="mt-3 text-base leading-7 text-brand-steel">{text}</p>
    </article>
  );
}
