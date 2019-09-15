import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "column"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1)
  },
  buttonsWrapper: {
    display: "flex",
    justifyContent: "space-between"
  },
  background: {
    backgroundColor: theme.palette.primary.light,
    height:"100vh",
    width:"100vw",
  }
}));

const SignIn = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      {/* Logo */}
      <form className={classes.container}>
        <TextField
          id="login-input"
          label="Логин"
          className={classes.textField}
          type="text"
          name="login"
          autoComplete="login"
          margin="normal"
          variant="outlined"
          shrink
        />
        <TextField
          id="password-inupt"
          label="Пароль"
          className={classes.textField}
          type="password"
          name="password"
          autoComplete="password"
          margin="normal"
          variant="outlined"
          shrink
        />
        <div className={classes.buttonsWrapper}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Отмена
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Войти
          </Button>
        </div>
        {/* Login Field */}
        {/* Password Field*/}
        {/* Cancel Button*/}
        {/* Submit Button*/}
      </form>
    </div>
  );
};

export default SignIn;
