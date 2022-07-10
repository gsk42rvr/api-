const { Student } = require("../models/students")
const client = require("../db/connect");
const { ObjectId } = require("bson");

const addStudent = async (req, res) => {
    try {
        let student = null
        let Name = req.body.name;
        if (Name.length < 2) {
            let error1 = {
                error: "nom trop cout"
            }
            res.status(500).json(error1)
            return
            
        }else {
            student = new Student(Name,req.body.surname,req.body.gender, req.body.adress, req.body.dateOfBirth, req.body.classe, req.body.notes)

        }

        let result = await client.bd().collection("Students").insertOne(student);

        res.status(200).json(result)
    }catch (error){
        console.log(error);
        res.status(500).json(error)
    }
}

const getAllStudents = async (req, res) => {
    try{
        let cursor = client.bd().collection("Students").find();
        let result = await cursor.toArray();
        if (result.length > 0) {
            res.status(200).json(result);
            console.log('Requette a l api');
        }else {
            res.status(204).json({msg: "Aucun utilisateur trouvé !"})
        }
    }catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
const supStudent = async (req, res) => {
    try{
        let id = new ObjectId(req.params.id)

        let result  = await client.bd().collection("Students").deleteOne({_id : id});
        res.status(200).json(result);
    }catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
const modifierStudent = async (req, res) => {
    try{
        let id = new ObjectId(req.params.id)
        let nNom = req.body.name
        let nSurname = req.body.surname
        let nGender = req.body.gender
        let nAdress = req.body.adress
        let nDateOfBirth =req.body.dateOfBirth
        let nClasse = req.body.classe
        let nNotes =req.body.notes

        let result  = await client.bd().collection("Students").updateOne({_id : id}, {$set : {nom : nNom, surname : nSurname, gender : nGender, adress : nAdress, dateOfBirth: nDateOfBirth, classe: nClasse, notes: nNotes}});
        res.status(200).json({msg : "Modifier avec succes"});
    }catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports = {addStudent, getAllStudents, supStudent,modifierStudent}