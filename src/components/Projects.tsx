import Image from "next/image";
import { projects } from "@/data/site";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section id="proyectos" className="scroll-mt-16 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Proyectos" title="Trabajos destacados" />

        {/* Con un solo proyecto la tarjeta va centrada; con más, en 2 columnas */}
        <div
          className={
            projects.length === 1
              ? "mx-auto grid max-w-2xl"
              : "grid gap-8 md:grid-cols-2"
          }
        >
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-indigo-400/40"
            >
              {/* Captura del proyecto (archivo en public/proyectos/) */}
              <div className="overflow-hidden border-b border-white/10">
                <Image
                  src={project.image}
                  alt={`Captura de ${project.title}`}
                  width={1440}
                  height={900}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="aspect-[16/10] w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  {project.description}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-400"
                >
                  Ver proyecto
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
