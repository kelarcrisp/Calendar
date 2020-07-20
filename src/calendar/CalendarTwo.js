import React from "react";

const CalendarTwo = () => {
  var date = new Date(),
    y = date.getFullYear(),
    m = date.getMonth();
  //first day is where each 1st day fo the month should start on
  var firstDay = new Date(2019, 0, 1).toString().split(" ")[0];
  console.log(firstDay);
  const holderArray = Array(105).fill([]);
  holderArray[20] = [
    { name: "Event", desc: "event description" },
    { name: "Event2", desc: "event description2" }
  ];
  holderArray[25] = [{ name: "Event", desc: "event description" }];
  holderArray[29] = [{ name: "Event", desc: "event description" }];

  console.log(holderArray);
  return (
    <ul>
      {holderArray.slice(0, 35).map((x, i) => {
        return <li key={Math.random()}>{x.map(y => y.name)}</li>;
      })}
    </ul>
  );
};

export default CalendarTwo;
