import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const useEditUser = (token) => {
    const { id } = useParams(); // Get the user ID from the URL
    const [user, setUser] = useState({ name: "", email: "", role: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    console.log("token dentro de useEditUser: ", token);
    useEffect(() => {
        if (id) fetchUser();
    }, [id]);

    const fetchUser = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`http://127.0.0.1:8000/api/admin/edit/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setUser(response.data);
        } catch (err) {
            setError("Error fetching user data");
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = async (updatedUser) => {
        try {
            setLoading(true);
            await axios.put(`http://127.0.0.1:8000/api/admin/edit/${id}`, updatedUser, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert("User updated successfully!");
            navigate("/users");
        } catch (err) {
            setError("Failed to update user");
        } finally {
            setLoading(false);
        }
    };

    return { user, setUser, loading, error, handleEdit };
};
