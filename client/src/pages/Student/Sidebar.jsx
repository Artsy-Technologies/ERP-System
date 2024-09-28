
import logo from "../../assets/Images/HomePage/logo.png";
import './style.css';
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
            <p>ACADEMICS </p>
            <ul className="h">
                <li><a href="#">Student Profile</a></li>
                <li><a href="#">Attendance Management</a></li>
                <li><a href="#">Timetable And Schedule</a></li>
                <li><a href="#">Grade And Report Card</a></li>
                <li><a href="#">Digital Library</a></li>
                <li><a href="#">Exam Alerts</a></li>
                <li><a href="#">Virtual Classes</a></li>
                <li><a href="#">Doubt Clearance</a></li>
                <li><a href="#">Assignments</a></li>
            </ul>

            <p>SERVICES</p>
            <ul className="h">
                <li><a href="#">Payment Management</a></li>
                <li><a href="#">Faculty Feedback</a></li>
            </ul>
            <br/><br/>
            <span>
                <Link to='/'>
                    <i className="fas fa-arrow-left"></i> Log out
                </Link>
            </span>
    </div>
    <button className="toggle-btn" id="toggle-btn"><i className="fa-solid fa-bars"></i></button>
        </>
    )
}
export default Sidebar