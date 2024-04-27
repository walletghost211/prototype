"use client";
import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Full name: ", fullname);
    console.log("Email: ", email);
    console.log("Message: ", message);

    const res = await fetch("./api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });
    const { msg } = await res.json();
    setError(msg);
    console.log(error);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div>
          <label htmlFor="fullname">Full name: </label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="John@gmail.com"
          />
        </div>
        <div>
          <label htmlFor="message">Message: </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            id="message"
            placeholder="Type your message here..."
          ></textarea>
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>

      <div className={styles.errorMessage}>
        <div>Error Message</div>
      </div>
    </>
  );
}
