import Link from "next/link";
import { profile } from "@/data/profile";
const links = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  { label: "CV", href: profile.cv },
  { label: "Contact", href: "/#contact" },
];
export function Navigation() {
  return (
    <header className="site-header wrap">
      <Link href="/" className="wordmark" aria-label="Rafael Prahastra home">
        rp<span>.</span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map((l) => (
          <a key={l.label} href={l.href}>
            {l.label}
            {l.label === "CV" && <span aria-hidden="true"> ↗</span>}
          </a>
        ))}
      </nav>
      <details className="mobile-nav">
        <summary>
          Menu <span aria-hidden="true">+</span>
        </summary>
        <nav aria-label="Mobile navigation">
          {links.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
      </details>
    </header>
  );
}
