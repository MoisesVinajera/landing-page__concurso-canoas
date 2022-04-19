import React from 'react';
import Slider from 'react-slick';
import classes from '../../resources/styles.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import slide_one from '../../resources/images/slide_one.jpg';
// import slide_two from '../../resources/images/slide_two.jpg';
// import slide_three from '../../resources/images/slide_three.jpg';
import puerto_one from '../../resources/images/puerto01.jpg';
import puerto_two from '../../resources/images/puerto02.jpg';
import puerto_three from '../../resources/images/puerto03.jpg';
import puerto_fourth from '../../resources/images/puerto04.jpg';
const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 7000,
};
const Carousel = () => {
  return (
    <div
      className={classes.carrousel_wrapper}
      style={{
        height: `${window.innerHeight}px`,
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className={classes.carrousel_image}
            style={{
              background: `url(${puerto_one})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
        <div>
          <div
            className={classes.carrousel_image}
            style={{
              background: `url(${puerto_two})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
        <div>
          <div
            className={classes.carrousel_image}
            style={{
              background: `url(${puerto_three})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
        <div>
          <div
            className={classes.carrousel_image}
            style={{
              background: `url(${puerto_fourth})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
