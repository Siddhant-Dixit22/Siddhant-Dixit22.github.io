import { about, education, personal } from "@/lib/data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-shell">
        <Reveal><div className="section-label"><span>01</span> About</div></Reveal>
        <div className="about-layout">
          <Reveal><div>
            <h2 className="section-title">I build systems that turn <em>complexity</em> into clarity.</h2>
            <div className="about-copy">{about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </div></Reveal>
          <Reveal delay={100}><aside className="about-notes" aria-label="Education and current focus">
            <div className="note-block">
              <p className="note-label">Currently</p>
              <p className="note-value">{personal.availability}</p>
            </div>
            <div className="note-block">
              <p className="note-label">Education</p>
              <p className="note-value">{education.school}</p>
              <p className="note-detail">{education.degree}<br />{education.graduation} / GPA {education.gpa}</p>
            </div>
            <div className="note-block">
              <p className="note-label">Relevant study</p>
              <p className="note-detail">{education.coursework.slice(0, 6).join(" / ")}</p>
            </div>
          </aside></Reveal>
        </div>
      </div>
    </section>
  );
}
