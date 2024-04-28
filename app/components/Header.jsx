import React from "react";

import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.ribbon}>
        <Link href="/" className={styles.logo}>
          <h1>Barangay Central</h1>
        </Link>
        <nav>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/services" className={styles.navLink}>
            Services
          </Link>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
          <Link href="/admin" className={styles.navLink}>
            Admin
          </Link>
          <Link href="/contact-us" className={styles.navLink}>
            Contact us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
