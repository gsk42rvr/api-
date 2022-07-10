import Axios from '@/services/callerService.js'
let gs
let students
let nstudent
const state = reactive({
    gs,
    students,
    nstudent

})

let riku = 'hgfgfhgfg'
import { computed, reactive, ref, watch } from 'vue';
const api = async () => {
    try {
      const response = await Axios.get('/api/v1/utilisateurs/');
    } catch (error) {
      console.error(error);
    }
  }
  const api2 = async () => {
    try {
      const response = await Axios.get('/api/v1/student/')
      return response
      } catch (error) {
      console.error(error);
    }
  }
  const api3 = async (obj) => {
    try {
      const response = await Axios.get('/api/v1/'+ obj)
      return response
      } catch (error) {
      console.error(error);
    }
  }
export default  {state, riku, api2,api3}