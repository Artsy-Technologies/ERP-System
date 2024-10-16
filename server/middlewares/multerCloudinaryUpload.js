import multer from 'multer';
import { v4 as uuid } from 'uuid';
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    // let filePath = [];
    let fileName;
    console.log("=====MULTER======");
    console.log("> file.originalname: ", file.originalname);
    console.log("> req.files: ", req.file);
    console.log("> file.fieldname: ", file.fieldname);

    const ext = path.extname(file.originalname);
    const id = uuid();
    fileName = `${id}${ext}`;
    cb(null, fileName);
    console.log("=================");
  },
});

const upload = multer({
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg" ||
      file.mimetype == "video/mp4" ||
      file.mimetype == "application/pdf"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(
        new Error("Only .png, .jpg, .jpeg .mp4 and .pdf format allowed!")
      );
    }
  },
  storage: storage,
});

export default upload;
