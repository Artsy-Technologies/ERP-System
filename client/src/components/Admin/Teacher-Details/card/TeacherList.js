import React, { useState, useEffect } from "react";
import TeacherCard from "./TeacherCard";
import { Pagination } from "antd";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios
import "./TeacherList.css";
import LeaveRequests from "../leaveTable/LeaveRequests";

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]); // State to hold teacher data
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const pageSize = 5;

  // Base URL for images
  const baseUrl = "http://localhost:8000/uploads/"; // Adjust as needed

  // Fetch teachers data from the backend
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get("api/teachers"); // Adjust the URL as needed
        setTeachers(response.data); // Assuming the response data is an array of teacher objects
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };

    fetchTeachers();
  }, []);

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedTeachers = filteredTeachers.slice(startIndex, endIndex);

  return (
    <>
      <div className="teacher-list-container">
        <div className="teacher-list-search-container">
          <div className="teacher-list-search-box">
            <FaSearch className="teacher-list-search-icon" />
            <input
              type="text"
              className="teacher-list-search-input"
              placeholder="Search here..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1); // Reset to first page on search
              }}
            />
          </div>
        </div>

        {/* New Teacher Button */}
        <div className="teacher-list-text-center">
          <Link to="/admin-dashboard/teachersregform">
            <button type="button" className="teacher-list-sendbutton">
              + New Teacher
            </button>
          </Link>
        </div>

        {/* Teacher Cards */}
        <div className="teacher-list-card-list">
          {paginatedTeachers.length > 0 ? (
            paginatedTeachers.map((teacher, index) => (
              <TeacherCard
                key={index}
                id={teacher._id} // Use teacher ID here
                name={teacher.fullName} // Adjust to match your data structure
                subject={teacher.subject} // Adjust to match your data structure
                image={`${baseUrl}${teacher.photo}`} // Construct the image URL
              />
            ))
          ) : (
            <div>No teachers found.</div>
          )}
        </div>

        {/* Pagination */}
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredTeachers.length}
          onChange={(page) => setCurrentPage(page)}
          className="teacher-list-pagination"
          hideOnSinglePage
        />
      </div>

      {/* Leave Requests Section */}
      <LeaveRequests />
    </>
  );
};

export default TeacherList;
