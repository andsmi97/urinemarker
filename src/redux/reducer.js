import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import common from './reducers/common';
import analyzes from './reducers/analyzes';
import orders from './reducers/orders';
import contactUs from './reducers/contactus';
import newsletter from './reducers/newsletter';

export default history =>
  combineReducers({
    common,
    analyzes,
    orders,
    contactUs,
    newsletter,
    router: connectRouter(history),
  });
