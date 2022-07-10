const { Note } = require("../models/notes")
const client = require("../db/connect");
const mongoose = require('mongoose');
const { ObjectId } = require("bson");

function checkInscription(obj, obj2) {
    let result = false
    for (let index = 0; index < obj.length; index++) {
        if (obj[index] === obj2.classe) {
            result = true
            return result
        }
    }
    return (result);
}
const addNote = async (req, res) => {
    try {
        if (mongoose.Types.ObjectId.isValid(req.params.evalId) === true && mongoose.Types.ObjectId.isValid(req.params.userId) === true) {
            let evalId = new ObjectId(req.params.evalId);
            let userId = new ObjectId(req.params.userId);
            let cursorEval = await client.bd().collection("evaluations").find({ _id: evalId }).toArray()
            let cursorUser = await client.bd().collection("Students").find({ _id: userId }).toArray()
            let already = await client.bd().collection("notes").find({
                studentId: userId,
                evalId: evalId
            }).toArray()
            if (already.length > 0) {
                res.status(200).json({ msg: "Note déja existatnte pour cet élève" })
                return
            }
            if (cursorEval.length > 0) {
                if (cursorUser.length > 0) {
                    if (checkInscription(cursorEval[0]['classes'], cursorUser[0]) === true) {
                        let note = new Note(evalId, userId, req.body.note, req.body.bonus)
                        let result = await client.bd().collection("notes").insertOne(note)
                        res.status(200).json(result)
                        console.log("ok");
                    } else {
                        console.log("mauvaise classe");
                    }
                } else {
                    res.status(200).json({ msg: "Aucun eleve trouvé avec cet id " })
                }
            } else {
                res.status(200).json({ msg: "Aucune Evaluation trouvé avec cet id" })
            }


        } else {
            res.status(200).json({ msg: "Vos parametres ne sont pas des ObjectId" })
        }

    } catch (error) {

    }
}

const getNote = async (req, res) => {
    try {
        if (mongoose.Types.ObjectId.isValid(req.params.evalId) === true && mongoose.Types.ObjectId.isValid(req.params.userId) === true) {
            let userId = new ObjectId(req.params.userId)
            let cursorUser = await client.bd().collection('Students').find({ _id: userId }).toArray()
            if (cursorUser.length > 0) {
                let evalId = new ObjectId(req.params.evalId)
                let cursorEval = await client.bd().collection("evaluations").find({ _id: evalId }).toArray()
                if (cursorEval.length > 0) {
                    let result = await client.bd().collection("notes").find({
                        evalId: evalId,
                        studentId: userId
                    }).toArray()
                    res.status(200).json(result[0])
                } else {
                    res.status(400).json({ msg: "evaluation inexistante" })
                }
            } else {
                res.status(400).json({ msg: "eleve inexistant" })
            }

        } else {
            res.status(400).json({
                msg: "id invalide",
                log: mongoose.Types.ObjectId.isValid(req.params.evalId),
                log2: mongoose.Types.ObjectId.isValid(req.params.userId)
            })
            return
        }
    } catch (error) {
        console.log(error);
    }
}

const getNotes = async (req, res) => {
    try {
        if (mongoose.Types.ObjectId.isValid(req.params.userId) === true) {
            let userId = new ObjectId(req.params.userId)
            let cursorUser = await client.bd().collection('Students').find({ _id: userId }).toArray()
            if (cursorUser.length > 0) {
                let result = await client.bd().collection("notes").find({studentId: userId}).toArray()
                res.status(200).json(result)
            } else {
                res.status(400).json({ msg: "eleve inexistant" })
            }

        } else {
            res.status(400).json({
                msg: "id invalide",
                log: mongoose.Types.ObjectId.isValid(req.params.evalId),
                log2: mongoose.Types.ObjectId.isValid(req.params.userId)
            })
            return
        }
    } catch (error) {
        console.log(error);
    }
}
module.exports = { addNote, getNote, getNotes }