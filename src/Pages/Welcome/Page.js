import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

const Welcome = ({ onGoogleSignIn, authInProgress }) => {
  const classes = useStyles();
  //TODO: Landing goes here
  return (
    <div className={classes.background}>
      <div className={classes.buttonsWrapper}>
        <Button
          component={Link}
          to={'/signin'}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Войти
        </Button>
        <Button
          component={Link}
          to={'/signup'}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Регистрация
        </Button>
        <Button
          onClick={onGoogleSignIn}
          variant="contained"
          color="primary"
          disabled={authInProgress}
          className={classes.button}
        >
          Войти с Google
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
