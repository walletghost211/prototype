"use client";
import { useState } from "react";
import styles from "./BarangayClearanceForm.module.css";

export default function BarangayClearanceForm() {
  const [firstName, setFirstname] = useState("");
  const [middleName, setMiddlename] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [purposeOfTransaction, setPurposeOfTransaction] = useState("");
  const [referencePerson, setReferencePerson] = useState("");
  const [error, setError] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("First name: ", firstName);
    console.log("Middle name: ", middleName);
    console.log("Last name: ", lastName);
    console.log("Email: ", email);
    console.log("Phone number: ", phoneNumber);
    console.log("Address: ", address);
    console.log("Reference Person: ", referencePerson);
    console.log("purpose of transaction: ", purposeOfTransaction);

    const res = await fetch("../api/clearance", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        middleName,
        lastName,
        email,
        phoneNumber,
        address,
        referencePerson,
        purposeOfTransaction,
      }),
    });
    const { msg } = await res.json();
    setError(msg);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div>
          <label htmlFor="firstName">First name: </label>
          <input
            onChange={(e) => setFirstname(e.target.value)}
            value={firstName}
            type="text"
            id="firstName"
            placeholder="Enter first name."
            required
          />
        </div>

        <div>
          <label htmlFor="middleName">Middle name: </label>
          <input
            onChange={(e) => setMiddlename(e.target.value)}
            value={middleName}
            type="text"
            id="middleName"
            placeholder="Enter middle name."
            required
          />
        </div>

        <div>
          <label htmlFor="lastName">Last name: </label>
          <input
            onChange={(e) => setLastname(e.target.value)}
            value={lastName}
            type="text"
            id="lastName"
            placeholder="Enter first name."
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
          <label htmlFor="purposeOfTransaction">Purpose of transaction: </label>
          <textarea
            onChange={(e) => setPurposeOfTransaction(e.target.value)}
            value={purposeOfTransaction}
            type="text"
            id="purposeOfTransaction"
            placeholder="Enter purpose of transaction."
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="referencePerson">Reference Person: </label>
          <input
            onChange={(e) => setReferencePerson(e.target.value)}
            value={referencePerson}
            type="text"
            id="referencePerson"
            placeholder="Enter reference person(optional)."
          />
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
