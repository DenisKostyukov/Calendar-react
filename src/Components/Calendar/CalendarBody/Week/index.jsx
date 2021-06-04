import React from 'react';
import { addDays, format } from 'date-fns';
import Day from './Day';
import style from './Week.module.sass';
function Week (props) {
  const { firstDayOfWeek, currentMonth, setSelectedDay, selectedDay } = props;
  const getDays = () => {
    return new Array(7).fill(null).map((_, index) => {
      const currentDay = addDays(firstDayOfWeek, index);
      return (
        <Day
          currentDay={currentDay}
          currentMonth={currentMonth}
          key={currentDay.toLocaleDateString()}
          id={currentDay.toLocaleDateString()}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
      );
    });
  };
  return (
    <>
      <div className={style.week}>{getDays()}</div>
    </>
  );
}

export default Week;
