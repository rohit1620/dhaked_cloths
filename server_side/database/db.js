const mongoose=require("mongoose");


const url=process.env.URL;

 const conectDB=async()=>{
    try {
        await mongoose.connect(url)
        console.log("connection successfully")
    } catch (error) {
        console.log(error);
        console.log("connection failed")
        
    }
}

module.exports=conectDB