"use client";

import React, { useState, useEffect } from "react";

export default function ManageMessages() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await fetch("/api/contact");
      if (!res.ok) {
        throw new Error("Failed to fetch messages");
      }
      const data = await res.json();
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
      setError("Unable to fetch messages.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch("/api/contact", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) {
        throw new Error("Failed to delete message");
      }
      fetchMessages();
    } catch (error) {
      console.error("Error deleting message:", error);
      setError("Unable to delete message.");
    }
  };

  return (
    <>
      <div>
        {messages.map((message) => (
          <div key={message._id}>
            <div>{`Full Name: ${message.fullname}`}</div>
            <div>{`Email: ${message.email}`}</div>
            <div>{`Message: ${message.message}`}</div>
            <button onClick={() => handleDelete(message._id)}>Delete</button>
          </div>
        ))}
      </div>

      {error && <div>{error}</div>}
    </>
  );
}
