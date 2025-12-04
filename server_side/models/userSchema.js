const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken")

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

userSchema.pre("save",async function(){
     const user=this;
     if(!user.isModified("password")){
        return next();
     }
     try {
        const salt= await bcrypt.genSalt(10);
        const hashPassword= await bcrypt.hash(user.password,salt);
        user.password=hashPassword
        
     } catch (error) {
        return next();
     }
})

userSchema.methods.generateToken=async function(){
        try {
            return jwt.sign({
                userId:this._id.toString(),
                email:this.email,

            },
        process.env.JWT_SECRAT_KEY,{
            expiresIn:"30d"

        })
        } catch (error) {
            console.error("error",error)
        }
}

const User=mongoose.model("User",userSchema);

module.exports=User;