const mongoose=require("mongoose");


const URL=process.env.URL;

 const conectDB=async()=>{
    try {
        await mongoose.connect(URL)
        console.log("connection successfully")
    } catch (error) {
        console.log(error);
        
        
    }
}

module.exports=conectDB