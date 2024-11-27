// src/TransactionTable.js
import React from 'react';
const transactions = [
    {
        receiver: 'Your Name',
        type: 'Total Refund',
        date: '13 Nov 2023',
        amount: '$1147',
        action: 'Send',
    },
    {
        receiver: 'Sarah Moffitt',
        type: 'New Activity',
        date: '11 Nov 2023',
        amount: '$2600',
        action: 'Send',
    },
    {
        receiver: 'Squid',
        type: 'Sent Pay',
        date: '05 Nov 2023',
        amount: '$579',
        action: 'Receive',
    },
    {
        receiver: 'John Matthew Reeve',
        type: 'Offer Sent',
        date: '03 Nov 2023',
        amount: '$809',
        action: 'Receive',
    },
    {
        receiver: 'Alan Wolf',
        type: 'Transaction',
        date: '27 Oct 2023',
        amount: '$400',
        action: 'Remove',
    }
]

const TransactionTable = () => {
    return (
        <div style={{ borderRadius: '15px', marginTop:'1rem' ,boxShadow:"0px 16px 24px 0px #0000000F" , padding:'1rem' , border:"1px solid #C1C1C1" , height:"min-content" }}>
            <div className="d-flex justify-content-between align-items-center mb-3 px-2 ">
                <h5 style={{color:'#03024F',fontSize:"1rem",fontWeight:'700'}} >Transaction History</h5>
                <button style={{width:"max-content",border:'none', background:'#60B7BC' , fontWeight:"700",fontSize:".8rem" , color:'white' }} className="">+ Add Expense</button>
            </div>
            <table style={{fontSize:"14px"}} className="table table-borderless">
                <thead>
                    <tr>
                        <th style={{color:'red'}} >Receiver</th>
                        <th style={{color:'red'}} >Type</th>
                        <th style={{color:'red'}} >Date</th>
                        <th style={{color:'red'}} >Amount</th>
                        <th style={{color:'red'}} >Action</th>
                        <th style={{color:'red'}} >Invoice</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((txn, index) => (
                        <tr key={index}>
                            <td  style={{color:"#404040"}} >{txn.receiver}</td>
                            <td  style={{color:"#404040"}} >{txn.type}</td>
                            <td  style={{color:"#404040"}} >{txn.date}</td>
                            <td  style={{color:"#404040"}} >{txn.amount}</td>
                            <td>
                                <span
                                    style={{padding:'.5rem'}}
                                    className={`badge ${txn.action === 'Send'
                                        ? 'bg-primary'
                                        : txn.action === 'Receive'
                                            ? 'bg-success'
                                            : 'bg-danger'
                                        }`}
                                >
                                    {txn.action}
                                </span>
                            </td>
                            <td>
                                <button className="btn btn-outline-success btn-sm">
                                    Invoice
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionTable;


// boxShadow:;
