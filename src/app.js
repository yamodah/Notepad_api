const express = require("express")
const app = express()
const cors = require("cors")
const notFound = require("./errors/notFound")
const errorHandler = require("./errors/errorHandler")
const notesRouter = require("./notes/note.router")
app.use(cors())
app.use(express.json())

app.use("notes",notesRouter)

app.use(notFound)
app.use(errorHandler)

module.exports = app