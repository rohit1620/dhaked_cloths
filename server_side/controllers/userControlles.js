const bcrypt=require("bcrypt")
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
        const {email,password}=req.body;
        const userExist=await User.findOne({email});
        if(!userExist){
            return res.status(400).json({"msg":"Invailid credential"});
        }
        
        const isPassword= await bcrypt.compare(password,userExist.password);
        if(isPassword){
            res.status(200).json({
                "msg":"Login Successfully",
                "token":await userExist.generateToken(),
                "userId": userExist._id.toString()
            })
        }else{
 res.status(400).json({"msg":"Wrong password or email"})
        }
       

    } catch (error) {
  res.status(200).json({"msg":`internal server error : ${error}`});
        
    }
}
module.exports={home,register,login}