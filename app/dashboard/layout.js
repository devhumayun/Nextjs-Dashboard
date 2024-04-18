import styles from "../ui/dashboard/dashboard.module.css";
import Navbar from "../ui/dashboard/navbar/Navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
export default function RootLayout({ children }) {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.menu}`}>
        <Sidebar />
      </div>
      <div className={`${styles.content}`}>
        <div>
          <Navbar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
