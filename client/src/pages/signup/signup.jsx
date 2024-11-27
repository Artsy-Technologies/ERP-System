
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signup.css';


function Signup(){
    const [email , setemail]=useState();
    const [password , setpassword]=useState();
    const [accountType , setaccountType]=useState('Student');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password){
            alert("email ,password and account type are required");
            return;
        }
       
        
        axios.post('http://localhost:3003/register',{email,password,accountType})
        .then(result => console.log(result))
        .catch(err => console.log(err))
        navigate('/');
        
    };

    
    return(
        <>
        
        <div className="signup">
         <div id="addspace"></div>
        <form id="signform" onSubmit={handleSubmit}>
            <center><h1>Sign up</h1></center>
            <br/>
            <label htmlFor="email">Email : </label>
            <input  id="email" type="email" onChange={(e)=>setemail(e.target.value)}/>
            <br/>
            <label htmlFor="pass">Password : </label>
            <input id="pass" type='password' onChange={(e)=>setpassword(e.target.value)} />
            <br/>
            <label htmlFor='accountType'>Type of account : </label>
           <select name='accountType' value={accountType} onChange={(e)=>setaccountType(e.target.value)}>
            <option value='Student' >Student</option>
            <option value='Teacher'>Teacher</option>
            <option value='Admin'>Admin</option>
           </select>
            <br/>
            <button type="submit">Sign up</button>
        </form>
        <Link to='/'>Login</Link>
        </div>
        </>
    )
}
export default Signup