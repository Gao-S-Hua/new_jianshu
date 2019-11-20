import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import homeReducer from '../components/home/store/homeReducer';

const store = createStore(combineReducers({
    home : homeReducer
}), applyMiddleware(thunk));
export default store;