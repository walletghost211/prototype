"use client";
import { useEffect, useState } from "react";
import styles from "./Announcement.module.css";

export default function MessageManagement() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/contact");
        if (res.ok) {
          const data = await res.json();
          setMessages(data.messages);
        } else {
          console.error("Failed to fetch messages:", res.statusText);
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/contact?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        // Reload messages after deletion
        const updatedMessages = messages.filter(
          (message) => message._id !== id
        );
        setMessages(updatedMessages);
      } else {
        console.error("Failed to delete message:", res.statusText);
      }
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>All Messages</h2>
      {messages.length > 0 ? (
        messages.map((message) => (
          <div key={message._id} className={styles.messageBox}>
            <p>{message.fullname}</p>
            <p>{message.email}</p>
            <p>{message.message}</p>
            <p>Date: {new Date(message.date).toLocaleDateString()}</p>
            <button onClick={() => handleDelete(message._id)}>Delete</button>
          </div>
        ))
      ) : (
        <div>No messages available</div>
      )}
    </div>
  );
}
