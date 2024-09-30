import React, { useState } from 'react';
import TeacherCard from './TeacherCard';
import { Pagination } from 'antd';
import { FaSearch } from 'react-icons/fa';
import './TeacherList.css';

const teachers = [
  { name: 'Samantha S', subject: 'Mathematics', image: 'https://via.placeholder.com/150' },
  { name: 'Tom Housenburg', subject: 'Science', image: 'https://via.placeholder.com/150' },
  { name: 'Dana Benevista', subject: 'Art', image: 'https://via.placeholder.com/150' },
  { name: 'Salvadore Morbeau', subject: 'Biology', image: 'https://via.placeholder.com/150' },
  { name: 'Dakota Farral', subject: 'Science', image: 'https://via.placeholder.com/150' },
  { name: 'Miranda Adila', subject: 'Art', image: 'https://via.placeholder.com/150' },
  { name: 'Maria Historia', subject: 'History', image: 'https://via.placeholder.com/150' },
  { name: 'Jack Sally', subject: 'Physics', image: 'https://via.placeholder.com/150' },
  { name: 'Lula Beatrice', subject: 'Algorithm', image: 'https://via.placeholder.com/150' },
  { name: 'Nella Vita', subject: 'English', image: 'https://via.placeholder.com/150' },
  { name: 'Indiana Barker', subject: 'Biology', image: 'https://via.placeholder.com/150' }
];
const TeacherList = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const pageSize = 6;

  const filteredTeachers = teachers.filter(teacher =>
    teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    teacher.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedTeachers = filteredTeachers.slice(startIndex, endIndex);

  return (
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
  
    <div className="teacher-card-list">
      {paginatedTeachers.length > 0 ? (
        paginatedTeachers.map((teacher, index) => (
          <TeacherCard
            key={index}
            name={teacher.name}
            subject={teacher.subject}
            image={teacher.image}
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
  

  );
};

export default TeacherList;
