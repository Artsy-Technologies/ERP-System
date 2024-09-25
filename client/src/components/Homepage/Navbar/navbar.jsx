
import { useState } from "react";
import logo from '../../../assets/HomePage/logo.png';
import './navbarStyle.css';
import {Link} from 'react-router-dom';

import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Navbar(){
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [accountType , setaccountType]=useState('Student')
    const validateForm = () => {
      let valid = true;
      const email = document.getElementById('email');
      const password = document.getElementById('password');

      document.getElementById('emailerror').innerText = '';
      document.getElementById('passerror').innerText = '';
      email.classList.remove('error', 'success');
      password.classList.remove('error', 'success');

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value)) {
          document.getElementById('emailerror').innerText = 'Please enter a valid email address.';
          email.classList.add('error');
          valid = false;
      } else {
          email.classList.add('success');
      }

      if (password.value.length < 6) {
          document.getElementById('passerror').innerText = 'Password must be at least 6 characters long.';
          password.classList.add('error');
          valid = false;
      } else {
          password.classList.add('success');
      }

      return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (validateForm()) {
        try {
            const response = await axios.post('http://localhost:3002/login', { email, password, accountType });
            const { message, redirectTo } = response.data;

            if (message === 'Success') {
                navigate(redirectTo);
            } else {
                alert(message); 
            }
        } catch (error) {
            console.error('Login error:', error); 
        }
    }
};

    return(
        <>
        <nav>
    <div id="parentdiv">
      <img src={logo} alt="logo" className="img-fluid" width="350px"/>
      
    
        <div id="childdiv">
        
          
            <Link aria-current="page" to="/">Home</Link>
          
          
            <a href="#academics">Academics</a>
          
          
            <a  href="#about">About Us</a>
          
          
            <a href="#activities">Activities</a>
          
          
            <a href="#contact">Contact</a>
            <Link to='/signup'><button className="btn btn-light">Sign up</button></Link>
            <button className="btn btn-light" type="button" onClick={() => setShowModal(true)}>
            Login
        </button>
          
      </div>
    </div>
  </nav>
  <div className={`modal fade ${showModal ? 'show' : ''}`} id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden={!showModal} style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">Login</h5>
              <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form id="myform" onSubmit={handleSubmit}>
                <label className="form-label" htmlFor="email">Email</label>
                <input className="form-control" id="email" name="email" type="email" placeholder="@gmail.com" onChange={(e)=>setemail(e.target.value)}/>
                <div id="emailerror" className="text-danger"></div>
                <br/>
                <label className="form-label" htmlFor="accountType">Type of account</label>
                <select name='accountType' value={accountType} onChange={(e)=>setaccountType(e.target.value)}>
                    <option value='Student' >Student</option>
                    <option value='Teacher'>Teacher</option>
                    <option value='Admin'>Admin</option>
                </select>
                <br />
                <label className="form-label" htmlFor="password">Password</label>
                <input className="form-control" id="password" name="password" type="password" autoComplete='current-password' onChange={(e)=>setpassword(e.target.value)}/>
                <div id="passerror" className="text-danger"></div>
                <a className="d-flex float-end" href="#">Forgot password</a>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
              <button type="submit" className="btn btn-primary" form="myform">Login</button>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default Navbar