import { personal } from "@/lib/data";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="font-mono text-sm text-accent mb-3 tracking-wide">
            05 / contact
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
            Let&apos;s build something.
          </h2>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            {personal.availability}. If you have an internship, a freelance
            project, or just want to say hi — my inbox is open.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-6 py-3 text-sm font-medium hover:bg-accent-hover transition-colors"
            >
              <Icon name="mail" size={18} />
              {personal.email}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-5 text-muted">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-accent transition-colors"
            >
              <Icon name="github" size={22} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-accent transition-colors"
            >
              <Icon name="linkedin" size={22} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
