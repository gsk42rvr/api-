<script setup>
import { useRouter } from "vue-router";
import Axios from "@/services/callerService.js";
import { object } from "webidl-conversions";
const router = useRouter();
let layoutMenuEl5 = $('div')
console.log(layoutMenuEl5);
async function Login(obj) {
    console.log(obj);
    let resp = await Axios.post("/api/v1/getauthtoken", {
        email: obj.email,
        password: obj.password,
    }).then(async (res) => {
        if(res) {
            console.log(res);
            localStorage.setItem('session_token', res.data.token);
            router.push('/')
        }
        
    }).catch((error) => {
        console.log('error');
    });
    
}
const getCreditentials = async function (event) {
    const datas = Object.fromEntries(new FormData(event.target));
    Login(datas)
};
</script>
<template>
    <div class="container-xxl position-relative bg-white d-flex p-0">
        <!-- Sign Up Start -->
        <div class="container-fluid">
            <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh">
                <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <div class="bg-light rounded p-4 p-sm-5 my-4 mx-3">
                        <form @submit.prevent="getCreditentials">
                            <div class="d-flex align-items-center justify-content-between mb-3">
                                <a href="index.html" class="">
                                    <h3 class="text-primary">
                                        <i class="fa fa-hashtag me-2"></i>BéninEdu
                                    </h3>
                                </a>
                                <h3>Connexion</h3>
                            </div>
                            <div class="form-floating mb-3">
                                <input name="email"  class="form-control" id="floatingMail"
                                    placeholder="name@example.com" />
                                <label for="floatingMail">E-mail</label>
                            </div>
                            <div class="form-floating mb-4">
                                <input name="password" type="password" class="form-control" id="floatingPassword"
                                    placeholder="Password" />
                                <label for="floatingPassword">Mot de passe</label>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mb-4">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Rester connecté</label>
                                </div>
                                <a href="">Mot de passe oublié</a>
                            </div>
                            <button type="submit" class="btn btn-primary py-3 w-100 mb-4">
                                S'inscrire
                            </button>
                            <p class="text-center mb-0">
                                J'ai déja un compte <a>Connection</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Sign Up End -->
    </div>
</template>

<style scoped>

</style>
