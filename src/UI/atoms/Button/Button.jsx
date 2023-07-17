import styles from './Button.module.css';

const Button = ({text, customClass, callback}) => {
  return (
    <button onClick={callback} className={`${styles.Button} ${customClass}`}>{text}</button>
  )
}

export default Button;