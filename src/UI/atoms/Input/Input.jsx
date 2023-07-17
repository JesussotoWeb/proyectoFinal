import styles from './Input.module.css';

const Input = ({type, customClass, placeholder, value, callback, name}) => {
  return (
    <input
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      className={`${styles.Input} ${customClass}`} 
      onChange={callback}
   />
  )
}

export default Input;