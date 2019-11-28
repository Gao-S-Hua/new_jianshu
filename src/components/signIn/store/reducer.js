import {fromJS} from 'immutable';
import * as ACTION from './constants';
const defaultState = fromJS({
    login : false,
    userID : null,
    nickName : ""
});

const signReducer = (state=defaultState, action) =>{
    switch(action.type){
        case ACTION.LOG_IN : {
            return state.merge({
                login : true,
                userID : action.id,
                nickName : action.nickName
            })
        };
        case ACTION.LOG_OUT : {
            return state.merge({
                login : false,
                userID : "",
                nickName : ""
            })
        }
        
    }
    return state;
}

export default signReducer;