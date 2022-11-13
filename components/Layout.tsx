import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "styles/Layout.module.css";
import ShowCase from "./ShowCase";
interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}
const Layout: React.FC<LayoutProps> = ({
  children,
  title = "DJ Events |find the hottest parties",
  description = "Find the latest DJ and other musical events",
  keywords = "music ,dj,edm events",
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <ShowCase />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
