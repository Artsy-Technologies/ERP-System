import mongoose from 'mongoose';

const signupSchema = new mongoose.Schema({
  email: String,
  password: String,
  accountType: { type: String, enum: ['Student', 'Teacher', 'Admin'] },
});

const signupModel = mongoose.model('Signup', signupSchema);

const contactDetailsSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  myemail: { type: String, required: true },
  Message: { type: String, required: true },
});

const contactDetailsModel = mongoose.model('ContactDetails', contactDetailsSchema);

export { signupModel, contactDetailsModel };
