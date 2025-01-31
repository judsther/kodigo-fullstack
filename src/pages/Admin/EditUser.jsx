import { useParams } from "react-router-dom";
import { useEditUser } from "../../hooks/useEditUser";
import { useNavigate } from 'react-router-dom';

const EditUser = () => {
    const { id } = useParams();
    const token = localStorage.getItem("token");
    const { user, setUser, loading, error, handleEdit } = useEditUser(token, id);
    const navigate = useNavigate();

    console.log("EditUser Component", user);
    const handleSubmit = (e) => {
        e.preventDefault();
        handleEdit(user);
        navigate('/');
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Edit User</h2>

            {error && <p className="text-red-500">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Name"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    className="w-full p-2 border rounded"
                    required
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    className="w-full p-2 border rounded"
                    required
                />

                <select
                    value={user.role}
                    onChange={(e) => setUser({ ...user, role: e.target.value })}
                    className="w-full p-2 border rounded"
                    required
                >
                    <option value="">Select Role</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    disabled={loading}
                >
                    {loading ? "Updating..." : "Update User"}
                </button>
            </form>
        </div>
    );
};

export default EditUser;
