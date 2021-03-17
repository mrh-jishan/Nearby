import { combineReducers } from 'redux';
import authReducer from './authReducer';
import coordsReducer from './coordsReducer';
import exploreReducer from './exploreReducer';

const rootReducer = combineReducers({
    coords: coordsReducer,
    auth: authReducer,
    explore: exploreReducer,
});

export default rootReducer;