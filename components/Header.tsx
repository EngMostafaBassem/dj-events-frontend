import Link from "next/link";
import React from "react";
import styles from "styles/Header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <Link href="/" className={styles.logo}>
        DJ EVENTS
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/events">Events</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
