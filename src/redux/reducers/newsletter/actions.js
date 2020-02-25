import {
  SET_SUBSCRIBE_FIELD,
  SUBSCRIBE_START,
  SUBSCRIBE_SUCCESS,
  SUBSCRIBE_FAILURE,
} from './constants';
import agent from '../../../agent';
import { openSnack } from '../common/actions';
export const setSubscribeField = (field, value) => ({
  type: SET_SUBSCRIBE_FIELD,
  payload: {
    [field]: value,
  },
});

export const subscribeStart = () => ({
  type: SUBSCRIBE_START,
});

export const subscribeSuccess = () => ({
  type: SUBSCRIBE_SUCCESS,
});

export const subscribeFailure = error => ({
  type: SUBSCRIBE_FAILURE,
  error,
});

export const subscribe = email => async dispatch => {
  dispatch(subscribeStart());
  try {
    await agent.contact.subscribe(email);
    dispatch(subscribeSuccess());
    dispatch(
      openSnack({
        type: 'success',
        message: 'Благодарим Вас за подписку!',
      })
    );
  } catch (error) {
    dispatch(
      openSnack({ type: 'error', message: 'Возникла ошибка, повторите позже' })
    );
    dispatch(subscribeFailure(error));
  }
};
