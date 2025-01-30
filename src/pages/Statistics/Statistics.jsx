import { useState } from 'react';
import PeriodSelector from '../../components/Statistics/PeriodSelector';
import DatePickerRange from '../../components/Statistics/DatePickerRange';
import StatsDisplay from '../../components/Statistics/StatsDisplay';
import ErrorMessage from '../../components/Statistics/ErrorMessage';
import Button from '../../components/common/Button';
import Loader from '../../components/common/Loader';
import { useStatistics } from '../../hooks/useStatistics';
import { useNavigate } from 'react-router-dom';

const Statistics = () => {
    const [period, setPeriod] = useState('weekly');
    const [date, setDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const { stats, loading, error } = useStatistics(period, date, startDate, endDate, token);
   
    const handleClick = () => {
        navigate('/');
    };
    return (
        <div className="p-4">
            <h2 className="text-2xl mb-4">Estadísticas de Usuarios</h2>

            <PeriodSelector period={period} setPeriod={setPeriod} />

            {period === 'daily' && (
                <DatePickerRange
                    startDate={date}
                    endDate={date}
                    onStartDateChange={setDate}
                    onEndDateChange={setDate}
                />
            )}

            {period === 'custom' && (
                <DatePickerRange
                    startDate={startDate}
                    endDate={endDate}
                    onStartDateChange={setStartDate}
                    onEndDateChange={setEndDate}
                />
            )}

            {(period === 'daily' || period === 'custom') && (
                <Button onClick={() => {}} disabled={loading}>
                    Aplicar
                </Button>
            )}

            <ErrorMessage error={error} />
            {loading ? <Loader /> : <StatsDisplay stats={stats} />}

            <Button onClick={handleClick}>
            Atrás
        </Button>
        </div>
    );
};

export default Statistics;