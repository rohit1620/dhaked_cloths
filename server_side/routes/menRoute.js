const express=require("express");
const {getData,postData} =require("../controllers/menControllers")

const router=express.Router();

router.route("/").get(getData);
router.route("/").post(postData);

module.exports=router;