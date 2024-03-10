// import logo from './logo.svg';
// import './App.css';
import Login from './main/Login';
import { BrowserRouter } from 'react-router-dom';
import MainNavBar from './main/MainNavBar';
// import AttendanceForm from './AttendanceForm';
import ViewStudents from './admin/ViewStudents';
import StudentRegistration from './admin/StudentRegistration';
import AdminNavBar from './admin/AdminNavBar';
import AdminHome from './admin/AdminHome';
import FacultyRegistration from './admin/FacultyRegistration';
function App() {
  return (
    <div className="App">
   
      <BrowserRouter>
      <MainNavBar/>  
       {/* <Login/> */}
       {/* <AttendanceForm/> */}
      {/* <ViewStudents/>
       <StudentRegistration/>
        */}
        {/* <AdminHome/> */}
        {/* <ViewStudents/> */}
        {/* <FacultyRegistration/> */}
      </BrowserRouter>
      
    </div>
  );
}

export default App;
