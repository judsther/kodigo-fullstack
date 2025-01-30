


const PeriodSelector = ({ period, setPeriod }) => {
    return (
        <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="border p-2 rounded"
        >
            <option value="daily">Diario</option>
            <option value="weekly">Últimos 7 días</option>
            <option value="monthly">Últimos 30 días</option>
            <option value="custom">Personalizar</option>
        </select>
    );
};

export default PeriodSelector;