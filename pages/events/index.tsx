import React from "react";
import Layout from "components/Layout";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { Evt } from "types/evt";
import EventCard from "../../components/EventCard";

interface EventsProps {
  evts: Evt[];
}
const Events: React.FC<EventsProps> = ({ evts }) => {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {evts.map((evt) => (
        <EventCard key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
};
export default Events;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/events");
  const data = await res.json();
  return {
    props: { evts: data }, // will be passed to the page component as props
  };
};
