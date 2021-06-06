import { combineReducers } from 'redux';
import homeReducer from './reducers/reducer';

export default combineReducers({
    data: homeReducer
});