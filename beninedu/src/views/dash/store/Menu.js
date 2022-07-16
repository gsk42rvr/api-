import { defineStore } from "pinia";
let userDetails = {
    nom: "Kpatchavi",
    prenom:"Yoan",
    schoolName:"EFE Montaigne",
    role: "Administrateur",
    telephone : {
        tel1: "0752529948",
        tel2: "96066754",
    }



}
const store = defineStore("main", {

    state: () => ({

    }),

    getters:{

    },

    actions: {

    },

    
})

export { store };