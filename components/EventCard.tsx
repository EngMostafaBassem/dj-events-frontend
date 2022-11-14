import React from "react";
import Image from "next/image";
import { Evt } from "types/evt";
import styles from "styles/EventCard.module.css";
import Link from "next/link";
interface EventCardProps {
  evt: Evt;
}
const EventCard: React.FC<EventCardProps> = ({ evt }) => {
  return (
    <div className={styles.container}>
      <Image
        src={evt.image || "/images/event-default.png"}
        alt="Picture of the event"
        width={200}
        height={150}
      />
      <div className={styles.content}>
        <p>{evt.date}</p>
        <h2>{evt.venue}</h2>
      </div>
      <Link href={`events/${evt.slug}`} className={styles.btn}>
        Details
      </Link>
    </div>
  );
};
export default EventCard;
