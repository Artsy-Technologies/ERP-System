import React from 'react';
import { Table } from 'react-bootstrap';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

export default function PaymentDueStudents({ data }) {
    return (
        <div style={{ width: '100%', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', margin: '6px' }}>
            <h4 style={{ marginBottom: '20px', color: '#303972' }}>Payment Due Students</h4>
            <Table style={{fontSize:"13px"}} responsive="sm" bordered hover  >
                <thead style={{ backgroundColor: '#959393' }}>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Class</th>
                        <th>Reason</th>
                        <th>Amount</th>
                        <th>Contact</th>
                        <th>Advisor</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((student, index) => (
                        <tr key={index}>
                            <td style={{ display: 'flex', alignItems: 'center' }}>
                                <div
                                    style={{
                                        width: '35px',
                                        height: '35px',
                                        borderRadius: '50%',
                                        backgroundColor: '#959393',
                                        marginRight: '10px',
                                        color:"#959393",
                                        fontWeight:600
                                    }}
                                ></div>
                                {student.name}
                            </td>
                            <td>{student.id}</td>
                            <td>{student.class}</td>
                            <td>{student.reason}</td>
                            <td style={{ color: '#303972', fontWeight: 'bold' }}>
                                ${student.amount.toLocaleString()}
                            </td>
                            <td>
                                <FaEnvelope style={{ marginRight: '10px', cursor: 'pointer' }} />
                                <FaPhone style={{ cursor: 'pointer' }} />
                            </td>
                            <td>{student.advisor}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {/* Add pagination controls if needed */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <button style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>1</button>
                <button style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>2</button>
                <button style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>3</button>
            </div>
        </div>
    );
}
