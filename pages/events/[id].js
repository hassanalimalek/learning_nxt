import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";

import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

function EventDetail() {
  let router = useRouter();
  let eventData = getEventById(router.query.id);

  if (!eventData) {
    return <h2>No Event Found</h2>;
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
