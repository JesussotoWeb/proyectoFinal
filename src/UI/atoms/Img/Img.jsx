import styles from './Img.module.css';

const Img = ({path, customClass, width=200}) => {
  return (
    <img width={width} className={`${styles.Img} ${customClass}`} src={path} title='img' />
  )
}

export default Img;