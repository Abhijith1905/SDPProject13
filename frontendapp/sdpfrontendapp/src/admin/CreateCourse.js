import React, { useState } from 'react';
import axios from 'axios';

export default function CreateCourse() 
{
  //formData state variable is initialized with all required keys and empty values
  const [formData, setFormData] = useState({
    dept: '',
      academicyear:'',
      year:'',
      semester:'',
      coursecode:'',
      coursetitle:''
  });

  //message state variable
  const [message, setMessage] = useState('');
  //error state variable
  const [error, setError] = useState('');

  const handleChange = (e) => 
  {
    setFormData({...formData, [e.target.id]: e.target.value});
    
    // It updates the state `formData` by adding or updating a property with a key equal to 
    //the ID of the input field 
    //that triggered the change event (e.target.id). The value of this property is 
    //set to the new value entered in that input field (e.target.value).
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const response = await axios.post('http://localhost:2032/createcourse', formData);
      if (response.status === 200) 
      {
        setFormData({
            dept: '',
        academicyear:'',
        year:'',
        semester:'',
        coursecode:'',
        coursetitle:''
        });
      }
      setMessage(response.data);
      setError('') // set error to ""
    } 
    catch (error) 
    {
      setError(error.response.data);
      setMessage(''); //set message to ""
    }
  };
  
  
  return (
    <div>
      <h3 align="center"><u>Course Registration</u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }

      <form onSubmit={handleSubmit}>
      <div>
          
          <label>Course Code</label>
          <input type="text" id="coursecode" value={formData.coursecode} onChange={handleChange} required />
        </div>
        <div>

          <label>Course Title</label>
          <input type="text" id="coursetitle" value={formData.coursetitle} onChange={handleChange} required />
        </div>
        
        <div>
          <label>Department</label>
          <select id="dept" value={formData.dept} onChange={handleChange} required>
            <option value="">Select Department</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="MECH">MECH</option>
            <option value="CIVIL">CIVIL</option>
          </select>
        </div>
        
        
        
        <div>
          <label>Academic Year</label>
          <input type="number" id="academicyear" value={formData.academicyear} onChange={handleChange} required />
        </div>
        <div>
          <label>Year</label>
          <input type="number" id="year" value={formData.year} onChange={handleChange} required />
        </div>
        <div>
          <label>Semester</label>
          <select id="semester" value={formData.semester} onChange={handleChange} required>
            <option value="">Select Semester</option>
            <option value="ODD">ODD</option>
            <option value="EVEN">EVEN</option>
          </select>
        </div>
        
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
