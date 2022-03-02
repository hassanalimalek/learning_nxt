import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../helpers/api-utils";
import EventList from "../../components/events/event-list";
import ErrorAlert from "../../components/error-alert/error-alert";
import ResultsTitle from "../../components/events/result-title";
import Button from "../../components/ui/button";

function EventsFiltered(props) {
  let router = useRouter();

  if (props.hasError) {
    return (
      <div>
        <ErrorAlert>Invalid filter</ErrorAlert>
        <div className="center">
          <Button link="/events">Go back to all events</Button>
        </div>
      </div>
    );
  }
  let filteredEvents = props.filteredEvents;
  const date = new Date(props.date.year, props.date.month - 1);
  if (!filteredEvents || filteredEvents.length == 0) {
    return (
      <div>
        <ErrorAlert>No Events Found</ErrorAlert>
        <div className="center" style={{ textAlign: "center" }}>
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

export async function getServerSideProps(context) {
  let { params } = context;
  console.log("Get Server side props -------->", params);
  let year = +params.slug[0];
  let month = +params.slug[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return {
      props: {
        hasError: true,
      },
    };
  }
  let filteredEvents = await getFilteredEvents(month, year);
  console.log("Filtered Events Found ---->", filteredEvents);
  if (filteredEvents) {
    return {
      props: {
        filteredEvents: filteredEvents,
        date: {
          month: month,
          year: year,
        },
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
