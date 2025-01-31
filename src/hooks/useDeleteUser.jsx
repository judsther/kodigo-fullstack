import { useState } from 'react';
import axios from 'axios';

export const useDeleteUser = (fetchUsers) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const token = localStorage.getItem("token");

    const handleDelete = async (id) => {
        if (!window.confirm("¿Estás seguro de que deseas eliminar este usuario?")) return;

        try {
            setLoading(true);
            await axios.delete(`http://127.0.0.1:8000/api/admin/users/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert("Usuario eliminado correctamente");
            await fetchUsers(); // Recargar la lista de usuarios
        } catch (err) {
            setError("Error al eliminar usuario");
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, handleDelete };
};
