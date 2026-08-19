import { Fragment } from "react";
import { experience, type ExperienceItem } from "@/lib/data";

function Rung({ tilt }: { tilt: number }) {
  return (
    <div className="flex h-full items-center justify-center">
      <div
        className="relative flex h-4 w-12 items-center rounded-full border-[3px] border-espresso bg-accent shadow-[3px_3px_0_0_rgba(42,35,32,0.18)] md:w-14"
        style={{ transform: `rotate(${tilt}deg)` }}
      >
        <span className="absolute -left-2 h-3 w-3 rounded-full border-[3px] border-espresso bg-cream" />
        <span className="absolute -right-2 h-3 w-3 rounded-full border-[3px] border-espresso bg-cream" />
      </div>
    </div>
  );
}

function ExperienceCard({
  item,
  align,
  tilt,
}: {
  item: ExperienceItem;
  align: "left" | "right";
  tilt: number;
}) {
  return (
    <div
      className={`rounded-[22px] border-[3px] border-espresso/85 bg-surface p-6 shadow-[6px_6px_0_0_rgba(42,35,32,0.1)] md:p-7 ${
        align === "right" ? "md:text-right" : ""
      }`}
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div
        className={`mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 ${
          align === "right" ? "md:flex-row-reverse" : ""
        }`}
      >
        <h3 className="font-serif text-xl font-semibold text-ink">
          {item.role}
        </h3>
        <span className="text-sm font-medium text-accent">{item.company}</span>
      </div>

      <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-muted">
        {item.period} &nbsp;·&nbsp; {item.location}
      </p>

      <ul className="flex flex-col gap-2">
        {item.points.map((point) => (
          <li
            key={point}
            className={`flex items-start gap-2.5 text-[15px] leading-[1.6] text-secondary ${
              align === "right" ? "md:flex-row-reverse" : ""
            }`}
          >
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  const count = experience.length;

  return (
    <section
      id="experience"
      className="mx-auto max-w-content px-6 py-20 md:px-16 md:py-24"
    >
      <div className="mb-14 flex flex-col gap-3">
        <p className="eyebrow">02 &nbsp;&nbsp; Experience</p>
        
      </div>

      <div
        className="grid grid-cols-[56px_1fr] gap-x-5 gap-y-12 md:grid-cols-[1fr_56px_1fr] md:gap-x-10 md:gap-y-16"
        style={{ gridTemplateRows: `repeat(${count}, auto)` }}
      >
        {/* Ladder rails, spanning every row */}
        <div
          className="relative col-start-1 md:col-start-2"
          style={{ gridRow: `1 / span ${count}` }}
        >
          {/* top cap */}
          <span className="absolute -top-3 left-1.5 right-1.5 h-3 rounded-full border-[3px] border-espresso bg-espresso-light" />
          {/* rails */}
          <span className="absolute inset-y-0 left-1.5 w-2.5 rounded-full border-[3px] border-espresso bg-gradient-to-b from-espresso-light to-espresso" />
          <span className="absolute inset-y-0 right-1.5 w-2.5 rounded-full border-[3px] border-espresso bg-gradient-to-b from-espresso-light to-espresso" />
          {/* feet */}
          <span className="absolute -bottom-2 left-0 h-4 w-4 rounded-full border-[3px] border-espresso bg-espresso" />
          <span className="absolute -bottom-2 right-0 h-4 w-4 rounded-full border-[3px] border-espresso bg-espresso" />
        </div>

        {experience.map((item, i) => {
          const onLeft = i % 2 === 0;
          const tilt = onLeft ? -1 : 1;

          return (
            <Fragment key={item.company}>
              <div
                className="col-start-1 md:col-start-2"
                style={{ gridRow: i + 1 }}
              >
                <Rung tilt={tilt} />
              </div>

              <div
                className={`col-start-2 ${
                  onLeft ? "md:col-start-1" : "md:col-start-3"
                }`}
                style={{ gridRow: i + 1 }}
              >
                <ExperienceCard
                  item={item}
                  align={onLeft ? "right" : "left"}
                  tilt={tilt * 0.6}
                />
              </div>
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}
