import axios from 'axios'
import { useRouter } from 'vue-router'
import router from '../router'
const Axios = axios.create({

    baseURL : 'https://beninedu-app.herokuapp.com'
})

Axios.interceptors.response.use(response => {
    return response
}, error => {
    if (error.response.status == 401){
        localStorage.removeItem('session_token')
        router.push('/login')
    }
})

export default Axios