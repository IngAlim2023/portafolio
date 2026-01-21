import React from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

interface Props {
  darkMode: boolean;
}

const Hero: React.FC<Props> = ({ darkMode }) => {
  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center pt-16 transition-colors duration-500
        ${
          darkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            : "bg-gradient-to-br from-blue-50 via-white to-indigo-50"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 text-center animate-fadeIn">
        <h1
          className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Hola, soy{" "}
          <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
            Jorge Porras
          </span>
        </h1>

        <p
          className={`text-xl sm:text-2xl mb-10 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Desarrollador Full-Stack especializado en crear experiencias web
          modernas y escalables
        </p>

        {/* BOTONES */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="https://serviciosdigitales.pw/"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition"
          >
            Ver Proyectos
          </a>

          <a
            href="mailto:jorgeeporrassandoval@gmail.com"
            className={`px-8 py-3 rounded-lg shadow-lg transition border
            ${
            darkMode
                ? "bg-gray-800 hover:bg-gray-700 text-white border-gray-700"
                : "bg-white hover:bg-gray-50 text-gray-900 border-gray-300"
            }`}
          >
            Contactar
          </a>

          <a
            href="/JorgePorrasCV.pdf"
            download
            className={`px-8 py-3 rounded-lg shadow-lg transition flex items-center gap-2 border
    ${
      darkMode
        ? "bg-gray-800 hover:bg-gray-700 text-white border-gray-700"
        : "bg-white hover:bg-gray-50 text-gray-900 border-gray-300"
    }`}
          >
            <FaDownload />
            Descargar CV
          </a>
        </div>

        {/* REDES */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/IngAlim2023"
            target="_blank"
            className={`p-3 rounded-lg shadow-md transition hover:scale-110
              ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700 text-white"
                  : "bg-white hover:bg-gray-100 text-gray-900"
              }`}
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/jorge-porras-4434b222a/"
            target="_blank"
            className={`p-3 rounded-lg shadow-md transition hover:scale-110
              ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700 text-white"
                  : "bg-white hover:bg-gray-100 text-gray-900"
              }`}
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="mailto:jorgeeporrassandoval@gmail.com"
            className={`p-3 rounded-lg shadow-md transition hover:scale-110
              ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700 text-white"
                  : "bg-white hover:bg-gray-100 text-gray-900"
              }`}
          >
            <HiMail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
