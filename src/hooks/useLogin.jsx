
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/Auth/AuthContext';

export const useLogin = () => {
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (email, password) => {
        console.log("Formulario enviado");
        setError('');

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', {
                email,
                password,
            });

            login(response.data.token);
            console.log("Token guardado:", response.data.token);
            navigate('/');
        } catch (error) {
            setError('Credenciales incorrectas');
            console.error(error);
        }
    };

    return { error, handleSubmit };
};