import styles from "@/app/ui/dashboard/dashboard.module.css";
import Card from "../ui/dashboard/cards/Card";
import Chart from "../ui/dashboard/chart/Chart";
import RightBar from "../ui/dashboard/rightbar/RightBar";
import Transactions from "../ui/dashboard/transactions/Transactions";

const DashboardPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cardStyle}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.rightbar}>
        <RightBar />
      </div>
    </div>
  );
};

export default DashboardPage;
