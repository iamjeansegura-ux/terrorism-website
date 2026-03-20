import {
  BookIcon,
  CompassIcon,
  PeopleIcon,
  ShieldIcon
} from "@/components/icons";
import { projectAuthors, projectFacts } from "@/data/site-content";

const factIcons = [BookIcon, CompassIcon, ShieldIcon, PeopleIcon];

export function ProjectBrief() {
  return (
    <aside className="rounded-[2rem] border border-white/75 bg-white/90 p-6 shadow-soft backdrop-blur motion-safe:animate-rise sm:p-7 [animation-delay:0.1s]">
      <div className="flex items-start justify-between gap-4 rounded-[1.6rem] bg-brand-navy px-5 py-5 text-white">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-white/70">
            Project Snapshot
          </p>
          <p className="mt-2 text-2xl font-semibold leading-tight">
            College presentation website with a prevention-centered message
          </p>
        </div>
        <span className="rounded-full border border-white/15 px-3 py-1 text-sm font-semibold">
          2026
        </span>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {projectFacts.map((fact, index) => {
          const Icon = factIcons[index];

          return (
            <div
              key={fact.label}
              className="rounded-[1.35rem] border border-brand-navy/10 bg-brand-mist/70 p-4"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-brand-navy shadow-sm">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                {fact.label}
              </p>
              <p className="mt-2 text-base font-semibold leading-6 text-brand-navy">
                {fact.value}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-[1.6rem] border border-brand-navy/10 bg-white p-5 sm:p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
          Created By
        </p>
        <ul className="mt-4 grid gap-3 text-base text-brand-steel sm:grid-cols-2">
          {projectAuthors.map((author) => (
            <li
              key={author}
              className="rounded-2xl border border-brand-navy/10 bg-brand-sand px-4 py-3"
            >
              {author}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-6 text-brand-steel/90">
          Built to support a college-level discussion using simple academic English,
          clear sections, and a respectful classroom tone.
        </p>
      </div>
    </aside>
  );
}
