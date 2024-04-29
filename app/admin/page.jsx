import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./admin.module.css";
import Link from "next/link";

export default function admin() {
  return (
    <>
      <Header />
      <body className={styles.body}></body>
      <div className={styles.contentBox}>
        <h1>Admin Dashboard</h1>
        <hr />
        <div className={styles.buttonPos}>
          <Link
            href="../admin/announcement"
            className={styles.announcementButton}
          >
            Create Announcement
          </Link>
          <Link href="../admin/messages" className={styles.announcementButton}>
            Manage Messages
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
