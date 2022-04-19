import React from 'react';
import classes from '../../resources/styles.module.css';
import Carousel from './Carousel';
import TimeUntil from './TimeUntil';

const Featured = () => {
  return (
    <div className={classes.featured_container}>
      <Carousel />
      <div className={classes.artist_name}>
        <div className={classes.wrapper}>
          Concurso Internacional de Canoas de Concreto Yucatán 2022
        </div>
      </div>
      <TimeUntil />
    </div>
  );
};

export default Featured;
