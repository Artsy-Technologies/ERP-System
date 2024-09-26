
import logo from "../../assets/Images/HomePage/logo.png";
import './teacher.css';
import {Link} from 'react-router-dom';
function Sidebar(){
    return(
        <>
        <div className="sidebar" id="sidebar">
            <div className="logo">
                <img src={logo} alt="Logo" width='100%' />
            </div>

            <span >|<a href="#">
                <i className="fa-solid fa-house"></i>  Home Page</a>
            </span>

            <br/><br/><br/>
            <p>FACULTY</p>
        <ul class="h">
            <li><a href="#">Faculty Profile</a></li>
            <li><a href="#">Faculty Leave Application</a></li>
           
        </ul>
<br/><br/>
        <p>STUDENT RELATED</p>
        <br/>
        <ul class="h">
           
            <li><a href="#">Virtual Class</a></li>
            <li><a href="#">Attendance Management</a></li>
            <li><a href="#">Exam Room Allocation</a></li>
            <li><a href="#">Student Report Card</a></li>
            <li><a href="#">Schedule Management</a></li>
            <li><a href="#">Student Assignments</a></li>
        </ul>
            <br/><br/>
            <span>
                <Link to="/">
                    <i className="fas fa-arrow-left"></i> Log out
                </Link>
            </span>
    </div>
    <button className="toggle-btn" id="toggle-btn"><i className="fa-solid fa-bars"></i></button>
        </>
    )
}
export default Sidebar