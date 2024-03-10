
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StudentAttendance({ studentId }) {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    fetchStudentAttendance();
  }, [studentId]);

  const fetchStudentAttendance = async () => {
    try {
      const response = await axios.get(`http://localhost:2032/studentattendance/${studentId}`);
      setAttendance(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Your Attendance</h2>
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Present</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(attendance) && attendance.length > 0 ? (
            attendance.map((record, index) => (
              <tr key={index}>
                <td>{new Date(record.date).toLocaleDateString()}</td>
                <td>{record.isPresent ? 'Present' : 'Absent'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No attendance records found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentAttendance;
