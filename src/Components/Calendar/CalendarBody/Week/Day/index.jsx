import React from 'react';
import { format, isWeekend, isToday } from 'date-fns';
import cn from 'classnames';
import style from './Day.module.sass';
function Day (props) {
  const { dayOfMonth, currentDay, setCurrentDay } = props;
  const isCurrentMonth = () =>
    format(dayOfMonth, 'M') !== format(currentDay, 'M');
  const isWeekEnd = () => isWeekend(dayOfMonth);
  return (
    <>
      <div
        onClick={() => {
          setCurrentDay(dayOfMonth);
        }}
        className={cn(
          style.day,
          isCurrentMonth() ? style.otherMonth : '',
          isWeekEnd() && !isCurrentMonth() ? style.weekend : '',
          currentDay.toLocaleDateString() === dayOfMonth.toLocaleDateString()
            ? style.currentDay
            : '',
          currentDay.toLocaleDateString() === dayOfMonth.toLocaleDateString() &&
            isToday(dayOfMonth)
            ? style.currentDay
            : ''
        )}
      >
        {format(dayOfMonth, 'dd')}
      </div>
    </>
  );
}
export default Day;
