import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ViewCourseF() {
  const [course, setCourse] = useState([]);

  const fetchCourse= async () => {
    try {
      const response = await axios.get('http://localhost:2032/viewcourse');
      setCourse(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchCourse();
  }, []);



  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Courses</h1>
      
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Department</th>
              <th>Academic Year</th>
              <th>Year</th>
              <th>Semester</th>

            </tr>
          </thead>
          <tbody>
  {Array.isArray(course) && course.length > 0 ? (
    course.map((course, index) => (
      <tr key={index}>
        <td>{course.coursecode}</td>
        <td>{course.coursetitle}</td>
        <td>{course.dept}</td>
        <td>{course.academicyear}</td>
        <td>{course.year}</td>
        <td>{course.semester}</td>

        
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="7">Data Not Found</td>
    </tr>
  )}
</tbody>
        </table>
    </div>
  );
}