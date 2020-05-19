import {LOGIN_SUCCESS,LOGIN_FAILURE,USER_LOADED,USER_LOADED_FAILED,LOGOUT,ADD_EMP} from '../actions/types';

const initialState = {
    token:localStorage.getItem('token'),
    isAuthenticated : null,
    loading : true,
    user :null,
}

export default function( state = initialState,action){

    const { type,payload} = action;

    switch(type){
        case USER_LOADED:
        return{
            ...state,
            isAuthenticated:true,
            loading:false,
            user:payload
        }
        case LOGIN_SUCCESS:
        localStorage.setItem('token',payload.token);
        return{
            isAuthenticated:true,
            ...state,
            ...payload,
            loading :false
        }
        case LOGIN_FAILURE:
        case USER_LOADED_FAILED:
        case LOGOUT:
        localStorage.removeItem('token');
        return{
            isAuthenticated:false,
            ...state,
            loading :false,
            token:null
        }
        default:
        return state;

    }
}