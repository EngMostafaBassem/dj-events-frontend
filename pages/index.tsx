import Layout from "components/Layout";
import { GetServerSideProps } from "next";
import Link from "next/link";
import EventCard from "../components/EventCard";
import { Evt } from "../types/evt";
import styles from "styles/Home.module.css";
interface HomeProps {
  evts: Evt[];
}

const Home: React.FC<HomeProps> = ({ evts }) => {
  return (
    <>
      <Layout>
        <h1>Upcoming Events</h1>
        {evts.slice(0, 3).map((evt) => (
          <EventCard key={evt.id} evt={evt} />
        ))}
        <Link href="/events" className={styles.viewAllBtn}>
          View All Events
        </Link>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/events");
  const data = await res.json();
  return {
    props: { evts: data }, // will be passed to the page component as props
  };
};
export default Home;
