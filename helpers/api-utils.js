export async function getAllEvents() {
  const response = await fetch(
    "https://next-js-practice-3275b-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();
  const events = [];
  for (const key in data) {
    events.push({
      id: data[key].id,
      title: data[key].title,
      description: data[key].description,
      image: data[key].image,
      date: data[key].date,
      location: data[key].location,
      isFeatured: data[key].isFeatured,
    });
  }
  return events;
}

export async function getFeaturedEvents() {
  let allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  let allEvents = await getAllEvents();
  return allEvents.find((event) => event.id == id);
}

export async function getFilteredEvents(month, year) {
  let allEvents = await getAllEvents();
  //   let { year, month } = dateFilter;
  console.log("Get Filtered Events --->", month, year);
  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
  console.log("filteredEvents --->", filteredEvents);
  return filteredEvents;
}
