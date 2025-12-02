const User = require("../models/userSchema")

const home=async(req,res)=>{
    try {
        res.status(200).json({"msg":"Home Page"})
    } catch (error) {
        console.log(error);
        
    }
}

const register=async(req,res)=>{
    try {
const {username,email,phone,password}=req.body;
const userCreated=await User.create({username,email,phone,password})
        res.status(200).json({"msg":"Register Page"})
        console.log("data",userCreated);
        
       
        
    } catch (error) {
        console.log(error);
        
    }
}

const login=async(req,res)=>{
    try {
        res.status(200).json({"msg":"Login Page"})
    } catch (error) {
        console.log(error);
        
    }
}
module.exports={home,register,login}