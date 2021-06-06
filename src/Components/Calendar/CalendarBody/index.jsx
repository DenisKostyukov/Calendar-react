import React, { useState } from 'react';
import {
  eachWeekOfInterval,
  lastDayOfMonth,
  format,
  startOfMonth,
  addMonths,
  subMonths
} from 'date-fns';
import Week from './Week';
import DayNames from './DayNames';
import style from './CalendarBody.module.sass';
import CalendarHeader from './CalendarHeader';

function CalendarBody (props) {
  const { currentDay, setCurrentDay } = props;

  const weeks = eachWeekOfInterval({
    start: startOfMonth(currentDay),
    end: lastDayOfMonth(currentDay)
  });
  const getWeeks = () => {
    return weeks.map(firstDayOfWeek => {
      return (
        <Week
          firstDayOfWeek={firstDayOfWeek}
          key={firstDayOfWeek.toLocaleDateString()}
          currentDay={currentDay}
          setCurrentDay={setCurrentDay}
        />
      );
    });
  };
  const addMonthHandler = () => {
    setCurrentDay(addMonths(currentDay, 1));
  };
  const subMonthHandler = () => {
    setCurrentDay(subMonths(currentDay, 1));
  };
  const resetDateHandler = () => {
    setCurrentDay(new Date());
  };
  return (
    <>
      <div className={style.container}>
        <CalendarHeader
          addMonthHandler={addMonthHandler}
          subMonthHandler={subMonthHandler}
          currentDay={currentDay}
        />
        <DayNames />
        {getWeeks()}
        {new Date().toLocaleDateString() !== currentDay.toLocaleDateString() ? (
          <button onClick={resetDateHandler} className={style.resetDateBtn}>
            {format(new Date(), 'dd')}
          </button>
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default CalendarBody;
