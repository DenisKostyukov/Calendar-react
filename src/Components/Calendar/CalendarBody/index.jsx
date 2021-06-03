import React, { useState } from 'react';
import { eachWeekOfInterval, lastDayOfMonth, format, addMonths } from 'date-fns';
import Week from './Week';
import DayNames from './DayNames';
import CurrenMonth from './CurrentMonth';
import style from './CalendarBody.module.sass';

function CalendarBody (props) {
  const { currentDay, setSelectedDay, selectedDay } = props;
  const [currentMonth, setCurrentMonth] = useState(
    format(new Date(), 'MMMM y')
  );
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
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
          />
        );
      }
    });
  };
  const resetDateHandler = () => setSelectedDay(false);
  return (
    <>
      <div className={style.container}>
        <CurrenMonth currentMonth={currentMonth} selectedDay={selectedDay} />
        <DayNames />
        {getWeeks()}
        {selectedDay && selectedDay.toLocaleDateString()!==currentDay.toLocaleDateString() ? (
          <button onClick={resetDateHandler} className={style.resetDateBtn}>
            {format(currentDay,'dd')}
          </button>
        ) : (
          ''
        )}
      </div>
     
    </>
  );
}

export default CalendarBody;
