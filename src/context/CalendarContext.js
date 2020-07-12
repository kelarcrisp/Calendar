import React, { createContext, useState } from 'react';

export const CContext = createContext();

export const CalendarContext = (props) => {
    const [day, setDay] = useState('asdfadsfasd')
    return (
        <CContext.Provider value={{ day, setDay }}>
            {props.children}
        </CContext.Provider>
    );
};
