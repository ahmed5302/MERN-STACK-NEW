import React,{useState} from 'react'
import axios from 'axios';
import {BrowserRouter as Router,Link,useHistory} from 'react-router-dom';

export default function Register() {
    const[formList,setFormList] = useState({
        empid:'',
        name:'',
        password:''
    }); 
    let history = useHistory();
     const{empid,name,password} = formList;
    const getValue = (e) =>{
        setFormList({ ...formList, [e.target.name] : e.target.value});
        
        
        }
        const submitForm = async (e) =>{
            e.preventDefault();
            

            const User = {
                empid,
                name,
                password
            }
            
            try{

                const config = {
                    headers : {
                        'Content-Type':'application/json'
                    }
                }
                
                
                const body = JSON.stringify(User);
                const res = await  axios.post('http://localhost:5000/user',body,config);
                console.log(res.data);
                // Router.browserHistory.push('/register');
                if(res.data.empid == empid){
                    history.push('/')
                }
                
            }
            catch(err){
                console.error(err.response.data)
            }
        }

        
    return (
        <div>
            <form onSubmit={(e)=>submitForm(e)}>
                <div>
                <label>Emp ID:</label>
                <input type="text" name="empid"  onChange={ (e) =>getValue(e) } value={empid} />  
                </div>
                <div>
                <label>Username:</label>
                <input type="text" name="name"  onChange={ (e) =>getValue(e) } value={name} />  
                </div>
                <div>
                <label>Password:</label>
                <input type="password" name="password"  onChange={ (e) =>getValue(e) } value={password}  />  
                </div>
                <button type="submit">Register</button>
                <div>

                    <Link to="/">Login</Link>
                </div>
                
            </form>
        </div>
    )
}
