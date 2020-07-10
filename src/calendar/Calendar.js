import React, { useState } from "react";
import classes from "./Calendar.module.css";
import { CalendarData } from '../calendarData/CalendarData';
const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(0)
  return (
    <div className={classes.Container}>
      <div className={classes.Header}>
        <button className={classes.LeftArrow} onClick={() => setCurrentMonth(latest => latest - 1)}> --</button>
        <h5>{CalendarData.months[currentMonth]}</h5>
        <button className={classes.RightArrow} onClick={() => setCurrentMonth(latest => latest + 1)}>-></button>
      </div>
      <div className={classes.DaysContainer}>
        {CalendarData[currentMonth].map((days, index) => {
          return <div className={classes.CurrentMonthDays} key={index * index * index}>{days}</div>
        })}
      </div>
    </div>
  );
};

export default Calendar;
