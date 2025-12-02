require("dotenv").config();

const express=require("express");
const router = require("./routes/userRoute");
const conectDB =require("./database/db")

const app=express();

app.use(express.json())
app.use("/api",router)

const port=process.env.PORT

conectDB().then(()=>{
    app.listen(port,()=>{
    console.log("server running port 3000");
    
})})
