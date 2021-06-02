import React from 'react';
import { format } from 'date-fns';
import style from './CurrentDay.module.sass';
function CurrentDay ({ currentDay }) {
  return (
    <>
      <div className={style.container}>
        <h1 className={style.dayName}>{format(currentDay, 'EEEE')}</h1>
        <p className={style.dayNumber}>{format(currentDay, 'dd')}</p>
      </div>
    </>
  );
}

export default CurrentDay;
