"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[437],{9437:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var s=n(9950),a=n(5887),i=n(2832),o=n(3999),r=n(8429),l=n(8583),c=n(7227),d=n(9749),u=n(4414);const m=e=>{const[t,n]=(0,s.useState)([]),[m,h]=(0,s.useState)(!0),p=(0,r.Zp)();return(0,s.useEffect)((()=>{(0,l.dJ)({access_token:d.A.getState().authentication.authToken||localStorage.getItem("authToken")}).then((e=>{console.log(e),n(e.data.result.bookings)})).catch((e=>{401===e.response.status&&p("/auth",{state:{redirect:window.location.pathname,mode:"SignIn"}}),console.log(e)}))}),[]),(0,u.jsxs)("div",{className:"w-full h-[100vh]",children:[(0,u.jsx)(a.l$,{}),(0,u.jsx)(i.A,{}),(0,u.jsxs)("div",{className:"w-full h-full px-1 relative overflow-scroll",children:[(0,u.jsxs)("div",{className:"flex bg-[#1E90FF] sticky top-0 my-2 text-white font-Nunito rounded-md cursor-pointer border shadow-UI border-stone-200",children:[(0,u.jsx)("p",{onClick:e=>h(!0),style:m?{backgroundColor:"white",color:"black"}:{},className:"w-full text-center text-xs py-2",children:"Upcoming Booking"}),(0,u.jsx)("p",{onClick:e=>h(!1),style:m?{}:{backgroundColor:"white",color:"black"},className:"w-full text-center text-xs py-2",children:"Previous Booking"})]}),m&&t.filter((e=>new Date(e.end_datetime)>Date.now())).map((e=>(0,u.jsxs)("div",{className:"w-full rounded-lg h-44 bg-[#007210] text-white font-Nunito px-2 mb-2",children:[(0,u.jsxs)("div",{className:"flex justify-between rounded-t-lg border-b border-white py-1",children:[(0,u.jsx)("p",{children:e.title}),(0,u.jsx)("div",{children:(0,u.jsxs)("p",{children:["Booking ID ",(0,u.jsx)("span",{children:e.booking_id})]})})]}),(0,u.jsxs)("div",{className:"flex items-center py-1 w-full h-[70%]",children:[(0,u.jsxs)("div",{className:"w-3/5 flex flex-col h-full justify-between mr-4",children:[(0,u.jsxs)("div",{className:" w-full flex justify-between",children:[(0,u.jsx)("p",{className:"font-RedHatLight text-[10px]",children:"Departure"}),(0,u.jsx)("p",{className:"font-Nunito text-xs",children:(0,c.r6)(e.start_datetime)})]}),(0,u.jsxs)("div",{className:" w-full flex justify-between",children:[(0,u.jsx)("p",{className:"font-RedHatLight text-[10px]",children:"Return"}),(0,u.jsx)("p",{className:"font-Nunito text-xs",children:(0,c.r6)(e.end_datetime)})]}),(0,u.jsxs)("div",{className:" w-full flex justify-between",children:[(0,u.jsx)("p",{className:"font-RedHatLight text-[10px]",children:"Pickup Location"}),(0,u.jsx)("p",{className:"font-Nunito text-xs",children:e.pickup_location})]}),(0,u.jsxs)("div",{className:" w-full flex justify-between",children:[(0,u.jsx)("p",{className:"font-RedHatLight text-[10px]",children:"Destination"}),(0,u.jsx)("p",{className:"font-Nunito text-xs",children:e.destination})]})]}),(0,u.jsxs)("div",{className:"h-full w-2/5",children:[(0,u.jsxs)("div",{className:"w-full h-1/2 mb-1 flex flex-col justify-between rounded-md p-2 bg-[#F4FBFF] text-black",children:[(0,u.jsxs)("div",{className:"flex w-full justify-start",children:[(0,u.jsx)("p",{className:"text-[10px] w-1/2 font-RedHatLight",children:"Booking Status"}),(0,u.jsx)("p",{className:"text-xs w-1/2",children:e.booking_status})]}),(0,u.jsxs)("div",{className:"flex w-full justify-start",children:[(0,u.jsx)("p",{className:"text-[10px] w-1/2 font-RedHatLight",children:"Slots Booked"}),(0,u.jsx)("p",{className:"text-xs w-1/2",children:e.num_of_slots})]})]}),(0,u.jsxs)("div",{className:"w-full h-1/2 mt-1 flex flex-col justify-between rounded-md p-2 bg-[#F4FBFF] text-black",children:[(0,u.jsxs)("div",{className:"flex w-full justify-start",children:[(0,u.jsx)("p",{className:"text-[10px] w-1/2 font-RedHatLight",children:"Payment Status"}),(0,u.jsx)("p",{className:"text-xs w-1/2",children:e.payment_status})]}),(0,u.jsxs)("div",{className:"flex w-full justify-start",children:[(0,u.jsx)("p",{className:"text-[10px] w-1/2 font-RedHatLight",children:"Total Price"}),(0,u.jsx)("p",{className:"text-xs w-1/2",children:e.total_price})]})]})]})]})]}))),!m&&t.filter((e=>new Date(e.end_datetime)<Date.now())).map((e=>(0,u.jsxs)("div",{className:"w-full rounded-lg h-44 bg-[#333333] text-white font-Nunito px-2 mb-2",children:[(0,u.jsxs)("div",{className:"flex justify-between rounded-t-lg border-b border-white py-1",children:[(0,u.jsx)("p",{children:e.title}),(0,u.jsx)("div",{children:(0,u.jsxs)("p",{children:["Booking ID ",(0,u.jsx)("span",{children:e.booking_id})]})})]}),(0,u.jsxs)("div",{className:"flex items-center py-1 w-full h-[70%]",children:[(0,u.jsxs)("div",{className:"w-3/5 flex flex-col h-full justify-between mr-4",children:[(0,u.jsxs)("div",{className:" w-full flex justify-between",children:[(0,u.jsx)("p",{className:"font-RedHatLight text-[10px]",children:"Departure"}),(0,u.jsx)("p",{className:"font-Nunito text-xs",children:(0,c.r6)(e.start_datetime)})]}),(0,u.jsxs)("div",{className:" w-full flex justify-between",children:[(0,u.jsx)("p",{className:"font-RedHatLight text-[10px]",children:"Return"}),(0,u.jsx)("p",{className:"font-Nunito text-xs",children:(0,c.r6)(e.end_datetime)})]}),(0,u.jsxs)("div",{className:" w-full flex justify-between",children:[(0,u.jsx)("p",{className:"font-RedHatLight text-[10px]",children:"Pickup Location"}),(0,u.jsx)("p",{className:"font-Nunito text-xs",children:e.pickup_location})]}),(0,u.jsxs)("div",{className:" w-full flex justify-between",children:[(0,u.jsx)("p",{className:"font-RedHatLight text-[10px]",children:"Destination"}),(0,u.jsx)("p",{className:"font-Nunito text-xs",children:e.destination})]})]}),(0,u.jsxs)("div",{className:"h-full w-2/5",children:[(0,u.jsxs)("div",{className:"w-full h-1/2 mb-1 flex flex-col justify-between rounded-md p-2 bg-[#F4FBFF] text-black",children:[(0,u.jsxs)("div",{className:"flex w-full justify-start",children:[(0,u.jsx)("p",{className:"text-[10px] w-1/2 font-RedHatLight",children:"Booking Status"}),(0,u.jsx)("p",{className:"text-xs w-1/2",children:e.booking_status})]}),(0,u.jsxs)("div",{className:"flex w-full justify-start",children:[(0,u.jsx)("p",{className:"text-[10px] w-1/2 font-RedHatLight",children:"Slots Booked"}),(0,u.jsx)("p",{className:"text-xs w-1/2",children:e.num_of_slots})]})]}),(0,u.jsxs)("div",{className:"w-full h-1/2 mt-1 flex flex-col justify-between rounded-md p-2 bg-[#F4FBFF] text-black",children:[(0,u.jsxs)("div",{className:"flex w-full justify-start",children:[(0,u.jsx)("p",{className:"text-[10px] w-1/2 font-RedHatLight",children:"Payment Status"}),(0,u.jsx)("p",{className:"text-xs w-1/2",children:e.payment_status})]}),(0,u.jsxs)("div",{className:"flex w-full justify-start",children:[(0,u.jsx)("p",{className:"text-[10px] w-1/2 font-RedHatLight",children:"Total Price"}),(0,u.jsx)("p",{className:"text-xs w-1/2",children:e.total_price})]})]})]})]})]})))]}),(0,u.jsx)(o.A,{})]})}},7227:(e,t,n)=>{n.d(t,{Ax:()=>d,GA:()=>m,MK:()=>r,Zx:()=>c,kb:()=>u,lW:()=>l,r6:()=>o});var s=n(5887),a=n(9950),i=n(4127);n(3325).Buffer;const o=e=>{try{const t=new Date(e),n=t.getDate().toString().padStart(2,"0"),s=(t.getMonth()+1).toString().padStart(2,"0"),a=t.getFullYear();let i=t.getHours();const o=t.getMinutes().toString().padStart(2,"0"),r=t.getSeconds().toString().padStart(2,"0"),l=i>=12?"PM":"AM";i=i%12||12;const c="".concat(n,"-").concat(s,"-").concat(a),d="".concat(i.toString().padStart(2,"0"),":").concat(o,":").concat(r," ").concat(l);return"".concat(c," ").concat(d)}catch(t){return""}};function r(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Obj";const s=new Date(e),a=new Date(t)-s,i=Math.ceil(a/864e5),o=i>0?i-1:0;return"str"===n?i+" Days "+o+" Nights":{days:i,nights:o}}function l(e){navigator.clipboard.writeText(e).then((()=>{console.log("Text copied to clipboard")})).catch((e=>{console.error("Failed to copy text: ",e)}))}const c=e=>{(0,s.Ay)(e,{style:{background:"#02B41F",borderRadius:"5px",fontSize:"14px",padding:"2px",color:"white"},duration:5e3})},d=e=>{(0,s.Ay)(e,{style:{background:"#E90000",borderRadius:"5px",fontSize:"14px",padding:"2px",color:"white"},duration:5e3})},u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};window.fbq?window.fbq("track",e,t):console.warn("Meta Pixel not initialized")},m=()=>{(0,a.useEffect)((()=>{const e=()=>{(window.scrollY+window.innerHeight)/document.body.scrollHeight>=.75&&(window.fbq&&window.fbq("trackCustom","PageScroll",{scrollDepth:"75%",pageURL:window.location.href,user:(0,i.gm)()}),window.removeEventListener("scroll",e))};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[])}},3999:(e,t,n)=>{n.d(t,{A:()=>p});var s=n(9950),a=n(8541),i=n(4806),o=n.n(i),r=n(4127),l=n(1182),c=n(3300),d=n(4414);const u=e=>(0,d.jsxs)(o(),{isOpen:e.isOpen,shouldCloseOnOverlayClick:!0,style:{content:{top:"50%",left:"50%",right:"auto",width:"80%",height:"80%",bottom:"auto",transform:"translate(-50%, -50%)",backgroundColor:"#E6E6F9"},overlay:{backgroundColor:"#3C3838"}},children:[(0,d.jsxs)("header",{className:" flex justify-between bg-Primary-500",children:[(0,d.jsx)("h2",{children:"Community Guidelines"}),(0,d.jsx)("button",{onClick:()=>e.handleClose("community"),children:(0,d.jsx)("img",{src:c.A})})]}),(0,d.jsxs)("body",{className:" mt-2 text-sm",children:[(0,d.jsx)("h4",{children:"We want to ensure a safe and enjoyable experience for all users. To maintain a respectful and fun environment, please follow these community guidelines"}),(0,d.jsx)("h4",{className:" mt-2 font-semibold",children:"Respect Boundaries: "}),(0,d.jsx)("p",{children:"Treat fellow users with respect and courtesy. Avoid any form of harassment, bullying, or offensive language. Remember, everyone is here to connect and have a good time!"}),(0,d.jsx)("h4",{className:" mt-2 font-semibold",children:"Privacy and Confidentiality:"}),(0,d.jsx)("p",{children:"Respect the privacy of others and refrain from sharing personal information without their explicit consent. Safeguard your own personal information as well. Avoid sharing private details such as full names, addresses, phone numbers, or financial information."}),(0,d.jsx)("h4",{className:" mt-2 font-semibold",children:"No Illegal Content:"}),(0,d.jsx)("p",{children:"Do not share or request any illegal content, including but not limited to explicit, abusive, violent, or harmful materials. Penguin Duo strictly prohibits the sharing of adult or explicit content."}),(0,d.jsx)("h4",{className:" mt-2 font-semibold",children:"Reporting Inappropriate Behaviour:"}),(0,d.jsx)("p",{children:"If you encounter any user who violates these guidelines or engages in harmful behaviour, please report them immediately using the provided reporting tools. We take user safety seriously and will take appropriate action."}),(0,d.jsx)("h4",{className:" mt-2 font-semibold",children:"No Spam or Scams:"}),(0,d.jsx)("p",{children:"Do not engage in spamming, phishing, or any form of fraudulent activity. Penguin Duo is a platform for genuine connections, so let's keep it that way. Do not share any links or content that may harm or deceive others."}),(0,d.jsx)("h4",{className:" mt-2 font-semibold",children:"Use Common Sense:"}),(0,d.jsx)("p",{children:"Exercise common sense and be responsible for your actions. Think before you speak or send messages, and be mindful of the potential impact your words may have on others. Let's foster a friendly and positive atmosphere."})]}),(0,d.jsxs)("footer",{className:" mt-2 text-sm",children:["*Failure to comply with these guidelines may result in temporary or permanent suspension of your Penguin Duo account. We reserve the right to enforce these guidelines and take necessary actions to maintain a safe and enjoyable environment for all users.",(0,d.jsx)("br",{}),"Thank you for being part of the Penguin Duo community. Let's connect, chat responsibly, and have a great time together!"]})]}),m=e=>(0,d.jsxs)(o(),{isOpen:e.isOpen,style:{content:{top:"50%",left:"50%",right:"auto",width:"80%",height:"80%",bottom:"auto",transform:"translate(-50%, -50%)",backgroundColor:"#E6E6F9"},overlay:{backgroundColor:"#3C3838"}},children:[(0,d.jsxs)("header",{className:" flex justify-between bg-Primary-500",children:[(0,d.jsx)("h2",{children:"Privacy and Security"}),(0,d.jsx)("button",{onClick:()=>e.handleClose("privacy"),children:(0,d.jsx)("img",{src:c.A})})]}),(0,d.jsxs)("body",{className:"text-sm mt-2",children:[(0,d.jsx)("h4",{children:'Please read these Terms and Conditions ("Terms") carefully before using Penguin Duo ("the App"), a random chat app for adults. These Terms constitute a legal agreement between you ("User") and Penguin Duo ("we," "us," or "our"). By using the App, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please refrain from using the App.'}),(0,d.jsx)("h4",{className:"font-semibold mt-2",children:"User Eligibility:"}),(0,d.jsx)("p",{children:"By using the App, you affirm that you are at least 18 years old and have the legal capacity to enter into these Terms. The App is intended for use by adults only. Any use of the App by individuals under 18 years of age is strictly prohibited."}),(0,d.jsx)("h4",{className:"font-semibold mt-2",children:"User Conduct:"}),(0,d.jsx)("p",{children:"You agree to use the App in a responsible and lawful manner. You shall not engage in any activities that violate applicable laws or infringe upon the rights of others. This includes but is not limited to sharing illegal, explicit, abusive, or harmful content."}),(0,d.jsx)("h4",{className:"font-semibold mt-2",children:"Account Registration:"}),(0,d.jsx)("p",{children:"In order to use certain features of the App, you may be required to create a user account. You agree to provide accurate and complete information during the registration process. You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account."}),(0,d.jsx)("h4",{className:"font-semibold mt-2",children:"Privacy:"}),(0,d.jsx)("p",{children:"We respect your privacy and handle your personal information in accordance with our Privacy Policy. By using the App, you consent to the collection, use, and disclosure of your information as described in the Privacy Policy."}),(0,d.jsx)("h4",{className:"font-semibold mt-2",children:"Intellectual Property:"}),(0,d.jsx)("p",{children:"The App and its content, including but not limited to text, graphics, logos, trademarks, and software, are the property of Penguin Duo or its licensors. You are granted a limited, non-exclusive, non-transferable licence to use the App solely for personal, non-commercial purposes. You shall not copy, modify, distribute, or exploit any part of the App without prior written permission from Penguin Duo."}),(0,d.jsx)("h4",{className:"font-semibold mt-2",children:"Limitation of Liability:"}),(0,d.jsx)("p",{children:'The App is provided on an "as is" basis without warranties of any kind, whether expressed or implied. Penguin Duo shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with the use or inability to use the App.'}),(0,d.jsx)("h4",{className:"font-semibold mt-2",children:"Modification of Terms:"}),(0,d.jsx)("p",{children:"We reserve the right to modify these Terms at any time. Updated Terms will be posted within the App, and it is your responsibility to review them periodically. Your continued use of the App after any modifications constitutes acceptance of the revised Terms."}),(0,d.jsx)("h4",{className:"font-semibold mt-2",children:"Termination:"}),(0,d.jsx)("p",{children:"We reserve the right to suspend or terminate your access to the App at any time, for any reason, without prior notice or liability."}),(0,d.jsx)("h4",{className:"font-semibold mt-2",children:"Entire Agreement:"}),(0,d.jsx)("p",{children:"These Terms constitute the entire agreement between you and Penguin Duo regarding the use of the App, superseding any prior agreements or understandings."})]})]}),h=e=>{const[t,n]=(0,s.useState)({name:"",email:"",type:"Bug",text:""}),a=(e,s)=>{n({...t,[s]:e})};return(0,d.jsxs)(o(),{isOpen:e.isOpen,style:{content:{top:"50%",left:"50%",right:"auto",width:"100%",height:"fit",bottom:"auto",transform:"translate(-50%, -50%)",backgroundColor:"#E6E6F9"},overlay:{backgroundColor:"#3C3838"}},children:[(0,d.jsxs)("header",{className:" flex justify-between bg-Primary-500",children:[(0,d.jsx)("h2",{children:"Feedback"}),(0,d.jsx)("button",{onClick:()=>e.handleClose("feedback"),children:(0,d.jsx)("img",{src:c.A})})]}),(0,d.jsxs)("body",{className:"text-sm",children:[(0,d.jsx)("h4",{className:"mt-4",children:"Name"}),(0,d.jsx)("input",{placeholder:"John Doh",value:t.name,onChange:e=>a(e.target.value,"name"),maxLength:100,className:"outline-none  px-2 h-8 w-48"}),(0,d.jsx)("h4",{className:"mt-4",children:"Feedback Type"}),(0,d.jsxs)("select",{onChange:e=>a(e.target.value,"type"),defaultValue:"Bug",value:t.type,className:"bg-white px-2 h-8 w-48 outline-none",children:[(0,d.jsx)("option",{value:"Bug",children:"Bug"}),(0,d.jsx)("option",{value:"Enhancement",children:"Enhancement"}),(0,d.jsx)("option",{value:"Suggestion",children:"Suggestion"})]}),(0,d.jsx)("h4",{className:"mt-4",children:"Email"}),(0,d.jsx)("input",{placeholder:"Doh@mail.com",value:t.email,onChange:e=>a(e.target.value,"email"),maxLength:100,className:"outline-none px-2 h-8 w-48"}),(0,d.jsx)("h4",{className:"mt-4",children:"Feedback Area"}),(0,d.jsx)("textarea",{value:t.text,onChange:e=>a(e.target.value,"text"),className:"w-[80%] h-[25VH] outline-none"}),(0,d.jsx)("div",{}),(0,d.jsx)("button",{disabled:!t.name.length|!t.email.length|!t.text.length,onClick:()=>{(0,r.Sq)(t).finally((()=>{n({name:"",email:"",type:"",text:""})}))},className:"bg-light_green text-white font-semibold w-40 h-6 float-right mt-2",children:"Submit"}),(0,d.jsxs)("h4",{className:"text-xs",children:["Your feedback is atmost important for the growth of user experience.",(0,d.jsx)("br",{}),(0,d.jsx)("span",{className:"font-Allura text-lg",children:"Thank You !!! "})]})]})]})},p=e=>{const[t,n]=(0,s.useState)({email:void 0,community:{isOpen:!1},privacy:{isOpen:!1},feedback:{isOpen:!1}}),i=e=>{n({...t,[e]:{isOpen:!t[e].isOpen}})};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"mobile:flex-col mobile:h-fit mobile:items-start p-2 h-[30vh] bg-stone-800 flex justify-evenly text-white items-center",children:[(0,d.jsx)("img",{className:"mobile:hidden mobile:m-4 h-[50%] bg-white rounded-md",src:a.A,alt:"logo"}),(0,d.jsxs)("div",{className:"mobile:my-2",children:[(0,d.jsx)("h4",{children:"Connect "}),(0,d.jsxs)("div",{className:"flex cursor-pointer",children:[(0,d.jsx)("img",{src:"https://penguinduo.com/Blog/assets/instagram.svg",alt:"IGlogo"}),(0,d.jsx)("a",{target:"blank",href:"https://www.instagram.com/penguinduoindia/",className:"text-sm p-2",children:"PenguinduoIndia"})]}),(0,d.jsxs)("div",{className:"flex cursor-pointer",children:[(0,d.jsx)("img",{src:"https://penguinduo.com/Blog/assets/linkedin-in.svg",alt:"Linkedinlogo"}),(0,d.jsx)("a",{target:"blank",href:"https://www.linkedin.com/in/penguin-duo-32014128a/",className:"text-sm p-2",children:"PenguinduoIndia"})]}),(0,d.jsxs)("div",{className:"flex cursor-pointer",children:[(0,d.jsx)("img",{src:"https://penguinduo.com/Blog/assets/twitter.svg",className:"w-3",alt:"Xlogo"}),(0,d.jsx)("a",{target:"blank",href:"https://twitter.com/penguinduoindia",className:"text-sm p-2",children:"PenguinduoIndia"})]})]}),(0,d.jsxs)("div",{className:"mobile:my-2",children:[(0,d.jsx)("h4",{children:"Contact"}),(0,d.jsxs)("div",{className:"flex",children:[(0,d.jsx)("img",{src:"https://penguinduo.com/Blog/assets/send.svg",width:"15rem",alt:"send"}),(0,d.jsx)("p",{className:"mx-2",children:"publicrelation@penguinduo.com"}),(0,d.jsx)("img",{className:"cursor-pointer",src:"https://penguinduo.com/Blog/assets/copy.svg",alt:"copy"})]})]}),(0,d.jsxs)("div",{className:"mobile:my-2",children:[(0,d.jsx)("p",{children:"Subscribe"}),(0,d.jsx)("p",{className:"text-xs",children:"Join the Penguins! Subscribe to Our Newsletter for Good Vibes."}),(0,d.jsx)("input",{value:t.email,type:"email",onChange:e=>(e=>{n({...t,email:e.target.value})})(e),placeholder:"you@email.com",className:"p-2 text-black rounded-sm",maxLength:30}),(0,d.jsx)("button",{onClick:()=>{l.a.emailFormat(t.email)&&(0,r.ly)({email:t.email}).then((e=>{document.getElementById("res").innerHTML=e.data.reason})).catch((e=>console.log(e)))},className:"bg-black p-3 rounded-sm mx-2 hover:scale-90",children:"Subscribe"}),(0,d.jsx)("div",{id:"res"})]})]}),(0,d.jsx)("div",{className:"mobile:flex-col mobile:h-[30vh] mobile:items-start p-2 h-[30vh] bg-stone-800 flex justify-evenly text-white items-center",children:(0,d.jsxs)("div",{className:"mobile:flex-col mobile:my-2 flex justify-evenly w-full",children:[(0,d.jsxs)("div",{className:"p-2 cursor-pointer",children:["\u2022 ",(0,d.jsx)("label",{onClick:()=>i("community"),children:"Community Guidelines"})]}),(0,d.jsxs)("div",{className:"p-2 cursor-pointer",children:["\u2022 ",(0,d.jsx)("label",{onClick:()=>i("privacy"),children:"Privacy and Security"})]}),(0,d.jsxs)("div",{className:"p-2 cursor-pointer",children:["\u2022 ",(0,d.jsx)("label",{onClick:()=>i("feedback"),children:"Feedback"})]})]})}),(0,d.jsx)(u,{isOpen:t.community.isOpen,handleClose:i}),(0,d.jsx)(m,{isOpen:t.privacy.isOpen,handleClose:i}),(0,d.jsx)(h,{isOpen:t.feedback.isOpen,handleClose:i})]})}},7528:(e,t,n)=>{function s(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{A:()=>s})},5887:(e,t,n)=>{n.d(t,{l$:()=>be,Ay:()=>je,oR:()=>V});var s=n(7528),a=n(9950);let i={data:""},o=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||i,r=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,l=/\/\*[^]*?\*\/|  +/g,c=/\n+/g,d=(e,t)=>{let n="",s="",a="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?n=i+" "+o+";":s+="f"==i[1]?d(o,i):i+"{"+d(o,"k"==i[1]?"":t)+"}":"object"==typeof o?s+=d(o,t?t.replace(/([^,])+/g,(e=>i.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=d.p?d.p(i,o):i+":"+o+";")}return n+(t&&a?t+"{"+a+"}":a)+s},u={},m=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+m(e[n]);return t}return e},h=(e,t,n,s,a)=>{let i=m(e),o=u[i]||(u[i]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(i));if(!u[o]){let t=i!==e?e:(e=>{let t,n,s=[{}];for(;t=r.exec(e.replace(l,""));)t[4]?s.shift():t[3]?(n=t[3].replace(c," ").trim(),s.unshift(s[0][n]=s[0][n]||{})):s[0][t[1]]=t[2].replace(c," ").trim();return s[0]})(e);u[o]=d(a?{["@keyframes "+o]:t}:t,n?"":"."+o)}let h=n&&u.g?u.g:null;return n&&(u.g=u[o]),((e,t,n,s)=>{s?t.data=t.data.replace(s,e):-1===t.data.indexOf(e)&&(t.data=n?e+t.data:t.data+e)})(u[o],t,s,h),o},p=(e,t,n)=>e.reduce(((e,s,a)=>{let i=t[a];if(i&&i.call){let e=i(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+s+(null==i?"":i)}),"");function f(e){let t=this||{},n=e.call?e(t.p):e;return h(n.unshift?n.raw?p(n,[].slice.call(arguments,1),t.p):n.reduce(((e,n)=>Object.assign(e,n&&n.call?n(t.p):n)),{}):n,o(t.target),t.g,t.o,t.k)}f.bind({g:1});let x,g,y,b=f.bind({k:1});function j(e,t){let n=this||{};return function(){let s=arguments;function a(i,o){let r=Object.assign({},i),l=r.className||a.className;n.p=Object.assign({theme:g&&g()},r),n.o=/ *go\d+/.test(l),r.className=f.apply(n,s)+(l?" "+l:""),t&&(r.ref=o);let c=e;return e[0]&&(c=r.as||e,delete r.as),y&&c[0]&&y(r),x(c,r)}return t?t(a):a}}var w,v,N,k,A,C,P,S,E,D,O,T,F,L,B,R,_=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,H=(()=>{let e=0;return()=>(++e).toString()})(),I=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),z=new Map,M=e=>{if(z.has(e))return;let t=setTimeout((()=>{z.delete(e),W({type:4,toastId:e})}),1e3);z.set(e,t)},Y=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=z.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:n}=t;return e.toasts.find((e=>e.id===n.id))?Y(e,{type:1,toast:n}):Y(e,{type:0,toast:n});case 3:let{toastId:s}=t;return s?M(s):e.toasts.forEach((e=>{M(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===s||void 0===s?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+a})))}}},U=[],q={toasts:[],pausedAt:void 0},W=e=>{q=Y(q,e),U.forEach((e=>{e(q)}))},G={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},J=e=>(t,n)=>{let s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",n=arguments.length>2?arguments[2]:void 0;return{createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||H()}}(t,e,n);return W({type:2,toast:s}),s.id},V=(e,t)=>J("blank")(e,t);V.error=J("error"),V.success=J("success"),V.loading=J("loading"),V.custom=J("custom"),V.dismiss=e=>{W({type:3,toastId:e})},V.remove=e=>W({type:4,toastId:e}),V.promise=(e,t,n)=>{let s=V.loading(t.loading,{...n,...null==n?void 0:n.loading});return e.then((e=>(V.success(_(t.success,e),{id:s,...n,...null==n?void 0:n.success}),e))).catch((e=>{V.error(_(t.error,e),{id:s,...n,...null==n?void 0:n.error})})),e};var Z=(e,t)=>{W({type:1,toast:{id:e,height:t}})},$=()=>{W({type:5,time:Date.now()})},K=e=>{let{toasts:t,pausedAt:n}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,n]=(0,a.useState)(q);(0,a.useEffect)((()=>(U.push(n),()=>{let e=U.indexOf(n);e>-1&&U.splice(e,1)})),[t]);let s=t.toasts.map((t=>{var n,s;return{...e,...e[t.type],...t,duration:t.duration||(null==(n=e[t.type])?void 0:n.duration)||(null==e?void 0:e.duration)||G[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}}));return{...t,toasts:s}}(e);(0,a.useEffect)((()=>{if(n)return;let e=Date.now(),s=t.map((t=>{if(t.duration===1/0)return;let n=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(n<0))return setTimeout((()=>V.dismiss(t.id)),n);t.visible&&V.dismiss(t.id)}));return()=>{s.forEach((e=>e&&clearTimeout(e)))}}),[t,n]);let s=(0,a.useCallback)((()=>{n&&W({type:6,time:Date.now()})}),[n]),i=(0,a.useCallback)(((e,n)=>{let{reverseOrder:s=!1,gutter:a=8,defaultPosition:i}=n||{},o=t.filter((t=>(t.position||i)===(e.position||i)&&t.height)),r=o.findIndex((t=>t.id===e.id)),l=o.filter(((e,t)=>t<r&&e.visible)).length;return o.filter((e=>e.visible)).slice(...s?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+a),0)}),[t]);return{toasts:t,handlers:{updateHeight:Z,startPause:$,endPause:s,calculateOffset:i}}},X=b(w||(w=(0,s.A)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),Q=b(v||(v=(0,s.A)(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),ee=b(N||(N=(0,s.A)(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),te=j("div")(k||(k=(0,s.A)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(e=>e.primary||"#ff4b4b"),X,Q,(e=>e.secondary||"#fff"),ee),ne=b(A||(A=(0,s.A)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),se=j("div")(C||(C=(0,s.A)(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(e=>e.secondary||"#e0e0e0"),(e=>e.primary||"#616161"),ne),ae=b(P||(P=(0,s.A)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),ie=b(S||(S=(0,s.A)(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),oe=j("div")(E||(E=(0,s.A)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(e=>e.primary||"#61d345"),ae,ie,(e=>e.secondary||"#fff")),re=j("div")(D||(D=(0,s.A)(["\n  position: absolute;\n"]))),le=j("div")(O||(O=(0,s.A)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),ce=b(T||(T=(0,s.A)(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),de=j("div")(F||(F=(0,s.A)(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),ce),ue=e=>{let{toast:t}=e,{icon:n,type:s,iconTheme:i}=t;return void 0!==n?"string"==typeof n?a.createElement(de,null,n):n:"blank"===s?null:a.createElement(le,null,a.createElement(se,{...i}),"loading"!==s&&a.createElement(re,null,"error"===s?a.createElement(te,{...i}):a.createElement(oe,{...i})))},me=e=>"\n0% {transform: translate3d(0,".concat(-200*e,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n"),he=e=>"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*e,"%,-1px) scale(.6); opacity:0;}\n"),pe=j("div")(L||(L=(0,s.A)(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),fe=j("div")(B||(B=(0,s.A)(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),xe=a.memo((e=>{let{toast:t,position:n,style:s,children:i}=e,o=t.height?((e,t)=>{let n=e.includes("top")?1:-1,[s,a]=I()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[me(n),he(n)];return{animation:t?"".concat(b(s)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(b(a)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}})(t.position||n||"top-center",t.visible):{opacity:0},r=a.createElement(ue,{toast:t}),l=a.createElement(fe,{...t.ariaProps},_(t.message,t));return a.createElement(pe,{className:t.className,style:{...o,...s,...t.style}},"function"==typeof i?i({icon:r,message:l}):a.createElement(a.Fragment,null,r,l))}));!function(e,t,n,s){d.p=t,x=e,g=n,y=s}(a.createElement);var ge=e=>{let{id:t,className:n,style:s,onHeightUpdate:i,children:o}=e,r=a.useCallback((e=>{if(e){let n=()=>{let n=e.getBoundingClientRect().height;i(t,n)};n(),new MutationObserver(n).observe(e,{subtree:!0,childList:!0,characterData:!0})}}),[t,i]);return a.createElement("div",{ref:r,className:n,style:s},o)},ye=f(R||(R=(0,s.A)(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),be=e=>{let{reverseOrder:t,position:n="top-center",toastOptions:s,gutter:i,children:o,containerStyle:r,containerClassName:l}=e,{toasts:c,handlers:d}=K(s);return a.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...r},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map((e=>{let s=e.position||n,r=((e,t)=>{let n=e.includes("top"),s=n?{top:0}:{bottom:0},a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:I()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(t*(n?1:-1),"px)"),...s,...a}})(s,d.calculateOffset(e,{reverseOrder:t,gutter:i,defaultPosition:n}));return a.createElement(ge,{id:e.id,key:e.id,onHeightUpdate:d.updateHeight,className:e.visible?ye:"",style:r},"custom"===e.type?_(e.message,e):o?o(e):a.createElement(xe,{toast:e,position:s}))})))},je=V}}]);