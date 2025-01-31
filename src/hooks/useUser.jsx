import { useState, useEffect } from 'react';
import { fetchUsers } from '../services/api';

export const useUser = (token) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            setLoading(true);
            setError(null);

            try {
                const data = await fetchUsers(token);
                setUser(data ?? []);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        getUser();
    }, [token]);

    return { user, loading, error };
};

