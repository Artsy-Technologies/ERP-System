
import {Link} from 'react-router-dom';
import React from 'react';
import { useEffect } from 'react';
import './formStyles.css';
import Navbar from '../../components/Homepage/Navbar/navbar.jsx';

export default function FormPage(){
   
    return(
        <>
        <div id="back">
      <Navbar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <center>
        <h1 className="text-white admission">Admissions form</h1>
      </center>
      {/* Form Part 1 */}
      <form action="#">
        <div className="container ac">
          <p>Admissions at Vancouver International School</p>
          <div className="row d-flex justify-content-around align-items-center">
            <div className="col-auto">
              <label className="form-label">Select the branch</label>
              <br />
              <select value="branch" className="form-control" name="option">
                <option value="Coimbatore">Coimbatore</option>
                <option value="Amritapuri">Amritapuri</option>
                <option value="Amritsar">Amritsar</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Mexico">Mexico</option>
              </select>
            </div>
            <div className="col-auto">
              <label className="form-label">Registration number*</label>
              <br />
              <input type="number" id="RegNumber" className="form-control" name="RegNumber" />
              <div id="RegNumError" className="text-danger"></div>
            </div>
            <div className="col-auto">
              <label htmlFor="image" className="form-label">Photo of the student</label>
              <br />
              <input type="file" id="image" className="form-control" name="image" />
              <div id="imageError" className="text-danger"></div>
            </div>
          </div>
        </div>
        <br />
        {/* Form Part 2 */}
        <div className="container ac">
          <div className="row d-flex justify-content-around align-items-center">
            <div className="col-md-3">
              <label className="form-label">First name</label>
              <br />
              <input type="text" id="first_name" className="form-control" name="first_name" />
              <div id="fnameerror" className="text-danger"></div>
            </div>
            <div className="col-md-3">
              <label className="form-label">Middle name</label>
              <br />
              <input type="text" id="middle_name" className="form-control" name="middle_name" />
            </div>
            <div className="col-md-3">
              <label className="form-label">Last name</label>
              <br />
              <input type="text" id="last_name" className="form-control" name="last_name" />
              <div id="lnameerror" className="text-danger"></div>
            </div>
          </div>
          <div className="row d-flex justify-content-around align-items-center">
            <div className="col-md-3">
              <label className="form-label">Gender</label>
              <br />
              <select className="form-control" value="gender" name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label">Date of birth</label>
              <br />
              <input type="date" id="date" className="form-control" name="date" placeholder="dd/mm/yy" />
              <div id="dateerror" className="text-danger"></div>
            </div>
            <div className="col-md-3">
              <label className="form-label">Admission to class</label>
              <br />
              <select value="classes" className="form-control" name="classes">
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th" selected>4th</option>
                <option value="5th">5th</option>
                <option value="6th">6th</option>
                <option value="7th">7th</option>
                <option value="8th">8th</option>
                <option value="9th">9th</option>
                <option value="10th">10th</option>
                <option value="11th">11th</option>
                <option value="12th">12th</option>
              </select>
            </div>
          </div>
        </div>
        <br />
        {/* Form Part 3 */}
        <div className="container ac">
          <p>*Parent/Guardian</p>
          <div className="row g-3 d-flex justify-content-around align-items-center">
            <div className="col-md-3">
              <label className="form-label">Choose Relation</label>
              <br />
              <select className="form-control" value="relation">
                <option value="father" selected>Father</option>
                <option value="mother">Mother</option>
                <option value="guardian">Guardian</option>
                <option value="none">None</option>
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label" id="firstname">First name</label>
              <br />
              <input id="firstname" name="firstname" type="text" className="form-control" />
              <div id="2fnameerror" className="text-danger"></div>
            </div>
            <div className="col-md-3">
              <label className="form-label" id="lastname">Last name</label>
              <br />
              <input id="lastname" name="lastname" type="text" className="form-control" />
              <div id="2lnameerror" className="text-danger"></div>
            </div>
          </div>
          <div className="row d-flex justify-content-around align-items-center">
            <div className="col-md-3">
              <label className="form-label">Phone number</label>
              <br />
              <input id="phone" name="phone" type="text" className="form-control" />
              <div id="2phoneerror" className="text-danger"></div>
            </div>
            <div className="col-md-3">
              <label className="form-label">Email</label>
              <br />
              <input id="email" name="email" type="text" className="form-control" />
              <div id="2emailerror" className="text-danger"></div>
            </div>
          </div>
        </div>
        <br />
        {/* Form Part 4 */}
        <div className="container ac">
          <div className="row d-flex justify-content-around align-items-center">
            <div className="col-md-3">
              <label className="form-label">Address 1*</label>
              <br />
              <input id="address" name="address" type="text" className="form-control" />
              <div id="addresserror" className="text-danger"></div>
            </div>
            <div className="col-md-3">
              <label className="form-label">Address 2*</label>
              <br />
              <input id="address2" name="address2" type="text" className="form-control" />
              <div id="address2error" className="text-danger"></div>
            </div>
            <div className="col-md-3">
              <label className="form-label">City*</label>
              <br />
              <input id="city" name="city" type="text" className="form-control" />
              <div id="cityerror" className="text-danger"></div>
            </div>
            <div className="col-md-3">
              <label className="form-label">State*</label>
              <br />
              <input id="state" name="state" type="text" className="form-control" />
              <div id="stateerror" className="text-danger"></div>
            </div>
          </div>
          <div className="row d-flex justify-content-around align-items-center">
            <div className="col-md-3">
              <label className="form-label">Pin code*</label>
              <br />
              <input id="pin" name="pin" type="text" className="form-control" />
              <div id="pinerror" className="text-danger"></div>
            </div>
          </div>
        </div>
        <br />
        {/* Form Part 5 */}
        <div className="container ac">
          <div className="row d-flex justify-content-around align-items-center">
            <div className="col-md-3">
              <label className="form-label">Medium*</label>
              <br />
              <select className="form-control" value="medium">
                <option selected>English</option>
                <option>Hindi</option>
                <option>Other</option>
              </select>
              <div id="mediumerror" className="text-danger"></div>
            </div>
            <div className="col-md-3">
              <label className="form-label">Student Type*</label>
              <br />
              <select className="form-control" value="type">
                <option selected>Day Scholar</option>
                <option>Hosteller</option>
              </select>
              <div id="typeerror" className="text-danger"></div>
            </div>
            <div className="col-md-3">
              <label className="form-label">Date of Joining*</label>
              <br />
              <input id="doj" name="doj" type="date" className="form-control" />
              <div id="dojerror" className="text-danger"></div>
            </div>
          </div>
        </div>
        <br />
        {/* Form Part 6 */}
        <div className="container ac">
          <div className="row d-flex justify-content-around align-items-center">
            <div className="col-md-3">
              <label className="form-label">Emergency Contact Name</label>
              <br />
              <input id="econtactname" name="econtactname" type="text" className="form-control" />
              <div id="econtactnameerror" className="text-danger"></div>
            </div>
            <div className="col-md-3">
              <label className="form-label">Emergency Contact Phone Number</label>
              <br />
              <input id="econtactphone" name="econtactphone" type="text" className="form-control" />
              <div id="econtactphoneerror" className="text-danger"></div>
            </div>
            <div className="col-md-3">
              <label className="form-label">Emergency Contact Relationship</label>
              <br />
              <input id="econtactrelation" name="econtactrelation" type="text" className="form-control" />
              <div id="econtactrelationerror" className="text-danger"></div>
            </div>
          </div>
        </div>
        <br />
        {/* Form Part 7 */}
        <div className="container ac">
          <p>Have you previously attended this school?</p>
          <div className="row d-flex justify-content-around align-items-center">
            <div className="col-md-3">
              <label className="form-label">Previous School Name</label>
              <br />
              <input id="prevschoolname" name="prevschoolname" type="text" className="form-control" />
            </div>
            <div className="col-md-3">
              <label className="form-label">Previous School Address</label>
              <br />
              <input id="prevschooladdress" name="prevschooladdress" type="text" className="form-control" />
            </div>
          </div>
        </div>
        <br />
        {/* Form Part 8 */}
        <div className="container ac">
          <div className="row d-flex justify-content-around align-items-center">
            <div className="col-md-6">
              <label className="form-label">Select Admission Type*</label>
              <br />
              <select className="form-control" value="admissiontype">
                <option selected>Regular</option>
                <option>Special</option>
              </select>
              <div id="admissiontypeerror" className="text-danger"></div>
            </div>
          </div>
        </div>
        <br />
        <div className="text-center">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
    
        </>
    )
}