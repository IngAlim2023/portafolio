import { Heart } from "lucide-react";

interface FooterProps {
  darkMode: boolean;
}

export function Footer({ darkMode }: FooterProps) {
  return (
    <footer className={`py-8 border-t ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className={`flex items-center justify-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Diseñado y desarrollado con{" "}
            <Heart className="w-4 h-4 text-red-500 fill-current" /> por Jorge Porras
          </p>
          <p className={`mt-2 text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
