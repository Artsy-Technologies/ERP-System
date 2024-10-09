import React from 'react';

const StudentDetails = () => {
    return (
        <div style={{ padding: '0px 40px 0px 20px', borderRight: '1px solid gray' }}>
            <button style={{
                padding: '6px 10px', 
                color: 'white', 
                borderRadius: '6px', 
                backgroundColor: 'rgb(124, 177, 230)', 
                borderColor: 'transparent'
            }}>
                Student Details
            </button>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '5px' }}>
                {[
                    'Full Name',
                    'Date of Birth',
                    'Gender',
                    'Nationality',
                    'Reg Id',
                    'Class',
                    'Email',
                    'Phone Number',
                    'Address'
                ].map((label, index) => (
                    <div key={index} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', marginTop: '10px' }}>
                        <div><p>{label}</p></div>
                        <div>
                            <input 
                                style={{
                                    width: '200px', 
                                    height: label === 'Address' ? '60px' : '20px', 
                                    borderColor: 'transparent', 
                                    backgroundColor: 'rgb(233, 228, 228)'
                                }} 
                            />
                        </div>
                    </div>
                ))}
                <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', marginTop: '20px' }}>
                    <div><p>Photo</p></div>
                    <div style={{ border: '1px dashed gray', width: '100px', height: '100px' }}>
                        <div style={{ fontSize: '10px', color: 'gray', lineHeight: '5px', marginLeft: '10px' }}>
                            <p>Drag and drop</p>
                            <p>or</p>
                            <p>click here to</p>
                            <p>select file</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ParentDetails = () => {
    return (
        <div style={{ padding: '0px 40px 0px 40px' }}>
            <button style={{
                padding: '6px 10px', 
                color: 'white', 
                borderRadius: '6px', 
                backgroundColor: 'rgb(124, 177, 230)', 
                borderColor: 'transparent'
            }}>
                Parent Details
            </button>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '10px' }}>
                {[
                    'Parent/Guardian Name(s)',
                    'Relationship to Student',
                    'Email',
                    'Phone Number',
                    'Address',
                    'Occupation',
                    'Emergency Contact'
                ].map((label, index) => (
                    <div key={index} style={{ display: 'grid', gridTemplateColumns: '220px 1fr', marginTop: '10px' }}>
                        <div><p>{label}</p></div>
                        <div>
                            <input 
                                style={{
                                    width: '200px', 
                                    height: label === 'Address' ? '60px' : '20px', 
                                    borderColor: 'transparent', 
                                    backgroundColor: 'rgb(233, 228, 228)'
                                }} 
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const StudentRegistrationForm = () => {
    return (
        <div style={{ fontFamily: 'Arial' }}>
            <div style={{ border: '1px solid rgb(202, 201, 201)', width: '900px', height: '680px', position: 'relative' }}>
                <div >
                    <p style={{fontWeight: 'bold', fontSize: '20px', color: 'lightcoral', textAlign: 'center' }}>
                        Student Registration Form
                    </p>
                    <p style={{ position:'absolute',color: 'black', right: '10px', top: '-10px', fontWeight: 'bold' }}>
                        X
                    </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <StudentDetails />
                    <ParentDetails />
                </div>
                <div >
                    <button style={{
                        position: 'absolute',
                        top: '600px',
                        right: '30px',
                        borderRadius: '20px',
                        padding: '8px 20px',
                        backgroundColor: 'rgb(251, 47, 166)',
                        color: 'white',
                        borderColor: 'transparent'
                    }}>
                    <span style={{ fontWeight: 'bold' }}>+ </span> New Student
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StudentRegistrationForm;
