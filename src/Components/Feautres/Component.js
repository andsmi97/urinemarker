import React from 'react';
import { useStyles } from './styles';
import FeatureCard from '../FeatureCard/Component';
import imageOne from '../../assets/images/FeatureCards/1.png';
import imageTwo from '../../assets/images/FeatureCards/2.png';
import imageThree from '../../assets/images/FeatureCards/3.png';
import imageFour from '../../assets/images/FeatureCards/4.png';
import Grid from '@material-ui/core/Grid';

const Features = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.header}>Особенности</h2>
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
          maxWidth: 1644,
        }}
      >
        <Grid item xs={12} md={3} sm={6}>
          <FeatureCard
            image={imageOne}
            title="Компьютерное зрение"
            description="Технология компьютерного зрения позволяет проводить анализ мочи практически на любом смартфотне, у которого есть нормальная камера"
          />
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <FeatureCard
            image={imageTwo}
            title="Лабораторная точность"
            description="Мы используем точно такие же тест-полоски как и в клинических лабораториях"
          />
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <FeatureCard
            image={imageThree}
            title="Анализы на дому"
            description="Для получения результата анализа мочи больше нет необходимости относить мочу в лабораторию"
          />
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <FeatureCard
            image={imageFour}
            title="Работает при любом освещении"
            description="Технология компьютерного зрения позволяет проводить анализ мочи практически на любом смартфотне, у которого есть нормальная камера"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Features;
