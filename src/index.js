// require('dotenv').config({path:'./env'}) ye hai ekk tareka but sunder nhi h
import dotenv from 'dotenv'
import connectDB from "./db/db.js";


dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("appp error:",error);
        throw error
    })
    app.listen(process.env.PORT|| 8000,()=>{
        console.log(`server is running at port: ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO DB Connection error", err);
})