import React from 'react';
import style from './CurrentMonth.module.sass';
import { format } from 'date-fns';
function CurrentMonth ({ currentMonth, selectedDay }) {
  return (
    <>
      <h1 className={style.currentMonth}>
        {selectedDay ? format(selectedDay, 'MMMM y') : currentMonth}
      </h1>
    </>
  );
}

export default CurrentMonth;
