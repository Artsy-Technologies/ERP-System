const express =require("express")
const mongoose =require('mongoose')
const cors=require("cors")
const { signupModel, contactDetailsModel } = require("../../models/signup");


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://akdattingal:Aaadi4321@schoolerp.r4y1m.mongodb.net/signup");
app.post('/register',(req,res)=>{
    signupModel.create(req.body)
    .then(signup=> res.json(signup))
    .catch(err=> res.json(err))
})
app.post('/login',(req,res)=>{
    const {email, password , accountType}=req.body;
    signupModel.findOne({email:email , accountType:accountType})
    .then(user =>{
        if(user){
            if(user.password===password){
                if (user.accountType==='Student'){
                    res.json({message:"Success",redirectTo:'/student'});
                }else if (user.accountType==='Teacher'){
                    res.json({message:"Success",redirectTo:'/teacher'});
                }else if(user.accountType==='Admin'){
                    res.json({message:"Success",redirectTo:'/admin'});
                }
            }
            else{
                res.json("incorect password");
            }
        }else{
            res.json("No record existed");
        }
    
    })
})


app.post('/contactDetails',(req,res)=>{
    contactDetailsModel.create(req.body)
    .then(signup=> res.json(signup))
    .catch(err=> res.json(err))
})


app.listen(3000,()=>{
    console.log("server is running on port 3000")
})