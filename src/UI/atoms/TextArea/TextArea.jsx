import styles from './TextArea.module.css';

const TextArea = ({customClass, placeholder, value, callback, name}) => {
  return (
    <textarea name={name} onChange={callback} value={value} className={`${styles.TextArea} ${customClass}`} placeholder={placeholder}></textarea>
  )
}

export default TextArea;