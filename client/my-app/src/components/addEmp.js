import React,{useState} from 'react'
import axios from 'axios';

import {connect} from 'react-redux';
import {addEmp} from '../actions/auth';
import PropTypes from 'prop-types';
import {BrowserRouter as Router,Link,useHistory,Redirect} from 'react-router-dom';
import ViewEmp from './viewEmp';

const Addemp = ({addEmp })  =>{
    const[formList,setFormList] = useState({
        empid:'',
        name:'',
        age:'',
        email:'',
        address:'',
        mobile:'',
        password:''
    }); 
   
   

    
    const{empid,name,age,email,address,mobile,password} = formList;
    const getValue = (e) =>{
        setFormList({ ...formList, [e.target.name] : e.target.value});
        }
     const submitForm = async (e) =>{
            e.preventDefault();
            
            
            const User = {
                empid,
                name,
                age,
                email,
                address,
                mobile,
                password
                }
            addEmp(User);
           
           document.getElementById('empid').value='';
           document.getElementById('name').value='';
           document.getElementById('age').value='';
           document.getElementById('email').value='';
           document.getElementById('address').value='';
           document.getElementById('mobile').value='';
           document.getElementById('password').value='';

        }

        
    return (
        <div>
            <div className="row form  mx-auto  empform">
            <h4>ADD EMPLOYEE</h4>
            <form onSubmit={(e)=>submitForm(e)} id="myForm"> 
            <div>
                <label>Emp ID</label>
                <input type="text" name="empid"  id="empid" onChange={ (e) =>getValue(e) } value={empid} required/>  
                </div>
                <div>
                <label>Name</label>
                <input type="text" name="name" id="name" onChange={ (e) =>getValue(e) } value={name} required/>  
                </div>
                <div>
                <label>Salary:</label>
                <input type="number" name="age" id="age" onChange={ (e) =>getValue(e) } value={age} required/>  
                </div>
                <div>
                <label>Email:</label>
                <input type="email" name="email" id="email" onChange={ (e) =>getValue(e) } value={email}  required/>  
                </div>
                <div>
                <label>Address:</label>
                <input type="textbox" name="address" id="address" onChange={ (e) =>getValue(e) } value={address} required /> 
                </div>
                <div>
                <label>Mobile:</label>
                <input type="number" name="mobile"  id="mobile" onChange={ (e) =>getValue(e) } value={mobile}  required/>  
                </div>
                <div>
                <label>Password</label>
                <input type="password" name="password" id="password"  onChange={ (e) =>getValue(e) } value={password} required/>  
                </div>
                <div className="w-100 d-block">
                <button type="submit" className="btn btn-primary">Add Employee</button>
                </div>

            </form>
            </div>
            
        </div>
    )
}
Addemp.propTypes ={
    addEmp :PropTypes.func.isRequired
};
export default connect (null,{addEmp})(Addemp);
