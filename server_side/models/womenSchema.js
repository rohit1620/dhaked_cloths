const mongoose=require("mongoose");

const womenSchema= new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }

})

const Womendata=mongoose.model("Womendata",womenSchema);

module.exports=Womendata;