import { combineReducers } from 'redux';
import coordsReducer from './coordsReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    coords: coordsReducer,
    auth: authReducer,
});

export default rootReducer;