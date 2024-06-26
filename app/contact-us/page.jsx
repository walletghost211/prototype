import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import global from "../page.module.css";
import styles from "./contact-us.module.css";

export default function contactUs() {
  return (
    <>
      <Header />
      <body className={global.body}></body>
      <div className={global.contentBox}>
        <h1>Please fill in the form below</h1>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
