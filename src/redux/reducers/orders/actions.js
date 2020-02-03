import {
  CREATE_ORDER_START,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  CHANGE_FIELD,
  CHANGE_PURCHASE_FORM_STATUS,
} from './constants';
import { openSnack } from '../common/actions';
import firestoreQueries from '../../../firebase/firestoreQueries';
// import agent from '../../../agent';

export const onFieldChange = (field, value) => ({
  type: CHANGE_FIELD,
  payload: {
    [field]: value,
  },
});

export const onPurchaseFormChangeStatus = status => ({
  type: CHANGE_PURCHASE_FORM_STATUS,
  payload: status,
});

export const createOrderStart = () => ({
  type: CREATE_ORDER_START,
});

export const createOrderSuccess = () => ({
  type: CREATE_ORDER_SUCCESS,
});

export const createOrderFailure = () => ({
  type: CREATE_ORDER_FAILURE,
});

export const createOrder = (name, phone, amount) => async dispatch => {
  dispatch(createOrderStart());
  try {
    //TODO add amount
    await firestoreQueries.Orders.create(name, phone, amount);
    dispatch(createOrderSuccess());
    dispatch(
      openSnack({
        type: 'success',
        message: 'Заявка отправлена, скоро с вами свяжутся',
      })
    );
    dispatch(onPurchaseFormChangeStatus(false));
  } catch (e) {
    dispatch(onPurchaseFormChangeStatus(false));
    dispatch(
      openSnack({ type: 'error', message: 'Возникла ошибка, повторите позже' })
    );
    dispatch(createOrderFailure());
  }
};
