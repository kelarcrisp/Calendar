import React, { useRef, useState, useEffect } from 'react';
import classes from './EventDetails.module.css';
const EventDetails = ({ event, day, id, showEventDetails, setShowEventDetails }) => {
    const clickedOutside = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (clickedOutside.current && !clickedOutside.current.contains(event.target)) {
                setShowEventDetails(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [clickedOutside])
    return (
        <div ref={clickedOutside} className={showEventDetails ? classes.Container : classes.HideEventDetails}>
            <ul>
                <li>event: {event}</li>
                <li> day: {day}</li>
            </ul>
        </div>
    );
};

export default EventDetails;