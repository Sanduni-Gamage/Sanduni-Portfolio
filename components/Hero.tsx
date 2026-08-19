import Image from "next/image";
import { profile, hero } from "@/lib/data";
import { Gear, RobotMascot, Sparkle } from "./icons";

/** Renders a headline where a *word* wrapped in asterisks becomes italic accent. */
function Headline({ text }: { text: string }) {
  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <em key={i} className="italic text-accent">
            {part.slice(1, -1)}
          </em>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Scattered cartoon gears & sparkles, spanning the whole hero as background flavor */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Gear className="absolute left-3 top-8 hidden h-10 w-10 text-espresso/10 [animation:spin_16s_linear_infinite] md:block" />
        <Gear className="absolute -left-4 bottom-8 hidden h-16 w-16 text-espresso/[0.08] [animation:spin_26s_linear_infinite_reverse] md:block" />
        <Gear className="absolute left-1/2 top-1/3 hidden h-12 w-12 -translate-x-1/2 text-espresso/10 [animation:spin_20s_linear_infinite] lg:block" />
        <Sparkle className="absolute left-[26%] top-12 hidden h-5 w-5 text-accent [animation:glow_2.6s_ease-in-out_infinite] lg:block" />
        <Sparkle className="absolute right-[8%] top-6 hidden h-6 w-6 text-accent-soft [animation:glow_3.2s_ease-in-out_infinite] [animation-delay:0.6s] md:block" />
        <Sparkle className="absolute bottom-6 right-[3%] hidden h-5 w-5 text-accent [animation:glow_2.9s_ease-in-out_infinite] [animation-delay:1.1s] md:block" />
        <Sparkle className="absolute right-8 top-4 h-4 w-4 text-accent [animation:glow_2.4s_ease-in-out_infinite] [animation-delay:0.3s]" />
      </div>

      <div className="relative mx-auto grid max-w-content items-center gap-12 px-6 py-16 md:grid-cols-2 md:gap-16 md:px-16 md:py-24 lg:gap-20">
        {/* Copy */}
        <div className="flex flex-col gap-6">
          <p className="eyebrow">{profile.role}</p>

          <h1 className="font-serif text-[clamp(2.75rem,6vw,3.9rem)] font-light leading-[1.06] text-ink">
            <Headline text={hero.headline} />
          </h1>

          <p className="max-w-xl text-lg leading-[1.6] text-secondary">
            {hero.intro}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-accent-deep"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-line px-7 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:border-ink"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-muted">
            <a href={profile.socials[0].href} className="transition-colors hover:text-ink">
              GitHub
            </a>
            <span className="text-line">·</span>
            <a href={profile.socials[1].href} className="transition-colors hover:text-ink">
              LinkedIn
            </a>
            <span className="text-line">·</span>
            <a
              href={`mailto:${profile.email}`}
              className="transition-colors hover:text-ink"
            >
              {profile.email}
            </a>
          </div>
        </div>

        {/* Visual */}
        <div className="flex justify-center md:justify-end">
          <div className="relative flex aspect-[420/480] w-full max-w-[420px] items-center justify-center">
            {/* gradient card, clipped separately so decorations can pop over the edge */}
            <div
              className="absolute inset-0 overflow-hidden rounded-[28px]"
              style={{
                background:
                  "linear-gradient(135deg, #F1E7D9 0%, #DBB89E 100%)",
              }}
            >
              {/* soft decorative circle */}
              <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-white/20" />
            </div>

            {/* avatar */}
            <div className="relative h-52 w-52 overflow-hidden rounded-full border-[6px] border-white bg-cream">
              <Image
                src="/avatar.jpg"
                alt={profile.name}
                fill
                sizes="208px"
                className="object-cover"
                priority
              />
            </div>

            {/* status badge */}
            <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[#5C8C61]" />
              <span className="text-[13px] font-medium text-ink">
                Available for work
              </span>
            </div>

            {/* robot mascot, poking out over the corner like a sticker */}
            <RobotMascot className="absolute -bottom-5 -right-4 h-24 w-24 rotate-6 drop-shadow-[4px_4px_0_rgba(42,35,32,0.15)] sm:h-28 sm:w-28" />
          </div>
        </div>
      </div>
    </section>
  );
}
