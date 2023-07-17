import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const dataInitial = {
  nombre: "",
  apellido: "",
  logged: false
}


const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(dataInitial)

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("tokenRegister"));

    if(token?.logged){
      setAuth(token);
    }
  }, [])

  const logout = () => {
    localStorage.clear();
    setTimeout(() => {
        location.pathname = "/";
    }, 1000);

}
  
  return (
    <AuthContext.Provider value={{auth, setAuth, logout}}>
        { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider;