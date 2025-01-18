import express from 'express';


const router = express.Router();

const feedbackModel = require("../../models/Feedback")

router.get("/", async (req, res) => {
    try {

        const allFeedback = await feedbackModel.find(); // Save the feedback document
        console.log(allFeedback);
        res.status(201).json(allFeedback); // Return the saved document
    } catch (error) {
        res.status(500).send("Error geting all feedback: " + error.message);
    }
});

router.post("/feedback", async (req, res) => {
    try {
        const newFeedback = new feedbackModel({
        feedback: req.body.feedback,
        uid: req.body.uid,
        });

        const savedFeedback = await newFeedback.save(); // Save the feedback document
        console.log(savedFeedback);
        res.status(201).json(savedFeedback); // Return the saved document
    } catch (error) {
        res.status(500).send("Error saving feedback: " + error.message);
    }
});

export default router;