import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Loader from '../common/Loader';

const StatsDisplay = ({ stats, loading }) => {
    if (loading) {
        return <Loader/>;
    }

    if (!stats) {
        return null;
    }

    return (
        <div className="mt-4">
            <h3 className="text-xl mb-2">
                Total de Usuarios: {stats.total_users}
            </h3>

            {/* Gráfico de desglose diario */}
            {stats.daily_breakdown && (
                <LineChart width={800} height={400} data={stats.daily_breakdown}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="count" stroke="#8884d8" />
                </LineChart>
            )}
        </div>
    );
};

export default StatsDisplay;