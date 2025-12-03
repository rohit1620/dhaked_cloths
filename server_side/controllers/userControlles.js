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
 const userExist=await User.findOne({email});
 if(userExist){
    return res.status(400).json({"msg":"User Already Exist"});
 }
    await User.create({username,email,phone,password})
        res.status(200).json({"msg":"Register successfully completed"})   
        
    } catch (error) {
       res.status(200).json({"msg":`internal server error : ${error}`});
        
    }
}

const login=async(req,res)=>{
    try {
        res.status(200).json({"msg":"Login Page"})
    } catch (error) {
  res.status(200).json({"msg":`internal server error : ${error}`});
        
    }
}
module.exports={home,register,login}