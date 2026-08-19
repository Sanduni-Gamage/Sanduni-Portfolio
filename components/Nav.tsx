import { profile } from "@/lib/data";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-5 md:px-16">
        <a href="#" className="font-serif text-[22px] font-semibold text-ink">
          {profile.name}
        </a>

        <div className="flex items-center gap-6 md:gap-10">
          <ul className="hidden items-center gap-10 md:flex">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[15px] font-medium text-secondary transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={profile.resumeUrl}
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-deep"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
