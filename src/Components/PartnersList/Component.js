import React from 'react';
import { useStyles } from './styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkoltechLogo from '../../assets/images/Partners/skoltech.png';
import SechenovskiyLogo from '../../assets/images/Partners/sechnovka.png';
import HSELogo from '../../assets/images/Partners/hse_inc_main.png';
import EttaLogo from '../../assets/images/Partners/Etta.png';
import BiosensorLogo from '../../assets/images/Partners/Biosensor.png';
const AnalysisCard = () => {
  const classes = useStyles();
  const settings = {
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 10000,
    slidesToShow: 4,
    pauseOnHover: false,
    swipeToSlide: true,
    arrows: false,
    speed: 1000,
    cssEase: 'ease',
    infinity: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className={classes.main}>
      <div className={classes.item}>
        <img src={SkoltechLogo} alt={'u-box skoltech'} />
      </div>
      <div className={classes.item}>
        <img src={SechenovskiyLogo} alt={'u-box sechenovskiy'} />
      </div>
      <div className={classes.item}>
        <img src={HSELogo} alt={'u-box hse-inc'} />
      </div>
      <div className={classes.item}>
        <img src={BiosensorLogo} alt={'u-box biosensor'} />
      </div>
      <div className={classes.item}>
        <img src={EttaLogo} alt={'u-box etta'} />
      </div>
    </Slider>
  );
};

export default AnalysisCard;
