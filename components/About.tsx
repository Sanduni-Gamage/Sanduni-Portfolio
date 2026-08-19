import { about } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-content px-6 py-20 md:px-16 md:py-24"
    >
      <p className="eyebrow mb-12">01 &nbsp;&nbsp; About</p>

      <div className="grid gap-14 md:grid-cols-[1fr_460px] lg:gap-20">
        {/* Bio */}
        <div className="flex flex-col gap-6">
          <h2 className="font-serif text-[clamp(1.9rem,4vw,2.4rem)] font-light leading-tight text-ink">
            {about.heading}
          </h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-[17px] leading-[1.7] text-secondary">
              {p}
            </p>
          ))}
        </div>

        {/* Toolkit */}
        <div className="flex flex-col gap-7">
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">
            Toolkit
          </p>
          {about.toolkit.map((group) => (
            <div key={group.category} className="flex flex-col gap-3">
              <p className="text-sm font-medium text-muted">{group.category}</p>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-line bg-surface px-3.5 py-2 text-sm font-medium text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
