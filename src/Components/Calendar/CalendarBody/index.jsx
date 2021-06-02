import React, { useState } from 'react';
import { eachWeekOfInterval, lastDayOfMonth } from 'date-fns';
import Week from './Week';
import DayNames from './DayNames';
import style from './CalendarBody.module.sass';

function CalendarBody () {
  const [currentDay, setCurrentDay] = useState(new Date());
  const lastDay = lastDayOfMonth(Date.now());
  const weeks = eachWeekOfInterval({
    start: currentDay,
    end: lastDayOfMonth(Date.now())
  });
  const getWeeks = () => {
    return weeks.map(firstDayOfWeek => {
      {
        return (
          <Week
            firstDayOfWeek={firstDayOfWeek}
            key={firstDayOfWeek.toLocaleDateString()}
          />
        );
      }
    });
  };
  return (
    <>
      <div className={style.container}>
        <DayNames />
        {getWeeks()}
      </div>
    </>
  );
}

export default CalendarBody;
