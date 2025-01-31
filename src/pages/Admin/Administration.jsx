import "./../../css/app.css";
import { useUser } from "../../hooks/useUser";
import { useDeleteUser } from "../../hooks/useDeleteUser";
import ErrorMessage from "../../components/Statistics/ErrorMessage";
import Loader from "../../components/common/Loader";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import { Navbar } from "../../components/common/Navbar";

const Administration = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { user, loading, error, fetchUsers } = useUser(token);
  const { handleDelete, loading: deleting } = useDeleteUser(fetchUsers);

  const renderTable = () => {
    return (
      <div className="overflow-x-auto">
        <table className="w-full bg-white bg-opacity-10 backdrop-blur-lg shadow-xl rounded-lg overflow-hidden">
          <thead className="bg-yellow-400 text-black">
            <tr>
              <th className="py-3 px-4">Id</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => (
              <tr key={user.id} className="border-b border-gray-600 hover:bg-yellow-300 hover:text-black transition">
                <td className="py-2 px-4">{user.id}</td>
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.role}</td>
                <td className="py-2 px-4 flex space-x-2">
                  <button
                    onClick={() => navigate(`/admin/users/${user.id}`, { state: { user } })}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white py-1 px-3 rounded-lg shadow"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-lg shadow"
                    disabled={deleting}
                  >
                    {deleting ? "Eliminando..." : "Eliminar"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-purple-700 via-indigo-500 to-blue-500 min-h-screen flex flex-col items-center justify-center text-white font-sans p-6">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
            Administración de Usuarios 📊
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90">
            Aquí puedes gestionar los usuarios de la plataforma.
          </p>
        </header>

        <Button 
          onClick={() => navigate("/admin/users/create")} 
          className="mb-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          ➕ Crear Nuevo Usuario
        </Button>

        <section className="w-11/12 max-w-4xl bg-white bg-opacity-10 p-8 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-semibold text-center mb-6 underline decoration-wavy decoration-yellow-400">
            Estadísticas de Usuarios
          </h2>
          <ErrorMessage error={error} />
          {loading ? <p><Loader /></p> : renderTable()}
        </section>

        <Button 
          onClick={() => navigate("/")} 
          className="mt-6 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black text-lg font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Atrás
        </Button>
      </div>
    </>
  );
};

export default Administration;
