import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Phone from '@material-ui/icons/Phone';
import PriceCalculator from '../PriceCalculator/Component';
import { useStyles } from './styles';

const PurchaseForm = ({ onCreateOrder, isLoading }) => {
  console.log(onCreateOrder, isLoading);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [phoneNumber, setPhoneNumber] = useState('');
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
            <div>
              <TextField
                className={classes.textField}
                variant="filled"
                id="phone-text-field"
                label="Телефон"
                value={phoneNumber}
                onChange={onTextFieldChange(setPhoneNumber)}
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
          <Button
            onClick={() => onCreateOrder(name, phoneNumber)}
            color="primary"
            autoFocus
            disabled={isLoading}
          >
            Заказать
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PurchaseForm;
