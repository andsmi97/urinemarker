import React from 'react';
import AnalysisImage from '../../assets/images/AnalysisImage.png';
import Grid from '@material-ui/core/Grid';
import PurchaseForm from '../../Components/PurchaseForm/Container';
import { useStyles } from './styles';

const Welcome = () => {
  const classes = useStyles();
  //TODO: Landing goes here
  return (
    <div className={classes.background}>
      <div className={classes.topBar}>
        <div className={classes.logo} />
        <div className={classes.phoneNumber}>+7 (917) 520 60 76</div>
      </div>
      <Grid container className={classes.gridContainer} alignContent="center">
        <Grid item xs={1} sm={1}></Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.leftPart}>
            <h1 className={classes.mainHeaderText}>
              Быстрый и удобный анализ мочи, не выходя из дома!
            </h1>
            <PurchaseForm />
          </div>
        </Grid>
        <Grid item xs={1} sm={1}></Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.imageWrapper}>
            <img
              className={classes.rightImage}
              src={AnalysisImage}
              alt="Анализ мочи"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Welcome;
