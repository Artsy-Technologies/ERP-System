import React from 'react';
import './StudentDetails.css'; // Make sure the CSS file is linked
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Search from '../../../assets/icons/search.png';
import Profile from '../../../assets/icons/student.jpeg';

const students = [
  {
    name: 'Tara V',
    id: '#123456789',
    date: 'March 25, 2021',
    parentName: 'Mona William',
    city: 'Jakarta',
    grade: 'VII A',
  },
  {
    name: 'Tony Soap',
    id: '#123456789',
    date: 'March 25, 2021',
    parentName: 'James Soap',
    city: 'Jakarta',
    grade: 'VII A',
  },
  {
    name: 'Karen Hope',
    id: '#123456789',
    date: 'March 25, 2021',
    parentName: 'Justin Hope',
    city: 'Jakarta',
    grade: 'VII A',
  },
  {
    name: 'Jordan Nico',
    id: '#123456789',
    date: 'March 25, 2021',
    parentName: 'Amanda Nico',
    city: 'Jakarta',
    grade: 'VII A',
  },
  {
    name: 'Nadila Adja',
    id: '#123456789',
    date: 'March 25, 2021',
    parentName: 'Jack Adja',
    city: 'Jakarta',
    grade: 'VII A',
  },
  {
    name: 'Johnny Ahmad',
    id: '#123456789',
    date: 'March 25, 2021',
    parentName: 'Danny Ahmed',
    city: 'Jakarta',
    grade: 'VII A',
  },
];

const StudentDetails = () => {
  return (
    <div className="student-details-table">
        <img src={Search} alt="parent" style={{ width: '20px', height: '20px', position: 'absolute', left: '25px',top:'25px' }} />
      <input type="text" placeholder="Search here...." className="search-input" />
      <button className="add-student-btn">+ New Student</button>
      <div className="table-wrapper">
        <table className="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Date</th>
              <th>Parent Name</th>
              <th>City</th>
              <th>Contact</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={Profile}
                    alt="profile"
                    className="profile-pic"
                  />{' '}
                  {student.name}
                </td>
                <td className="green-text">{student.id}</td>
                <td>{student.date}</td>
                <td className="green-text">{student.parentName}</td>
                <td>{student.city}</td>
                <td>
                  <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                  <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                </td>
                <td>
                  <span className="grade-badge">{student.grade}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        Showing 1-5 from 100 data
      </div>
    </div>
  );
};

export default StudentDetails;



