"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[212],{7154:(e,t,a)=>{a.r(t),a.d(t,{default:()=>T});var r=a(9950),n=a(2832),s=a(3300);const o=a.p+"static/media/signup.a310ed147446f40296dd.png",i=a.p+"static/media/Signin.4b725f5d9dc55b2e3cd9.png";var l=a(2351),d=a(1840),c=a(3236),m=a(8341),u=a(1182),p=a(8583),h=a(4127),g=a(3462),f=a(9749),x=a(599),b=a(863),y=a(4806),w=a.n(y),v=a(8429),j=a(2074),N=a(5887),k=a(4414);const T=e=>{const t=(0,v.zy)().state,[a]=(0,j.ok)(),y=a.get("promoter_id"),[T,S]=(0,r.useState)({firstName:"",lastName:"",gender:"Male",DOB:null,email:"",mobile:"",username:"",password:"",confirmPassword:void 0,resetToken:"",resetTokenVerified:void 0,signUpState:void 0,mode:(null===t||void 0===t?void 0:t.mode)||"SignUp",alertMsg:void 0,alertType:void 0,alertDuration:void 0,redirect:void 0,resetModalOpen:!1}),A=(0,m.d4)((e=>e.globalState.device)),C=e=>{switch(e.target.name){case"password":case"confirmPassword":break;case"firstName":case"lastName":if(!u.a.characterOnly(e.target.value))return;break;case"mobile":case"resetToken":if(!u.a.numerOnly(e.target.value))return;break;case"username":if(!u.a.checkUserNameFormat(e.target.value))return}S({...T,[e.target.name]:e.target.value})};(0,r.useEffect)((()=>{(0,h.Rt)({eventType:"PageLoad"}),(0,p.LZ)().then((e=>{f.A.dispatch((0,x.Ak)({pubKey:e.data.publicKey}))})).catch((e=>{}))}),[]);const P=async e=>{let t=(0,g.U$)(48);return h.Xz.post("/user/gauth",{data:{...e,secret:await(0,g.QY)(t)}}).then((e=>{let a=JSON.parse((0,g.rR)(e.data,t));N.Ay.success("Fetched details from Google, fill remaining fields",{duration:5e3}),S((e=>({...e,firstName:a.firstname,lastName:a.lastname,email:a.email})))})).catch((e=>{N.Ay.error("Failed to fetch details",{duration:5e3})}))};return(0,r.useEffect)((()=>{window.google.accounts.id.initialize({client_id:"1006369261107-2qm00p8olfg16dm0ffs9cp23qeg4rrsv.apps.googleusercontent.com",callback:P,context:"signup"}),window.google.accounts.id.renderButton(document.getElementById("Gsignup"),{type:"standard",shape:"circle",click_listener:()=>{}}),window.google.accounts.id.prompt()}),[]),(0,k.jsxs)("div",{className:"",children:[(0,k.jsxs)("div",{className:"h-[100vh] w-full bg-gradient-to-br from-[#000000] to-[#0414BD] mobile:h-fit",children:[(0,k.jsx)(n.A,{}),(0,k.jsx)(d.A,{}),(0,k.jsx)(N.l$,{}),T.alertMsg&&(0,k.jsx)(c.A,{text:T.alertMsg,timeOut:T.alertDuration,callBack:()=>{S({...T,alertMsg:void 0,alertType:void 0})},type:T.alertType}),T.redirect&&(0,k.jsx)(v.C5,{to:T.redirect,replace:!1}),(0,k.jsxs)("div",{style:{width:"SignUp"==T.mode||"mobile"==A?"80vw":"60vw"},className:"h-[75vh] w-[80vw] flex mx-auto my-6 bg-[#ffffff1f] mobile:bg-transparent rounded-xl  shadow-md shadow-[#0414BD mobile:flex-col mobile:h-full",children:[(0,k.jsx)("div",{className:"min-w-fit mr-4 mobile:m-0 mobile:h-[20vh] mobile:overflow-hidden",children:(0,k.jsx)("img",{src:"SignUp"==T.mode?o:i,alt:"signup image",className:"h-[100%] rounded-tl-xl mobile:rounded-t-xl rounded-bl-xl mobile:rounded-b-none mobile:w-full mobile:h-max"})}),(0,k.jsxs)("div",{style:{display:"SignUp"==T.mode?"":"none"},className:"w-[100%] h-[80%] grid grid-cols-2 grid-rows-6 gap-4 mr-4 mobile:grid-cols-1 mobile:gap-0",children:[(0,k.jsxs)("h2",{className:"text-3xl text-white mobile:hidden",children:["Register ",(0,k.jsx)("span",{className:"text-xs",children:"* is mandatory field"})]}),(0,k.jsxs)("p",{className:"text-white text-xs",children:["Have account ? Go to",(0,k.jsx)("button",{onClick:()=>{S({...T,mode:"SignIn"}),(0,p.Tc)().then((e=>{S({...T,redirect:"../".concat(t.redirect)||0})})).catch((e=>{}))},className:"text-white mx-2 w-1/4 py-2 rounded-md  bg-gradient-to-r from-[#23a50a] to-[#060c6b]",children:"Sign In"})]}),(0,k.jsxs)("div",{className:" col-start-1",children:[(0,k.jsx)("p",{className:"text-white text-xs mt-2",children:"First Name*"}),(0,k.jsx)("input",{onChange:C,name:"firstName",value:T.firstName,className:"border border-Primary rounded-md p-1 text-sm shadow-md w-full focus:outline-none",type:"text",maxLength:20,placeholder:"vivek"})]}),(0,k.jsxs)("div",{children:[(0,k.jsx)("p",{className:"text-white text-xs mt-2",children:"Email*"}),(0,k.jsx)("input",{onChange:C,name:"email",value:T.email,className:"border border-Primary rounded-md p-1 text-sm shadow-md w-full focus:outline-none",type:"email",maxLength:30,placeholder:"vivek@email.com"})]}),(0,k.jsxs)("div",{children:[(0,k.jsx)("p",{className:"text-white text-xs mt-2",children:"mobile*"}),(0,k.jsx)("input",{onChange:C,name:"mobile",value:T.mobile,className:"border border-Primary rounded-md p-1 text-sm shadow-md w-full focus:outline-none",type:"tel",maxLength:10})]}),(0,k.jsxs)("div",{children:[(0,k.jsx)("p",{className:"text-white text-xs mt-2",children:"User Name*"}),(0,k.jsx)("input",{onChange:C,name:"username",value:T.username,className:"border border-Primary rounded-md p-1 text-sm shadow-md w-full focus:outline-none",type:"text",maxLength:20,placeholder:"vivek_chowdary"})]}),(0,k.jsxs)("div",{children:[(0,k.jsx)("p",{className:"text-white text-xs mt-2",children:"Password*"}),(0,k.jsx)("input",{onChange:C,name:"password",value:T.password,className:"border border-Primary rounded-md p-1 text-sm shadow-md w-full focus:outline-none",type:"password",maxLength:20,placeholder:"min 8 max 20 characters"})]}),(0,k.jsx)("div",{className:"row-start-7 flex justify-end",children:(0,k.jsx)("div",{id:"Gsignup"})}),(0,k.jsx)("div",{className:"col-start-2 mobile:col-start-1 row-start-7 mobile:row-start-auto mobile:mt-2 w-full",children:(0,k.jsx)("button",{onClick:()=>{(()=>{S({...T,signUpState:"initiated"});let{firstName:e,lastName:t,email:a,mobile:r,username:n,password:s,DOB:o,gender:i}=T;if("SignUp"===T.mode&&e.length&&10===r.length){(0,h.Rt)({eventType:"buttonclick",triggerelement:T.mode});let l={firstname:e,lastname:t,gender:i,email:a,dob:o,mobile:r,username:n,password:s,promoter_id:y||localStorage.getItem("promoter_id")||null};(0,g.QY)(l).then((e=>{(0,p.kg)(e).then((e=>{S({...T,alertMsg:e.data.reason,alertType:e.data.status?"success":"error",alertDuration:5e3,signUpState:void 0})})).catch((e=>{e.data=e.response.data,S({...T,alertMsg:e.data.message,alertType:e.data.status?"success":"error",alertDuration:5e3,signUpState:void 0})}))}))}else S({...T,alertMsg:"All fields are mandatory, please fill and verify all fields",alertType:"warning",alertDuration:5e3,signUpState:void 0})})()},className:"bg-gradient-to-r from-[#000000] to-[#0414BD] w-full rounded-md p-2 h-full text-white font-extrabold animate-bounce mobile:animate-none hover:animate-none",children:void 0==T.signUpState?(0,k.jsx)("p",{children:"Sign Up \u290d"}):(0,k.jsx)(l.A,{size:6,message:"Wait a moment :)",color:"white"})})})]}),(0,k.jsxs)("div",{style:{display:"SignIn"==T.mode?"":"none"},className:"w-[100%] h-[80%] grid grid-cols-1 grid-rows-6 gap-4 mr-4",children:[(0,k.jsxs)("p",{className:"text-white text-xs",children:["Don't have account ? Go to",(0,k.jsx)("button",{onClick:()=>S({...T,mode:"SignUp"}),className:"text-white mx-2 w-1/4 py-2 rounded-md  bg-gradient-to-r from-[#23a50a] to-[#060c6b]",children:"Sign Up"})]}),(0,k.jsxs)("div",{children:[(0,k.jsx)("p",{className:"text-white text-xs mt-2",children:"User Name"}),(0,k.jsx)("input",{type:"text",onChange:C,name:"username",value:T.username,placeholder:"username or mobile",className:"border border-Primary rounded-md p-1 text-sm shadow-md w-full focus:outline-none"})]}),(0,k.jsxs)("div",{children:[(0,k.jsx)("p",{className:"text-white text-xs mt-2",children:"Password"}),(0,k.jsx)("input",{type:"password",onChange:C,name:"password",value:T.password,placeholder:"********",className:"border border-Primary rounded-md p-1 text-sm shadow-md w-full focus:outline-none"})]}),(0,k.jsx)("div",{className:"row-start-6 mobile:row-start-auto w-full",children:(0,k.jsx)("button",{onClick:()=>{(()=>{S({...T,signUpState:"initiated"});let{username:e,password:a}=T;if("SignIn"===T.mode&&e.length&&a.length){(0,h.Rt)({eventType:"buttonclick",triggerelement:T.mode});let r={type:"password",username:e,password:a};(0,g.QY)(r).then((e=>{(0,p.Lx)(e).then((e=>{localStorage.setItem("authToken",e.data.accesstoken),localStorage.setItem("refreshToken",e.data.refreshtoken),localStorage.setItem("userName",T.username),f.A.dispatch((0,b.mP)({...e.data,username:T.username})),S({...T,alertMsg:e.data.reason,alertType:e.data.status?"success":"error",alertDuration:5e3,signUpState:void 0,redirect:e.data.status?null!==t&&void 0!==t&&t.redirect?"../".concat(t.redirect):"/":""})})).catch((e=>{e.data=e.response.data,S({...T,alertMsg:e.data.reason,alertType:e.data.status?"success":"error",alertDuration:5e3,signUpState:void 0})}))})).catch((e=>{console.log("could not process")}))}else S({...T,alertMsg:"All fields are mandatory, please fill and verify all fields",alertType:"warning",alertDuration:5e3,signUpState:void 0})})()},className:"bg-gradient-to-r from-[#000000] to-[#0414BD] w-full rounded-md p-2 h-full text-white font-extrabold animate-bounce hover:animate-none mobile:animate-none",children:void 0==T.signUpState?(0,k.jsx)("p",{children:"Sign In \u290d"}):(0,k.jsx)(l.A,{size:6,message:"Wait a moment :)",color:"white"})})}),(0,k.jsxs)("div",{className:"row-start-7 flex justify-between mobile:row-start-auto text-xs text-white underline cursor-pointer w-full",children:[(0,k.jsx)("span",{onClick:()=>{T.username&&T.username.length?(0,p.sO)(T.username).then((e=>{S({...T,alertMsg:e.data.reason,alertType:e.data.status?"success":"error",alertDuration:5e3,signUpState:void 0,password:"",confirmPassword:""})})).catch((e=>{e.data=e.response.data,S({...T,alertMsg:e.data.reason,alertType:e.data.status?"success":"error",alertDuration:5e3,signUpState:void 0})})):S({...T,alertMsg:"UserName is required for password reset",alertType:"warning",alertDuration:5e3,signUpState:void 0})},children:"Reset Password"}),(0,k.jsx)("span",{onClick:()=>{S({...T,resetModalOpen:!0})},children:"Verify Token"})]})]})]})]}),(0,k.jsxs)(w(),{isOpen:T.resetModalOpen,shouldCloseOnOverlayClick:!0,style:{content:{top:"50%",left:"50%",right:"auto",width:"mobile"==A?"100%":"40%",height:"40%",bottom:"auto",transform:"translate(-50%, -50%)",backgroundColor:"#E6E6F9"},overlay:{backgroundColor:"#3C3838",opacity:.97}},children:[(0,k.jsxs)("header",{className:" flex justify-between bg-Primary-500",children:[(0,k.jsx)("h2",{children:"Verify Reset Token"}),(0,k.jsx)("button",{onClick:()=>{S({...T,resetModalOpen:!1})},children:(0,k.jsx)("img",{src:s.A})})]}),!T.resetTokenVerified&&(0,k.jsxs)("div",{className:"h-[70%] w-full flex flex-col items-center justify-center",children:[(0,k.jsx)("p",{style:{color:5==T.resetToken.length?"green":"red"},className:"text-xs",children:5==T.resetToken.length?"click on Verify button":"Enter five digit reset token"}),(0,k.jsx)("input",{onChange:e=>C(e),name:"resetToken",value:T.resetToken,className:"border border-Primary rounded-md p-2 text-center shadow-md w-1/3 h-10 font-bold text-lg focus:outline-none",type:"text",maxLength:5}),!1===T.resetTokenVerified?(0,k.jsx)("p",{className:"text-xs text-red",children:"Cannot Verify reset token, please enter correct number"}):"",(0,k.jsx)("button",{onClick:()=>{T.resetToken.length&&u.a.numerOnly(T.resetToken)&&(0,p.Ud)({userName:T.username,token:T.resetToken}).then((e=>{S({...T,resetTokenVerified:e.data.status,alertMsg:e.data.reason,alertType:e.data.status?"success":"error",alertDuration:5e3,signUpState:void 0})})).catch((e=>{e.data=e.response.data,S({...T,resetTokenVerified:e.data.status,alertMsg:e.data.reason,alertType:e.data.status?"success":"error",alertDuration:5e3,signUpState:void 0})}))},className:"text-white w-1/4 py-1 mt-8 rounded-md  bg-gradient-to-r from-[#23a50a] to-[#060c6b]",children:"Verify"})]}),T.resetTokenVerified&&(0,k.jsxs)("div",{className:"h-[70%] w-full flex flex-col items-center justify-center",children:[(0,k.jsx)("p",{style:{color:5==T.resetToken.length?"green":"red"},className:"text-xs",children:"Enter New password"}),(0,k.jsx)("input",{onChange:e=>C(e),name:"password",value:T.password,className:"border border-Primary rounded-md p-2 text-center shadow-md w-2/3 h-10 font-bold text-lg focus:outline-none",type:"text"}),T.confirmPassword&&T.confirmPassword!==T.password?(0,k.jsx)("p",{className:"text-xs text-crimson",children:"Password Not Matching"}):"",(0,k.jsx)("input",{onChange:e=>C(e),name:"confirmPassword",value:T.confirmPassword,className:"border border-Primary rounded-md p-2 text-center shadow-md w-2/3 h-10 font-bold text-lg focus:outline-none",type:"text"}),(0,k.jsx)("button",{onClick:()=>{let{username:e,password:t,confirmPassword:a,resetTokenVerified:r,resetToken:n}=T;if(e&&u.a.checkUserNameFormat(e)&&t.length&&t===a&&r){let a={username:e,token:n,password:t};(0,g.QY)(a).then((e=>{(0,p.h_)(e).then((e=>{S({...T,resetTokenVerified:void 0,alertMsg:e.data.reason,alertType:e.data.status?"success":"error",alertDuration:5e3,signUpState:void 0,resetModalOpen:!e.data.status})})).catch((e=>{e.data=e.response.data,S({...T,alertMsg:e.data.reason,alertType:e.data.status?"success":"error",alertDuration:5e3,signUpState:void 0})}))}))}},className:"text-white w-1/2 py-1 mt-8 rounded-md  bg-gradient-to-r from-[#23a50a] to-[#060c6b]",children:"Reset Password"})]})]})]})}},2351:(e,t,a)=>{a.d(t,{A:()=>n});a(9950);var r=a(4414);const n=function(e){return(0,r.jsxs)("div",{className:"h-full flex \r justify-around items-center",children:[(0,r.jsx)("div",{style:{height:"".concat(e.size?String(parseInt(e.size)/4)+"rem":"1.5rem"),width:"".concat(e.size?String(parseInt(e.size)/4)+"rem":"1.5rem"),borderColor:"".concat(e.color?e.color:"#2B7E38")},className:"border-x-0\r border-t-0 border-b-2 border-green\r duration-500 rounded-full animate-spin"}),e.message&&(0,r.jsx)("p",{className:" text-xs",children:e.message})]})}},7528:(e,t,a)=>{function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}a.d(t,{A:()=>r})},5887:(e,t,a)=>{a.d(t,{l$:()=>ye,Ay:()=>we,oR:()=>$});var r=a(7528),n=a(9950);let s={data:""},o=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||s,i=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,l=/\/\*[^]*?\*\/|  +/g,d=/\n+/g,c=(e,t)=>{let a="",r="",n="";for(let s in e){let o=e[s];"@"==s[0]?"i"==s[1]?a=s+" "+o+";":r+="f"==s[1]?c(o,s):s+"{"+c(o,"k"==s[1]?"":t)+"}":"object"==typeof o?r+=c(o,t?t.replace(/([^,])+/g,(e=>s.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):s):null!=o&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=c.p?c.p(s,o):s+":"+o+";")}return a+(t&&n?t+"{"+n+"}":n)+r},m={},u=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+u(e[a]);return t}return e},p=(e,t,a,r,n)=>{let s=u(e),o=m[s]||(m[s]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(s));if(!m[o]){let t=s!==e?e:(e=>{let t,a,r=[{}];for(;t=i.exec(e.replace(l,""));)t[4]?r.shift():t[3]?(a=t[3].replace(d," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(d," ").trim();return r[0]})(e);m[o]=c(n?{["@keyframes "+o]:t}:t,a?"":"."+o)}let p=a&&m.g?m.g:null;return a&&(m.g=m[o]),((e,t,a,r)=>{r?t.data=t.data.replace(r,e):-1===t.data.indexOf(e)&&(t.data=a?e+t.data:t.data+e)})(m[o],t,r,p),o},h=(e,t,a)=>e.reduce(((e,r,n)=>{let s=t[n];if(s&&s.call){let e=s(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;s=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+r+(null==s?"":s)}),"");function g(e){let t=this||{},a=e.call?e(t.p):e;return p(a.unshift?a.raw?h(a,[].slice.call(arguments,1),t.p):a.reduce(((e,a)=>Object.assign(e,a&&a.call?a(t.p):a)),{}):a,o(t.target),t.g,t.o,t.k)}g.bind({g:1});let f,x,b,y=g.bind({k:1});function w(e,t){let a=this||{};return function(){let r=arguments;function n(s,o){let i=Object.assign({},s),l=i.className||n.className;a.p=Object.assign({theme:x&&x()},i),a.o=/ *go\d+/.test(l),i.className=g.apply(a,r)+(l?" "+l:""),t&&(i.ref=o);let d=e;return e[0]&&(d=i.as||e,delete i.as),b&&d[0]&&b(i),f(d,i)}return t?t(n):n}}var v,j,N,k,T,S,A,C,P,U,E,O,D,M,z,I,L=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,V=(()=>{let e=0;return()=>(++e).toString()})(),_=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),B=new Map,F=e=>{if(B.has(e))return;let t=setTimeout((()=>{B.delete(e),Y({type:4,toastId:e})}),1e3);B.set(e,t)},R=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=B.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:a}=t;return e.toasts.find((e=>e.id===a.id))?R(e,{type:1,toast:a}):R(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?F(r):e.toasts.forEach((e=>{F(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===r||void 0===r?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+n})))}}},H=[],G={toasts:[],pausedAt:void 0},Y=e=>{G=R(G,e),H.forEach((e=>{e(G)}))},q={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Q=e=>(t,a)=>{let r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",a=arguments.length>2?arguments[2]:void 0;return{createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||V()}}(t,e,a);return Y({type:2,toast:r}),r.id},$=(e,t)=>Q("blank")(e,t);$.error=Q("error"),$.success=Q("success"),$.loading=Q("loading"),$.custom=Q("custom"),$.dismiss=e=>{Y({type:3,toastId:e})},$.remove=e=>Y({type:4,toastId:e}),$.promise=(e,t,a)=>{let r=$.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then((e=>($.success(L(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e))).catch((e=>{$.error(L(t.error,e),{id:r,...a,...null==a?void 0:a.error})})),e};var K=(e,t)=>{Y({type:1,toast:{id:e,height:t}})},W=()=>{Y({type:5,time:Date.now()})},Z=e=>{let{toasts:t,pausedAt:a}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,a]=(0,n.useState)(G);(0,n.useEffect)((()=>(H.push(a),()=>{let e=H.indexOf(a);e>-1&&H.splice(e,1)})),[t]);let r=t.toasts.map((t=>{var a,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||q[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}}));return{...t,toasts:r}}(e);(0,n.useEffect)((()=>{if(a)return;let e=Date.now(),r=t.map((t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(a<0))return setTimeout((()=>$.dismiss(t.id)),a);t.visible&&$.dismiss(t.id)}));return()=>{r.forEach((e=>e&&clearTimeout(e)))}}),[t,a]);let r=(0,n.useCallback)((()=>{a&&Y({type:6,time:Date.now()})}),[a]),s=(0,n.useCallback)(((e,a)=>{let{reverseOrder:r=!1,gutter:n=8,defaultPosition:s}=a||{},o=t.filter((t=>(t.position||s)===(e.position||s)&&t.height)),i=o.findIndex((t=>t.id===e.id)),l=o.filter(((e,t)=>t<i&&e.visible)).length;return o.filter((e=>e.visible)).slice(...r?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+n),0)}),[t]);return{toasts:t,handlers:{updateHeight:K,startPause:W,endPause:r,calculateOffset:s}}},J=y(v||(v=(0,r.A)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),X=y(j||(j=(0,r.A)(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),ee=y(N||(N=(0,r.A)(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),te=w("div")(k||(k=(0,r.A)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(e=>e.primary||"#ff4b4b"),J,X,(e=>e.secondary||"#fff"),ee),ae=y(T||(T=(0,r.A)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),re=w("div")(S||(S=(0,r.A)(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(e=>e.secondary||"#e0e0e0"),(e=>e.primary||"#616161"),ae),ne=y(A||(A=(0,r.A)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),se=y(C||(C=(0,r.A)(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),oe=w("div")(P||(P=(0,r.A)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(e=>e.primary||"#61d345"),ne,se,(e=>e.secondary||"#fff")),ie=w("div")(U||(U=(0,r.A)(["\n  position: absolute;\n"]))),le=w("div")(E||(E=(0,r.A)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),de=y(O||(O=(0,r.A)(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),ce=w("div")(D||(D=(0,r.A)(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),de),me=e=>{let{toast:t}=e,{icon:a,type:r,iconTheme:s}=t;return void 0!==a?"string"==typeof a?n.createElement(ce,null,a):a:"blank"===r?null:n.createElement(le,null,n.createElement(re,{...s}),"loading"!==r&&n.createElement(ie,null,"error"===r?n.createElement(te,{...s}):n.createElement(oe,{...s})))},ue=e=>"\n0% {transform: translate3d(0,".concat(-200*e,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n"),pe=e=>"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*e,"%,-1px) scale(.6); opacity:0;}\n"),he=w("div")(M||(M=(0,r.A)(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),ge=w("div")(z||(z=(0,r.A)(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),fe=n.memo((e=>{let{toast:t,position:a,style:r,children:s}=e,o=t.height?((e,t)=>{let a=e.includes("top")?1:-1,[r,n]=_()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ue(a),pe(a)];return{animation:t?"".concat(y(r)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(y(n)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}})(t.position||a||"top-center",t.visible):{opacity:0},i=n.createElement(me,{toast:t}),l=n.createElement(ge,{...t.ariaProps},L(t.message,t));return n.createElement(he,{className:t.className,style:{...o,...r,...t.style}},"function"==typeof s?s({icon:i,message:l}):n.createElement(n.Fragment,null,i,l))}));!function(e,t,a,r){c.p=t,f=e,x=a,b=r}(n.createElement);var xe=e=>{let{id:t,className:a,style:r,onHeightUpdate:s,children:o}=e,i=n.useCallback((e=>{if(e){let a=()=>{let a=e.getBoundingClientRect().height;s(t,a)};a(),new MutationObserver(a).observe(e,{subtree:!0,childList:!0,characterData:!0})}}),[t,s]);return n.createElement("div",{ref:i,className:a,style:r},o)},be=g(I||(I=(0,r.A)(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),ye=e=>{let{reverseOrder:t,position:a="top-center",toastOptions:r,gutter:s,children:o,containerStyle:i,containerClassName:l}=e,{toasts:d,handlers:c}=Z(r);return n.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map((e=>{let r=e.position||a,i=((e,t)=>{let a=e.includes("top"),r=a?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:_()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(t*(a?1:-1),"px)"),...r,...n}})(r,c.calculateOffset(e,{reverseOrder:t,gutter:s,defaultPosition:a}));return n.createElement(xe,{id:e.id,key:e.id,onHeightUpdate:c.updateHeight,className:e.visible?be:"",style:i},"custom"===e.type?L(e.message,e):o?o(e):n.createElement(fe,{toast:e,position:r}))})))},we=$}}]);