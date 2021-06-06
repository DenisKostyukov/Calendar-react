import React, { useState } from 'react';
import style from './Calendar.module.sass';
import CalendarBody from './CalendarBody';
import CurrentDay from './CurrentDay';

function Calendar (props) {
  const [currentDay, setCurrentDay] = useState(new Date());
  //const [selectedDay, setSelectedDay] = useState(new Date());

  return (
    <>
      <div className={style.container}>
        <CurrentDay
          currentDay={currentDay}
          setCurrentDay={setCurrentDay}
          
        />
        <CalendarBody
          currentDay={currentDay}
          setCurrentDay={setCurrentDay}
          
        />
      </div>
    </>
  );
}

export default Calendar;
