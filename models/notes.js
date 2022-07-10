class Note {
    constructor(evalId, studentId, note, bonus){
        this.evalId = evalId;
        this.studentId = studentId;
        this.note = parseInt(note, 10);
        this.bonus = parseInt(bonus, 10);;
        this.total = this.note + this.bonus
    }
}
module.exports = {Note};