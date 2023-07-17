import {Link} from 'react-router-dom';
import styles from './HeaderPanel.module.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth/AuthProvider';

const HeaderPanel = () => {

    const {logout} = useContext(AuthContext);
  
  return (
    <header className={styles.HeaderPanel}>
        <ul className={styles.HeaderPanel__List}>
            <li className={styles.HeaderPanel__item}><Link className={styles.HeaderPanel__link} to='/dashboard'>Panel Principal</Link></li>
            <li className={styles.HeaderPanel__item}><Link className={styles.HeaderPanel__link} to='/dashboard/crear-tarea'>Crear tarea</Link></li>
            <li className={styles.HeaderPanel__item}><Link className={styles.HeaderPanel__link} to='/dashboard/ver-tareas'>Ver tareas</Link></li>
            <li className={styles.HeaderPanel__item}><Link onClick={() => logout()} className={styles.HeaderPanel__link}>Salir</Link></li>

        </ul>
    </header>
  )
}

export default HeaderPanel;