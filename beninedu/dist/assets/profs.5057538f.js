import{_ as $}from"./header.58b33f97.js";import{s as A,d as B,z as M,o as i,c,a,u as s,H as p,F as g,G as F,t as r,i as H,h as O,I as q,J as I,b as V,A as y,K as x,f as k,w,S as T,g as E}from"./index.510c5e2d.js";import{_ as X}from"./plugin-vue_export-helper.21dcd24c.js";const l=f=>(q("data-v-17ffa56a"),f=f(),I(),f),L={class:"container-fluid pt-4 px-4"},R={key:0,class:"bg-light rounded d-flex align-items-center p-4"},Y=l(()=>a("h5",null,"Nouveau Prof",-1)),z={key:1},G={class:"bg-light rounded h-100 p-4"},J=l(()=>a("h6",{class:"mb-4"},"Hoverable Table",-1)),K={class:"table table-hover"},Q=l(()=>a("thead",null,[a("tr",null,[a("th",{scope:"col"},"#"),a("th",{scope:"col"},"Nom"),a("th",{scope:"col"},"Pr\xE9nom"),a("th",{scope:"col"},"Mati\xE8res"),a("th",{scope:"col"},"Date de naissance"),a("th",{scope:"col"},"Actions")])],-1)),W=["onDblclick"],Z=l(()=>a("th",{scope:"row"},null,-1)),j=["onClick"],U=["onClick"],aa={key:2,class:"modal-adduser"},ta=l(()=>a("div",{class:"overlay"},null,-1)),ea={class:"modale card col-sm-12 col-xl-12"},oa={class:"col-sm-12 col-xl-12"},sa={class:"bg-light rounded h-100 p-4"},la={class:"d-flex align-items-center ms-4 mb-4"},na=l(()=>a("div",{class:"position-relative"},[a("img",{class:"rounded-circle",alt:"",style:{width:"40px",height:"40px"}})],-1)),ra={class:"ms-3"},ia={class:"mb-0"},da=l(()=>a("span",null,null,-1)),ca=l(()=>a("button",{type:"button",class:"btn btn-outline-primary ms-4"},"Modifier",-1)),fa=l(()=>a("nav",null,[a("div",{class:"nav nav-tabs",id:"nav-tab",role:"tablist"},[a("button",{class:"nav-link",id:"nav-profile-tab","data-bs-toggle":"tab","data-bs-target":"#nav-profile",type:"button",role:"tab","aria-controls":"nav-profile","aria-selected":"false"},"Informatios sur l'\xE9l\xE8ve"),a("button",{class:"nav-link active",id:"nav-contact-tab","data-bs-toggle":"tab","data-bs-target":"#nav-contact",type:"button",role:"tab","aria-controls":"nav-contact","aria-selected":"true"},"Notes")])],-1)),ua={class:"tab-content pt-3",id:"nav-tabContent"},ma={class:"tab-pane fade",id:"nav-profile",role:"tabpanel","aria-labelledby":"nav-profile-tab"},pa=l(()=>a("div",{class:"tab-pane fade active show",id:"nav-contact",role:"tabpanel","aria-labelledby":"nav-contact-tab"}," Sit consetetur eirmod lorem ea magna sadipscing ipsum elitr invidunt, dolores lorem erat ipsum ut aliquyam eos lorem sed. Nonumy aliquyam ea justo eos dolores dolores duo dolores. Aliquyam dolor sea dolores sit takimata no erat vero. At lorem justo tempor lorem duo, stet kasd aliquyam ipsum voluptua labore at. ",-1)),va={key:0,class:"modal-adduser"},ba=l(()=>a("div",{class:"overlay"},null,-1)),_a={class:"modale card"},ha={class:"col-sm-12 col-xl-12"},ga={class:"bg-light rounded h-100 p-4"},ya=l(()=>a("h6",{class:"mb-4"},"Creer un professeur ",-1)),xa=["onSubmit"],ka=V('<div class="mb-3" data-v-17ffa56a><label for="Nom" class="form-label" data-v-17ffa56a>Nom du professeur</label><input name="name" type="text" class="form-control" id="Nom" data-v-17ffa56a><label for="ProfPrincipal" class="form-label" data-v-17ffa56a>Pr\xE9nom</label><input name="surname" type="text" class="form-control" data-v-17ffa56a><label for="matiere" class="form-label" data-v-17ffa56a>Mati\xE8res</label><select name="matiere" class="form-select form-select-sm mb-3" aria-label=".form-select-sm example" data-v-17ffa56a><option value="Francais" data-v-17ffa56a>Francais</option><option value="Math\xE9matiques" data-v-17ffa56a>Math\xE9matiques</option><option value="Anglais" data-v-17ffa56a>Anglais</option></select><label for="dateOfBirth" class="form-label" data-v-17ffa56a>Date de naissance</label><input name="dateOfBirth" type="date" class="form-control" data-v-17ffa56a><label for="phone" class="form-label" data-v-17ffa56a>Numero de t\xE9lephone</label><input name="phone" type="text" class="form-control" data-v-17ffa56a><label for="mail" class="form-label" data-v-17ffa56a>E-mail</label><input name="mail" type="text" class="form-control" data-v-17ffa56a><label for="volumeHoraire" class="form-label" data-v-17ffa56a>Volume Horaire</label><input name="volumeHoraire" type="number" class="form-control" data-v-17ffa56a></div><button type="submit" class="btn btn-primary" data-v-17ffa56a>Ajouter</button>',2),wa=[ka],Pa={setup(f){const u=A(),{prof:b,profDetails:v}=B(u);function P(o){y.post("/api/v1/prof",{name:o.name,surname:o.surname,matiere:o.matiere,dateOfBirth:o.dateOfBirth,phone:o.phone,mail:o.mail,volumeHoraire:o.volumeHoraire}).then(async function(t){let e=await x.api3("prof");u.$patch({prof:e.data}),console.log(t)}).catch(function(t){console.log(t)})}const N=async function(o){const t=Object.fromEntries(new FormData(o.target));P(t),n.addProf=!1};function S(o){console.log("id:",o),y.delete("/api/v1/prof/"+o).then(async function(t){let e=await x.api3("prof");u.$patch({prof:e.data}),console.log(t)}).catch(t=>{console.log(t)})}let n=M({addProf:!1,profShow:!1});function _(o){n.profShow=!0,u.$patch({profDetails:o}),console.log(o)}function h(o){var t=o,e=t.substr(0,4),d=t.substr(5,2),m=t.substr(8,2),D=e+"-"+d+"-"+m;return new Date(D)}function C(o){var t=new Date,e=h(o),d=t.getFullYear()-e.getFullYear(),m=t.getMonth()-e.getMonth();return(m<0||m===0&&t.getDate()<e.getDate())&&(d=d-1),d}return(o,t)=>(i(),c(g,null,[a("div",L,[s(n).addProf===!1?(i(),c("div",R,[a("button",{type:"button",class:"btn btn-rounded btn-primary m-2",onClick:t[0]||(t[0]=e=>s(n).addProf=!0)},"+"),Y])):p("",!0),s(n).addProf===!0?(i(),c("div",z,[a("button",{type:"button",class:"btn btn-rounded btn-primary m-2",onClick:t[1]||(t[1]=e=>s(n).addProf=!1)}," Retour ")])):p("",!0),a("div",G,[J,a("table",K,[Q,a("tbody",null,[(i(!0),c(g,null,F(s(b),e=>(i(),c("tr",{onDblclick:d=>_(e)},[Z,a("td",null,r(e.name),1),a("td",null,r(e.surname),1),a("td",null,r(e.matiere),1),a("td",null,r(h(e.dateOfBirth).toLocaleDateString("fr"))+" ("+r(C(e.dateOfBirth)+" ans")+") ",1),a("td",null,[a("div",{onClick:d=>S(e._id),class:"btn btn-sm btn-danger m-2"},"X",8,j),a("div",{onClick:d=>_(e)},"details",8,U)])],40,W))),256))])])]),s(n).profShow==!0?(i(),c("div",aa,[ta,a("div",ea,[a("div",{onClick:t[2]||(t[2]=e=>s(n).profShow=!1),class:"btn-modale btn btn-danger"}," X "),a("div",oa,[a("div",sa,[a("div",la,[na,a("div",ra,[a("h6",ia,r(s(v).name)+" "+r(s(v).surname),1),da]),ca]),fa,a("div",ua,[a("div",ma,r(s(v)),1),pa])])])])])):p("",!0)]),s(n).addProf===!0?(i(),c("div",va,[ba,a("div",_a,[a("div",{onClick:t[3]||(t[3]=e=>s(n).addProf=!1),class:"btn-modale btn btn-danger"}," X "),a("div",ha,[a("div",ga,[ya,a("form",{onSubmit:H(N,["prevent"])},wa,40,xa)])])])])):p("",!0),O(" "+r(),1)],64))}};var Na=X(Pa,[["__scopeId","data-v-17ffa56a"]]);const $a={setup(f){return(u,b)=>(i(),k($,null,{default:w(()=>[(i(),k(T,null,{default:w(()=>[E(Na)]),_:1}))]),_:1}))}};export{$a as default};
