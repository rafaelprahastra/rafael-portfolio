/* SVG illustrations are already resolution-independent; no raster optimization needed. */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { Project } from "@/data/projects";
export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className={`project-card ${project.featured ? "featured" : ""}`}>
      <Link
        className="project-image-link"
        href={`/work/${project.slug}`}
        aria-label={`Read ${project.title} case study`}
      >
        <img
          src={project.images[0].src}
          alt={project.images[0].alt}
          width={1200}
          height={680}
          loading="lazy"
        />
        <span className="image-action" aria-hidden="true">
          ↗
        </span>
      </Link>
      <div className="project-info">
        <div className="project-number">0{index + 1}</div>
        <div>
          <p className="eyebrow">{project.category}</p>
          <h3>
            <Link href={`/work/${project.slug}`}>
              {project.title} <span aria-hidden="true">↗</span>
            </Link>
          </h3>
          <p className="project-description">{project.description}</p>
          <ul className="tags" aria-label={`${project.title} technologies`}>
            {project.stack.slice(0, 4).map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div className="project-aside">
          <p>{project.status}</p>
          <p>{project.role}</p>
          <Link href={`/work/${project.slug}`} className="text-link">
            Explore case study <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
