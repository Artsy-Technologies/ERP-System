const mongoose = require('mongoose')
const signupSchema = new mongoose.Schema({
    email:String,
    password:String,
    accountType: { type: String, enum: ['Student', 'Teacher', 'Admin']}
})
const signupModel =mongoose.model("signup",signupSchema)
const contactDetailsSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    myemail: { type: String, required: true },
    Message: { type: String, required: true }
});
const contactDetailsModel = mongoose.model('contactDetails', contactDetailsSchema);
module.exports={signupModel,contactDetailsModel}
