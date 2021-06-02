import React, { useState } from 'react';
import { eachWeekOfInterval, lastDayOfMonth, format } from 'date-fns';
import Week from './Week';
import DayNames from './DayNames';
import CurrenMonth from './CurrentMonth';
import style from './CalendarBody.module.sass';

function CalendarBody (props) {
  const {currentDay, setCurrentDay} = props
  const [currentMonth, setCurrentMonth] = useState(format(new Date(), 'MMMM y'));
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
        <CurrenMonth currentMonth={currentMonth} />
        <DayNames />
        {getWeeks()}
      </div>
    </>
  );
}

export default CalendarBody;
