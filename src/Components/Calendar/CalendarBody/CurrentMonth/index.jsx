import React from 'react';
import style from './CurrentMonth.module.sass';

function CurrentMonth ({ currentMonth }) {
  return (
    <>
      <h1 className={style.currentMonth}>{currentMonth}</h1>
    </>
  );
}

export default CurrentMonth;
