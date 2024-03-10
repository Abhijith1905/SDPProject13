import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ViewFacultyCourseMap() {
    const [faculty, setFaculty] = useState([]);

    const fetchFaculty= async () => {
      try {
        const response = await axios.get('http://localhost:2032/viewfaculty');
        setFaculty(response.data);
      } catch (error) {
        console.error(error.message);
      }
    }
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
        fetchFaculty();
      }, []);
    
    
    
      return (
        <div style={{ textAlign: 'center' }}>
          <h1>Faculty-Courses Mapping</h1>
          <br />
          <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
              <thead>
                <tr>
                  <th>Faculty Id</th>
                  <th>Faculty name</th>
                  <th>Course Code</th>
                  <th>Course Title</th>
                  
    
                </tr>
              </thead>
              <tbody>
      {Array.isArray(course) && course.length > 0 && Array.isArray(faculty) && faculty.length>0 ? (
        course.map((course, index) => (
          <tr key={index}>
            <td>{faculty[index].facultyid}</td>
            <td>{faculty[index].fullname}</td>
            <td>{course.coursecode}</td>
            <td>{course.coursetitle}</td>
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


