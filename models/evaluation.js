class Evaluation{
    constructor (name, matiere, classes, date) {
        this.name = name;
        this.matiere = matiere
        this.classes = classes
        this.date = date
    }
}

class EvaluationC {
    constructor (idEval,name, classe) {
        this.idEval = idEval
        this.name = name
        this.classe = classe
    }
}

module.exports = { Evaluation, EvaluationC } ;