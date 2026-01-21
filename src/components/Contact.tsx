import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

interface ContactProps {
  darkMode: boolean;
}

export function Contact({ darkMode }: ContactProps) {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "jorgeeporrassandoval@gmail.com",
      link: "mailto:jorgeeporrassandoval@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      value: "+57 311 784 0647",
      link: "tel:+573117840647",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      value: "Popayán, Colombia",
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/IngAlim2023",
      hover: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/jorge-porras-4434b222a/",
      hover: "hover:text-blue-600",
    },
  ];

  return (
    <section
      id="contactos"
      className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Contacto
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
          <p
            className={`mt-4 text-lg ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            ¿Tienes un proyecto, una idea o una oportunidad laboral?  
            Me encantará conversar contigo.
          </p>
        </motion.div>

        <div className="flex justify-center w-full items-center">
          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className={`text-2xl font-semibold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Información de contacto
            </h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`flex items-start gap-4 p-5 rounded-xl border transition
                    ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 hover:border-blue-500/50"
                        : "bg-gray-50 border-gray-200 hover:border-blue-500/50"
                    }`}
                >
                  <div className="text-blue-500 mt-1">{info.icon}</div>
                  <div>
                    <h4
                      className={`font-semibold mb-1 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {info.title}
                    </h4>

                    {info.link ? (
                      <a
                        href={info.link}
                        className={`break-all ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        } hover:text-blue-500 transition-colors`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p
                        className={
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }
                      >
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* REDES */}
            <h4
              className={`text-xl font-semibold mb-4 flex justify-center items-center ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Redes profesionales
            </h4>

            <div className="flex gap-4 mb-8 justify-center">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className={`p-3 rounded-lg shadow-md transition-colors
                    focus-visible:ring-2 focus-visible:ring-blue-500
                    ${
                      darkMode
                        ? "bg-gray-800 text-gray-300"
                        : "bg-gray-100 text-gray-700"
                    }
                    ${social.hover}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* CTA */}
            <a
              href="mailto:jorgeeporrassandoval@gmail.com"
              className="flex justify-center items-center gap-2 px-6 py-3 rounded-lg
              bg-blue-600 hover:bg-blue-700 text-white font-medium transition
              shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5" />
              Escríbeme
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
