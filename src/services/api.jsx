import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

export const fetchStatistics = async (params, token) => {
    console.log("Fetching statistics with params:", params);
    console.log("Token:", token);

    try {
        const response = await axios.get(`${API_BASE_URL}/admin/statistics`, {
            params,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        console.log("API response:", response.data);
        return response.data;
    } catch (error) {
        console.error("API error:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || "Error fetching statistics");
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






