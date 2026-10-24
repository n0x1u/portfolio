type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

// Título reutilizable para todas las secciones, así se ven iguales.
export default function SectionTitle({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-zinc-400">{subtitle}</p>}
    </div>
  );
}
