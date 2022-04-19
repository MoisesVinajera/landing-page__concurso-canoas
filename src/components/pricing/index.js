import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import classes from '../../resources/styles.module.css';
import GenericButton from '../UI/GenericButton';

const Pricing = () => {
  const priceState = {
    prices: [100, 150, 200],
    position: ['Basico', 'Medio', 'VIP'],
    desc: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
    ],
    linkto: ['http//sales.a', 'http//sales.b', 'http//sales.c'],
    delay: [500, 0, 500],
  };
  const showBoxes = () =>
    priceState.prices.map((item, index) => (
      <Zoom
        key={index}
        className={classes.pricing_item}
        delay={priceState.delay[index]}
      >
        <div className={classes.pricing_inner_wrapper}>
          <div className={classes.pricing_title}>
            <span>${priceState.prices[index]}</span>
            <span>{priceState.position[index]}</span>
          </div>
          <div className={classes.pricing_description}>
            {priceState.desc[index]}
          </div>
          <div className={classes.pricing_buttons}>
            <GenericButton
              text="Comprar"
              style={{
                color: '#ffffff',
              }}
              link={priceState.linkto[index]}
            />
          </div>
        </div>
      </Zoom>
    ));
  return (
    <div className={classes.bck_white}>
      <div className={`${classes.center_wrapper} ${classes.pricing_section}`}>
        <h2>Precios</h2>
        <div className={classes.pricing_wrapper}>{showBoxes()}</div>
      </div>
    </div>
  );
};

export default Pricing;
