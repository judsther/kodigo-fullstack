import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

export const fetchStatistics = async (params, token) => {
    console.log("Service");
    console.log(token);
    try {
        const response = await axios.get(`${API_BASE_URL}/admin/statistics`, {
            params,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error fetching statistics');
    }
};

export const fetchUsers = async (token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/admin/users`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        console.log("fetchUsers");
        console.log(response.data.data);
        return response.data.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error fetching users');
    }
};

// Crear un nuevo usuario
export const createUser = async (userData, token) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/admin/users`, userData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        console.log("createUser", response.data);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error creating user');
    }
};

// Actualizar un usuario
export const updateUser = async (userId, userData, token) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/admin/users/${userId}`, userData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        console.log("updateUser", response.data);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error updating user');
    }
};

// Eliminar un usuario
export const deleteUser = async (userId, token) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/admin/users/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        console.log("deleteUser", response.data);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error deleting user');
    }
};