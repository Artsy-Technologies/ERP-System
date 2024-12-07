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
  const pageSize = 6;
   
    
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
        <div className="search-container">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search here..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1); // Reset to first page on search
              }}
            />
          </div>
        </div>
        <Link to={`/admin-dashboard/teachersregform`}>
          <div className="text-center2">
            <button type="submit" className="sendbutton2">
              + New Teacher
            </button>
          </div>
        </Link>
        <div className="teacher-card-list">
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
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredTeachers.length}
          onChange={(page) => setCurrentPage(page)}
          className="d-flex justify-content-center mt-4"
          hideOnSinglePage
        />
      </div>
      <LeaveRequests />
    </>
  );
};

export default TeacherList;
