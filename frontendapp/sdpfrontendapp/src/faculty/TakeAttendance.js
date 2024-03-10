import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:2032/viewstudents');
      setStudents(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const takeAttendance = (studentId) => {
    setAttendance((prevAttendance) => {
      const existingAttendance = prevAttendance.find(entry => entry.studentid === studentId);
      return existingAttendance
        ? prevAttendance.map(entry =>
            entry.studentid === studentId ? { ...entry, isPresent: !entry.isPresent } : entry
          )
        : [...prevAttendance, { studentid: studentId, isPresent: true }];
    });
  };

  const submitAttendance = async () => {
    try {
      const formattedDate = new Date().toISOString().split('T')[0];

      await axios.post('http://localhost:2032/markattendance', {
        attendanceData: attendance.map(entry => ({
          studentid: entry.studentid,
          date: formattedDate,
          isPresent: entry.isPresent,
        })),
      });

      setAttendance([]);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Students</h1>
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
        <thead>
          <tr>
            <th>Student Id</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(students) && students.length > 0 ? (
            students.map((student, index) => (
              <tr key={index}>
                <td>{student.studentid}</td>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => takeAttendance(student.studentid)}
                    checked={attendance.some(entry => entry.studentid === student.studentid)}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">Data Not Found</td>
            </tr>
          )}
        </tbody>
      </table>
      <button onClick={submitAttendance} className='button'>Submit</button>
    </div>
  );
}

export default App;
