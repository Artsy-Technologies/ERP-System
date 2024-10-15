import React from 'react';
import { Table, Button } from 'antd';
import 'antd/dist/reset.css'; // No need to use if you are on Ant Design v5
import './LeaveRequests.css'; // Import the custom CSS for styling

const dataSource = [
  {
    key: '1',
    name: 'Tom H',
    subject: 'Chemistry',
    duration: '3 DAYS',
    type: 'Sick Leave',
    startDate: '10-2-2024',
    endDate: '13-2-2024',
  },
  {
    key: '2',
    name: 'Jacob',
    subject: 'Physics',
    duration: '5 DAYS',
    type: 'Paid Leave',
    startDate: '6-3-2024',
    endDate: '11-3-2024',
  },
  {
    key: '3',
    name: 'Hassn',
    subject: 'Math',
    duration: '1 DAYS',
    type: 'Casual Leave',
    startDate: '1-5-2024',
    endDate: '1-5-2024',
  },
  {
    key: '4',
    name: 'john v',
    subject: 'English',
    duration: 'Half DAYS',
    type: 'Half Day',
    startDate: '19-2-2024',
    endDate: '19-2-2024',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    ellipsis: true, // To handle text overflow
  },
  {
    title: 'Subject',
    dataIndex: 'subject',
    key: 'subject',
    ellipsis: true, // To handle text overflow
  },
  {
    title: 'Duration of Leave',
    dataIndex: 'duration',
    key: 'duration',
    ellipsis: true, // To handle text overflow
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    ellipsis: true, // To handle text overflow
  },
  {
    title: 'Start Date',
    dataIndex: 'startDate',
    key: 'startDate',
    ellipsis: true, // To handle text overflow
  },
  {
    title: 'End Date',
    dataIndex: 'endDate',
    key: 'endDate',
    ellipsis: true, // To handle text overflow
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
        <Button
          type="primary"
          style={{
            backgroundColor: 'green',
            borderColor: 'green',
            borderRadius: '10px',
            color: 'white',
          }}
        >
          Approve
        </Button>
        <Button
          style={{
            borderColor: 'green',
            color: 'green',
            borderRadius: '10px',
          }}
        >
          Cancel
        </Button>
      </div>
    ),
  },
];

const LeaveRequests = () => {
  return (
    <div className="table-container">
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        bordered
        style={{ borderRadius: '10px', overflow: 'hidden' }}
        scroll={{ x: 'max-content' }} // Enable horizontal scroll on smaller screens
      />
    </div>
  );
};

export default LeaveRequests;
