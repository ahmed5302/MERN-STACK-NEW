import React from 'react'
import {BrowserRouter as Router,Link,useHistory,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../actions/auth';
import PropTypes from 'prop-types';


const Header = ({isAuthenticated,logout}) =>{  
  
    const toLogin = (e) =>{ 
        console.log("onju");
   
        logout();
      
    }
    if( isAuthenticated){
        return (
            <div>
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
  <ul className="navbar-nav ml-auto">
    <li className="nav-item">
      <a className="nav-link" href="/login" onClick={ (e) => toLogin(e)}>Logout</a>
      

    </li>
  </ul>
</nav>

        
        </div>
        )
    } 
    return (
       <div></div>
    )
    
}
Header.propTypes ={
    logout:PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool

};
const mapStateToProps = state => ({
    isAuthenticated : state.auth.isAuthenticated
});
export default connect (mapStateToProps,{logout})(Header);