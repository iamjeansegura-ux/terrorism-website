import Link from "next/link";
import { ProjectBrief } from "@/components/project-brief";
import { heroHighlights } from "@/data/site-content";
import { BookIcon, CompassIcon, ShieldIcon } from "@/components/icons";

const heroIcons = [BookIcon, CompassIcon, ShieldIcon];

export function Hero() {
  return (
    <section
      id="top"
      className="relative scroll-mt-24 overflow-hidden px-6 pb-20 pt-12 lg:px-8 lg:pb-28 lg:pt-20"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-grid bg-[size:34px_34px] opacity-35" />
      <div className="absolute right-10 top-12 -z-10 hidden h-52 w-52 rounded-full bg-brand-red/10 blur-3xl lg:block" />
      <div className="absolute left-0 top-24 -z-10 hidden h-64 w-64 rounded-full bg-brand-navy/10 blur-3xl lg:block" />
      <div className="absolute bottom-8 right-1/3 -z-10 hidden h-40 w-40 rounded-full bg-brand-mist blur-3xl lg:block" />

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="motion-safe:animate-rise space-y-10">
          <div className="space-y-6">
            <span className="eyebrow">College Showcase Project 2026</span>
            <div className="space-y-5">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-brand-navy sm:text-5xl lg:text-[4.15rem] lg:leading-[1.05]">
                Understanding Terrorism: Root Causes and Prevention
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-brand-steel sm:text-xl">
                This educational website explains terrorism in clear academic terms,
                compares domestic and foreign terrorism, outlines major root causes,
                and highlights prevention through awareness, education, and community support.
              </p>
            </div>
          </div>

          <div className="rounded-[1.85rem] border border-brand-navy/10 bg-white/80 p-6 shadow-soft backdrop-blur sm:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
              Project Introduction
            </p>
            <p className="mt-3 text-base leading-7 text-brand-steel sm:text-[1.05rem]">
              Created for a college Criminal Justice and Marketing project, this
              site presents the topic in a serious, respectful, and readable format
              that works well for research, discussion, and classroom presentation.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#overview"
              className="button-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold"
            >
              Learn More
            </Link>
            <Link
              href="#prevention"
              className="button-secondary inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold"
            >
              Prevention Strategies
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {heroHighlights.map((item, index) => {
              const Icon = heroIcons[index];

              return (
                <div
                  key={item.title}
                  className="card-hover rounded-[1.45rem] border border-brand-navy/10 bg-white/80 p-5 shadow-soft backdrop-blur"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-mist text-brand-navy">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-brand-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-brand-steel sm:text-base">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <ProjectBrief />
      </div>
    </section>
  );
}
