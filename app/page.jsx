import Header from "./components/Header";
import Announcements from "./components/Announcement";
import Footer from "./components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <body className={styles.body}></body>
      <div className={styles.contentBox}>
        <h1>Home</h1>
        <Announcements />
      </div>
      <Footer />
    </>
  );
}
