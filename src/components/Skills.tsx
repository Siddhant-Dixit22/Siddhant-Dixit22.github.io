import { certifications, skills } from "@/lib/data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-shell">
        <Reveal><div className="section-label"><span>04</span> Toolbox</div></Reveal>
        <div className="skills-layout">
          <Reveal><h2 className="section-title">A practical stack for getting <em>useful work</em> into the world.</h2></Reveal>
          <div className="skill-groups">
            {Object.entries(skills).map(([group, items], index) => <Reveal key={group} delay={index * 70}><div className="skill-group"><h3>{group}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></div></Reveal>)}
          </div>
        </div>
        <Reveal delay={200}><div className="certification-strip"><span>Credentials</span>{certifications.map((certification) => <p key={certification}>✦ {certification}</p>)}</div></Reveal>
      </div>
    </section>
  );
}
