import React from 'react';
import { format, isWeekend } from 'date-fns';
import cn from 'classnames';
import style from './Day.module.sass';
function Day (props) {
  const { currentDay } = props;
  const isCurrentMonth = () => {
    if (format(currentDay, 'M') === format(new Date(), 'M')) {
      return true;
    }
  };
  const isWeekEnd = () => {
    if (isWeekend(currentDay)) {
      return true;
    }
  };
  
  return (
    <>
      <div
        className={cn(
          style.day,
          isCurrentMonth() ? '' : style.otherMonth,
          isWeekEnd() && isCurrentMonth() ? style.weekend : '',
          currentDay.toLocaleDateString() === new Date().toLocaleDateString() ? style.currentDay : ''
        )}
      >
        {format(currentDay, 'dd')}
      </div>
    </>
  );
}
export default Day;
