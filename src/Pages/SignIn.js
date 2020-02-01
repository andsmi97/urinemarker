import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import { auth, signInWithGoogle } from '../firebase/utils.js';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
  buttonsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  background: {
    backgroundColor: theme.palette.primary.light,
    height: '100vh',
    width: '100vw',
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const [inProgress, setInProgress] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeEmail = e => setEmail(e.target.value);
  const changePassword = e => setPassword(e.target.value);

  const onSignInSubmit = async event => {
    event.preventDefault();
    setInProgress(true);
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setInProgress(false);
    } catch (e) {
      setInProgress(false);
      console.log(e);
    }
  };

  return (
    <div className={classes.background}>
      {/* Logo */}
      <form className={classes.container} onSubmit={onSignInSubmit}>
        <TextField
          id="login-input"
          label="Email"
          className={classes.textField}
          type="text"
          name="Email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          shrink
          value={email}
          onChange={changeEmail}
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
            to={'/'}
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Отмена
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            className={classes.button}
            disabled={inProgress}
          >
            Войти
          </Button>
        </div>
        <Button
          onClick={signInWithGoogle}
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Войти c помощью google
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
