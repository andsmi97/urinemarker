import React from 'react';
import FAQImage from '../../assets/images/FAQImage.svg';
import FAQContent from './FAQContent';
import Grid from '@material-ui/core/Grid';
import { useComponentStyles } from './styles';

const FAQ = () => {
  const classes = useComponentStyles();
  return (
    <div className={classes.background}>
      <h2 className={classes.header}>FAQ</h2>
      <Grid
        container
        spacing={4}
        style={{
          margin: 0,
          width: '100%',
          padding: 32,
          maxWidth: 1644,
        }}
      >
        <Grid item xs={12} sm={6}>
          <img src={FAQImage} alt={'u-Box FAQ'} width="100%"></img>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FAQContent />
        </Grid>
      </Grid>
    </div>
  );
};

export default FAQ;
