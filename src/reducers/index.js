import { combineReducers } from 'redux';
import currentUser from './currentUser';
import toDos from './toDos';
import errors from './errors';

const rootReducer = combineReducers({
  currentUser,
  toDos,
  errors,
});

export default rootReducer;
