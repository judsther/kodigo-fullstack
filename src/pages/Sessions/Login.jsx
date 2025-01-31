import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { error, handleSubmit } = useLogin();

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(email, password);
    };

    return (
        <div className="bg-gradient-to-br from-purple-700 via-indigo-500 to-blue-500 min-h-screen flex flex-col items-center justify-center text-white font-sans p-6">
            <div className="w-11/12 max-w-md bg-white bg-opacity-10 p-8 rounded-3xl shadow-2xl backdrop-blur-lg">
                <h2 className="text-3xl font-bold text-center mb-6">
                    Iniciar Sesión
                </h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Correo:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Contraseña:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-yellow-400 text-black py-2 px-4 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 font-semibold shadow-lg transition-transform transform hover:scale-105"
                    >
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
    );
};
