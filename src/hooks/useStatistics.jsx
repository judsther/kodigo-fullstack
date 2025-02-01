import { useState, useEffect } from 'react';
import { fetchStatistics } from '../services/api';

export const useStatistics = (period, date, startDate, endDate, token) => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getStats = async () => {
            setLoading(true);
            setError(null);
    
            try {
                let params = { period };
                if (period === "daily") {
                    params.date = date.toISOString().split("T")[0];
                } else if (period === "custom") {
                    params.start_date = startDate.toISOString().split("T")[0];
                    params.end_date = endDate.toISOString().split("T")[0];
                }
    
                console.log("Fetching stats with params:", params);
                const data = await fetchStatistics(params, token);
                console.log("API response:", data);
    
                setStats(data);
            } catch (error) {
                console.error("Error fetching stats:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
    
        getStats();
    }, [period, date, startDate, endDate, token]);
    


    return { stats, loading, error };
};