import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

//TODO Add Error handling
const SignUp = ({ onSignUp, authInProgress, onGoogleSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeEmail = e => setEmail(e.target.value);
  const changePassword = e => setPassword(e.target.value);

  const onSignUpSubmit = async event => {
    event.preventDefault();
    onSignUp({ email, password });
  };

  const classes = useStyles();
  return (
    <div className={classes.background}>
      <form className={classes.container} onSubmit={onSignUpSubmit}>
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
          id="password-inupt"
          label="Пароль"
          className={classes.textField}
          type="password"
          name="password"
          autoComplete="password"
          margin="normal"
          variant="outlined"
          value={password}
          onChange={changePassword}
        />
        <div className={classes.buttonsWrapper}>
          <Button
            component={Link}
            to={'/'}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Отмена
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            type="submit"
            disabled={authInProgress}
          >
            Регистрация
          </Button>
        </div>
        <Button
          onClick={onGoogleSignIn}
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={authInProgress}
        >
          Войти с Google
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
