
import { Navbar } from "../../components/common/Navbar";




function Home() {



  return (
    <>
   <Navbar/>
      <div className="bg-gradient-to-br from-purple-700 via-indigo-500 to-blue-500 min-h-screen flex flex-col items-center justify-center text-white font-sans">

      {/* Header*/}
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg animate-bounce">
          ¡Aquí va nuestra app Full Stack! 🚀
        </h1>
        <p className="mt-4 text-lg md:text-xl opacity-90">
        ¡Bienvenido/a!
        </p>
    
      </header>

      {/* Team */}
      <section className="w-11/12 max-w-3xl bg-white bg-opacity-10 p-8 rounded-3xl shadow-2xl">
        <h2 className="text-3xl font-semibold text-center mb-6 underline decoration-wavy decoration-yellow-400">
          Nuestro Equipo
        </h2>
        <ul className="flex flex-col items-center space-y-4 text-lg">
          <li className="bg-yellow-400 text-black py-2 px-4 rounded-lg shadow-md">
            Yefry
          </li>
          <li className="bg-yellow-400 text-black py-2 px-4 rounded-lg shadow-md">
            Jorge
          </li>
          <li className="bg-yellow-400 text-black py-2 px-4 rounded-lg shadow-md">
            Marcial
          </li>
          <li className="bg-yellow-400 text-black py-2 px-4 rounded-lg shadow-md">
            Judith
          </li>
        </ul>
      </section>
    </div>
    </>
  );
}

export default Home;