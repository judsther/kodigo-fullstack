/* eslint-disable react/prop-types */

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Loader from '../common/Loader';

const StatsDisplay = ({ stats, loading }) => {
    if (loading) {
        return <Loader />;
    }

    if (!stats) {
        return <p className="text-center text-gray-600">No hay datos disponibles.</p>;
    }

    return (
        <div className="mt-4">
            <h3 className="text-xl mb-2 text-black">
                Total de Usuarios: {stats.total_users ?? "No disponible"}
            </h3>

            {/* Gráfico de desglose diario */}
            {stats.daily_breakdown && stats.daily_breakdown.length > 0 ? (
                <LineChart width={800} height={400} data={stats.daily_breakdown}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="count" stroke="#8884d8" />
                </LineChart>
            ) : (
                <p className="text-center text-gray-600">No hay datos suficientes para el gráfico.</p>
            )}
        </div>
    );
};


export default StatsDisplay;