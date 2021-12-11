const express = require("express")
const app = express()
const cors = require("cors")
const notFound = require("./errors/notFound")
const errorHandler = require("./errors/errorHandler")
const notesRouter = require("./notes/note.router")
app.use(express.json())
app.use(cors())


app.use("/notes",notesRouter)
app.get("/",(req,res,next)=>{
    res.send("We are over at /notes !")
})
app.use(notFound)
app.use(errorHandler)

module.exports = app