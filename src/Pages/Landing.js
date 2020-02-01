import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import img from '../assets/images/Background.png';
import AnalysisImage from '../assets/images/AnalysisImage.png';
import logo from '../assets/images/logo.png';
import Grid from '@material-ui/core/Grid';
import PurchaseForm from '../Components/PurchaseForm';
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    width: 240,
  },
  buttonsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  background: {
    height: '100vh',
    width: '100vw',
    background: `url('${img}') no-repeat right`,
  },
  logo: {
    width: '203px',
    height: '114px',
    background: `url(${logo}) no-repeat center`,
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    marginRight: 100,
    marginLeft: 100,
  },
  phoneNumber: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    fontWeight: 'Bold',
    fontFamily: 'Monsterrat',
  },
  leftPart: {
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainHeaderText: {
    fontFamily: 'Monsterrat',
    fontSize: 34,
    textAlign: 'center',
  },
  purchaseButton: {
    width: '100px',
    color: 'white',
  },
}));

const Welcome = () => {
  const classes = useStyles();
  //TODO: Landing goes here
  return (
    <div className={classes.background}>
      <div className={classes.topBar}>
        <div className={classes.logo} />
        <div className={classes.phoneNumber}>+7 (917) 520 60 76</div>
      </div>
      <Grid container>
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
          <img src={AnalysisImage} alt="Анализ мочи" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Welcome;
