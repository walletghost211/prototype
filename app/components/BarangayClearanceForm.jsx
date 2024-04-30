"use client";
import { useState } from "react";
import styles from "./BarangayClearanceForm.module.css";

export default function BarangayClearanceForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Full name: ", fullname);
    console.log("Email: ", email);
    console.log("Phone number: ", phoneNumber);
    console.log("Address: ", address);

    const res = await fetch("../api/clearance", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        phoneNumber,
        address,
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
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            placeholder="Enter email"
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone number: </label>
          <input
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            type="tel"
            id="phoneNumber"
            placeholder="Enter phone number"
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address: </label>
          <textarea
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            id="address"
            placeholder="Enter address"
            required
          ></textarea>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      <div className={styles.errorMessage}>
        {error && error.map((e, index) => <div key={index}>{e}</div>)}
      </div>
    </>
  );
}
