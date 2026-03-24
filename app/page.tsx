import { ContentSection } from "@/components/content-section";
import { Hero } from "@/components/hero";
import { InfoCard } from "@/components/info-card";
import {
  BookIcon,
  CheckIcon,
  CompassIcon,
  NetworkIcon,
  PeopleIcon,
  ShieldIcon,
  WarningIcon
} from "@/components/icons";
import { RadicalizationPath } from "@/components/radicalization-path";
import { ResourcesPanel } from "@/components/resources-panel";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  awarenessPoints,
  communityActions,
  preventionIdeas,
  rootCauses,
  studyPrinciples,
  terrorismTypes,
  typeComparisons
} from "@/data/site-content";

const causeIcons = [CompassIcon, BookIcon, WarningIcon, ShieldIcon, NetworkIcon, PeopleIcon];
const awarenessIcons = [WarningIcon, PeopleIcon, BookIcon];
const preventionIcons = [BookIcon, PeopleIcon, ShieldIcon, NetworkIcon];
const principleIcons = [BookIcon, PeopleIcon, ShieldIcon];

export default function Home() {
  return (
    <main className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-brand-navy focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <SiteHeader />

      <div
        id="main-content"
        className="mx-auto max-w-7xl space-y-12 px-4 pb-16 sm:px-6 lg:space-y-14 lg:px-8 lg:pb-20"
      >
        <Hero />

        <ContentSection id="overview">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-12">
            <div className="space-y-8">
              <SectionHeading
                eyebrow="What Is Terrorism?"
                title="A neutral definition for academic discussion"
                description="Terrorism is the use or threat of violence to create fear and influence political, social, or ideological goals. In academic settings, the topic should be discussed with factual context, careful language, and respect for public safety."
              />

              <div className="rounded-[1.75rem] border border-brand-navy/10 bg-brand-mist/70 p-6 sm:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
                  Key Academic Point
                </p>
                <p className="mt-3 text-base leading-7 text-brand-steel sm:text-[1.05rem]">
                  A careful definition matters because it helps students focus on
                  behavior, intent, and public safety rather than stereotypes about
                  religion, nationality, race, or identity.
                </p>
              </div>
            </div>

            <div className="grid gap-5">
              {studyPrinciples.map((principle, index) => {
                const Icon = principleIcons[index];

                return (
                  <InfoCard
                    key={principle.title}
                    title={principle.title}
                    text={principle.text}
                    icon={<Icon className="h-6 w-6" />}
                    eyebrow="Study Lens"
                  />
                );
              })}
            </div>
          </div>
        </ContentSection>

        <ContentSection id="types">
          <SectionHeading
            eyebrow="Types of Terrorism"
            title="Domestic and foreign terrorism differ in scope, networks, and context."
            description="Both forms can cause serious harm, but they are not identical. They differ in where planning occurs, how networks are connected, and what broader context shapes the threat."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-6 md:grid-cols-2">
              {terrorismTypes.map((type, index) => (
                <InfoCard
                  key={type.title}
                  title={type.title}
                  text={type.text}
                  eyebrow={type.label}
                  icon={
                    index === 0 ? (
                      <ShieldIcon className="h-6 w-6" />
                    ) : (
                      <NetworkIcon className="h-6 w-6" />
                    )
                  }
                  accent={index === 0 ? "navy" : "red"}
                />
              ))}
            </div>

            <aside className="rounded-[1.75rem] border border-brand-navy/10 bg-brand-mist/70 p-6 sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
                Quick Comparison
              </p>
              <div className="mt-5 space-y-5">
                {typeComparisons.map((item) => (
                  <div
                    key={item.title}
                    className="border-t border-brand-navy/10 pt-5 first:border-t-0 first:pt-0"
                  >
                    <h3 className="text-lg font-semibold text-brand-navy">{item.title}</h3>
                    <p className="mt-2 text-base leading-7 text-brand-steel">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </ContentSection>

        <ContentSection id="causes">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Root Causes"
                title="No single factor explains terrorism, but several pressures can increase risk."
                description="Researchers often examine personal, social, political, and economic conditions together. Radicalization may develop gradually, especially when multiple pressures and influences combine over time."
              />

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                {rootCauses.map((cause, index) => {
                  const Icon = causeIcons[index];

                  return (
                    <InfoCard
                      key={cause.title}
                      title={cause.title}
                      text={cause.text}
                      icon={<Icon className="h-6 w-6" />}
                    />
                  );
                })}
              </div>
            </div>

            <RadicalizationPath />
          </div>
        </ContentSection>

        <ContentSection id="awareness">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-12">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Why Awareness Matters"
                title="Awareness helps communities respond with care, accuracy, and early support."
                description="Students, families, and community members are better prepared when they understand that extremist thinking can develop slowly and that prevention depends on trust, support, and accurate information."
              />

              <div className="rounded-[1.75rem] border border-brand-red/10 bg-brand-red/5 p-6 sm:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
                  Why This Matters on Campus
                </p>
                <p className="mt-3 text-base leading-7 text-brand-steel sm:text-[1.05rem]">
                  Students often learn about terrorism through news, social media,
                  and class discussion. A clear awareness base helps them separate
                  facts from misinformation and focus on prevention instead of fear.
                </p>
              </div>
            </div>

            <div className="grid gap-5">
              {awarenessPoints.map((point, index) => {
                const Icon = awarenessIcons[index];

                return (
                  <div
                    key={point.title}
                    className="card-hover flex gap-4 rounded-[1.5rem] border border-brand-navy/10 bg-white p-5 sm:p-6"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-navy/10 text-brand-navy">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-brand-navy sm:text-[1.35rem]">
                        {point.title}
                      </h3>
                      <p className="mt-2 text-base leading-7 text-brand-steel">{point.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ContentSection>

        <ContentSection id="prevention">
          <SectionHeading
            eyebrow="Prevention and Community Action"
            title="Prevention works best when education, trust, and shared responsibility come together."
            description="Communities can lower risk by building trust, strengthening communication, and offering support systems before harmful ideas turn into harmful actions."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div className="grid gap-5 md:grid-cols-2">
              {preventionIdeas.map((idea, index) => {
                const Icon = preventionIcons[index];

                return (
                  <InfoCard
                    key={idea.title}
                    title={idea.title}
                    text={idea.text}
                    icon={<Icon className="h-6 w-6" />}
                    accent={index % 2 === 1 ? "red" : "navy"}
                  />
                );
              })}
            </div>

            <aside className="rounded-[1.75rem] border border-brand-navy/10 bg-brand-mist/70 p-6 sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
                Community Action Checklist
              </p>
              <div className="mt-6 space-y-5">
                {communityActions.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-[1.3rem] border border-brand-navy/10 bg-white px-4 py-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-navy text-white">
                      <CheckIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-brand-navy">{item.title}</h3>
                      <p className="mt-2 text-base leading-7 text-brand-steel">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </ContentSection>

        <ResourcesPanel />
      </div>

      <SiteFooter />
    </main>
  );
}
