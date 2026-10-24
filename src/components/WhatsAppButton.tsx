import { whatsappUrl } from "@/data/site";

// Botón verde que queda fijo abajo a la derecha. No se muestra si no hay número.
export default function WhatsAppButton() {
  if (!whatsappUrl) return null;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribime por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition hover:scale-110"
    >
      {/* Ícono: globo de chat con teléfono */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="M3.5 20.5l1.3-4.1A8.5 8.5 0 1 1 8 19.6z" />
        <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8a4 4 0 0 1-2.8-2.8l.8-1-1-2z" />
      </svg>
    </a>
  );
}
