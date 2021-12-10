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
}
const create=(newNote)=>{
    return knex("notes")
        .insert(newNote)
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