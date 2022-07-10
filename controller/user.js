const { Users } = require("../models/users")
const client = require("../db/connect");
const { ObjectId } = require("bson");
const addUser = async (req, res) => {
    try {
        let user = new Users(req.body.nom, req.body.adresse, req.body.telephone)

        let result = await client.bd().collection("utilisateurs").insertOne(user);

        res.status(200).json(result)
    }catch (error){
        console.log(error);
        res.status(500).json(error)
    }
}

const getAllUsers = async (req, res) => {
    try{
        let cursor = client.bd().collection("utilisateurs").find();
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

const getUser = async (req, res) => {
    try{
        let id = new ObjectId(req.params.id)
        let cursor = client.bd().collection("utilisateurs").find({_id : id});
        let result = await cursor.toArray();
        if (result.length > 0) {
            res.status(200).json(result[0]);
        }else {
            res.status(200).json({msg: "cet user n'existe pas"})
        }
    }catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

const modifierUser = async (req, res) => {
    try{
        let id = new ObjectId(req.params.id)
        let nNom = req.body.nom
        let nAdresse = req.body.adresse
        let nTelephone = req.body.telephone

        let result  = await client.bd().collection("utilisateurs").updateOne({_id : id}, {$set : {nom : nNom, adresse : nAdresse, telephone : nTelephone}});
        res.status(200).json({msg : "Modifier avec succes"});
    }catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const supUser = async (req, res) => {
    try{
        let id = new ObjectId(req.params.id)

        let result  = await client.bd().collection("utilisateurs").deleteOne({_id : id});
        res.status(200).json(result);
    }catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports = {addUser, getAllUsers,getUser, modifierUser, supUser};