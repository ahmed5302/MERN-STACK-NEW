import  {combineReducers} from 'redux';
import auth from './auth';
import addEmp from './addEmp';

export default combineReducers({
    auth,addEmp
});