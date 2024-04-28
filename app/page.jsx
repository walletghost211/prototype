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
        <hr />
        <Announcements />
        <hr />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          quod quibusdam modi molestias ab iure voluptatum explicabo eum
          voluptatibus et, ipsum, obcaecati quasi, labore beatae architecto
          iusto! Asperiores, quae officiis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quia
          saepe vel est labore illum laudantium minus, recusandae dolor sapiente
          incidunt repudiandae omnis harum quaerat cum asperiores quas inventore
          provident.
        </p>
      </div>
      <Footer />
    </>
  );
}
