import { FaUsers } from "react-icons/fa6";
import styles from './card.module.css';
const Card = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <FaUsers className={styles.usericon} />
                <div className={styles.userDetails}>
                    <h4 className={styles.totalusertitle}>Total Users</h4>
                    <h2 className={styles.totalusernumber}>8888</h2>
                    <p className={styles.task}><span className={styles.parcent}>20%</span> more than previous week </p>
                </div>
            </div>
        </div>
    )
}

export default Card
