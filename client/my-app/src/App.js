import React ,{Fragment,useEffect}from 'react';
import Login  from './components/login';
import Register  from './components/register';
import Addemp from './components/addEmp';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
import {Provider} from 'react-redux';
import store from './store';
import setAuthToken from './helper/authToken';
// import { userLoaded } from './actions/auth';
import Header from './components/header';
import ViewEmp from './components/viewEmp';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

if(localStorage.token){
  console.log(localStorage.token);
  
  setAuthToken(localStorage.token)
}
const App = ()=> {


  return (  
  <Provider store={store}>  
  <Router>
    <Fragment>
  
    <Header />
    
    <Switch>
  <Route exact path="/login" component={Login}></Route>
  <Route exact path="/register" component={Register}></Route>
  <Route exact path="/addemp" component={Addemp}></Route>
  </Switch>
  <ViewEmp />
  </Fragment>
  
  </Router>
  
  
  </Provider>


  );
}


export default App;