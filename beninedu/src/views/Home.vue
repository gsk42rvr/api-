<script setup>
import { useRouter } from 'vue-router'
import View from '@/components/header.vue'
import content from '../views/o.vue'
import { computed, reactive, ref, watch } from 'vue';
import  {store}  from "../store/students"
import { storeToRefs } from 'pinia';

const main = store();

const { counter, name, doubleCount, student } = storeToRefs(main)
const {addOne, reset} = main
console.log(counter,'counter');
main.$subscribe((mutation,state) => {
  console.log("mutation",mutation);
  console.log("state", state);
  console.log(doubleCount, 'doubles');
})

function rst () {
  main.$reset()
}

const router = useRouter()
let gs
 const Logout = () => {
    localStorage.removeItem('session_token')
    router.push('/login')
}

</script>

<template>
<View><RouterView></RouterView></View>

</template>