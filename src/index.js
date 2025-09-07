// require('dotenv').config({path:'./env'}) ye hai ekk tareka but sunder nhi h
import dotenv from 'dotenv'
import connectDB from "./db/db.js";


dotenv.config({
    path:'./env'
})

connectDB()