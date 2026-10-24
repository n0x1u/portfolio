import { hero } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-16 sm:px-6"
    >
      {/* Fondo: cuadrícula sutil + resplandor de color */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/30 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          {hero.badge}
        </span>

        <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
          {hero.title}{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
            {hero.highlight}
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl">
          {hero.subtitle}
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#contacto"
            className="rounded-full bg-indigo-500 px-8 py-3.5 font-medium text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-400"
          >
            Contame tu proyecto
          </a>
          <a
            href="#servicios"
            className="rounded-full border border-white/15 px-8 py-3.5 font-medium text-white transition hover:bg-white/5"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
