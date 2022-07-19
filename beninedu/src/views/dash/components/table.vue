<script setup>
import { reactive, unref, watch } from 'vue';
import {store} from "../store/inscriptionTable"
import {storeToRefs} from "pinia"

const inscriptionTable = store();
const {page, personData,returnDatas, maxpage, rows, search,onsearch,returnDatasG} = storeToRefs(inscriptionTable)
const {loadTable, ppage, mpage,reloadTableDatas,navigate,toggleOnsearch} = inscriptionTable
function sort (obj,input) {
    let inputS = input.toLowerCase()
    let dataArray = obj.filter(el => el.nom.toLowerCase().includes(inputS) || el.prenom.toLowerCase().includes(inputS)  )
    return dataArray
  }

let personDatas = [
    { nom: 'pierre', prenom: "jean", role: 'student', age: 9 },
    { nom: 'kpatchavi', prenom: "yoan", role: 'prof', age: 21 },
    { nom: 'Ngassam', prenom: "valerie", role: 'sur', age: 40 },
    { nom: 'Piru', prenom: "playbai", role: 'int', age: 25 },
    { nom: 'pierre', prenom: "jean", role: 'student', age: 9 },
    { nom: 'kpatchavi', prenom: "yoan", role: 'prof', age: 21 },
    { nom: 'Ngassam', prenom: "valerie", role: 'sur', age: 40 },
    { nom: 'Piru', prenom: "playbai", role: 'int', age: 25 },
    { nom: 'Ngassam', prenom: "valerie", role: 'sur', age: 40 },
    { nom: 'Piru', prenom: "playbai", role: 'int', age: 25 },
    { nom: 'gsi', prenom: "r", role: 'ti', age: 0 },
    
]

inscriptionTable.$patch({
      personData: personDatas
    })
