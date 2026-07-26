import type { Project } from "@/lib/data";
import { projects } from "@/lib/data";
import Icon from "./Icon";
import Reveal from "./Reveal";

function ProjectArt({ visual, name }: Pick<Project, "visual" | "name">) {
  return (
    <div className={`project-art art-${visual}`} aria-label={`${name} visual treatment`} role="img">
      {visual === "market" && <><span className="art-label">MARKETLENS / SIGNALS</span><span className="market-line line-one" /><span className="market-line line-two" /><span className="market-dot dot-one" /><span className="market-dot dot-two" /><span className="market-grid" /></>}
      {visual === "billing" && <><span className="art-label">INTELLIPAY / LEDGER</span><span className="billing-ring" /><span className="billing-ring ring-two" /><span className="billing-amount">$12.84</span><span className="billing-bars" /></>}
      {visual === "flight" && <><span className="art-label">FLIGHT PATH / 02</span><span className="flight-field" /><span className="flight-route" /><span className="flight-pin pin-one" /><span className="flight-pin pin-two" /></>}
    </div>
  );
}

function ProjectStory({ project, featured }: { project: Project; featured?: boolean }) {
  return (
    <article className={`project-story ${featured ? "is-featured" : ""}`}>
      <ProjectArt visual={project.visual} name={project.name} />
      <div className="project-body">
        <p className="project-meta"><span>{project.start} - {project.end}</span> <span>{project.tagline}</span></p>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="project-highlights">{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
        <div className="project-footer">
          <ul className="tech-list">{project.stack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
          {project.href && <a href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name}`} className="project-link"><Icon name="external" size={18} /></a>}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [featured, ...remainingProjects] = projects;
  return (
    <section id="projects" className="section projects-section">
      <div className="section-shell">
        <Reveal><div className="section-heading-row"><div className="section-label"><span>03</span> Selected work</div><p>Experiments, systems, and products made useful.</p></div></Reveal>
        <Reveal><ProjectStory project={featured} featured /></Reveal>
        <div className="project-pair">
          {remainingProjects.map((project, index) => <Reveal key={project.name} delay={index * 100}><ProjectStory project={project} /></Reveal>)}
        </div>
      </div>
    </section>
  );
}
