import React from 'react';
import { useStyles } from './styles';

const FeatureCard = ({ title, image, description }) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <h3 className={classes.title}>{title}</h3>
      <img src={image} alt={title} className={classes.image} />
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default FeatureCard;
