import{e as D,o as M,c as C,a as w,i as O,b as I,A as j}from"./index.2664ac94.js";var P={};(function(a){function i(r,e,t){return t.globals&&(r=t.globals[r.name]),new r(`${t.context?t.context:"Value"} ${e}.`)}function h(r,e){if(typeof r=="bigint")throw i(TypeError,"is a BigInt which cannot be converted to a number",e);return e.globals?e.globals.Number(r):Number(r)}function B(r){return r>0&&r%1===.5&&(r&1)===0||r<0&&r%1===-.5&&(r&1)===1?b(Math.floor(r)):b(Math.round(r))}function u(r){return b(Math.trunc(r))}function l(r){return r<0?-1:1}function p(r,e){const t=r%e;return l(e)!==l(t)?t+e:t}function b(r){return r===0?0:r}function y(r,{unsigned:e}){let t,f;e?(t=0,f=2**r-1):(t=-(2**(r-1)),f=2**(r-1)-1);const c=2**r,d=2**(r-1);return(s,o={})=>{let n=h(s,o);if(n=b(n),o.enforceRange){if(!Number.isFinite(n))throw i(TypeError,"is not a finite number",o);if(n=u(n),n<t||n>f)throw i(TypeError,`is outside the accepted range of ${t} to ${f}, inclusive`,o);return n}return!Number.isNaN(n)&&o.clamp?(n=Math.min(Math.max(n,t),f),n=B(n),n):!Number.isFinite(n)||n===0?0:(n=u(n),n>=t&&n<=f?n:(n=p(n,c),!e&&n>=d?n-c:n))}}function S(r,{unsigned:e}){const t=Number.MAX_SAFE_INTEGER,f=e?0:Number.MIN_SAFE_INTEGER,c=e?BigInt.asUintN:BigInt.asIntN;return(d,s={})=>{let o=h(d,s);if(o=b(o),s.enforceRange){if(!Number.isFinite(o))throw i(TypeError,"is not a finite number",s);if(o=u(o),o<f||o>t)throw i(TypeError,`is outside the accepted range of ${f} to ${t}, inclusive`,s);return o}if(!Number.isNaN(o)&&s.clamp)return o=Math.min(Math.max(o,f),t),o=B(o),o;if(!Number.isFinite(o)||o===0)return 0;let n=BigInt(u(o));return n=c(r,n),Number(n)}}a.any=r=>r,a.undefined=()=>{},a.boolean=r=>Boolean(r),a.byte=y(8,{unsigned:!1}),a.octet=y(8,{unsigned:!0}),a.short=y(16,{unsigned:!1}),a["unsigned short"]=y(16,{unsigned:!0}),a.long=y(32,{unsigned:!1}),a["unsigned long"]=y(32,{unsigned:!0}),a["long long"]=S(64,{unsigned:!1}),a["unsigned long long"]=S(64,{unsigned:!0}),a.double=(r,e={})=>{const t=h(r,e);if(!Number.isFinite(t))throw i(TypeError,"is not a finite floating-point value",e);return t},a["unrestricted double"]=(r,e={})=>h(r,e),a.float=(r,e={})=>{const t=h(r,e);if(!Number.isFinite(t))throw i(TypeError,"is not a finite floating-point value",e);if(Object.is(t,-0))return t;const f=Math.fround(t);if(!Number.isFinite(f))throw i(TypeError,"is outside the range of a single-precision floating-point value",e);return f},a["unrestricted float"]=(r,e={})=>{const t=h(r,e);return isNaN(t)||Object.is(t,-0)?t:Math.fround(t)},a.DOMString=(r,e={})=>{if(e.treatNullAsEmptyString&&r===null)return"";if(typeof r=="symbol")throw i(TypeError,"is a symbol, which cannot be converted to a string",e);return(e.globals?e.globals.String:String)(r)},a.ByteString=(r,e={})=>{const t=a.DOMString(r,e);let f;for(let c=0;(f=t.codePointAt(c))!==void 0;++c)if(f>255)throw i(TypeError,"is not a valid ByteString",e);return t},a.USVString=(r,e={})=>{const t=a.DOMString(r,e),f=t.length,c=[];for(let d=0;d<f;++d){const s=t.charCodeAt(d);if(s<55296||s>57343)c.push(String.fromCodePoint(s));else if(56320<=s&&s<=57343)c.push(String.fromCodePoint(65533));else if(d===f-1)c.push(String.fromCodePoint(65533));else{const o=t.charCodeAt(d+1);if(56320<=o&&o<=57343){const n=s&1023,_=o&1023;c.push(String.fromCodePoint((2<<15)+(2<<9)*n+_)),++d}else c.push(String.fromCodePoint(65533))}}return c.join("")},a.object=(r,e={})=>{if(r===null||typeof r!="object"&&typeof r!="function")throw i(TypeError,"is not an object",e);return r};const E=Object.getOwnPropertyDescriptor(ArrayBuffer.prototype,"byteLength").get,T=typeof SharedArrayBuffer=="function"?Object.getOwnPropertyDescriptor(SharedArrayBuffer.prototype,"byteLength").get:null;function A(r){try{return E.call(r),!0}catch{return!1}}function g(r){try{return T.call(r),!0}catch{return!1}}function m(r){try{return new Uint8Array(r),!1}catch{return!0}}a.ArrayBuffer=(r,e={})=>{if(!A(r))throw e.allowShared&&!g(r)?i(TypeError,"is not an ArrayBuffer or SharedArrayBuffer",e):i(TypeError,"is not an ArrayBuffer",e);if(m(r))throw i(TypeError,"is a detached ArrayBuffer",e);return r};const F=Object.getOwnPropertyDescriptor(DataView.prototype,"byteLength").get;a.DataView=(r,e={})=>{try{F.call(r)}catch{throw i(TypeError,"is not a DataView",e)}if(!e.allowShared&&g(r.buffer))throw i(TypeError,"is backed by a SharedArrayBuffer, which is not allowed",e);if(m(r.buffer))throw i(TypeError,"is backed by a detached ArrayBuffer",e);return r};const N=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array).prototype,Symbol.toStringTag).get;[Int8Array,Int16Array,Int32Array,Uint8Array,Uint16Array,Uint32Array,Uint8ClampedArray,Float32Array,Float64Array].forEach(r=>{const{name:e}=r,t=/^[AEIOU]/u.test(e)?"an":"a";a[e]=(f,c={})=>{if(!ArrayBuffer.isView(f)||N.call(f)!==e)throw i(TypeError,`is not ${t} ${e} object`,c);if(!c.allowShared&&g(f.buffer))throw i(TypeError,"is a view on a SharedArrayBuffer, which is not allowed",c);if(m(f.buffer))throw i(TypeError,"is a view on a detached ArrayBuffer",c);return f}}),a.ArrayBufferView=(r,e={})=>{if(!ArrayBuffer.isView(r))throw i(TypeError,"is not a view on an ArrayBuffer or SharedArrayBuffer",e);if(!e.allowShared&&g(r.buffer))throw i(TypeError,"is a view on a SharedArrayBuffer, which is not allowed",e);if(m(r.buffer))throw i(TypeError,"is a view on a detached ArrayBuffer",e);return r},a.BufferSource=(r,e={})=>{if(ArrayBuffer.isView(r)){if(!e.allowShared&&g(r.buffer))throw i(TypeError,"is a view on a SharedArrayBuffer, which is not allowed",e);if(m(r.buffer))throw i(TypeError,"is a view on a detached ArrayBuffer",e);return r}if(!e.allowShared&&!A(r))throw i(TypeError,"is not an ArrayBuffer or a view on one",e);if(e.allowShared&&!g(r)&&!A(r))throw i(TypeError,"is not an ArrayBuffer, SharedArrayBuffer, or a view on one",e);if(m(r))throw i(TypeError,"is a detached ArrayBuffer",e);return r},a.DOMTimeStamp=a["unsigned long long"]})(P);const k={class:"container-xxl position-relative bg-white d-flex p-0"},v={class:"container-fluid"},V={class:"row h-100 align-items-center justify-content-center",style:{"min-height":"100vh"}},U={class:"col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4"},x={class:"bg-light rounded p-4 p-sm-5 my-4 mx-3"},L=["onSubmit"],$=I('<div class="d-flex align-items-center justify-content-between mb-3"><a href="index.html" class=""><h3 class="text-primary"><i class="fa fa-hashtag me-2"></i>B\xE9ninEdu </h3></a><h3>Connexion</h3></div><div class="form-floating mb-3"><input name="email" class="form-control" id="floatingMail" placeholder="name@example.com"><label for="floatingMail">E-mail</label></div><div class="form-floating mb-4"><input name="password" type="password" class="form-control" id="floatingPassword" placeholder="Password"><label for="floatingPassword">Mot de passe</label></div><div class="d-flex align-items-center justify-content-between mb-4"><div class="form-check"><input type="checkbox" class="form-check-input" id="exampleCheck1"><label class="form-check-label" for="exampleCheck1">Rester connect\xE9</label></div><a href="">Mot de passe oubli\xE9</a></div><button type="submit" class="btn btn-primary py-3 w-100 mb-4"> S&#39;inscrire </button><p class="text-center mb-0"> J&#39;ai d\xE9ja un compte <a>Connection</a></p>',6),R=[$],J={setup(a){const i=D();async function h(u){console.log(u),await j.post("/api/v1/getauthtoken",{email:u.email,password:u.password}).then(async l=>{l&&(console.log(l),localStorage.setItem("session_token",l.data.token),i.push("/"))}).catch(l=>{console.log("error")})}const B=async function(u){const l=Object.fromEntries(new FormData(u.target));h(l)};return(u,l)=>(M(),C("div",k,[w("div",v,[w("div",V,[w("div",U,[w("div",x,[w("form",{onSubmit:O(B,["prevent"])},R,40,L)])])])])]))}};export{J as default};
