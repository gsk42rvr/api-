<script setup>
import View from '@/components/header.vue'
const getName = () => {
    let gs = window.prompt("Joueur 1")
    let tim = window.prompt("Joueur 2")
    const resp = [gs,tim] 
    return resp
    
}
let grille = {
    a1: undefined,
    a2: undefined,
    a3: undefined,
    a4: undefined,
    a5: undefined,
    a6: undefined,
    a7: undefined,
    a8: undefined,
    a9: undefined
}
const checkwin = (ligne) => {
    if (ligne[0] == undefined) {
        return false
    }
    if (ligne[0] == ligne[1] && ligne[0] == ligne[2]) {
        return true
    }else {
        return false
    }
}

const checkgrille = (grille) => {
    let c1 = [grille.a1,grille.a2,grille.a3]
    let c2 = [grille.b1,grille.b2,grille.b3]
    let c3 = [grille.c3,grille.c2,grille.c3]
    let l1 = [grille.a1,grille.b1,grille.c1]
    let l2 = [grille.a2,grille.b2,grille.c2]
    let l3 = [grille.a3,grille.b3,grille.c3]
    let d1 = [grille.a1,grille.b2,grille.c3]
    let d2 = [grille.c1,grille.b2,grille.a3]
    if (checkwin(c1) == true) {
        return true
    }
     if (checkwin(c2) == true) {
        return true
    }
     if (checkwin(c3) == true) {
        return true
    }
     if (checkwin(l1) == true) {
        return true
    }
     if (checkwin(l2) == true) {
        return true
    }
     if (checkwin(l3) == true) {
        return true
    }
     if (checkwin(d1) == true) {
        return true
    }
     if (checkwin(d2) == true) {
        return true
    }
    return false
}
checkgrille(grille)
const checkentre = (str) => {


}
const partie = async () => {
    const joueurs = getName()
    const j1 = joueurs[0]
    const j2 = joueurs[1]
    let grille = {
    a1: undefined,
    a2: undefined,
    a3: undefined,
    a4: undefined,
    a5: undefined,
    a6: undefined,
    a7: undefined,
    a8: undefined,
    a9: undefined
}
    for (let i = 0; i < 9; i++) {
        let player1 = await window.prompt(j1 + ", à vous de jouer")
        grille[player1] = "x"
        console.log(grille);
        if(checkgrille(grille) === true) {
            window.alert(j1 + "a gagné")
            return
        }
        let player2 = await window.prompt(j2 + ", à vous de jouer")
        grille[player2] = "o"
        if(checkgrille(grille) === true) {
            window.alert(j2 + " a gagné")
            return
        }

        console.log(grille);

    }
    window.alert("Auccun vainqueur partie reminée")
    console.log(j1,j2);
}
partie()
</script>
<template>
<View><table>
        <caption>Current player: 
          <span id="playerCurrentLabel"></span></caption> 
        <tr>
          <td name = "a1">-</td> <td name = "b1">-</td> <td name = "c1">-</td>
        </tr>
        <tr>
          <td name = "a2">-</td> <td name = "b2">-</td> <td name = "c2">-</td>      
        </tr>
        <tr>
          <td name = "a3">-</td> <td name = "b3">-</td> <td name = "c3">-</td>
        </tr>
      </table></View>
</template>
<style>
body {
  text-align: center; /* or: left right justify inherit */ 
                      /* more choices: https://github.com/CoderDojoPonceSprings/Events/blob/master/Workshops/Tic-Tac-Toe-game/StudentSamples.mdhttp://docs.webplatform.org/wiki/css/properties/text-align */
  
  background: royalblue; /* or: goldenrod violet springgreen green orchid tomato */ 
                        /* more choices: http://www.w3schools.com/cssref/css_colornames.asp */
} 

h1 {
  color: darkblue; /* or: goldenrod violet springgreen green orchid tomato */ 
                   /* more choices: http://www.w3schools.com/cssref/css_colornames.asp */

  font-family: monospace; /* or: serif sans-serif */
                          /* more choices: http://www.w3schools.com/cssref/css_websafe_fonts.asp */
  font-size: 50px; /* or: 25px 75px 200px */
                   /* learn more: http://www.w3schools.com/cssref/pr_font_font-size.asp */
}

h2 {
  font-family: sans-serif;  /* or: serif sans-serif */
                            /* more choices: http://www.w3schools.com/cssref/css_websafe_fonts.asp */   
  color: darkgreen;    
  background: lightgray;
  padding: 5px;
}

label {
  font-weight: bold;
  font-family: sans-serif;
  font-size: 125%;
}

table {
  text-align: center; /* or: left right justify inherit */ 
                      /* more choices: http://docs.webplatform.org/wiki/css/properties/text-align */
  display: inline-table; /* or: block inline inline-block run-in table */;
                         /* more choices: http://www.w3schools.com/cssref/pr_class_display.asp */

  background: orange; 
  font-family: impact; /* or: Georgia Verdana WingDings "Trebuchet MS" */
                       /* more choices: http://www.w3schools.com/cssref/css_websafe_fonts.asp */
}

td {
  width: 100px; /* or: 50px 25px 200px */
                /* more info: http://www.w3schools.com/cssref/pr_dim_width.asp */;
  height: 100px; /* or: 50px 25px 200px */
  font-size: 50px; /* or: 50px 25px 200px */
                   /* more info: http://www.w3schools.com/cssref/pr_font_font-size.asp */
}  

caption {
  font-size: 35px;
  color: black;
  margin-bottom: 5px;
  padding-bottom: 10px;
  border-bottom: 3px dashed darkgreen;
}

#playerCurrentLabel {
  background: darkblue;
  padding: 4px;
  color: goldenrod;
}

.credits {
  background: darkgray;
  color: darkblue;
  font-family: serif;
  font-weight: bold;
}

.credits h3 {
  background: lightgray;
}
  </style>