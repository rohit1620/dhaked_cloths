const express=require("express");
const {getData,postData}=require("../controllers/womenControllers")
const router=express.Router();

router.route("/").get(getData);
router.route("/post").post(postData);

module.exports=router;