import { personal } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted font-mono">
        <p>
          © {year} {personal.name}
        </p>
        <p>
          Built with Next.js & Tailwind · Deployed on GitHub Pages
        </p>
      </div>
    </footer>
  );
}
