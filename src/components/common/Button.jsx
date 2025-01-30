

const Button = ({ children, onClick, disabled }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`bg-yellow-300 text-purple-700 px-4 py-2 rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-yellow-400 transition-all duration-300 ${
                disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
            }`}
        >
            {children}
        </button>
    );
};

export default Button;