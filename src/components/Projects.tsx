import { projects } from "@/data/site";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section id="proyectos" className="scroll-mt-16 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Proyectos" title="Trabajos destacados" />

        {projects.length === 0 ? (
          // Se muestra mientras no haya proyectos cargados en src/data/site.ts
          <div className="mx-auto max-w-xl rounded-2xl border border-dashed border-white/15 p-10 text-center">
            <p className="text-4xl">🚧</p>
            <p className="mt-4 font-medium text-white">
              Nuevos proyectos muy pronto
            </p>
            <p className="mt-2 text-sm text-zinc-400">
              Estoy preparando casos reales para mostrarte. ¿Querés que el tuyo
              sea el primero?
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-indigo-400/40"
              >
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
