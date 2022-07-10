<script setup>
import { Bar } from "vue-chartjs";
import { reactive } from "vue";
import Axios2 from '@/services/callerService.js'
import Axios from "../views/home";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { store, etat } from "../store/students";
import { storeToRefs } from "pinia";
const main = store();
const rendu = etat();
const { counter, doubleCount, student, page2, paginationp, userDetails, classe, search,filled} = storeToRefs(main)
let o = main.paginationp
const { allStu } = storeToRefs(rendu)
const { addStu, setOpposite } = rendu
const { studentO, npage, ppage, page, change } = main
let addUserShow = 0;
let displayStudent = 0
let testi
let popo
let none 
const state = reactive({
  displayStudent,
  addUserShow,
  testi:"",
  popo,
  none: false
});
function postUser(obj) {
  Axios2.post('/api/v1/student', {
    name: obj.name,
    surname: obj.surname,
    gender: obj.gender,
    adress: obj.adress,
    dateOfBirth: obj.dateOfBirth,
    classe: obj.classe,
    notes: obj.notes,
  }).then(async function (res) {
    console.log(res);
    let tmp = await Axios.api2()
    main.$patch({
      student: tmp.data
    })
    console.log(student, 'student');
  }).catch(function (err) {
    console.log(err);
  })
}
let studentPromise = await Axios.api2()
// let students = studentPromise.data
const submitUser = async function (event) {
  const user = Object.fromEntries(new FormData(event.target))
  postUser(user)
  state.addUserShow--
}
function howMany(obj, prop, value) {
  let len = obj.length
  let compteur = 0
  for (let i = 0; i < len; i++) {
    if (obj[i][prop] == value) {
      compteur++
    }
  }
  return compteur
}
function deleteStudent(id) {
  console.log('id:', id);
  Axios2.delete('/api/v1/student/' + id).then(async function (res) {
    let tmp = await Axios.api2()
    main.$patch({
      student: tmp.data
    })
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
}

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
let datas = {
  chartData: {
    labels: ["Filles", "Garcons"],
    datasets: [{ data: [howMany(studentO, "gender", "F"), howMany(studentO, "gender", "M")] }],
  },
  chartOptions: {
    responsive: true,
  },
  plugins: [],
  styles: {
    type: Object,
    default: () => { },
  },
  width: 400,
  height: 400,
};
let chartId = "1st chart";
function imgupload(e) {
  console.log(e, "img");
}

function displayDatas(obj) {
  state.displayStudent++
  console.log(obj, "obj");
  main.$patch({ userDetails: obj })
  console.log(userDetails, 'userDetails');
}
function sort (obj,input) {
  let inputS = input.toLowerCase()
  let dataArray = obj.filter(el => el.name.toLowerCase().includes(input) || el.surname.toLowerCase().includes(input))
  return dataArray
}
function formatTime (date) {
    var dtn = date; // on lit la date de naissance
    var an=dtn.substr(0,4); // l'année (les quatre premiers caractères de la chaîne à partir de 6)
    var mois=dtn.substr(5,2);// On selectionne le mois de la date de naissance
    var day= dtn.substr(8,2); // On selectionne la jour de la date de naissance

    var dateNaissance = (an + "-" + mois + "-" + day);
    return new Date (dateNaissance)
}
function CalculAge(date) {  
    var today = new Date();
    var dateNaissance = formatTime(date);
    var age = today.getFullYear() - dateNaissance.getFullYear();
    var m = today.getMonth() - dateNaissance.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dateNaissance.getDate())) {
        age = age - 1;
    }
    return age
}
</script>
<template>
  <div class="container-fluid pt-4 px-4">
    <div class="col-sm-12 col-xl-12">
      <div class="bga-light rounded h-100 p-4">
        <h6 class="mb-4">Toe</h6>
        <dl class="row mb-0">
          <dt class="col-sm-4">Nombre total d'élèves</dt>

          <dd class="col-sm-8"> {{ student.length }} éleves</dd>
          <dt class="col-sm-4">Filles</dt>
          <dd class="col-sm-8">{{ howMany(student, "gender", "F") }} Filles ({{ ~~(howMany(student, "gender", "F") * 100
              /
              student.length)
          }}%)</dd>
          <dt class="col-sm-4">Garcons</dt>
          <dd class="col-sm-8">{{ howMany(student, "gender", "M") }} Garcons ({{ ~~(howMany(student, "gender", "M") *
              100 /
              student.length)
          }}%)</dd>
        </dl>
        <Bar v-if="allStu === false" :chart-options="datas.chartOptions" :chart-data="datas.chartData"
          :chart-id="chartId" dataset-id-key="datasetIdKey" :plugins="datas.plugins" css-classes="cssClasses"
          :styles="datas.styles" :width="datas.width" :height="datas.height" />
        <div v-else class="container-fluid pt-4 px-4">
          <div class="bg-light text-center rounded p-4">
            <div class="d-flex align-items-center justify-content-between mb-4">
              <div class="d-flex align-items-center">
                <h6 class="mb-0">Tous les élèves</h6>
                <form class=" d-md-flex ms-5">
                  <input v-model="search"  class="form-control border-0" type="search" placeholder="Search">
                  <button type="button" class="btn btn-info rounded-pill m-2">rechercher</button>
                </form>
              </div>
              <a v-if=" paginationp['totalPage'] !== 0">Page : {{ page2 + 1 }} / {{ paginationp['totalPage'] }} </a>
              <a v-else> aucun résultat</a>
            </div>
            <div class="table-responsive">
              <table v-if="filled === true" class="table text-start align-middle table-bordered table-hover mb-0">
                <thead>
                  <tr class="text-dark">
                    <th scope="col">no</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Prénom</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Date de naissance</th>
                    <th scope="col">Classe</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(studentu, index) in paginationp" @dblclick="displayDatas(studentu)">
                    <td>{{index + 1  + o['length'] * page2}}</td>
                    <td>{{ studentu.name }}</td>
                    <td>{{ studentu.surname }}</td>
                    <td>{{ studentu.gender }}</td>
                    <td>{{ formatTime(studentu.dateOfBirth).toLocaleDateString('fr') }} {{CalculAge(studentu.dateOfBirth)}}Ans</td>
                    <td>{{ studentu.classe }}</td>
                    <td><a class="btn btn-sm btn-primary" @click="displayDatas(studentu)">Detail</a>
                      <div @click="deleteStudent(studentu['_id'])" class="btn btn-sm btn-danger m-2">X</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div v-else>Pas de résultats</div>
            </div>
            <div v-if=" paginationp['totalPage'] !== 0" class="btn-group mt-4" role="group" aria-label="First group">
              <button type="button" @click="ppage" class="btn btn-primary">-</button>
              <button type="button" @click="npage" class="btn btn-primary">+</button>
            </div>
          </div>
        </div>
        <div class="col-12 mt-5">
          <div class="d-flex align-items-center justify-content-center mb-3">
            <button v-on:click="state.addUserShow++" type="button" class="btn btn-primary m-2">
              <i class="fa-solid fa-user-plus me-2"></i> Ajouter un élève
            </button>
            <button v-if="allStu === false" v-on:click="setOpposite()" type="button" class="btn btn-primary m-2">
              <i class="fa-solid fa-user-plus me-2"></i>Tous les éleves
            </button>
            <button v-else v-on:click="setOpposite()" type="button" class="btn btn-primary m-2">
              <i class="fa-solid fa-chart-simple me-2"></i>Graphique
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modale ajout user -->
    <div class="modal-adduser" v-if="state.addUserShow == 1">
      <div class="overlay"></div>
      <div class="modale card">
        <div v-on:click="state.addUserShow--" class="btn-modale btn btn-danger">
          X
        </div>
        <div class="col-sm-12 col-xl-12">
          <div class="bg-light rounded h-100 p-4">
            <h6 class="mb-4">Ajouter un éleve</h6>
            <form @submit.prevent="submitUser">
              <div class="mb-3">
                <label for="Nom" class="form-label">Nom</label>
                <input name="name" type="text" class="form-control" id="Nom" />
                <label for="exampleInputEmail1" class="form-label">Prénom</label>
                <input autocomplete="off" name="surname" type="text" class="form-control" id="exampleInputEmail1" />
                <div class="mb-2 mt-2">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gender" id="inlineRadio1" value="F">
                    <label class="form-check-label" for="inlineRadio1">Femme </label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gender" id="inlineRadio2" value="M">
                    <label class="form-check-label" for="inlineRadio2">Homme</label>
                  </div>
                </div>
                <label for="dateb" class="form-label">Date de naissance</label>
                <input name="dateOfBirth" type="date" class="form-control" id="dateb" />
                <label for="exampleInputEmail1" class="form-label">Classe</label>
                <select name="classe" class="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                  <option v-for="classeu in classe" v-bind:value="classeu.name">{{classeu.name}} ({{classeu.ProfPrincipal}})</option>
                </select>
                <div class="mb-3">
                  <label for="formFile" class="form-label" accept=".png, .jpg, .jpeg">ajouter une photo</label>
                  <input class="form-control" type="file" id="formFile" @change="imgupload">
                </div>
                <label for="exampleInputEmail1" class="form-label">Notes</label>
                <input name="notes" type="textaera" aria-label="With textarea" class="form-control" id="notes"
                  aria-describedby="notes" />
                <div  class="form-text">remarques sur l'élève</div>
              </div>
              <button type="submit" class="btn btn-primary">Ajouter</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-adduser " v-if="state.displayStudent == 1">
      <div class="overlay"></div>
      <div class="modale card col-sm-12 col-xl-12">
        <div v-on:click="state.displayStudent--" class="btn-modale btn btn-danger">
          X
        </div>
        <div class="col-sm-12 col-xl-12">
          <div class="bg-light rounded h-100 p-4">
            <div class="d-flex align-items-center ms-4 mb-4">
              <div class="position-relative">
                <img class="rounded-circle" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">
              </div>
              <div class="ms-3">
                <h6 class="mb-0">{{ userDetails.name }} {{ userDetails.surname }}</h6>
                <span>{{ userDetails.classe }}</span>
              </div>
              <button type="button" class="btn btn-outline-primary ms-4">Modifier</button>
            </div>

            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                  type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Informatios sur l'élève</button>
                <button class="nav-link active" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact"
                  type="button" role="tab" aria-controls="nav-contact" aria-selected="true">Notes</button>
              </div>
            </nav>
            <div class="tab-content pt-3" id="nav-tabContent">
              <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                {{userDetails.notes}}
              </div>
              <div class="tab-pane fade active show" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                Sit consetetur eirmod lorem ea magna sadipscing ipsum elitr invidunt, dolores lorem erat ipsum ut
                aliquyam eos lorem sed. Nonumy aliquyam ea justo eos dolores dolores duo dolores. Aliquyam dolor sea
                dolores sit takimata no erat vero. At lorem justo tempor lorem duo, stet kasd aliquyam ipsum voluptua
                labore at.
              </div>
            </div>
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
  top: 10px;
  right: 10px;
}
</style>
