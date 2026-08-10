import type { Metadata } from "next";
import Image from "next/image";
import { projects, skills, experience, impact, contact } from "./portfolio-data";

export const metadata: Metadata = {
  title: "Shan Liu | Software Engineer & Builder",
  description: "Software Engineer and builder based in the Netherlands, specializing in backend systems, APIs, automation, performance engineering, and AI-assisted product development.",
};

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Shan Liu, home">SL<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#projects">Projects</a><a href="#impact">Impact</a><a href="#experience">Experience</a>
          <a href="#skills">Skills</a><a href="#about">About</a>
        </nav>
        <a className="header-cta" href="#contact">Let’s talk <Arrow /></a>
      </header>

      <section className="hero shell" id="home">
        <div className="eyebrow"><span className="pulse" /> Netherlands · Remote</div>
        <h1>Software Engineer<br />&amp; <em>Builder.</em></h1>
        <div className="hero-bottom">
          <p className="hero-copy">I build reliable backend systems, automation tools, and small products that solve <strong>real-world problems.</strong></p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">View projects <span>↓</span></a>
            {contact.cv ? <a className="button secondary" href={contact.cv} download>Download CV</a> : <span className="button secondary unavailable" title="CV link coming soon">Download CV</span>}
          </div>
        </div>
        <div className="hero-meta">
          <p>6 years across backend systems, APIs, databases, infrastructure, performance engineering, and automation. Now using AI-assisted development to turn useful ideas into working products faster.</p>
          <div className="socials">
            <a href={contact.github}>GitHub <Arrow /></a>
            <a href={contact.linkedin}>LinkedIn <Arrow /></a>
            <a href={`mailto:${contact.email}`}>Email <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="shell">
          <div className="section-heading"><div><span className="index">01</span><p className="kicker">Selected work</p></div><h2>Products, not<br /><em>just projects.</em></h2></div>
          <div className="projects-grid">
            {projects.map((project, i) => (
              <article className={`project-card ${project.featured ? "featured" : ""}`} key={project.title}>
                <div className="project-top"><span className="project-number">0{i + 1}</span><span className="status"><i /> {project.status}</span></div>
                <div className="project-mark" aria-hidden="true">{project.mark}</div>
                <div className="project-content">
                  <h3>{project.title}</h3><p>{project.description}</p>
                  <ul className="highlights">{project.highlights.map(x => <li key={x}>{x}</li>)}</ul>
                  <div className="tags">{project.technologies.map(t => <span key={t}>{t}</span>)}</div>
                  {(project.liveUrl || project.githubUrl) && <div className="project-links">{project.liveUrl && <a href={project.liveUrl}>View project <Arrow /></a>}{project.githubUrl && <a href={project.githubUrl}>GitHub <Arrow /></a>}</div>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section impact-section" id="impact">
        <div className="shell">
          <div className="section-heading compact"><div><span className="index">02</span><p className="kicker">Engineering impact</p></div><h2>Measured in<br /><em>outcomes.</em></h2></div>
          <div className="impact-grid">{impact.map((item, i) => <article className="impact-card" key={item.label}><span>0{i + 1}</span><p className="impact-label">{item.label}</p><strong>{item.metric}</strong><p>{item.story}</p></article>)}</div>
          <div className="delivery-strip"><span>Delivery</span><strong>Days → Hours</strong><p>Contributed to deployment and infrastructure improvements that made releases dramatically faster.</p></div>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="shell">
          <div className="section-heading"><div><span className="index">03</span><p className="kicker">Experience</p></div><h2>Six years of<br /><em>shipping well.</em></h2></div>
          <div className="timeline">{experience.map((role) => <article className="role" key={role.company}><div className="role-date">{role.dates}<span>{role.location}</span></div><div><p className="role-company">{role.company}</p><h3>{role.title}</h3><p>{role.summary}</p><ul>{role.outcomes.map(x => <li key={x}>{x}</li>)}</ul></div></article>)}</div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="shell">
          <div className="section-heading compact"><div><span className="index">04</span><p className="kicker">Capabilities</p></div><h2>A broad toolkit,<br /><em>backend first.</em></h2></div>
          <div className="skills-grid">{skills.map((group, i) => <article key={group.title}><span>0{i + 1}</span><h3>{group.title}</h3><p>{group.items.join(" · ")}</p></article>)}</div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="shell about-grid">
          <div className="about-aside"><span className="index">05</span><p className="kicker">About</p>{contact.profilePhoto ? <Image className="profile-photo" src={contact.profilePhoto} alt="Shan Liu" width={720} height={900} /> : <div className="profile-placeholder" role="img" aria-label="Profile photo placeholder"><span>SL</span><small>Profile photo</small></div>}</div>
          <div className="about-copy"><h2>I like finding overlooked problems and turning them into <em>useful software.</em></h2><p>My background is primarily in backend engineering, but I increasingly enjoy owning the complete journey: identifying a problem, designing a solution, building it, deploying it, and learning from real users.</p><p>AI-assisted development has made that process even more interesting. It helps me experiment, test assumptions, and ship ideas faster—without compromising the engineering fundamentals that make software dependable.</p><div className="interests"><span>Backend systems</span><span>Automation</span><span>Developer tooling</span><span>Small SaaS</span><span>AI-assisted building</span></div></div>
        </div>
      </section>

      <section className="education shell" aria-label="Education">
        <p className="kicker">Education</p>
        <div className="education-grid"><article><span>2021 · Distinction</span><h3>MSc Advanced Computer Science</h3><p>University of Sheffield</p><small>Machine learning, NLP, software design, and research into deep learning for brain disease diagnosis.</small></article><article><span>2019</span><h3>BEng Computer Science</h3><p>Nagoya Institute of Technology</p><small>Automated negotiation research, two publications, and award-winning negotiation agents at PRIANAC and ANAC 2018.</small></article></div>
      </section>

      <section className="contact" id="contact"><div className="shell"><span className="index">06</span><p className="kicker">Start a conversation</p><h2>Let’s <em>connect.</em></h2><p>I’m interested in remote software engineering opportunities, product-focused teams, and interesting collaborations.</p><div className="contact-links"><a href={`mailto:${contact.email}`}><span aria-hidden="true">@</span><strong>Email</strong><Arrow /></a><a href={contact.linkedin}><span aria-hidden="true">in</span><strong>LinkedIn</strong><Arrow /></a><a href={contact.github}><span aria-hidden="true">gh</span><strong>GitHub</strong><Arrow /></a>{contact.cv ? <a href={contact.cv} download><span aria-hidden="true">↓</span><strong>Download CV</strong></a> : <span className="contact-item-disabled" title="CV link coming soon"><span aria-hidden="true">↓</span><strong>Download CV</strong></span>}</div><footer><span>Shan Liu © 2026</span><span>Software Engineer &amp; Builder · Netherlands</span><a href="#home">Back to top ↑</a></footer></div></section>
    </main>
  );
}
