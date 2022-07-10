<script setup>
import { storeToRefs } from 'pinia';
import { reactive } from 'vue';
import { store } from '../store/students'
import Axios2 from '../services/callerService';
import Axios from '../views/home';
import dayjs from 'dayjs'
import localeDe from "dayjs/locale/de"
import localeFr from "dayjs/locale/es"
import customParseFormat from "dayjs/plugin/customParseFormat"
import advancedFormat from "dayjs/plugin/advancedFormat";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import calendar from "dayjs/plugin/calendar";

// Load plugins
dayjs.extend(customParseFormat)
dayjs.extend(advancedFormat);
dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);
dayjs.extend(calendar);
console.log(dayjs("2009/06/29",).locale(localeFr).format("DD MMMM YYYY"));
console.log(
  dayjs()
    .locale(localeDe)
    .format(), 'de',
    dayjs()
    .locale(localeFr)
    .format(), 'fr',

);
const date = new Date();
console.log(date);
const main = store();
let state = reactive({
    addEval: false,
    selectedClasses: [],
    avEval: [],
    pEval: [],
    evalDetails: false,
    activeEval: []
})

const { evaluation, classe, getNextdEvals, getPassedEvals } = storeToRefs(main)

function formatTime(date) {
  var dtn = date; // on lit la date de naissance
  var an = dtn.substr(0, 4); // l'année (les quatre premiers caractères de la chaîne à partir de 6)
  var mois = dtn.substr(5, 2);// On selectionne le mois de la date de naissance
  var day = dtn.substr(8, 2); // On selectionne la jour de la date de naissance

  var dateNaissance = (an + "-" + mois + "-" + day);
  return new Date(dateNaissance)
}

function postEval(obj) {
    Axios2.post('/api/v1/evaluation', {
        name: obj.name,
        matiere: obj.matiere,
        classes: state.selectedClasses,
        date: obj.date,
    }).then(async function (res) {
        let tmp = await Axios.api3('passedevaluation')
        let tmp2 = await Axios.api3('nextevaluation')
        main.$patch({
            getPassedEvals: tmp.data,
            getNextdEvals: tmp2.data
        })
        state.selectedClasses = []
        console.log(res);
    }).catch(function (err) {
        console.log(err);
    })
}

const submitEval = async function (event) {
    const user = Object.fromEntries(new FormData(event.target))
    postEval(user)
    state.addEval = false
}
function curentEval(obj) {
    state.activeEval = []
    state.evalDetails = true;
    state.activeEval.push(obj)
    console.log('active eval', state.activeEval);
}
</script>

<template>
{{dayjs('05/02/69 1:02:03 PM -05:00').locale(localeFr).format("DD MMMM YYYY")}}
    <div class="container-fluid pt-4 px-4">
        <div class="bg-light rounded d-flex align-items-center p-1">
            <h2>Evaluations</h2>
            <div v-if="state.evalDetails" class="ms-4">
                <a @click="state.evalDetails = false">back</a>
            </div>
        </div>
        <div v-if="state.evalDetails === false" class="bg-light rounded d-flex align-items-center p-2">
            <a @click="state.addEval = true"><i class="fas fa-plus-circle"></i> Nouvelle evaluation</a>
        </div>
        <div v-if="state.evalDetails === false" class="container-fluid pt-4 px-4">
            <div class="row g-4">
                <div class="col-sm-6 col-xl-6">
                    <div class="alert-warning rounded">
                        <div class="d-flex align-items-center justify-content-start p-4">
                            <i class="fa fa-chart-line fa-3x text-primary"></i>
                            <div class="ms-5">
                                <h5 class="mb-0">Evaluations Terminées</h5>
                            </div>
                        </div>
                        <div class="col-sm-12 col-xl-12 p-4">
                            <div v-for=" evaluationU in getPassedEvals" class="bg-light rounded h-100 p-4 mb-4">
                                <h6 @click="curentEval(evaluationU)" class="mb-4">{{ evaluationU.name }}</h6>
                                <nav>
                                    classes:
                                    <span>
                                        <a v-for="classeU in evaluationU.classes" class="me-2">{{ classeU }}</a>
                                    </span>
                                </nav>
                                <div class="tab-content pt-3" id="nav-tabContent">
                                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel"
                                        aria-labelledby="nav-home-tab">
                                        Diam sea sanctus amet clita lorem
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-xl-6">
                    <div class="alert-success rounded">
                        <div class="d-flex align-items-center justify-content-start p-4">
                            <i class="fa fa-chart-line fa-3x text-primary"></i>
                            <div class="ms-5">
                                <h5 class="mb-0">Evaluations a venir</h5>
                            </div>
                        </div>
                        <div class="col-sm-12 col-xl-12 p-4">
                            <div v-for=" evaluationU in getNextdEvals" class="bg-light rounded h-100 p-4 mb-4">
                                <h6 @click="curentEval(evaluationU)" class="mb-4">{{ evaluationU.name }}</h6>
                                <nav>
                                    classes:
                                    <span>
                                        <a v-for="classeU in evaluationU.classes" class="me-2">{{ classeU }}</a>
                                    </span>
                                </nav>
                                <div class="tab-content pt-3" id="nav-tabContent">
                                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel"
                                        aria-labelledby="nav-home-tab">
                                        Diam sea sanctus amet clita lorem
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="state.evalDetails === true" class="container-fluid pt-4 px-4">
            <h2>{{state.activeEval[0]['name']}}</h2>
            <span class="ps-4">{{formatTime(state.activeEval[0]['date'])}}</span>
        </div>
        <div v-if="state.addEval === true" class="modal-adduser">
            <div class="overlay"></div>
            <div class="modale card">
                <div @click="state.addEval = false" class="btn-modale btn">
                    <i style="color: red;" class="fas fa-times-circle"></i>
                </div>
                <div class="col-sm-12 col-xl-12">
                    <div class="bg-light rounded h-100 p-1">
                        <h2 class="mb-4">Nouvelle Evaluation</h2>
                        <form @submit.prevent="submitEval">
                            <div class="mb-3">
                                <label for="Nom" class="form-label">Intitulé</label>
                                <input name="name" type="text" class="form-control" id="Nom" />
                                <label for="matiere" class="form-label">Matiere</label>
                                <input name="matiere" type="text" class="form-control">
                                <label for="classes" class="form-label">Classes</label>
                                <a v-if="state.selectedClasses.length > 0" class="d-flex justify-content-start">
                                    <li class="list-group me-5" v-for="(classe) in state.selectedClasses">{{ classe }}
                                    </li>
                                </a>
                                <input type="hidden" class="form-control" name="classes"
                                    v-bind:value="state.selectedClasses">
                                <div v-for="classeU in classe">
                                    <input v-model="state.selectedClasses" class="form-check-input" type="checkbox"
                                        id="inlineCheckbox1" v-bind:value="classeU.name"> {{ classeU.name }}
                                </div>
                                <label for="date" class="form-label">Date</label>
                                <input name="date" type="date" class="form-control">
                            </div>
                            <button type="submit" class="btn btn-primary">Ajouter</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.modal-adduser {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.modale {
    background: whitesmoke;
    position: fixed;
    width: 45vw;
    padding: 50px;
    top: 10%;
}

.btn-modale {
    position: absolute;
    height: 50px;
    top: 10px;
    right: 10px;
}
</style>