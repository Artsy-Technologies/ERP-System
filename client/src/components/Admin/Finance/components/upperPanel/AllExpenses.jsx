import React from 'react';
import { Card } from '../../../Dashboard/components/mainComponents/ShowingAssets';
import Graph from './Graph';

const AllExpenses = () => {


  return (
    <div style={{ borderRadius: '15px' , width: "60%", height: 'min-content' , boxShadow:'0 2px 2px rgba(0, 0, 0, 0.151)' , border:"1px solid #C1C1C1" , padding:".5rem" }} className=" " >

      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="d-flex justify-content-between align-items-center p-2 ">
          <h6>All Expenses</h6>
          <button style={{width:"max-content"}} className="d-flex align-items-center px-3 py-1 border rounded">
            <span className="mr-2">6 Month</span>
            <span>📅</span>
          </button>
        </div>

        <div className='d-flex ' >
          <div style={{ width: '70%' }} >
            <Graph />
            <div style={{ margin: '1rem 0', width: '95%' }} className="d-flex justify-content-around ">
              <div className="text-center">
                <p style={{ color: 'gray', fontSize: '.8rem' }} >Weekly</p>
                <p style={{ color: "#15223C", fontWeight: "600", fontSize: "1rem" }} >$3,327</p>
              </div>

              <div className="text-center">
                <p style={{ color: 'gray', fontSize: '.8rem' }}>Daily</p>
                <p style={{ color: "#15223C", fontWeight: "600", fontSize: "1rem" }}>$475</p>
              </div>
              <div className="text-center">
                <p style={{ color: 'gray', fontSize: '.8rem' }}>Monthly</p>
                <p style={{ color: "#15223C", fontWeight: "600", fontSize: "1rem" }}>$12,131</p>
              </div>
            </div>
          </div>

          <div style={{ position: "relative", width: "100%" }}>
            <div style={{ width: "100%", position: 'absolute', bottom: '0' }} className="p-2 " >
              <Card
                title="Incoming income"
                amount="14,000"
                amountColor="#007bff"
                percentage="+23%"
                percentageColor="green"
                icon={<span>&#9650;</span>} // Up arrow icon
              />

              <Card
                title="Incoming income"
                amount="14,000"
                amountColor="#007bff"
                percentage="+23%"
                percentageColor="green"
                icon={<span>&#9650;</span>} // Up arrow icon
              />
            </div>
          </div>
        </div>

      </div>
    </div>

  );
};

export default AllExpenses;
