

import { useUser } from "../../hooks/useUser";
import { useDeleteUser } from "../../hooks/useDeleteUser";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/common/Navbar";
import UserTable from "./components/UserTable";
import StatisticsSection from "./components/UsersStatisticsSection";
import Button from "../../components/common/Button";
import CreateUserButton from "./components/CreateUserButton";

const Administration = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { user, loading, error, fetchUsers } = useUser(token);
  const { handleDelete, loading: deleting } = useDeleteUser(fetchUsers);

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
        <div className="m-4">
        <CreateUserButton  navigate={navigate} />
      </div>
        <StatisticsSection
          loading={loading}
          error={error}
          renderTable={() => (
            <UserTable
              users={user}
              handleDelete={handleDelete}
              loading={deleting}
              navigate={navigate}
            />
          )}
        />

   <div className="m-4">
        <Button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black text-lg font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Atrás
        </Button>
      </div>
   </div>
    </>
  );
};

export default Administration;
