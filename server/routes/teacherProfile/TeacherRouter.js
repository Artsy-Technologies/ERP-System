import express from 'express';
import Teacher from '../../libs/models/teacherProfile/TeacherModel.js';


const router = express.Router();

// Get all teachers
router.get('/', async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//get teacher by id
router.get('/teacher/:id', async(req, res) => {
  try{
    const teacher = await Teacher.findById(req.params.id);
    if (!teacher) return res.status(404).send('Teacher not found');
    res.json(teacher);
  }catch(error){
    res.status(500).send('server Error');
  }
});




// Create a new teacher
router.post('/', async (req, res) => {
  const teacher = new Teacher({
    first_name: req.body.first_name,
    middle_name: req.body.middle_name,
    last_name: req.body.last_name,
    email: req.body.email,
    dob: req.body.dob,
    subject_expertise: req.body.subject_expertise,
    address: req.body.address,
    pincode: req.body.pincode,
    contact_no: req.body.contact_no,
    managed_classes: req.body.managed_classes,
    city: req.body.city,
    state: req.body.state,
    newpassword: req.body.newpassword,
    confirmpassword: req.body.confirmpassword,
  });

  try {
    const newTeacher = await teacher.save();
    res.status(201).json(newTeacher);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a teacher by id
router.put('teacher/:id', async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndUpdate(req.params.id, {$set: req.body }, {new: true});
    if (!teacher) {
      return res.status(400).json({ message: "Teacher not found" });
    }

    teacher.first_name = req.body.first_name || teacher.first_name;
    teacher.middle_name = req.body.middle_name || teacher.middle_name;
    teacher.last_name = req.body.last_name || teacher.last_name;
    teacher.email = req.body.email || teacher.email;
    teacher.dob = req.body.dob || teacher.dob;
    teacher.subject_expertise = req.body.subject_expertise || teacher.subject_expertise;
    teacher.address = req.body.address || teacher.address;
    teacher.pincode = req.body.pincode || teacher.pincode;
    teacher.contact_no = req.body.contact_no || teacher.contact_no;
    teacher.managed_classes = req.body.managed_classes || teacher.managed_classes;
    teacher.city = req.body.city || teacher.city;
    teacher.state = req.body.state || teacher.state;
    teacher.newpassword = req.body.newpassword || teacher.newpassword;
    teacher.confirmpassword = req.body.confirmpassword || teacher.confirmpassword;

    const updatedTeacher = await teacher.save();
    res.json(updatedTeacher);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a teacher
router.delete('teacher/:id', async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    await teacher.remove();
    res.json({ message: 'Teacher deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
