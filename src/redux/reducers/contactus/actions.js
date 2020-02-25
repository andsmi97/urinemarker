import {
  SET_CONTACT_US_FIELD,
  SEND_MESSAGE_START,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE,
} from './constants';
import agent from '../../../agent';
import { openSnack } from '../common/actions';
export const setContactUsField = (field, value) => ({
  type: SET_CONTACT_US_FIELD,
  payload: {
    [field]: value,
  },
});

export const sendMessageStart = () => ({
  type: SEND_MESSAGE_START,
});

export const sendMessageSuccess = () => ({
  type: SEND_MESSAGE_SUCCESS,
});

export const sendMessageFailure = error => ({
  type: SEND_MESSAGE_FAILURE,
  error,
});

export const sendMessage = (name, email, message) => async dispatch => {
  dispatch(sendMessageStart());
  try {
    await agent.contact.sendMessage(name, email, message);
    dispatch(sendMessageSuccess());
    dispatch(
      openSnack({
        type: 'success',
        message:
          'Благодарим Вас за проявленный интерес! Мы скоро с Вами свяжемся',
      })
    );
  } catch (error) {
    dispatch(
      openSnack({ type: 'error', message: 'Возникла ошибка, повторите позже' })
    );
    dispatch(sendMessageFailure(error));
  }
};
