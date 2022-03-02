import styles from "../styles/Home.module.css";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-utils";

export default function Home(props) {
  // let feauturedEvents = getFeaturedEvents();
  let { events } = props;
  // console.log("feautured events -->", feauturedEvents);
  return (
    <div>
      <EventList items={events}></EventList>
    </div>
  );
}

export async function getStaticProps() {
  let feauturedEvents = await getFeaturedEvents();
  if (feauturedEvents) {
    return {
      props: {
        events: feauturedEvents,
        revalidate: 30,
      },
    };
  } else {
    return {
      props: {
        notFound: true,
      },
    };
  }
}
