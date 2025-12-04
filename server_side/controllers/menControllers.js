const Mendata=require("../models/menSchema")

const getData=async(req,res)=>{
    try {
        const data= await Mendata.find();
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json("rohit")
    }
}

const postData=async(req,res)=>{
    try {
         const {image,type,name,price}=req.body;
       const data= await Mendata.create({image,type,name,price})
           res.status(200).json({"msg":"post data for men"})
    } catch (error) {
     res.status(400).json({"msg":error})
    }
}

module.exports={getData,postData}