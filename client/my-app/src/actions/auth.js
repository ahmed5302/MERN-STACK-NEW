import axios from 'axios';
import {LOGIN_SUCCESS,LOGIN_FAILURE,USER_LOADED,USER_LOADED_FAILED, LOGOUT,ADD_EMP,DELETE_EMP} from './types';
import setAuthToken from '../helper/authToken';

export const userLoaded = () =>async dispatch => {
     if(localStorage.token){
        setAuthToken(localStorage.token);
        
     }
     
     try{
         
         
        const res = await axios.get('http://localhost:5000/auth');
        console.log(res);
        
        dispatch({
            type:USER_LOADED,
            payload:res.data
        });
     }
     catch(err){
        dispatch({
            type:USER_LOADED_FAILED
        });
     }
}

 export const login = ({name,password}) => async dispatch =>{
     
    const config = {
        headers : {
            'Content-Type':'application/json'
        }
    }
    
   
    const body = JSON.stringify({name,password});
    try{
        
        const res = await  axios.post('http://localhost:5000/auth',body,config);
        
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        });
        dispatch(userLoaded());
    }
    catch(err){
        console.error(err.response.data);
        dispatch({
            type:LOGIN_FAILURE
        });

    }

 } 
 export const  addEmp = (User) => async dispatch =>{
     
    const config = {
        headers : {
            'Content-Type':'application/json'
        }
    }
    
   
    const body = JSON.stringify(User);
    try{
        
        const res = await  axios.post('http://localhost:5000/addemp',body,config);
        
        console.log(res.data.user);
        
        dispatch({
            type:ADD_EMP,
            payload:res.data.user
        });
        // dispatch(userLoaded());
    }
    catch(err){
        console.error(err.response.data);
        // dispatch({
        //     type:LOGIN_FAILURE
        // });

    }

 } 
 export const logout = () => dispatch =>{
     dispatch({type:LOGOUT});
 }
 export const delRow = (name) => dispatch =>{
     console.log(name);
    dispatch({type:DELETE_EMP,
        payload:name
    });
}