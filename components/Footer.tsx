import Link from "next/link";
import React from "react";
import styles from "styles/Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>Copyright © DJ Events 2023</p>
      <Link href="/about" className={styles.link}>
        About This Project
      </Link>
    </div>
  );
};
export default Footer;
