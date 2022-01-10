import React from "react";
import { getAllEvents } from "../../dummy-data";
import Eventlist from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { useRouter } from "next/router";

function Events() {
  let allEvents = getAllEvents();
  let router = useRouter();
  console.log("All Events --->", allEvents);
  let onSearch = (dateObj) => {
    console.log("On Search Date Object --->", dateObj);
    router.push(`/events/${dateObj.year}/${dateObj.month}`);
  };
  return (
    <div>
      <EventSearch onSearch={onSearch} />
      <Eventlist items={allEvents} />
    </div>
  );
}

export default Events;
