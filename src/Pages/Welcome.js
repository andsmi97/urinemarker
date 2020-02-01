import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../firebase/utils.js';
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
    background: theme.palette.primary.light,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Welcome = () => {
  const classes = useStyles();
  //TODO: Landing goes here
  return (
    <div className={classes.background}>
      <div className={classes.buttonsWrapper}>
        <Button
          component={Link}
          to={'/signin'}
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Войти
        </Button>
        <Button
          component={Link}
          to={'/signup'}
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Регистрация
        </Button>
        <Button
          onClick={signInWithGoogle}
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Войти с Google
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
