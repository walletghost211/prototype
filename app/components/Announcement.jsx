"use client";
import { useEffect, useState } from "react";
import styles from "./Announcement.module.css";

export default function AnnouncementList() {
  const [latestAnnouncement, setLatestAnnouncement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/announcement");
        if (res.ok) {
          const data = await res.json();
          if (data.announcements.length > 0) {
            // Sort announcements by date in descending order
            const sortedAnnouncements = data.announcements.sort(
              (a, b) => new Date(b.date) - new Date(a.date)
            );
            // Get the latest announcement (first in the sorted array)
            const latest = sortedAnnouncements[0];
            setLatestAnnouncement(latest);
          } else {
            console.log("No announcements available.");
          }
        } else {
          console.error("Failed to fetch announcements:", res.statusText);
        }
      } catch (error) {
        console.error("Error fetching announcements:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.announcementBox}>
      <h2>Latest Announcement</h2>
      {latestAnnouncement ? (
        <div className={styles.announcementBox}>
          <h3>{latestAnnouncement.title}</h3>
          <p>{latestAnnouncement.content}</p>
          <p>Date: {new Date(latestAnnouncement.date).toLocaleDateString()}</p>
        </div>
      ) : (
        <div>No announcements available</div>
      )}
    </div>
  );
}
