import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const DatePickerRange = ({ startDate, endDate, onStartDateChange, onEndDateChange }) => {
    return (
        <div className="mt-2">
            <DatePicker
                selected={startDate}
                onChange={onStartDateChange}
                maxDate={endDate}
                className="border p-2 rounded"
            />
            <DatePicker
                selected={endDate}
                onChange={onEndDateChange}
                minDate={startDate}
                maxDate={new Date()}
                className="border p-2 rounded ml-2"
            />
        </div>
    );
};

export default DatePickerRange;