import React, { useState } from "react";
import {
  FaConnectdevelop,
  FaUsers,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { SlScreenDesktop } from "react-icons/sl";
import { Link } from "react-scroll";

const menuItems = [
  { to: "hero", label: "Inicio", icon: <SlScreenDesktop /> },
  { to: "sobreMi", label: "Sobre mí", icon: <FaUsers /> },
  { to: "habilidades", label: "Habilidades", icon: <FaPeopleGroup /> },
  { to: "proyectos", label: "Proyectos", icon: <HiOutlineCurrencyDollar /> },
  { to: "contactos", label: "Contacto", icon: <FaUsers /> },
];
interface NavBarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}


const NavBar: React.FC<NavBarProps> = ({ darkMode, setDarkMode }) => {

  const [open, setOpen] = useState(false);

  

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2 font-semibold text-xl text-indigo-600 dark:text-indigo-400">
          <FaConnectdevelop size={26} />
          {"<Dev/>"}
        </div>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700 dark:text-gray-200">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              duration={500}
              offset={-80}
              spy
              className="flex items-center gap-2 cursor-pointer hover:text-indigo-600 transition"
              activeClass="text-indigo-600"
            >
              {item.label}
            </Link>
          ))}
        </ul>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">
          {/* DARK MODE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-gray-700 dark:text-gray-200"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700 dark:text-gray-200"
          >
            {open ? <IoClose size={26} /> : <GiHamburgerMenu size={26} />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`md:hidden transition-all overflow-hidden bg-white dark:bg-slate-900 ${
          open ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 text-gray-700 dark:text-gray-200">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              duration={500}
              offset={-80}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 cursor-pointer hover:text-indigo-600"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
