import { profile } from "@/lib/data";
import { ArrowRight } from "./icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-content px-6 pb-10 pt-8 md:px-16"
    >
      {/* CTA card */}
      <div
        className="flex flex-col items-center gap-5 rounded-[32px] px-6 py-16 text-center md:px-20 md:py-20"
        style={{
          background: "linear-gradient(100deg, #2F2723 0%, #4C372D 100%)",
        }}
      >
        <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-accent-soft">
          Get in touch
        </p>

        <h2 className="max-w-3xl font-serif text-[clamp(2.1rem,5vw,3.25rem)] font-light leading-[1.12] text-cream">
          Let’s build something <em className="italic text-accent-soft">great</em>{" "}
          together.
        </h2>

        <p className="max-w-lg text-[17px] leading-[1.6] text-[#B8A89A]">
          Have a project in mind, a role to fill, or just want to say hi? My
          inbox is always open.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-4 inline-flex items-center gap-3 rounded-full bg-cream px-8 py-4 text-base font-semibold text-ink transition-transform duration-200 hover:scale-[1.02]"
        >
          {profile.email}
          <ArrowRight className="h-[18px] w-[18px]" />
        </a>
      </div>

      {/* Footer */}
      <footer className="flex flex-col items-center justify-between gap-4 px-2 py-8 text-sm font-medium text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex items-center gap-7">
          {profile.socials.map((s) => (
            <a key={s.label} href={s.href} className="transition-colors hover:text-ink">
              {s.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-ink"
          >
            Email
          </a>
        </div>
      </footer>
    </section>
  );
}
