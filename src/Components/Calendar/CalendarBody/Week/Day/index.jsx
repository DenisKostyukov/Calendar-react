import React from 'react';
import { format, isWeekend, isToday } from 'date-fns';
import cn from 'classnames';
import style from './Day.module.sass';
function Day (props) {
  const { currDay, currentDay, setCurrentDay } = props;
  const isCurrentMonth = () =>
    format(currDay, 'M') !== format(currentDay, 'M');
  const isWeekEnd = () => isWeekend(currDay);
  return (
    <>
      <div
        onClick={() => {
          setCurrentDay(currDay);
        }}
        className={cn(
          style.day,
          isCurrentMonth() ? style.otherMonth : '',
          isWeekEnd() && !isCurrentMonth() ? style.weekend : '',
          currentDay.toLocaleDateString() === currDay.toLocaleDateString()
            ? style.currentDay
            : '',
          currentDay.toLocaleDateString() === currDay.toLocaleDateString() &&
            isToday(currDay)
            ? style.currentDay
            : ''
        )}
      >
        {format(currDay, 'dd')}
      </div>
    </>
  );
}
export default Day;
