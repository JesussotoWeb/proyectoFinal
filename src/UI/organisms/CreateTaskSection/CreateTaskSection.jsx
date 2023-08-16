import { useContext, useEffect, useState } from "react";
import Input from "../../../UI/atoms/Input/Input";
import TextArea from "../../atoms/TextArea/TextArea";
import Title from "../../atoms/Title/Title";
import { AuthContext } from "../../../context/auth/AuthProvider";
import styles from "./CreateTaskSection.module.css";

const CreateTaskSection = () => {

  const { verifyToken} = useContext(AuthContext);

  const [showObjetives, setShowObjetives] = useState(false);
  const [xx, setXx] = useState(false);

  const [data, setData] = useState({
    nombreTask: "",
    descripcion: "",
    fecha: "",
  });

  useEffect(() => {
    let fecha = new Date();
    setData({
      ...data,
      fecha: fecha
    })
    console.log(data)

  }, [])
  const verifyTokens = async () => {
    await verifyToken()
    return true;
  };
  useEffect(() => {
    setXx(verifyTokens());

  }, [])

  const sendData = async (e) => {
    e.preventDefault();
    console.log(data)

    const response = await fetch('http://localhost:4500/api/tarea', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const res = await response.json();
    console.log(res)

  };
  const changeInputs = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div className={styles.CreateTaskSection}>
      <Title
        text="Lista de tareas"
        customClass={styles.VerTareasSection__Title}
      />

      <form className={styles.CreateTask__form} onSubmit={(e) => sendData(e)}>
        <div className={styles.CreateTask__formInfo}>
          <Input
            callback={(e) => changeInputs(e)}
            type="text"
            placeholder="Nombre de Tarea"
            value={data.nombreTask}
            name="nombreTask"
          />
          <TextArea
            callback={(e) => changeInputs(e)}
            placeholder="Descripcion"
            value={data.descripcion}
            name="descripcion"
          />
        </div>

        <div className={styles.CreateTask__submitContent}>
          {
            showObjetives ? (
              <Input type="submit" value="Crear" disabled />

            ) : (
              <Input type="submit" value="Crear" />

            )
          }
        </div>
      </form>
    </div>
  );
};

export default CreateTaskSection;
