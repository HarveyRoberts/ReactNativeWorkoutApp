import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NavReducer from './NavReducer';

const AppReducer = combineReducers({
    //All reducers
    //Function that returns (not like Vue :p)
    AuthReducer,
    NavReducer
});

export default AppReducer;
