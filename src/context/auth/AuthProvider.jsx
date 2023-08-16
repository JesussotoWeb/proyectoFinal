import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const dataInitial = {
  nombre: "",
  apellido: "",
  logged: false,
  token: ''
}


const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(dataInitial)

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    if(token?.logged){
      console.log(token)
      setAuth(token);
    }
  }, [])

  const logout = () => {
    localStorage.clear();
    setTimeout(() => {
        location.pathname = "/";
    }, 3000);

}
const verifyToken = async () => {
  try {
    const response = await fetch('http://localhost:4500/api/auth/verificarToken', {
      headers: {
        'token': auth.token
      }
    });
    const data = await response.json();

    if (!data.ok) {
      logout();

    }
  } catch (error) {
    console.error('Error al verificar el token', error);
  }
}
  return (
    <AuthContext.Provider value={{auth, setAuth, logout, verifyToken}}>
        { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider;