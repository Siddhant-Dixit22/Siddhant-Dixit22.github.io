import { about, education } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading kicker="01 / about" title="About me" />
        </Reveal>

        <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
          <Reveal>
            <div className="space-y-4 text-muted leading-relaxed text-lg">
              {about.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <aside className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-mono text-xs uppercase tracking-wider text-accent mb-3">
                Education
              </h3>
              <p className="text-foreground font-medium">{education.school}</p>
              <p className="text-sm text-muted mt-1">{education.degree}</p>
              <p className="text-sm text-muted mt-1">
                {education.graduation} · GPA {education.gpa}
              </p>

              <h4 className="mt-6 font-mono text-xs uppercase tracking-wider text-accent mb-3">
                Coursework
              </h4>
              <ul className="flex flex-wrap gap-1.5">
                {education.coursework.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
