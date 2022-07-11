const client = require("../db/connect")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const getAuthToken = async (req, res) => {
    try {
        let email = req.body.email
        console.log(email);
        const user = await client.bd().collection("users").find({ email: email }).toArray()
        if (user.length === 0) {
            res.status(401).json({ msg: "email introuvable" })
            return
        } 
        const valid = req.body.password == user[0]['password']
        if (!valid) {
            res.status(401).json({ msg: "mauvais mot de passe" })
        } else {
            const token = jwt.sign({
                id: user[0]["_id"],

            }, "jwtPrivateKey", { expiresIn: "50m" })
            res.send({
                ok: true,
                token: token
            })
            
        }

    } catch (error) {
        console.log(error);

    }
}

const checkToken = async (req, res) => {
    try {        
        res.status(200).json(true)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { getAuthToken, checkToken }