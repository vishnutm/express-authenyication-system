
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()
const app  = express()

const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: false}))


const MONGO_URL = process.env.MONGO_URL

mongoose.connect(MONGO_URL).then(()=>{

    console.log("database connected")
}).catch(err=> console.log(err))

app.listen(port,()=>{

    console.log(`server started on ${port}`);
})