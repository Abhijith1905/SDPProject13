import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
//import profile from './logo.svg'
import './adminnavbar.css'
import CreateCourse from './CreateCourse'
import FacultyRegistration from './FacultyRegistration'
import StudentRegistration from './StudentRegistration'
import ViewStudents from './ViewStudents'
import ViewFaculty from './ViewFaculty'
export default function AdminHome() {
  return (
    <div>
       


        <ul className='navbar'>
            
        <li>
            <Link to="/attendance">Attendance</Link>
        </li>
        <li>
            <Link to="/timetable">Timetable</Link>
        </li>
        <li>
            <Link to="/createcourse">Create Courses</Link>
        </li>
        <li>
            <Link to="/viewcourse">View Course</Link>
        </li>
        
        <li>
            <Link to="/registerstudent">Register Students</Link>
        </li>
        <li>
            <Link to="/viewstudent">View Students</Link>
        </li>
        <li>
            <Link to="/registerfaculty">Register Faculty</Link>
        </li>
        <li>
            <Link to="/viewfaculty">View Faculty</Link>
        </li>
        <li>
            <Link to='/viewfacultycoursemap'>View Faculty-Course Mapping</Link>
        </li>

        <br />
        <br />
        <br />
     
        <br />
        
        <li>
            <Link to="/settings">Settings</Link>
        </li>
        <li>
            <Link to="/login">Logout</Link>
        </li>
        
        
        </ul>
        <Routes>
            <Route path='/createcourse' Component={CreateCourse} exact/>
            <Route path='/viewcourse' Component={CreateCourse} exact/>
            <Route path='/registerfaculty' Component={FacultyRegistration} exact/>
            <Route path='/registerstudent' Component={StudentRegistration} exact/>
 
            <Route path='/viewstudent' Component={ViewStudents} exact/>
            <Route path='/viewfaculty' Component={ViewFaculty} exact/>     
              </Routes>

      
    </div>
  )
}
