import React from 'react';
import { useStyles } from './styles';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import TextField from '@material-ui/core/TextField';
import ContactUsImage from '../../assets/images/ContactUs.svg';
import Button from '@material-ui/core/Button';
const ContactUs = ({
  sendMessage,
  name,
  email,
  message,
  setFieldValue,
  isLoading,
}) => {
  const classes = useStyles();
  const submit = async e => {
    e.preventDefault();
    try {
      await sendMessage(name, email, message);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <form onSubmit={submit}>
      <h2 className={classes.header}>Связаться с нами</h2>
      <Grid
        container
        spacing={4}
        direction="row"
        justify="center"
        alignItems="center"
        style={{
          margin: 0,
          width: '100%',
          padding: 32,
        }}
      >
        <Grid item xs={12} md={6} sm={6}>
          <div className={classes.textFieldsWrapper}>
            <TextField
              className={classes.inputField}
              label="Имя"
              variant="outlined"
              value={name}
              onChange={e => setFieldValue('name', e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              className={classes.inputField}
              label="Email"
              variant="outlined"
              value={email}
              onChange={e => setFieldValue('email', e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              className={classes.inputField}
              label="Сообщение"
              value={message}
              onChange={e => setFieldValue('message', e.target.value)}
              multiline
              rows="6"
              variant="outlined"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6} sm={6}>
          <img src={ContactUsImage} alt={'contact u-box'} width="100%" />
        </Grid>
      </Grid>
      <div className={classes.buttonWrapper}>
        <Button
          variant="contained"
          className={classes.button}
          color="primary"
          type="submit"
          disabled={isLoading}
        >
          Отправить
        </Button>
      </div>
    </form>
  );
};

export default ContactUs;
