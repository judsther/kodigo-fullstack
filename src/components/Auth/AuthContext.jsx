
import { createContext, useContext, useState } from 'react';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [user, setUser] = useState(null);
   


    const register = async(newUser) => {
        try{
             setUser(newUser);

        } catch (error){
            console.error('error al registrar usuario', error);
            throw error;
        }  
     };


    const login = (newToken) => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
     };
    

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
     };

          return (
         <AuthContext.Provider value={{ token, register, user, login, logout }}>
            {children}
         </AuthContext.Provider>
          );
};

export const useAuth = () => {
    return useContext(AuthContext);
};