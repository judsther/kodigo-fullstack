import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

export const fetchStatistics = async (params, token) => {
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