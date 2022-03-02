import React from "react";
import { useRouter } from "next/router";
import { getEventById, getFeaturedEvents } from "../../helpers/api-utils";

import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

function EventDetail(props) {
  // let eventData = getEventById(router.query.id);
  let eventData = props.eventData;
  console.log("Event Data --->", eventData);
  if (!eventData) {
    return <h2>Loading</h2>;
  }

  return (
    <>
      <EventSummary title={eventData.title} />
      <EventLogistics
        address={eventData.location}
        date={eventData.date}
        image={eventData.image}
        imageAlt={eventData.title}
      />
      <EventContent>
        <p>{eventData.description}</p>
      </EventContent>
    </>
  );
}

export default EventDetail;

export async function getStaticProps(context) {
  console.log("Context --->", context);
  let { params } = context;

  let eventData = await getEventById(params.id);
  return {
    props: {
      eventData: eventData,
      revalidate: 30,
    },
  };
}

export async function getStaticPaths() {
  let events = await getFeaturedEvents();
  let paths = events.map((event) => ({ params: { id: event.id } }));
  return {
    paths: paths,
    fallback: true,
  };
}
