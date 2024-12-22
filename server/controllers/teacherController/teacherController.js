import Teacher from '../../libs/models/Teachers.js'; // Adjust the path to your Teacher model
import multer from 'multer';
import path from 'path';

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), 'uploads/')); // Ensure this path is correct
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Prevent filename conflicts
  },
});

// Multer file filter
const fileFilter = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png|gif/; // Supported file types
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true); // Accept file
  } else {
    cb('Error: File upload only supports the following filetypes - ' + filetypes); // Reject file
  }
};

// Multer middleware
const upload = multer({ storage: storage, fileFilter: fileFilter });

// Controller to create a new teacher
const createTeacher = async (req, res) => {
  console.log('File Info:', req.file); // Log file information
  const teacherData = req.body;

  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  try {
    const newTeacher = new Teacher({
      ...teacherData,
      photo: req.file.filename, // Save image filename
    });

    await newTeacher.save();
    res.status(201).json({ message: 'Teacher registered successfully', teacher: newTeacher });
  } catch (error) {
    console.error('Error registering teacher:', error);
    res.status(500).json({ message: 'Error registering teacher', error: error.message });
  }
};

// Controller to get all teachers
const getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find(); // Fetch all teachers from the database
    res.status(200).json(teachers); // Send the list of teachers as a response
  } catch (error) {
    console.error('Error fetching teachers:', error);
    res.status(500).json({ message: 'Error fetching teachers', error: error.message });
  }
};

// Controller to get a teacher by ID
const getTeacherById = async (req, res) => {
  const { id } = req.params;

  try {
    const teacher = await Teacher.findById(id); // Fetch teacher by ID from the database
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    res.status(200).json(teacher);
  } catch (error) {
    console.error('Error fetching teacher by ID:', error);
    res.status(500).json({ message: 'Error fetching teacher', error: error.message });
  }
};

const teacherUpdateDetail = async (req, res) => {
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
    res.json({
      message: "Successfully Updated",
      status: 200,
      updatedTeacher
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export {
  createTeacher,
  getTeachers,
  getTeacherById,
  teacherUpdateDetail, // Export the new controller function
  upload, // Export the multer middleware
};
