import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Calendar from "./calendar/Calendar";
import { CalendarContext } from './context/CalendarContext';
function App() {
  return (
    <div className="App">
      <CalendarContext>
        <Calendar />
      </CalendarContext>
    </div>
  );
}

export default App;
