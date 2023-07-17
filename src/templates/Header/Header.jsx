import { Link, useNavigate } from 'react-router-dom';
import Button from '../../UI/atoms/Button/Button';
import Logo from '../../UI/atoms/Logo/Logo';
import styles from './Header.module.css';

const Header = () => {
  const navigate = useNavigate()
  const pathName = location.pathname;
  return (
    <header className={styles.Header}>
        <Logo customClass={styles.Header__Logo} path="/BLUE.png" />
        <nav className={styles.Header__navBar}>
            <ul className={styles.Header__list}>
                <li className={`${styles.Header__item} ${pathName == '/' ? styles.Header__item_active:''}`}>
                  <Link className={styles.Li__link} to='/'>Home</Link>
                </li>
                <li className={`${styles.Header__item} ${pathName == '/services' ? styles.Header__item_active:''}`}>
                  <Link className={styles.Li__link} to='/services'>Services</Link>

                </li>
                <li className={`${styles.Header__item} ${pathName == '/blog' ? styles.Header__item_active:''}`}>
                  <Link className={styles.Li__link} to='/blog'>Blog</Link>

                </li>
                <li className={`${styles.Header__item} ${pathName == '/contact' ? styles.Header__item_active:''}`}>
                  <Link className={styles.Li__link} to='/contact'>Contact</Link>

                </li>
            </ul>
            <Button text="Log In" callback={() => navigate('/login')}/>
        </nav>
    </header>
  )
}

export default Header;