import React from 'react';
import { format, isWeekend } from 'date-fns';
import cn from 'classnames';
import style from './Day.module.sass';
function Day (props) {
  const { currentDay, id, setSelectedDay, selectedDay } = props;
  const isCurrentMonth = () =>
    format(currentDay, 'M') === format(new Date(), 'M');

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
          !selectedDay &&currentDay.toLocaleDateString() === new Date().toLocaleDateString()
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
