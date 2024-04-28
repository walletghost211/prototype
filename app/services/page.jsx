import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./services.module.css";
export default function Home() {
  return (
    <>
      <Header />
      <body className={styles.body}></body>
      <div className={styles.contentBox}>
        <h1>Services</h1>
        <hr />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          quod quibusdam modi molestias ab iure voluptatum explicabo eum
          voluptatibus et, ipsum, obcaecati quasi, labore beatae architecto
          iusto! Asperiores, quae officiis.
        </p>
      </div>
      <Footer />
    </>
  );
}
