const knex = require("../db/connection")

const list=()=>{
    return knex("notes")
        .select("*")
}
const read=(id)=>{
    return knex("notes")
        .select("*")
        .where({id})
        .first()
}
const update=(updatedNote)=>{
    return knex("notes")
        .select("*")
        .where({id:updatedNote.id})
        .update(updatedNote)
        .returning("*")
        .then((note)=>note[0])
}
const create=(newNote)=>{
    return knex("notes")
        .insert(newNote)
        .returning("*")
        .then((note)=>note[0])
}
const destroy=(id)=>{
    return knex("notes")
    .where({id})
    .del()
}
module.exports={
    list,
    read,
    update,
    create,
    destroy,
}