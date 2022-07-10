const { Classe } = require("../models/classes");
const client = require("../db/connect");
const { ObjectId } = require("bson");

const addClass = async (req, res) => {
    try {
        let classe = new Classe(req.body.name, req.body.ProfPrincipal, req.body.eleveDelegue )
        let result = await client.bd().collection("classes").insertOne(classe)
        res.status(200).json(result)
    }catch (error){
        console.log(error);
        res.status(500).json(error)
    }
}

const getAllClasses = async (req, res ) => {
    try {
        let cursor = client.bd().collection("classes").find();
        let result = await cursor.toArray();
        if (result.length > 0) {
            res.status(200).json(result);
            console.log('Requette a l api');
        }else {
            res.status(204).json({msg: "Aucun utilisateur trouvé !"})
        }
    } catch(error) {
        console.log(error);
        res.status(500).json(error)
    }
}

const getTotalStudent = async (req,res) => {
    try {
        let id = req.params.name
        let cursor = await client.bd().collection("Students").find({classe: id})
        let result = await cursor.toArray();
        res.status(200).json(result.length)

    } catch (error){
        console.log(error);
        res.status(500).json(error)
    }

}

const supclass = async (req, res) => {
    try{
        let id = new ObjectId(req.params.id)

        let result  = await client.bd().collection("classes").deleteOne({_id : id});
        res.status(200).json(result);
    }catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports  =  {addClass, getAllClasses, supclass, getTotalStudent}