import React from 'react';

const StudentAttendance = () => {
    const styles = {
        container: {
            position: 'relative',
        },
        card: {
            position: 'absolute',
            border: '2px solid rgb(196, 190, 190)',
            height: '340px',
            borderRadius: '20px',
            width: '640px',
        },
        title: {
            position: 'absolute',
            color: 'rgb(30, 216, 216)',
            fontFamily: 'Arial',
            fontWeight: 'bold',
            top: '10px',
            left: '240px',
        },
        contentContainer: {
            position: 'absolute',
            border: '1px solid rgb(196, 190, 190)',
            height: '285px',
            borderRadius: '20px',
            width: '625spx',
            top: '40px',
            left: '20px',
            right: '20px',
            fontFamily: 'Arial',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        column: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
        },
        columnWithMargin: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginLeft: '10px',
        },
        columnWithRightMargin: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginRight: '10px',
        },
        boldText: {
            fontWeight: 'bold',
            fontSize:'14px',
        },

        contents: {
            fontSize:'14px',
        },
    };

    const data = [
        { subject: 'Math', faculty: 'Isaac Jacob', type: 'Theory', total: 34, attended: 32, unattended: 2, percentage: '94%' },
        { subject: 'Physics', faculty: 'Carlos Sainz', type: 'Lab', total: 15, attended: 13, unattended: 2, percentage: '87%' },
        { subject: 'Literature', faculty: 'F Alonso', type: 'Theory', total: 40, attended: 35, unattended: 5, percentage: '87.5%' },
        { subject: 'Physics', faculty: 'George R', type: 'Theory', total: 45, attended: 40, unattended: 5, percentage: '88%' },
        { subject: 'Chemistry', faculty: 'Natasha R', type: 'Lab', total: 10, attended: 7, unattended: 3, percentage: '70%' },
        { subject: 'Chemistry', faculty: 'Alla Ali', type: 'Theory', total: 46, attended: 40, unattended: 6, percentage: '86.9%' },
    ];

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <div style={styles.title}>Student Attendance</div>
                <div style={styles.contentContainer}>
                    <div style={styles.columnWithMargin}>
                        <p style={styles.boldText}>Subject</p>
                        {data.map((item, index) => (
                            <p style={styles.contents} key={index}>{item.subject}</p>
                        ))}
                    </div>
                    <div style={styles.column}>
                        <p style={styles.boldText}>Faculty</p>
                        {data.map((item, index) => (
                            <p style={styles.contents} key={index}>{item.faculty}</p>
                        ))}
                    </div>
                    <div style={styles.column}>
                        <p style={styles.boldText}>Type</p>
                        {data.map((item, index) => (
                            <p style={styles.contents} key={index}>{item.type}</p>
                        ))}
                    </div>
                    <div style={styles.column}>
                        <p style={styles.boldText}>Total Classes</p>
                        {data.map((item, index) => (
                            <p style={styles.contents} key={index}>{item.total}</p>
                        ))}
                    </div>
                    <div style={styles.column}>
                        <p style={styles.boldText}>Attended</p>
                        {data.map((item, index) => (
                            <p style={styles.contents} key={index}>{item.attended}</p>
                        ))}
                    </div>
                    <div style={styles.column}>
                        <p style={styles.boldText}>UnAttended</p>
                        {data.map((item, index) => (
                            <p style={styles.contents} key={index}>{item.unattended}</p>
                        ))}
                    </div>
                    <div style={styles.columnWithRightMargin}>
                        <p style={styles.boldText}>Percentage</p>
                        {data.map((item, index) => (
                            <p style={styles.contents} key={index}>{item.percentage}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentAttendance;
