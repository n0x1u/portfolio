import { site } from "@/data/site";

export default function Contact() {
  const socials = [
    { label: "LinkedIn", url: site.linkedin },
    { label: "GitHub", url: site.github },
    { label: "WhatsApp", url: site.whatsapp },
  ].filter((social) => social.url !== "");

  return (
    <section id="contacto" className="scroll-mt-16 px-4 py-24 sm:px-6">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/20 via-zinc-900 to-zinc-950 px-6 py-16 text-center sm:px-12">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />

        <p className="relative text-sm font-semibold uppercase tracking-widest text-indigo-400">
          Contacto
        </p>
        <h2 className="relative mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          ¿Tenés un proyecto en mente?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-zinc-400">
          Escribime y te respondo en menos de 24 horas con una propuesta sin
          compromiso.
        </p>

        <a
          href={`mailto:${site.email}`}
          className="relative mt-10 inline-block break-all rounded-full bg-white px-8 py-4 font-medium text-zinc-950 transition hover:bg-indigo-200"
        >
          {site.email}
        </a>

        {socials.length > 0 && (
          <div className="relative mt-8 flex justify-center gap-6 text-sm">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition-colors hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
