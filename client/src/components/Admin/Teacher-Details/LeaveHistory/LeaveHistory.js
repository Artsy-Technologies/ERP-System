import React, { useEffect, useState } from "react";
import { Table } from "antd";
import "./LeaveHistory.css"; // Custom CSS file for styling

const LeaveHistory = () => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    // Mock data; you can replace this with API data fetching.
    const data = [
      {
        key: "1",
        duration: "3 DAYS",
        type: "Sick Leave",
        startDate: "10-2-2024",
        endDate: "13-2-2024",
        action: "Approve",
      },
      {
        key: "2",
        duration: "5 DAYS",
        type: "Paid Leave",
        startDate: "6-3-2024",
        endDate: "11-3-2024",
        action: "Approve",
      },
      {
        key: "3",
        duration: "1 DAY",
        type: "Casual Leave",
        startDate: "1-5-2024",
        endDate: "1-5-2024",
        action: "Cancel", // Ensure this is set to "Cancel"
      },
      {
        key: "4",
        duration: "Half DAY",
        type: "Half Day",
        startDate: "19-2-2024",
        endDate: "19-2-2024",
        action: "Approve",
      },
    ];
    setDataSource(data);
  }, []);

  const columns = [
    {
      title: "Duration of Leave",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span
          className={
            record.action === "Cancel"
              ? "leave-history-cancel-text"
              : "leave-history-approve-text"
          }
        >
          {record.action}
        </span>
      ),
    },
  ];

  return (
    <div className="leave-history-container">
      <h2 className="leave-history-title">Leave History</h2>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        bordered
        className="leave-history-table"
      />
    </div>
  );
};

export default LeaveHistory;
