import React, { useState, useEffect } from "react";
import classes from "./Calendar.module.css";
import { CalendarData, CalendarInfo } from '../calendarData/CalendarData';
const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(0)

  useEffect(() => {
    //grab the data from api
    //itterate over the objects to find the month, compare that to the month we have in 'CalendarData', if it's the same month look at the 'CalendarData[month][indexOfDay +1] == the fetchedData at that day, if it is the same, push the whole data object to 'CalendarData[month][indexOfDay+1].data.push(fetchedDataObject)

    for (let key in CalendarData) {
      for (let event of CalendarInfo.data) {
        if (event.month == key) {
          CalendarData[key][event.day].data.push(event);
        }
      }
    }

    console.log(CalendarData, 'calendar data that should have event info')
  }, [])
  return (
    <div className={classes.Container}>
      <div className={classes.Header}>
        <button className={classes.LeftArrow} onClick={() => setCurrentMonth(latest => latest - 1)}> --</button>
        <h5>{CalendarData.months[currentMonth]}</h5>
        <button className={classes.RightArrow} onClick={() => setCurrentMonth(latest => latest + 1)}>-></button>
      </div>
      <div className={classes.DaysContainer}>
        {CalendarData[currentMonth].map((days, index) => {
          return <div className={classes.CurrentMonthDays} key={index * index * index}>{days.day}</div>
        })}
      </div>
    </div>
  );
};

export default Calendar;
