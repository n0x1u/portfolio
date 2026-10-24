import { process } from "@/data/site";
import SectionTitle from "./SectionTitle";

export default function Process() {
  return (
    <section id="como-trabajo" className="scroll-mt-16 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Cómo trabajo"
          title="Un proceso simple, de principio a fin"
          subtitle="Sabés en todo momento en qué etapa está tu proyecto."
        />
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-4xl font-bold text-transparent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
