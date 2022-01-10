import React from "react";
import EventItem from "./event-item";
import classes from "./event-list.module.css";

function EventItems(props) {
  const { items } = props;
  console.log("Items --->", items);
  return (
    <div>
      <ul className={classes.list}>
        {items.map((item) => {
          return (
            <EventItem
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              location={item.location}
              date={item.date}
              description={item.description}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default EventItems;
