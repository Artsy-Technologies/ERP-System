import React, { useState } from 'react';
import './sub_payment.css';
import { Link } from 'react-router-dom';

const sub_payment=() =>{
    return(
<div className="payment-container">
    <form className="payment-form">
        <div className="form-section">
            <div className="form-group">

               <Link to="/Payment" style={{color:"black",fontSize:"16px"}}>
                    <i className="fas fa-arrow-left"></i> Back
                </Link>
                
                <br></br>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Melissa Peters"></input>
            </div>
            <div className="form-group">
                <label htmlFor="class">Class</label>
                <input type="text" id="class"></input>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="melpeters@gmail.com"></input>
            </div>
            <div className="form-group">
                <label htmlFor="roll-number">Roll Number</label>
                <input type="text" id="roll-number"></input>
            </div>
            <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" id="dob"></input>
            </div>
            <div className="form-group">
                <label htmlFor="parent-name">Parent Name</label>
                <input type="text" id="parent-name"></input>
            </div>
            <div className="form-group">
                <label htmlFor="parent-contact">Parent Contact No</label>
                <input type="text" id="parent-contact"></input>
            </div>
            <div className="fees-summary">
                <p>Tuition Fee: <span>$160.00</span></p>
                <p>Hostel/Bus Fee: <span>$4.23</span></p>
                <p>Total Due: <strong>$164.23</strong></p>
            </div>
        </div>
        <div className="payment-method-section">
            <h3>Payment Methods</h3>
            <div className="payment-method">
                <input type="radio" id="credit-card" name="payment-method" checked></input>
                <label htmlFor="credit-card">Credit/Debit Cards</label>
                <div className="card-details">
                    <input type="text" placeholder="Card number"></input>
                    <input type="text" placeholder="MM / YY"></input>
                    <input type="text" placeholder="CVV"></input>
                </div>
            </div>
            <div className="payment-method">
                <input type="radio" id="bank-transfer" name="payment-method"></input>
                <label htmlFor="bank-transfer">Direct Bank Transfer</label>
            </div>
            <div class="payment-method">
                <input type="radio" id="other-payment" name="payment-method"></input>
                <label htmlFor="other-payment">Other Payment Methods</label>
            </div>
            <div className="coupon-code">
                <label htmlFor="coupon">Enter Coupon Code if available</label>
                <input type="text" id="coupon" placeholder="coupon code"></input>
                <button type="button">Redeem</button>
            </div>
            <button type="submit" className="pay-button">Pay $164.23</button>
        </div>
    </form>
</div>
    );
}

export default sub_payment;