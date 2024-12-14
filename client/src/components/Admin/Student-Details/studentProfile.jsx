import React from 'react';
import Profile from '../../../assets/icons/student.jpeg';
import Contact from '../../../assets/icons/contact.png';
import Human from '../../../assets/icons/human.png';
import Location from '../../../assets/icons/location.png';
import Mail from '../../../assets/icons/mail.png';


const StudentProfile = () => {
    const styles = {
        container: {
            fontFamily: 'Arial',
            display: 'grid',
            gridTemplateRows: '100px 200px',
            border: '1px solid rgb(227, 225, 225)',
            borderBottom: '2px solid rgb(196, 190, 190)',
            height: '340px',
            borderRadius: '15px',
            width: '350px',
        },
        header: {
            position: 'relative',
            backgroundColor: '#fe9839',
            height: '100px',
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
        },
        profileImageContainer: {
            position: 'absolute',
            border: '1px solid transparent',
            width: '70px',
            height: '70px',
            borderRadius: '100%',
            top: '10px',
            left: '15px',
        },
        profileImage: {
            width: '70px',
            height: '70px',
            borderRadius: '100%',
        },
        studentInfo: {
            margin: '30px 50px 70px 180px',
            color: 'white',
            fontWeight:'bold',
        },
        bodySection: {
            position: 'relative',
        },
        details: {
            fontSize: '14px',
        },
        detailsTitle: {
            color: 'blueviolet',
            fontWeight: 'bold',
            position: 'absolute',
            top: '10px',
            left: '10px',
        },
        detailsContent: {
            lineHeight: '10px',
            fontWeight: 'bold',
            color: 'rgb(148, 143, 143)',
            position: 'absolute',
            top: '43px',  
            left:'30px',
        },
        parentsTitle: {
            color: 'blueviolet',
            fontWeight: 'bold',
            position: 'absolute',
            top: '10px',
            left: '200px',
        },
        parentsContent: {
            lineHeight: '20px',
            fontWeight: 'bold',
            color: 'rgb(148, 143, 143)',
            position: 'absolute',
            top: '40px',
            left: '230px',
        },
        contactTitle: {
            color: 'blueviolet',
            fontWeight: 'bold',
            position: 'absolute',
            top: '110px',
            left: '200px',
        },
        contactContent: {
            lineHeight: '16px',
            fontWeight: 'bold',
            color: 'rgb(148, 143, 143)',
            position: 'absolute',
            top: '140px',
            left: '230px',
        },
        scholarshipButton: {
            color: 'white',
            backgroundColor: 'rgb(61, 178, 61)',
            fontSize: '12px',
            width: '75px',
            height: '38px',
            borderColor: 'white',
            borderRadius: '5px',
            cursor:'pointer'
        },
        content:{
            fontSize:'14px',
        }
    };

    return (
        <div style={styles.container}>
            {/* Orange Header */}
            <div style={styles.header}>
                <div style={styles.profileImageContainer}>
                    <img src={Profile} alt="student" style={styles.profileImage} />
                </div>
                <div style={styles.studentInfo}>
                    <p style={{ fontSize: '18px' }}>Tara V</p>
                    <p style={{ fontSize: '12px', marginLeft: '5px', marginTop: '-15px' }}>Student</p>
                </div>
            </div>
            {/* White Body */}
            <div style={styles.bodySection}>
                <div style={styles.details}>
                    <div style={styles.detailsTitle}>Details:</div>
                    <div style={styles.detailsContent}>
                        <p style={styles.content}>Class - 12B</p>
                        <p style={styles.content}>DOB - 24-01-2007</p>
                        <p style={styles.content}>Reg-id - 123222929</p>
                        <p style={styles.content}>Advisor - Jocob David</p>                        
                    </div>
                </div>
                <div style={styles.details}>
                    <div style={{ ...styles.detailsTitle, top: '150px', left: '10px' }}>Scholarships:</div>
                    <div style={{ position: 'absolute', top: '180px', left: '50px' }}>
                        <button style={styles.scholarshipButton}>Active</button>
                    </div>
                </div>
                <div style={styles.details}>
                    <div style={styles.parentsTitle}>Parents:</div>
                    <div style={styles.parentsContent}>
                        <p style={styles.content}>
                            <img src={Human} alt="parent" style={{ width: '18px', height: '18px', position: 'absolute', left: '-30px' }} />
                            Justin Hope
                        </p>
                        <p style={styles.content}>
                            <img src={Human} alt="parent" style={{ width: '18px', height: '18px', position: 'absolute', left: '-30px' }} />
                            Shella J
                        </p>
                    </div>
                </div>
                <div style={styles.details}>
                    <div style={styles.contactTitle}>Contact:</div>
                    <div style={styles.contactContent}>
                        <p style={styles.content}>
                            <img src={Location} alt="location" style={{ width: '20px', height: '20px', position: 'absolute', left: '-30px' }} />
                            KERALA INDIA
                        </p>
                        <p style={styles.content}>
                            <img src={Mail} alt="email" style={{ width: '20px', height: '20px', position: 'absolute', left: '-30px' }} />
                            tara@mail.com
                        </p>
                        <p style={styles.content}>
                            <img src={Contact} alt="phone" style={{ width: '20px', height: '20px', position: 'absolute', left: '-30px' }} />
                            +12 345 6789 0
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentProfile;
