import Axios from "@/services/callerService.js";
let req = async  (token) => {
    try {
        const response = await Axios.get('/api/v1/checkToken', {
            headers : {token:token}
        })
        if (response.data == true) {
            return response.data
        } else {
            return response
        }
    } catch (error) {
        console.log(error);
    }
}
export async function authGuard(to,from,) {
    let token = localStorage.getItem('session_token')
    let token2 = true
    // await req(token)
    if (token2 === true) {
        return true
    }
}