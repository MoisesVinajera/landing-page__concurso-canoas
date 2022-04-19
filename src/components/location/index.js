import React from 'react';
import classes from '../../resources/styles.module.css';

const Location = () => {
  return (
    <div className={classes.location_wrapper}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.60124310237!2d-89.84549088540889!3d21.247655385646077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f55e52fcc5ceec1%3A0xe20f0c6cfa068f8!2sProgreso%2C%20Yuc.!5e0!3m2!1ses!2smx!4v1647996767044!5m2!1ses!2smx"
        width="100%"
        height="500px"
        frameBorder="0"
        title="gglemaps"
        allowFullScreen
      ></iframe>
      <div className={classes.location_tag}>
        <div>Ubicación</div>
      </div>
    </div>
  );
};

export default Location;
