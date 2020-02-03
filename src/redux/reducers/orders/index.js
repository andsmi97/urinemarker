import {
  CREATE_ORDER_START,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  CHANGE_FIELD,
  CHANGE_PURCHASE_FORM_STATUS,
} from './constants';

const defaultState = {
  isFetching: false,
  phoneNumber: '',
  name: '',
  amount: 1,
  purchaseFormStatus: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_ORDER_START:
      return { ...state, isFetching: true };
    case CREATE_ORDER_SUCCESS:
    case CREATE_ORDER_FAILURE:
      return { ...state, isFetching: false };
    case CHANGE_FIELD:
      return { ...state, ...action.payload };
    case CHANGE_PURCHASE_FORM_STATUS:
      return { ...state, purchaseFormStatus: action.payload };
    default:
      return state;
  }
};
