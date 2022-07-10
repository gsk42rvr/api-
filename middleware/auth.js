const jwt = require("jsonwebtoken")

module.exports = (req,res,next) => {
    const token = req.header("token");
    if(!token) return res.status(401).send({
        ok: false,
        error: "auccun token fourni"
    });

    try {
        const decoded = jwt.verify(token, "jwtPrivateKey")
        req.user = decoded
    }
    catch (error) {
        return res.status(401).send({
            ok:false,
            error:"Token expiré"
        })
    }
    next();
}