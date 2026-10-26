// =============================================================
//  TUS DATOS: editá este archivo para cambiar los textos de la web.
//  No hace falta tocar nada más para personalizarla.
// =============================================================

export const site = {
  name: "Santino Tisi",
  role: "Desarrollador web para pymes",
  email: "santinotisi2@gmail.com",
  // Dejá el texto vacío ("") si no querés mostrar alguno de estos links.
  linkedin: "https://www.linkedin.com/in/santino-tisi-286bbb275/",
  github: "", // ejemplo: "https://github.com/tu-usuario"
  // Solo números, con 549 adelante y sin espacios ni "+". Ejemplo: "5491112345678"
  whatsapp: "5491141777285",
  whatsappMessage: "Hola Santino, vi tu portfolio y quiero consultarte por un proyecto.",
};

// Link de WhatsApp armado a partir de tu número (vacío si no hay número).
export const whatsappUrl = site.whatsapp
  ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`
  : "";

export const hero = {
  badge: "Disponible para nuevos proyectos",
  title: "Webs y sistemas para pymes que quieren",
  highlight: "vender más.",
  subtitle:
    "Vengo del marketing, no solo del código: diseño cada proyecto pensando en atraer clientes y convertir visitas en ventas.",
};

export const services = [
  {
    icon: "🌐",
    title: "Webs corporativas",
    description:
      "Sitios rápidos y profesionales que transmiten confianza y aparecen en Google.",
  },
  {
    icon: "🛒",
    title: "Tiendas online",
    description:
      "E-commerce listo para vender, con pagos, stock y envíos integrados.",
  },
  {
    icon: "⚙️",
    title: "Sistemas a medida",
    description:
      "Paneles de gestión, turnos, reservas o lo que tu negocio necesite automatizar.",
  },
];

// Pasos de la sección "Cómo trabajo", en orden.
export const process = [
  {
    title: "Llamada",
    description:
      "Charlamos sobre tu negocio, tus clientes y qué querés lograr. Sin costo ni compromiso.",
  },
  {
    title: "Propuesta",
    description:
      "Te envío un plan claro con alcance, plazos y precio cerrado. Sin sorpresas.",
  },
  {
    title: "Desarrollo",
    description:
      "Construyo tu web o sistema y te muestro avances para que opines en cada etapa.",
  },
  {
    title: "Entrega",
    description:
      "Lo publicamos, te enseño a usarlo y te acompaño después del lanzamiento.",
  },
];

// Para sumar un proyecto, copiá un bloque { ... } y cambiá los datos.
// La captura va en la carpeta public/proyectos/ (ideal: 1440x900 px).
export const projects: {
  title: string;
  description: string;
  url: string;
  image: string;
}[] = [
  {
    title: "PlayGame – Ecommerce de juguetes",
    description:
      "Tienda online con carrito funcional y buscador de regalos por edad.",
    url: "https://landing-demo-red.vercel.app",
    image: "/proyectos/playgame.png",
  },
];
