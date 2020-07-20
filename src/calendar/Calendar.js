import React, { useState, useEffect, useRef, useContext } from "react";
import classes from "./Calendar.module.css";
import { CalendarData, CalendarInfo } from "../calendarData/CalendarData";
import EventDetails from "./EventDetails";
import { CContext } from "../context/CalendarContext";
const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(0);
  const [showEventDetails, setShowEventDetails] = useState(false);
  const [evDetails, setEdetails] = useState({});
  const { day, setDay } = useContext(CContext);
  console.log(day, "day context in calendar");

  var date = new Date(),
    y = date.getFullYear(),
    m = date.getMonth();
  //first day is where each 1st day fo the month should start on
  var firstDay = new Date(2019, 0, 1).toString().split(" ")[0];
  console.log(firstDay);
  const holderArray = Array(105).fill([]);
  holderArray[20] = [{ name: "Event", desc: "event description" }];
  holderArray[25] = [{ name: "Event", desc: "event description" }];
  holderArray[29] = [{ name: "Event", desc: "event description" }];
  console.log(holderArray);
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
  }, []);
  const handleShowEvent = event => {
    setShowEventDetails(true);
    setEdetails(event);
  };

  return (
    <div className={classes.Container}>
      <div className={classes.Header}>
        <button
          className={classes.LeftArrow}
          onClick={() => setCurrentMonth(latest => latest - 1)}
        >
          &#8249;
        </button>
        <h5>{CalendarData.months[currentMonth]}</h5>
        <button
          className={classes.RightArrow}
          onClick={() => setCurrentMonth(latest => latest + 1)}
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
        {CalendarData[currentMonth].map((days, index) => {
          return (
            <div className={classes.CurrentMonthDays} key={Math.random()}>
              {days.day}
              <ul style={{ margin: 0, padding: 0 }}>
                {days.data[0]
                  ? days.data.map(event => {
                      return (
                        <div key={Math.random()}>
                          <li
                            className={classes.EventTag}
                            onClick={() => handleShowEvent(event)}
                          >
                            {event.event}
                          </li>
                        </div>
                      );
                    })
                  : null}
              </ul>
            </div>
          );
        })}
        <div className={classes.EventDetailsContainer}>
          {showEventDetails && (
            <EventDetails
              event={evDetails.event}
              day={evDetails.day}
              id={evDetails.id}
              showEventDetails={showEventDetails}
              setShowEventDetails={setShowEventDetails}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
