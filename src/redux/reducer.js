import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import common from './reducers/common';
import analyzes from './reducers/analyzes';
import orders from './reducers/orders';

export default history =>
  combineReducers({
    common,
    analyzes,
    orders,
    router: connectRouter(history),
  });
