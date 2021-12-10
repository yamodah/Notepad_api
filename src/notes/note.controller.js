const service = require("./note.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

async function list (req,res,next){
    const data = await service.list()
    res.json({data})
}
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
      message: "Movie cannot be found",
    });
  }
function read(req, res, next){
    res.json({data:res.locals.note})
}
async function create(req, res, next){
    
}