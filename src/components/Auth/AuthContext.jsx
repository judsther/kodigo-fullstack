import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    // 🔄 Sincroniza el estado con localStorage (en caso de cambios externos)
    useEffect(() => {
        localStorage.setItem("token", token || "");
        localStorage.setItem("user", JSON.stringify(user) || "");
    }, [token, user]);

    // 🆕 Registrar usuario (si se usa en un formulario de registro)
    const register = async (newUser) => {
        try {
            setUser(newUser);
            localStorage.setItem("user", JSON.stringify(newUser));
        } catch (error) {
            console.error("❌ Error al registrar usuario:", error);
            throw error;
        }
    };

    // 🔑 Iniciar sesión
    const login = (newToken, userData) => {
        localStorage.setItem("token", newToken);
        localStorage.setItem("user", JSON.stringify(userData));
        setToken(newToken);
        setUser(userData);
    };

    // 🚪 Cerrar sesión
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ token, user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizado para usar el contexto
export const useAuth = () => {
    return useContext(AuthContext);
};
