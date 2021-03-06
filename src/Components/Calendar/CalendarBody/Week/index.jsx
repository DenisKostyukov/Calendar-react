import React from 'react';
import { addDays } from 'date-fns';
import Day from './Day';
import style from './Week.module.sass';
function Week (props) {
  const { firstDayOfWeek, currentMonth, currentDay, setCurrentDay } = props;
  const getDays = () => {
    return new Array(7).fill(null).map((_, index) => {
      const dayOfMonth = addDays(firstDayOfWeek, index);
      return (
        <Day
          dayOfMonth={dayOfMonth}
          currentMonth={currentMonth}
          key={dayOfMonth.toLocaleDateString()}
          currentDay={currentDay}
          setCurrentDay={setCurrentDay}
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
