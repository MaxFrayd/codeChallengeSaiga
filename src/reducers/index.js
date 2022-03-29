import { combineReducers } from 'redux';
import currentUser from './currentUser';
import toDos from './toDos';

const rootReducer = combineReducers({
  currentUser,
  toDos,
});

export default rootReducer;
