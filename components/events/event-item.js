import React from "react";
import Link from "next/link";
import classes from "./event-item.module.css";
import Button from "../ui/button";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";

function EventItem(props) {
  const { title, image, location, date, id } = props;

  let readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedLocation = location.replace(",", "\n");

  return (
    <li className={classes.item}>
      <img src={`/` + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <span>
              <DateIcon />
            </span>
            <time>{readableDate}</time>
          </div>
          <div className={classes.address}>
            <span>
              <AddressIcon />
            </span>
            <address>{formattedLocation}</address>
          </div>
          <div className={classes.actions}>
            <Button link={`/events/${id}`}>
              <span>Event Detail</span>
              <span className={classes.icon}>
                <ArrowRightIcon />
              </span>
            </Button>
            {/* <Link href={`/events/${id}`}>Event Detail</Link> */}
          </div>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
