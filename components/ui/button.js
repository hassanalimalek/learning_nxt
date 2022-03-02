import React from "react";
import Link from "next/link";
import classes from "./button.module.css";

function Button(props) {
  if (props.link) {
    return (
      <div>
        <Link href={props.link}>
          <a className={classes.btn}>{props.children}</a>
        </Link>
      </div>
    );
  } else {
    return <button className={classes.btn}>{props.children}</button>;
  }
}

export default Button;
