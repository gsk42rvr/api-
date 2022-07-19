<template>
    <h4 class="fw-bold py-3 mb-4">
        <span class="text-muted fw-light">Gestion des élèves / élève /</span> nom de l'élève
    </h4>
    <!-- user side bar -->
    <div class="row">
        <div class="col-xl-4 col-lg-5 col-md-5 order-1 order-md-0">
            <!-- User Card -->
            <div class="card mb-4">
                <div class="card-body">
                    <div class="user-avatar-section">
                        <div class=" d-flex align-items-center flex-column">
                            <img class="img-fluid rounded my-4" src="/src/assets/img/avatars/1.png" height="110"
                                width="110" alt="User avatar">
                            <div class="user-info text-center">
                                <h4 class="mb-2">Yoan Kpatchavi</h4>
                                <span class="badge bg-label-secondary">classe élève</span>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-around flex-wrap my-4 py-3">
                        <div class="d-flex align-items-start me-4 mt-3 gap-3">
                            <span class="badge bg-label-primary p-2 rounded"><i class="bx bx-check bx-sm"></i></span>
                            <div>
                                <h5 class="mb-0">15.5 / 20 </h5>
                                <span>Moyenne G.</span>
                            </div>
                        </div>
                        <div class="d-flex align-items-start me-4 mt-3 gap-3">
                            <span class="badge bg-label-primary p-2 rounded"><i
                                    class="bx bx-customize bx-sm"></i></span>
                            <div>
                                <h5 class="mb-0">5e</h5>
                                <span>Rang classe</span>
                            </div>
                        </div>
                    </div>
                    <h5 class="pb-2 border-bottom mb-4">Details</h5>
                    <div class="info-container">
                        <ul class="list-unstyled">
                            <li class="mb-3">
                                <span class="fw-bold me-2">Date de naissance</span>
                                <span>29 juin 2001 (21ans)</span>
                            </li>
                            <li class="mb-3">
                                <span class="fw-bold me-2">Email:</span>
                                <span>kpatchavi@icloud.com</span>
                            </li>
                            <li class="mb-3">
                                <span class="fw-bold me-2">Compte BeninEdu:</span>
                                <span class="badge bg-label-success">oui</span>
                            </li>
                            <li class="mb-3">
                                <span class="fw-bold me-2">Role:</span>
                                <span>Author</span>
                            </li>
                        </ul>
                        <div class="d-flex justify-content-center pt-3">
                            <a href="javascript:;" class="btn btn-primary me-3" data-bs-target="#editUser"
                                data-bs-toggle="modal">Edit</a>
                            <a href="javascript:;" class="btn btn-label-danger suspend-user">Suspended</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /User Card -->
            <!-- Plan Card -->
            <div class="card mb-4">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start">
                        <span class="badge bg-label-primary">Personnes à contacter</span>
                        <div class="d-flex justify-content-center">
                            <h1 class="display-5 mb-0 text-primary">3 </h1>
                            <sub class="fs-6 pricing-duration mt-auto mb-3"> Contacts</sub>
                        </div>
                    </div>
                    <ul class="ps-3 g-2 my-4">
                        <li class="mb-2">10 Users</li>
                        <li class="mb-2">Up to 10 GB storage</li>
                        <li>Basic Support</li>
                    </ul>
                    <span>4 days remaining</span>
                    <div class="d-grid w-100 mt-4 pt-2">
                        <button class="btn btn-primary" data-bs-target="#upgradePlanModal"
                            data-bs-toggle="modal">Ajouter un contact</button>
                    </div>
                </div>
            </div>
            <!-- /Plan Card -->
        </div>
        <div class="col-xl-8 col-lg-7 col-md-7 order-0 order-md-1">
            <ul class="nav nav-pills flex-column flex-md-row mb-3">
                <li class="nav-item"><a class="nav-link active" href="#"><i class="bx bx-user me-1"></i>Vie scolaire</a></li>
                <li class="nav-item"><a class="nav-link" href="#"><i class="bx bx-detail me-1"></i>Notes</a></li>
                <li class="nav-item"><a class="nav-link" href="#"><i class="bx bx-bell me-1"></i>Années précédentes</a></li>
                <li class="nav-item"><a class="nav-link" href="#"><i class="bx bx-link-alt me-1"></i>Comptes liés</a>
                </li>
            </ul>
            <div class="card mb-4">
                <h5 class="card-header">Résumé</h5>
                <div class="table-responsive mb-3">
                    <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap5 no-footer">
                        <div class="d-flex justify-content-between align-items-center flex-column flex-sm-row mx-4 row">
                            <div
                                class="col-sm-4 col-12 d-flex align-items-center justify-content-sm-start justify-content-center">
                                <div class="dataTables_length" id="DataTables_Table_0_length"><label>Show <select
                                            name="DataTables_Table_0_length" aria-controls="DataTables_Table_0"
                                            class="form-select">
                                            <option value="7">7</option>
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="75">75</option>
                                            <option value="100">100</option>
                                        </select></label></div>
                            </div>
                            <div
                                class="col-sm-8 col-12 d-flex align-items-center justify-content-sm-end justify-content-center">
                                <div id="DataTables_Table_0_filter" class="dataTables_filter"><label>Search:<input
                                            type="search" class="form-control" placeholder="Search Project"
                                            aria-controls="DataTables_Table_0"></label></div>
                            </div>
                        </div>
                        <table class="table datatable-project border-top dataTable no-footer dtr-column collapsed"
                            id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info"
                            style="width: 798px;">
                            <thead>
                                <tr role="row">
                                    <th class="control sorting" tabindex="0" aria-controls="DataTables_Table_0"
                                        rowspan="1" colspan="1" style="width: 0px;"
                                        aria-label=": activate to sort column ascending"></th>
                                    <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1"
                                        colspan="1" style="width: 291px;"
                                        aria-label="Project: activate to sort column ascending">Project</th>
                                    <th class="text-nowrap sorting_disabled" rowspan="1" colspan="1"
                                        style="width: 124px;" aria-label="Total Task">Total Task</th>
                                    <th class="sorting sorting_desc" tabindex="0" aria-controls="DataTables_Table_0"
                                        rowspan="1" colspan="1" style="width: 116px;"
                                        aria-label="Progress: activate to sort column ascending" aria-sort="descending">
                                        Progress</th>
                                    <th class="sorting_disabled" rowspan="1" colspan="1"
                                        style="width: 87px; display: none;" aria-label="Hours">Hours</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="odd">
                                    <td class=" control" tabindex="0" style=""></td>
                                    <td class="">
                                        <div class="d-flex justify-content-left align-items-center">
                                            <div class="avatar-wrapper">
                                                <div class="avatar avatar-sm me-3"><img
                                                        src=""
                                                        alt="Project Image" class="rounded-circle"></div>
                                            </div>
                                            <div class="d-flex flex-column"><span
                                                    class="text-truncate fw-semibold">Blockchain Website</span><small
                                                    class="text-muted">Python Project</small></div>
                                        </div>
                                    </td>
                                    <td>104/137</td>
                                    <td class="sorting_1">
                                        <div class="d-flex flex-column"><small class="mb-1">95%</small>
                                            <div class="progress w-100 me-3" style="height: 6px;">
                                                <div class="progress-bar bg-success" style="width: 9%"
                                                    aria-valuenow="9%" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style="display: none;">138:39h</td>
                                </tr>
                                <tr class="even">
                                    <td class=" control" tabindex="0" style=""></td>
                                    <td class="">
                                        <div class="d-flex justify-content-left align-items-center">
                                            <div class="avatar-wrapper">
                                                <div class="avatar avatar-sm me-3"><img
                                                        src=""
                                                        alt="Project Image" class="rounded-circle"></div>
                                            </div>
                                            <div class="d-flex flex-column"><span
                                                    class="text-truncate fw-semibold">Dashboard Design</span><small
                                                    class="text-muted">Vuejs Project</small></div>
                                        </div>
                                    </td>
                                    <td>100/190</td>
                                    <td class="sorting_1">
                                        <div class="d-flex flex-column"><small class="mb-1">90%</small>
                                            <div class="progress w-100 me-3" style="height: 6px;">
                                                <div class="progress-bar bg-success" style="width: 90%"
                                                    aria-valuenow="90%" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style="display: none;">129:45h</td>
                                </tr>
                                <tr class="odd">
                                    <td class=" control" tabindex="0" style=""></td>
                                    <td class="">
                                        <div class="d-flex justify-content-left align-items-center">
                                            <div class="avatar-wrapper">
                                                <div class="avatar avatar-sm me-3"><img
                                                        src=""
                                                        alt="Project Image" class="rounded-circle"></div>
                                            </div>
                                            <div class="d-flex flex-column"><span
                                                    class="text-truncate fw-semibold">Crypto Website</span><small
                                                    class="text-muted">HTML Project</small></div>
                                        </div>
                                    </td>
                                    <td>264/537</td>
                                    <td class="sorting_1">
                                        <div class="d-flex flex-column"><small class="mb-1">81%</small>
                                            <div class="progress w-100 me-3" style="height: 6px;">
                                                <div class="progress-bar bg-success" style="width: 81%"
                                                    aria-valuenow="81%" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style="display: none;">108:39h</td>
                                </tr>
                                <tr class="even">
                                    <td class=" control" tabindex="0" style=""></td>
                                    <td class="">
                                        <div class="d-flex justify-content-left align-items-center">
                                            <div class="avatar-wrapper">
                                                <div class="avatar avatar-sm me-3"><img
                                                        src=""
                                                        alt="Project Image" class="rounded-circle"></div>
                                            </div>
                                            <div class="d-flex flex-column"><span class="text-truncate fw-semibold">Vue
                                                    Admin template</span><small class="text-muted">Vuejs Project</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>214/627</td>
                                    <td class="sorting_1">
                                        <div class="d-flex flex-column"><small class="mb-1">78%</small>
                                            <div class="progress w-100 me-3" style="height: 6px;">
                                                <div class="progress-bar bg-success" style="width: 78%"
                                                    aria-valuenow="78%" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style="display: none;">88:19h</td>
                                </tr>
                                <tr class="odd">
                                    <td class=" control" tabindex="0" style=""></td>
                                    <td class="">
                                        <div class="d-flex justify-content-left align-items-center">
                                            <div class="avatar-wrapper">
                                                <div class="avatar avatar-sm me-3"><img
                                                        
                                                        alt="Project Image" class="rounded-circle"></div>
                                            </div>
                                            <div class="d-flex flex-column"><span class="text-truncate fw-semibold">Dojo
                                                    React Project</span><small class="text-muted">React Project</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>234/378</td>
                                    <td class="sorting_1">
                                        <div class="d-flex flex-column"><small class="mb-1">73%</small>
                                            <div class="progress w-100 me-3" style="height: 6px;">
                                                <div class="progress-bar bg-info" style="width: 73%" aria-valuenow="73%"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style="display: none;">67:10h</td>
                                </tr>
                                <tr class="even">
                                    <td class=" control" tabindex="0" style=""></td>
                                    <td class="">
                                        <div class="d-flex justify-content-left align-items-center">
                                            <div class="avatar-wrapper">
                                                <div class="avatar avatar-sm me-3"><img
                                                        
                                                        alt="Project Image" class="rounded-circle"></div>
                                            </div>
                                            <div class="d-flex flex-column"><span
                                                    class="text-truncate fw-semibold">Online Webinar</span><small
                                                    class="text-muted">Official Event</small></div>
                                        </div>
                                    </td>
                                    <td>12/20</td>
                                    <td class="sorting_1">
                                        <div class="d-flex flex-column"><small class="mb-1">69%</small>
                                            <div class="progress w-100 me-3" style="height: 6px;">
                                                <div class="progress-bar bg-info" style="width: 69%" aria-valuenow="69%"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style="display: none;">12:12h</td>
                                </tr>
                                <tr class="odd">
                                    <td class=" control" style="" tabindex="0"></td>
                                    <td class="">
                                        <div class="d-flex justify-content-left align-items-center">
                                            <div class="avatar-wrapper">
                                                <div class="avatar avatar-sm me-3"><img
                                                        
                                                        alt="Project Image" class="rounded-circle"></div>
                                            </div>
                                            <div class="d-flex flex-column"><span class="text-truncate fw-semibold">BGC
                                                    eCommerce App</span><small class="text-muted">React Project</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>122/240</td>
                                    <td class="sorting_1">
                                        <div class="d-flex flex-column"><small class="mb-1">60%</small>
                                            <div class="progress w-100 me-3" style="height: 6px;">
                                                <div class="progress-bar bg-info" style="width: 60%" aria-valuenow="60%"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style="display: none;">210:30h</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="d-flex justify-content-between mx-4 row">
                            <div class="col-sm-12 col-md-6">
                                <div class="dataTables_info" id="DataTables_Table_0_info" role="status"
                                    aria-live="polite">Showing 1 to 7 of 11 entries</div>
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
                                    <ul class="pagination">
                                        <li class="paginate_button page-item previous disabled"
                                            id="DataTables_Table_0_previous"><a href="#"
                                                aria-controls="DataTables_Table_0" data-dt-idx="0" tabindex="0"
                                                class="page-link">Previous</a></li>
                                        <li class="paginate_button page-item active"><a href="#"
                                                aria-controls="DataTables_Table_0" data-dt-idx="1" tabindex="0"
                                                class="page-link">1</a></li>
                                        <li class="paginate_button page-item "><a href="#"
                                                aria-controls="DataTables_Table_0" data-dt-idx="2" tabindex="0"
                                                class="page-link">2</a></li>
                                        <li class="paginate_button page-item next" id="DataTables_Table_0_next"><a
                                                href="#" aria-controls="DataTables_Table_0" data-dt-idx="3" tabindex="0"
                                                class="page-link">Next</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>