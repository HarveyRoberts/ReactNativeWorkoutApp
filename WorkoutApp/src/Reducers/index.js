import { combineReducers } from 'redux';
/*import AuthReducer from './AuthReducer';*/
import NavReducer from './NavReducer';
import WorkoutsReducer from './WorkoutsReducer';

const AppReducer = combineReducers({
    //All reducers
    /*AuthReducer,*/
    WorkoutsReducer,
    NavReducer
});

export default AppReducer;
