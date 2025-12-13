require("dotenv").config();

const express=require("express");
const cors=require("cors")
const userRouter = require("./routes/userRoute");
const menRouter=require("./routes/menRoute");
const womenRouter=require("./routes/womenRoute")
const conectDB =require("./database/db")

const app=express();
app.use(cors())
app.use(express.json())
app.use("/api",userRouter)
app.use("/api/men",menRouter)
app.use("/api/women",womenRouter)

const port=process.env.PORT||10000

conectDB().then(()=>{
    app.listen(port,()=>{
    console.log("server running port 3000");
    
})})
