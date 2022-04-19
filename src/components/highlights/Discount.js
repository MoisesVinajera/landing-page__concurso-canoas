import React, { useEffect, useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import classes from '../../resources/styles.module.css';
import GenericButton from '../UI/GenericButton';
// import Button from '../UI/GenericButton';

const Discount = () => {
  const end = 30;
  const [start, setStart] = useState(0);
  const porcentage = () => {
    if (start < end) {
      setStart((prevCount) => prevCount + 1);
    }
  };
  const onViewFadeVisibility = (inView) => {
    if (inView) {
      porcentage();
    }
  };
  useEffect(() => {
    if (start > 0 && start < end) {
      setTimeout(() => {
        setStart((prevCount) => prevCount + 1);
      }, 30);
    }
  }, [start]);
  return (
    <div className={classes.center_wrapper}>
      <div className={classes.discount_wrapper}>
        <Fade onVisibilityChange={onViewFadeVisibility} triggerOnce>
          <div className={classes.discount_porcentage}>
            <span>{start}%</span>
            <span>OFF</span>
          </div>
        </Fade>
        <Slide right>
          <div className={classes.discount_description}>
            <h3>Purchase ticket before 20th June</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <GenericButton
              text="Purchase Ticket"
              link="http://google.com"
              size="small"
              style={{
                background: '#ffa800',
                color: '#ffffff',
              }}
              iconTicket={true}
            />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Discount;
