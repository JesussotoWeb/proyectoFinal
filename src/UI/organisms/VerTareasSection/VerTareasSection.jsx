import { useEffect, useState } from "react";
import Title from "../../atoms/Title/Title";
import styles from "./VerTareasSection.module.css";
import Button from "../../atoms/Button/Button";

const VerTareasSection = () => {
  const [apiGet, setApiGet] = useState();

  useEffect(() => {
    getTareas();
    
  }, []);

  /*     
   */
const getTareas = async () => {
    const query = await fetch("http://localhost:4500/api/tarea/tareas");
    const res = await query.json();
  console.log(res)
      if (res.ok) {
        setApiGet(res.lista);
      } else {
        console.log(res);
      }
}
  const removeTarea = async (id) => {
        const query = await fetch(`http://localhost:4500/api/tarea/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const res = await query.json();
        console.log(res)
        getTareas();
   
  };
  const editarTarea = (id) => {
    location.pathname = `/dashboard/ver-tareas/${id}`;
  }
  return (
    <div className={styles.VerTareasSection}>
      <Title
        text="Lista de tareas"
        customClass={styles.VerTareasSection__Title}
      />

      <table className={styles.VerTareasSection__table}>
        <thead>
          <tr>
            <th className={styles.VerTareasSection__TableTitle}>
              Nombre de Tarea
            </th>
            <th className={styles.VerTareasSection__TableTitle}>
              Descripcion de Tarea
            </th>
            <th className={styles.VerTareasSection__TableTitle}>
              Fecha de creacion
            </th>
            <th className={styles.VerTareasSection__TableTitle}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {apiGet?.map((content, index) => {
            return (
              <tr key={index} className={styles.VerTareasSection__row}>
                <td className={styles.VerTareasSection__TableTitle}>
                  {content.nombreTask}
                </td>
                <td className={styles.VerTareasSection__TableTitle}>
                  {content.descripcion}
                </td>
                <td className={styles.VerTareasSection__TableTitle}>
                  {content.fecha}
                </td>
                <td className={`${styles.VerTareasSection__TableTitle} ${styles.VerTareasSection__btnContent}`}>
                  <Button
                    text="Editar"
                    customClass={`${styles.Table__btn} ${styles.Table__btn_green}`}
                    callback={() => editarTarea(content._id)}
                  />
                  <Button
                  callback={() => removeTarea(content._id)}
                    text="Eliminar"
                    customClass={`${styles.Table__btn} ${styles.Table__btn_red}`}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default VerTareasSection;
