import styles from "./DashboardCountOne.module.css";
import SubTitle from "../../../atoms/SubTitle/SubTitle";

const DashboardCountOne = ({data}) => {
  
  return (
    <div className={styles.DashboardCountOne}>
        <SubTitle text={data} customClass={styles.DashboardCountOne__count} />
    </div>
  )
};

export default DashboardCountOne;
