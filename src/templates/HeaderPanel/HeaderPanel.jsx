import { Link } from "react-router-dom";
import styles from "./HeaderPanel.module.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth/AuthProvider";
import Img from "../../UI/atoms/Img/Img";
import Paragraph from "../../UI/atoms/Paragraph/Paragraph";

const HeaderPanel = () => {
  const { logout } = useContext(AuthContext);
  const [menuAnimate, setMenuAnimate] = useState(false);
  const [loading, setLoading] = useState(false);


  const animateHeader = () => {
    setMenuAnimate(!menuAnimate)
    setTimeout(() => {
      setLoading(!loading)
    }, 500)
  }
  

  return (
    <header
      className={`${styles.HeaderPanel} ${
        menuAnimate ? styles.HeaderPanel_animate : ""
      } ${loading ? styles.HeaderPanel__link_loading:''}`}>
      <div className={styles.HeaderPanel__logoContainer}>
        <Img
          path="/proyecto_final_log.svg"
          customClass={styles.HeaderPanel__logo}
        />
        <Paragraph
          text="Create task core"
          customClass={styles.HeaderPanel__logoParagraph}
        />
      </div>
      <ul className={styles.HeaderPanel__List}>
        <li className={styles.HeaderPanel__item}>
          <Link className={styles.HeaderPanel__LinksContainer} to="/dashboard">
            <i className={`fa-solid fa-house-chimney ${styles.HeaderPanel__link_icon}`}></i>
            <Paragraph
              text="Panel Principal"
              customClass={styles.HeaderPanel__link}
            />
          </Link>
        </li>
        <li className={styles.HeaderPanel__item}>
          <Link className={styles.HeaderPanel__LinksContainer}
            to="/dashboard/crear-tarea">
            <i className={`fa-regular fa-pen-to-square ${styles.HeaderPanel__link_icon}`}></i>
            <Paragraph
              text="Crear tarea"
              customClass={styles.HeaderPanel__link}
            />
          </Link>
        </li>
        <li className={styles.HeaderPanel__item}>
          <Link className={styles.HeaderPanel__LinksContainer} to="/dashboard/ver-tareas">
            <i className={`fa-regular fa-eye ${styles.HeaderPanel__link_icon}`}></i>
            <Paragraph
              text="Ver tareas"
              customClass={styles.HeaderPanel__link}
            />
          </Link>
        </li>
        <li className={styles.HeaderPanel__item}>
          <Link className={styles.HeaderPanel__LinksContainer} onClick={() => logout()}>
          <i className={`fa-solid fa-arrow-right-from-bracket ${styles.HeaderPanel__link_icon}`}></i>
            <Paragraph
              text="Salir"
              customClass={styles.HeaderPanel__link}
            />
          </Link>
        </li>
      </ul>
      <p className={styles.HeaderPanel__copy}>
        Hecho con 💖 developed by{" "}
        <a target="_blank" href="https://jesussotoweb.link">
          JSW.link
        </a>{" "}
      </p>
      <i
        className={`fa-solid fa-ellipsis-vertical ${styles.HeaderPanel__icon}`}
        onClick={() => animateHeader()}></i>
      <div className={styles.payLoad}>
        
      </div>
    </header>
  );
};

export default HeaderPanel;
