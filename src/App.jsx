
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Statistics from "./pages/Statistics/Statistics";
import PrivateRoute from "./components/Auth/PrivateRoute";
import { AuthProvider } from "./components/Auth/AuthContext";
import Register from "./pages/Sessions/Register";
import { Login } from "./pages/Sessions/Login";



function App() {
  return (
    <>
    <AuthProvider>
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
                    <Route
                        path="/statistics"
                        element={
                            <PrivateRoute>
                                <Statistics />
                            </PrivateRoute>
                        }
                    />
      </Routes>
    </Router>
    </AuthProvider>

    </>
  );
};

export default App;
