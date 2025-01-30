

export const formatDate = (date) => {
    return date.toISOString().split('T')[0];
};

export const isDateValid = (startDate, endDate) => {
    return startDate <= endDate;
};