import { defineStore } from "pinia";
import Axios2 from "../views/home";
let z = await Axios2.api2();
let classeReq = await Axios2.api3("classe");
let profReq = await Axios2.api3("prof")
let evaluationReq = await Axios2.api3("evaluation")
let getNextdEvalsReq = await Axios2.api3("nextevaluation")
let getPassedEvalsReq = await Axios2.api3("passedevaluation")

function pagination(obj, el, pg) {
    let len = obj.length;
    let nombreDePages = Math.ceil(len / el);
    let start = pg * el;
    let objF = [];
    let ii = 0;
    for (let i = start; i < el * (pg + 1); i++) {
        if (obj[i] === undefined) {
            objF["page"] = pg;
            objF["totalPage"] = nombreDePages;
            return objF;
        }
        objF[ii] = obj[i];
        ii++;
    }
    objF["page"] = pg;
    objF["totalPage"] = nombreDePages;
    return objF;
}

function sort (obj,input) {
    let inputS = input.toLowerCase()
    let dataArray = obj.filter(el => el.name.toLowerCase().includes(inputS) || el.surname.toLowerCase().includes(inputS) || el.classe.toLowerCase().includes(inputS) )
    return dataArray
  }
const store = defineStore("main", {
    state: () => ({
        counter: 0,
        studentO: z.data,
        student: z.data,
        page: 0,
        page2: 0,
        userDetails: [],
        classe: classeReq.data,
        onSearch: false,
        search:"",
        filled: true,
        classSelector: null,
        prof: profReq.data,
        profDetails: [],
        evaluation: evaluationReq.data,
        getNextdEvals: getNextdEvalsReq.data,
        getPassedEvals: getPassedEvalsReq.data,
    }),

    getters: {
        doubleCount: (state) => {
            return state.counter * 2;
        },
        paginationp: (state) => {
            if (state.search !== "") {
                state.filled = true
                state.onSearch = true
                if (state.page > pagination(sort(state.student,state.search), 5, state.page).length){
                    state.page--;
                    state.page2--; 
                }if (state.page < 0){
                    state.page++;
                    state.page2++; 
                }

            }else{
                state.onSearch = false
                state.filled = true
            }
            if (state.onSearch === true) {
                if ( pagination(sort(state.student,state.search), 5, state.page).length === 0){
                    state.filled = false
                }if ( pagination(sort(state.student,state.search), 5, state.page).length > 0) {
                    return pagination(sort(state.student,state.search), 5, state.page)
                }
                 else {
                    return pagination(sort(state.student,state.search), 5, state.page);
                }
            }if (state.page > pagination(state.student, 5, state.page)) {
                state.page--;
                state.page2--;
                console.log(pagination(state.student,5,state.page).length,'length');
                return pagination(state.student, 5, state.page);
            }
            if (state.page < 0) {
                state.page++;
                state.page2++;
                console.log(pagination(state.student,5,state.page).length,'length');
                return pagination(state.student, 5, state.page);
            } else {
                console.log(pagination(state.student,5,state.page).length,'length');
                return pagination(state.student, 5, state.page);
            }
        },
        paginationc: (state) => {
            return pagination(state.classe, 5, state.page);
        },
        classStudents: (state) => {
            if (state.classSelector !== null) {
                return sort(state.student, state.classSelector)
            }
        }
    },
    actions: {
        reset() {
            this.counter = 0;
        },
        addOne() {
            this.counter++;
        },
        arrayPush(data) {
            this.student.push(data);
        },
        npage() {
            this.page++;
            this.page2++;
        },
        ppage() {
            this.page--;
            this.page2--;
        },
        change() {
            this.onSearch = true;
            console.log(this.onSearch);
        }
    },
});

const etat = defineStore("all", {
    state: () => ({
        addStu: true,
        allStu: true,
    }),

    actions: {
        setOpposite() {
            if (this.allStu === true) {
                this.allStu = false;
            } else {
                this.allStu = true;
            }
        },
    },
});
export { store, etat, classeReq };
