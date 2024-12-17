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

export {
  createTeacher,
  getTeachers,
  getTeacherById, // Export the new controller function
  upload, // Export the multer middleware
};
