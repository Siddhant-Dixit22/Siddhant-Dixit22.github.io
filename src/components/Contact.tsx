import { personal } from "@/lib/data";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-shell">
        <Reveal><p className="section-label"><span>05</span> Contact</p></Reveal>
        <Reveal delay={70}><h2>Have a role, a hard problem, or an idea worth <em>building?</em></h2></Reveal>
        <Reveal delay={120}><p className="contact-copy">{personal.availability}. My inbox is open for internships, freelance work, and thoughtful conversations.</p></Reveal>
        <Reveal delay={170}><div className="contact-actions">
          <a href={`mailto:${personal.email}`} className="email-link">{personal.email} <Icon name="arrow" size={19} /></a>
          <div className="contact-socials">
            <a href={personal.github} target="_blank" rel="noopener noreferrer">GitHub <Icon name="external" size={14} /></a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Icon name="external" size={14} /></a>
          </div>
        </div></Reveal>
      </div>
    </section>
  );
}
