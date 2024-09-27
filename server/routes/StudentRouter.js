const express = require("express");
const Student = require("../../libs/models/student_teacher_library_model/StudentModel");

const router = express.Router();

// Get all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new student
router.post('/', async (req, res) => {
  const student = new Student({
    first_name: req.body.first_name,
    middle_name: req.body.middle_name,
    last_name: req.body.last_name,
    email: req.body.email,
    dob: req.body.dob,
    class_grade: req.body.class_grade,
    address: req.body.address,
    pincode: req.body.pincode,
    contact_no: req.body.contact_no,
    parent_contact_no: req.body.parent_contact_no,
    city: req.body.city,
    state: req.body.state,
    newpassword: req.body.newpassword,
    confirmpassword: req.body.confirmpassword,
  });
  try {
    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a student through id
router.put('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(400).json({ message: "Student not found" });
    }

    student.first_name = req.body.first_name || student.first_name;
    student.middle_name = req.body.middle_name || student.middle_name;
    student.last_name = req.body.last_name || student.last_name;
    student.email = req.body.email || student.email;
    student.dob = req.body.dob || student.dob;
    student.class_grade = req.body.class_grade || student.class_grade;
    student.address = req.body.address || student.address;
    student.pincode = req.body.pincode || student.pincode;
    student.contact_no = req.body.contact_no || student.contact_no;
    student.parent_contact_no = req.body.parent_contact_no || student.parent_contact_no;
    student.city = req.body.city || student.city;
    student.state = req.body.state || student.state;
    student.newpassword = req.body.newpassword || student.newpassword;
    student.confirmpassword = req.body.confirmpassword || student.confirmpassword;

    const updatedStudent = await student.save();
    res.json(updatedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a student
router.delete('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    await student.remove();
    res.json({ message: 'Student deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
