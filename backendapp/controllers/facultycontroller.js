const Faculty = require("../models/Faculty")
const Attendance = require("../models/Attendance")
const Student = require("../models/Student")

  const checkfacultylogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       const faculty = await Faculty.findOne(input)
       response.json(faculty)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };

   


   const markattendance = async (req, res) => {
    try {
      const { attendanceData } = req.body;
  
      await Promise.all(attendanceData.map(async ({ studentid, isPresent }) => {
        await Attendance.findOneAndUpdate(
          { studentid, date: new Date() },
          { $set: { isPresent } },
          { upsert: true, new: true }
        );
      }));
  
      res.status(200).json({ message: 'Attendance marked successfully' });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
   
   

  

  module.exports = {checkfacultylogin,markattendance}