import React from 'react';
import classes from '../../resources/styles.module.css';

import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';
import { Zoom } from 'react-awesome-reveal';

const VenueNfo = () => {
  return (
    <div className={classes.bck_black}>
      <div className={classes.center_wrapper}>
        <div className={classes.vn_wrapper}>
          <Zoom
            className={`${classes.vn_first} ${classes.vn_item}`}
            triggerOnce
          >
            <div>
              <div className={classes.vn_outer}>
                <div className={classes.vn_inner}>
                  <div
                    className={`${classes.vn_icon_square} ${classes.bck_blue}`}
                  ></div>
                  <div
                    className={classes.vn_icon}
                    style={{
                      background: `url(${icon_calendar})`,
                    }}
                  ></div>
                  <div className={classes.vn_title}>Día y Hora del evento</div>
                  <div className={classes.vn_desc}>Nov 20 2022, 01:20:00</div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom className={classes.vn_item} triggerOnce delay={500}>
            <div>
              <div className={classes.vn_outer}>
                <div className={classes.vn_inner}>
                  <div
                    className={`${classes.vn_icon_square} ${classes.bck_blue}`}
                  ></div>
                  <div
                    className={classes.vn_icon}
                    style={{
                      background: `url(${icon_location})`,
                    }}
                  ></div>
                  <div className={classes.vn_title}>Ubicación</div>
                  <div className={classes.vn_desc}>
                    Puerto de abrigo, Chuburna, Yucatán, México
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default VenueNfo;
