import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { site } from "@/data/site";

// Esta es la página principal: junta todas las secciones en orden.
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/5 py-8 text-center text-sm text-zinc-500">
        © 2026 {site.name}. Todos los derechos reservados.
      </footer>
    </>
  );
}
