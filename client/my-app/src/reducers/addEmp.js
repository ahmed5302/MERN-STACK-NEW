import {ADD_EMP,DELETE_EMP} from '../actions/types';

const initialState = [];

export default function( state = initialState,action){

    const { type,payload} = action;

    switch(type){

        case ADD_EMP:
        return[
        ...state,payload
        ]; 
        case DELETE_EMP:
        console.log(payload);
        return state.filter( rows => rows.name !== payload);
        default:
        return state;

    }
}