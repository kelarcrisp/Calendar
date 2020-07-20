import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Calendar from "./calendar/Calendar";
import { CalendarContext } from "./context/CalendarContext";
import CalendarTwo from "./calendar/CalendarTwo/CalendarTwo";
function App() {
  return (
    <div className="App">
      <CalendarContext>
        <CalendarTwo />
      </CalendarContext>
    </div>
  );
}

export default App;
