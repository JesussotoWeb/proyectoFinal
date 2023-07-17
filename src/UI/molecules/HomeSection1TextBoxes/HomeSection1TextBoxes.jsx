import Button from '../../atoms/Button/Button';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import {useNavigate } from 'react-router-dom';

import Title from '../../atoms/Title/Title';
import styles from './HomeSection1TextBoxes.module.css';

const HomeSection1TextBoxes = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.HomeSection1TextBoxes}>
        <Title text="Travel Booking <mark>Technologies</mark>" />
        <Paragraph text="We provide white-label, widgets, and supply solutions." />
        <Button text="Sign In" callback={() => navigate('/signin')} />
    </div>
  )
}

export default HomeSection1TextBoxes;