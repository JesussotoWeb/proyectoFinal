import styles from "./Logo.module.css";

const Logo = ({path, customClass}) => {
  return (
    <img
      className={`${styles.Logo} ${customClass}`}
      src={path}
      title="img"
    />
  );
};

export default Logo;
