import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Appointment.module.css";
import AppointmentForm from "@/app/components/AppointmentForm";
export default function Home() {
  return (
    <>
      <Header />
      <body className={styles.body}></body>
      <div className={styles.contentBox}>
        <h1>Appointment</h1>
        <hr />
        <h2>Fill in the form below</h2>
        <AppointmentForm/>
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
