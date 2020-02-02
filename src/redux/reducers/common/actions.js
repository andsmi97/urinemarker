import {
  CLOSE_SNACKBAR,
  OPEN_SNACKBAR,
  APP_LOAD,
  SET_CURRENT_USER,
  SIGN_OUT,
  SIGN_UP,
  AUTH_IN_PROGRESS,
  REDIRECT,
} from './constants';
import { auth } from '../../../firebase/utils';
export const onUserChange = user => dispatch => {
  dispatch({
    type: SET_CURRENT_USER,
    payload: user,
  });
  dispatch(loadApp());
};

export const loadApp = () => ({ type: APP_LOAD });

export const openSnack = ({ type, message }) => ({
  type: OPEN_SNACKBAR,
  payload: { type, message },
});

export const closeSnack = () => ({ type: CLOSE_SNACKBAR });

export const signOut = () => async dispatch => {
  await auth.signOut();
  dispatch({ type: SIGN_OUT });
};

export const signIn = ({ email, password }) => async dispatch => {
  dispatch(authInProgress(true));
  try {
    await auth.signInWithEmailAndPassword(email, password);
    dispatch(redirect('/'));
    dispatch(authInProgress(false));
  } catch (e) {
    dispatch(authInProgress(false));
  }
  return {};
};

export const signUp = user => ({ type: SIGN_UP, payload: user });

export const authInProgress = status => ({
  type: AUTH_IN_PROGRESS,
  authInProgress: status,
});

export const redirect = redirectTo => ({ type: REDIRECT, redirectTo });
