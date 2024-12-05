import React from "react";
import { Link } from 'react-router-dom';
import './SidebarA.css';

const SidebarA=() => {
    return(
        <>
        <div className="sidebar" >
        <div className="logo">
            <img src="images\logo.png" alt="Logo"></img>
        </div>

        <span >|<a href="/">
            <i className="fa-solid fa-house"></i>  Home Page</a>
        </span>

        <br />
        <br />
        <br />
        
        <ul class="h">
           <Link to=""><li><i className="fas fa-user-tie"></i> Teachers</li></Link>  <br />
           <Link to=""><li><i className="fas fa-users"></i> Students</li></Link>   <br />
           <Link to=""><li><i className="fa-solid fa-hand-holding-dollar"></i> Finance</li></Link>   <br />
           <Link to=""><li><i className="fas fa-shuttle-van"></i> Transport</li></Link>  <br />
           <Link to=""><li><i className="fas fa-clipboard-list"></i> Inventory Management</li></Link> 
        </ul>
        <div id="end">
        </div>
        
        < Link to="Log out">
                <i className="fas fa-arrow-left"></i> Log out
        </Link>
    </div>
    </>
    );
};
export default SidebarA;
