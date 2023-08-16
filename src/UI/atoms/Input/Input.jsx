import styles from './Input.module.css';

const Input = ({type, customClass, placeholder, value, callback, name, disabled, id }) => {
  return (
    <input
      id={id}
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      className={`${styles.Input} ${customClass} ${disabled ? styles.disable : ''}`} 
      onChange={callback}
      disabled={disabled}
   />
  )
}

export default Input;