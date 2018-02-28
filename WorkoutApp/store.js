import { createStore, applyMiddleware } from 'redux';
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import AppReducer from './src/Reducers';


// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
export const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.NavReducer,
  );
export const addListener = createReduxBoundAddListener('root');


const store = createStore(AppReducer, applyMiddleware(middleware));

export default store;
