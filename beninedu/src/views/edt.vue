<script setup>
import View from '@/components/header.vue'
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { store } from '../store/students'
import { storeToRefs } from 'pinia'
const main = store();
const {  classe, getNextdEvals, getPassedEvals } = storeToRefs(main)
const {evaluation} = main
let re2 = (evaluation) => {
  let element = []
  for (let index = 0; index < evaluation.length; index++) {
    element[index] = {
      'title':evaluation[index]['name'],
      'date': evaluation[index]['date']
    }
  }
  return element
}
let re = [
  { title: evaluation[0]['name'] , date: evaluation[0]['date']},
  { title: evaluation[1]['name'], date: evaluation[1]['date'] }
]
console.log(re2(evaluation)+re);
const handleDateClick = function(arg) {
      alert('date click! ' + arg.dateStr)
    }
const toggleWeekends = function() {
  console.log(calendarOptions.weekends);
      calendarOptions.weekends = !calendarOptions.weekends // toggle the boolean!
    } 
let calendarOptions = {
        plugins: [ dayGridPlugin, interactionPlugin ],
        initialView: 'dayGridMonth',
        weekends: true,
        events: re2(evaluation) 
      }
</script>
 <template>
 {{ evaluation[0].date}}  {{ evaluation[1].date}}
 <View><Suspense><FullCalendar :options="calendarOptions" /></Suspense> <button @click="calendarOptions.weekends = !calendarOptions.weekends ">toggle weekends</button></View>
 </template>