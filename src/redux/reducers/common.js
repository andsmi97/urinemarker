import {
  APP_LOAD,
  REDIRECT,
  LOGOUT,
  LOGIN,
  SNACK_STATUS_CLOSE,
  SNACK_STATUS_OPEN,
  SET_CURRENT_USER,
} from '../constants/actionTypes';
import firestoreQueries from '../../firebase/firestoreQueries';
import agent from '../../agent';
const defaultState = {
  appLoaded: false,
  token: null,
  currentUser: null,
  viewChangeCounter: 0,
  redirectTo: null,
  snackStatus: false,
  snackType: null,
  snackMessage: null,
  error: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        appLoaded: true,
      };
    case SET_CURRENT_USER:
      agent.setToken(action.payload.token);
      firestoreQueries.setCurrentUser(action.payload);
      return { ...state, currentUser: action.payload };
    case REDIRECT:
      return { ...state, redirectTo: null };
    case LOGOUT:
      return { ...state, redirectTo: '/', token: null, currentUser: null };
    case LOGIN:
      return {
        ...state,
        redirectTo: action.error ? null : '/',
        token: action.error ? null : action.payload.user.token,
        currentUser: action.error ? null : action.payload.user,
      };
    case SNACK_STATUS_CLOSE:
      return { ...state, snackStatus: false };
    case SNACK_STATUS_OPEN:
      return {
        ...state,
        snackStatus: action.payload.status,
        snackType: action.payload.type,
        snackMessage: action.payload.message,
      };
    default:
      return state;
  }
};
