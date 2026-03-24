import { BookIcon } from "@/components/icons";
import { featuredResource, resourceSupportTopics } from "@/data/site-content";

export function ResourcesPanel() {
  return (
    <section
      id="resources"
      className="section-shell scroll-mt-24 overflow-hidden p-8 motion-safe:animate-rise sm:p-10 lg:p-12"
    >
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-5">
          <span className="eyebrow">Further Reading</span>
          <h3 className="text-3xl font-semibold text-brand-navy sm:text-[2.2rem]">
            Explore more resources
          </h3>
          <p className="max-w-xl text-base leading-7 text-brand-steel sm:text-[1.05rem]">
            This section links to outside material that can support class research,
            discussion, and presentation planning in a respectful academic format.
          </p>
          <p className="max-w-xl text-sm leading-6 text-brand-steel/80">
            It gives students one clear place to continue reading after the main
            website sections.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {resourceSupportTopics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-brand-navy/10 bg-white px-4 py-2 text-sm text-brand-steel"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-xl">
          <article className="w-full rounded-[2rem] border border-brand-navy/15 bg-brand-mist p-6 shadow-soft sm:p-7">
            <div className="rounded-[1.6rem] bg-white p-6 sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-white">
                <BookIcon className="h-6 w-6" />
              </div>

              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
                {featuredResource.source}
              </p>
              <h4 className="mt-3 text-2xl font-semibold leading-tight text-brand-navy sm:text-[1.9rem]">
                {featuredResource.title}
              </h4>
              <p className="mt-3 text-base leading-7 text-brand-steel">
                {featuredResource.description}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={featuredResource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold"
                >
                  Open Resource Guide
                </a>
                <span className="text-sm text-brand-steel">Opens in a new tab</span>
              </div>

              <p className="mt-4 break-all text-sm text-brand-steel/80">
                {featuredResource.href}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
