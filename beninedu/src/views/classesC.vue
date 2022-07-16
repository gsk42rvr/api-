<script setup>
import { reactive } from 'vue';
import Axios2 from "@/services/callerService.js"
import Axios from "../views/home"
import { store, classeReq } from "../store/students"
import { storeToRefs } from 'pinia';
let layoutMenuEl5 = $('div')
console.log(layoutMenuEl5);
let test
async function getTotal(classe) {
    let obj = 'classe/' + classe
    console.log(obj, 'obj');
    let result = await Axios.api3(obj)
    return result.data
}
let main = store()
let { paginationc, classe, student, classStudents, classSelector, prof } = storeToRefs(main)
let classe2 = main.$state.classe
let studentt = main.$state.student
let lt
let state = reactive({
    addclasse: false,
    lt: ""
})
async function total(array) {
    let newObj = []
    for (let index = 0; index < array.length; index++) {
        console.log(newObj[index], 'new', array[index]['name']);
        newObj[index] = await getTotal(array[index]['name'])
    }
    return newObj
}
let ep = await total(classe2)
console.log(ep[0]);
function postUser(obj) {
    Axios2.post('/api/v1/classe', {
        name: obj.name,
        ProfPrincipal: obj.ProfPrincipal,
        eleveDelegue: obj.eleveDelegue,
    }).then(async function (res) {
        let tmp = await Axios.api3('classe')
        main.$patch({
            classe: tmp.data
        })
    }).catch(function (err) {
        console.log(err);
    })
}
const submitUser = async function (event) {
    const user = Object.fromEntries(new FormData(event.target))
    postUser(user)
    state.addclasse = false
}
function deleteClass(id) {
    console.log('id:', id);
    Axios2.delete('/api/v1/classe/' + id).then(async function (res) {
        let tmp = await Axios.api3('classe')
        main.$patch({
            classe: tmp.data
        })
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
}
function set(val) {
    main.$patch({ classSelector: val })
    console.log(val, 'val');
}
function sort(obj, input) {
    let inputS = input.toLowerCase()
    let dataArray = obj.filter(el => el.classe.toLowerCase().includes(inputS))
    return dataArray
}
</script>
<template>
    <div class="container-fluid pt-4 px-4">
        <div v-if="classSelector === null" class="bg-light rounded d-flex align-items-center p-4">
            <button type="button" class="btn  btn-rounded btn-primary m-2" @click="state.addclasse = true">+</button>
            <h5>Nouvelle classe</h5>
        </div>
        <div v-if="classSelector !== null" class="bg-light rounded d-flex align-items-center p-4">
            <h5>{{ classSelector }} {{ classStudents.length }}</h5>
            <div @click="main.$patch({ classSelector: null })">back</div>
        </div>
        <div class="bg-light rounded h-100 p-4">
            <h6 class="mb-4">Hoverable Table</h6>
            <table class="table table-hover" v-if="classSelector === null">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">classe</th>
                        <th scope="col">Professeur principal</th>
                        <th scope="col">Nombre d'élèves</th>
                        <th scope="col">Eleve délégué</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(classeu, index) in classe" @dblclick="set(classeu.name)">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ classeu.name }}</td>
                        <td>{{ classeu.ProfPrincipal }}</td>
                        <td>{{ ep[index] }}</td>
                        <td>{{ classeu.eleveDelegue }}</td>
                        <td>
                            <div @click="deleteClass(classeu['_id'])" class="btn btn-sm btn-danger m-2">X</div>
                            <div @click="set(classeu.name)">TOUT</div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table class="table table-hover" v-if="classSelector !== null">
                <thead>
                    <tr class="text-dark">
                        <th scope="col">no</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prénom</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Date de naissance</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(classeu, index) in classStudents">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ classeu.name }}</td>
                        <td>{{ classeu.surname }}</td>
                        <td>{{ classeu.gender }}</td>
                        <td>{{ classeu.dateOfBirth }}</td>
                        <td>
                            <div @click="deleteClass(classeu['_id'])" class="btn btn-sm btn-danger m-2">X</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="modal-adduser" v-if="state.addclasse == true">
        <div class="overlay"></div>
        <div class="modale card">
            <div v-on:click="state.addclasse = false" class="btn-modale btn btn-danger">
                X
            </div>
            <div class="col-sm-12 col-xl-12">
                <div class="bg-light rounded h-100 p-4">
                    <h6 class="mb-4">Creer une classe </h6>
                    <form @submit.prevent="submitUser">
                        <div class="mb-3">
                            <label for="Nom" class="form-label">Nom de la classe</label>
                            <input name="name" type="text" class="form-control" id="Nom" />
                            <div class="mb-2 mt-2">
                                <label class="form-label me-3"> Classe d'examen</label>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="gender" id="inlineRadio1"
                                        value="F">
                                    <label class="form-check-label" for="inlineRadio1">OUI </label>
                                </div>

                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="gender" id="inlineRadio2"
                                        value="M">
                                    <label class="form-check-label" for="inlineRadio2">NON</label>
                                </div>
                            </div>
                            <label for="ProfPrincipal" class="form-label">Prof. Principal</label>
                            <select name="ProfPrincipal" class="form-select form-select-sm mb-3"
                                aria-label=".form-select-sm example">
                                <option v-for="profu in prof" v-bind:value="profu.name">{{profu.name}}</option>
                            </select>
                            <label for="eleveDelegue" class="form-label">Eleve delegue</label>
                            <select name="eleveDelegue" class="form-select form-select-sm mb-3"
                                aria-label=".form-select-sm example">
                                <option value="Ilan">Ilan</option>
                                <option value="yoan">yoan</option>
                                <option value="samuel">samuel</option>
                            </select>
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
