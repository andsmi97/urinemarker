import React from 'react';
import { useStyles } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faVk } from '@fortawesome/free-brands-svg-icons';
import './imageWrapperStyles.css';
const TeamMember = ({
  name,
  title,
  image,
  description,
  vk,
  linkedIn,
  gitHub,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      {/* static class used here because of hovering on this class */}
      <div className={'imageWrapper'}>
        {linkedIn && (
          <FontAwesomeIcon
            icon={faLinkedin}
            className={classes.icon}
            href={linkedIn}
          />
        )}
        {gitHub && (
          <a href={gitHub} className={classes.icon}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        )}
        {vk && (
          <FontAwesomeIcon icon={faVk} className={classes.icon} href={vk} />
        )}
      </div>
      <img src={image} alt={name} className={classes.image} />
      <h3 className={classes.title}>{name}</h3>
      <p className={classes.title}>{title}</p>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default TeamMember;
