import styles from './SubTitle.module.css';

const SubTitle = ({text, customClass}) => {
  return (
    <h2 className={`${styles.SubTitle} ${customClass}`} dangerouslySetInnerHTML={{__html: text}}></h2>
  )
}

export default SubTitle;