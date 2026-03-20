type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-5">
      <span className="eyebrow">{eyebrow}</span>
      <div className="space-y-4">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-brand-navy sm:text-[2.2rem] lg:text-[2.65rem]">
          {title}
        </h2>
        <p className="section-copy">{description}</p>
      </div>
    </div>
  );
}
