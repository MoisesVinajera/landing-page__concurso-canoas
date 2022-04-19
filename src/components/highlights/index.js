import React from 'react';
import Description from './Description';
import Discount from './Discount';
import classes from '../../resources/styles.module.css';

const Highlights = () => {
  return (
    <div className={classes.highlight_wrapper}>
      <Description />
      <Discount />
    </div>
  );
};

export default Highlights;
