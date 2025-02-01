/* eslint-disable react/prop-types */

import Loader from "../../../components/common/Loader";
import ErrorMessage from "../../../components/Statistics/ErrorMessage";


const StatisticsSection = ({ loading, error, renderTable }) => {
  return (
    <section className="w-11/12 max-w-4xl bg-white bg-opacity-10 p-8 rounded-3xl shadow-2xl">
      <h2 className="text-3xl font-semibold text-center mb-6 underline decoration-wavy decoration-yellow-400">
       Usuarios Registrados
      </h2>
      <ErrorMessage error={error} />
      {loading ? <Loader/> : renderTable()}
    </section>
  );
};

export default StatisticsSection;
