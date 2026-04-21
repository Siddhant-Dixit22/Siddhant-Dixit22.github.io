import { projects } from "@/lib/data";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            kicker="03 / projects"
            title="Things I've built"
            description="A few recent projects I'm proud of. More on GitHub."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 100}>
              <article className="group h-full rounded-2xl border border-border bg-card p-6 sm:p-8 transition-colors hover:border-accent">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs text-muted">
                      {project.start} — {project.end}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-muted">{project.tagline}</p>
                  </div>
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} repository`}
                      className="shrink-0 text-muted hover:text-accent transition-colors"
                    >
                      <Icon name="external" size={20} />
                    </a>
                  )}
                </div>

                <p className="mt-4 text-sm text-muted leading-relaxed">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {project.highlights.map((h, idx) => (
                    <li
                      key={idx}
                      className="relative pl-5 text-sm text-muted leading-relaxed"
                    >
                      <span className="absolute left-0 top-2 h-1 w-1.5 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
