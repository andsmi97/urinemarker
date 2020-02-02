import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Phone from '@material-ui/icons/Phone';
import MaskedInput from 'react-text-mask';
import PriceCalculator from './PriceCalculator';
import PropTypes from 'prop-types';
import { useStyles } from 'styles';

const TextMaskCustom = props => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        '+',
        '7',
        '(',
        '9',
        /\d/,
        /\d/,
        ')',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={'_'}
      showMask
    />
  );
};
TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};
export default function ResponsiveDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [phoneNumber, setPhoneNumber] = useState('+7(  )   -    ');
  const [name, setName] = useState('');
  const onTextFieldChange = setter => event => {
    setter(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className={classes.purchaseButton}
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
      >
        Заказать
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          Приобрести набор для анализа мочи uBox
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className={classes.textFieldWrapper}>
              <TextField
                className={classes.textField}
                variant="filled"
                id="name-text-field"
                label="Имя"
                value={name}
                onChange={onTextFieldChange(setName)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className={classes.phoneFieldWrapper}>
              {/* <FormControl>
                <InputLabel htmlFor="formatted-text-mask-input">
                  Телефон
                </InputLabel>
                <Input
                  variant="filled"
                  className={classes.phoneField}
                  id="phone-text-field"
                  label="Телефон"
                  value={phoneNumber}
                  onChnage={onTextFieldChange(setPhoneNumber)}
                  inputComponent={TextMaskCustom}
                />
              </FormControl> */}
              <TextField
                className={classes.textField}
                variant="filled"
                id="phone-text-field"
                label="Телефон"
                value={phoneNumber}
                onChnage={onTextFieldChange(setPhoneNumber)}
                inputComponent={TextMaskCustom}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <PriceCalculator price={259} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Заказать
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
