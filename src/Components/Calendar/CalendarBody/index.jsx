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
  const { currentDay,setCurrentDay, setSelectedDay, selectedDay } = props;
  const [currentMonth, setCurrentMonth] = useState(new Date());
  console.log(currentMonth);
  const weeks = eachWeekOfInterval({
    start: startOfMonth(currentMonth),
    end: lastDayOfMonth(currentMonth)
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
            currentMonth={currentMonth}
          />
        );
      }
    });
  };
  const addMonthHandler = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
    setSelectedDay(addMonths(selectedDay,1));
  };
  const subMonthHandler = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
    setSelectedDay(subMonths(selectedDay,1))
  };
  const resetDateHandler = () => {
    setSelectedDay(new Date());
    setCurrentMonth(new Date());
  };
  return (
    <>
      <div className={style.container}>
        <CalendarHeader
          addMonthHandler={addMonthHandler}
          subMonthHandler={subMonthHandler}
          currentMonth={currentMonth}
          selectedDay={selectedDay}
        />
        <DayNames />
        {getWeeks()}
        {selectedDay.toLocaleDateString() !== currentDay.toLocaleDateString() ? (
          <button onClick={resetDateHandler} className={style.resetDateBtn}>
            {format(currentDay, 'dd')}
          </button>
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default CalendarBody;
