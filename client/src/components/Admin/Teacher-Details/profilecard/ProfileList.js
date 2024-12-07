import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileCard from './ProfileCard'; 
import axios from 'axios'; 

const TeacherDetails = () => {
  const { id } = useParams(); 
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const response = await axios.get(
          `/api/teachers/${id}`
        );
        setTeacher(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching teacher:', error);
        setError('Failed to fetch teacher details');
        setLoading(false);
      }
    };

    fetchTeacher();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>{error}</div>; 
  }

  return <ProfileCard teacher={teacher} />; 
};

export default TeacherDetails;
