import React from 'react';
import FAQImage from '../../assets/images/FAQImage.png';
import FAQContent from './FAQContent';
import Grid from '@material-ui/core/Grid';
import { useComponentStyles } from './styles';

const FAQ = () => {
  const classes = useComponentStyles();
  return (
    <>
      <h2 className={classes.header}>FAQ</h2>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <img src={FAQImage} alt={'u-Box FAQ'}></img>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FAQContent />
        </Grid>
      </Grid>
    </>
  );
};

export default FAQ;
