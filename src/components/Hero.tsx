import Image from "next/image";
import { personal } from "@/lib/data";
import Icon from "./Icon";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 50% -10%, color-mix(in oklab, var(--accent) 18%, transparent), transparent 60%)",
        }}
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-mono text-sm text-accent mb-4 tracking-wide">
            Hi, my name is
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground">
            {personal.name}.
          </h1>
          <h2 className="mt-3 text-2xl sm:text-3xl font-medium text-muted tracking-tight">
            {personal.title}
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted leading-relaxed">
            {personal.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-5 py-2.5 text-sm font-medium hover:bg-accent-hover transition-colors"
            >
              View Projects
              <Icon name="arrow" size={16} />
            </a>
            <a
              href={personal.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors"
            >
              <Icon name="download" size={16} />
              Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5 text-muted">
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
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="hover:text-accent transition-colors"
            >
              <Icon name="mail" size={22} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex items-center justify-center md:justify-end">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-full blur-2xl opacity-60"
              style={{
                background:
                  "conic-gradient(from 120deg, var(--accent), transparent 40%, var(--accent) 80%)",
              }}
            />
            <Image
              src="/Face Only Head Shot.jpg"
              alt={`${personal.name} portrait`}
              width={288}
              height={288}
              priority
              className="relative h-56 w-56 sm:h-72 sm:w-72 rounded-full border-2 border-accent object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
