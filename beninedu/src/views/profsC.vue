<script setup>
import { reactive } from 'vue';
import Axios2 from '../services/callerService';
import Axios from '../views/home';
import { store, etat } from "../store/students";
import { storeToRefs } from "pinia";
const main = store();

const { prof, profDetails } = storeToRefs(main)

function postUser(obj) {
  Axios2.post('/api/v1/prof', {
    name: obj.name,
    surname: obj.surname,
    matiere: obj.matiere,
    dateOfBirth: obj.dateOfBirth,
    phone: obj.phone,
    mail: obj.mail,
    volumeHoraire: obj.volumeHoraire
  }).then(async function (res) {
    let tmp = await Axios.api3('prof')
    main.$patch({
      prof: tmp.data
    })
    console.log(res);
  }).catch(function (err) {
    console.log(err);
  })
}
const submitProf = async function (event) {
  const user = Object.fromEntries(new FormData(event.target))
  postUser(user)
  state.addProf = false
}
function deleteProf(id) {
  console.log('id:', id);
  Axios2.delete('/api/v1/prof/' + id).then(async function (res) {
    let tmp = await Axios.api3('prof')
    main.$patch({
      prof: tmp.data
    })
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
}
let addProf
let profShow
let state = reactive({
  addProf: false,
  profShow: false
})
function showProf(obj) {
  state.profShow = true
  main.$patch({ profDetails: obj })
  console.log(obj);
}
function formatTime(date) {
  var dtn = date; // on lit la date de naissance
  var an = dtn.substr(0, 4); // l'année (les quatre premiers caractères de la chaîne à partir de 6)
  var mois = dtn.substr(5, 2);// On selectionne le mois de la date de naissance
  var day = dtn.substr(8, 2); // On selectionne la jour de la date de naissance

  var dateNaissance = (an + "-" + mois + "-" + day);
  return new Date(dateNaissance)
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
    <div v-if="state.addProf === false" class="bg-light rounded d-flex align-items-center p-4">
      <button type="button" class="btn  btn-rounded btn-primary m-2" @click="state.addProf = true">+</button>
      <h5>Nouveau Prof</h5>
    </div>
    <div v-if="state.addProf === true">
      <button type="button" class="btn  btn-rounded btn-primary m-2" @click="state.addProf = false"> Retour </button>
    </div>
    <div class="bg-light rounded h-100 p-4">
      <h6 class="mb-4">Hoverable Table</h6>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">Matières</th>
            <th scope="col">Date de naissance</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="profU in prof" @dblclick="showProf(profU)">
            <th scope="row"></th>
            <td>{{ profU.name }}</td>
            <td>{{ profU.surname }}</td>
            <td>{{ profU.matiere }}</td>
            <td>{{ formatTime(profU.dateOfBirth).toLocaleDateString("fr") }} ({{ CalculAge(profU.dateOfBirth) + " ans" }})
            </td>
            <td>
              <div @click="deleteProf(profU['_id'])" class="btn btn-sm btn-danger m-2">X</div>
              <div @click="showProf(profU)">details</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="modal-adduser " v-if="state.profShow == true">
      <div class="overlay"></div>
      <div class="modale card col-sm-12 col-xl-12">
        <div v-on:click="state.profShow = false" class="btn-modale btn btn-danger">
          X
        </div>
        <div class="col-sm-12 col-xl-12">
          <div class="bg-light rounded h-100 p-4">
            <div class="d-flex align-items-center ms-4 mb-4">
              <div class="position-relative">
                <img class="rounded-circle" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">
              </div>
              <div class="ms-3">
                <h6 class="mb-0">{{ profDetails.name }} {{ profDetails.surname }}</h6>
                <span></span>
              </div>
              <button type="button" class="btn btn-outline-primary ms-4">Modifier</button>
            </div>

            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                  type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Informatios sur
                  l'élève</button>
                <button class="nav-link active" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact"
                  type="button" role="tab" aria-controls="nav-contact" aria-selected="true">Notes</button>
              </div>
            </nav>
            <div class="tab-content pt-3" id="nav-tabContent">
              <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                {{ profDetails }}
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
  <div v-if="state.addProf === true" class="modal-adduser">
    <div class="overlay"></div>
    <div class="modale card">
      <div @click="state.addProf = false" class="btn-modale btn btn-danger">
        X
      </div>
      <div class="col-sm-12 col-xl-12">
        <div class="bg-light rounded h-100 p-4">
          <h6 class="mb-4">Creer un professeur </h6>
          <form @submit.prevent="submitProf">
            <div class="mb-3">
              <label for="Nom" class="form-label">Nom du professeur</label>
              <input name="name" type="text" class="form-control" id="Nom" />
              <label for="ProfPrincipal" class="form-label">Prénom</label>
              <input name="surname" type="text" class="form-control">
              <label for="matiere" class="form-label">Matières</label>
              <select name="matiere" class="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                <option value="Francais">Francais</option>
                <option value="Mathématiques">Mathématiques</option>
                <option value="Anglais">Anglais</option>
              </select>
              <label for="dateOfBirth" class="form-label">Date de naissance</label>
              <input name="dateOfBirth" type="date" class="form-control">
              <label for="phone" class="form-label">Numero de télephone</label>
              <input name="phone" type="text" class="form-control">
              <label for="mail" class="form-label">E-mail</label>
              <input name="mail" type="text" class="form-control">
              <label for="volumeHoraire" class="form-label">Volume Horaire</label>
              <input name="volumeHoraire" type="number" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary">Ajouter</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  {{}}

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