const service = require("./note.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")
const hasProperties = require("../errors/hasProperties")

//ID VALIDATION
async function noteExists(req, res, next) {
    const { noteId } = req.params;
  
    const foundNote = await service.read(noteId);
  
    if (foundNote) {
      res.locals.note = foundNote;
      return next();
    }
    next({
      status: 404,
      message: "Note cannot be found",
    });
  }
//TITLE & CONTENT VALIDATION
const hasTitleAndContent = hasProperties("title","content")

//CRUD FUNCTIONS 
async function list (req,res,next){
    const data = await service.list()
    res.json({data})
}
function read(req, res, next){
    res.json({data:res.locals.note})
}
async function create(req, res, next){
    const data = await service.create(req.body)
    res.status(201).json({data})
}
async function update(req, res, next){
    const updatedNote = {
        ...req.body,
        id:res.locals.note.id
    }
    const data = await service.update(updatedNote)
    res.json({data})
}
async function destroy(req, res, next){
    await service.destroy(res.locals.note.id)
    res.sendStatus(204)
}

module.exports = {
    list,
    read:[asyncErrorBoundary(noteExists), read],
    create:[asyncErrorBoundary(hasTitleAndContent), asyncErrorBoundary(create)],
    update:[asyncErrorBoundary(noteExists),asyncErrorBoundary(update)],
    delete:[asyncErrorBoundary(noteExists),asyncErrorBoundary(destroy)]
}