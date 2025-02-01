/* eslint-disable react/prop-types */

import Button from "../../../components/common/Button";


const CreateUserButton = ({ navigate }) => {
  return (
    <Button
      onClick={() => navigate("/admin/users/create")}
      className="mb-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105"
    >
      ➕ Crear Nuevo Usuario
    </Button>
  );
};

export default CreateUserButton;
