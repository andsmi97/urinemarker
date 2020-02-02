import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStyles } from './styles';

const Loader = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CircularProgress />
    </div>
  );
};

export default Loader;
