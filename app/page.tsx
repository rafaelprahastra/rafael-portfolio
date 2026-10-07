import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skills, academicSkills, learning } from "@/data/skills";
import { education } from "@/data/education";
import { ProjectCard } from "@/components/project-card";
export default function Home() {
  return (
    <main id="main">
      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-top">
          <p className="eyebrow">
            Rafael Sani Valentino Prahastra{" "}
            <span className="alias">/ Dava</span>
          </p>
          <p className="availability">
            <span aria-hidden="true" />
            Open to internships & collaboration
          </p>
        </div>
        <h1 id="hero-title">
          Practical systems.
          <br />
          <span className="serif">Thoughtful engineering.</span>
        </h1>
        <div className="hero-bottom">
          <p className="hero-identity">
            Computer Science student
            <br />
            BINUS University
          </p>
          <div className="hero-intro">
            <p>
              Focused on <strong>backend systems, cloud infrastructure,</strong>{" "}
              and AI-assisted development. I build software that solves
              practical problems — and learn from the details.
            </p>
            <div className="actions">
              <a className="button primary" href="#work">
                View selected work <span aria-hidden="true">↘</span>
              </a>
              <a className="text-link" href={profile.cv} download>
                Download CV <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-rule">
          <span>Portfolio / Selected work</span>
          <span>Python · Systems · Cloud</span>
          <span aria-hidden="true">Scroll to explore ↓</span>
        </div>
      </section>
      <section id="work" className="section wrap" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="eyebrow">01 / Selected work</p>
          <h2 id="work-title">
            Less noise.
            <br />
            <span className="serif">More substance.</span>
          </h2>
          <p>
            Real workflows, clear boundaries,
            <br />
            and the decisions behind the code.
          </p>
        </div>
        <div className="project-list">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
        <div className="live-work" id="results">
          <p className="eyebrow">A project you can try</p>
          <h3>Personal portfolio website</h3>
          <p>This website is a working project built with Next.js, React, TypeScript, and Tailwind CSS. It includes project case studies, a downloadable CV, and a public source repository. I used AI-assisted tools to help build it and reviewed the content and changes.</p>
          <figure>
            {/* Actual browser capture of the deployed website, not a generated mockup. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/projects/portfolio-live.jpg" alt="Actual screenshot of Rafael's deployed portfolio homepage before the peer-review update" width={1440} height={1000} loading="lazy" />
            <figcaption>Actual deployed website screenshot, captured before this peer-review update. Other project visuals above are concept illustrations, not product screenshots.</figcaption>
          </figure>
          <div className="actions">
            <a className="button primary" href="https://rafael-prahastra-portfolio.vercel.app/">Open live website ↗</a>
            <a className="text-link" href="https://github.com/rafaelprahastra/rafael-portfolio" rel="noopener noreferrer">View portfolio source ↗</a>
          </div>
          <h3>Basic circuit design and simulation</h3>
          <p>An academic Computational Physics lab comparing current at different resistance values. The supplied report includes a results table and graphs for a 12 V RMS source. This is a real excerpt from my lab submission, not a generated project mockup. The simulation was not rerun for this portfolio.</p>
          <details className="lab-evidence">
            <summary>View original lab results ↓</summary>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/projects/circuit-lab.jpg" alt="Original lab report page with resistance and RMS current results, a waveform graph, and a spreadsheet chart" width={918} height={1188} loading="lazy" />
              <figcaption>Page 2 of my supplied lab report. The identity cover page is not published. My work here is the academic analysis and report; this is not a hosted simulation app.</figcaption>
            </figure>
          </details>
          <p>Original screenshots or public demos for SimbaBlox, Automm Escrow, and Smart Space are not available here yet. Private application data is not published.</p>
        </div>
      </section>
      <section
        id="about"
        className="about-section section"
        aria-labelledby="about-title"
      >
        <div className="wrap about-grid">
          <div>
            <p className="eyebrow">02 / A little context</p>
            <h2 id="about-title">
              Curious by nature.
              <br />
              <span className="serif">Practical by choice.</span>
            </h2>
            <div className="about-signature">
              Rafael <span>/ Dava</span>
            </div>
          </div>
          <div className="about-copy">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <a href={`mailto:${profile.email}`} className="text-link">
              Let&apos;s talk <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
      <section
        id="skills"
        className="section wrap"
        aria-labelledby="skills-title"
      >
        <div className="section-heading">
          <p className="eyebrow">03 / Toolkit</p>
          <h2 id="skills-title">
            The tools behind
            <br />
            <span className="serif">the thinking.</span>
          </h2>
          <p>
            Hands-on practice, academic work,
            <br />
            and what I&apos;m learning next.
          </p>
        </div>
        <div className="skills-grid">
          {skills.map((s, i) => (
            <article key={s.title}>
              <span className="skill-index">0{i + 1}</span>
              <h3>{s.title}</h3>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="learning-row">
          <div>
            <p className="eyebrow">Academic prototype experience</p>
            <p>{academicSkills.join(" · ")}</p>
          </div>
          <div>
            <p className="eyebrow">Currently learning / exploring</p>
            <p>{learning.join(" · ")}</p>
          </div>
        </div>
      </section>
      <section
        id="education"
        className="section wrap education-section"
        aria-labelledby="education-title"
      >
        <p className="eyebrow">04 / Education</p>
        <div className="education-grid">
          <h2 id="education-title">
            A foundation.
            <br />
            <span className="serif">A starting point.</span>
          </h2>
          <div>
            <div className="education-top">
              <h3>{education.institution}</h3>
              <span>{education.status}</span>
            </div>
            <p className="degree">{education.program}</p>
            <p className="eyebrow">Relevant coursework</p>
            <ul className="coursework">
              {education.coursework.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section
        className="philosophy section wrap"
        aria-labelledby="philosophy-title"
      >
        <div>
          <p className="eyebrow">05 / How I build</p>
          <h2 id="philosophy-title">
            Small steps.
            <br />
            <span className="serif">Strong boundaries.</span>
          </h2>
        </div>
        <div className="principles">
          {[
            {
              title: "Sandbox first",
              text: "Use temporary data and mocks. Keep experiments away from production records.",
            },
            {
              title: "Make state explicit",
              text: "Define the transitions, the permissions, and what should happen on a retry.",
            },
            {
              title: "Review the result",
              text: "Use AI to help build. Use evidence and tests to decide what actually works.",
            },
          ].map((p, i) => (
            <div key={p.title}>
              <span>0{i + 1}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="cv" className="cv-strip wrap" aria-labelledby="cv-title">
        <div>
          <p className="eyebrow">The short version</p>
          <h2 id="cv-title">My background, on one page.</h2>
        </div>
        <a href={profile.cv} className="button" download>
          Download CV <span aria-hidden="true">↓</span>
        </a>
      </section>
      <section
        id="contact"
        className="contact-section"
        aria-labelledby="contact-title"
      >
        <div className="wrap">
          <p className="eyebrow">06 / Start a conversation</p>
          <h2 id="contact-title">
            Something useful
            <br />
            <span className="serif">starts with a hello.</span>
          </h2>
          <div className="contact-bottom">
            <p>
              Internships, junior opportunities,
              <br />
              freelance projects, and thoughtful collaborations.
            </p>
            <a href={`mailto:${profile.email}`} className="contact-email">
              {profile.email} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
