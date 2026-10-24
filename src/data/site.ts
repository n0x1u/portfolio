// =============================================================
//  TUS DATOS: editá este archivo para cambiar los textos de la web.
//  No hace falta tocar nada más para personalizarla.
// =============================================================

export const site = {
  name: "Santino Tisi",
  role: "Desarrollador web y de apps",
  email: "santinotisi2@gmail.com",
  // Dejá el texto vacío ("") si no querés mostrar alguno de estos links.
  linkedin: "https://www.linkedin.com/in/santino-tisi-286bbb275/",
  github: "", // ejemplo: "https://github.com/tu-usuario"
  whatsapp: "", // ejemplo: "https://wa.me/5491112345678"
};

export const hero = {
  badge: "Disponible para nuevos proyectos",
  title: "Convierto ideas de negocio en",
  highlight: "software que vende.",
  subtitle:
    "Diseño y desarrollo webs y aplicaciones a medida para empresas: rápidas, modernas y pensadas para conseguir clientes.",
};

export const services = [
  {
    icon: "🌐",
    title: "Webs corporativas",
    description:
      "Sitios rápidos y profesionales que transmiten confianza y aparecen en Google.",
  },
  {
    icon: "📱",
    title: "Apps móviles",
    description:
      "Aplicaciones para iOS y Android que acercan tu empresa al bolsillo de tus clientes.",
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

// Cuando tengas proyectos, agregalos acá siguiendo este formato:
// { title: "Nombre", description: "Qué hiciste", url: "https://...", tags: ["Next.js"] },
export const projects: {
  title: string;
  description: string;
  url?: string;
  tags: string[];
}[] = [];
