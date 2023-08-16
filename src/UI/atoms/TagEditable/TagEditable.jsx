import styles from './TagEditable.module.css';

const TagEditable = ({type, customClass, placeholder, value, callback, name, disabled, id }) => {
  return (
    <span onChange={callback}
    disabled={disabled} className={`${styles.TagEditable} ${customClass} ${disabled ? styles.disable : ''}`}  placeholder={placeholder} id={id} name={name} value={value}></span>
    
  )
}

export default TagEditable;