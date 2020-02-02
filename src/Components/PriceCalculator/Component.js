import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './styles';
const PriceCalculator = ({ price }) => {
  // const [currentPrice, setCurentPrice] = useState(0);
  const classes = useStyles();
  const [itemsAmount, setItemsAmount] = useState(1);
  const onItemChange = event => {
    const value = event.target.value;
    if (!value) {
      return setItemsAmount(1);
    }
    if (value < 0) {
      //setting positive value
      return setItemsAmount(-value);
    }
    return setItemsAmount(value);
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
          defaultValue={1}
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
