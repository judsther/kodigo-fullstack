import { useState } from 'react';
import PeriodSelector from '../../components/Statistics/PeriodSelector';
import DatePickerRange from '../../components/Statistics/DatePickerRange';
import StatsDisplay from '../../components/Statistics/StatsDisplay';
import ErrorMessage from '../../components/Statistics/ErrorMessage';
import Button from '../../components/common/Button';
import Loader from '../../components/common/Loader';
import { useStatistics } from '../../hooks/useStatistics';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/common/Navbar';

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
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-purple-700 via-indigo-500 to-blue-500 min-h-screen flex flex-col items-center justify-center text-white font-sans p-6">
        <header className="text-center mb-10">
          <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg">
            Estadísticas de Usuarios 📊
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90">
            Aquí puedes analizar los datos de uso de la plataforma.
          </p>
        </header>
  
        <section className="w-11/12 max-w-4xl bg-white bg-opacity-10 p-8 rounded-3xl shadow-2xl">
          <h2 className="text-4xl font-semibold text-center mb-6 underline decoration-wavy decoration-yellow-400">
            Seleccionar Periodo
          </h2>
          <div className="text-black text-lg">
            <PeriodSelector period={period} setPeriod={setPeriod} />
          </div>
  
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
            <div className="flex justify-center mt-4">
              <Button
                onClick={() => {}}
                disabled={loading}
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-lg shadow"
              >
                Aplicar
              </Button>
            </div>
          )}
        </section>
  
        <section className="w-11/12 max-w-4xl bg-gray-100 p-8 mt-6 rounded-3xl shadow-2xl">
          <h2 className="text-4xl font-semibold text-center mb-6 text-black">
            Datos de Estadísticas
          </h2>
          <ErrorMessage error={error} />
          {loading ? <Loader /> : <StatsDisplay stats={stats} />}
        </section>
  
        <Button
          onClick={handleClick}
          className="mt-6 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black text-lg font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Atrás
        </Button>
      </div>
    </>
  );
};
export default Statistics;