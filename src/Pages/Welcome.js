import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom'
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  buttonsWrapper: {
    display:"flex",
    justifyContent:"center",
    flexDirection:"column"
  }
}));

const Welcome = () => {
  const classes = useStyles();
  return (
    <div className="backgorund">
      
      
      {/* Logo */}
      <div className={classes.buttonsWrapper}>
        <Button
          component={Link} to={'/camera'}
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Сделать Тест
        </Button>
        <Button
        component={Link} to={'/signin'}
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Войти
        </Button>
        <Button
        component={Link} to={'/signup'}
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Регистрация
        </Button>
        <Button
        // component={Link} to={'/camera'}
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Войти с Google
        </Button>
      </div>
      {/* Test */}
      {/* Sign In */}
      {/* Sign UP */}
      {/* Sign In with Google */}
    </div>
  );
};

export default Welcome;
