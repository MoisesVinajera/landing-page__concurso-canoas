import React from 'react';
import { Fade } from 'react-awesome-reveal';
import classes from '../../resources/styles.module.css';

const Footer = () => {
  return (
    <footer className={classes.bck_blue}>
      <Fade triggerOnce>
        <div
          className={`${classes.font_righteous} ${classes.footer_logo_venue}`}
        >
          El capítulo estudiantil
        </div>
        <div className={classes.footer_copyright}>2021 all rights reserved</div>
      </Fade>
    </footer>
  );
};

export default Footer;
