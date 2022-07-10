const { Departement } = require("../models/departement")
const client = require("../db/connect");
const mongoose = require('mongoose');
const { ObjectId } = require("bson");
const date = new Date()

const checkParams = (obj,objI) => {
    let nobj = []
    if (obj.name === undefined) {
        nobj.name = objI.name
    } else {
        nobj.name = obj.name
    } 
    if (obj.profs === undefined) {
        nobj.profs = objI.profs
    } else {
        nobj.profs = obj.profs
    }
    if (obj.matieres === undefined) {
        nobj.matieres = objI.matieres
    } else {
        nobj.matieres = obj.matieres
    }
    return nobj
}
const createDepartement = async (req,res) => {
    try {
        let cursor = client.bd().collection("Departement").find({name : req.body.name})
        let res1 = await cursor.toArray()
        if (res1.length > 0) {
            res.status(200).json({msg: "Ce departement existe déja"})
        } else {
            let departement = new Departement(req.body.name, req.body.profs,null, date, date)
            let result = await client.bd().collection("Departement").insertOne(departement);
            res.status(200).json(result)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error)

    }
}

const updateDepartement = async (req,res) => {
    try{
        if (mongoose.Types.ObjectId.isValid(req.params.id) === true) {
            let id = new ObjectId(req.params.id)
            let cursor0 = client.bd().collection("Departement").find({_id : id});
            let result = await cursor0.toArray()
            let newDep = checkParams(req.body,result[0])
            let modifications  = await client.bd().collection("Departement").updateOne({_id : id}, {$set : {name : newDep.name, profs : newDep.profs, matieres: newDep.matieres, lastUpdate : date}});
            res.status(200).json({msg:"modifié avec succes"})
        } else {
            res.status(200).json({msg:"ID invalide"})

        }
    } catch (error) {

    }
}

module.exports = {createDepartement, updateDepartement}