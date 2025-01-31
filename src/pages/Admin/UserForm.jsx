import { useState } from "react";
import { createUser } from "../../services/api";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
    const [id, setId] = useState(""); // Optional: Only if you want to manually set IDs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const token = localStorage.getItem("token");

        try {
            const userData = { name, email, role };
            await createUser(userData, token);
            alert("User created successfully!");
            navigate("/admin");
        } catch (err) {
            setError(err.response?.data?.errors || "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Create New User</h2>

            {error && <p className="text-red-500">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Optional ID Field - Only if needed */}
                {id && (
                    <input
                        type="text"
                        placeholder="User ID"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        className="w-full p-2 border rounded bg-gray-100"
                        disabled
                    />
                )}

                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />

                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
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
                    {loading ? "Creating..." : "Create User"}
                </button>
            </form>
        </div>
    );
};

export default UserForm;
