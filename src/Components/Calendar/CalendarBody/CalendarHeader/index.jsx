import React from 'react';
import Button from '../../../Button';
import CurrenMonth from '../CurrentMonth';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import style from './CalendarHeader.module.sass';

function CalendarHeader (props) {
  const { subMonthHandler, addMonthHandler, currentMonth, selectedDay } = props;
  return (
    <>
      <div className={style.container}>
        <Button onClick={subMonthHandler} className={style.btn}>
          <FontAwesomeIcon icon={faArrowCircleLeft} />
        </Button>
        
        <CurrenMonth
          currentMonth={format(currentMonth, 'MMMM y')}
          selectedDay={selectedDay}
        />
        <Button onClick={addMonthHandler} className={style.btn}>
        <FontAwesomeIcon icon={faArrowCircleRight} />
        </Button>
      </div>
    </>
  );
}

export default CalendarHeader;
