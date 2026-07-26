import { experience } from "@/lib/data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-shell">
        <Reveal><div className="section-heading-row"><div className="section-label"><span>02</span> Experience</div><p>Selected roles and the work behind them.</p></div></Reveal>
        <ol className="experience-ledger">
          {experience.map((job, index) => (
            <Reveal key={`${job.company}-${job.role}`} delay={index * 90}>
              <li className="experience-entry">
                <div className="experience-index">0{index + 1}</div>
                <div className="experience-meta"><p>{job.start} - {job.end}</p><p>{job.location}</p></div>
                <div className="experience-content">
                  <p className="experience-company">{job.company}{job.subtitle && <span> / {job.subtitle}</span>}</p>
                  <h3>{job.role}</h3>
                  <ul>{job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
