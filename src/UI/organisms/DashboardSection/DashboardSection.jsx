import DashboardCountOne from '../../molecules/HomeSection1TextBoxes/DashboardCountOne/DashboardCountOne';
import { useEffect, useState } from "react";
import styles from './DashboardSection.module.css'

const DashboardSection = () => {
  const [data, setData] = useState();

    useEffect(() => {
        fetch("http://localhost:4500/api/auth/users")
        .then(res => res.json())
        .then(res => { setData(res.lista.length) })
      }, [])
  return (
    <div className={styles.DashboardSection}>
        <DashboardCountOne data={data} />
        <DashboardCountOne data={data}/>
    </div>
  )
}

export default DashboardSection;