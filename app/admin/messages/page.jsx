import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import styles from "./messages.module.css";
import ManageMessages from "@/app/components/ManageMessages";

export default function messagePage() {
  return (
    <>
      <Header />
      <body className={styles.body}></body>
      <div className={styles.contentBox}>
        <h1>Messages</h1>
        <ManageMessages />
        <hr />
      </div>
      <Footer />
    </>
  );
}
