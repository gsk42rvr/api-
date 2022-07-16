import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import {createPinia} from "pinia";
import PerfectScrollbar from 'vue3-perfect-scrollbar'
// import "./assets/sneat/assets/js/config.js"
import "./assets/sneat/assets/vendor/js/helpers.js"
import "./assets/sneat/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"
import "./assets/sneat/assets/vendor/libs/apex-charts/apexcharts.js"
// import "./assets/sneat/assets/vendor/libs/fullcalendar/jquery.dataTables.js"
// import "./assets/sneat/assets/js/dashboards-analytics.js"
import "./assets/sneat/assets/vendor/js/helpers.js"
import "./assets/sneat/assets/vendor/js/bootstrap.js"
import "./assets/sneat/assets/vendor/libs/popper/popper.js"
import "./assets/sneat/assets/vendor/libs/jquery/jquery.js"
import "./assets/sneat/assets/vendor/js/menu.js"



{/* <script src="../src/assets/sneat/assets/vendor/libs/fullcalendar/datatables-bootstrap5.js"></script>
<script src="../src/assets/sneat/assets/vendor/libs/fullcalendar/datatables.responsive.js"></script>
<script src="../src/assets/sneat/assets/vendor/libs/fullcalendar/responsive.bootstrap5.js"></script>
<script src="../src/assets/sneat/assets/vendor/libs/fullcalendar/app-invoice-list.js"></script>
<script src="../src/assets/sneat/assets/vendor/libs/fullcalendar/main.js"></script>
<script src="../src/assets/sneat/assets/vendor/libs/fullcalendar/typeahead.js"></script>
<script src="../src/assets/sneat/assets/vendor/libs/fullcalendar/select2.js"></script> */}
import "./assets/sneat/assets/js/main.js"
const app = createApp(App);

app.use(router, PerfectScrollbar);
app.use(createPinia())
app.mount("#app");