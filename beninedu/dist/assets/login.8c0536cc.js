import{u as _,o as N,c as x,a as n,w as M,F as D,b as A,A as L}from"./index.ed4803ab.js";var O={};(function(o){function i(r,e,t){return t.globals&&(r=t.globals[r.name]),new r(`${t.context?t.context:"Value"} ${e}.`)}function g(r,e){if(typeof r=="bigint")throw i(TypeError,"is a BigInt which cannot be converted to a number",e);return e.globals?e.globals.Number(r):Number(r)}function p(r){return r>0&&r%1===.5&&(r&1)===0||r<0&&r%1===-.5&&(r&1)===1?w(Math.floor(r)):w(Math.round(r))}function u(r){return w(Math.trunc(r))}function d(r){return r<0?-1:1}function S(r,e){const t=r%e;return d(e)!==d(t)?t+e:t}function w(r){return r===0?0:r}function m(r,{unsigned:e}){let t,l;e?(t=0,l=2**r-1):(t=-(2**(r-1)),l=2**(r-1)-1);const f=2**r,h=2**(r-1);return(c,s={})=>{let a=g(c,s);if(a=w(a),s.enforceRange){if(!Number.isFinite(a))throw i(TypeError,"is not a finite number",s);if(a=u(a),a<t||a>l)throw i(TypeError,`is outside the accepted range of ${t} to ${l}, inclusive`,s);return a}return!Number.isNaN(a)&&s.clamp?(a=Math.min(Math.max(a,t),l),a=p(a),a):!Number.isFinite(a)||a===0?0:(a=u(a),a>=t&&a<=l?a:(a=S(a,f),!e&&a>=h?a-f:a))}}function F(r,{unsigned:e}){const t=Number.MAX_SAFE_INTEGER,l=e?0:Number.MIN_SAFE_INTEGER,f=e?BigInt.asUintN:BigInt.asIntN;return(h,c={})=>{let s=g(h,c);if(s=w(s),c.enforceRange){if(!Number.isFinite(s))throw i(TypeError,"is not a finite number",c);if(s=u(s),s<l||s>t)throw i(TypeError,`is outside the accepted range of ${l} to ${t}, inclusive`,c);return s}if(!Number.isNaN(s)&&c.clamp)return s=Math.min(Math.max(s,l),t),s=p(s),s;if(!Number.isFinite(s)||s===0)return 0;let a=BigInt(u(s));return a=f(r,a),Number(a)}}o.any=r=>r,o.undefined=()=>{},o.boolean=r=>Boolean(r),o.byte=m(8,{unsigned:!1}),o.octet=m(8,{unsigned:!0}),o.short=m(16,{unsigned:!1}),o["unsigned short"]=m(16,{unsigned:!0}),o.long=m(32,{unsigned:!1}),o["unsigned long"]=m(32,{unsigned:!0}),o["long long"]=F(64,{unsigned:!1}),o["unsigned long long"]=F(64,{unsigned:!0}),o.double=(r,e={})=>{const t=g(r,e);if(!Number.isFinite(t))throw i(TypeError,"is not a finite floating-point value",e);return t},o["unrestricted double"]=(r,e={})=>g(r,e),o.float=(r,e={})=>{const t=g(r,e);if(!Number.isFinite(t))throw i(TypeError,"is not a finite floating-point value",e);if(Object.is(t,-0))return t;const l=Math.fround(t);if(!Number.isFinite(l))throw i(TypeError,"is outside the range of a single-precision floating-point value",e);return l},o["unrestricted float"]=(r,e={})=>{const t=g(r,e);return isNaN(t)||Object.is(t,-0)?t:Math.fround(t)},o.DOMString=(r,e={})=>{if(e.treatNullAsEmptyString&&r===null)return"";if(typeof r=="symbol")throw i(TypeError,"is a symbol, which cannot be converted to a string",e);return(e.globals?e.globals.String:String)(r)},o.ByteString=(r,e={})=>{const t=o.DOMString(r,e);let l;for(let f=0;(l=t.codePointAt(f))!==void 0;++f)if(l>255)throw i(TypeError,"is not a valid ByteString",e);return t},o.USVString=(r,e={})=>{const t=o.DOMString(r,e),l=t.length,f=[];for(let h=0;h<l;++h){const c=t.charCodeAt(h);if(c<55296||c>57343)f.push(String.fromCodePoint(c));else if(56320<=c&&c<=57343)f.push(String.fromCodePoint(65533));else if(h===l-1)f.push(String.fromCodePoint(65533));else{const s=t.charCodeAt(h+1);if(56320<=s&&s<=57343){const a=c&1023,T=s&1023;f.push(String.fromCodePoint((2<<15)+(2<<9)*a+T)),++h}else f.push(String.fromCodePoint(65533))}}return f.join("")},o.object=(r,e={})=>{if(r===null||typeof r!="object"&&typeof r!="function")throw i(TypeError,"is not an object",e);return r};const v=Object.getOwnPropertyDescriptor(ArrayBuffer.prototype,"byteLength").get,C=typeof SharedArrayBuffer=="function"?Object.getOwnPropertyDescriptor(SharedArrayBuffer.prototype,"byteLength").get:null;function B(r){try{return v.call(r),!0}catch{return!1}}function y(r){try{return C.call(r),!0}catch{return!1}}function b(r){try{return new Uint8Array(r),!1}catch{return!0}}o.ArrayBuffer=(r,e={})=>{if(!B(r))throw e.allowShared&&!y(r)?i(TypeError,"is not an ArrayBuffer or SharedArrayBuffer",e):i(TypeError,"is not an ArrayBuffer",e);if(b(r))throw i(TypeError,"is a detached ArrayBuffer",e);return r};const E=Object.getOwnPropertyDescriptor(DataView.prototype,"byteLength").get;o.DataView=(r,e={})=>{try{E.call(r)}catch{throw i(TypeError,"is not a DataView",e)}if(!e.allowShared&&y(r.buffer))throw i(TypeError,"is backed by a SharedArrayBuffer, which is not allowed",e);if(b(r.buffer))throw i(TypeError,"is backed by a detached ArrayBuffer",e);return r};const k=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array).prototype,Symbol.toStringTag).get;[Int8Array,Int16Array,Int32Array,Uint8Array,Uint16Array,Uint32Array,Uint8ClampedArray,Float32Array,Float64Array].forEach(r=>{const{name:e}=r,t=/^[AEIOU]/u.test(e)?"an":"a";o[e]=(l,f={})=>{if(!ArrayBuffer.isView(l)||k.call(l)!==e)throw i(TypeError,`is not ${t} ${e} object`,f);if(!f.allowShared&&y(l.buffer))throw i(TypeError,"is a view on a SharedArrayBuffer, which is not allowed",f);if(b(l.buffer))throw i(TypeError,"is a view on a detached ArrayBuffer",f);return l}}),o.ArrayBufferView=(r,e={})=>{if(!ArrayBuffer.isView(r))throw i(TypeError,"is not a view on an ArrayBuffer or SharedArrayBuffer",e);if(!e.allowShared&&y(r.buffer))throw i(TypeError,"is a view on a SharedArrayBuffer, which is not allowed",e);if(b(r.buffer))throw i(TypeError,"is a view on a detached ArrayBuffer",e);return r},o.BufferSource=(r,e={})=>{if(ArrayBuffer.isView(r)){if(!e.allowShared&&y(r.buffer))throw i(TypeError,"is a view on a SharedArrayBuffer, which is not allowed",e);if(b(r.buffer))throw i(TypeError,"is a view on a detached ArrayBuffer",e);return r}if(!e.allowShared&&!B(r))throw i(TypeError,"is not an ArrayBuffer or a view on one",e);if(e.allowShared&&!y(r)&&!B(r))throw i(TypeError,"is not an ArrayBuffer, SharedArrayBuffer, or a view on one",e);if(b(r))throw i(TypeError,"is a detached ArrayBuffer",e);return r},o.DOMTimeStamp=o["unsigned long long"]})(O);const P=n("div",{class:"container-xxl position-relative bg-white d-flex p-0"},null,-1),I={class:"authentication-wrapper authentication-cover"},j={class:"authentication-inner row m-0"},V=n("div",{class:"d-none d-lg-flex col-lg-7 col-xl-8 align-items-center p-5"},[n("div",{class:"w-100 d-flex justify-content-center"},[n("img",{src:"",class:"img-fluid",alt:"Login image",width:"700","data-app-dark-img":"illustrations/boy-with-rocket-dark.png","data-app-light-img":"illustrations/boy-with-rocket-light.png"})])],-1),U={class:"d-flex col-12 col-lg-5 col-xl-4 align-items-center authentication-bg p-sm-5 p-4"},$={class:"w-px-400 mx-auto"},R=n("div",{class:"app-brand mb-5"},[n("a",{href:"index.html",class:"app-brand-link gap-2"},[n("span",{class:"app-brand-logo demo"},[n("svg",{width:"25",viewBox:"0 0 25 42",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[n("defs",null,[n("path",{d:"M13.7918663,0.358365126 L3.39788168,7.44174259 C0.566865006,9.69408886 -0.379795268,12.4788597 0.557900856,15.7960551 C0.68998853,16.2305145 1.09562888,17.7872135 3.12357076,19.2293357 C3.8146334,19.7207684 5.32369333,20.3834223 7.65075054,21.2172976 L7.59773219,21.2525164 L2.63468769,24.5493413 C0.445452254,26.3002124 0.0884951797,28.5083815 1.56381646,31.1738486 C2.83770406,32.8170431 5.20850219,33.2640127 7.09180128,32.5391577 C8.347334,32.0559211 11.4559176,30.0011079 16.4175519,26.3747182 C18.0338572,24.4997857 18.6973423,22.4544883 18.4080071,20.2388261 C17.963753,17.5346866 16.1776345,15.5799961 13.0496516,14.3747546 L10.9194936,13.4715819 L18.6192054,7.984237 L13.7918663,0.358365126 Z",id:"path-1"}),n("path",{d:"M5.47320593,6.00457225 C4.05321814,8.216144 4.36334763,10.0722806 6.40359441,11.5729822 C8.61520715,12.571656 10.0999176,13.2171421 10.8577257,13.5094407 L15.5088241,14.433041 L18.6192054,7.984237 C15.5364148,3.11535317 13.9273018,0.573395879 13.7918663,0.358365126 C13.5790555,0.511491653 10.8061687,2.3935607 5.47320593,6.00457225 Z",id:"path-3"}),n("path",{d:"M7.50063644,21.2294429 L12.3234468,23.3159332 C14.1688022,24.7579751 14.397098,26.4880487 13.008334,28.506154 C11.6195701,30.5242593 10.3099883,31.790241 9.07958868,32.3040991 C5.78142938,33.4346997 4.13234973,34 4.13234973,34 C4.13234973,34 2.75489982,33.0538207 2.37032616e-14,31.1614621 C-0.55822714,27.8186216 -0.55822714,26.0572515 -4.05231404e-15,25.8773518 C0.83734071,25.6075023 2.77988457,22.8248993 3.3049379,22.52991 C3.65497346,22.3332504 5.05353963,21.8997614 7.50063644,21.2294429 Z",id:"path-4"}),n("path",{d:"M20.6,7.13333333 L25.6,13.8 C26.2627417,14.6836556 26.0836556,15.9372583 25.2,16.6 C24.8538077,16.8596443 24.4327404,17 24,17 L14,17 C12.8954305,17 12,16.1045695 12,15 C12,14.5672596 12.1403557,14.1461923 12.4,13.8 L17.4,7.13333333 C18.0627417,6.24967773 19.3163444,6.07059163 20.2,6.73333333 C20.3516113,6.84704183 20.4862915,6.981722 20.6,7.13333333 Z",id:"path-5"})]),n("g",{id:"g-app-brand",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[n("g",{id:"Brand-Logo",transform:"translate(-27.000000, -15.000000)"},[n("g",{id:"Icon",transform:"translate(27.000000, 15.000000)"},[n("g",{id:"Mask",transform:"translate(0.000000, 8.000000)"},[n("mask",{id:"mask-2",fill:"white"},[n("use",{"xlink:href":"#path-1"})]),n("use",{fill:"#696cff","xlink:href":"#path-1"}),n("g",{id:"Path-3",mask:"url(#mask-2)"},[n("use",{fill:"#696cff","xlink:href":"#path-3"}),n("use",{"fill-opacity":"0.2",fill:"#FFFFFF","xlink:href":"#path-3"})]),n("g",{id:"Path-4",mask:"url(#mask-2)"},[n("use",{fill:"#696cff","xlink:href":"#path-4"}),n("use",{"fill-opacity":"0.2",fill:"#FFFFFF","xlink:href":"#path-4"})])]),n("g",{id:"Triangle",transform:"translate(19.000000, 11.000000) rotate(-300.000000) translate(-19.000000, -11.000000) "},[n("use",{fill:"#696cff","xlink:href":"#path-5"}),n("use",{"fill-opacity":"0.2",fill:"#FFFFFF","xlink:href":"#path-5"})])])])])])]),n("span",{class:"app-brand-text demo text-body fw-bolder"},"Sneat")])],-1),G=n("h4",{class:"mb-2"},"Bienvenu sur BeninEdu \u{1F44B}",-1),Z=n("p",{class:"mb-4"},"Connectez vous pour pouvoir acceder a votre espace",-1),z=["onSubmit"],X=A('<div class="form-floating mb-3"><input name="email" class="form-control" id="floatingMail" placeholder="name@example.com"><label for="floatingMail">E-mail</label></div><div class="form-floating mb-4"><input name="password" type="password" class="form-control" id="floatingPassword" placeholder="Password"><label for="floatingPassword">Mot de passe</label></div><div class="mb-3"><div class="form-check"><input class="form-check-input" type="checkbox" id="remember-me"><label class="form-check-label" for="remember-me"> Remember Me </label></div></div><button type="submit" class="btn btn-primary d-grid w-100"> Sign in </button><div></div><input type="hidden">',6),q=[X],H=A('<p class="text-center"><span>New on our platform?</span><a href="auth-register-cover.html"><span>Create an account</span></a></p><div class="divider my-4"><div class="divider-text">or</div></div><div class="d-flex justify-content-center"><a href="javascript:;" class="btn btn-icon btn-label-facebook me-3"><i class="tf-icons bx bxl-facebook"></i></a><a href="javascript:;" class="btn btn-icon btn-label-google-plus me-3"><i class="tf-icons bx bxl-google-plus"></i></a><a href="javascript:;" class="btn btn-icon btn-label-twitter"><i class="tf-icons bx bxl-twitter"></i></a></div>',3),K={setup(o){const i=_();async function g(u){console.log(u),await L.post("/api/v1/getauthtoken",{email:u.email,password:u.password}).then(async d=>{d&&(console.log(d),localStorage.setItem("session_token",d.data.token),i.push("/"))}).catch(d=>{console.log("error")})}const p=async function(u){const d=Object.fromEntries(new FormData(u.target));g(d)};return(u,d)=>(N(),x(D,null,[P,n("div",I,[n("div",j,[V,n("div",U,[n("div",$,[R,G,Z,n("form",{onSubmit:M(p,["prevent"]),id:"formAuthentication",class:"mb-3 fv-plugins-bootstrap5 fv-plugins-framework",action:"index.html",method:"POST",novalidate:"novalidate"},q,40,z),H])])])])],64))}};export{K as default};
