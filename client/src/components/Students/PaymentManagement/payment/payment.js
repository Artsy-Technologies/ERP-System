import React from 'react';
import { Link } from 'react-router-dom';
import './Payment.css';
import sub_payment from '../sub_payment/sub_payment';

function Payment() {
    return(
        <div className="main-content">
          <div className="content container-fluid p-0">
      <div className="heading-container d-flex justify-content-start align-items-left mb-4">
        <h3 className="mb-0">
          <i className="fas fa-chevron-left"></i>PAYMENT MANAGEMENT
        </h3>
      </div>
     </div>
        
        <div className="t">
            <div className="top-section">
                <div className="image-container"> 
                    <img id="pay_image" src={require('../../../../assets/Images/image_10.png')} alt="Payment Image"></img>
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