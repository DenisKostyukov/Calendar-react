import React, { useState } from 'react';
import style from './Calendar.module.sass';
import CalendarBody from './CalendarBody';

function Calendar (props) {
  return (
    <>
      <div className={style.container}>
        <CalendarBody />
      </div>
    </>
  );
}

export default Calendar;
