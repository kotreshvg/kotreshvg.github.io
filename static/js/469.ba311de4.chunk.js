(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[469],{8613:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return B}});var a=r(4942),n=r(1413),s=r(9439),o=r(7313),i=r(7224),l=r(1973),d=r.p+"static/media/signup.a310ed147446f40296dd.png",c=r.p+"static/media/Signin.4b725f5d9dc55b2e3cd9.png",u=r(1577);r.p;var m=r(6417),h=r(4319),p=r(1391),f=r(3392),x=r(3262),g=r(4165),w=r(5861),b=r(4873),v=r(5390),y=r(9864),j=r(918).Buffer,N=function(){var e=(0,w.Z)((0,g.Z)().mark((function e(t){var r;return(0,g.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=y.Z.getState().globalState.pubKey){e.next=4;break}return e.next=4,k().then((function(e){r=e.data.publicKey})).catch((function(e){throw Error("unable to get public key")}));case 4:if(!r){e.next=9;break}return console.log(r),e.abrupt("return",(0,v.r0)(r,j.from(JSON.stringify(t))).toString("base64"));case 9:throw Error("no public key available");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=r(804),k=function(){var e=(0,w.Z)((0,g.Z)().mark((function e(){return(0,g.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.C8.get("/pub-key"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=(0,w.Z)((0,g.Z)().mark((function e(t){return(0,g.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.C8.post("/user/create",{data:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=(0,w.Z)((0,g.Z)().mark((function e(t){return(0,g.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.C8.post("/user/login",{data:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=(0,w.Z)((0,g.Z)().mark((function e(t){return(0,g.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.C8.post("/user/request-resetpassword",{username:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=(0,w.Z)((0,g.Z)().mark((function e(t){return(0,g.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.C8.post("/user/verify-pwdreset-token",{username:t.userName,token:t.token}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=(0,w.Z)((0,g.Z)().mark((function e(t){return(0,g.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.C8.post("/user/resetpassword",{data:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=r(6371),D=r(9284),O=r.n(D),I=r(8467),B=(r(918).Buffer,function(e){var t=(0,o.useState)({firstName:"",lastName:"",gender:"Male",DOB:"",email:"",mobile:"",username:"",password:"",confirmPassword:void 0,resetToken:"",resetTokenVerified:void 0,signUpState:void 0,mode:"SignUp",alertMsg:void 0,alertType:void 0,alertDuration:void 0,redirect:void 0,resetModalOpen:!1}),r=(0,s.Z)(t,2),g=r[0],w=r[1],b=(0,f.v9)((function(e){return e.globalState.device})),v=function(e){switch(e.target.name){case"firstName":case"lastName":if(!x.N.characterOnly(e.target.value))return;break;case"mobile":case"resetToken":if(!x.N.numerOnly(e.target.value))return;break;case"username":if(!x.N.checkUserNameFormat(e.target.value))return}w((0,n.Z)((0,n.Z)({},g),{},(0,a.Z)({},e.target.name,e.target.value)))};(0,o.useEffect)((function(){k().then((function(e){y.Z.dispatch((0,P.O9)({pubKey:e.data.publicKey}))})).catch((function(e){}))}),[]);var j=function(){new Promise((function(e,t){var r=localStorage.getItem("userName"),a=localStorage.getItem("refreshToken");"undefined"!=r&&"undefined"!=a?N({type:"refreshtoken",username:r,refreshtoken:a}).then((function(a){T(a).then((function(t){localStorage.setItem("authToken",t.data.accesstoken),localStorage.setItem("refreshToken",t.data.refreshtoken),y.Z.dispatch((0,Z.gT)((0,n.Z)((0,n.Z)({},t.data),{},{username:r}))),e("authenticated")})).catch((function(e){t("cannot authenticate")}))})).catch((function(e){t("cannot authenticate")})):t("required data not available in session storage")})).then((function(e){w((0,n.Z)((0,n.Z)({},g),{},{redirect:"/"}))})).catch((function(e){}))};return(0,m.jsxs)("div",{className:"",children:[(0,m.jsxs)("div",{className:"h-[100vh] w-full bg-gradient-to-br from-[#000000] to-[#0414BD] mobile:h-fit",children:[(0,m.jsx)(i.Z,{}),(0,m.jsx)(h.Z,{}),g.alertMsg&&(0,m.jsx)(p.Z,{text:g.alertMsg,timeOut:g.alertDuration,callBack:function(){w((0,n.Z)((0,n.Z)({},g),{},{alertMsg:void 0,alertType:void 0}))},type:g.alertType}),g.redirect&&(0,m.jsx)(I.Fg,{to:g.redirect,replace:!1}),(0,m.jsxs)("div",{style:{width:"SignUp"==g.mode||"mobile"==b?"80vw":"60vw"},className:"h-[75vh] w-[80vw] flex mx-auto my-6 bg-[#ffffff1f] mobile:bg-transparent rounded-xl  shadow-md shadow-[#0414BD mobile:flex-col mobile:h-fit",children:[(0,m.jsx)("div",{className:"min-w-fit mr-4 mobile:m-0 mobile:h-[20vh] mobile:overflow-hidden",children:(0,m.jsx)("img",{src:"SignUp"==g.mode?d:c,alt:"signup image",className:"h-[100%] rounded-tl-xl mobile:rounded-t-xl rounded-bl-xl mobile:rounded-b-none mobile:w-full mobile:h-max"})}),(0,m.jsxs)("div",{style:{display:"SignUp"==g.mode?"":"none"},className:"w-[100%] h-[80%] grid grid-cols-2 grid-rows-6 gap-4 mr-4 mobile:grid-cols-1 mobile:gap-0",children:[(0,m.jsxs)("h2",{className:"text-3xl text-white mobile:hidden",children:["Register ",(0,m.jsx)("span",{className:"text-xs",children:"* is mandatory field"})]}),(0,m.jsxs)("p",{className:"text-white text-xs",children:["Have account ? Go to",(0,m.jsx)("button",{onClick:function(){w((0,n.Z)((0,n.Z)({},g),{},{mode:"SignIn"})),j()},className:"text-white mx-2 w-1/4 py-2 rounded-md  bg-gradient-to-r from-[#23a50a] to-[#060c6b]",children:"Sign In"})]}),(0,m.jsxs)("div",{className:" col-start-1",children:[(0,m.jsx)("p",{className:"text-white text-xs mt-2",children:"First Name*"}),(0,m.jsx)("input",{onChange:v,name:"firstName",value:g.firstName,className:"border border-Primary rounded-md p-1 text-sm shadow-md w-full focus:outline-none",type:"text",maxLength:20,placeholder:"vivek"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"text-white text-xs mt-2",children:"Last Name*"}),(0,m.jsx)("input",{onChange:v,name:"lastName",value:g.lastName,className:"border border-Primary rounded-md p-1 text-sm shadow-md w-full focus:outline-none",type:"text",maxLength:20,placeholder:"chowdary"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"text-white text-xs mt-2",children:"Gender*"}),(0,m.jsxs)("select",{onChange:v,name:"gender",value:g.gender,className:"border border-Primary rounded-md p-1 text-sm shadow-md w-full focus:outline-none",children:[(0,m.jsx)("option",{value:"Male",children:"Male"}),(0,m.jsx)("option",{value:"Female",children:"Female"}),(0,m.jsx)("option",{value:"Other",children:"Other"})]})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"text-white text-xs mt-2",children:"DOB*"}),(0,m.jsx)("input",{onChange:v,name:"DOB",value:g.DOB,className:"border border-Primary rounded-md p-1 text-sm shadow-md w-full focus:outline-none",type:"date"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"text-white text-xs mt-2",children:"Email*"}),(0,m.jsx)("input",{onChange:v,name:"email",value:g.email,className:"border border-Primary rounded-md p-1 text-sm shadow-md w-full focus:outline-none",type:"email",maxLength:30,placeholder:"vivek@email.com"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"text-white text-xs mt-2",children:"mobile*"}),(0,m.jsx)("input",{onChange:v,name:"mobile",value:g.mobile,className:"border border-Primary rounded-md p-1 text-sm shadow-md w-full focus:outline-none",type:"tel",maxLength:10})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"text-white text-xs mt-2",children:"User Name*"}),(0,m.jsx)("input",{onChange:v,name:"username",value:g.username,className:"border border-Primary rounded-md p-1 text-sm shadow-md w-full focus:outline-none",type:"text",maxLength:20,placeholder:"vivek_chowdary"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"text-white text-xs mt-2",children:"Password*"}),(0,m.jsx)("input",{onChange:v,name:"password",value:g.password,className:"border border-Primary rounded-md p-1 text-sm shadow-md w-full focus:outline-none",type:"password",maxLength:20,placeholder:"min 8 max 20 characters"})]}),(0,m.jsx)("div",{className:"col-start-2 mobile:col-start-1 row-start-7 mobile:row-start-auto mobile:mt-2 w-full",children:(0,m.jsx)("button",{onClick:function(){!function(){w((0,n.Z)((0,n.Z)({},g),{},{signUpState:"initiated"}));var e=g.firstName,t=g.lastName,r=g.email,a=g.mobile,s=g.username,o=g.password,i=g.DOB,l=g.gender;"SignUp"===g.mode&&e.length&&t.length&&x.N.emailFormat(r)&&10===a.length&&s.length?N({firstname:e,lastname:t,gender:l,email:r,dob:i,mobile:a,username:s,password:o}).then((function(e){S(e).then((function(e){w((0,n.Z)((0,n.Z)({},g),{},{alertMsg:e.data.reason,alertType:e.data.status?"success":"error",alertDuration:5e3,signUpState:void 0}))})).catch((function(e){e.data=e.response.data,w((0,n.Z)((0,n.Z)({},g),{},{alertMsg:e.data.reason,alertType:e.data.status?"success":"error",alertDuration:5e3,signUpState:void 0}))}))})):w((0,n.Z)((0,n.Z)({},g),{},{alertMsg:"All fields are mandatory, please fill and verify all fields",alertType:"warning",alertDuration:5e3,signUpState:void 0}))}()},className:"bg-gradient-to-r from-[#000000] to-[#0414BD] w-full rounded-md p-2 h-full text-white font-extrabold animate-bounce mobile:animate-none hover:animate-none",children:void 0==g.signUpState?(0,m.jsx)("p",{children:"Sign Up \u290d"}):(0,m.jsx)(u.Z,{size:6,message:"Wait a moment :)",color:"white"})})})]}),(0,m.jsxs)("div",{style:{display:"SignIn"==g.mode?"":"none"},className:"w-[100%] h-[80%] grid grid-cols-1 grid-rows-6 gap-4 mr-4",children:[(0,m.jsxs)("p",{className:"text-white text-xs",children:["Don't have account ? Go to",(0,m.jsx)("button",{onClick:function(){return w((0,n.Z)((0,n.Z)({},g),{},{mode:"SignUp"}))},className:"text-white mx-2 w-1/4 py-2 rounded-md  bg-gradient-to-r from-[#23a50a] to-[#060c6b]",children:"Sign Up"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"text-white text-xs mt-2",children:"User Name"}),(0,m.jsx)("input",{type:"text",onChange:v,name:"username",value:g.username,placeholder:"gauravSingh",className:"border border-Primary rounded-md p-1 text-sm shadow-md w-full focus:outline-none"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"text-white text-xs mt-2",children:"Password"}),(0,m.jsx)("input",{type:"password",onChange:v,name:"password",value:g.password,placeholder:"********",className:"border border-Primary rounded-md p-1 text-sm shadow-md w-full focus:outline-none"})]}),(0,m.jsx)("div",{className:"row-start-6 mobile:row-start-auto w-full",children:(0,m.jsx)("button",{onClick:function(){!function(){w((0,n.Z)((0,n.Z)({},g),{},{signUpState:"initiated"}));var e=g.username,t=g.password;"SignIn"===g.mode&&e.length&&t.length?N({type:"password",username:e,password:t}).then((function(e){T(e).then((function(e){localStorage.setItem("authToken",e.data.accesstoken),localStorage.setItem("refreshToken",e.data.refreshtoken),localStorage.setItem("userName",g.username),y.Z.dispatch((0,Z.gT)((0,n.Z)((0,n.Z)({},e.data),{},{username:g.username}))),w((0,n.Z)((0,n.Z)({},g),{},{alertMsg:e.data.reason,alertType:e.data.status?"success":"error",alertDuration:5e3,signUpState:void 0,redirect:e.data.status?"/":""}))})).catch((function(e){e.data=e.response.data,w((0,n.Z)((0,n.Z)({},g),{},{alertMsg:e.data.reason,alertType:e.data.status?"success":"error",alertDuration:5e3,signUpState:void 0}))}))})):w((0,n.Z)((0,n.Z)({},g),{},{alertMsg:"All fields are mandatory, please fill and verify all fields",alertType:"warning",alertDuration:5e3,signUpState:void 0}))}()},className:"bg-gradient-to-r from-[#000000] to-[#0414BD] w-full rounded-md p-2 h-full text-white font-extrabold animate-bounce hover:animate-none mobile:animate-none",children:void 0==g.signUpState?(0,m.jsx)("p",{children:"Sign In \u290d"}):(0,m.jsx)(u.Z,{size:6,message:"Wait a moment :)",color:"white"})})}),(0,m.jsxs)("div",{className:"row-start-7 flex justify-between mobile:row-start-auto text-xs text-white underline cursor-pointer w-full",children:[(0,m.jsx)("span",{onClick:function(){g.username&&g.username.length?C(g.username).then((function(e){w((0,n.Z)((0,n.Z)({},g),{},{alertMsg:e.data.reason,alertType:e.data.status?"success":"error",alertDuration:5e3,signUpState:void 0}))})).catch((function(e){e.data=e.response.data,w((0,n.Z)((0,n.Z)({},g),{},{alertMsg:e.data.reason,alertType:e.data.status?"success":"error",alertDuration:5e3,signUpState:void 0}))})):w((0,n.Z)((0,n.Z)({},g),{},{alertMsg:"UserName is required for password reset",alertType:"warning",alertDuration:5e3,signUpState:void 0}))},children:"Reset Password"}),(0,m.jsx)("span",{onClick:function(){w((0,n.Z)((0,n.Z)({},g),{},{resetModalOpen:!0}))},children:"Verify Token"})]})]})]})]}),(0,m.jsxs)(O(),{isOpen:g.resetModalOpen,shouldCloseOnOverlayClick:!0,style:{content:{top:"50%",left:"50%",right:"auto",width:"mobile"==b?"100%":"40%",height:"40%",bottom:"auto",transform:"translate(-50%, -50%)",backgroundColor:"#E6E6F9"},overlay:{backgroundColor:"#3C3838",opacity:.97}},children:[(0,m.jsxs)("header",{className:" flex justify-between bg-Primary-500",children:[(0,m.jsx)("h2",{children:"Verify Reset Token"}),(0,m.jsx)("button",{onClick:function(){w((0,n.Z)((0,n.Z)({},g),{},{resetModalOpen:!1}))},children:(0,m.jsx)("img",{src:l.Z})})]}),!g.resetTokenVerified&&(0,m.jsxs)("div",{className:"h-[70%] w-full flex flex-col items-center justify-center",children:[(0,m.jsx)("p",{style:{color:5==g.resetToken.length?"green":"red"},className:"text-xs",children:5==g.resetToken.length?"click on Verify button":"Enter five digit reset token"}),(0,m.jsx)("input",{onChange:function(e){return v(e)},name:"resetToken",value:g.resetToken,className:"border border-Primary rounded-md p-2 text-center shadow-md w-1/3 h-10 font-bold text-lg focus:outline-none",type:"text",maxLength:5}),!1===g.resetTokenVerified?(0,m.jsx)("p",{className:"text-xs text-red",children:"Cannot Verify reset token, please enter correct number"}):"",(0,m.jsx)("button",{onClick:function(){g.resetToken.length&&x.N.numerOnly(g.resetToken)&&U({userName:g.username,token:g.resetToken}).then((function(e){w((0,n.Z)((0,n.Z)({},g),{},{resetTokenVerified:e.data.status,alertMsg:e.data.reason,alertType:e.data.status?"success":"error",alertDuration:5e3,signUpState:void 0}))})).catch((function(e){e.data=e.response.data,w((0,n.Z)((0,n.Z)({},g),{},{resetTokenVerified:e.data.status,alertMsg:e.data.reason,alertType:e.data.status?"success":"error",alertDuration:5e3,signUpState:void 0}))}))},className:"text-white w-1/4 py-1 mt-8 rounded-md  bg-gradient-to-r from-[#23a50a] to-[#060c6b]",children:"Verify"})]}),g.resetTokenVerified&&(0,m.jsxs)("div",{className:"h-[70%] w-full flex flex-col items-center justify-center",children:[(0,m.jsx)("p",{style:{color:5==g.resetToken.length?"green":"red"},className:"text-xs",children:"Enter New password"}),(0,m.jsx)("input",{onChange:function(e){return v(e)},name:"password",value:g.password,className:"border border-Primary rounded-md p-2 text-center shadow-md w-2/3 h-10 font-bold text-lg focus:outline-none",type:"text"}),g.confirmPassword&&g.confirmPassword!==g.password?(0,m.jsx)("p",{className:"text-xs text-crimson",children:"Password Not Matching"}):"",(0,m.jsx)("input",{onChange:function(e){return v(e)},name:"confirmPassword",value:g.confirmPassword,className:"border border-Primary rounded-md p-2 text-center shadow-md w-2/3 h-10 font-bold text-lg focus:outline-none",type:"text"}),(0,m.jsx)("button",{onClick:function(){var e=g.username,t=g.password,r=g.confirmPassword,a=g.resetTokenVerified,s=g.resetToken;e&&x.N.checkUserNameFormat(e)&&t.length&&t===r&&a&&N({username:e,token:s,password:t}).then((function(e){M(e).then((function(e){w((0,n.Z)((0,n.Z)({},g),{},{resetTokenVerified:void 0,alertMsg:e.data.reason,alertType:e.data.status?"success":"error",alertDuration:5e3,signUpState:void 0,resetModalOpen:!e.data.status}))})).catch((function(e){e.data=e.response.data,w((0,n.Z)((0,n.Z)({},g),{},{alertMsg:e.data.reason,alertType:e.data.status?"success":"error",alertDuration:5e3,signUpState:void 0}))}))}))},className:"text-white w-1/2 py-1 mt-8 rounded-md  bg-gradient-to-r from-[#23a50a] to-[#060c6b]",children:"Reset Password"})]})]})]})})},1577:function(e,t,r){"use strict";r(7313);var a=r(6417);t.Z=function(e){return(0,a.jsxs)("div",{className:"h-full flex \r justify-around items-center",children:[(0,a.jsx)("div",{style:{height:"".concat(e.size?String(parseInt(e.size)/4)+"rem":"1.5rem"),width:"".concat(e.size?String(parseInt(e.size)/4)+"rem":"1.5rem"),borderColor:"".concat(e.color?e.color:"#2B7E38")},className:"border-x-0\r border-t-0 border-b-2 border-green\r duration-500 rounded-full animate-spin"}),e.message&&(0,a.jsx)("p",{className:" text-xs",children:e.message})]})}},950:function(){},6601:function(){},9214:function(){},8623:function(){},7748:function(){},5568:function(){},6619:function(){},7108:function(){},2361:function(){},4616:function(){}}]);