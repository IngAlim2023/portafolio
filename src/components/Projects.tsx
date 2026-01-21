import { motion } from "framer-motion";
import {  Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectsProps {
  darkMode: boolean;
}

export function Projects({ darkMode }: ProjectsProps) {
  const projects = [
  {
    title: "Sistema Punto de Venta",
    description:
      "Aplicación web para la gestión de inventario, ventas y clientes. Incluye autenticación, control de stock, ventas a crédito y de contado, generación de facturas y dashboard de ventas.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    technologies: [
      "React",
      "Express.js",
      "MySQL",
      "Tailwind CSS",
      "JWT",
    ],
    repoLink: "https://github.com/IngAlim2023/controlStockFront.git",
  },
  {
    title: "Medihome – Gestión de Visitas Médicas",
    description:
      "Plataforma para la gestión de pacientes, médicos, planes y visitas médicas. Permite notificaciones, solicitudes internas y externas, visualización de visitas y control administrativo.",
    image:
      "https://www.gemovirmedicaljob.com/cdn/images/mobilegemovircondidate.png",
    technologies: [
      "React",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    repoLink: "https://github.com/IngAlim2023/Previmed_web.git",
  },
  {
    title: "Finanzas Personales & Gestión de Inversiones",
    description:
      "Aplicación de finanzas personales con autenticación JWT, gestión de gastos personalizados por usuario y un módulo de inversiones que permite registrar, reinvertir y analizar rendimientos financieros.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    technologies: [
      "AdonisJS",
      "React",
      "JWT",
      "Tailwind CSS",
      "Postgres",
    ],
    repoLink: "https://github.com/IngAlim2023/finanzasFront.git",
  },
  {
    title: "Plataforma E-Commerce",
    description:
      "Tienda online con gestión de productos, autenticación de usuarios y control de inventario. Arquitectura preparada para escalar.",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    technologies: [
      "React",
      "Django",
      "REST API",
      "Tailwind CSS",
    ],
    repoLink: "https://github.com/IngAlim2023",
  },
];



  return (
    <section
      id="proyectos"
      className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Proyectos Destacados
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p
            className={`mt-4 text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            Algunos de mis trabajos más recientes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`rounded-xl overflow-hidden shadow-xl ${darkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"}`}
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3
                  className={`text-2xl font-semibold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm ${darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${darkMode ? "bg-gray-700 hover:bg-gray-600 text-white" : "bg-gray-200 hover:bg-gray-300 text-gray-900"}`}
                  >
                    <Github className="w-4 h-4" />
                    Repositorio
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
