import React, { useState } from "react";
import classes from "./CalendarTwo.module.css";
import { CalendarData } from "../../calendarData/CalendarData";
const CalendarTwo = () => {
  const [currentMonth, setCurrentMonth] = useState(0);
  const [showEventDetails, setShowEventDetails] = useState(false);
  const [evDetails, setEdetails] = useState({});

  var date = new Date(),
    y = date.getFullYear(),
    m = date.getMonth();
  //first day is where each 1st day fo the month should start on
  var firstDay = new Date(2019, 0, 1).toString().split(" ")[0];
  console.log(firstDay);
  const holderArray = Array(106).fill([]);
  holderArray[1] = [{ day: 1, name: "Event", desc: "event description" }];
  holderArray[25] = [{ day: 25, name: "Event", desc: "event description" }];
  holderArray[29] = [{ day: 29, name: "Event", desc: "event description" }];
  holderArray[105] = [{ day: 105, name: "Event", desc: "event description" }];
  // <ul>
  //     {holderArray.slice(0, 35).map((x, i) => {
  //         return <li key={Math.random()}>{x.map(y => y.name)}</li>;
  //     })}
  // </ul>
  console.log(holderArray);
  return (
    <div className={classes.Container}>
      <div className={classes.Header}>
        <button
          className={classes.LeftArrow}
          onClick={() => setCurrentMonth(latest => latest - 35)}
        >
          &#8249;
        </button>
        <h5>{CalendarData.months[currentMonth]}</h5>
        <button
          className={classes.RightArrow}
          onClick={() => setCurrentMonth(latest => latest + 35)}
        >
          &#8250;
        </button>
      </div>
      <div className={classes.DayNames}>
        <p>Monday</p>
        <p>Tuesday</p>
        <p>Wednesday</p>
        <p>Thursday</p>
        <p>Friday</p>
        <p>Saturday</p>
        <p>Sunday</p>
      </div>
      <div className={classes.DaysContainer}>
        {holderArray.slice(currentMonth + 1, currentMonth + 36).map((x, i) => {
          return (
            <div className={classes.CurrentMonthDays}>
              {x.map(y => {
                return (
                  <>
                    <div>{y.day}</div>
                    <div>{y.name}</div>
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarTwo;
