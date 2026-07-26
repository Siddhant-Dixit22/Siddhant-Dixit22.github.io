import { certifications, skills } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading kicker="04 / skills" title="Tools of the trade" />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {Object.entries(skills).map(([group, items], i) => (
            <Reveal key={group} delay={i * 70}>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-mono text-xs uppercase tracking-wider text-accent mb-4">
                  {group}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border px-3 py-1 text-sm text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6">
          <Reveal delay={220}>
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent mb-4">
              Certifications
            </h3>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((certification, i) => (
              <Reveal key={certification} delay={260 + i * 70}>
                <div className="rounded-2xl border border-accent/40 bg-accent-soft/30 p-5 flex items-center gap-4">
                  <div
                    aria-hidden
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20 font-mono text-sm font-bold text-accent"
                  >
                    ✓
                  </div>
                  <p className="text-foreground font-medium">{certification}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
