(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[586],{3300:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});n(9950);const s=n.p+"static/media/cancel.e75b17a9b8b64ba1432f663619f1d27a.svg"},8541:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});n(9950);const s=n.p+"static/media/logo.44d8d75ca49ab4c7b4669fe25e2b0db8.svg"},9881:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});n(9950);const s=n.p+"static/media/user.4ae795ede31c0ca974982e4d25eeb5f8.svg"},4127:(e,t,n)=>{"use strict";n.d(t,{Rt:()=>l,Sq:()=>i,Xz:()=>o,ly:()=>c});var s=n(9246),a=n(3462),r=n(9749);const o=s.A.create({baseURL:window.config.BACKEND_URL}),i=async e=>{o.post("/feedback",{Name:e.name,Type:e.type,Email:e.email,Comments:e.text}).then((e=>0)).catch((e=>{throw new Error}))},c=async e=>o.post("/subscribeemail",{email:e.email}),l=async e=>(e={...{page:window.location.pathname,userIdentifier:r.A.getState().authentication.userName||(localStorage.getItem("penguinuser")||localStorage.setItem("penguinuser",(0,a.U$)(10)),localStorage.getItem("penguinuser")),date:Date.now(),eventType:null,triggerelement:null},...e},o.post("/groupservice/useractivity",{data:e}))},8583:(e,t,n)=>{"use strict";n.d(t,{IX:()=>g,LZ:()=>i,Lx:()=>l,Tc:()=>b,Ud:()=>h,X5:()=>p,h_:()=>u,kg:()=>c,nO:()=>f,ri:()=>d,sO:()=>m});var s=n(4127),a=(n(1182),n(3462)),r=n(9749),o=n(863);const i=async()=>s.Xz.get("/pub-key"),c=async e=>s.Xz.post("/user/create",{data:e}),l=async e=>s.Xz.post("/user/login",{data:e}),d=async()=>{let e={username:r.A.getState().authentication.userName,accesstoken:r.A.getState().authentication.authToken},t=(0,a.U$)(32),n=(0,a.U$)(16),i=(0,a.Hz)(t,n,JSON.stringify(e));return new Promise(((e,c)=>{(0,a.QY)({key:t,iv:n}).then((t=>{e(s.Xz.post("/user/logout",{data:i,enckey:t}).then((e=>{200==e.status&&(window.localStorage.removeItem("authToken"),window.localStorage.removeItem("refreshToken"),r.A.dispatch((0,o.y4)()))})))}))}))},m=async e=>s.Xz.post("/user/request-resetpassword",{username:e}),h=async e=>s.Xz.post("/user/verify-pwdreset-token",{username:e.userName,token:e.token}),u=async e=>s.Xz.post("/user/resetpassword",{data:e}),p=async()=>{let e=(0,a.U$)(32),t=(0,a.U$)(16),n=(0,a.Hz)(e,t,localStorage.getItem("authToken"));return new Promise(((r,o)=>{(0,a.QY)({key:e,iv:t}).then((o=>{r(s.Xz.post("/user/getcuratedusers",{data:{accesstoken:n,key:o}}).then((n=>{var s;if(null!==(s=n.data)&&void 0!==s&&s.status)return JSON.parse((0,a.rR)(n.data.users,"",e,t))})))}))}))},g=async()=>{let e=(0,a.U$)(32),t=(0,a.U$)(16),n=(0,a.Hz)(e,t,JSON.stringify({accesstoken:localStorage.getItem("authToken"),userName:r.A.getState().authentication.userName||""}));return new Promise(((r,o)=>{(0,a.QY)({key:e,iv:t}).then((o=>{r(s.Xz.post("/user/friends",{data:{credentials:n,key:o}}).then((n=>{var s;return null!==(s=n.data)&&void 0!==s&&s.status?JSON.parse((0,a.rR)(n.data.friends,"",e,t)):[]})))}))}))},f=async e=>{let t=(0,a.U$)(32),n=(0,a.U$)(16),o=(0,a.Hz)(t,n,JSON.stringify({accesstoken:localStorage.getItem("authToken"),friendUserName:e,userName:r.A.getState().authentication.userName||""}));return new Promise(((e,r)=>{(0,a.QY)({key:t,iv:n}).then((r=>{e(s.Xz.post("/user/createfriend",{data:{credentials:o,key:r}}).then((e=>{var s;if(null!==(s=e.data)&&void 0!==s&&s.status)return JSON.parse((0,a.rR)(e.data.users,"",t,n))})))}))}))},b=()=>new Promise(((e,t)=>{const n=localStorage.getItem("userName"),s=localStorage.getItem("refreshToken");if("undefined"==n||"undefined"==s)return void t("required data not available in session storage");let i={type:"refreshtoken",username:n,refreshtoken:s};(0,a.QY)(i).then((s=>{l(s).then((t=>{localStorage.setItem("authToken",t.data.accesstoken),localStorage.setItem("refreshToken",t.data.refreshtoken),r.A.dispatch((0,o.mP)({...t.data,username:n})),e("authenticated")})).catch((e=>{t("cannot authenticate")}))})).catch((e=>{t("cannot authenticate")}))}))},1182:e=>{e.exports.a={characterOnly:e=>{let t;return null==(t=/([^a-zA-Z\s]+)/gm.exec(e))},numerOnly:e=>{let t;return null==(t=/([^\d+])/gm.exec(e))},extractAlphaNumeric:e=>{const t=/([a-zA-Z\d\s]+)/gm;let n,s="";for(;null!==(n=t.exec(e));)s+=n[0];return s},extrctNumbers:e=>{const t=/(\d+)/gm;let n,s=[];for(;null!==(n=t.exec(e));)s.push(parseInt(n[0]));return s},emailFormat:e=>{let t;return null!==(t=/([\w]*[-\.]?[\w]+)@([a-z]+).com/gm.exec(e))&&t[0]},extractUserName:e=>{let t;return null!==(t=/([\w]+_?[\w]+)/gm.exec(e))&&t[0]},checkUserNameFormat:e=>{let t;return null==(t=/([^\w+])/gm.exec(e))}}},3462:(e,t,n)=>{"use strict";n.d(t,{Hz:()=>d,QY:()=>i,U$:()=>c,rR:()=>l});var s=n(2295),a=n(9749),r=n(8583),o=n(3325).Buffer;const i=async e=>{let t=a.A.getState().globalState.pubKey;if(t||await(0,r.LZ)().then((e=>{t=e.data.publicKey})).catch((e=>{throw Error("unable to get public key")})),t)return(0,s.TD)(t,o.from(JSON.stringify(e))).toString("base64");throw Error("no public key available")},c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"hex";return(0,s.po)(64).toString(t).substring(0,e)},l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,r=n||String(t).substring(0,32),i=a||String(t).substring(32),c=(0,s._7)("aes256",o.from(r),o.from(i));return c.update(e,"base64","utf-8")+c.final("utf-8")};function d(e,t,n){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"utf-8",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"base64",i=(0,s.Tt)("aes256",o.from(e),o.from(t));return i.update(n,a,r)+i.final(r)}},3236:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var s=n(9950),a=n(4414);const r=e=>{setTimeout(e.callBack,e.timeOut||2e3);const[t,n]=(0,s.useState)(!0);return(0,a.jsx)("div",{onClick:()=>n(!1),className:"".concat({primary:"bg-Primary",secondary:"bg-[#DBDCDD]",danger:"bg-[#f38463]",error:"bg-light_crimson",success:"bg-light_green",info:"bg-light_blue",warning:"bg-light_amber"}[e.type]," ").concat(e.className," ").concat(t?"visible":"hidden"," mobile:top-8 mobile:p-2\n            mobile:w-fit mobile:text-xs mobile:left-1 right-0 top-16 px-2 py-4 text-sm z-10\n            rounded-md absolute w-1/3 h-fit"),children:(0,a.jsx)("p",{children:e.text})})}},1840:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var s=n(9950),a=n(599),r=n(9749),o=n(4414);const i=function(){let{query:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const t={mobile:"(min-width: 300px) and (max-width: 640px)",desktop:"(min-width: '640px')"},n=()=>{Object.entries(t).some((e=>!!window.matchMedia(e[1]).matches&&(r.A.dispatch((0,a.c8)({device:e[0]})),!0)))};return s.useEffect((()=>{const t=window.matchMedia(e);return n(),t.addEventListener("change",n),()=>{t.removeEventListener("change",n)}}),[e]),(0,o.jsx)(o.Fragment,{})}},4903:(e,t,n)=>{"use strict";n.d(t,{A:()=>F});var s=n(4806),a=n.n(s),r=n(9950),o=n(3300),i=n(4127),c=(n(3236),n(8541));const l=n.p+"static/media/HamburgerIcon.10d0afd4ea4980f81c9217a0376b2245.svg";var d=n(9881);const m=n.p+"static/media/UserIcon.1dabeba213d893dac960461d84205b60.svg";const h=n.p+"static/media/HomeIcon.fd089f8596216a9eb5f4242612dac824.svg";const u=n.p+"static/media/GroupIcon.b17a294ae0bc093d61ca38bb4e4209cc.svg";const p=n.p+"static/media/SecurityIcon.262389f0a0764afd1c2e3da47ac57ab5.svg";const g=n.p+"static/media/CommunityIcon.98e1ea608ccf88c0ae6647063dc1ace3.svg";const f=n.p+"static/media/FeedbackIcon.dbc1bda3a3ebe9fb4591386a28e18ae1.svg";const b=n.p+"static/media/BlogIcon.e04621741db12992f428c7605ad4db61.svg";const x=n.p+"static/media/authedUser.de1ff283f8ec5dbda3be572798c7f20a.svg";const y=n.p+"static/media/chevronDown.b95d26c2fee860a69a64d150b47e2397.svg";var v=n(7788),w=n(8429),j=n(87),k=(n(1840),n(9749)),N=n(8583),A=n(4414);const C=e=>(0,A.jsxs)(a(),{isOpen:e.isOpen,shouldCloseOnOverlayClick:!0,style:{content:{top:"50%",left:"50%",right:"auto",width:"80%",height:"80%",bottom:"auto",transform:"translate(-50%, -50%)",backgroundColor:"#E6E6F9"},overlay:{backgroundColor:"#3C3838"}},children:[(0,A.jsxs)("header",{className:" flex justify-between bg-Primary-500",children:[(0,A.jsx)("h2",{children:"Community Guidelines"}),(0,A.jsx)("button",{onClick:()=>e.handleClose("community"),children:(0,A.jsx)("img",{src:o.A})})]}),(0,A.jsxs)("body",{className:" mt-2 text-sm",children:[(0,A.jsx)("h4",{children:"We want to ensure a safe and enjoyable experience for all users. To maintain a respectful and fun environment, please follow these community guidelines"}),(0,A.jsx)("h4",{className:" mt-2 font-semibold",children:"Respect Boundaries: "}),(0,A.jsx)("p",{children:"Treat fellow users with respect and courtesy. Avoid any form of harassment, bullying, or offensive language. Remember, everyone is here to connect and have a good time!"}),(0,A.jsx)("h4",{className:" mt-2 font-semibold",children:"Privacy and Confidentiality:"}),(0,A.jsx)("p",{children:"Respect the privacy of others and refrain from sharing personal information without their explicit consent. Safeguard your own personal information as well. Avoid sharing private details such as full names, addresses, phone numbers, or financial information."}),(0,A.jsx)("h4",{className:" mt-2 font-semibold",children:"No Illegal Content:"}),(0,A.jsx)("p",{children:"Do not share or request any illegal content, including but not limited to explicit, abusive, violent, or harmful materials. Penguin Duo strictly prohibits the sharing of adult or explicit content."}),(0,A.jsx)("h4",{className:" mt-2 font-semibold",children:"Reporting Inappropriate Behaviour:"}),(0,A.jsx)("p",{children:"If you encounter any user who violates these guidelines or engages in harmful behaviour, please report them immediately using the provided reporting tools. We take user safety seriously and will take appropriate action."}),(0,A.jsx)("h4",{className:" mt-2 font-semibold",children:"No Spam or Scams:"}),(0,A.jsx)("p",{children:"Do not engage in spamming, phishing, or any form of fraudulent activity. Penguin Duo is a platform for genuine connections, so let's keep it that way. Do not share any links or content that may harm or deceive others."}),(0,A.jsx)("h4",{className:" mt-2 font-semibold",children:"Use Common Sense:"}),(0,A.jsx)("p",{children:"Exercise common sense and be responsible for your actions. Think before you speak or send messages, and be mindful of the potential impact your words may have on others. Let's foster a friendly and positive atmosphere."})]}),(0,A.jsxs)("footer",{className:" mt-2 text-sm",children:["*Failure to comply with these guidelines may result in temporary or permanent suspension of your Penguin Duo account. We reserve the right to enforce these guidelines and take necessary actions to maintain a safe and enjoyable environment for all users.",(0,A.jsx)("br",{}),"Thank you for being part of the Penguin Duo community. Let's connect, chat responsibly, and have a great time together!"]})]}),S=e=>(0,A.jsxs)(a(),{isOpen:e.isOpen,style:{content:{top:"50%",left:"50%",right:"auto",width:"80%",height:"80%",bottom:"auto",transform:"translate(-50%, -50%)",backgroundColor:"#E6E6F9"},overlay:{backgroundColor:"#3C3838"}},children:[(0,A.jsxs)("header",{className:" flex justify-between bg-Primary-500",children:[(0,A.jsx)("h2",{children:"Privacy and Security"}),(0,A.jsx)("button",{onClick:()=>e.handleClose("privacy"),children:(0,A.jsx)("img",{src:o.A})})]}),(0,A.jsxs)("body",{className:"text-sm mt-2",children:[(0,A.jsx)("h4",{children:'Please read these Terms and Conditions ("Terms") carefully before using Penguin Duo ("the App"), a random chat app for adults. These Terms constitute a legal agreement between you ("User") and Penguin Duo ("we," "us," or "our"). By using the App, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please refrain from using the App.'}),(0,A.jsx)("h4",{className:"font-semibold mt-2",children:"User Eligibility:"}),(0,A.jsx)("p",{children:"By using the App, you affirm that you are at least 18 years old and have the legal capacity to enter into these Terms. The App is intended for use by adults only. Any use of the App by individuals under 18 years of age is strictly prohibited."}),(0,A.jsx)("h4",{className:"font-semibold mt-2",children:"User Conduct:"}),(0,A.jsx)("p",{children:"You agree to use the App in a responsible and lawful manner. You shall not engage in any activities that violate applicable laws or infringe upon the rights of others. This includes but is not limited to sharing illegal, explicit, abusive, or harmful content."}),(0,A.jsx)("h4",{className:"font-semibold mt-2",children:"Account Registration:"}),(0,A.jsx)("p",{children:"In order to use certain features of the App, you may be required to create a user account. You agree to provide accurate and complete information during the registration process. You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account."}),(0,A.jsx)("h4",{className:"font-semibold mt-2",children:"Privacy:"}),(0,A.jsx)("p",{children:"We respect your privacy and handle your personal information in accordance with our Privacy Policy. By using the App, you consent to the collection, use, and disclosure of your information as described in the Privacy Policy."}),(0,A.jsx)("h4",{className:"font-semibold mt-2",children:"Intellectual Property:"}),(0,A.jsx)("p",{children:"The App and its content, including but not limited to text, graphics, logos, trademarks, and software, are the property of Penguin Duo or its licensors. You are granted a limited, non-exclusive, non-transferable licence to use the App solely for personal, non-commercial purposes. You shall not copy, modify, distribute, or exploit any part of the App without prior written permission from Penguin Duo."}),(0,A.jsx)("h4",{className:"font-semibold mt-2",children:"Limitation of Liability:"}),(0,A.jsx)("p",{children:'The App is provided on an "as is" basis without warranties of any kind, whether expressed or implied. Penguin Duo shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with the use or inability to use the App.'}),(0,A.jsx)("h4",{className:"font-semibold mt-2",children:"Modification of Terms:"}),(0,A.jsx)("p",{children:"We reserve the right to modify these Terms at any time. Updated Terms will be posted within the App, and it is your responsibility to review them periodically. Your continued use of the App after any modifications constitutes acceptance of the revised Terms."}),(0,A.jsx)("h4",{className:"font-semibold mt-2",children:"Termination:"}),(0,A.jsx)("p",{children:"We reserve the right to suspend or terminate your access to the App at any time, for any reason, without prior notice or liability."}),(0,A.jsx)("h4",{className:"font-semibold mt-2",children:"Entire Agreement:"}),(0,A.jsx)("p",{children:"These Terms constitute the entire agreement between you and Penguin Duo regarding the use of the App, superseding any prior agreements or understandings."})]})]}),P=e=>{const[t,n]=(0,r.useState)({name:"",email:"",type:"Bug",text:""}),s=(e,s)=>{n({...t,[s]:e})};return(0,A.jsxs)(a(),{isOpen:e.isOpen,style:{content:{top:"50%",left:"50%",right:"auto",width:"100%",height:"fit",bottom:"auto",transform:"translate(-50%, -50%)",backgroundColor:"#E6E6F9"},overlay:{backgroundColor:"#3C3838"}},children:[(0,A.jsxs)("header",{className:" flex justify-between bg-Primary-500",children:[(0,A.jsx)("h2",{children:"Feedback"}),(0,A.jsx)("button",{onClick:()=>e.handleClose("feedback"),children:(0,A.jsx)("img",{src:o.A})})]}),(0,A.jsxs)("body",{className:"text-sm",children:[(0,A.jsx)("h4",{className:"mt-4",children:"Name"}),(0,A.jsx)("input",{placeholder:"John Doh",value:t.name,onChange:e=>s(e.target.value,"name"),maxLength:100,className:"outline-none  px-2 h-8 w-48"}),(0,A.jsx)("h4",{className:"mt-4",children:"Feedback Type"}),(0,A.jsxs)("select",{onChange:e=>s(e.target.value,"type"),defaultValue:"Bug",value:t.type,className:"bg-white px-2 h-8 w-48 outline-none",children:[(0,A.jsx)("option",{value:"Bug",children:"Bug"}),(0,A.jsx)("option",{value:"Enhancement",children:"Enhancement"}),(0,A.jsx)("option",{value:"Suggestion",children:"Suggestion"})]}),(0,A.jsx)("h4",{className:"mt-4",children:"Email"}),(0,A.jsx)("input",{placeholder:"Doh@mail.com",value:t.email,onChange:e=>s(e.target.value,"email"),maxLength:100,className:"outline-none px-2 h-8 w-48"}),(0,A.jsx)("h4",{className:"mt-4",children:"Feedback Area"}),(0,A.jsx)("textarea",{value:t.text,onChange:e=>s(e.target.value,"text"),className:"w-[80%] h-[25VH] outline-none"}),(0,A.jsx)("div",{}),(0,A.jsx)("button",{disabled:!t.name.length|!t.email.length|!t.text.length,onClick:()=>{(0,i.Sq)(t).finally((()=>{n({name:"",email:"",type:"",text:""})}))},className:"bg-light_green text-white font-semibold w-40 h-6 float-right mt-2",children:"Submit"}),(0,A.jsxs)("h4",{className:"text-xs",children:["Your feedback is atmost important for the growth of user experience.",(0,A.jsx)("br",{}),(0,A.jsx)("span",{className:"font-Allura text-lg",children:"Thank You !!! "})]})]})]})},F=e=>{const[t,n]=(0,r.useState)(!1),[s,a]=(0,r.useState)({community:{isOpen:!1},privacy:{isOpen:!1},feedback:{isOpen:!1},mobileMenuOpen:!1,redirect:void 0}),[i,F]=(0,r.useState)({show:!1,hover:!1}),O=(0,v.d4)((e=>e.authentication.userName)),T=" rounded-full font-roboto\n    text-xs text-white font-medium p-6 py-2 cursor-pointer border border-white hover:text-[#3E3D9C] btnBluePurple",D=e=>{a({...s,[e]:{isOpen:!s[e].isOpen},mobileMenuOpen:!1})};return(0,A.jsxs)("div",{className:"navBg h-12 w-full px-4 py-2 flex items-center justify-between relative mobile:h-fit mobile:z-10 mobile:py-1",style:{borderRadius:"0 0 20px 20px"},children:[s.redirect&&(0,A.jsx)(w.C5,{to:s.redirect,replace:!0}),(0,A.jsx)(j.A,{}),(0,A.jsxs)("div",{className:"flex w-fit",children:[(0,A.jsx)("div",{onClick:()=>a({...s,redirect:"/"}),className:" h-[100%] mobile:h-fit",children:(0,A.jsx)("img",{src:c.A,className:"w-[35px] p-1 mobile:w-[35px] colorInvert"})}),(0,A.jsxs)("div",{onTransitionEnd:e=>{F({...i,show:!0})},onMouseEnter:e=>{F({show:!1,hover:!0})},onMouseLeave:e=>{F({show:!1,hover:!1})},className:"h-min-full mobile:hidden bg-white shadow-white shadow-sm flex items-center justify-evenly mx-2 rounded-full w-10 transition-all ease-linear hover:w-28 duration-500 ",children:[(0,A.jsx)("img",{className:"rounded-full",width:"15px",src:O?x:d.A}),i.show&&i.hover&&(0,A.jsx)("p",{className:"text-xs",children:O||"Hello Stranger"})]})]}),(0,A.jsxs)("div",{className:"flex items-center  justify-end gap-4 w-2/3 mobile:hidden",children:[(0,A.jsxs)("div",{className:"text-[11px] text-white flex items-center cursor-pointer",onClick:()=>n(!t),children:[(0,A.jsx)("span",{children:"More "})," ",(0,A.jsx)("img",{src:y})]}),t&&(0,A.jsxs)("div",{className:"absolute right-[200px] top-[45px] bg-[#f6f6f6] p-1 z-10",children:[(0,A.jsx)("div",{className:"px-3 py-1 cursor-pointer",onClick:()=>D("community"),children:"Community guidelines"}),(0,A.jsx)("hr",{}),(0,A.jsx)("div",{className:"px-3 py-1 cursor-pointer",onClick:()=>D("privacy"),children:"Privacy and security"}),(0,A.jsx)("hr",{}),(0,A.jsx)("div",{className:"px-3 py-1 cursor-pointer",onClick:()=>D("feedback"),children:"Feedback"}),(0,A.jsx)("hr",{}),k.A.getState().authentication.authenticated&&(0,A.jsx)("div",{onClick:()=>(0,N.ri)(),className:"px-3 py-1 cursor-pointer",children:"Logout"})]}),(0,A.jsx)("div",{className:T,children:(0,A.jsx)("a",{href:"./about",children:"About Us"})}),(0,A.jsx)("div",{className:T,children:(0,A.jsx)("a",{href:"https://penguinduo.com/blog",children:"Blog"})}),(0,A.jsx)("button",{onClick:()=>a({...s,redirect:"/auth"}),className:"text-white text-xs px-2 min-w-max py-2 border border-white shadow-md rounded-full bg-gradient-to-r from-[#23a50a] to-[#060c6b]",children:"Sign Up / Sign In"})]}),(0,A.jsx)("div",{onClick:()=>a({...s,mobileMenuOpen:!s.mobileMenuOpen}),className:"hidden mobile:show z-100",children:(0,A.jsx)("img",{src:s.mobileMenuOpen?o.A:l,width:"20px",className:"colorInvert"})}),s.mobileMenuOpen&&(0,A.jsxs)("div",{className:"hidden mobile:show absolute bg-white z-10 shadow-md w-[75%] h-[95vh] top-full right-0 m-0",children:[(0,A.jsxs)("div",{className:"flex items-center gap-3 text-sm p-4 border-b border-b-Primary  m-4 text-white bg-gradient-to-r from-[#043F3F] to-[#0694C6]",children:[(0,A.jsx)("img",{src:m}),O||"Hello Stranger"]}),(0,A.jsxs)("div",{onClick:()=>a({...s,redirect:"/"}),className:"flex items-center gap-3 text-sm p-3 border-b border-b-Primary rounded-md m-4 text-white bg-gradient-to-r from-[#CE4AFD] to-[#10A3FF]",children:[(0,A.jsx)("img",{src:h})," ",(0,A.jsx)("div",{children:"Home"})]}),(0,A.jsxs)("div",{onClick:()=>a({...s,redirect:"/lounge"}),className:"flex items-center gap-3 text-sm p-3 border-b border-b-Primary rounded-md m-4 text-white bg-gradient-to-r from-[#CE4AFD] to-[#10A3FF]",children:[(0,A.jsx)("img",{src:u})," ",(0,A.jsx)("div",{children:"Group chat"})]}),(0,A.jsxs)("div",{onClick:()=>{D("community")},className:"flex items-center gap-3 text-sm p-3 border-b border-b-Primary rounded-md m-4 text-white bg-gradient-to-r from-[#CE4AFD] to-[#10A3FF]",children:[(0,A.jsx)("img",{src:g})," ",(0,A.jsx)("div",{children:"Community guidelines"})]}),(0,A.jsxs)("div",{onClick:()=>{D("privacy")},className:"flex items-center gap-3 text-sm p-3 border-b border-b-Primary rounded-md m-4 text-white bg-gradient-to-r from-[#CE4AFD] to-[#10A3FF]",children:[(0,A.jsx)("img",{src:p})," ",(0,A.jsx)("div",{children:" Privacy and security"})]}),(0,A.jsxs)("div",{onClick:()=>{D("feedback")},className:"flex items-center gap-3 text-sm p-3 border-b border-b-Primary rounded-md m-4 text-white bg-gradient-to-r from-[#CE4AFD] to-[#10A3FF]",children:[(0,A.jsx)("img",{src:f})," ",(0,A.jsx)("div",{children:"Feedback"})," Feedback"]}),(0,A.jsxs)("div",{className:"flex items-center gap-3 text-sm p-3 border-b border-b-Primary rounded-md m-4 text-white bg-gradient-to-r from-[#CE4AFD] to-[#10A3FF]",children:[(0,A.jsx)("img",{src:b})," ",(0,A.jsx)("a",{href:"https://penguinduo.com/blog",children:"Blog"})]}),(0,A.jsxs)("div",{onClick:()=>a({...s,redirect:"/auth"}),className:"flex items-center gap-3 text-sm p-3 border-b border-b-Primary rounded-md m-4 text-white bg-gradient-to-r from-[#CE4AFD] to-[#10A3FF]",children:[(0,A.jsx)("img",{src:u})," ",(0,A.jsx)("div",{children:"Sign In / Sign Up"})]}),k.A.getState().authentication.authenticated&&(0,A.jsx)("div",{onClick:()=>(0,N.ri)(),className:"flex items-center gap-3 text-sm p-3 border-b border-b-Primary rounded-md m-4 text-white bg-gradient-to-r from-[#CE4AFD] to-[#10A3FF]",children:(0,A.jsx)("div",{children:"Logout"})})]}),(0,A.jsx)(C,{isOpen:s.community.isOpen,handleClose:D}),(0,A.jsx)(S,{isOpen:s.privacy.isOpen,handleClose:D}),(0,A.jsx)(P,{isOpen:s.feedback.isOpen,handleClose:D})]})}},87:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});n(9950);var s=n(6455),a=n(4414);const r=e=>(0,a.jsxs)(s.mg,{children:[(0,a.jsx)("title",{children:"PenguinDuo:Chat Online with Best Random Chat Website"}),(0,a.jsx)("meta",{name:"description",content:"Explore PenguinDuo, where fun meets connection! Immerse yourself in the best random chat website for laughter, new friendships, and memorable moments. Join the chatter now!"}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:title",content:"PenguinDuo:Chat Online with Best Random Chat Website"}),(0,a.jsx)("meta",{property:"og:description",content:"Explore PenguinDuo, where fun meets connection! Immerse yourself in the best random chat website for laughter, new friendships, and memorable moments. Join the chatter now!"}),(0,a.jsx)("meta",{property:"keywords",content:"chat with strangers, talk to strangers, random chat, free online chat ,chat rooms, omegle alternative, online chat platform, live chat website, random video chat, meet strangers online"}),(0,a.jsx)("meta",{property:"og:image",itemprop:"image",content:"https://penguinduo.com/Blog/assets/logo.jpg"}),(0,a.jsx)("link",{rel:"canonical",href:"https://penguinduo.com/"}),(0,a.jsx)("meta",{property:"og:url",content:"https://penguinduo.com"}),(0,a.jsx)("meta",{property:"og:image:width",content:"250"}),(0,a.jsx)("meta",{property:"og:image:height",content:"250"}),(0,a.jsx)("meta",{httpEquiv:"Content-Security-Policy",content:"\n                      default-src 'self' https://backend.penguinduo.com http://localhost:2000 ws:;\n                      script-src 'self' https://www.google.com https://www.gstatic.com https://fonts.gstatic.com https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net http://localhost:3030;\n                      img-src 'self' https://blogpost.penguinduo.com https://www.facebook.com data:;\n                      media-src 'self';\n                      connect-src 'self' https://www.facebook.com https://www.google-analytics.com http://localhost:2000 https://backend.penguinduo.com ws:;\n                      style-src 'unsafe-inline';\n                      frame-src https://www.google.com https://accounts.google.com;\n                "})]})},8982:()=>{},7790:()=>{},3776:()=>{},1638:()=>{},2668:()=>{},7965:()=>{},6089:()=>{},9368:()=>{},4688:()=>{},1069:()=>{},2959:()=>{},9838:()=>{}}]);