import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ErrorAlert from "../../components/error-alert/error-alert";
import ResultsTitle from "../../components/events/result-title";
import Button from "../../components/ui/button";

function EventsFiltered() {
  let router = useRouter();
  let dataObj = router.query.slug;

  console.log("Data Obj", dataObj);

  if (!dataObj) {
    return <div>Loading ....</div>;
  }
  let year = +dataObj[0];
  let month = +dataObj[1];

  if (isNaN(year) || isNaN(month)) {
    return (
      <div>
        <ErrorAlert>Invalid filter</ErrorAlert>
        <div className="center">
          <Button link="/events">Go back to all events</Button>
        </div>
      </div>
    );
  }
  let filteredEvents = getFilteredEvents({ year, month });
  const date = new Date(year, month - 1);
  if (!filteredEvents || filteredEvents.length == 0) {
    return (
      <div>
        <ErrorAlert>No Events Found</ErrorAlert>
        <div className="center">
          <Button link="/events">Go back to all events</Button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  );
}

export default EventsFiltered;
