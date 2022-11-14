import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";
import { Evt } from "../../types/evt";

interface EventInfoProps {
  evt: Evt;
}

const EventInfo: React.FC<EventInfoProps> = ({ evt }) => {
  return (
    <Layout>
      <p>{evt.date}</p>
      <h2>{evt.name}</h2>
      <h2>Perfomers:</h2>
      <p>{evt.performers}</p>
      <h2>Description:</h2>
      <p>{evt.description}</p>
      <h2>Venu</h2>
      <p>{evt.venue}</p>
      <Link href="/events" style={{ color: "#4682b4" }}>
        Go Back
      </Link>
    </Layout>
  );
};
export default EventInfo;

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/events`);
  const data = await res.json();
  return {
    paths: data.map((item: Evt) => ({ params: { slug: item.slug } })),
    fallback: false, // can also be true or 'blocking'
  };
}
// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`http://localhost:3000/api/events/${slug}`);
  const data = await res.json();
  return {
    // Passed to the page component as props
    props: { evt: data[0] },
  };
}
