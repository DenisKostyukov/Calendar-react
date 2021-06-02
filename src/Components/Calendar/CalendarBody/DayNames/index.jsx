import React from 'react';
import { format, startOfWeek, addDays } from 'date-fns';
import style from './DayNames.module.sass';

function DayNames () {
  const dayNames = new Array(7).fill(null).map((_, index) => {
    return <div className={style.dayName} key={index}>{format(addDays(startOfWeek(0), index), 'EEEEE')}</div>;
  });
  return (
    <>
      <div className={style.dayNameContainer}>{dayNames}</div>
    </>
  );
}

export default DayNames;
