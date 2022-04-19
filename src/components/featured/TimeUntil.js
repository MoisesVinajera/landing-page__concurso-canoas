import React, { useCallback, useEffect, useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import classes from '../../resources/styles.module.css';
const TimeUntil = () => {
  const [time, setTime] = useState({
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0',
  });
  const renderItem = (time, tag) => (
    <div className={classes.countdown_item}>
      <div className={classes.countdown_time}>{time}</div>
      <div className={classes.countdown_tag}>{tag}</div>
    </div>
  );

  const getTimeUntil = useCallback((deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      setTime({
        days,
        hours,
        minutes,
        seconds,
      });
    }
  }, []);

  useEffect(() => {
    setInterval(() => getTimeUntil('Nov, 20, 2022, 01:20:00'), 1000);
  }, [getTimeUntil]);

  return (
    <Slide left delay={1000}>
      <div className={classes.countdown_wrapper}>
        <div className={classes.countdown_top}>El evento comienza en</div>
        <div className={classes.countdown_bottom}>
          {renderItem(time.days, 'Días')}
          {renderItem(time.hours, 'horas')}
          {renderItem(time.minutes, 'min')}
          {renderItem(time.seconds, 'sec')}
        </div>
      </div>
    </Slide>
  );
};

export default TimeUntil;
