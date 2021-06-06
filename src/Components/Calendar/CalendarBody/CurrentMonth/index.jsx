import React from 'react';
import style from './CurrentMonth.module.sass';
import { format } from 'date-fns';
function CurrentMonth ({ currentDay }) {
  return (
    <>
      <h1 className={style.currentMonth}>{currentDay}</h1>
    </>
  );
}

export default CurrentMonth;
