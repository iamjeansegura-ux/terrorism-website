import { projectAuthors } from "@/data/site-content";

const authorLine = `${projectAuthors.slice(0, -1).join(", ")}, and ${projectAuthors.at(-1)}`;

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-navy/10 bg-white/75">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 text-sm text-brand-steel sm:text-base lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-red">
            Understanding Terrorism: Root Causes and Prevention
          </p>
          <p className="max-w-2xl leading-7 text-brand-steel">
            Created by {authorLine}.
          </p>
        </div>

        <div className="space-y-2 lg:justify-self-end lg:text-right">
          <p>Website created in 2026</p>
          <p>For educational purposes only</p>
        </div>
      </div>
    </footer>
  );
}
