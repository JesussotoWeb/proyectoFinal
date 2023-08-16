import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Services from "../pages/Services";
import Blog from "../pages/BLog";
import Contact from "../pages/Contact";
import CreateAccount from "../pages/CreateAccount";
import PublicRoutes from "./public/PublicRoutes";
import PrivateRoutes from "./private/PrivateRoutes";
import CreateTask from "../pages/panel/CreateTask";
import Dashboard from "../pages/panel/Dashboard";
import VerTareas from "../pages/panel/VerTareas";
import ActualizarTasak from "../pages/panel/ActualizarTasak";

const RoutesAll = () => {
  return (
        <Routes>
          <Route path="/" element={<PublicRoutes />}>
              <Route index element={<Home/>} />
              <Route path="login" element={<Login/>} />
              <Route path="services" element={<Services/>} />
              <Route path="blog" element={<Blog/>} />
              <Route path="contact" element={<Contact/>} />
              <Route path="signin" element={<CreateAccount/>} />
          </Route>
          <Route path="/" element={<PrivateRoutes />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="dashboard/crear-tarea" element={<CreateTask/>} />
              <Route path="dashboard/ver-tareas" element={<VerTareas/>} />
              <Route path="dashboard/ver-tareas/:id" element={<ActualizarTasak/>} />
              
          </Route>
        </Routes>
  )
}

export default RoutesAll