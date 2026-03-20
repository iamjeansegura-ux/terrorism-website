import type { ReactNode } from "react";

type ContentSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function ContentSection({
  children,
  className = "",
  id
}: ContentSectionProps) {
  return (
    <section
      id={id}
      className={`section-shell scroll-mt-24 p-8 motion-safe:animate-rise sm:p-10 lg:p-12 ${className}`}
    >
      {children}
    </section>
  );
}
