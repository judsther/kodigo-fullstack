
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/Auth/AuthContext';
import axios from 'axios';

export const useRegister = () => {
    const [error, setError] = useState('');
    const { register } = useAuth(); 
    const navigate = useNavigate();

    const handleSubmit = async (name, email, password) => {
        console.log("Formulario de registro enviado");
        setError('');

        try {

            const response = await axios.post('http://127.0.0.1:8000/api/register', {
                name,
                email,
                password,
            })

            console.log("Usuario registrado:");
            navigate('/login'); 
        } catch (error) {
            setError('Error al registrar el usuario');
            console.error(error);
        }
    };

    return { error, handleSubmit };
};