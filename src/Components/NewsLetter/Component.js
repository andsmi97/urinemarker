import React from 'react';
import { useStyles } from './styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/Email';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

const NewsLetter = ({ setFieldValue, subscribe, email, isLoading }) => {
  const classes = useStyles();
  const submit = async e => {
    e.preventDefault();
    try {
      await subscribe(email);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className={classes.background}>
      <h2 className={classes.header}>Новостная рассылка</h2>
      <form className={classes.fieldsWrapper} onSubmit={submit}>
        <TextField
          className={classes.inputField}
          label="Email"
          variant="outlined"
          type="email"
          onChange={e => setFieldValue('email', e.target.value)}
          value={email}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          className={classes.button}
          type="submit"
          disabled={isLoading}
        >
          Подписаться
        </Button>
      </form>
    </div>
  );
};

export default NewsLetter;
