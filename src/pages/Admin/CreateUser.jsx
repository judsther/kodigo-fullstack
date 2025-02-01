
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/common/Navbar";
import Button from "../../components/common/Button";
import useCreateUser from "../../hooks/useCreateUser";
import CreateUserForm from "./components/CreateUserForm";

const CreateUser = () => {
    const navigate = useNavigate();

    const { user, loading, error, handleChange, handleCreate } = useCreateUser();

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

                    <CreateUserForm
                        user={user}
                        onChange={handleChange}
                        onSubmit={handleCreate}
                        loading={loading}
                        error={error}
                    />
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

export default CreateUser;

