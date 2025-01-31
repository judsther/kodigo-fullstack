import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/Auth/AuthContext';

export const useLogin = () => {
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (email, password) => {
        console.log("🟡 Enviando credenciales...");

        setError(''); // Limpiar errores previos

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', {
                email,
                password,
            });

            const { user, token } = response.data;

            if (!user || !token) {
                throw new Error("Respuesta inesperada del servidor.");
            }

            // ✅ Almacena el usuario en el AuthContext
            login(token, user);

            console.log("✅ Usuario autenticado:", user);
            console.log("🔑 Token guardado:", token);

            navigate('/'); // Redirigir al home/dashboard
            window.location.reload(); // Refrescar para actualizar la Navbar

        } catch (error) {
            console.error("❌ Error de autenticación:", error);

            if (error.response && error.response.status === 401) {
                setError("Correo o contraseña incorrectos.");
            } else {
                setError("Ocurrió un error. Inténtalo más tarde.");
            }
        }
    };

    return { error, handleSubmit };
};
