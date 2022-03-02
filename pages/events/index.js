import React from "react";

import Eventlist from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { useRouter } from "next/router";
import { getAllEvents } from "../../helpers/api-utils";

function Events(props) {
  console.log("props events --- >", props);
  let { events } = props;
  // let allEvents = getAllEvents();
  let router = useRouter();
  // console.log("All Events --->", allEvents);
  let onSearch = (dateObj) => {
    console.log("On Search Date Object --->", dateObj);
    router.push(`/events/${dateObj.year}/${dateObj.month}`);
  };
  return (
    <div>
      <EventSearch onSearch={onSearch} />
      <Eventlist items={events} />
    </div>
  );
}

export default Events;

export async function getStaticProps() {
  let allEvents = await getAllEvents();
  if (allEvents) {
    return {
      props: {
        events: allEvents,
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
