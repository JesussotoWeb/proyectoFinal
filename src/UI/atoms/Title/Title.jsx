import styles from './Title.module.css';

const Title = ({text, customClass}) => {
  return (
    <h1 className={`${styles.Title} ${customClass}`} dangerouslySetInnerHTML={{__html: text}}></h1>
  )
}

export default Title;