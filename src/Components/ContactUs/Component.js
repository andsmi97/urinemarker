import React from 'react';
import { useStyles } from './styles';
import FeatureCard from '../FeatureCard/Component';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import MessageIcon from '@material-ui/icons/Message';
import TextField from '@material-ui/core/TextField';
import ContactUsImage from '../../assets/images/ContactUs.png';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
const ContactUs = () => {
  const classes = useStyles();
  return (
    <>
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            {/* <FormControl className={classes.inputField}>
              <InputLabel htmlFor="message">Сообщение</InputLabel>
              <OutlinedInput
                id="message"
                multiline
                rows={6}
                startAdornment={
                  <InputAdornment position="start">
                    <MessageIcon />
                  </InputAdornment>
                }
              />
            </FormControl> */}
            <TextField
              className={classes.inputField}
              label="Сообщение"
              multiline
              rows="6"
              variant="outlined"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6} sm={6}>
          <img src={ContactUsImage} alt={'contact u-box'} />
        </Grid>
      </Grid>
      <div className={classes.buttonWrapper}>
        <Button variant="contained" className={classes.button} color="primary">
          Отправить
        </Button>
      </div>
    </>
  );
};

export default ContactUs;
