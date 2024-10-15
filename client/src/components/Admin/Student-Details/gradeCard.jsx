import React from 'react';

const GradeAndReport = () => {
    return (
        <div style={{ position: 'relative', fontFamily: 'sans-serif' }}>
            <div style={{ position: 'relative', border: '2px solid rgb(196, 190, 190)', height: '320px', borderRadius: '20px', width: '400px' }}>
                <div style={{ position: 'absolute', color: 'rgb(244, 119, 36)', fontSize: '20px', fontFamily: 'Arial', fontWeight: 'bold', top: '10px', left: '100px' }}>
                    Grade and Report
                </div>
                <div style={{ position: 'absolute', top: '40px', left: '10px' }}>
                    <select style={{ borderRadius: '5px', height: '30px', border: '1px solid rgb(207, 204, 204)', fontSize: '12px', width: '160px', color: 'gray' }}>
                        <option value="">Please Select Exam</option>
                        <option value="Literature">Literature</option>
                        <option value="Math">Math</option>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Biology">Biology</option>
                    </select>
                </div>
                <div style={{ position: 'absolute', top: '60px', left: '18px', fontSize: '14px' }}>
                    <table style={{ border: '1px solid gray', borderCollapse: 'collapse', width: '360px', height: '30px', borderRadius: '5px' }}>
                        <thead>
                            <tr>
                                <th style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', backgroundColor: '#f2f2f2' }}>Test Name</th>
                                <th style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', backgroundColor: '#f2f2f2' }}>Test Duration</th>
                                <th style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', backgroundColor: '#f2f2f2' }}>Scored</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>Literature</td>
                                <td style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>20 min</td>
                                <td style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>75%</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>Math</td>
                                <td style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>20 min</td>
                                <td style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>80%</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>Physics</td>
                                <td style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>10 min</td>
                                <td style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>70%</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>Chemistry</td>
                                <td style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>10 min</td>
                                <td style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>100%</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>Biology</td>
                                <td style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>20 min</td>
                                <td style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>80%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default GradeAndReport;
