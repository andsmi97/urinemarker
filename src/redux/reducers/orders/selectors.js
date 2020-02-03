import { createSelector } from 'reselect';

const selectOrders = state => state.orders;

export const selectIsOrdersFetching = createSelector(
  [selectOrders],
  orders => orders.isFetching
);

export const selectPhoneNumber = createSelector(
  [selectOrders],
  orders => orders.phoneNumber
);

export const selectName = createSelector([selectOrders], orders => orders.name);

export const selectAmount = createSelector(
  [selectOrders],
  orders => orders.amount
);

export const selectPurchaseFormStatus = createSelector(
  [selectOrders],
  orders => orders.purchaseFormStatus
);
