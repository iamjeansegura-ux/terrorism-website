import { radicalizationPath } from "@/data/site-content";

export function RadicalizationPath() {
  return (
    <aside className="rounded-[2rem] border border-brand-navy/10 bg-brand-navy p-6 text-white shadow-soft sm:p-7">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
        Gradual Development
      </p>
      <h3 className="mt-4 text-3xl font-semibold leading-tight sm:text-[2.1rem]">
        Radicalization can develop step by step.
      </h3>
      <p className="mt-4 text-base leading-7 text-white/80">
        There is no single formula, but many cases show a gradual process. That
        is why early support, trusted relationships, and accurate information are so
        important.
      </p>

      <ol className="mt-8 space-y-5">
        {radicalizationPath.map((item, index) => (
          <li
            key={item.title}
            className="flex gap-4 rounded-[1.4rem] border border-white/10 bg-white/5 p-4"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-base font-semibold">
              {index + 1}
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">{item.title}</h4>
              <p className="mt-2 text-sm leading-6 text-white/70 sm:text-base">
                {item.text}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </aside>
  );
}
