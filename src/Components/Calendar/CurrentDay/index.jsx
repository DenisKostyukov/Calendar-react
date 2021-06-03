import React from 'react';
import { format } from 'date-fns';
import style from './CurrentDay.module.sass';
function CurrentDay ({ currentDay, selectedDay }) {
  return (
    <>
      <div className={style.container}>
        <h1 className={style.dayName}>{selectedDay ? format(selectedDay, 'EEEE'):format(currentDay, 'EEEE')}</h1>
        <p className={style.dayNumber}>{selectedDay ?format(selectedDay, 'dd'):format(currentDay, 'dd') }</p>
      </div>
    </>
  );
}

export default CurrentDay;
