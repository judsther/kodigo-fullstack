import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext"; 

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { token, logout } = useAuth(); 
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout(); 
    navigate("/login"); 
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          ✨ FullStack App
        </div>

        {/* Botón hamburguesa */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          {isOpen ? "✖" : "☰"} 
        </button>

        {/* Vista para pantallas compu */}
        <div className="hidden md:flex space-x-6 text-lg items-center">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          {token && (
            <Link to="/statistics" className="hover:text-gray-300">
              Estadísticas
            </Link>
          )}
          {token ? ( 
            <button
              onClick={handleLogout}
              className="bg-yellow-300 text-purple-700 px-4 py-2 rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-yellow-400 transition-all duration-300"
            >
              Cerrar Sesión
            </button>
          ) : ( 
            <div>
                <Link
              to="/register"
              className="mr-2 bg-yellow-300 text-purple-700 px-4 py-2 rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-yellow-400 transition-all duration-300"
            >
              Registrarme
            </Link>
            <Link
              to="/login"
              className="bg-yellow-300 text-purple-700 px-4 py-2 rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-yellow-400 transition-all duration-300"
            >
              Iniciar Sesión
            </Link>
            </div>
          )}
        </div>
      </div>

      {/* Menú móvil */}
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
            {token && ( 
              <Link
                to="/statistics"
                onClick={toggleMenu}
                className="hover:text-gray-300 w-full text-center"
              >
                Estadísticas
              </Link>
            )}
            {token ? ( 
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="w-full bg-yellow-300 text-purple-700 px-4 py-2 rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-yellow-400 transition-all duration-300"
              >
                Cerrar Sesión
              </button>
            ) : ( 
              <div>
                    <Link
              to="/register"
              className="mr-2 bg-yellow-300 text-purple-700 px-4 py-2 rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-yellow-400 transition-all duration-300"
            >
              Registrarme
            </Link>
              <Link
                to="/login"
                onClick={toggleMenu}
                className="w-full bg-yellow-300 text-purple-700 px-4 py-2 rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-yellow-400 transition-all duration-300 text-center"
              >
                Iniciar Sesión
              </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};





