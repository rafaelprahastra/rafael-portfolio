/* SVG illustrations are already resolution-independent; no raster optimization needed. */
/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return p
    ? {
        title: p.title,
        description: p.description,
        alternates: { canonical: `/work/${p.slug}` },
        openGraph: {
          title: p.title,
          description: p.description,
          url: `/work/${p.slug}`,
        },
      }
    : { title: "Project not found" };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  return (
    <main id="main" className="case-study">
      <div className="wrap">
        <Link href="/#work" className="text-link back-link">
          ← All selected work
        </Link>
        <header className="case-header">
          <p className="eyebrow">{p.category}</p>
          <h1>{p.title}</h1>
          <p className="case-intro">{p.description}</p>
          <dl className="case-meta">
            <div>
              <dt>Role</dt>
              <dd>{p.role}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{p.status}</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>{p.stack.join(" · ")}</dd>
            </div>
          </dl>
        </header>
        <figure className="case-figure">
          <img
            src={p.images[0].src}
            alt={p.images[0].alt}
            width={1200}
            height={680}
          />
          <figcaption>{p.images[0].caption}</figcaption>
        </figure>
        <div className="case-body">
          <aside>
            <p className="eyebrow">Inside the project</p>
            <nav aria-label="Case study sections">
              <a href="#problem">The problem</a>
              <a href="#system">The system</a>
              <a href="#contribution">My contribution</a>
              <a href="#architecture">Architecture</a>
              <a href="#decisions">Technical decisions</a>
              <a href="#reliability">Reliability & testing</a>
              <a href="#deployment">Deployment & scope</a>
              <a href="#learning">What I learned</a>
            </nav>
          </aside>
          <div className="case-content">
            <section id="problem">
              <p className="eyebrow">01 / Context</p>
              <h2>The problem</h2>
              <p>{p.problem}</p>
            </section>
            <section id="system">
              <p className="eyebrow">02 / Approach</p>
              <h2>The system</h2>
              <p>{p.solution}</p>
            </section>
            <section id="contribution">
              <p className="eyebrow">03 / Ownership</p>
              <h2>My contribution</h2>
              <ul>
                {p.contribution.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </section>
            <section id="architecture">
              <p className="eyebrow">04 / Structure</p>
              <h2>Architecture</h2>
              <ol className="architecture-list">
                {p.architecture.map((x, i) => (
                  <li key={x}>
                    <span>0{i + 1}</span>
                    {x}
                  </li>
                ))}
              </ol>
            </section>
            <section id="decisions">
              <p className="eyebrow">05 / Trade-offs</p>
              <h2>Technical decisions</h2>
              {p.decisions.map((d) => (
                <div key={d.title} className="decision">
                  <h3>{d.title}</h3>
                  <p>{d.body}</p>
                </div>
              ))}
            </section>
            <section id="reliability">
              <p className="eyebrow">06 / Confidence</p>
              <h2>Reliability & testing</h2>
              <p>{p.reliability}</p>
            </section>
            <section id="deployment">
              <p className="eyebrow">07 / Operations</p>
              <h2>Deployment & scope</h2>
              <p>{p.deployment}</p>
            </section>
            <section id="learning">
              <p className="eyebrow">08 / Takeaway</p>
              <h2>What I learned</h2>
              <p>{p.learning}</p>
            </section>
            <div className="case-links">
              {p.github && (
                <a href={p.github} rel="noopener noreferrer">
                  View repository ↗
                </a>
              )}
              {p.demo && (
                <a href={p.demo} rel="noopener noreferrer">
                  Live demo ↗
                </a>
              )}
              <a className="text-link" href={profile.cv} download>
                Download CV ↓
              </a>
            </div>
          </div>
        </div>
        <Link href={`/work/${next.slug}`} className="next-project">
          <span className="eyebrow">Next project</span>
          <span>
            {next.title} <span aria-hidden="true">↗</span>
          </span>
        </Link>
      </div>
    </main>
  );
}
