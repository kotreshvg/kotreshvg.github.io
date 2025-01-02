"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[558],{4926:(e,t,n)=>{n.d(t,{A:()=>s});n(9950);const s=n.p+"static/media/logoWhite.859bf1e925c574a1ff92c667ad8d9201.svg"},5558:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var s=n(9950),i=n(2832),r=n(5887),o=n(3999),a=n(8429),l=n(6435),c=n(4127),d=n(7227),m=n(4926),h=n(8583),u=n(4414);const p=e=>{const t=(0,a.Zp)(),[n,p]=(0,s.useState)({selected_info:"basicinfo",display_redeem_info:!1}),[f,x]=(0,s.useState)({email:"",firstname:"",mobile:"",referrals:"",username:""}),g=e=>{p({...n,selected_info:e})},b=()=>{(0,c.Rt)({eventType:"ButtonClick",triggerelement:"Redeem Button"}),p({...n,display_redeem_info:!0})};(0,s.useEffect)((()=>{(0,h.qk)().then((e=>{x({...e.data.result})})).catch((e=>{if(401==e.response.status)return(0,d.Ax)("SignIn please"),void setTimeout((e=>t("/auth",{state:{redirect:window.location.pathname,mode:"SignIn"}})),2e3);(0,d.Ax)(e.response.data.message)}))}),[]);const y=()=>{(0,c.Rt)({eventType:"ButtonClick",triggerelement:"Ref Share Button"}),(0,h.o4)().then((e=>{let{ref:t}=e.data;navigator.share?navigator.share({title:"Share the Adventure, Earn the Rewards !",text:"Get rewarded for sharing! Send your unique link to friends and earn credits when they book their first trip.",url:window.location.href+t}).then((()=>console.log("Content shared successfully"))).catch((e=>console.error("Error sharing content:",e))):alert("Sharing is not supported on this browser")})).catch((e=>{if(401==e.response.status)return(0,d.Ax)("SignIn to get referral link"),void p((e=>({...e,display_referalinfo_modal:!0})));(0,d.Ax)("Referral not available")}))};return(0,u.jsxs)("div",{className:"w-[100vw] h-[100vh",children:[(0,u.jsx)(i.A,{}),(0,u.jsx)(r.l$,{}),(0,u.jsx)("div",{className:"flex justify-center items-center",children:(0,u.jsx)(l.A,{open:n.display_redeem_info,close:()=>{p({...n,display_redeem_info:!1})},closeOnDocumentClick:!0,children:(0,u.jsxs)("div",{className:"w-[50vw] mobile:w-full",children:[(0,u.jsx)("p",{className:"text-xl font-bold text-gray-800 mb-4",children:"Redeeming Coming Soon!"}),(0,u.jsx)("p",{className:"text-gray-600 mb-4",children:"We're excited to let you redeem your credits soon! Our team is working hard to bring this feature to life."}),(0,u.jsx)("p",{className:"text-gray-600 mb-6",children:"Meanwhile, keep earning rewards by referring friends and booking amazing trips. Stay tuned for updates!"}),(0,u.jsx)("button",{onClick:()=>{p({...n,display_redeem_info:!1})},className:"bg-stone-800 float-right hover:bg-stone-600 text-white px-6 py-2 rounded-lg font-medium",children:"Okay, Got It!"})]})})}),(0,u.jsxs)("div",{className:"hidden mobile:flex mobile:flex-col w-full h-full overflow-scroll px-1",children:[(0,u.jsxs)("div",{className:"h-[25vh] p-4 my-4 rounded-xl shadow-panel w-full bg-gradient-135 from-pink-500 to-pink-400 text-white flex flex-col justify-between",children:[(0,u.jsxs)("div",{children:[(0,u.jsxs)("p",{className:"font-PoppinsMedium",children:["Welcome Back, ",(0,u.jsxs)("span",{className:"text-xl",children:[f.firstname," ! \ud83c\udf89"]})]}),(0,u.jsx)("p",{className:"font-PoppinsMedium text-base my-4",children:"Your Journey Starts Here :)"})]}),(0,u.jsx)("div",{className:"mt-4",children:(0,u.jsxs)("div",{className:"flex justify-start",children:[(0,u.jsx)("p",{onClick:()=>g("basicinfo"),className:"mr-8 cursor-pointer ".concat("basicinfo"==n.selected_info?"text-white border-b-2 border-white":"text-white"),children:"Basic Info"}),(0,u.jsx)("p",{onClick:()=>g("rewards"),className:"mr-8 cursor-pointer ".concat("rewards"==n.selected_info?"text-white border-b-2 border-white":"text-white"),children:"Rewards"})]})})]}),"rewards"==n.selected_info&&(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{class:"flex justify-between p-4 rounded-xl bg-gradient-135 from-[#ffdd00] to-[#ffaa00] text-white",children:[(0,u.jsxs)("div",{class:"stat",children:[(0,u.jsx)("p",{class:"text-center font-PoppinsMedium",children:"\u20b90"}),(0,u.jsx)("p",{class:"font-RedHatMedium text-center",children:"Rewards Earned"})]}),(0,u.jsxs)("div",{class:"stat",children:[(0,u.jsx)("p",{class:"text-center font-PoppinsMedium",children:f.referrals}),(0,u.jsx)("p",{class:"font-RedHatMedium text-center",children:"Friends Referred"})]}),(0,u.jsxs)("div",{class:"stat",children:[(0,u.jsx)("p",{class:"text-center font-PoppinsMedium",children:"0"}),(0,u.jsx)("p",{class:"font-RedHatMedium text-center",children:"Trips Booked"})]})]}),(0,u.jsxs)("div",{class:"bg-gradient-to-r from-BrandColor-700-300 to-BrandColor-900-600 text-white p-6 rounded-lg text-center mb-6",children:[(0,u.jsx)("button",{onClick:y,class:"bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg font-medium mr-4",children:"Refer a Friend"}),(0,u.jsx)("button",{onClick:b,class:"bg-oxford_blue hover:bg-opacity-40 text-white px-6 py-2 rounded-lg font-medium",children:"Redeem Rewards"})]})]}),"basicinfo"==n.selected_info&&(0,u.jsxs)("div",{class:"p-4 rounded-xl mt-4 font-Nunito shadow-md",children:[(0,u.jsx)("h3",{className:"mb-4 font-PoppinsMedium",children:"Profile Details"}),(0,u.jsxs)("div",{class:"flex justify-between border-b border-stone-200 p-2",children:[(0,u.jsx)("p",{children:"Email"}),(0,u.jsx)("p",{children:f.email})]}),(0,u.jsxs)("div",{class:"flex justify-between border-b border-stone-200 p-2",children:[(0,u.jsx)("p",{children:"Phone"}),(0,u.jsxs)("p",{children:["+91 ",f.mobile]})]}),(0,u.jsx)("h3",{className:"mb-4 mt-8 font-PoppinsMedium",children:"Account Info"}),(0,u.jsxs)("div",{class:"flex justify-between border-b border-stone-200 p-2",children:[(0,u.jsx)("p",{children:"Username"}),(0,u.jsx)("p",{children:f.username})]}),(0,u.jsxs)("div",{class:"flex justify-between border-b border-stone-200 p-2",children:[(0,u.jsx)("p",{children:"Joined"}),(0,u.jsx)("p",{children:"Jan 20204"})]})]})]}),(0,u.jsxs)("div",{class:"max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-lg mobile:hidden",children:[(0,u.jsxs)("div",{class:"flex justify-between items-center bg-gradient-to-r from-pink-500 to-pink-400 p-6 rounded-lg text-white mb-6",children:[(0,u.jsxs)("div",{class:"flex items-center",children:[(0,u.jsx)("img",{src:m.A,alt:"Profile Picture",class:"w-24 h-24 rounded-full border-4 p-4 border-white mr-4"}),(0,u.jsxs)("div",{children:[(0,u.jsxs)("h1",{class:"text-3xl font-bold font-PoppinsMedium",children:["Welcome Back, ",(0,u.jsxs)("span",{id:"user-name",children:[f.firstname,"!"]})," \ud83c\udf89"]}),(0,u.jsx)("p",{class:"text-lg mt-2 font-PoppinsMedium",children:"Ready to earn more rewards and explore new adventures?"})]})]}),(0,u.jsxs)("div",{class:"flex gap-6",children:[(0,u.jsxs)("div",{class:"bg-white bg-gradient-135 from-[#ffdd00] to-[#ffaa00] p-4 rounded-lg text-center",children:[(0,u.jsx)("p",{class:"text-2xl font-bold",children:"\u20b9"}),(0,u.jsx)("p",{class:"text-sm",children:"Rewards Earned"})]}),(0,u.jsxs)("div",{class:"bg-white bg-gradient-135 from-[#ffdd00] to-[#ffaa00] p-4 rounded-lg text-center",children:[(0,u.jsx)("p",{class:"text-2xl font-bold",children:f.referrals}),(0,u.jsx)("p",{class:"text-sm",children:"Friends Referred"})]}),(0,u.jsxs)("div",{class:"bg-white bg-gradient-135 from-[#ffdd00] to-[#ffaa00] p-4 rounded-lg text-center",children:[(0,u.jsx)("p",{class:"text-2xl font-bold",children:"0"}),(0,u.jsx)("p",{class:"text-sm",children:"Trips Booked"})]})]})]}),(0,u.jsxs)("div",{class:"bg-gradient-to-r from-BrandColor-700-300 to-BrandColor-900-600 text-white p-6 rounded-lg text-center mb-6",children:[(0,u.jsx)("button",{onClick:y,class:"bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg font-medium mr-4",children:"Refer a Friend"}),(0,u.jsx)("button",{onClick:b,class:"bg-oxford_blue hover:bg-opacity-40 text-white px-6 py-2 rounded-lg font-medium",children:"Redeem Rewards"})]}),(0,u.jsxs)("div",{class:"bg-white rounded-lg shadow-md p-6",children:[(0,u.jsx)("h2",{class:"text-2xl font-bold mb-6",children:"Your Profile"}),(0,u.jsxs)("div",{class:"border-b border-gray-200 pb-4 mb-4",children:[(0,u.jsx)("h3",{class:"text-lg font-semibold mb-2",children:"Contact Info"}),(0,u.jsxs)("p",{class:"text-gray-700",children:["Email: ",f.email," "]}),(0,u.jsxs)("p",{class:"text-gray-700 mt-2",children:["Phone: +91 ",f.mobile," "]})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h3",{class:"text-lg font-semibold mb-2",children:"Account Info"}),(0,u.jsxs)("p",{class:"text-gray-700",children:["Username: ",f.username]}),(0,u.jsx)("p",{class:"text-gray-700 mt-2",children:"Joined: Jan 2023"})]})]})]}),(0,u.jsx)(o.A,{})]})}},7227:(e,t,n)=>{n.d(t,{Ax:()=>l,MK:()=>r,Zx:()=>a,kb:()=>c,lW:()=>o,r6:()=>i});var s=n(5887);n(3325).Buffer;const i=e=>{try{const t=new Date(e),n=t.getDate().toString().padStart(2,"0"),s=(t.getMonth()+1).toString().padStart(2,"0"),i=t.getFullYear();let r=t.getHours();const o=t.getMinutes().toString().padStart(2,"0"),a=t.getSeconds().toString().padStart(2,"0"),l=r>=12?"PM":"AM";r=r%12||12;const c="".concat(n,"-").concat(s,"-").concat(i),d="".concat(r.toString().padStart(2,"0"),":").concat(o,":").concat(a," ").concat(l);return"".concat(c," ").concat(d)}catch(t){return""}};function r(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Obj";const s=new Date(e),i=new Date(t)-s,r=Math.ceil(i/864e5),o=r>0?r-1:0;return"str"===n?r+" Days "+o+" Nights":{days:r,nights:o}}function o(e){navigator.clipboard.writeText(e).then((()=>{console.log("Text copied to clipboard")})).catch((e=>{console.error("Failed to copy text: ",e)}))}const a=e=>{(0,s.Ay)(e,{style:{background:"#02B41F",borderRadius:"5px",fontSize:"14px",padding:"2px",color:"white"},duration:5e3})},l=e=>{(0,s.Ay)(e,{style:{background:"#E90000",borderRadius:"5px",fontSize:"14px",padding:"2px",color:"white"},duration:5e3})},c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};window.fbq?window.fbq("track",e,t):console.warn("Meta Pixel not initialized")}},3999:(e,t,n)=>{n.d(t,{A:()=>p});var s=n(9950),i=n(8541),r=n(4806),o=n.n(r),a=n(4127),l=n(1182),c=n(3300),d=n(4414);const m=e=>(0,d.jsxs)(o(),{isOpen:e.isOpen,shouldCloseOnOverlayClick:!0,style:{content:{top:"50%",left:"50%",right:"auto",width:"80%",height:"80%",bottom:"auto",transform:"translate(-50%, -50%)",backgroundColor:"#E6E6F9"},overlay:{backgroundColor:"#3C3838"}},children:[(0,d.jsxs)("header",{className:" flex justify-between bg-Primary-500",children:[(0,d.jsx)("h2",{children:"Community Guidelines"}),(0,d.jsx)("button",{onClick:()=>e.handleClose("community"),children:(0,d.jsx)("img",{src:c.A})})]}),(0,d.jsxs)("body",{className:" mt-2 text-sm",children:[(0,d.jsx)("h4",{children:"We want to ensure a safe and enjoyable experience for all users. To maintain a respectful and fun environment, please follow these community guidelines"}),(0,d.jsx)("h4",{className:" mt-2 font-semibold",children:"Respect Boundaries: "}),(0,d.jsx)("p",{children:"Treat fellow users with respect and courtesy. Avoid any form of harassment, bullying, or offensive language. Remember, everyone is here to connect and have a good time!"}),(0,d.jsx)("h4",{className:" mt-2 font-semibold",children:"Privacy and Confidentiality:"}),(0,d.jsx)("p",{children:"Respect the privacy of others and refrain from sharing personal information without their explicit consent. Safeguard your own personal information as well. Avoid sharing private details such as full names, addresses, phone numbers, or financial information."}),(0,d.jsx)("h4",{className:" mt-2 font-semibold",children:"No Illegal Content:"}),(0,d.jsx)("p",{children:"Do not share or request any illegal content, including but not limited to explicit, abusive, violent, or harmful materials. Penguin Duo strictly prohibits the sharing of adult or explicit content."}),(0,d.jsx)("h4",{className:" mt-2 font-semibold",children:"Reporting Inappropriate Behaviour:"}),(0,d.jsx)("p",{children:"If you encounter any user who violates these guidelines or engages in harmful behaviour, please report them immediately using the provided reporting tools. We take user safety seriously and will take appropriate action."}),(0,d.jsx)("h4",{className:" mt-2 font-semibold",children:"No Spam or Scams:"}),(0,d.jsx)("p",{children:"Do not engage in spamming, phishing, or any form of fraudulent activity. Penguin Duo is a platform for genuine connections, so let's keep it that way. Do not share any links or content that may harm or deceive others."}),(0,d.jsx)("h4",{className:" mt-2 font-semibold",children:"Use Common Sense:"}),(0,d.jsx)("p",{children:"Exercise common sense and be responsible for your actions. Think before you speak or send messages, and be mindful of the potential impact your words may have on others. Let's foster a friendly and positive atmosphere."})]}),(0,d.jsxs)("footer",{className:" mt-2 text-sm",children:["*Failure to comply with these guidelines may result in temporary or permanent suspension of your Penguin Duo account. We reserve the right to enforce these guidelines and take necessary actions to maintain a safe and enjoyable environment for all users.",(0,d.jsx)("br",{}),"Thank you for being part of the Penguin Duo community. Let's connect, chat responsibly, and have a great time together!"]})]}),h=e=>(0,d.jsxs)(o(),{isOpen:e.isOpen,style:{content:{top:"50%",left:"50%",right:"auto",width:"80%",height:"80%",bottom:"auto",transform:"translate(-50%, -50%)",backgroundColor:"#E6E6F9"},overlay:{backgroundColor:"#3C3838"}},children:[(0,d.jsxs)("header",{className:" flex justify-between bg-Primary-500",children:[(0,d.jsx)("h2",{children:"Privacy and Security"}),(0,d.jsx)("button",{onClick:()=>e.handleClose("privacy"),children:(0,d.jsx)("img",{src:c.A})})]}),(0,d.jsxs)("body",{className:"text-sm mt-2",children:[(0,d.jsx)("h4",{children:'Please read these Terms and Conditions ("Terms") carefully before using Penguin Duo ("the App"), a random chat app for adults. These Terms constitute a legal agreement between you ("User") and Penguin Duo ("we," "us," or "our"). By using the App, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please refrain from using the App.'}),(0,d.jsx)("h4",{className:"font-semibold mt-2",children:"User Eligibility:"}),(0,d.jsx)("p",{children:"By using the App, you affirm that you are at least 18 years old and have the legal capacity to enter into these Terms. The App is intended for use by adults only. Any use of the App by individuals under 18 years of age is strictly prohibited."}),(0,d.jsx)("h4",{className:"font-semibold mt-2",children:"User Conduct:"}),(0,d.jsx)("p",{children:"You agree to use the App in a responsible and lawful manner. You shall not engage in any activities that violate applicable laws or infringe upon the rights of others. This includes but is not limited to sharing illegal, explicit, abusive, or harmful content."}),(0,d.jsx)("h4",{className:"font-semibold mt-2",children:"Account Registration:"}),(0,d.jsx)("p",{children:"In order to use certain features of the App, you may be required to create a user account. You agree to provide accurate and complete information during the registration process. You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account."}),(0,d.jsx)("h4",{className:"font-semibold mt-2",children:"Privacy:"}),(0,d.jsx)("p",{children:"We respect your privacy and handle your personal information in accordance with our Privacy Policy. By using the App, you consent to the collection, use, and disclosure of your information as described in the Privacy Policy."}),(0,d.jsx)("h4",{className:"font-semibold mt-2",children:"Intellectual Property:"}),(0,d.jsx)("p",{children:"The App and its content, including but not limited to text, graphics, logos, trademarks, and software, are the property of Penguin Duo or its licensors. You are granted a limited, non-exclusive, non-transferable licence to use the App solely for personal, non-commercial purposes. You shall not copy, modify, distribute, or exploit any part of the App without prior written permission from Penguin Duo."}),(0,d.jsx)("h4",{className:"font-semibold mt-2",children:"Limitation of Liability:"}),(0,d.jsx)("p",{children:'The App is provided on an "as is" basis without warranties of any kind, whether expressed or implied. Penguin Duo shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with the use or inability to use the App.'}),(0,d.jsx)("h4",{className:"font-semibold mt-2",children:"Modification of Terms:"}),(0,d.jsx)("p",{children:"We reserve the right to modify these Terms at any time. Updated Terms will be posted within the App, and it is your responsibility to review them periodically. Your continued use of the App after any modifications constitutes acceptance of the revised Terms."}),(0,d.jsx)("h4",{className:"font-semibold mt-2",children:"Termination:"}),(0,d.jsx)("p",{children:"We reserve the right to suspend or terminate your access to the App at any time, for any reason, without prior notice or liability."}),(0,d.jsx)("h4",{className:"font-semibold mt-2",children:"Entire Agreement:"}),(0,d.jsx)("p",{children:"These Terms constitute the entire agreement between you and Penguin Duo regarding the use of the App, superseding any prior agreements or understandings."})]})]}),u=e=>{const[t,n]=(0,s.useState)({name:"",email:"",type:"Bug",text:""}),i=(e,s)=>{n({...t,[s]:e})};return(0,d.jsxs)(o(),{isOpen:e.isOpen,style:{content:{top:"50%",left:"50%",right:"auto",width:"100%",height:"fit",bottom:"auto",transform:"translate(-50%, -50%)",backgroundColor:"#E6E6F9"},overlay:{backgroundColor:"#3C3838"}},children:[(0,d.jsxs)("header",{className:" flex justify-between bg-Primary-500",children:[(0,d.jsx)("h2",{children:"Feedback"}),(0,d.jsx)("button",{onClick:()=>e.handleClose("feedback"),children:(0,d.jsx)("img",{src:c.A})})]}),(0,d.jsxs)("body",{className:"text-sm",children:[(0,d.jsx)("h4",{className:"mt-4",children:"Name"}),(0,d.jsx)("input",{placeholder:"John Doh",value:t.name,onChange:e=>i(e.target.value,"name"),maxLength:100,className:"outline-none  px-2 h-8 w-48"}),(0,d.jsx)("h4",{className:"mt-4",children:"Feedback Type"}),(0,d.jsxs)("select",{onChange:e=>i(e.target.value,"type"),defaultValue:"Bug",value:t.type,className:"bg-white px-2 h-8 w-48 outline-none",children:[(0,d.jsx)("option",{value:"Bug",children:"Bug"}),(0,d.jsx)("option",{value:"Enhancement",children:"Enhancement"}),(0,d.jsx)("option",{value:"Suggestion",children:"Suggestion"})]}),(0,d.jsx)("h4",{className:"mt-4",children:"Email"}),(0,d.jsx)("input",{placeholder:"Doh@mail.com",value:t.email,onChange:e=>i(e.target.value,"email"),maxLength:100,className:"outline-none px-2 h-8 w-48"}),(0,d.jsx)("h4",{className:"mt-4",children:"Feedback Area"}),(0,d.jsx)("textarea",{value:t.text,onChange:e=>i(e.target.value,"text"),className:"w-[80%] h-[25VH] outline-none"}),(0,d.jsx)("div",{}),(0,d.jsx)("button",{disabled:!t.name.length|!t.email.length|!t.text.length,onClick:()=>{(0,a.Sq)(t).finally((()=>{n({name:"",email:"",type:"",text:""})}))},className:"bg-light_green text-white font-semibold w-40 h-6 float-right mt-2",children:"Submit"}),(0,d.jsxs)("h4",{className:"text-xs",children:["Your feedback is atmost important for the growth of user experience.",(0,d.jsx)("br",{}),(0,d.jsx)("span",{className:"font-Allura text-lg",children:"Thank You !!! "})]})]})]})},p=e=>{const[t,n]=(0,s.useState)({email:void 0,community:{isOpen:!1},privacy:{isOpen:!1},feedback:{isOpen:!1}}),r=e=>{n({...t,[e]:{isOpen:!t[e].isOpen}})};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"mobile:flex-col mobile:h-fit mobile:items-start p-2 h-[30vh] bg-stone-800 flex justify-evenly text-white items-center",children:[(0,d.jsx)("img",{className:"mobile:hidden mobile:m-4 h-[50%] bg-white rounded-md",src:i.A,alt:"logo"}),(0,d.jsxs)("div",{className:"mobile:my-2",children:[(0,d.jsx)("h4",{children:"Connect "}),(0,d.jsxs)("div",{className:"flex cursor-pointer",children:[(0,d.jsx)("img",{src:"https://penguinduo.com/Blog/assets/instagram.svg",alt:"IGlogo"}),(0,d.jsx)("a",{target:"blank",href:"https://www.instagram.com/penguinduoindia/",className:"text-sm p-2",children:"PenguinduoIndia"})]}),(0,d.jsxs)("div",{className:"flex cursor-pointer",children:[(0,d.jsx)("img",{src:"https://penguinduo.com/Blog/assets/linkedin-in.svg",alt:"Linkedinlogo"}),(0,d.jsx)("a",{target:"blank",href:"https://www.linkedin.com/in/penguin-duo-32014128a/",className:"text-sm p-2",children:"PenguinduoIndia"})]}),(0,d.jsxs)("div",{className:"flex cursor-pointer",children:[(0,d.jsx)("img",{src:"https://penguinduo.com/Blog/assets/twitter.svg",className:"w-3",alt:"Xlogo"}),(0,d.jsx)("a",{target:"blank",href:"https://twitter.com/penguinduoindia",className:"text-sm p-2",children:"PenguinduoIndia"})]})]}),(0,d.jsxs)("div",{className:"mobile:my-2",children:[(0,d.jsx)("h4",{children:"Contact"}),(0,d.jsxs)("div",{className:"flex",children:[(0,d.jsx)("img",{src:"https://penguinduo.com/Blog/assets/send.svg",width:"15rem",alt:"send"}),(0,d.jsx)("p",{className:"mx-2",children:"publicrelation@penguinduo.com"}),(0,d.jsx)("img",{className:"cursor-pointer",src:"https://penguinduo.com/Blog/assets/copy.svg",alt:"copy"})]})]}),(0,d.jsxs)("div",{className:"mobile:my-2",children:[(0,d.jsx)("p",{children:"Subscribe"}),(0,d.jsx)("p",{className:"text-xs",children:"Join the Penguins! Subscribe to Our Newsletter for Good Vibes."}),(0,d.jsx)("input",{value:t.email,type:"email",onChange:e=>(e=>{n({...t,email:e.target.value})})(e),placeholder:"you@email.com",className:"p-2 text-black rounded-sm",maxLength:30}),(0,d.jsx)("button",{onClick:()=>{l.a.emailFormat(t.email)&&(0,a.ly)({email:t.email}).then((e=>{document.getElementById("res").innerHTML=e.data.reason})).catch((e=>console.log(e)))},className:"bg-black p-3 rounded-sm mx-2 hover:scale-90",children:"Subscribe"}),(0,d.jsx)("div",{id:"res"})]})]}),(0,d.jsx)("div",{className:"mobile:flex-col mobile:h-[30vh] mobile:items-start p-2 h-[30vh] bg-stone-800 flex justify-evenly text-white items-center",children:(0,d.jsxs)("div",{className:"mobile:flex-col mobile:my-2 flex justify-evenly w-full",children:[(0,d.jsxs)("div",{className:"p-2 cursor-pointer",children:["\u2022 ",(0,d.jsx)("label",{onClick:()=>r("community"),children:"Community Guidelines"})]}),(0,d.jsxs)("div",{className:"p-2 cursor-pointer",children:["\u2022 ",(0,d.jsx)("label",{onClick:()=>r("privacy"),children:"Privacy and Security"})]}),(0,d.jsxs)("div",{className:"p-2 cursor-pointer",children:["\u2022 ",(0,d.jsx)("label",{onClick:()=>r("feedback"),children:"Feedback"})]})]})}),(0,d.jsx)(m,{isOpen:t.community.isOpen,handleClose:r}),(0,d.jsx)(h,{isOpen:t.privacy.isOpen,handleClose:r}),(0,d.jsx)(u,{isOpen:t.feedback.isOpen,handleClose:r})]})}},6435:(e,t,n)=>{n.d(t,{A:()=>o});var s=n(9950),i=n(3300),r=n(4414);const o=e=>{const[t,n]=(0,s.useState)({...e});return(0,r.jsx)("div",{id:"backdrop",onClick:t=>{t.preventDefault(),!1!==e.closeOnDocumentClick&&"backdrop"===t.target.id&&e.close()},style:{display:e.open?"inherit":"none"},className:"fixed z-10 left-0 top-0 w-[100vw] h-[100vh] bg-[#1b1818c7] flex justify-center items-center",children:(0,r.jsxs)("section",{className:"fixed h-auto min-w-[20vw] bg-white rounded-lg p-4 ",children:[(0,r.jsx)("div",{onClick:e.close,className:"mobile:hidden mobile:-top-10 absolute p-2 bg-slate-300 rounded-full -top-6 -right-6 hover:scale-105 border border-dotted border-black",children:(0,r.jsx)("img",{className:"",width:"",src:i.A,alt:"modal Close Btn"})}),s.Children.map(e.children,(t=>s.cloneElement(t,e)))]})})}},7528:(e,t,n)=>{function s(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{A:()=>s})},5887:(e,t,n)=>{n.d(t,{l$:()=>ye,Ay:()=>je,oR:()=>V});var s=n(7528),i=n(9950);let r={data:""},o=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||r,a=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,l=/\/\*[^]*?\*\/|  +/g,c=/\n+/g,d=(e,t)=>{let n="",s="",i="";for(let r in e){let o=e[r];"@"==r[0]?"i"==r[1]?n=r+" "+o+";":s+="f"==r[1]?d(o,r):r+"{"+d(o,"k"==r[1]?"":t)+"}":"object"==typeof o?s+=d(o,t?t.replace(/([^,])+/g,(e=>r.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):r):null!=o&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=d.p?d.p(r,o):r+":"+o+";")}return n+(t&&i?t+"{"+i+"}":i)+s},m={},h=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+h(e[n]);return t}return e},u=(e,t,n,s,i)=>{let r=h(e),o=m[r]||(m[r]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(r));if(!m[o]){let t=r!==e?e:(e=>{let t,n,s=[{}];for(;t=a.exec(e.replace(l,""));)t[4]?s.shift():t[3]?(n=t[3].replace(c," ").trim(),s.unshift(s[0][n]=s[0][n]||{})):s[0][t[1]]=t[2].replace(c," ").trim();return s[0]})(e);m[o]=d(i?{["@keyframes "+o]:t}:t,n?"":"."+o)}let u=n&&m.g?m.g:null;return n&&(m.g=m[o]),((e,t,n,s)=>{s?t.data=t.data.replace(s,e):-1===t.data.indexOf(e)&&(t.data=n?e+t.data:t.data+e)})(m[o],t,s,u),o},p=(e,t,n)=>e.reduce(((e,s,i)=>{let r=t[i];if(r&&r.call){let e=r(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;r=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+s+(null==r?"":r)}),"");function f(e){let t=this||{},n=e.call?e(t.p):e;return u(n.unshift?n.raw?p(n,[].slice.call(arguments,1),t.p):n.reduce(((e,n)=>Object.assign(e,n&&n.call?n(t.p):n)),{}):n,o(t.target),t.g,t.o,t.k)}f.bind({g:1});let x,g,b,y=f.bind({k:1});function j(e,t){let n=this||{};return function(){let s=arguments;function i(r,o){let a=Object.assign({},r),l=a.className||i.className;n.p=Object.assign({theme:g&&g()},a),n.o=/ *go\d+/.test(l),a.className=f.apply(n,s)+(l?" "+l:""),t&&(a.ref=o);let c=e;return e[0]&&(c=a.as||e,delete a.as),b&&c[0]&&b(a),x(c,a)}return t?t(i):i}}var v,w,k,N,A,C,P,E,S,O,T,D,B,R,M,I,_=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,F=(()=>{let e=0;return()=>(++e).toString()})(),z=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),L=new Map,Y=e=>{if(L.has(e))return;let t=setTimeout((()=>{L.delete(e),U({type:4,toastId:e})}),1e3);L.set(e,t)},H=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=L.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:n}=t;return e.toasts.find((e=>e.id===n.id))?H(e,{type:1,toast:n}):H(e,{type:0,toast:n});case 3:let{toastId:s}=t;return s?Y(s):e.toasts.forEach((e=>{Y(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===s||void 0===s?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+i})))}}},W=[],q={toasts:[],pausedAt:void 0},U=e=>{q=H(q,e),W.forEach((e=>{e(q)}))},J={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},G=e=>(t,n)=>{let s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",n=arguments.length>2?arguments[2]:void 0;return{createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||F()}}(t,e,n);return U({type:2,toast:s}),s.id},V=(e,t)=>G("blank")(e,t);V.error=G("error"),V.success=G("success"),V.loading=G("loading"),V.custom=G("custom"),V.dismiss=e=>{U({type:3,toastId:e})},V.remove=e=>U({type:4,toastId:e}),V.promise=(e,t,n)=>{let s=V.loading(t.loading,{...n,...null==n?void 0:n.loading});return e.then((e=>(V.success(_(t.success,e),{id:s,...n,...null==n?void 0:n.success}),e))).catch((e=>{V.error(_(t.error,e),{id:s,...n,...null==n?void 0:n.error})})),e};var Z=(e,t)=>{U({type:1,toast:{id:e,height:t}})},$=()=>{U({type:5,time:Date.now()})},K=e=>{let{toasts:t,pausedAt:n}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,n]=(0,i.useState)(q);(0,i.useEffect)((()=>(W.push(n),()=>{let e=W.indexOf(n);e>-1&&W.splice(e,1)})),[t]);let s=t.toasts.map((t=>{var n,s;return{...e,...e[t.type],...t,duration:t.duration||(null==(n=e[t.type])?void 0:n.duration)||(null==e?void 0:e.duration)||J[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}}));return{...t,toasts:s}}(e);(0,i.useEffect)((()=>{if(n)return;let e=Date.now(),s=t.map((t=>{if(t.duration===1/0)return;let n=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(n<0))return setTimeout((()=>V.dismiss(t.id)),n);t.visible&&V.dismiss(t.id)}));return()=>{s.forEach((e=>e&&clearTimeout(e)))}}),[t,n]);let s=(0,i.useCallback)((()=>{n&&U({type:6,time:Date.now()})}),[n]),r=(0,i.useCallback)(((e,n)=>{let{reverseOrder:s=!1,gutter:i=8,defaultPosition:r}=n||{},o=t.filter((t=>(t.position||r)===(e.position||r)&&t.height)),a=o.findIndex((t=>t.id===e.id)),l=o.filter(((e,t)=>t<a&&e.visible)).length;return o.filter((e=>e.visible)).slice(...s?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+i),0)}),[t]);return{toasts:t,handlers:{updateHeight:Z,startPause:$,endPause:s,calculateOffset:r}}},X=y(v||(v=(0,s.A)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),Q=y(w||(w=(0,s.A)(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),ee=y(k||(k=(0,s.A)(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),te=j("div")(N||(N=(0,s.A)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(e=>e.primary||"#ff4b4b"),X,Q,(e=>e.secondary||"#fff"),ee),ne=y(A||(A=(0,s.A)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),se=j("div")(C||(C=(0,s.A)(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(e=>e.secondary||"#e0e0e0"),(e=>e.primary||"#616161"),ne),ie=y(P||(P=(0,s.A)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),re=y(E||(E=(0,s.A)(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),oe=j("div")(S||(S=(0,s.A)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(e=>e.primary||"#61d345"),ie,re,(e=>e.secondary||"#fff")),ae=j("div")(O||(O=(0,s.A)(["\n  position: absolute;\n"]))),le=j("div")(T||(T=(0,s.A)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),ce=y(D||(D=(0,s.A)(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),de=j("div")(B||(B=(0,s.A)(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),ce),me=e=>{let{toast:t}=e,{icon:n,type:s,iconTheme:r}=t;return void 0!==n?"string"==typeof n?i.createElement(de,null,n):n:"blank"===s?null:i.createElement(le,null,i.createElement(se,{...r}),"loading"!==s&&i.createElement(ae,null,"error"===s?i.createElement(te,{...r}):i.createElement(oe,{...r})))},he=e=>"\n0% {transform: translate3d(0,".concat(-200*e,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n"),ue=e=>"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*e,"%,-1px) scale(.6); opacity:0;}\n"),pe=j("div")(R||(R=(0,s.A)(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),fe=j("div")(M||(M=(0,s.A)(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),xe=i.memo((e=>{let{toast:t,position:n,style:s,children:r}=e,o=t.height?((e,t)=>{let n=e.includes("top")?1:-1,[s,i]=z()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[he(n),ue(n)];return{animation:t?"".concat(y(s)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(y(i)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}})(t.position||n||"top-center",t.visible):{opacity:0},a=i.createElement(me,{toast:t}),l=i.createElement(fe,{...t.ariaProps},_(t.message,t));return i.createElement(pe,{className:t.className,style:{...o,...s,...t.style}},"function"==typeof r?r({icon:a,message:l}):i.createElement(i.Fragment,null,a,l))}));!function(e,t,n,s){d.p=t,x=e,g=n,b=s}(i.createElement);var ge=e=>{let{id:t,className:n,style:s,onHeightUpdate:r,children:o}=e,a=i.useCallback((e=>{if(e){let n=()=>{let n=e.getBoundingClientRect().height;r(t,n)};n(),new MutationObserver(n).observe(e,{subtree:!0,childList:!0,characterData:!0})}}),[t,r]);return i.createElement("div",{ref:a,className:n,style:s},o)},be=f(I||(I=(0,s.A)(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),ye=e=>{let{reverseOrder:t,position:n="top-center",toastOptions:s,gutter:r,children:o,containerStyle:a,containerClassName:l}=e,{toasts:c,handlers:d}=K(s);return i.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...a},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map((e=>{let s=e.position||n,a=((e,t)=>{let n=e.includes("top"),s=n?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:z()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(t*(n?1:-1),"px)"),...s,...i}})(s,d.calculateOffset(e,{reverseOrder:t,gutter:r,defaultPosition:n}));return i.createElement(ge,{id:e.id,key:e.id,onHeightUpdate:d.updateHeight,className:e.visible?be:"",style:a},"custom"===e.type?_(e.message,e):o?o(e):i.createElement(xe,{toast:e,position:s}))})))},je=V}}]);