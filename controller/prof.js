const { Prof } = require("../models/profs")
const client = require("../db/connect");
const { ObjectId } = require("bson");

let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

function checkParams (Prof){
    if (Prof.name === undefined || Prof.surname  === undefined || Prof.classes === undefined || Prof.matiere === undefined || Prof.principal === undefined || Prof.dateOfBirth === undefined || Prof.phone === undefined || Prof.mail === undefined || Prof.volumeHoraire === undefined) {
        console.log('Champ(s) manquant(s)');
        return false
    }else if (Prof.name === "" || Prof.surname  === "" || Prof.classes === "" || Prof.matiere === "" || Prof.principal === "" || Prof.dateOfBirth === "" || Prof.phone === "" || Prof.mail === "" || Prof.volumeHoraire === "") {
        console.log('Champ(s) manquant(s)');
        return false
    }else if (regex.test(Prof.mail) === false) {
        console.log('email non valide');
        return false;
    }else{
        return true
    }
}
const addProf = async (req, res) => {
    try {
        let result;
        let prof = new Prof(req.body.name, req.body.surname, req.body.classes, req.body.matiere, req.body.principal, req.body.dateOfBirth, req.body.phone, req.body.mail, req.body.volumeHoraire)
        console.log(prof);
        if(prof) {
            result = await client.bd().collection("prof").insertOne(prof);
        }else {
           return res.status(500).json({ err: "parametres incomplets"})
        }

        res.status(200).json(result)
    }catch (error){
        console.log(error);
        res.status(500).json(error)
    }
}

const getAllProfs = async (req, res) => {
    try{
        let cursor = client.bd().collection("prof").find();
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

const supProf = async (req, res) => {
    try{
        let id = new ObjectId(req.params.id)

        let result  = await client.bd().collection("prof").deleteOne({_id : id});
        res.status(200).json(result);
    }catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
module.exports = {addProf,getAllProfs,supProf}