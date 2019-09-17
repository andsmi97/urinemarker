import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import {
  auth,
  signInWithGoogle,
  createUserProfileDocument
} from "../firebase/utils.js";

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
  }
}));

const SignUp = () => {
  const [inProgress, setInProgress] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const changeEmail = e => setEmail(e.target.value);
  const changePassword = e => setPassword(e.target.value);
  const changeUsername = e => setUsername(e.target.value);

  const onSignUpSubmit = async event => {
    event.preventDefault();
    setInProgress(true);
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user);
      setInProgress(false);
    } catch (error) {
      console.error(error);
      setInProgress(false);
    }
  };
  const classes = useStyles();
  return (
    <div className="backgorund">
      {/* Logo */}
      <form className={classes.container}>
        <TextField
          id="email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="login"
          margin="normal"
          variant="outlined"
          onChange={changeEmail}
          value={email}
        />
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
          value={username}
          onChange={changeUsername}
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
          value={password}
          onChange={changePassword}
        />
        <div className={classes.buttonsWrapper}>
          <Button
            component={Link}
            to={"/"}
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
            type="submit"
            disabled={inProgress}
          >
            Войти
          </Button>
          <Button
            onClick={signInWithGoogle}
            variant="contained"
            color="secondary"
            className={classes.button}
            type="submit"
          >
            Войти с Google
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

export default SignUp;
