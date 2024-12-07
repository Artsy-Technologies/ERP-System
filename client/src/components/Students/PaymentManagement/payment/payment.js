import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Payment.css';

function Payment() {
    return(
        <div className="main-content">
        <h3><i className="fas fa-chevron-left"></i> PAYMENT MANAGEMENT</h3>
        
        <div className="t">
            <div className="top-section">
                <div>
                    <img id="pay_image" src="images/image_10.png" alt="Payment Image"></img>
                </div>
                <div className="buttons-top">
                    <button>History</button>
                    <button>Current Dues</button>
                </div>
            </div>

            <div className="bottom-section">
               <Link to="/sub_payment"> <button>Tution Fee</button></Link>
               <Link to="/sub_payment"> <button>Hostel Fee</button></Link>
               <Link to="/sub_payment"><button>Caution Deposits</button></Link> 
               <Link to="/sub_payment"><button>Scholarships</button></Link>
               <Link to="/sub_payment"><button>Bus Fee</button></Link>
               <Link to ="/sub_payment"><button>Fines</button></Link>
            </div>
        </div>
    </div>

    );

};
export default Payment;