loadTable(personData.value)
inscriptionTable.$subscribe(async (mutation) => {
    console.log(mutation);
    if(search.value != "" && onsearch.value === false) {
        toggleOnsearch()
        // loadTable(personData.value)
    }
    //  if(onsearch.value === true && mutation.events.key == "search") {
    //     if (search.value === "") {
    //         toggleOnsearch()
    //         loadTable(personData.value)
    //     }else {
    //         loadTable(personData.value)
    //     }
    //}
})
</script>
<template>
    <div class="card machin">
        <div class="card-header border-bottom">
            <h5 class="card-title">Filtres de recherche</h5>
            <div class="d-flex justify-content-between align-items-center row py-3 gap-3 gap-md-0">
                <div class="col-md-4 user_role"><select id="UserRole" class="form-select text-capitalize">
                        <option value=""> Select Role </option>
                        <option value="Admin">Admin</option>
                        <option value="Author">Author</option>
                        <option value="Editor">Editor</option>
                        <option value="Maintainer">Maintainer</option>
                        <option value="Subscriber">Subscriber</option>
                    </select></div>
                <div class="col-md-4 user_plan"><select id="UserPlan" class="form-select text-capitalize">
                        <option value=""> Select Plan </option>
                        <option value="Basic">Basic</option>
                        <option value="Company">Company</option>
                        <option value="Enterprise">Enterprise</option>
                        <option value="Team">Team</option>
                    </select></div>
                <div class="col-md-4 user_status"><select id="FilterTransaction" class="form-select text-capitalize">
                        <option value=""> Select Status </option>
                        <option class="text-capitalize" value="Pending">Pending</option>
                        <option class="text-capitalize" value="Active">Active</option>
                        <option class="text-capitalize" value="Inactive">Inactive</option>
                    </select></div>
            </div>
        </div>
        <div class="card-datatable table-responsive">
            <div class="dataTables_wrapper dt-bootstrap5 no-footer">
                <div class="row mx-2">
                    <div class="col-md-2">
                        <div class="me-3">
                            <div class="dataTables_length" id="DataTables_Table_0_length"><label><select
                                        @change="reloadTableDatas(rows)" v-model="rows"
                                        name="DataTables_Table_0_length" aria-controls="DataTables_Table_0"
                                        class="form-select">
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select></label></div>
                        </div>
                    </div>
                    <div class="col-md-10">
                        <div
                            class="dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-end flex-md-row flex-column mb-3 mb-md-0">
                            <div id="DataTables_Table_0_filter" class="dataTables_filter"><label><input type="search"
                                        class="form-control" v-model="search"   placeholder="Search.."
                                        aria-controls="DataTables_Table_0"></label>
                            </div>
                            <div class="dt-buttons"><button
                                    class="dt-button buttons-collection btn btn-label-secondary dropdown-toggle mx-3"
                                    tabindex="0" aria-controls="DataTables_Table_0" type="button" aria-haspopup="true"
                                    aria-expanded="false"><span><i
                                            class="bx bx-upload me-2"></i>Export</span></button><button
                                    class="dt-button add-new btn btn-primary" tabindex="0"
                                    aria-controls="DataTables_Table_0" type="button" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasAddUser"><span><i
                                            class="bx bx-plus me-0 me-sm-2"></i><span
                                            class="d-none d-lg-inline-block">Add New
                                            User</span></span></button></div>
                        </div>
                    </div>
                </div>
                <table id="DataTables_Table_0" class="datatables-users table border-top dataTable no-footer dtr-column">
                    <thead>
                        <tr>
                            <th class="sorting sorting_desc" style="width: 340px ;">Nom et Prénom</th>
                            <th class="sorting sorting_desc" style="width: 128px ;">Classe</th>
                            <th @click="sortColumn('age')" class="sorting sorting_asc" style="width: 120px ;">Numéro(s)
                                de contact</th>
                            <th class="sorting sorting_desc" style="width: 200px ;">Role</th>
                            <th style="width: 100px ;">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for=" person in returnDatasG" class="odd">
                            <td class="control" tabindex="5" style="display: none;"></td>
                            <td class="sorting_1">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="avatar-wrapper">
                                        <div class="avatar avatar-sm me-3"><img src="/src/assets/img/avatars/1.png"
                                                alt="Avatar" class="rounded-circle"></div>
                                    </div>
                                    <div class="d-flex flex-column"><a href="app-user-view-account.html"
                                            class="text-body text-truncate"><span class="fw-semibold">{{ person.nom }}
                                                {{ person.prenom }}</span></a><small
                                            class="text-muted">hredmore1@imgur.com</small>
                                    </div>
                                </div>
                            </td>
                            <td><span class="text-truncate d-flex align-items-center"><span
                                        class="badge badge-center rounded-pill bg-label-success w-px-30 h-px-30 me-2"><i
                                            class="bx bx-cog bx-xs"></i></span>{{ person.role }}</span></td>
                            <td><span class="fw-semibold">{{ person.age }}</span></td>
                            <td>Manual - Paypal</td>
                            <td><span :class="person.age == 9 ? 'badge bg-label-warning' : 'badge bg-label-success' ">Pending</span></td>
                            <td>
                                <div class="d-inline-block"><button
                                        class="btn btn-sm btn-icon dropdown-toggle hide-arrow"
                                        data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></i></button>
                                    <div class="dropdown-menu dropdown-menu-end"><a href="app-user-view-account.html"
                                            class="dropdown-item">View</a><a href="javascript:;"
                                            class="dropdown-item">Suspend</a>
                                        <div class="dropdown-divider"></div><a href="javascript:;"
                                            class="dropdown-item text-danger delete-record">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="row mx-2">
                    <div class="col-sm-12 col-md-6">
                        <div class="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">
                       {{ onsearch ? sort(personData,search).length : personData.length  }} résultat(s)</div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
                            <ul class="pagination">
                                <li class="paginate_button page-item previous" id="DataTables_Table_0_previous"><a
                                        @click="mpage" aria-controls="DataTables_Table_0" data-dt-idx="0"
                                        tabindex="0" class="page-link"><i class="bx bx-chevron-left bx-sm"></i></a></li>
                                <li v-for="i in maxpage" class="paginate_button page-item"><a @click="navigate(i)"
                                        aria-controls="DataTables_Table_0" data-dt-idx="5" tabindex="0"
                                        class="page-link">{{ i }}</a></li>
                                <li class="paginate_button page-item next" id="DataTables_Table_0_next"><a
                                        @click="ppage" aria-controls="DataTables_Table_0" data-dt-idx="6"
                                        tabindex="0" class="page-link"><i class="bx bx-chevron-right bx-sm"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>