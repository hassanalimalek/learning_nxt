import { getFeaturedEvents } from "../dummy-data";
import styles from "../styles/Home.module.css";
import EventList from "../components/events/event-list";

export default function Home() {
  let feauturedEvents = getFeaturedEvents();
  console.log("feautured events -->", feauturedEvents);
  return (
    <div>
      <EventList items={feauturedEvents}></EventList>
    </div>
  );
}
