import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="wrap not-found">
      <p className="eyebrow">404 / Not found</p>
      <h1>This page isn&apos;t here.</h1>
      <p>You can explore the selected work instead.</p>
      <Link className="button primary" href="/">
        Back to portfolio ↗
      </Link>
    </main>
  );
}
