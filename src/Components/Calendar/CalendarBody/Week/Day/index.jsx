import React from 'react';
import { format, isWeekend ,isToday } from 'date-fns';
import cn from 'classnames';
import style from './Day.module.sass';
function Day (props) {
  const { currentDay,currentMonth, id, setSelectedDay, selectedDay } = props;
  const isCurrentMonth = () =>
    format(currentDay, 'M') === format(currentMonth, 'M');

  const isWeekEnd = () => isWeekend(currentDay);
  return (
    <>
      <div
        id={id}
        onClick={() => setSelectedDay(currentDay)}
        className={cn(
          style.day,
          isCurrentMonth() ? '' : style.otherMonth,
          isWeekEnd() && isCurrentMonth() ? style.weekend : '',
          selectedDay && selectedDay.toLocaleDateString()===id ? style.currentDay: '',
          !selectedDay && isToday(currentDay)
            ? style.currentDay
            : ''
        )}
      >
        {format(currentDay, 'dd')}
      </div>
    </>
  );
}
export default Day;