/**  html css code
<!DOCTYPE html>
<html>
    <head>
        <title>Student details Page</title>
    </head>
    <body style="font-family:Arial, Helvetica, sans-serif">
        <div>
            <div style="font-size: 20px;color: gray">
                <p>Student Details</p>
            </div>
            <div style="position: relative;border-radius: 5px; border: 3px solid rgb(202, 201, 201); width:900px; height:600px">
                <div style="display:flex; flex-direction: row; justify-content: end;">
                    <div style="position: absolute; top:15px;left:20px">
                        <img src="icons/search.png" style="height: 20px;margin-top: 5px;">
                        <input style="height: 20px;border-color: transparent; " placeholder="Search here....">
                    </div>
                    <div >
                        <button style="position: absolute;top:20px;right: 30px; border-radius: 20px; padding: 8px 20px 8px 20px; background-color:rgb(111, 31, 187);color: white;border-color: transparent;">
                            <span style="font-weight: bold;">+ </span> New Student
                        </button>
                    </div>
                </div>
                <div style=" position:absolute; border:3px solid rgb(196, 190, 190);bottom:50px; border-radius: 20px; top:90px; left:20px; right:20px;font-size: 12px; font-family: Arial;display: grid; grid-template-rows: 1fr 70px;">
                    <div style=" display: flex; flex-direction: row;justify-content: space-between;margin-left: 50px;margin-right: 50px;">
                        <div style="display: flex; flex-direction: column;justify-content: space-around;margin-left: 10px;align-items: left;color:rgb(53, 160, 53);font-weight: bold;">
                                <div style="color: black;">
                                    <p>Name </p>
                                </div>                        
                                <div style="display:flex; flex-direction:row; align-items: center;">
                                    <div><img src="icons/student.jpeg" style="height: 30px; border-radius: 100%;width: 30px;margin-right: 10px;"></div>
                                    <div>Tara V</div>
                                </div>
                                <div style="display: flex; flex-direction: row; align-items: center;">
                                    <div><img src="icons/student.jpeg" style="height: 30px; border-radius: 100%;width: 30px;margin-right: 10px;"></div>
                                    <div>Tony Soap</div>
                                </div>
                                <div style="display: flex; flex-direction: row; align-items: center;">
                                    <div><img src="icons/student.jpeg" style="height: 30px; border-radius: 100%;width: 30px;margin-right: 10px;"></div>
                                    <div>Karen Hope</div>
                                </div>
                                <div style="display: flex; flex-direction: row; align-items: center;">
                                    <div><img src="icons/student.jpeg" style="height: 30px; border-radius: 100%;width: 30px;margin-right: 10px;"></div>
                                    <div>Jordan Nico</div>
                                </div>
                                <div style="display: flex; flex-direction: row; align-items: center;">
                                    <div><img src="icons/student.jpeg" style="height: 30px; border-radius: 100%;width: 30px;margin-right: 10px;"></div>
                                    <div>Nadila Adja</div>
                                </div>
                                <div style="display: flex; flex-direction: row; align-items: center;">
                                    <div><img src="icons/student.jpeg" style="height: 30px; border-radius: 100%;width: 30px;margin-right: 10px;"></div>
                                    <div> Johnny Ahmad</div>
                                </div>                                              
                        </div>                    
                        <div style="display: flex; flex-direction: column;justify-content: space-around;margin-left: 10px;align-items: left;color:rgb(35, 175, 35);font-weight: bold">
                            <p style="color: black;">ID </p>
                            <p>#123456789</p>
                            <p>#123456789</p>
                            <p>#123456789</p>
                            <p>#123456789</p>
                            <p>#123456789</p>
                            <p>#123456789</p>                       
                        </div>
                        <div style="display: flex; flex-direction: column;justify-content: space-around;margin-left: 10px;align-items:left;color:rgb(86, 84, 84);font-weight: bold">
                            <p style="color: black;">Date </p>
                            <p>March 25, 2021</p>
                            <p>March 25, 2021</p>
                            <p>March 25, 2021</p>
                            <p>March 25, 2021</p>
                            <p>March 25, 2021</p>
                            <p>March 25, 2021</p>                      
                        </div>
                        <div style="display: flex; flex-direction: column;justify-content: space-around;margin-left: 10px;align-items:left;color:rgb(4, 185, 4);font-weight: bold;">
                                <p style="color: black;">Parent Name</p>
                                <p>Mona William</p>
                                <p>James Soap</p>
                                <p>Justin Hope</p>
                                <p>Amarnda Nico</p>
                                <p>Jack Adja</p>
                                <p>Danny Ahmed</p>
                        </div>
                        <div style="display: flex; flex-direction: column;justify-content: space-around;margin-left: 10px;align-items: left;color:green;font-weight: bold">
                            <p style="color: black;">City</p>
                            <p>Jakarta</p>
                            <p>Jakarta</p>
                            <p>Jakarta</p>
                            <p>Jakarta</p>
                            <p>Jakarta</p>
                            <p>Jakarta</p>
                        </div>
                        <div style="display: flex; flex-direction: column;justify-content: space-around;margin-left: 10px;align-items: left;color:green;font-weight: bold">
                            <p style="color: black;margin-top: 3px;">Contact</p>
                            <div style="display:flex; flex-direction:row; align-items: center;">
                                <div><img src="icons/contact.png" style="height: 20px; border-radius: 100%;width: 20px;margin-right: 10px;"></div>
                                <div><img src="icons/mail.png" style="height: 20px; border-radius: 100%;width: 20px;margin-right: 10px;"></div>
                            </div>
                            <div style="display:flex; flex-direction:row; align-items: center;">
                                <div><img src="icons/contact.png" style="height: 20px; border-radius: 100%;width: 20px;margin-right: 10px;"></div>
                                <div><img src="icons/mail.png" style="height:20px; border-radius: 100%;width: 20px;margin-right: 10px;"></div>
                            </div>
                            <div style="display:flex; flex-direction:row; align-items: center;">
                                <div><img src="icons/contact.png" style="height: 20px; border-radius: 100%;width: 20px;margin-right: 10px;"></div>
                                <div><img src="icons/mail.png" style="height: 20px; border-radius: 100%;width: 20px;margin-right: 10px;"></div>
                            </div>
                            <div style="display:flex; flex-direction:row; align-items: center;">
                                <div><img src="icons/contact.png" style="height: 20px; border-radius: 100%;width: 20px;margin-right: 10px;"></div>
                                <div><img src="icons/mail.png" style="height: 20px; border-radius: 100%;width: 20px;margin-right: 10px;"></div>
                            </div>
                            <div style="display:flex; flex-direction:row; align-items: center;">
                                <div><img src="icons/contact.png" style="height: 20px; border-radius: 100%;width: 20px;margin-right: 10px;"></div>
                                <div><img src="icons/mail.png" style="height: 20px; border-radius: 100%;width: 20px;margin-right: 10px;"></div>
                            </div>
                            <div style="display:flex; flex-direction:row; align-items: center;">
                                <div><img src="icons/contact.png" style="height: 20px; border-radius: 100%;width: 20px;margin-right: 10px;"></div>
                                <div><img src="icons/mail.png" style="height: 20px; border-radius: 100%;width: 20px;margin-right: 10px;"></div>
                            </div>
                           
                        </div>
                        <div style="display: flex; flex-direction: column;justify-content: space-around;margin-left: 10px;align-items: left;color:green;font-weight: bold;margin-right: 10px;">
                            <p style="color: black;">Grade</p>
                            <button style="color: white; background-color: rgb(73, 209, 42); font-size: 12px; width:60px; height: 25px; border-color:transparent; border-radius: 20px; margin-bottom: 12px">VII A</button>
                            <button style="color: white; background-color: rgb(73, 209, 42); font-size: 12px; width:60px; height: 25px; border-color:transparent; border-radius: 20px; margin-bottom: 12px">VII A</button>
                            <button style="color: white; background-color: rgb(73, 209, 42); font-size: 12px; width:60px; height: 25px; border-color:transparent; border-radius: 20px; margin-bottom: 12px">VII A</button>
                            <button style="color: white; background-color: rgb(73, 209, 42); font-size: 12px; width:60px; height: 25px; border-color:transparent; border-radius: 20px; margin-bottom: 12px">VII A</button>
                            <button style="color: white; background-color: rgb(73, 209, 42); font-size: 12px; width:60px; height: 25px; border-color:transparent; border-radius: 20px; margin-bottom: 12px">VII A</button>
                            <button style="color: white; background-color: rgb(73, 209, 42); font-size: 12px; width:60px; height: 25px; border-color:transparent; border-radius: 20px; margin-bottom: 12px">VII A</button>
                            
                        </div>
                    </div>
                    <div>
                        <div style="margin: 35px 0px 0px 20px;color: rgb(104, 101, 101);">
                            <p>Showing 1-5 from 100 data</p>
                        </div>
                        <div></div>
                    </div>                    
                </div>
            </div>
        </div>
    </body>
</html>

 */