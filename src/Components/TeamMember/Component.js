import React from 'react';
import { useStyles } from './styles';

const TeamMember = ({ name, title, image, description }) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <img src={image} alt={name} className={classes.image} />
      <h3 className={classes.title}>{name}</h3>
      <p className={classes.title}>{title}</p>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default TeamMember;
