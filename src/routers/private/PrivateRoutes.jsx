import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/auth/AuthProvider";
import HeaderPanel from "../../templates/HeaderPanel/HeaderPanel";


const PrivateRoutes = () => {
    const {auth} = useContext(AuthContext);
    const token = JSON.parse(localStorage.getItem("tokenAPI"));

    if(token?.logged || true === auth?.logged || false){

        return (
        <div className="containerPanelControl">
            <HeaderPanel />
            <Outlet />
        </div>
        )

    }else{
        /* return <Navigate to="/" /> */
    }

 
}

export default PrivateRoutes;