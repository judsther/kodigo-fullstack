
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/admin/users";

export const updateUser = async (id, user, token) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, user, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        throw new Error("Error al actualizar el usuario", error);
    }
};
