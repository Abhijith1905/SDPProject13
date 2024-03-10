import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
//import profile from './logo.svg'
import './facultynavbar.css'
import TakeAttendance from './TakeAttendance';


export default function FacultyHome() {
  return (
    <div>
       


        <ul className='navbar'>
            
<br />
<br /><br /><br />
<Routes>
<Route path='/markattendance' Component={TakeAttendance} exact/>  
</Routes>   
        <li>
            <Link to="/home">Home</Link>
        </li>
        <li>
            <Link to="/about">Profile</Link>
        </li>
        <li>
            <Link to="/markattendance">Attendance</Link>
        </li>
        <li>
            <Link to="/Timetable">Timetable</Link>
        </li>
        <li>
            <Link to="/viewcoursef">Courses</Link>
        </li>
        <li>
            <Link to="/Exam Section">Results</Link>
        </li>
        <li>
            <Link to="/Exam Section">Feedback</Link>
        </li>
        <br />
        <br />
        <br />
     
        <br />
        <br />
      
        <br />
       
        <br />
        <li>
            <Link to="/contact">Settings</Link>
        </li>
        <li>
            <Link to="/login">Logout</Link>
        </li>
            
        
        </ul>

       
    </div>
  )
}
