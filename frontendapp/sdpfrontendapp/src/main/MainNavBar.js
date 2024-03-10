import React from 'react'
import { Routes,Route,Link} from 'react-router-dom';
import PasswordReset from './PasswordReset';
import Login from './Login';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './navbar.css'
import AdminHome from './../admin/AdminHome';
import FacultyHome from './../faculty/FacultyHome';
import StudentHome from './../student/StudentHome';
import CreateCourse from './../admin/CreateCourse';
import FacultyRegistration from './../admin/FacultyRegistration';
import StudentRegistration from './../admin/StudentRegistration';
import ViewStudents from './../admin/ViewStudents';
import ViewFaculty from './../admin/ViewFaculty';
import ViewCourse from './../admin/ViewCourse';
import TakeAttendance from './../faculty/TakeAttendance';
import ViewCourseF from './../faculty/ViewCourseF';
import ViewCourseS from './../student/ViewCourseS';
import ViewFacultyCourseMap from './../admin/ViewFacultyCourseMap';

export default function MainNavBar() {
  return (
    <div>

    <nav>
    <div className='navvbar'>
    {/* <div class="logo"> */}
    <h1 style={{fontSize:"20pt",color:"White",marginLeft:0}}> Acadamex</h1>
      {/* <i>Unleash your Academic experience</i> */}
      {/* </div> */}
    
      {/* <div className="icon-container">
    <img src="logo" alt="Your Icon"/>
    </div>   */}
      
          <table className='menu'>
             <td><Link to="/">Home</Link>&nbsp;&nbsp;</td>
             <td><Link to="/about">About</Link>&nbsp;&nbsp;</td>
             <td> <Link to="/contact">Contact</Link>&nbsp;&nbsp;</td>
             <td> <Link to="/login">Login</Link>&nbsp;&nbsp;</td>
      
          </table>
          </div>  
      </nav>
    
      <Routes>
      <Route path="/" element={<Home/>} exact/>
          <Route path="/about" element={<About/>} exact/>
          <Route path="/contact" element={<Contact/>} exact/>
          <Route path="/login" element={<Login/>} exact/>
          <Route path='/adminhome' element={<AdminHome/>}></Route>
        <Route path='/facultyhome' element={<FacultyHome/>}></Route>
        <Route path='/studenthome' element={<StudentHome/>}></Route>
            <Route path='/createcourse' Component={CreateCourse} exact/>
    
            <Route path='/registerfaculty' Component={FacultyRegistration} exact/>
            <Route path='/registerstudent' Component={StudentRegistration} exact/>
 
            <Route path='/viewstudent' Component={ViewStudents} exact/>
            <Route path='/viewfaculty' Component={ViewFaculty} exact/>   
            <Route path='/viewcourse' Component={ViewCourse} exact/>     
            <Route path='/viewcoursef' Component={ViewCourseF} exact/>     
            <Route path='/viewcourses' Component={ViewCourseS} exact/>     
            <Route path='/markattendance' Component={TakeAttendance} exact/>     
            <Route path='/viewfacultycoursemap' Component={ViewFacultyCourseMap} exact/>    
          
          
          

      </Routes>
  </div>

  )
}