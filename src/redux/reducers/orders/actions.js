import {
  CREATE_ORDER_START,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
} from './constants';
import { openSnack } from '../common/actions';
import firestoreQueries from '../../../firebase/firestoreQueries';
// import agent from '../../../agent';

export const createOrderStart = () => ({
  type: CREATE_ORDER_START,
});

export const createOrderSuccess = () => ({
  type: CREATE_ORDER_SUCCESS,
});

export const createOrderFailure = () => ({
  type: CREATE_ORDER_FAILURE,
});

export const createOrder = (name, phone) => async dispatch => {
  dispatch(createOrderStart());
  try {
    //TODO add amount
    await firestoreQueries.Orders.create(name, phone, 1);
    dispatch(createOrderSuccess());
  } catch (e) {
    dispatch(
      openSnack({ type: 'error', message: 'Возникла ошибка, повторите позже' })
    );
    dispatch(createOrderFailure());
  }
};
