
const express = require('express')
const QuestionModel = require('./Model/Questions')
const JobModel = require('./Model/Job')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

app.use(cors()) 
app.use(express.json()) 

app.use(express.urlencoded({ extended: true }))

// console.log(process.env.DATABASE_URL)
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })

app.get('/',(req,res)=>res.send(`hello`))

app.get("/api/jobs",async(req, res)=>{
    const jobs = await JobModel.find({})
    res.send(jobs);
})
app.post("/api/jobs",async(req,res)=>{
    const {company,postedAt,city,location,role,level,contract,position,language} = req.body;     
     const job = new JobModel({company,postedAt,city,location,role,level,contract,position,language})
     await job.save();
     res.status(201).send({
         message:"Job Created Succesfully!"
     })

})

// app.get("/api/quiz",async(req, res)=>{
//     const quiz = await QuestionModel.find({})
//     res.send(quiz);
// })
// app.get("/api/quiz/easy",async(req, res)=>{
//     const quiz = await QuestionModel.find({difficultyLevel:"Easy"})
//     res.send(quiz);
// })
// app.get("/api/quiz/medium",async(req, res)=>{
//     const quiz = await QuestionModel.find({difficultyLevel:"Medium"})
//     res.send(quiz);
// })
// app.get("/api/quiz/hard",async(req, res)=>{
//     const quiz = await QuestionModel.find({difficultyLevel:"Hard"})
//     res.send(quiz);
// })
// app.get("/api/quiz/sports",async(req, res)=>{
//     const quiz = await QuestionModel.find({category:"Sports"})
//     res.send(quiz);
// })
// app.get("/api/quiz/geographical",async(req, res)=>{
//     const quiz = await QuestionModel.find({category:"Geographical"})
//     res.send(quiz);
// })
// app.get("/api/quiz/music",async(req, res)=>{
//     const quiz = await QuestionModel.find({category:"Music"})
//     res.send(quiz);
// })




const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Database connected'))

app.listen(process.env.PORT, () => {
    console.log("The API is Working.")
})