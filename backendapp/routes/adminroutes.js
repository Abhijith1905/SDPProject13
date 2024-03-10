const admincontroller = require("../controllers/admincontroller")

const express = require("express")
const adminrouter = express.Router()

// admin routes
adminrouter.post("/checkadminlogin",admincontroller.checkadminlogin)
adminrouter.post("/insertstudent",admincontroller.insertstudent)
adminrouter.post("/insertfaculty",admincontroller.insertfaculty)
adminrouter.post("/createcourse",admincontroller.createcourse)
adminrouter.get("/viewstudents",admincontroller.viewstudents)
adminrouter.get("/viewfaculty",admincontroller.viewfaculty)
adminrouter.get("/viewcourse",admincontroller.viewcourse)
adminrouter.delete("/deletestudent/:studentid",admincontroller.deletestudent)
adminrouter.delete("/deletefaculty/:facultyid",admincontroller.deletefaculty)
adminrouter.delete("/deletecourse/:coursecode",admincontroller.deletecourse)

module.exports = adminrouter