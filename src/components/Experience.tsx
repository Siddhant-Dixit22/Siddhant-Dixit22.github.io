import { experience } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading kicker="02 / experience" title="Where I've worked" />
        </Reveal>

        <ol className="relative space-y-8 border-l border-border pl-6 md:pl-8">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${i}`} delay={i * 80}>
              <li className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[34px] md:-left-[42px] top-2 h-3 w-3 rounded-full bg-accent ring-4 ring-background"
                />
                <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {job.role}
                        <span className="text-accent"> @ {job.company}</span>
                      </h3>
                      {job.subtitle && (
                        <p className="text-sm text-muted mt-0.5">
                          {job.subtitle}
                        </p>
                      )}
                    </div>
                    <p className="font-mono text-xs text-muted whitespace-nowrap">
                      {job.start} – {job.end}
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-muted">{job.location}</p>
                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((h, idx) => (
                      <li
                        key={idx}
                        className="relative pl-5 text-sm text-muted leading-relaxed"
                      >
                        <span className="absolute left-0 top-2 h-1 w-1.5 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
