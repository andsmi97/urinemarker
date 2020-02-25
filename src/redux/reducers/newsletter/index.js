import {
  SET_SUBSCRIBE_FIELD,
  SUBSCRIBE_START,
  SUBSCRIBE_SUCCESS,
  SUBSCRIBE_FAILURE,
} from './constants';
const defaultState = {
  email: '',
  isLoading: false,
  error: '',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_SUBSCRIBE_FIELD:
      return {
        ...state,
        ...action.payload,
      };
    case SUBSCRIBE_START:
      return {
        ...state,
        isLoading: true,
      };
    case SUBSCRIBE_SUCCESS:
      return {
        ...state,
        email: '',
        isLoading: false,
      };
    case SUBSCRIBE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
