import Img from '../../atoms/Img/Img';
import SubTitle from '../../atoms/SubTitle/SubTitle';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import styles from './HomeSection2.module.css';
import { useState } from 'react';

const HomeSection2 = () => {
  const [slideShow, setSlideShow] = useState(4)
  const [possitionSlide, setPossitionSlide] = useState(0);

  const logos = [
    {path: 'Frame-34005-1-1.png.webp'},
    {path: 'Frame-34005-3.png.webp'},
    {path: 'Frame-34023-2.png.webp'},
    {path: 'Frame-34024-2.png.webp'},
    {path: 'Frame-34025-2.png.webp'},
    {path: 'Frame-34027-1-2.png.webp'},
    {path: 'Frame-34027-2.png.webp'},
    {path: 'Frame-34027-2.png.webp'}

  ]
  const slideNext = () => {
    const lastSlide = logos.length - slideShow;

    const shouldResetIndex = possitionSlide === lastSlide;
    const index = shouldResetIndex ? 0 : possitionSlide + 1;
    console.log(shouldResetIndex);
  }
  return (
    <section className={styles.HomeSection2}>
        <SubTitle customClass={styles.HomeSection2__SubTitle} text="We partner with <mark>the best</mark>" />

        <div className={styles.HomeSection2__CarruselContainer}>
          <AiOutlineArrowLeft className={`${styles.HomeSection2__icon} ${styles.HomeSection2__iconLeft}`} />
            <div className={styles.HomeSection2__Carrusel}>
              {
                logos.map((content, i) => {
                    return(
                      <Img key={i} customClass={styles.HomeSection2__img} path={logos[i].path} />
                    )
                })
              }
            </div>
          <AiOutlineArrowRight onClick={() => slideNext()} className={`${styles.HomeSection2__icon} ${styles.HomeSection2__iconRight}`}/>

        </div>
    </section>
  )
}

export default HomeSection2;