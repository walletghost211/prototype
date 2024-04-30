// AppointmentForm.jsx
"use client";
import { useState } from "react";
import styles from "./AppointmentForm.module.css";

export default function AppointmentForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Full name: ", fullname);
    console.log("Email: ", email);

    const res = await fetch("../api/appointment", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
      }),
    });
    const { msg } = await res.json();
    setError(msg);
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
            placeholder="Enter Full name."
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="Enter email"
          />
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>

      <div className={styles.errorMessage}>
        {error && error.map((e, index) => <div key={index}>{e}</div>)}
      </div>
    </>
  );
}
