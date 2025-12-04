const Womendata=require("../models/womenSchema")

const getData=async(req,res)=>{
    try {
         const data= await Womendata.find();
                res.status(200).json({data})
        res.status(200).json({"msg":"get data for women"})
    } catch (error) {
        res.status(400).json({"msg":error})
    }
}

const postData=async(req,res)=>{
    try {
          const arrayData=req.body;
            //    const data= await Womendata.create({image,type,name,price})
            const data=await Womendata.insertMany(arrayData)
           res.status(200).json({"msg":"post data for women"})
    } catch (error) {
     res.status(400).json({"msg":error})
    }
}

module.exports={getData,postData}