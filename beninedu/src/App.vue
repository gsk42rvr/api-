<script >
import { onMounted, onUnmounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { loadScript } from "vue-plugin-load-script";

export default {
  name: 'app',
  beforeCreate() {
    
    
    let externalScript = document.createElement('title')
    externalScript.setAttribute('src', 'src/assets/sneat/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js')
    document.head.appendChild(externalScript)
  }, 
}      
// var spinner = function () {
//   setTimeout(function () {  
//     if ($("#spinner").length > 0) { 
//       $("#spinner").removeClass("show");
//     }
//   }, 1);
// };
// spinner();
</script>

<template>
  <!-- Spinner Start -->
  <!-- <div
    id="spinner"
    class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
  >
    <div
      class="spinner-border text-primary"
      style="width: 3rem; height: 3rem"
      role="status"
    >
      <span class="sr-only">Loading...</span>
    </div>
  </div> -->
  <!-- Spinner End -->
 
  <RouterView></RouterView>
</template>

<style >
@import "@/assets/sneat/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
@import "@/assets/sneat/assets/vendor/css/core.css";
@import "@/assets/sneat/assets/vendor/css/theme-default.css";
@import "@/assets/sneat/assets/css/demo.css";
@import "@/assets/sneat/assets/vendor/libs/apex-charts/apex-charts.css";
@import "@/assets/sneat/assets/vendor/fonts/boxicons.css";
</style>
