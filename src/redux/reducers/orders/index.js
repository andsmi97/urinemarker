import {
  CREATE_ORDER_START,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
} from './constants';

const defaultState = {
  isFetching: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_ORDER_START:
      return { ...state, isFetching: true };
    case CREATE_ORDER_SUCCESS:
    case CREATE_ORDER_FAILURE:
      return { ...state, isFetching: false };
    default:
      return state;
  }
};
