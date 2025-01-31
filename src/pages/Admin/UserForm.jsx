import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Navbar } from "../../components/common/Navbar";
import Button from "../../components/common/Button";

const API_URL = "http://127.0.0.1:8000/api/admin/users"; // Ajusta la URL según sea necesario

const UserForm = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: "", email: "", password: "", role: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const token = localStorage.getItem("token");

    const handleCreate = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await axios.post(API_URL, user, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            alert("Usuario creado con éxito!");
            navigate("/administration");
        } catch (err) {
            setError("Error al crear el usuario");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="bg-gradient-to-br from-purple-700 via-indigo-500 to-blue-500 min-h-screen flex flex-col items-center justify-center text-white font-sans p-6">
                <header className="text-center mb-10">
                    <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                        Crear Nuevo Usuario 📝
                    </h1>
                    <p className="mt-4 text-lg md:text-xl opacity-90">
                        Completa el formulario para registrar un usuario.
                    </p>
                </header>

                <section className="w-11/12 max-w-4xl bg-white bg-opacity-10 p-8 rounded-3xl shadow-2xl">
                    <h2 className="text-3xl font-semibold text-center mb-6 underline decoration-wavy decoration-yellow-400">
                        Información del Usuario
                    </h2>

                    {error && <p className="text-red-400 text-center mb-4">{error}</p>}

                    <form onSubmit={handleCreate} className="space-y-4">
                        <input
                            type="text"
                            placeholder="Nombre"
                            value={user.name}
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                            className="w-full p-3 border rounded-lg bg-gray-200 text-black"
                            required
                        />

                        <input
                            type="email"
                            placeholder="Correo Electrónico"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            className="w-full p-3 border rounded-lg bg-gray-200 text-black"
                            required
                        />

                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            className="w-full p-3 border rounded-lg bg-gray-200 text-black"
                            required
                        />

                        <select
                            value={user.role}
                            onChange={(e) => setUser({ ...user, role: e.target.value })}
                            className="w-full p-3 border rounded-lg bg-gray-200 text-black"
                            required
                        >
                            <option value="">Seleccionar Rol</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>

                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 font-semibold shadow-lg transition-transform transform hover:scale-105"
                            disabled={loading}
                        >
                            {loading ? "Creando..." : "Crear Usuario"}
                        </button>
                    </form>
                </section>

                <Button 
                    onClick={() => navigate("/administration")} 
                    className="mt-6 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black text-lg font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105"
                >
                    Atrás
                </Button>
            </div>
        </>
    );
};

export default UserForm;
