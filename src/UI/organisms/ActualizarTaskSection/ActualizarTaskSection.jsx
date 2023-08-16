import { useEffect, useState } from "react";
import Input from "../../../UI/atoms/Input/Input";
import styles from "./ActualizarTaskSection.module.css";
import TextArea from "../../atoms/TextArea/TextArea";
import { useNavigate, useParams } from "react-router-dom";

const ActualizarTaskSection = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    nombreTask: "",
    descripcion: "",
  });
  const [fecha, setFecha] = useState()

  useEffect(() => {
    fetch("http://localhost:4500/api/tarea/tareas")
      .then((query) => query.json())
      .then((res) => {
        const dataApi = res.lista.find((item) => item._id === id);
        const filterApi = {
          nombreTask: dataApi.nombreTask,
          descripcion: dataApi.descripcion,
          fecha: dataApi.fecha,
        };
        console.log("filterApi", filterApi);

        setData(filterApi);
      });

  }, []);

useEffect(() => {
  const fecha = new Date();
  setData({
    ...data,
    fecha: fecha
  });
 
}, [fecha])

 
  const sendData = async (e) => {
    e.preventDefault();
    
    
    console.log(data);

    const response = await fetch(`http://localhost:4500/api/tarea/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    if (res.ok) {
      setTimeout(() => {
       /*  navigate("/dashboard/ver-tareas"); */
      }, 2000);
    }
  };
  const changeInputs = (e) => {
    const { name, value } = e.target;
    date();
    setData({
      ...data,
      [name]: value,
    });
  };
  const changeTextAreas = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <div>
      <form className={styles.CreateTask__form} onSubmit={(e) => sendData(e)}>
        <Input
          callback={(e) => changeInputs(e)}
          type="text"
          placeholder="Nombre de Tarea"
          value={data.nombreTask}
          name="nombreTask"
        />
        <TextArea
          callback={(e) => changeTextAreas(e)}
          placeholder="Descripcion"
          value={data.descripcion}
          name="descripcion"
        />

        <Input type="submit" value="Actualizar" />
      </form>
    </div>
  );
};

export default ActualizarTaskSection;
