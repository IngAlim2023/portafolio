import { motion } from "framer-motion";
import { Code2, Database, Globe, Server } from "lucide-react";
import type React from "react";

interface Props {
  darkMode: boolean;
}

const About: React.FC<Props> = ({ darkMode }) => {
  const techStack = [
    {
      category: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      icon: <Server className="w-6 h-6" />,
      technologies: ["Node.js", "Express","AdonisJS", "Python", "Django", "REST APIs"],
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6" />,
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "Postgres", "Supabase", "MariaDB"],
    },
    {
      category: "Otros",
      icon: <Code2 className="w-6 h-6" />,
      technologies: ["Git", "Git-Flow"],
    },
  ];

  return (
    <section
      id="sobreMi"
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
            Sobre mí
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className={`text-lg mb-6 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
            >
              Soy desarrollador Full-Stack con experiencia en la creación de
              aplicaciones web modernas, escalables y centradas en el usuario.
              Durante más de dos años he trabajado construyendo soluciones que
              combinan interfaces intuitivas con una arquitectura sólida en el
              backend.
            </p>

            <p
              className={`text-lg mb-6 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
            >
              Me enfoco en escribir código limpio, mantenible y bien
              estructurado, aplicando buenas prácticas, principios de diseño y
              tecnologías actuales para resolver problemas reales de forma
              eficiente.
            </p>

            <p
              className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-700"}`}
            >
              Además de programar, disfruto aprender constantemente, contribuir
              a proyectos de código abierto y compartir conocimiento con la
              comunidad de desarrolladores a través de contenido técnico en
              YouTube.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3
              className={`text-2xl font-semibold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}
            >
              Stack Tecnológico
            </h3>
            {techStack.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`p-6 rounded-xl shadow-lg ${darkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-blue-500">{stack.icon}</div>
                  <h4
                    className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}
                  >
                    {stack.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm ${darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
