import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div><span>SD.</span> © {new Date().getFullYear()} {personal.name}</div>
      <p>Built with care in Next.js / East Lansing, MI</p>
    </footer>
  );
}
