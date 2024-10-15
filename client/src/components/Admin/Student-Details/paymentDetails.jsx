import React from 'react';

const PaymentRow = ({ payment, amount, method, date, status }) => (
  <div style={styles.row}>
    <div style={styles.cell}>{payment}</div>
    <div style={styles.cell}>{amount}</div>
    <div style={styles.cell}>{method}</div>
    <div style={styles.cell}>{date}</div>
    <div style={styles.cell}>
      <button style={styles.buttonPaid}>{status}</button>
    </div>
    <div style={styles.cell}>
      <button style={styles.buttonReceipt}>Receipt</button>
    </div>
  </div>
);

const PaymentHistory = () => {
  const paymentData = [
    { payment: 'BUS FEE', amount: '400 Rs', method: 'CASH', date: '24-12-2023', status: 'Paid' },
    { payment: 'Tuition Fee Sem1', amount: '1400 Rs', method: 'CASH', date: '24-12-2023', status: 'Paid' },
    { payment: 'BUS FEE', amount: '400 Rs', method: 'CASH', date: '24-12-2023', status: 'Paid' },
    { payment: 'BUS FEE', amount: '400 Rs', method: 'CASH', date: '24-12-2023', status: 'Paid' },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.title}>Payment History</div>
      <div style={styles.table}>
        <div style={styles.headerRow}>
          <div style={styles.cell}>Payment</div>
          <div style={styles.cell}>Amount</div>
          <div style={styles.cell}>Method of Payment</div>
          <div style={styles.cell}>Date</div>
          <div style={styles.cell}>Status</div>
          <div style={styles.cell}>Bill</div>
        </div>
        {paymentData.map((data, index) => (
          <PaymentRow
            key={index}
            payment={data.payment}
            amount={data.amount}
            method={data.method}
            date={data.date}
            status={data.status}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    border: '2px solid rgb(196, 190, 190)',
    height: '320px',
    borderRadius: '20px',
    width: '580px',
    padding: '10px',
  },
  title: {
    color: 'rgb(30, 216, 216)',
    fontSize: '20px',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '10px',
  },
  table: {
    position:'absolute',
    right:'10px',
    left:'10px',
    bottom:'10px',
    top:'50px',
    border: '1px solid rgb(196, 190, 190)',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    fontSize: '12px',
    color: 'black',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '12px',
    color: 'rgb(35, 142, 177)',
  },
  cell: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttonPaid: {
    color: 'white',
    backgroundColor: 'rgb(61, 178, 61)',
    fontSize: '12px',
    width: '60px',
    height: '30px',
    border: 'none',
    borderRadius: '5px',
    cursor:'pointer',
  },
  buttonReceipt: {
    color: 'white',
    backgroundColor: 'rgb(85, 84, 84)',
    fontSize: '12px',
    width: '70px',
    height: '30px',
    border: 'none',
    borderRadius: '5px',
    cursor:'pointer',
  },
};

export default PaymentHistory;
