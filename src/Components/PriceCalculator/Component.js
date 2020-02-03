import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './styles';
const PriceCalculator = ({ price, itemsAmount, onFieldChange }) => {
  const classes = useStyles();
  // const [itemsAmount, setItemsAmount] = useState(1);
  const onItemChange = event => {
    const value = event.target.value;
    if (!value) {
      return onFieldChange('amount', 1);
    }
    if (value < 0) {
      //setting positive value
      return onFieldChange('amount', -value);
    }
    return onFieldChange('amount', value);
  };
  const finalPrice = itemsAmount ? itemsAmount * price : 0;
  return (
    <div className={classes.wrapper}>
      <div>
        <TextField
          className={classes.textField}
          id="items-amount"
          label="Количество наборов"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={itemsAmount}
          onChange={onItemChange}
          variant="filled"
        />
      </div>
      <div>{finalPrice}₽</div>
    </div>
  );
};

export default PriceCalculator;
