<script setup>
import Table from './components/table.vue';
let date = new Date();
</script>
<template>
   
        
    <div class="row">
        <div class="col-lg-8 order-0 demo-inline-spacing mt-3">
            <div class="d-flex justify-content-between">
                <h3>Prochains evenements</h3>
                <a href="#">voir l'agenda</a>
            </div>
            <div class="list-group">
                <a href="javascript:void(0);"
                    class="list-group-item list-group-item-warning flex-column align-items-start">
                    <div class="d-flex justify-content-between w-100">
                        <h6>Lundi 29 Aout 2022</h6>
                        <small>3 days ago</small>
                    </div>
                    <p class="mb-1">Reunion de rentrée scolaire</p>
                    <div class="d-flex justify-content-between">
                        <div class="text-dark">
                            <small>Création des classes , affectation des profs etc..</small>
                        </div>

                        <div>
                            <div class="d-flex">
                                <p class="me-3">Participants</p>
                                <div>
                                    <td>
                                        <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                            <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                data-bs-placement="top" class="avatar avatar-xs pull-up" title=""
                                                data-bs-original-title="Lilian Fuller">
                                                <img src="../../assets/img/avatars/5.png" alt="Avatar"
                                                    class="rounded-circle" />
                                            </li>
                                            <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                data-bs-placement="top" class="avatar avatar-xs pull-up" title=""
                                                data-bs-original-title="Sophia Wilkerson">
                                                <img src="../../assets/img/avatars/6.png" alt="Avatar"
                                                    class="rounded-circle" />
                                            </li>
                                            <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                data-bs-placement="top" class="avatar avatar-xs pull-up" title=""
                                                data-bs-original-title="Christina Parker">
                                                <img src="../../assets/img/avatars/7.png" alt="Avatar"
                                                    class="rounded-circle" />
                                            </li>
                                        </ul>
                                    </td>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="javascript:void(0);"
                    class="list-group-item list-group-item-action flex-column align-items-start">
                    <div class="d-flex justify-content-between w-100">
                        <h6>List group item heading</h6>
                        <small class="text-muted">3 days ago</small>
                    </div>
                    <p class="mb-1">
                        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
                        eget risus varius blandit.
                    </p>
                    <small class="text-muted">Donec id elit non mi porta.</small>
                </a>
                <a href="javascript:void(0);"
                    class="list-group-item list-group-item-action flex-column align-items-start">
                    <div class="d-flex justify-content-between w-100">
                        <h6>List group item heading</h6>
                        <small class="text-muted">3 days ago</small>
                    </div>
                    <p class="mb-1">
                        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
                        eget risus varius blandit.
                    </p>
                    <small class="text-muted">Donec id elit non mi porta.</small>
                </a>
            </div>
        </div>
        <div class="modal fade" id="modalCenter" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalCenterTitle">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col mb-3">
                                <label for="nameWithTitle" class="form-label">Name</label>
                                <input type="text" id="nameWithTitle" class="form-control" placeholder="Enter Name" />
                            </div>
                        </div>
                        <div class="row g-2">
                            <div class="col mb-0">
                                <label for="emailWithTitle" class="form-label">Email</label>
                                <input type="text" id="emailWithTitle" class="form-control" placeholder="xxxx@xxx.xx" />
                            </div>
                            <div class="col mb-0">
                                <label for="dobWithTitle" class="form-label">DOB</label>
                                <input type="text" id="dobWithTitle" class="form-control" placeholder="DD / MM / YY" />
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                            Close
                        </button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-4 order-2 mb-4">
            <div class="card h-100">
                <div class="card-header d-flex align-items-center justify-content-between">
                    <h5 class="card-title m-0 me-2">Vie scolaire</h5>
                    <div class="dropdown">
                        <button class="btn p-0" type="button" id="transactionID" data-bs-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <a href="#">Tout voir</a>
                        </button>
                    </div>
                </div>
                <div class="card-body">
                    <ul class="p-0 m-0">
                        <li class="d-flex mb-4 pb-1">
                            <div class="avatar flex-shrink-0 me-3">
                                <img src="../../assets/img/avatars/6.png" alt="User" class="rounded-pill" />
                            </div>
                            <button class="d-flex w-100 " style=" background-color: transparent;border: none;" type="button"
                                data-bs-toggle="modal" data-bs-target="#modalCenter">
                                <div class="d-flex w-100  align-items-center justify-content-between gap-2">
                                    <div>
                                        <small class="text-muted d-block mb-1">Marie.o Vincent</small>
                                        <span class="d-block badge bg-danger">Absence</span>
                                    </div>
                                    <div class="user-progress d-flex align-items-center gap-1">
                                        <small class="mb-0">12/06/2022</small>
                                    </div>
                                </div>
                            </button>
                        </li>

                        <li class="d-flex mb-4 pb-1">
                            <div class="avatar flex-shrink-0 me-3">
                                <img src="../../assets/img/avatars/1.png" alt="User" class="rounded-pill" />
                            </div>
                            <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div class="me-2">
                                    <small class="text-muted d-block mb-1">Vincent Pierre</small>
                                    <span class="d-block badge bg-warning">Retard</span>
                                </div>
                                <div class="user-progress d-flex align-items-center gap-1">
                                    <h6 class="mb-0">12/06/2022</h6>
                                </div>
                            </div>
                        </li>
                        <li class="d-flex mb-4 pb-1">
                            <div class="avatar flex-shrink-0 me-3">
                                <img src="../../assets/img/avatars/7.png" alt="User" class="rounded-pill" />
                            </div>
                            <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div class="me-2">
                                    <small class="text-muted d-block mb-1">Victor Balo</small>
                                    <span class="d-block badge bg-danger">Exclusion</span>
                                </div>
                                <div class="user-progress d-flex align-items-center gap-1">
                                    <h6 class="mb-0">12/06/2022</h6>
                                </div>
                            </div>
                        </li>
                        <li class="d-flex mb-4 pb-1">
                            <div class="avatar flex-shrink-0 me-3">
                                <img src="../../assets/img/avatars/6.png" alt="User" class="rounded-pill" />
                            </div>
                            <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div class="me-2">
                                    <small class="text-muted d-block mb-1">Marie.o Vincent</small>
                                    <span class="d-block badge bg-success">Justificatif</span>
                                </div>
                                <div class="user-progress d-flex align-items-center gap-1">
                                    <h6 class="mb-0">12/06/2022</h6>
                                </div>
                            </div>
                        </li>
                        <li class="d-flex mb-4 pb-1">
                            <div class="avatar flex-shrink-0 me-3">
                                <img src="../../assets/img/avatars/6.png" alt="User" class="rounded-pill" />
                            </div>
                            <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div class="me-2">
                                    <small class="text-muted d-block mb-1">Marie.o Vincent</small>
                                    <span class="d-block badge bg-danger">Absence</span>
                                </div>
                                <div class="user-progress d-flex align-items-center gap-1">
                                    <h6 class="mb-0">12/06/2022</h6>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 col-lg-4 col-xl-4 mb-4">
            <div class="card h-100">
                <div class="card-header d-flex align-items-center justify-content-between pb-0">
                    <div class="card-title mb-0">
                        <h5 class="m-0 me-2">Order Statistics</h5>
                        <small class="text-muted">42.82k Total Sales</small>
                    </div>
                    <div class="dropdown">
                        <button class="btn p-0" type="button" id="orederStatistics" data-bs-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i class="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="orederStatistics">
                            <a class="dropdown-item" href="javascript:void(0);">Select All</a>
                            <a class="dropdown-item" href="javascript:void(0);">Refresh</a>
                            <a class="dropdown-item" href="javascript:void(0);">Share</a>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-3" style="position: relative">
                        <div class="d-flex flex-column align-items-center gap-1">
                            <h2 class="mb-2">8,258</h2>
                            <span>Total Orders</span>
                        </div>
                        <div id="orderStatisticsChart" style="min-height: 137.55px">
                            <div id="apexcharts72g7eqnlj"
                                class="apexcharts-canvas apexcharts72g7eqnlj apexcharts-theme-light"
                                style="width: 130px; height: 137.55px">
                                <svg id="SvgjsSvg6806" width="130" height="137.55" xmlns="http://www.w3.org/2000/svg"
                                    version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg" xmlns:data="ApexChartsNS"
                                    transform="translate(0, 0)" style="background: transparent">
                                    <g id="SvgjsG6808" class="apexcharts-inner apexcharts-graphical"
                                        transform="translate(-7, 0)">
                                        <defs id="SvgjsDefs6807">
                                            <clipPath id="gridRectMask72g7eqnlj">
                                                <rect id="SvgjsRect6810" width="150" height="173" x="-4.5" y="-2.5"
                                                    rx="0" ry="0" opacity="1" stroke-width="0" stroke="none"
                                                    stroke-dasharray="0" fill="#fff"></rect>
                                            </clipPath>
                                            <clipPath id="forecastMask72g7eqnlj"></clipPath>
                                            <clipPath id="nonForecastMask72g7eqnlj"></clipPath>
                                            <clipPath id="gridRectMarkerMask72g7eqnlj">
                                                <rect id="SvgjsRect6811" width="145" height="172" x="-2" y="-2" rx="0"
                                                    ry="0" opacity="1" stroke-width="0" stroke="none"
                                                    stroke-dasharray="0" fill="#fff"></rect>
                                            </clipPath>
                                        </defs>
                                        <g id="SvgjsG6812" class="apexcharts-pie">
                                            <g id="SvgjsG6813" transform="translate(0, 0) scale(1)">
                                                <circle id="SvgjsCircle6814" r="44.835365853658544" cx="70.5" cy="70.5"
                                                    fill="transparent"></circle>
                                                <g id="SvgjsG6815" class="apexcharts-slices">
                                                    <g id="SvgjsG6816" class="apexcharts-series apexcharts-pie-series"
                                                        seriesName="Electronic" rel="1" data:realIndex="0">
                                                        <path id="SvgjsPath6817"
                                                            d="M 70.5 10.71951219512195 A 59.78048780487805 59.78048780487805 0 0 1 97.63977353321047 123.7648046533095 L 90.85483014990785 110.44860348998213 A 44.835365853658544 44.835365853658544 0 0 0 70.5 25.664634146341456 L 70.5 10.71951219512195 z"
                                                            fill="rgba(105,108,255,1)" fill-opacity="1"
                                                            stroke-opacity="1" stroke-linecap="butt" stroke-width="5"
                                                            stroke-dasharray="0"
                                                            class="apexcharts-pie-area apexcharts-donut-slice-0"
                                                            index="0" j="0" data:angle="153" data:startAngle="0"
                                                            data:strokeWidth="5" data:value="85"
                                                            data:pathOrig="M 70.5 10.71951219512195 A 59.78048780487805 59.78048780487805 0 0 1 97.63977353321047 123.7648046533095 L 90.85483014990785 110.44860348998213 A 44.835365853658544 44.835365853658544 0 0 0 70.5 25.664634146341456 L 70.5 10.71951219512195 z"
                                                            stroke="#ffffff"></path>
                                                    </g>
                                                    <g id="SvgjsG6818" class="apexcharts-series apexcharts-pie-series"
                                                        seriesName="Sports" rel="2" data:realIndex="1">
                                                        <path id="SvgjsPath6819"
                                                            d="M 97.63977353321047 123.7648046533095 A 59.78048780487805 59.78048780487805 0 0 1 70.5 130.28048780487805 L 70.5 115.33536585365854 A 44.835365853658544 44.835365853658544 0 0 0 90.85483014990785 110.44860348998213 L 97.63977353321047 123.7648046533095 z"
                                                            fill="rgba(133,146,163,1)" fill-opacity="1"
                                                            stroke-opacity="1" stroke-linecap="butt" stroke-width="5"
                                                            stroke-dasharray="0"
                                                            class="apexcharts-pie-area apexcharts-donut-slice-1"
                                                            index="0" j="1" data:angle="27" data:startAngle="153"
                                                            data:strokeWidth="5" data:value="15"
                                                            data:pathOrig="M 97.63977353321047 123.7648046533095 A 59.78048780487805 59.78048780487805 0 0 1 70.5 130.28048780487805 L 70.5 115.33536585365854 A 44.835365853658544 44.835365853658544 0 0 0 90.85483014990785 110.44860348998213 L 97.63977353321047 123.7648046533095 z"
                                                            stroke="#ffffff"></path>
                                                    </g>
                                                    <g id="SvgjsG6820" class="apexcharts-series apexcharts-pie-series"
                                                        seriesName="Decor" rel="3" data:realIndex="2">
                                                        <path id="SvgjsPath6821"
                                                            d="M 70.5 130.28048780487805 A 59.78048780487805 59.78048780487805 0 0 1 10.71951219512195 70.50000000000001 L 25.664634146341456 70.5 A 44.835365853658544 44.835365853658544 0 0 0 70.5 115.33536585365854 L 70.5 130.28048780487805 z"
                                                            fill="rgba(3,195,236,1)" fill-opacity="1" stroke-opacity="1"
                                                            stroke-linecap="butt" stroke-width="5" stroke-dasharray="0"
                                                            class="apexcharts-pie-area apexcharts-donut-slice-2"
                                                            index="0" j="2" data:angle="90" data:startAngle="180"
                                                            data:strokeWidth="5" data:value="50"
                                                            data:pathOrig="M 70.5 130.28048780487805 A 59.78048780487805 59.78048780487805 0 0 1 10.71951219512195 70.50000000000001 L 25.664634146341456 70.5 A 44.835365853658544 44.835365853658544 0 0 0 70.5 115.33536585365854 L 70.5 130.28048780487805 z"
                                                            stroke="#ffffff"></path>
                                                    </g>
                                                    <g id="SvgjsG6822" class="apexcharts-series apexcharts-pie-series"
                                                        seriesName="Fashion" rel="4" data:realIndex="3">
                                                        <path id="SvgjsPath6823"
                                                            d="M 10.71951219512195 70.50000000000001 A 59.78048780487805 59.78048780487805 0 0 1 70.48956633664653 10.719513105630845 L 70.4921747524849 25.664634829223125 A 44.835365853658544 44.835365853658544 0 0 0 25.664634146341456 70.5 L 10.71951219512195 70.50000000000001 z"
                                                            fill="rgba(113,221,55,1)" fill-opacity="1"
                                                            stroke-opacity="1" stroke-linecap="butt" stroke-width="5"
                                                            stroke-dasharray="0"
                                                            class="apexcharts-pie-area apexcharts-donut-slice-3"
                                                            index="0" j="3" data:angle="90" data:startAngle="270"
                                                            data:strokeWidth="5" data:value="50"
                                                            data:pathOrig="M 10.71951219512195 70.50000000000001 A 59.78048780487805 59.78048780487805 0 0 1 70.48956633664653 10.719513105630845 L 70.4921747524849 25.664634829223125 A 44.835365853658544 44.835365853658544 0 0 0 25.664634146341456 70.5 L 10.71951219512195 70.50000000000001 z"
                                                            stroke="#ffffff"></path>
                                                    </g>
                                                </g>
                                            </g>
                                            <g id="SvgjsG6824" class="apexcharts-datalabels-group"
                                                transform="translate(0, 0) scale(1)">
                                                <text id="SvgjsText6825" font-family="Helvetica, Arial, sans-serif"
                                                    x="70.5" y="90.5" text-anchor="middle" dominant-baseline="auto"
                                                    font-size="0.8125rem" font-weight="400" fill="#a1acb8"
                                                    class="apexcharts-text apexcharts-datalabel-label"
                                                    style="font-family: Helvetica, Arial, sans-serif">
                                                    Weekly
                                                </text>
                                                <text id="SvgjsText6826" font-family="Public Sans" x="70.5" y="71.5"
                                                    text-anchor="middle" dominant-baseline="auto" font-size="1.5rem"
                                                    font-weight="400" fill="#566a7f"
                                                    class="apexcharts-text apexcharts-datalabel-value"
                                                    style="font-family: 'Public Sans'">
                                                    38%
                                                </text>
                                            </g>
                                        </g>
                                        <line id="SvgjsLine6827" x1="0" y1="0" x2="141" y2="0" stroke="#b6b6b6"
                                            stroke-dasharray="0" stroke-width="1" stroke-linecap="butt"
                                            class="apexcharts-ycrosshairs"></line>
                                        <line id="SvgjsLine6828" x1="0" y1="0" x2="141" y2="0" stroke-dasharray="0"
                                            stroke-width="0" stroke-linecap="butt"
                                            class="apexcharts-ycrosshairs-hidden"></line>
                                    </g>
                                    <g id="SvgjsG6809" class="apexcharts-annotations"></g>
                                </svg>
                                <div class="apexcharts-legend"></div>
                                <div class="apexcharts-tooltip apexcharts-theme-dark">
                                    <div class="apexcharts-tooltip-series-group" style="order: 1">
                                        <span class="apexcharts-tooltip-marker"
                                            style="background-color: rgb(105, 108, 255)"></span>
                                        <div class="apexcharts-tooltip-text" style="
                        font-family: Helvetica, Arial, sans-serif;
                        font-size: 12px;
                      ">
                                            <div class="apexcharts-tooltip-y-group">
                                                <span class="apexcharts-tooltip-text-y-label"></span><span
                                                    class="apexcharts-tooltip-text-y-value"></span>
                                            </div>
                                            <div class="apexcharts-tooltip-goals-group">
                                                <span class="apexcharts-tooltip-text-goals-label"></span><span
                                                    class="apexcharts-tooltip-text-goals-value"></span>
                                            </div>
                                            <div class="apexcharts-tooltip-z-group">
                                                <span class="apexcharts-tooltip-text-z-label"></span><span
                                                    class="apexcharts-tooltip-text-z-value"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="apexcharts-tooltip-series-group" style="order: 2">
                                        <span class="apexcharts-tooltip-marker"
                                            style="background-color: rgb(133, 146, 163)"></span>
                                        <div class="apexcharts-tooltip-text" style="
                        font-family: Helvetica, Arial, sans-serif;
                        font-size: 12px;
                      ">
                                            <div class="apexcharts-tooltip-y-group">
                                                <span class="apexcharts-tooltip-text-y-label"></span><span
                                                    class="apexcharts-tooltip-text-y-value"></span>
                                            </div>
                                            <div class="apexcharts-tooltip-goals-group">
                                                <span class="apexcharts-tooltip-text-goals-label"></span><span
                                                    class="apexcharts-tooltip-text-goals-value"></span>
                                            </div>
                                            <div class="apexcharts-tooltip-z-group">
                                                <span class="apexcharts-tooltip-text-z-label"></span><span
                                                    class="apexcharts-tooltip-text-z-value"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="apexcharts-tooltip-series-group" style="order: 3">
                                        <span class="apexcharts-tooltip-marker"
                                            style="background-color: rgb(3, 195, 236)"></span>
                                        <div class="apexcharts-tooltip-text" style="
                        font-family: Helvetica, Arial, sans-serif;
                        font-size: 12px;
                      ">
                                            <div class="apexcharts-tooltip-y-group">
                                                <span class="apexcharts-tooltip-text-y-label"></span><span
                                                    class="apexcharts-tooltip-text-y-value"></span>
                                            </div>
                                            <div class="apexcharts-tooltip-goals-group">
                                                <span class="apexcharts-tooltip-text-goals-label"></span><span
                                                    class="apexcharts-tooltip-text-goals-value"></span>
                                            </div>
                                            <div class="apexcharts-tooltip-z-group">
                                                <span class="apexcharts-tooltip-text-z-label"></span><span
                                                    class="apexcharts-tooltip-text-z-value"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="apexcharts-tooltip-series-group" style="order: 4">
                                        <span class="apexcharts-tooltip-marker"
                                            style="background-color: rgb(113, 221, 55)"></span>
                                        <div class="apexcharts-tooltip-text" style="
                        font-family: Helvetica, Arial, sans-serif;
                        font-size: 12px;
                      ">
                                            <div class="apexcharts-tooltip-y-group">
                                                <span class="apexcharts-tooltip-text-y-label"></span><span
                                                    class="apexcharts-tooltip-text-y-value"></span>
                                            </div>
                                            <div class="apexcharts-tooltip-goals-group">
                                                <span class="apexcharts-tooltip-text-goals-label"></span><span
                                                    class="apexcharts-tooltip-text-goals-value"></span>
                                            </div>
                                            <div class="apexcharts-tooltip-z-group">
                                                <span class="apexcharts-tooltip-text-z-label"></span><span
                                                    class="apexcharts-tooltip-text-z-value"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="resize-triggers">
                            <div class="expand-trigger">
                                <div style="width: 272px; height: 139px"></div>
                            </div>
                            <div class="contract-trigger"></div>
                        </div>
                    </div>
                    <ul class="p-0 m-0">
                        <li class="d-flex mb-4 pb-1">
                            <div class="avatar flex-shrink-0 me-3">
                                <span class="avatar-initial rounded bg-label-primary"><i
                                        class="bx bx-mobile-alt"></i></span>
                            </div>
                            <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div class="me-2">
                                    <h6 class="mb-0">Electronic</h6>
                                    <small class="text-muted">Mobile, Earbuds, TV</small>
                                </div>
                                <div class="user-progress">
                                    <small class="fw-semibold">82.5k</small>
                                </div>
                            </div>
                        </li>
                        <li class="d-flex mb-4 pb-1">
                            <div class="avatar flex-shrink-0 me-3">
                                <span class="avatar-initial rounded bg-label-success"><i
                                        class="bx bx-closet"></i></span>
                            </div>
                            <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div class="me-2">
                                    <h6 class="mb-0">Fashion</h6>
                                    <small class="text-muted">T-shirt, Jeans, Shoes</small>
                                </div>
                                <div class="user-progress">
                                    <small class="fw-semibold">23.8k</small>
                                </div>
                            </div>
                        </li>
                        <li class="d-flex mb-4 pb-1">
                            <div class="avatar flex-shrink-0 me-3">
                                <span class="avatar-initial rounded bg-label-info"><i class="bx bx-home-alt"></i></span>
                            </div>
                            <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div class="me-2">
                                    <h6 class="mb-0">Decor</h6>
                                    <small class="text-muted">Fine Art, Dining</small>
                                </div>
                                <div class="user-progress">
                                    <small class="fw-semibold">849k</small>
                                </div>
                            </div>
                        </li>
                        <li class="d-flex">
                            <div class="avatar flex-shrink-0 me-3">
                                <span class="avatar-initial rounded bg-label-secondary"><i
                                        class="bx bx-football"></i></span>
                            </div>
                            <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div class="me-2">
                                    <h6 class="mb-0">Sports</h6>
                                    <small class="text-muted">Football, Cricket Kit</small>
                                </div>
                                <div class="user-progress">
                                    <small class="fw-semibold">99</small>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
            <div class="card h-100">
                <div class="card-header d-flex align-items-center justify-content-between pb-0">
                    <div class="card-title mb-0">
                        <h5 class="m-0 me-2">Order Statistics</h5>
                        <small class="text-muted">42.82k Total Sales</small>
                    </div>
                    <div class="dropdown">
                        <button class="btn p-0" type="button" id="orederStatistics" data-bs-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i class="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="orederStatistics">
                            <a class="dropdown-item" href="javascript:void(0);">Select All</a>
                            <a class="dropdown-item" href="javascript:void(0);">Refresh</a>
                            <a class="dropdown-item" href="javascript:void(0);">Share</a>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-3" style="position: relative">
                        <div class="d-flex flex-column align-items-center gap-1">
                            <h2 class="mb-2">8,258</h2>
                            <span>Total Orders</span>
                        </div>
                        <div id="orderStatisticsChart" style="min-height: 137.55px">
                            <div id="apexcharts72g7eqnlj"
                                class="apexcharts-canvas apexcharts72g7eqnlj apexcharts-theme-light"
                                style="width: 130px; height: 137.55px">
                                <svg id="SvgjsSvg6806" width="130" height="137.55" xmlns="http://www.w3.org/2000/svg"
                                    version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg" xmlns:data="ApexChartsNS"
                                    transform="translate(0, 0)" style="background: transparent">
                                    <g id="SvgjsG6808" class="apexcharts-inner apexcharts-graphical"
                                        transform="translate(-7, 0)">
                                        <defs id="SvgjsDefs6807">
                                            <clipPath id="gridRectMask72g7eqnlj">
                                                <rect id="SvgjsRect6810" width="150" height="173" x="-4.5" y="-2.5"
                                                    rx="0" ry="0" opacity="1" stroke-width="0" stroke="none"
                                                    stroke-dasharray="0" fill="#fff"></rect>
                                            </clipPath>
                                            <clipPath id="forecastMask72g7eqnlj"></clipPath>
                                            <clipPath id="nonForecastMask72g7eqnlj"></clipPath>
                                            <clipPath id="gridRectMarkerMask72g7eqnlj">
                                                <rect id="SvgjsRect6811" width="145" height="172" x="-2" y="-2" rx="0"
                                                    ry="0" opacity="1" stroke-width="0" stroke="none"
                                                    stroke-dasharray="0" fill="#fff"></rect>
                                            </clipPath>
                                        </defs>
                                        <g id="SvgjsG6812" class="apexcharts-pie">
                                            <g id="SvgjsG6813" transform="translate(0, 0) scale(1)">
                                                <circle id="SvgjsCircle6814" r="44.835365853658544" cx="70.5" cy="70.5"
                                                    fill="transparent"></circle>
                                                <g id="SvgjsG6815" class="apexcharts-slices">
                                                    <g id="SvgjsG6816" class="apexcharts-series apexcharts-pie-series"
                                                        seriesName="Electronic" rel="1" data:realIndex="0">
                                                        <path id="SvgjsPath6817"
                                                            d="M 70.5 10.71951219512195 A 59.78048780487805 59.78048780487805 0 0 1 97.63977353321047 123.7648046533095 L 90.85483014990785 110.44860348998213 A 44.835365853658544 44.835365853658544 0 0 0 70.5 25.664634146341456 L 70.5 10.71951219512195 z"
                                                            fill="rgba(105,108,255,1)" fill-opacity="1"
                                                            stroke-opacity="1" stroke-linecap="butt" stroke-width="5"
                                                            stroke-dasharray="0"
                                                            class="apexcharts-pie-area apexcharts-donut-slice-0"
                                                            index="0" j="0" data:angle="153" data:startAngle="0"
                                                            data:strokeWidth="5" data:value="85"
                                                            data:pathOrig="M 70.5 10.71951219512195 A 59.78048780487805 59.78048780487805 0 0 1 97.63977353321047 123.7648046533095 L 90.85483014990785 110.44860348998213 A 44.835365853658544 44.835365853658544 0 0 0 70.5 25.664634146341456 L 70.5 10.71951219512195 z"
                                                            stroke="#ffffff"></path>
                                                    </g>
                                                    <g id="SvgjsG6818" class="apexcharts-series apexcharts-pie-series"
                                                        seriesName="Sports" rel="2" data:realIndex="1">
                                                        <path id="SvgjsPath6819"
                                                            d="M 97.63977353321047 123.7648046533095 A 59.78048780487805 59.78048780487805 0 0 1 70.5 130.28048780487805 L 70.5 115.33536585365854 A 44.835365853658544 44.835365853658544 0 0 0 90.85483014990785 110.44860348998213 L 97.63977353321047 123.7648046533095 z"
                                                            fill="rgba(133,146,163,1)" fill-opacity="1"
                                                            stroke-opacity="1" stroke-linecap="butt" stroke-width="5"
                                                            stroke-dasharray="0"
                                                            class="apexcharts-pie-area apexcharts-donut-slice-1"
                                                            index="0" j="1" data:angle="27" data:startAngle="153"
                                                            data:strokeWidth="5" data:value="15"
                                                            data:pathOrig="M 97.63977353321047 123.7648046533095 A 59.78048780487805 59.78048780487805 0 0 1 70.5 130.28048780487805 L 70.5 115.33536585365854 A 44.835365853658544 44.835365853658544 0 0 0 90.85483014990785 110.44860348998213 L 97.63977353321047 123.7648046533095 z"
                                                            stroke="#ffffff"></path>
                                                    </g>
                                                    <g id="SvgjsG6820" class="apexcharts-series apexcharts-pie-series"
                                                        seriesName="Decor" rel="3" data:realIndex="2">
                                                        <path id="SvgjsPath6821"
                                                            d="M 70.5 130.28048780487805 A 59.78048780487805 59.78048780487805 0 0 1 10.71951219512195 70.50000000000001 L 25.664634146341456 70.5 A 44.835365853658544 44.835365853658544 0 0 0 70.5 115.33536585365854 L 70.5 130.28048780487805 z"
                                                            fill="rgba(3,195,236,1)" fill-opacity="1" stroke-opacity="1"
                                                            stroke-linecap="butt" stroke-width="5" stroke-dasharray="0"
                                                            class="apexcharts-pie-area apexcharts-donut-slice-2"
                                                            index="0" j="2" data:angle="90" data:startAngle="180"
                                                            data:strokeWidth="5" data:value="50"
                                                            data:pathOrig="M 70.5 130.28048780487805 A 59.78048780487805 59.78048780487805 0 0 1 10.71951219512195 70.50000000000001 L 25.664634146341456 70.5 A 44.835365853658544 44.835365853658544 0 0 0 70.5 115.33536585365854 L 70.5 130.28048780487805 z"
                                                            stroke="#ffffff"></path>
                                                    </g>
                                                    <g id="SvgjsG6822" class="apexcharts-series apexcharts-pie-series"
                                                        seriesName="Fashion" rel="4" data:realIndex="3">
                                                        <path id="SvgjsPath6823"
                                                            d="M 10.71951219512195 70.50000000000001 A 59.78048780487805 59.78048780487805 0 0 1 70.48956633664653 10.719513105630845 L 70.4921747524849 25.664634829223125 A 44.835365853658544 44.835365853658544 0 0 0 25.664634146341456 70.5 L 10.71951219512195 70.50000000000001 z"
                                                            fill="rgba(113,221,55,1)" fill-opacity="1"
                                                            stroke-opacity="1" stroke-linecap="butt" stroke-width="5"
                                                            stroke-dasharray="0"
                                                            class="apexcharts-pie-area apexcharts-donut-slice-3"
                                                            index="0" j="3" data:angle="90" data:startAngle="270"
                                                            data:strokeWidth="5" data:value="50"
                                                            data:pathOrig="M 10.71951219512195 70.50000000000001 A 59.78048780487805 59.78048780487805 0 0 1 70.48956633664653 10.719513105630845 L 70.4921747524849 25.664634829223125 A 44.835365853658544 44.835365853658544 0 0 0 25.664634146341456 70.5 L 10.71951219512195 70.50000000000001 z"
                                                            stroke="#ffffff"></path>
                                                    </g>
                                                </g>
                                            </g>
                                            <g id="SvgjsG6824" class="apexcharts-datalabels-group"
                                                transform="translate(0, 0) scale(1)">
                                                <text id="SvgjsText6825" font-family="Helvetica, Arial, sans-serif"
                                                    x="70.5" y="90.5" text-anchor="middle" dominant-baseline="auto"
                                                    font-size="0.8125rem" font-weight="400" fill="#a1acb8"
                                                    class="apexcharts-text apexcharts-datalabel-label"
                                                    style="font-family: Helvetica, Arial, sans-serif">
                                                    Weekly
                                                </text>
                                                <text id="SvgjsText6826" font-family="Public Sans" x="70.5" y="71.5"
                                                    text-anchor="middle" dominant-baseline="auto" font-size="1.5rem"
                                                    font-weight="400" fill="#566a7f"
                                                    class="apexcharts-text apexcharts-datalabel-value"
                                                    style="font-family: 'Public Sans'">
                                                    38%
                                                </text>
                                            </g>
                                        </g>
                                        <line id="SvgjsLine6827" x1="0" y1="0" x2="141" y2="0" stroke="#b6b6b6"
                                            stroke-dasharray="0" stroke-width="1" stroke-linecap="butt"
                                            class="apexcharts-ycrosshairs"></line>
                                        <line id="SvgjsLine6828" x1="0" y1="0" x2="141" y2="0" stroke-dasharray="0"
                                            stroke-width="0" stroke-linecap="butt"
                                            class="apexcharts-ycrosshairs-hidden"></line>
                                    </g>
                                    <g id="SvgjsG6809" class="apexcharts-annotations"></g>
                                </svg>
                                <div class="apexcharts-legend"></div>
                                <div class="apexcharts-tooltip apexcharts-theme-dark">
                                    <div class="apexcharts-tooltip-series-group" style="order: 1">
                                        <span class="apexcharts-tooltip-marker"
                                            style="background-color: rgb(105, 108, 255)"></span>
                                        <div class="apexcharts-tooltip-text" style="
                        font-family: Helvetica, Arial, sans-serif;
                        font-size: 12px;
                      ">
                                            <div class="apexcharts-tooltip-y-group">
                                                <span class="apexcharts-tooltip-text-y-label"></span><span
                                                    class="apexcharts-tooltip-text-y-value"></span>
                                            </div>
                                            <div class="apexcharts-tooltip-goals-group">
                                                <span class="apexcharts-tooltip-text-goals-label"></span><span
                                                    class="apexcharts-tooltip-text-goals-value"></span>
                                            </div>
                                            <div class="apexcharts-tooltip-z-group">
                                                <span class="apexcharts-tooltip-text-z-label"></span><span
                                                    class="apexcharts-tooltip-text-z-value"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="apexcharts-tooltip-series-group" style="order: 2">
                                        <span class="apexcharts-tooltip-marker"
                                            style="background-color: rgb(133, 146, 163)"></span>
                                        <div class="apexcharts-tooltip-text" style="
                        font-family: Helvetica, Arial, sans-serif;
                        font-size: 12px;
                      ">
                                            <div class="apexcharts-tooltip-y-group">
                                                <span class="apexcharts-tooltip-text-y-label"></span><span
                                                    class="apexcharts-tooltip-text-y-value"></span>
                                            </div>
                                            <div class="apexcharts-tooltip-goals-group">
                                                <span class="apexcharts-tooltip-text-goals-label"></span><span
                                                    class="apexcharts-tooltip-text-goals-value"></span>
                                            </div>
                                            <div class="apexcharts-tooltip-z-group">
                                                <span class="apexcharts-tooltip-text-z-label"></span><span
                                                    class="apexcharts-tooltip-text-z-value"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="apexcharts-tooltip-series-group" style="order: 3">
                                        <span class="apexcharts-tooltip-marker"
                                            style="background-color: rgb(3, 195, 236)"></span>
                                        <div class="apexcharts-tooltip-text" style="
                        font-family: Helvetica, Arial, sans-serif;
                        font-size: 12px;
                      ">
                                            <div class="apexcharts-tooltip-y-group">
                                                <span class="apexcharts-tooltip-text-y-label"></span><span
                                                    class="apexcharts-tooltip-text-y-value"></span>
                                            </div>
                                            <div class="apexcharts-tooltip-goals-group">
                                                <span class="apexcharts-tooltip-text-goals-label"></span><span
                                                    class="apexcharts-tooltip-text-goals-value"></span>
                                            </div>
                                            <div class="apexcharts-tooltip-z-group">
                                                <span class="apexcharts-tooltip-text-z-label"></span><span
                                                    class="apexcharts-tooltip-text-z-value"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="apexcharts-tooltip-series-group" style="order: 4">
                                        <span class="apexcharts-tooltip-marker"
                                            style="background-color: rgb(113, 221, 55)"></span>
                                        <div class="apexcharts-tooltip-text" style="
                        font-family: Helvetica, Arial, sans-serif;
                        font-size: 12px;
                      ">
                                            <div class="apexcharts-tooltip-y-group">
                                                <span class="apexcharts-tooltip-text-y-label"></span><span
                                                    class="apexcharts-tooltip-text-y-value"></span>
                                            </div>
                                            <div class="apexcharts-tooltip-goals-group">
                                                <span class="apexcharts-tooltip-text-goals-label"></span><span
                                                    class="apexcharts-tooltip-text-goals-value"></span>
                                            </div>
                                            <div class="apexcharts-tooltip-z-group">
                                                <span class="apexcharts-tooltip-text-z-label"></span><span
                                                    class="apexcharts-tooltip-text-z-value"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="resize-triggers">
                            <div class="expand-trigger">
                                <div style="width: 272px; height: 139px"></div>
                            </div>
                            <div class="contract-trigger"></div>
                        </div>
                    </div>
                    <ul class="p-0 m-0">
                        <li class="d-flex mb-4 pb-1">
                            <div class="avatar flex-shrink-0 me-3">
                                <span class="avatar-initial rounded bg-label-primary"><i
                                        class="bx bx-mobile-alt"></i></span>
                            </div>
                            <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div class="me-2">
                                    <h6 class="mb-0">Electronic</h6>
                                    <small class="text-muted">Mobile, Earbuds, TV</small>
                                </div>
                                <div class="user-progress">
                                    <small class="fw-semibold">82.5k</small>
                                </div>
                            </div>
                        </li>
                        <li class="d-flex mb-4 pb-1">
                            <div class="avatar flex-shrink-0 me-3">
                                <span class="avatar-initial rounded bg-label-success"><i
                                        class="bx bx-closet"></i></span>
                            </div>
                            <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div class="me-2">
                                    <h6 class="mb-0">Fashion</h6>
                                    <small class="text-muted">T-shirt, Jeans, Shoes</small>
                                </div>
                                <div class="user-progress">
                                    <small class="fw-semibold">23.8k</small>
                                </div>
                            </div>
                        </li>
                        <li class="d-flex mb-4 pb-1">
                            <div class="avatar flex-shrink-0 me-3">
                                <span class="avatar-initial rounded bg-label-info"><i class="bx bx-home-alt"></i></span>
                            </div>
                            <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div class="me-2">
                                    <h6 class="mb-0">Decor</h6>
                                    <small class="text-muted">Fine Art, Dining</small>
                                </div>
                                <div class="user-progress">
                                    <small class="fw-semibold">849k</small>
                                </div>
                            </div>
                        </li>
                        <li class="d-flex">
                            <div class="avatar flex-shrink-0 me-3">
                                <span class="avatar-initial rounded bg-label-secondary"><i
                                        class="bx bx-football"></i></span>
                            </div>
                            <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div class="me-2">
                                    <h6 class="mb-0">Sports</h6>
                                    <small class="text-muted">Football, Cricket Kit</small>
                                </div>
                                <div class="user-progress">
                                    <small class="fw-semibold">99</small>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
            <div class="card h-100">
                <div class="card-header d-flex align-items-center justify-content-between pb-0">
                    <div class="card-title mb-0">
                        <h5 class="m-0 me-2">Order Statistics</h5>
                        <small class="text-muted">42.82k Total Sales</small>
                    </div>
                    <div class="dropdown">
                        <button class="btn p-0" type="button" id="orederStatistics" data-bs-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i class="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="orederStatistics">
                            <a class="dropdown-item" href="javascript:void(0);">Select All</a>
                            <a class="dropdown-item" href="javascript:void(0);">Refresh</a>
                            <a class="dropdown-item" href="javascript:void(0);">Share</a>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-3" style="position: relative">
                        <div class="d-flex flex-column align-items-center gap-1">
                            <h2 class="mb-2">8,258</h2>
                            <span>Total Orders</span>
                        </div>
                        <div id="orderStatisticsChart" style="min-height: 137.55px">
                            <div id="apexcharts72g7eqnlj"
                                class="apexcharts-canvas apexcharts72g7eqnlj apexcharts-theme-light"
                                style="width: 130px; height: 137.55px">
                                <svg id="SvgjsSvg6806" width="130" height="137.55" xmlns="http://www.w3.org/2000/svg"
                                    version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg" xmlns:data="ApexChartsNS"
                                    transform="translate(0, 0)" style="background: transparent">
                                    <g id="SvgjsG6808" class="apexcharts-inner apexcharts-graphical"
                                        transform="translate(-7, 0)">
                                        <defs id="SvgjsDefs6807">
                                            <clipPath id="gridRectMask72g7eqnlj">
                                                <rect id="SvgjsRect6810" width="150" height="173" x="-4.5" y="-2.5"
                                                    rx="0" ry="0" opacity="1" stroke-width="0" stroke="none"
                                                    stroke-dasharray="0" fill="#fff"></rect>
                                            </clipPath>
                                            <clipPath id="forecastMask72g7eqnlj"></clipPath>
                                            <clipPath id="nonForecastMask72g7eqnlj"></clipPath>
                                            <clipPath id="gridRectMarkerMask72g7eqnlj">
                                                <rect id="SvgjsRect6811" width="145" height="172" x="-2" y="-2" rx="0"
                                                    ry="0" opacity="1" stroke-width="0" stroke="none"
                                                    stroke-dasharray="0" fill="#fff"></rect>
                                            </clipPath>
                                        </defs>
                                        <g id="SvgjsG6812" class="apexcharts-pie">
                                            <g id="SvgjsG6813" transform="translate(0, 0) scale(1)">
                                                <circle id="SvgjsCircle6814" r="44.835365853658544" cx="70.5" cy="70.5"
                                                    fill="transparent"></circle>
                                                <g id="SvgjsG6815" class="apexcharts-slices">
                                                    <g id="SvgjsG6816" class="apexcharts-series apexcharts-pie-series"
                                                        seriesName="Electronic" rel="1" data:realIndex="0">
                                                        <path id="SvgjsPath6817"
                                                            d="M 70.5 10.71951219512195 A 59.78048780487805 59.78048780487805 0 0 1 97.63977353321047 123.7648046533095 L 90.85483014990785 110.44860348998213 A 44.835365853658544 44.835365853658544 0 0 0 70.5 25.664634146341456 L 70.5 10.71951219512195 z"
                                                            fill="rgba(105,108,255,1)" fill-opacity="1"
                                                            stroke-opacity="1" stroke-linecap="butt" stroke-width="5"
                                                            stroke-dasharray="0"
                                                            class="apexcharts-pie-area apexcharts-donut-slice-0"
                                                            index="0" j="0" data:angle="153" data:startAngle="0"
                                                            data:strokeWidth="5" data:value="85"
                                                            data:pathOrig="M 70.5 10.71951219512195 A 59.78048780487805 59.78048780487805 0 0 1 97.63977353321047 123.7648046533095 L 90.85483014990785 110.44860348998213 A 44.835365853658544 44.835365853658544 0 0 0 70.5 25.664634146341456 L 70.5 10.71951219512195 z"
                                                            stroke="#ffffff"></path>
                                                    </g>
                                                    <g id="SvgjsG6818" class="apexcharts-series apexcharts-pie-series"
                                                        seriesName="Sports" rel="2" data:realIndex="1">
                                                        <path id="SvgjsPath6819"
                                                            d="M 97.63977353321047 123.7648046533095 A 59.78048780487805 59.78048780487805 0 0 1 70.5 130.28048780487805 L 70.5 115.33536585365854 A 44.835365853658544 44.835365853658544 0 0 0 90.85483014990785 110.44860348998213 L 97.63977353321047 123.7648046533095 z"
                                                            fill="rgba(133,146,163,1)" fill-opacity="1"
                                                            stroke-opacity="1" stroke-linecap="butt" stroke-width="5"
                                                            stroke-dasharray="0"
                                                            class="apexcharts-pie-area apexcharts-donut-slice-1"
                                                            index="0" j="1" data:angle="27" data:startAngle="153"
                                                            data:strokeWidth="5" data:value="15"
                                                            data:pathOrig="M 97.63977353321047 123.7648046533095 A 59.78048780487805 59.78048780487805 0 0 1 70.5 130.28048780487805 L 70.5 115.33536585365854 A 44.835365853658544 44.835365853658544 0 0 0 90.85483014990785 110.44860348998213 L 97.63977353321047 123.7648046533095 z"
                                                            stroke="#ffffff"></path>
                                                    </g>
                                                    <g id="SvgjsG6820" class="apexcharts-series apexcharts-pie-series"
                                                        seriesName="Decor" rel="3" data:realIndex="2">
                                                        <path id="SvgjsPath6821"
                                                            d="M 70.5 130.28048780487805 A 59.78048780487805 59.78048780487805 0 0 1 10.71951219512195 70.50000000000001 L 25.664634146341456 70.5 A 44.835365853658544 44.835365853658544 0 0 0 70.5 115.33536585365854 L 70.5 130.28048780487805 z"
                                                            fill="rgba(3,195,236,1)" fill-opacity="1" stroke-opacity="1"
                                                            stroke-linecap="butt" stroke-width="5" stroke-dasharray="0"
                                                            class="apexcharts-pie-area apexcharts-donut-slice-2"
                                                            index="0" j="2" data:angle="90" data:startAngle="180"
                                                            data:strokeWidth="5" data:value="50"
                                                            data:pathOrig="M 70.5 130.28048780487805 A 59.78048780487805 59.78048780487805 0 0 1 10.71951219512195 70.50000000000001 L 25.664634146341456 70.5 A 44.835365853658544 44.835365853658544 0 0 0 70.5 115.33536585365854 L 70.5 130.28048780487805 z"
                                                            stroke="#ffffff"></path>
                                                    </g>
                                                    <g id="SvgjsG6822" class="apexcharts-series apexcharts-pie-series"
                                                        seriesName="Fashion" rel="4" data:realIndex="3">
                                                        <path id="SvgjsPath6823"
                                                            d="M 10.71951219512195 70.50000000000001 A 59.78048780487805 59.78048780487805 0 0 1 70.48956633664653 10.719513105630845 L 70.4921747524849 25.664634829223125 A 44.835365853658544 44.835365853658544 0 0 0 25.664634146341456 70.5 L 10.71951219512195 70.50000000000001 z"
                                                            fill="rgba(113,221,55,1)" fill-opacity="1"
                                                            stroke-opacity="1" stroke-linecap="butt" stroke-width="5"
                                                            stroke-dasharray="0"
                                                            class="apexcharts-pie-area apexcharts-donut-slice-3"
                                                            index="0" j="3" data:angle="90" data:startAngle="270"
                                                            data:strokeWidth="5" data:value="50"
                                                            data:pathOrig="M 10.71951219512195 70.50000000000001 A 59.78048780487805 59.78048780487805 0 0 1 70.48956633664653 10.719513105630845 L 70.4921747524849 25.664634829223125 A 44.835365853658544 44.835365853658544 0 0 0 25.664634146341456 70.5 L 10.71951219512195 70.50000000000001 z"
                                                            stroke="#ffffff"></path>
                                                    </g>
                                                </g>
                                            </g>
                                            <g id="SvgjsG6824" class="apexcharts-datalabels-group"
                                                transform="translate(0, 0) scale(1)">
                                                <text id="SvgjsText6825" font-family="Helvetica, Arial, sans-serif"
                                                    x="70.5" y="90.5" text-anchor="middle" dominant-baseline="auto"
                                                    font-size="0.8125rem" font-weight="400" fill="#a1acb8"
                                                    class="apexcharts-text apexcharts-datalabel-label"
                                                    style="font-family: Helvetica, Arial, sans-serif">
                                                    Weekly
                                                </text>
                                                <text id="SvgjsText6826" font-family="Public Sans" x="70.5" y="71.5"
                                                    text-anchor="middle" dominant-baseline="auto" font-size="1.5rem"
                                                    font-weight="400" fill="#566a7f"
                                                    class="apexcharts-text apexcharts-datalabel-value"
                                                    style="font-family: 'Public Sans'">
                                                    38%
                                                </text>
                                            </g>
                                        </g>
                                        <line id="SvgjsLine6827" x1="0" y1="0" x2="141" y2="0" stroke="#b6b6b6"
                                            stroke-dasharray="0" stroke-width="1" stroke-linecap="butt"
                                            class="apexcharts-ycrosshairs"></line>
                                        <line id="SvgjsLine6828" x1="0" y1="0" x2="141" y2="0" stroke-dasharray="0"
                                            stroke-width="0" stroke-linecap="butt"
                                            class="apexcharts-ycrosshairs-hidden"></line>
                                    </g>
                                    <g id="SvgjsG6809" class="apexcharts-annotations"></g>
                                </svg>
                                <div class="apexcharts-legend"></div>
                                <div class="apexcharts-tooltip apexcharts-theme-dark">
                                    <div class="apexcharts-tooltip-series-group" style="order: 1">
                                        <span class="apexcharts-tooltip-marker"
                                            style="background-color: rgb(105, 108, 255)"></span>
                                        <div class="apexcharts-tooltip-text" style="
                        font-family: Helvetica, Arial, sans-serif;
                        font-size: 12px;
                      ">
                                            <div class="apexcharts-tooltip-y-group">
                                                <span class="apexcharts-tooltip-text-y-label"></span><span
                                                    class="apexcharts-tooltip-text-y-value"></span>
                                            </div>
                                            <div class="apexcharts-tooltip-goals-group">
                                                <span class="apexcharts-tooltip-text-goals-label"></span><span
                                                    class="apexcharts-tooltip-text-goals-value"></span>
                                            </div>
                                            <div class="apexcharts-tooltip-z-group">
                                                <span class="apexcharts-tooltip-text-z-label"></span><span
                                                    class="apexcharts-tooltip-text-z-value"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="apexcharts-tooltip-series-group" style="order: 2">
                                        <span class="apexcharts-tooltip-marker"
                                            style="background-color: rgb(133, 146, 163)"></span>
                                        <div class="apexcharts-tooltip-text" style="
                        font-family: Helvetica, Arial, sans-serif;
                        font-size: 12px;
                      ">
                                            <div class="apexcharts-tooltip-y-group">
                                                <span class="apexcharts-tooltip-text-y-label"></span><span
                                                    class="apexcharts-tooltip-text-y-value"></span>
                                            </div>
                                            <div class="apexcharts-tooltip-goals-group">
                                                <span class="apexcharts-tooltip-text-goals-label"></span><span
                                                    class="apexcharts-tooltip-text-goals-value"></span>
                                            </div>
                                            <div class="apexcharts-tooltip-z-group">
                                                <span class="apexcharts-tooltip-text-z-label"></span><span
                                                    class="apexcharts-tooltip-text-z-value"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="apexcharts-tooltip-series-group" style="order: 3">
                                        <span class="apexcharts-tooltip-marker"
                                            style="background-color: rgb(3, 195, 236)"></span>
                                        <div class="apexcharts-tooltip-text" style="
                        font-family: Helvetica, Arial, sans-serif;
                        font-size: 12px;
                      ">
                                            <div class="apexcharts-tooltip-y-group">
                                                <span class="apexcharts-tooltip-text-y-label"></span><span
                                                    class="apexcharts-tooltip-text-y-value"></span>
                                            </div>
                                            <div class="apexcharts-tooltip-goals-group">
                                                <span class="apexcharts-tooltip-text-goals-label"></span><span
                                                    class="apexcharts-tooltip-text-goals-value"></span>
                                            </div>
                                            <div class="apexcharts-tooltip-z-group">
                                                <span class="apexcharts-tooltip-text-z-label"></span><span
                                                    class="apexcharts-tooltip-text-z-value"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="apexcharts-tooltip-series-group" style="order: 4">
                                        <span class="apexcharts-tooltip-marker"
                                            style="background-color: rgb(113, 221, 55)"></span>
                                        <div class="apexcharts-tooltip-text" style="
                        font-family: Helvetica, Arial, sans-serif;
                        font-size: 12px;
                      ">
                                            <div class="apexcharts-tooltip-y-group">
                                                <span class="apexcharts-tooltip-text-y-label"></span><span
                                                    class="apexcharts-tooltip-text-y-value"></span>
                                            </div>
                                            <div class="apexcharts-tooltip-goals-group">
                                                <span class="apexcharts-tooltip-text-goals-label"></span><span
                                                    class="apexcharts-tooltip-text-goals-value"></span>
                                            </div>
                                            <div class="apexcharts-tooltip-z-group">
                                                <span class="apexcharts-tooltip-text-z-label"></span><span
                                                    class="apexcharts-tooltip-text-z-value"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="resize-triggers">
                            <div class="expand-trigger">
                                <div style="width: 272px; height: 139px"></div>
                            </div>
                            <div class="contract-trigger"></div>
                        </div>
                    </div>
                    <ul class="p-0 m-0">
                        <li class="d-flex mb-4 pb-1">
                            <div class="avatar flex-shrink-0 me-3">
                                <span class="avatar-initial rounded bg-label-primary"><i
                                        class="bx bx-mobile-alt"></i></span>
                            </div>
                            <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div class="me-2">
                                    <h6 class="mb-0">Electronic</h6>
                                    <small class="text-muted">Mobile, Earbuds, TV</small>
                                </div>
                                <div class="user-progress">
                                    <small class="fw-semibold">82.5k</small>
                                </div>
                            </div>
                        </li>
                        <li class="d-flex mb-4 pb-1">
                            <div class="avatar flex-shrink-0 me-3">
                                <span class="avatar-initial rounded bg-label-success"><i
                                        class="bx bx-closet"></i></span>
                            </div>
                            <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div class="me-2">
                                    <h6 class="mb-0">Fashion</h6>
                                    <small class="text-muted">T-shirt, Jeans, Shoes</small>
                                </div>
                                <div class="user-progress">
                                    <small class="fw-semibold">23.8k</small>
                                </div>
                            </div>
                        </li>
                        <li class="d-flex mb-4 pb-1">
                            <div class="avatar flex-shrink-0 me-3">
                                <span class="avatar-initial rounded bg-label-info"><i class="bx bx-home-alt"></i></span>
                            </div>
                            <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div class="me-2">
                                    <h6 class="mb-0">Decor</h6>
                                    <small class="text-muted">Fine Art, Dining</small>
                                </div>
                                <div class="user-progress">
                                    <small class="fw-semibold">849k</small>
                                </div>
                            </div>
                        </li>
                        <li class="d-flex">
                            <div class="avatar flex-shrink-0 me-3">
                                <span class="avatar-initial rounded bg-label-secondary"><i
                                        class="bx bx-football"></i></span>
                            </div>
                            <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div class="me-2">
                                    <h6 class="mb-0">Sports</h6>
                                    <small class="text-muted">Football, Cricket Kit</small>
                                </div>
                                <div class="user-progress">
                                    <small class="fw-semibold">99</small>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
    <Table></Table>
</template>
