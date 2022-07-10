function admin (req, res, next ) {
    if(req.body.password === "0") return res.status(403).send({
        ok:false,
        error: "acces refusé"
    })
    next();
}

module.exports = {admin}