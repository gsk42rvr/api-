const { Evaluation, EvaluationC } = require("../models/evaluation")
const { ObjectId } = require("bson");
const mongoose = require('mongoose');
const client = require("../db/connect");
const date = new Date()
function formatTime(date) {
    var dtn = date; // on lit la date de naissance
    var an = dtn.substr(0, 4); // l'année (les quatre premiers caractères de la chaîne à partir de 6)
    var mois = dtn.substr(5, 2);// On selectionne le mois de la date de naissance
    var day = dtn.substr(8, 2); // On selectionne la jour de la date de naissance
  
    var dateNaissance = (an + "-" + mois + "-" + day);
    return new Date(dateNaissance)
  }
function passed (array,bool) {
    let value = []
    if (bool === true )
    {
        for (let index = 0; index < array.length; index++) {
            if (formatTime(array[index]['date']) < date) {
                value.push(array[index])
            }  
        }
        return value
    } else {
        for (let index = 0; index < array.length; index++) {
            if (formatTime(array[index]['date']) > date) {
                value.push(array[index])
            }  
        }
        return value
    }
    
}
const addEval = async (req, res) => {
    try {
        let evaluation = new Evaluation(req.body.name, req.body.matiere, req.body.classes, req.body.date)
        let classes = req.body.classes
        let result = await client.bd().collection("evaluations").insertOne(evaluation)
        for (let index = 0; index < classes.length; index++) {
            let classeCursor = await client.bd().collection('Students').find({
                classe : classes[index]
            }).toArray()    
            for (let index2 = 0; index2 < classeCursor.length; index2++) {
                let inscription = await client.bd().collection("evalInscriptions").insertOne({
                    evalId: result.insertedId,
                    studentId: classeCursor[index2]['_id'],
                    name: classeCursor[index2]['name'],
                    inscriptionDate: date
                })
            }        
        }
        res.status(200).json({mstg:'ok'})
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
const getAllEvals = async (req, res) => {
    try{
        let cursor = client.bd().collection("evaluations").find()
        let result = await cursor.toArray()
        if (result.length > 0) {
            res.status(200).json(result)
        }else {
            res.status(204).json({msg:"Aucune evaluation trouvée"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

const getPassedEvals = async (req, res) => {
    try{
        let cursor = client.bd().collection("evaluations").find()
        let result = await cursor.toArray()
        let result2 = passed(result,true)
        if (result2.length > 0) {
            res.status(200).json(result2)
        }else {
            res.status(204).json({msg:"Aucune evaluation trouvée"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
const getNextdEvals = async (req, res) => {
    try{
        let cursor = client.bd().collection("evaluations").find()
        let result = await cursor.toArray()
        let result2 = passed(result,false)
        if (result2.length > 0) {
            res.status(200).json(result2)
        }else {
            res.status(204).json({msg:"Aucune evaluation trouvée"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


const getEval = async (req, res) => {
    try{
        if (mongoose.Types.ObjectId.isValid(req.params.id) === true) {
            let id = new ObjectId(req.params.id)
            let cursor = client.bd().collection("evaluations").find({_id : id})
            let result = await cursor.toArray()
            if (result.length > 0) {
                res.status(200).json(result)
            }else{
                res.status(400).json({msg:"pas de resultats"})
            }
        } else {
            res.status(400).json({msg:"Mauvaise requette"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
module.exports = { addEval, getAllEvals, getPassedEvals, getNextdEvals, getEval}