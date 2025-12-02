
const home=async(req,res)=>{
    try {
        res.status(200).json({"msg":"Home Page"})
    } catch (error) {
        console.log(error);
        
    }
}

const register=async(req,res)=>{
    try {
        res.status(200).json({"msg":"Register Page"})
        console.log("register",req.body);
        
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