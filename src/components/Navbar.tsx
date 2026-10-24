import { site } from "@/data/site";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-zinc-950/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="font-semibold tracking-tight text-white">
          {site.name}
          <span className="text-indigo-400">.</span>
        </a>
        <div className="flex items-center gap-4 text-sm sm:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden text-zinc-400 transition-colors hover:text-white sm:block"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-full bg-white px-4 py-2 font-medium text-zinc-950 transition-colors hover:bg-indigo-200"
          >
            Hablemos
          </a>
        </div>
      </nav>
    </header>
  );
}
