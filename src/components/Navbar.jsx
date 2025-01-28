import  { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo? */}
        <div className="text-2xl font-bold tracking-wide">
          ✨ FullStack App
        </div>

        {/* Boton hamburguesa */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          {isOpen ? "✖" : "☰"} {/* Icono cambia dinámicamente */}
        </button>

        {/* Links compu */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link to="/" className="hover:text-gray-300 mt-2">
            Home
          </Link>
          <Link to="/" className="hover:text-gray-300 mt-2">
            Estadísticas
          </Link>
          <button
            className="block w-full bg-yellow-300 text-purple-700 px-4 py-2 rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-yellow-400 transition-all duration-300">
            🚀 ¡Descubre Más!
          </button>
        </div>
      </div>

      {/* Movil */}
      {isOpen && (
        <div className="md:hidden bg-purple-700">
          <div className="flex flex-col items-center space-y-4 p-4 text-lg">
            <Link
              to="/"
              onClick={toggleMenu}
              className="hover:text-gray-300 w-full text-center"
            >
              Home
            </Link>
            <Link
              to="/"
              onClick={toggleMenu}
              className="hover:text-gray-300 w-full text-center"
            >
              Estadísticas
            </Link>
            <button
            className="block w-full bg-yellow-300 text-purple-700 px-4 py-2 rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-yellow-400 transition-all duration-300">
            🚀 ¡Descubre Más!
          </button>
          </div>
        </div>
      )}
    </nav>
  );
};





