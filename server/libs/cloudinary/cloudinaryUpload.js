import cloudinary from"../cloudinary/cloudinaryConnection.js";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url"; // Added to define __dirname

// Define __dirname since it's not available in ES Modules
const __filename = fileURLToPath(import.meta.url); // Added
const __dirname = path.dirname(__filename); // Added

const cloudinaryUpload = async (req, cloudinaryFolder) => {
  const fileName = req.file.filename;
  const fileExt = fileName.split(".")[1];
  const filePath = path.resolve(__dirname, "../../uploads", fileName);
  let fileUpload;
  try {
    console.log("> req.files: ", req.file);
    console.log("> fileName: ", fileName, "\n> ext: ", fileExt);

    if (fileExt == "jpg" || fileExt == "png" || fileExt == "jpeg")
      fileUpload = await cloudinary.uploader.upload(filePath, {
        folder: cloudinaryFolder,
      });
    else if (fileExt == "mp4")
      fileUpload = await cloudinary.uploader.upload(filePath, {
        resource_type: "video",
        folder: cloudinaryFolder,
      });
    else if (fileExt == "pdf")
      fileUpload = await cloudinary.uploader.upload(filePath, {
        pages: true,
        folder: cloudinaryFolder,
      });
    return fileUpload;
  } catch (error) {
    console.log("> cloudinaryUpload - trycatch: ", error);
    res.status(500).json({ error: "Upload to Cloudinary failed" });
  } finally {
    // After successful upload, delete the local file
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error("> Failed to delete local file:", err);
      } else {
        console.log("> Successfully deleted local file:", filePath);
      }
    });
  }
};

export default cloudinaryUpload;
