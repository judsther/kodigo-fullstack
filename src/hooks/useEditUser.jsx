
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../services/userService";

const useEditUser = (initialUser, id, token) => {
    const [user, setUser] = useState(initialUser);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (field, value) => {
        setUser((prevUser) => ({ ...prevUser, [field]: value }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await updateUser(id, user, token);
            alert("Usuario actualizado con éxito!");
            navigate("/administration");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return {
        user,
        loading,
        error,
        handleChange,
        handleUpdate
    };
};

export default useEditUser;
