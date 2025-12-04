const mongoose=require("mongoose");

const menSchema= new mongoose.Schema({
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

const Mendata=mongoose.model("Mendata",menSchema);

console.log(Mendata)
module.exports=Mendata;