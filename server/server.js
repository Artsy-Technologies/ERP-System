// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const timetableRoutes = require('./routes/timetableRoutes');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(cors()); //Enable CORS for all routes
// app.use(express.json());
// app.use(express.static('public')); //Serve static files from the public directory

// //Database Connection
// mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('Could not connect to MongoDB', err));

// //Routes
// // app.use('/api', timetableRoutes); //Use the route with a prefix

// //Start Server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const { signupModel, contactDetailsModel } = require("./models/signup")
// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect(
//   "mongodb+srv://akdattingal:Aaadi4321@schoolerp.r4y1m.mongodb.net/signup"
// );
// app.post("/register", (req, res) => {
//   signupModel
//     .create(req.body)
//     .then((signup) => res.json(signup))
//     .catch((err) => res.json(err));
// });
// app.post("/login", (req, res) => {
//   const { email, password, accountType } = req.body;
//   signupModel
//     .findOne({ email: email, accountType: accountType })
//     .then((user) => {
//       if (user) {
//         if (user.password === password) {
//           if (user.accountType === "Student") {
//             res.json({ message: "Success", redirectTo: "/student" });
//           } else if (user.accountType === "Teacher") {
//             res.json({ message: "Success", redirectTo: "/teacher" });
//           } else if (user.accountType === "Admin") {
//             res.json({ message: "Success", redirectTo: "/admin" });
//           }
//         } else {
//           res.json("incorect password");
//         }
//       } else {
//         res.json("No record existed");
//       }
//     });
// });

// app.post("/contactDetails", (req, res) => {
//   contactDetailsModel
//     .create(req.body)
//     .then((signup) => res.json(signup))
//     .catch((err) => res.json(err));
// });

// app.listen(3003, () => {
//   console.log("server is running on port 3003");
// });

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./libs/databaseConnection.js";
dotenv.config();
import getUserRoutes from "./routes/userRoutes/getRoutes.js";
import postUserRoutes from "./routes/userRoutes/postRoutes.js";
import updateUserRoutes from "./routes/userRoutes/updatesRoutes.js";
import deleteUserRoutes from "./routes/userRoutes/deleteRoutes.js";

const app = express();
const port = 8000;

app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true, // if your backend requires credentials
  })
);

app.use("/api", getUserRoutes);
app.use("/api", postUserRoutes);
app.use(`/api`, updateUserRoutes);
app.use("/api", deleteUserRoutes);

app.listen(port, async () => {
  await connectDB();
  console.log(`Server is running on port ${port}`);
});
