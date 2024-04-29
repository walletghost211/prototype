import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./announcement.module.css";
import AnnouncementForm from "../../components/AnnouncementForm";

export default function Home() {
  return (
    <>
      <Header />
      <body className={styles.body}></body>
      <div className={styles.contentBox}>
        <h1>Announcement</h1>
        <hr />
        <AnnouncementForm />
      </div>
      <Footer />
    </>
  );
}
