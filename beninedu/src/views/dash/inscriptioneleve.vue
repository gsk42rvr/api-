<script setup>

</script>
<template>
    <h4 class="fw-bold py-3 mb-4">
        <span class="text-muted fw-light">Gestion des élèves /</span>
        Inscrire un élève
    </h4>
    <div class="d-flex justify-content-end mb-4">
        <button href="google.com" type="button" class="btn btn-primary"><a class="text-white" href="google.com">Inscrire un élève</a></button>
    </div>
    <div class="row g-4 mb-4">
        <div class="col-sm-6 col-xl-3">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex align-items-start justify-content-between">
                        <div class="content-left">
                            <span>Elèves inscrits</span>
                            <div class="d-flex align-items-end mt-2">
                                <h4 class="mb-0 me-2">21,459</h4>
                                <small class="text-success">(+29%)</small>
                            </div>
                            <small>Total</small>
                        </div>
                        <span class="badge bg-label-primary rounded p-2">
                            <i class="bx bx-user bx-sm"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-xl-3">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex align-items-start justify-content-between">
                        <div class="content-left">
                            <span>Elèves non-inscrits</span>
                            <div class="d-flex align-items-end mt-2">
                                <h4 class="mb-0 me-2">4,567</h4>
                                <small class="text-success">(+18%)</small>
                            </div>
                            <small>Last week analytics </small>
                        </div>
                        <span class="badge bg-label-danger rounded p-2">
                            <i class="bx bx-user-plus bx-sm"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-xl-3">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex align-items-start justify-content-between">
                        <div class="content-left">
                            <span>Inscriptions en cours</span>
                            <div class="d-flex align-items-end mt-2">
                                <h4 class="mb-0 me-2">19,860</h4>
                                <small class="text-danger">(-14%)</small>
                            </div>
                            <small>Last week analytics</small>
                        </div>
                        <span class="badge bg-label-success rounded p-2">
                            <i class="bx bx-group bx-sm"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-xl-3">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex align-items-start justify-content-between">
                        <div class="content-left">
                            <span>Desinscriptions</span>
                            <div class="d-flex align-items-end mt-2">
                                <h4 class="mb-0 me-2">237</h4>
                                <small class="text-success">(+42%)</small>
                            </div>
                            <small>Last week analytics</small>
                        </div>
                        <span class="badge bg-label-warning rounded p-2">
                            <i class="bx bx-user-voice bx-sm"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header border-bottom">
            <h5 class="card-title">Search Filter</h5>
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
                        <option value="Pending" class="text-capitalize">Pending</option>
                        <option value="Active" class="text-capitalize">Active</option>
                        <option value="Inactive" class="text-capitalize">Inactive</option>
                    </select></div>
            </div>
        </div>
        <div class="card-datatable table-responsive">
            <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap5 no-footer">
                <div class="row mx-2">
                    <div class="col-md-2">
                        <div class="me-3">
                            <div class="dataTables_length" id="DataTables_Table_0_length"><label><select
                                        name="DataTables_Table_0_length" aria-controls="DataTables_Table_0"
                                        class="form-select">
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
                                        class="form-control" placeholder="Search.."
                                        aria-controls="DataTables_Table_0"></label></div>
                            <div class="dt-buttons"> <button
                                    class="dt-button buttons-collection btn btn-label-secondary dropdown-toggle mx-3"
                                    tabindex="0" aria-controls="DataTables_Table_0" type="button" aria-haspopup="true"
                                    aria-expanded="false"><span><i class="bx bx-upload me-2"></i>Export</span></button>
                                <button class="dt-button add-new btn btn-primary" tabindex="0"
                                    aria-controls="DataTables_Table_0" type="button" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasAddUser"><span><i
                                            class="bx bx-plus me-0 me-sm-2"></i><span
                                            class="d-none d-lg-inline-block">Add New User</span></span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <table class="datatables-users table border-top dataTable no-footer dtr-column" id="DataTables_Table_0"
                    role="grid" aria-describedby="DataTables_Table_0_info" style="width: 1387px;">
                    <thead>
                        <tr role="row">
                            <th class="control sorting_disabled" rowspan="1" colspan="1"
                                style="width: 0px; display: none;" aria-label=""></th>
                            <th class="sorting sorting_desc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1"
                                colspan="1" style="width: 359px;" aria-label="User: activate to sort column ascending"
                                aria-sort="descending">User</th>
                            <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1"
                                style="width: 178px;" aria-label="Role: activate to sort column ascending">Role</th>
                            <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1"
                                style="width: 120px;" aria-label="Plan: activate to sort column ascending">Plan</th>
                            <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1"
                                style="width: 220px;" aria-label="Billing: activate to sort column ascending">Billing
                            </th>
                            <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1"
                                style="width: 115px;" aria-label="Status: activate to sort column ascending">Status</th>
                            <th class="sorting_disabled" rowspan="1" colspan="1" style="width: 109px;"
                                aria-label="Actions">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="odd">
                            <td class=" control" tabindex="0" style="display: none;"></td>
                            <td class="sorting_1" style="">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="avatar-wrapper">
                                        <div class="avatar avatar-sm me-3"><img src="../../assets/img/avatars/1.png"
                                                alt="Avatar" class="rounded-circle"></div>
                                    </div>
                                    <div class="d-flex flex-column"><a href="app-user-view-account.html"
                                            class="text-body text-truncate"><span class="fw-semibold">Halsey
                                                Redmore</span></a><small class="text-muted">hredmore1@imgur.com</small>
                                    </div>
                                </div>
                            </td>
                            <td style=""><span class="text-truncate d-flex align-items-center"><span
                                        class="badge badge-center rounded-pill bg-label-success w-px-30 h-px-30 me-2"><i
                                            class="bx bx-cog bx-xs"></i></span>Author</span></td>
                            <td style=""><span class="fw-semibold">Team</span></td>
                            <td style="">Manual - Paypal</td>
                            <td style=""><span class="badge bg-label-warning">Pending</span></td>
                            <td style="">
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
                        <tr class="even">
                            <td class=" control" tabindex="0" style="display: none;"></td>
                            <td class="sorting_1" style="">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="avatar-wrapper">
                                        <div class="avatar avatar-sm me-3"><img src="../../assets/img/avatars/1.png"
                                                alt="Avatar" class="rounded-circle"></div>
                                    </div>
                                    <div class="d-flex flex-column"><a href="app-user-view-account.html"
                                            class="text-body text-truncate"><span class="fw-semibold">Gwendolyn
                                                Meineken</span></a><small
                                            class="text-muted">gmeinekenu@hc360.com</small></div>
                                </div>
                            </td>
                            <td style=""><span class="text-truncate d-flex align-items-center"><span
                                        class="badge badge-center rounded-pill bg-label-secondary w-px-30 h-px-30 me-2"><i
                                            class="bx bx-mobile-alt bx-xs"></i></span>Admin</span></td>
                            <td style=""><span class="fw-semibold">Basic</span></td>
                            <td style="">Manual - Cash</td>
                            <td style=""><span class="badge bg-label-warning">Pending</span></td>
                            <td style="">
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
                        <tr class="odd">
                            <td class=" control" style="display: none;" tabindex="0"></td>
                            <td class="sorting_1" style="">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="avatar-wrapper">
                                        <div class="avatar avatar-sm me-3"><span
                                                class="avatar-initial rounded-circle bg-label-dark">GS</span></div>
                                    </div>
                                    <div class="d-flex flex-column"><a href="app-user-view-account.html"
                                            class="text-body text-truncate"><span class="fw-semibold">Galen
                                                Slixby</span></a><small class="text-muted">gslixby0@abc.net.au</small>
                                    </div>
                                </div>
                            </td>
                            <td style=""><span class="text-truncate d-flex align-items-center"><span
                                        class="badge badge-center rounded-pill bg-label-info w-px-30 h-px-30 me-2"><i
                                            class="bx bx-edit bx-xs"></i></span>Editor</span></td>
                            <td style=""><span class="fw-semibold">Enterprise</span></td>
                            <td style="">Manual - Credit Card</td>
                            <td style=""><span class="badge bg-label-secondary">Inactive</span></td>
                            <td style="">
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
                        <tr class="even">
                            <td class=" control" tabindex="0" style="display: none;"></td>
                            <td class="sorting_1" style="">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="avatar-wrapper">
                                        <div class="avatar avatar-sm me-3"><img src="../../assets/img/avatars/1.png"
                                                alt="Avatar" class="rounded-circle"></div>
                                    </div>
                                    <div class="d-flex flex-column"><a href="app-user-view-account.html"
                                            class="text-body text-truncate"><span class="fw-semibold">Germain
                                                Jacombs</span></a><small class="text-muted">gjacombsq@jigsy.com</small>
                                    </div>
                                </div>
                            </td>
                            <td style=""><span class="text-truncate d-flex align-items-center"><span
                                        class="badge badge-center rounded-pill bg-label-info w-px-30 h-px-30 me-2"><i
                                            class="bx bx-edit bx-xs"></i></span>Editor</span></td>
                            <td style=""><span class="fw-semibold">Enterprise</span></td>
                            <td style="">Manual - Cash</td>
                            <td style=""><span class="badge bg-label-success">Active</span></td>
                            <td style="">
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
                        <tr class="odd">
                            <td class=" control" tabindex="0" style="display: none;"></td>
                            <td class="sorting_1" style="">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="avatar-wrapper">
                                        <div class="avatar avatar-sm me-3"><img src="../../assets/img/avatars/1.png"
                                                alt="Avatar" class="rounded-circle"></div>
                                    </div>
                                    <div class="d-flex flex-column"><a href="app-user-view-account.html"
                                            class="text-body text-truncate"><span class="fw-semibold">Franz
                                                Scotfurth</span></a><small
                                            class="text-muted">fscotfurth8@dailymotion.com</small></div>
                                </div>
                            </td>
                            <td style=""><span class="text-truncate d-flex align-items-center"><span
                                        class="badge badge-center rounded-pill bg-label-warning w-px-30 h-px-30 me-2"><i
                                            class="bx bx-user bx-xs"></i></span>Subscriber</span></td>
                            <td style=""><span class="fw-semibold">Team</span></td>
                            <td style="">Auto Debit</td>
                            <td style=""><span class="badge bg-label-warning">Pending</span></td>
                            <td style="">
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
                        <tr class="even">
                            <td class=" control" tabindex="0" style="display: none;"></td>
                            <td class="sorting_1" style="">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="avatar-wrapper">
                                        <div class="avatar avatar-sm me-3"><img src="../../assets/img/avatars/1.png"
                                                alt="Avatar" class="rounded-circle"></div>
                                    </div>
                                    <div class="d-flex flex-column"><a href="app-user-view-account.html"
                                            class="text-body text-truncate"><span class="fw-semibold">Florenza
                                                Desporte</span></a><small
                                            class="text-muted">fdesporte13@omniture.com</small></div>
                                </div>
                            </td>
                            <td style=""><span class="text-truncate d-flex align-items-center"><span
                                        class="badge badge-center rounded-pill bg-label-success w-px-30 h-px-30 me-2"><i
                                            class="bx bx-cog bx-xs"></i></span>Author</span></td>
                            <td style=""><span class="fw-semibold">Company</span></td>
                            <td style="">Manual - Cash</td>
                            <td style=""><span class="badge bg-label-success">Active</span></td>
                            <td style="">
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
                        <tr class="odd">
                            <td class=" control" tabindex="0" style="display: none;"></td>
                            <td class="sorting_1" style="">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="avatar-wrapper">
                                        <div class="avatar avatar-sm me-3"><span
                                                class="avatar-initial rounded-circle bg-label-dark">EB</span></div>
                                    </div>
                                    <div class="d-flex flex-column"><a href="app-user-view-account.html"
                                            class="text-body text-truncate"><span class="fw-semibold">Edwina
                                                Baldetti</span></a><small
                                            class="text-muted">ebaldetti14@theguardian.com</small></div>
                                </div>
                            </td>
                            <td style=""><span class="text-truncate d-flex align-items-center"><span
                                        class="badge badge-center rounded-pill bg-label-primary w-px-30 h-px-30 me-2"><i
                                            class="bx bx-pie-chart-alt bx-xs"></i></span>Maintainer</span></td>
                            <td style=""><span class="fw-semibold">Team</span></td>
                            <td style="">Manual - Credit Card</td>
                            <td style=""><span class="badge bg-label-warning">Pending</span></td>
                            <td style="">
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
                        <tr class="even">
                            <td class=" control" tabindex="0" style="display: none;"></td>
                            <td class="sorting_1" style="">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="avatar-wrapper">
                                        <div class="avatar avatar-sm me-3"><img src="../../assets/img/avatars/1.png"
                                                alt="Avatar" class="rounded-circle"></div>
                                    </div>
                                    <div class="d-flex flex-column"><a href="app-user-view-account.html"
                                            class="text-body text-truncate"><span class="fw-semibold">Cyrill
                                                Risby</span></a><small class="text-muted">crisby3@wordpress.com</small>
                                    </div>
                                </div>
                            </td>
                            <td style=""><span class="text-truncate d-flex align-items-center"><span
                                        class="badge badge-center rounded-pill bg-label-primary w-px-30 h-px-30 me-2"><i
                                            class="bx bx-pie-chart-alt bx-xs"></i></span>Maintainer</span></td>
                            <td style=""><span class="fw-semibold">Team</span></td>
                            <td style="">Manual - Credit Card</td>
                            <td style=""><span class="badge bg-label-secondary">Inactive</span></td>
                            <td style="">
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
                        <tr class="odd">
                            <td class=" control" tabindex="0" style="display: none;"></td>
                            <td class="sorting_1" style="">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="avatar-wrapper">
                                        <div class="avatar avatar-sm me-3"><img src="../../assets/img/avatars/1.png"
                                                alt="Avatar" class="rounded-circle"></div>
                                    </div>
                                    <div class="d-flex flex-column"><a href="app-user-view-account.html"
                                            class="text-body text-truncate"><span class="fw-semibold">Corrie
                                                Perot</span></a><small class="text-muted">cperot18@goo.ne.jp</small>
                                    </div>
                                </div>
                            </td>
                            <td style=""><span class="text-truncate d-flex align-items-center"><span
                                        class="badge badge-center rounded-pill bg-label-warning w-px-30 h-px-30 me-2"><i
                                            class="bx bx-user bx-xs"></i></span>Subscriber</span></td>
                            <td style=""><span class="fw-semibold">Team</span></td>
                            <td style="">Manual - Paypal</td>
                            <td style=""><span class="badge bg-label-warning">Pending</span></td>
                            <td style="">
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
                        <tr class="even">
                            <td class=" control" tabindex="0" style="display: none;"></td>
                            <td class="sorting_1" style="">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="avatar-wrapper">
                                        <div class="avatar avatar-sm me-3"><img src="../../assets/img/avatars/1.png"
                                                alt="Avatar" class="rounded-circle"></div>
                                    </div>
                                    <div class="d-flex flex-column"><a href="app-user-view-account.html"
                                            class="text-body text-truncate"><span class="fw-semibold">Cleavland
                                                Hatherleigh</span></a><small
                                            class="text-muted">chatherleighn@washington.edu</small></div>
                                </div>
                            </td>
                            <td style=""><span class="text-truncate d-flex align-items-center"><span
                                        class="badge badge-center rounded-pill bg-label-secondary w-px-30 h-px-30 me-2"><i
                                            class="bx bx-mobile-alt bx-xs"></i></span>Admin</span></td>
                            <td style=""><span class="fw-semibold">Team</span></td>
                            <td style="">Manual - Paypal</td>
                            <td style=""><span class="badge bg-label-warning">Pending</span></td>
                            <td style="">
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
                            Showing 31 to 40 of 50 entries</div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
                            <ul class="pagination">
                                <li class="paginate_button page-item previous" id="DataTables_Table_0_previous"><a
                                        href="#" aria-controls="DataTables_Table_0" data-dt-idx="0" tabindex="0"
                                        class="page-link">Previous</a></li>
                                <li class="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0"
                                        data-dt-idx="1" tabindex="0" class="page-link">1</a></li>
                                <li class="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0"
                                        data-dt-idx="2" tabindex="0" class="page-link">2</a></li>
                                <li class="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0"
                                        data-dt-idx="3" tabindex="0" class="page-link">3</a></li>
                                <li class="paginate_button page-item active"><a href="#"
                                        aria-controls="DataTables_Table_0" data-dt-idx="4" tabindex="0"
                                        class="page-link">4</a></li>
                                <li class="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0"
                                        data-dt-idx="5" tabindex="0" class="page-link">5</a></li>
                                <li class="paginate_button page-item next" id="DataTables_Table_0_next"><a href="#"
                                        aria-controls="DataTables_Table_0" data-dt-idx="6" tabindex="0"
                                        class="page-link">Next</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Offcanvas to add new user -->
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasAddUser"
            aria-labelledby="offcanvasAddUserLabel">
            <div class="offcanvas-header">
                <h5 id="offcanvasAddUserLabel" class="offcanvas-title">Add User</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
            </div>
            <div class="offcanvas-body mx-0 flex-grow-0">
                <form class="add-new-user pt-0 fv-plugins-bootstrap5 fv-plugins-framework" id="addNewUserForm"
                    onsubmit="return false" novalidate="novalidate">
                    <div class="mb-3 fv-plugins-icon-container">
                        <label class="form-label" for="add-user-fullname">Full Name</label>
                        <input type="text" class="form-control" id="add-user-fullname" placeholder="John Doe"
                            name="userFullname" aria-label="John Doe">
                        <div class="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <div class="mb-3 fv-plugins-icon-container">
                        <label class="form-label" for="add-user-email">Email</label>
                        <input type="text" id="add-user-email" class="form-control" placeholder="john.doe@example.com"
                            aria-label="john.doe@example.com" name="userEmail">
                        <div class="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="add-user-contact">Contact</label>
                        <input type="text" id="add-user-contact" class="form-control phone-mask"
                            placeholder="+1 (609) 988-44-11" aria-label="john.doe@example.com" name="userContact">
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="add-user-company">Company</label>
                        <input type="text" id="add-user-company" class="form-control" placeholder="Web Developer"
                            aria-label="jdoe1" name="companyName">
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="country">Country</label>
                        <div class="position-relative"><select id="country"
                                class="select2 form-select select2-hidden-accessible" data-select2-id="country"
                                tabindex="-1" aria-hidden="true">
                                <option value="" data-select2-id="2">Select</option>
                                <option value="Australia">Australia</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Belarus">Belarus</option>
                                <option value="Brazil">Brazil</option>
                                <option value="Canada">Canada</option>
                                <option value="China">China</option>
                                <option value="France">France</option>
                                <option value="Germany">Germany</option>
                                <option value="India">India</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Israel">Israel</option>
                                <option value="Italy">Italy</option>
                                <option value="Japan">Japan</option>
                                <option value="Korea">Korea, Republic of</option>
                                <option value="Mexico">Mexico</option>
                                <option value="Philippines">Philippines</option>
                                <option value="Russia">Russian Federation</option>
                                <option value="South Africa">South Africa</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Ukraine">Ukraine</option>
                                <option value="United Arab Emirates">United Arab Emirates</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="United States">United States</option>
                            </select><span class="select2 select2-container select2-container--default" dir="ltr"
                                data-select2-id="1" style="width: 352px;"><span class="selection"><span
                                        class="select2-selection select2-selection--single" role="combobox"
                                        aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false"
                                        aria-labelledby="select2-country-container"><span
                                            class="select2-selection__rendered" id="select2-country-container"
                                            role="textbox" aria-readonly="true"><span
                                                class="select2-selection__placeholder">Select Country</span></span><span
                                            class="select2-selection__arrow" role="presentation"><b
                                                role="presentation"></b></span></span></span><span
                                    class="dropdown-wrapper" aria-hidden="true"></span></span></div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="user-role">User Role</label>
                        <select id="user-role" class="form-select">
                            <option value="subscriber">Subscriber</option>
                            <option value="editor">Editor</option>
                            <option value="maintainer">Maintainer</option>
                            <option value="author">Author</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <label class="form-label" for="user-plan">Select Plan</label>
                        <select id="user-plan" class="form-select">
                            <option value="basic">Basic</option>
                            <option value="enterprise">Enterprise</option>
                            <option value="company">Company</option>
                            <option value="team">Team</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary me-sm-3 me-1 data-submit">Submit</button>
                    <button type="reset" class="btn btn-label-secondary" data-bs-dismiss="offcanvas">Cancel</button>
                    <div></div><input type="hidden">
                </form>
            </div>
        </div>
    </div>


</template>