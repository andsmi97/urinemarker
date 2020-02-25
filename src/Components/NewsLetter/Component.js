import React from 'react';
import { useStyles } from './styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/Email';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

const ContactUs = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <h2 className={classes.header}>Новостная рассылка</h2>
      <div className={classes.fieldsWrapper}>
        <TextField
          className={classes.inputField}
          label="Email"
          variant="outlined"
          type="email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" className={classes.button}>
          Отправить
        </Button>
      </div>
    </div>
  );
};

export default ContactUs;
