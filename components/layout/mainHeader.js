import React from "react";
import Link from "next/link";
import classes from "./mainHeader.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <div>
        <nav className={classes.navigation}>
          <ul>
            <li>
              <Link href="/events">Browse All Events</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainHeader;
