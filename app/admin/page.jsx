import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./admin.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <body className={styles.body}></body>
      <div className={styles.contentBox}>
        <h1>Admin Dashboard</h1>
        <div>
          <Link
            href="../admin/announcement"
            className={styles.announcementButton}
          >
            Create Announcement
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
