import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Сделать Тест
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Войти
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Регистрация
        </Button>
        <Button
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
