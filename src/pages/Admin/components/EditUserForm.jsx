/* eslint-disable react/prop-types */

const EditUserForm = ({ user, onChange, onSubmit, loading, error }) => (
    <form onSubmit={onSubmit} className="space-y-4">
        <input
            type="text"
            placeholder="Nombre"
            value={user.name}
            onChange={(e) => onChange("name", e.target.value)}
            className="w-full p-3 border rounded-lg bg-gray-200 text-black"
            required
        />
        <input
            type="email"
            placeholder="Correo Electrónico"
            value={user.email}
            onChange={(e) => onChange("email", e.target.value)}
            className="w-full p-3 border rounded-lg bg-gray-200 text-black"
            required
        />
        <select
            value={user.role}
            onChange={(e) => onChange("role", e.target.value)}
            className="w-full p-3 border rounded-lg bg-gray-200 text-black"
            required
        >
            <option value="">Seleccionar Rol</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
        </select>

        {error && <p className="text-red-400 text-center mb-4">{error}</p>}

        <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 font-semibold shadow-lg transition-transform transform hover:scale-105"
            disabled={loading}
        >
            {loading ? "Actualizando..." : "Actualizar Usuario"}
        </button>
    </form>
);

export default EditUserForm;
