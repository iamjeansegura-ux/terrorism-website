import { qrResourceTopics } from "@/data/site-content";

export function QrPlaceholder() {
  return (
    <section
      id="resources"
      className="section-shell scroll-mt-24 overflow-hidden p-8 motion-safe:animate-rise sm:p-10 lg:p-12"
    >
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-5">
          <span className="eyebrow">Further Reading</span>
          <h3 className="text-3xl font-semibold text-brand-navy sm:text-[2.2rem]">
            Scan to explore more resources
          </h3>
          <p className="max-w-xl text-base leading-7 text-brand-steel sm:text-[1.05rem]">
            This resource panel can connect viewers to supporting articles, campus
            services, prevention programs, and presentation materials that extend the discussion.
          </p>
          <p className="max-w-xl text-sm leading-6 text-brand-steel/80">
            It helps turn the website into a useful presentation tool for classmates,
            instructors, and community audiences.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {qrResourceTopics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-brand-navy/10 bg-white px-4 py-2 text-sm text-brand-steel"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-md justify-center">
          <div className="rounded-[2rem] border border-brand-navy/15 bg-brand-mist p-6 shadow-soft sm:p-7">
            <div className="mb-4 flex items-center justify-between rounded-2xl bg-white px-4 py-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-navy">
                QR Code Placeholder
              </p>
              <span className="rounded-full bg-brand-red/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">
                Resources
              </span>
            </div>
            <div
              aria-label="Illustrative QR code panel"
              className="grid grid-cols-7 gap-2 rounded-[1.5rem] bg-white p-5"
              role="img"
            >
              {Array.from({ length: 49 }).map((_, index) => {
                const filled = [
                  0, 1, 2, 4, 6, 7, 10, 12, 14, 15, 17, 20, 21, 24, 26, 28, 30, 31,
                  34, 36, 38, 40, 42, 45, 46, 47, 48
                ].includes(index);
                return (
                  <span
                    key={index}
                    aria-hidden="true"
                    className={`h-6 w-6 rounded-[0.35rem] ${
                      filled ? "bg-brand-navy" : "bg-brand-navy/10"
                    }`}
                  />
                );
              })}
            </div>
            <p className="mt-4 text-center text-sm text-brand-steel">
              Replace this panel with a real QR code when final resources are ready.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
