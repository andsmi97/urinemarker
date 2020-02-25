import {
  SET_CONTACT_US_FIELD,
  SEND_MESSAGE_START,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE,
} from './constants';
const defaultState = {
  email: '',
  name: '',
  message: '',
  isLoading: false,
  error: '',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_CONTACT_US_FIELD:
      return {
        ...state,
        ...action.payload,
      };
    case SEND_MESSAGE_START:
      return {
        ...state,
        isLoading: true,
      };
    case SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        email: '',
        name: '',
        message: '',
        isLoading: false,
      };
    case SEND_MESSAGE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
