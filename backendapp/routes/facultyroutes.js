const facultycontroller = require("../controllers/facultycontroller")

const express = require("express")
const facultyrouter = express.Router()


facultyrouter.post("/checkfacultylogin",facultycontroller.checkfacultylogin)


facultyrouter.post("/markattendance",facultycontroller.markattendance)


module.exports = facultyrouter