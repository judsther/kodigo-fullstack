/* eslint-disable react/prop-types */

const UserTable = ({ users, handleDelete, loading, navigate }) => {
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
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-b border-gray-600 hover:bg-yellow-300 hover:text-black transition"
            >
              <td className="py-2 px-4">{user.id}</td>
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4">{user.role}</td>
              <td className="py-2 px-4 flex space-x-2">
                <button
                  onClick={() =>
                    navigate(`/admin/users/${user.id}`, { state: { user } })
                  }
                  className="bg-indigo-500 hover:bg-indigo-600 text-white py-1 px-3 rounded-lg shadow"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-lg shadow"
                >
                  {loading ? "Eliminando..." : "Eliminar"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
