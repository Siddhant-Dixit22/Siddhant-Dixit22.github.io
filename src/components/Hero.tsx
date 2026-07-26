import Image from "next/image";
import { personal } from "@/lib/data";
import Icon from "./Icon";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-kicker">Portfolio / 2026</p>
          <p className="availability"><span /> {personal.availability}</p>
          <h1>Siddhant<br /><em>Dixit</em></h1>
          <p className="hero-role">{personal.title}</p>
          <p className="hero-tagline">{personal.tagline}</p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">Explore selected work <Icon name="arrow" size={16} /></a>
            <a href={personal.resumeHref} target="_blank" rel="noopener noreferrer" className="button button-secondary"><Icon name="download" size={16} /> Resume</a>
          </div>
          <div className="hero-socials" aria-label="Social links">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link"><Icon name="github" size={19} /></a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link"><Icon name="linkedin" size={19} /></a>
            <a href={`mailto:${personal.email}`} aria-label="Email" className="social-link"><Icon name="mail" size={19} /></a>
          </div>
        </div>

        <div className="hero-portrait-wrap">
          <div className="portrait-stamp">Based in<br />{personal.location}</div>
          <div className="portrait-frame">
            <Image src="/Face Only Head Shot.jpg" alt={`${personal.name} portrait`} width={600} height={680} priority className="portrait-image" />
          </div>
          <p className="portrait-caption">Software / Data / ML</p>
        </div>
      </div>
    </section>
  );
}
