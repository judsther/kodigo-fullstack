
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://127.0.0.1:8000/api/admin/users"; // Adjust as needed

const useCreateUser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: "", email: "", password: "", role: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const token = localStorage.getItem("token");

    const handleChange = (field, value) => {
        setUser((prevUser) => ({ ...prevUser, [field]: value }));
    };

    const handleCreate = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await axios.post(API_URL, user, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            alert("Usuario creado con éxito!");
            navigate("/administration");
        } catch (error) {
            setError("Error al crear el usuario", error);
        } finally {
            setLoading(false);
        }
    };

    return {
        user,
        loading,
        error,
        handleChange,
        handleCreate
    };
};

export default useCreateUser;
