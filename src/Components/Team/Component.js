import React from 'react';
import { useStyles } from './styles';
import TeamMember from '../TeamMember/Component';
import imageOne from '../../assets/images/TeamMembers/Karen.png';
import imageTwo from '../../assets/images/TeamMembers/Rasim.png';
import imageThree from '../../assets/images/TeamMembers/Aleksandr.png';
import imageFour from '../../assets/images/TeamMembers/Andrey.png';
import Grid from '@material-ui/core/Grid';

const Team = () => {
  const classes = useStyles();
  return (
    <div className={classes.teamWrapper}>
      <h2 className={classes.header}>Команда</h2>
      <Grid
        container
        spacing={4}
        direction="row"
        justify="center"
        alignItems="center"
        style={{
          margin: 0,
          width: '100%',
          padding: 32,
          maxWidth: 1200,
        }}
      >
        <Grid item xs={12} md={3} sm={6}>
          <TeamMember
            image={imageOne}
            name="Адамян Карен"
            title="CEO"
            description="МФТИ"
            vk=""
          />
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <TeamMember
            image={imageTwo}
            name="Биктимиров Расим"
            title="COO"
            description="Сеченовский университет"
            vk=""
          />
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <TeamMember
            image={imageThree}
            name="Белов Александр"
            title="CTO"
            description="Сколтех"
            linkedIn=""
            gitHub=""
          />
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <TeamMember
            image={imageFour}
            name="Смирнов Андрей"
            title="CMO"
            description="Сколтех"
            gitHub="https://github.com/andsmi97"
            linkedIn="www.linkedin.com/in/andsmi97"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Team;
