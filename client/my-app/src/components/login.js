import React,{useState} from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import {login} from '../actions/auth';
import PropTypes from 'prop-types';
import {BrowserRouter as Router,Link,useHistory,Redirect} from 'react-router-dom';

const Login = ({login,isAuthenticated})=>{
    const[formList,setFormList] = useState({
       
        name:'',
        password:''
    }); 
    
     const{name,password} = formList;
    const getValue = (e) =>{
        setFormList({ ...formList, [e.target.name] : e.target.value});
        }
        const submitForm = async (e) =>{
            e.preventDefault();
                console.log(name);
                
            login({name,password});
            
        }
        if(isAuthenticated){
            return <Redirect to="/addemp"/>     
        }
        
    return (
        <div>
            <div className="row form  mx-auto loginSec">
                <h4>LOGIN</h4>
            <form onSubmit={(e)=>submitForm(e)}>
                <div>
                <label>Username:</label>
                <input type="text" name="name"  onChange={ (e) =>getValue(e) } value={name} />  
                </div>
                <div>
                <label>Password:</label>
                <input type="password" name="password"  onChange={ (e) =>getValue(e) } value={password}  />  
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                
            </form>
            </div>
            </div>
            
    )
};
Login.propTypes ={
    login :PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool
};
const mapStateToProps = state =>({
    isAuthenticated : state.auth.isAuthenticated
});
export default connect (mapStateToProps,{login})(Login);
