const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODBURI);

const FeedbackSchema = new mongoose.Schema(
  {
    feedback: {
      type: String,
      required: true,
    },
    uid: {
      type: String, // update this to `Schema.Types.ObjectId` to refrence to the user id field of teachers collection
      required: true,
    },
  },
  { collection: "feedback", timestamps: true }
);

const feedbackModel = mongoose.model("Feedback", FeedbackSchema);

module.exports = feedbackModel;