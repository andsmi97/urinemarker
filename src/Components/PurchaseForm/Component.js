import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Phone from '@material-ui/icons/Phone';
import PriceCalculator from '../PriceCalculator/Container';
import { useStyles } from './styles';

const PurchaseForm = ({
  onCreateOrder,
  isLoading,
  phoneNumber,
  name,
  onFieldChange,
  purchaseFormStatus,
  onPurchaseFormChangeStatus,
  amount,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Button
        className={classes.purchaseButton}
        variant="contained"
        color="primary"
        onClick={() => onPurchaseFormChangeStatus(true)}
      >
        Заказать
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={purchaseFormStatus}
        onClose={() => onPurchaseFormChangeStatus(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          Приобрести набор для анализа мочи uBox
        </DialogTitle>
        <DialogContent>
          <div className={classes.textFieldWrapper}>
            <TextField
              className={classes.textField}
              variant="filled"
              id="name-text-field"
              label="Имя"
              value={name}
              autoFocus
              onChange={event => onFieldChange('name', event.target.value)}
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
              onChange={event =>
                onFieldChange('phoneNumber', event.target.value)
              }
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
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => onPurchaseFormChangeStatus(false)}
            color="primary"
          >
            Отмена
          </Button>
          <Button
            onClick={() => onCreateOrder(name, phoneNumber, amount)}
            color="primary"
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
