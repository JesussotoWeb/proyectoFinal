import Img from '../../atoms/Img/Img';
import HomeSection1TextBoxes from '../../molecules/HomeSection1TextBoxes/HomeSection1TextBoxes';
import styles from './HomeSection1.module.css';

const HomeSection1 = () => {
  return (
    <section className={styles.HomeSection1}>
      <HomeSection1TextBoxes />
      <Img customClass={styles.HomeSection1__img} path="/banner1.webp" />
    </section>
  )
}

export default HomeSection1;