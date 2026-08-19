import { projects, type Project } from "@/lib/data";
import { ArrowRight } from "./icons";

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      className="group flex flex-col overflow-hidden rounded-[20px] border border-line bg-surface shadow-card transition-transform duration-200 hover:-translate-y-1"
    >
      {/* Banner */}
      <div
        className="relative h-[150px] overflow-hidden"
        style={{
          background: `linear-gradient(120deg, ${project.gradient[0]} 0%, ${project.gradient[1]} 100%)`,
        }}
      >
        <span className="absolute bottom-3 left-6 font-serif text-[64px] font-semibold leading-none text-white/90">
          {project.number}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3.5 p-7">
        <h3 className="font-serif text-2xl font-semibold text-ink">
          {project.title}
        </h3>
        <p className="text-[15px] leading-[1.6] text-secondary">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md bg-sand/60 px-2.5 py-1.5 text-[12.5px] font-medium text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-accent">
          View project
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section
      id="work"
      className="mx-auto max-w-content px-6 py-20 md:px-16 md:py-24"
    >
      <div className="mb-10 flex flex-col gap-3">
        <p className="eyebrow">03 &nbsp;&nbsp; Selected Work</p>
        <h2 className="font-serif text-[clamp(2rem,4vw,2.5rem)] font-light text-ink">
          A few things I’ve built recently.
        </h2>
      </div>

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
