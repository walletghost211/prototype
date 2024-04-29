import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./messages.module.css";
import Link from "next/link";
import MessageManagement from "@/app/components/MessageManagement";

export default function Home() {
  return (
    <>
      <Header />
      <body className={styles.body}></body>
      <div className={styles.contentBox}>
        <h1>Messages</h1>
        <hr />
        <MessageManagement />
        <div></div>
      </div>
      <Footer />
    </>
  );
}
