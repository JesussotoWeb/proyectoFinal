import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/auth/AuthProvider";


const PrivateRoutes = () => {
    const {auth} = useContext(AuthContext);
    const token = JSON.parse(localStorage.getItem("tokenRegister"));
   

    if(token?.logged || true === auth?.logged || false){

        return <Outlet />

    }else{
        return <Navigate to="/" />
    }

 
}

export default PrivateRoutes;