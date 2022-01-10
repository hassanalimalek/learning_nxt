import React from "react";
import Button from "../ui/button";
import classes from "./event-search.module.css";

function EventSearch(props) {
  let formSubmit = (e) => {
    e.preventDefault();
    let obj = {};
    let formData = new FormData(e.target);
    for (let [key, value] of formData) {
      obj[key] = value;
    }
    props.onSearch(obj);
  };
  return (
    <div>
      <form className={classes.form} onSubmit={formSubmit}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="year"> Year</label>
            <select id="year" name="year">
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>
          <div className={classes.control}>
            <label htmlFor="month">Month</label>
            <select id="month" name="month">
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">Novemeber</option>
              <option value="12">December</option>
            </select>
          </div>
        </div>
        <Button>Find</Button>
      </form>
    </div>
  );
}

export default EventSearch;
