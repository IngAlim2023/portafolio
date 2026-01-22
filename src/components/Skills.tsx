import { motion } from "framer-motion";
import {
  Smartphone,
  Database,
  Cloud,
  Palette,
  GitBranch,
  Layout,
  Zap,
  Users,
  Lightbulb,
  MessageCircle,
  Brain,
  Clock,
  BookOpen,
} from "lucide-react";

interface SkillsProps {
  darkMode: boolean;
}

export function Skills({ darkMode }: SkillsProps) {
  const skills = [
    {
      name: "Desarrollo Frontend",
      icon: <Layout className="w-8 h-8" />,
      color: "blue",
    },
    {
      name: "Desarrollo Backend",
      icon: <Server className="w-8 h-8" />,
      color: "green",
    },
    {
      name: "Diseño Responsive",
      icon: <Smartphone className="w-8 h-8" />,
      color: "purple",
    },
    {
      name: "Bases de Datos",
      icon: <Database className="w-8 h-8" />,
      color: "yellow",
    },
    { name: "APIs RESTful", icon: <Zap className="w-8 h-8" />, color: "red" },
    {
      name: "UI/UX Design",
      icon: <Palette className="w-8 h-8" />,
      color: "pink",
    },
    {
      name: "Control de Versiones",
      icon: <GitBranch className="w-8 h-8" />,
      color: "orange",
    },
    {
      name: "Cloud & Deploy",
      icon: <Cloud className="w-8 h-8" />,
      color: "cyan",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      yellow: "from-yellow-500 to-yellow-600",
      red: "from-red-500 to-red-600",
      cyan: "from-cyan-500 to-cyan-600",
      pink: "from-pink-500 to-pink-600",
      orange: "from-orange-500 to-orange-600",
      indigo: "from-indigo-500 to-indigo-600",
      teal: "from-teal-500 to-teal-600",
      slate: "from-slate-500 to-slate-600",
      emerald: "from-emerald-500 to-emerald-600",
    };
    return colors[color] || "from-gray-500 to-gray-600";
  };
  const softSkills = [
    {
      name: "Comunicación efectiva",
      icon: <MessageCircle className="w-8 h-8" />,
      color: "blue",
    },
    {
      name: "Trabajo en equipo",
      icon: <Users className="w-8 h-8" />,
      color: "green",
    },
    {
      name: "Resolución de problemas",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "yellow",
    },
    {
      name: "Pensamiento crítico",
      icon: <Brain className="w-8 h-8" />,
      color: "purple",
    },
    {
      name: "Gestión del tiempo",
      icon: <Clock className="w-8 h-8" />,
      color: "orange",
    },
    {
      name: "Aprendizaje continuo",
      icon: <BookOpen className="w-8 h-8" />,
      color: "emerald",
    },
  ];

  return (
    <section
      id="habilidades"
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
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
            Habilidades
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p
            className={`mt-4 text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            Tecnologías y herramientas con las que trabajo
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`p-6 rounded-xl shadow-lg text-center ${darkMode ? "bg-gray-900 border border-gray-700" : "bg-white border border-gray-200"}`}
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br ${getColorClasses(skill.color)} flex items-center justify-center text-white shadow-lg`}
              >
                {skill.icon}
              </div>
              <h3
                className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}
              >
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
        <h3
          className={`text-4xl font-bold mt-20 mb-8 text-center ${darkMode ? "text-white" : "text-gray-900"}`}
        >
          Habilidades Blandas
        </h3>
        <p
          className={`text-center mb-10 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
        >
          Habilidades que definen mi forma de trabajar y colaborar en equipos de
          desarrollo.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`p-6 rounded-xl shadow-md text-center ${darkMode ? "bg-gray-900 border border-gray-700" : "bg-white border border-gray-200"}`}
            >
              <div
                className={`w-14 h-14 mx-auto mb-3 rounded-lg bg-gradient-to-br ${getColorClasses(skill.color)} flex items-center justify-center text-white`}
              >
                {skill.icon}
              </div>
              <h4
                className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}
              >
                {skill.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Server(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  );
}
