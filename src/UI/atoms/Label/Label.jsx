import styles from './Label.module.css'

const Label = ({htmlFor, text}) => {
  return (
    <label htmlFor={htmlFor} className={styles.Label}>{text}</label>
  )
}

export default Label