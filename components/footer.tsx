import { profile } from "@/data/profile";
export function Footer() {
  return (
    <footer className="wrap footer">
      <p>© 2026 Rafael Prahastra</p>
      <p>Built with intent. Always learning.</p>
      <a href={`mailto:${profile.email}`}>
        Email <span aria-hidden="true">↗</span>
      </a>
    </footer>
  );
}
