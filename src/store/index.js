import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import homeReducer from '../components/home/store/homeReducer';
import userReducer from '../components/signIn/store/reducer';

const store = createStore(combineReducers({
    home : homeReducer,
    user : userReducer
}), applyMiddleware(thunk));
export default store;