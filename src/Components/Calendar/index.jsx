import React, { useState } from 'react';
import style from './Calendar.module.sass';
import CalendarBody from './CalendarBody';
import CurrentDay from './CurrentDay';
import { addMonths } from 'date-fns';

function Calendar (props) {
  const [currentDay, setCurrentDay] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(new Date());

  return (
    <>
      <div className={style.container}>
        <CurrentDay
          currentDay={currentDay}
          setCurrentDay={setCurrentDay}
          selectedDay={selectedDay}
        />
        <CalendarBody
          currentDay={currentDay}
          setCurrentDay={setCurrentDay}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
      </div>
    </>
  );
}

export default Calendar;
