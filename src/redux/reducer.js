import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import common from './reducers/common';
import analyzes from './reducers/analyzes';

export default history =>
  combineReducers({
    common,
    analyzes,
    router: connectRouter(history),
  });
