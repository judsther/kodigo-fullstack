/* eslint-disable react/prop-types */
const ErrorMessage = ({ error }) => {
    if (!error) {
        return null;
    }

    return (
        <div className="text-red-500 mt-4">
            {error}
        </div>
    );
};

export default ErrorMessage;