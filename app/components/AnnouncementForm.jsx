"use client";
import { useState } from "react";
import styles from "./AnnouncementForm.module.css";

export default function AnnouncementForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Title: ", title);
    console.log("Content: ", content);

    const res = await fetch("../api/announcement", {
      // Adjust the API endpoint to '/api/announcement'
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });
    const { msg } = await res.json();
    setError(msg);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            id="title"
            placeholder="Announcement Title"
          />
        </div>
        <div>
          <label htmlFor="content">Content: </label>
          <textarea
            onChange={(e) => setContent(e.target.value)}
            value={content}
            id="content"
            placeholder="Type your announcement here..."
          ></textarea>
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>

      <div className={styles.errorMessage}>
        {error && error.map((e) => <div>{e}</div>)}
      </div>
    </>
  );
}
