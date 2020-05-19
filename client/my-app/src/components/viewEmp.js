import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {delRow} from '../actions/auth';
import {BrowserRouter as Router,Link,useHistory} from 'react-router-dom';



const ViewEmp = ({listEmp,isAuthenticated,delRow}) => {
    const deleteRow = (name) =>{
      delRow(name)
        
    }
    
    if(isAuthenticated){    
    return <div className ="tableSec">
        <table className="table table-dark table-striped">
            <tr>
                <th>Name</th>
                <th>Salary</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Action</th>
                <th></th>
            </tr>
            <tbody>{ listEmp !==null && listEmp.length > 0 && listEmp.map(list => (
                <tr key={list.id}>
                <td><input type="text" name="name" value={list.name} /></td>
                <td><input type="number" name="age" value={list.age} /></td>
                <td><input type="email" name="name" value={list.email} /></td>
                <td><input type="number" name="name" value={list.mobile} /></td>
                <td><button className="btn btn-primary">Edit</button></td>
                <td><button className="btn btn-danger" onClick={ () => deleteRow(list.name)}>Delete</button></td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
    
            }
            else{
                return<div></div>
            }
        }


ViewEmp.propTypes ={
    listEmp:PropTypes.array.isRequired,
    isAuthenticated:PropTypes.bool,
    delRow:PropTypes.func.isRequired
};
const mapStateToProps = state =>({
    listEmp:state.addEmp,
    isAuthenticated:state.auth.isAuthenticated,
});

export default connect(mapStateToProps,{delRow})(ViewEmp);