(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[740],{1973:function(e,t,n){"use strict";n(7313);t.Z=n.p+"static/media/cancel.e75b17a9b8b64ba1432f663619f1d27a.svg"},40:function(e,t,n){"use strict";n(7313);t.Z=n.p+"static/media/logo.44d8d75ca49ab4c7b4669fe25e2b0db8.svg"},5034:function(e,t,n){"use strict";n(7313);t.Z=n.p+"static/media/user.0625d2406e6f849b45522468a0d1d8c9.svg"},4873:function(e,t,n){"use strict";n.d(t,{C8:function(){return c},fA:function(){return u},jo:function(){return l},yt:function(){return h}});var r=n(1413),o=n(4165),i=n(5861),a=n(6573),s=n(1830),c=a.Z.create({baseURL:window.config.BACKEND_URL}),u=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.post("/feedback",{Name:t.name,Type:t.type,Email:t.email,Comments:t.text}).then((function(e){return 0})).catch((function(e){throw new Error}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.post("/subscribeemail",{email:t.email}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={page:window.location.pathname,userIdentifier:(localStorage.getItem("penguinuser")||localStorage.setItem("penguinuser",(0,s.Yi)(10)),localStorage.getItem("penguinuser")),date:(new Date).toISOString(),eventType:null,triggerelement:null},t=(0,r.Z)((0,r.Z)({},n),t),e.abrupt("return",c.post("/groupservice/useractivity",{data:t}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},6325:function(e,t,n){"use strict";n.d(t,{EU:function(){return l},F4:function(){return f},_I:function(){return m},nu:function(){return p},pH:function(){return d},r4:function(){return h},w5:function(){return g}});var r=n(1413),o=n(4165),i=n(5861),a=n(4873),s=(n(3262),n(1830)),c=n(9864),u=n(804),l=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.C8.get("/pub-key"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.C8.post("/user/create",{data:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.C8.post("/user/login",{data:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.C8.post("/user/request-resetpassword",{username:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.C8.post("/user/verify-pwdreset-token",{username:t.userName,token:t.token}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.C8.post("/user/resetpassword",{data:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){return new Promise((function(e,t){var n=localStorage.getItem("userName"),o=localStorage.getItem("refreshToken");if("undefined"!=n&&"undefined"!=o){var i={type:"refreshtoken",username:n,refreshtoken:o};(0,s.Qo)(i).then((function(o){d(o).then((function(t){localStorage.setItem("authToken",t.data.accesstoken),localStorage.setItem("refreshToken",t.data.refreshtoken),c.Z.dispatch((0,u.gT)((0,r.Z)((0,r.Z)({},t.data),{},{username:n}))),e("authenticated")})).catch((function(e){t("cannot authenticate")}))})).catch((function(e){t("cannot authenticate")}))}else t("required data not available in session storage")}))}},3262:function(e){e.exports.N={characterOnly:function(e){return null==/([^a-zA-Z\s]+)/gm.exec(e)},numerOnly:function(e){return null==/([^\d+])/gm.exec(e)},extractAlphaNumeric:function(e){for(var t,n=/([a-zA-Z\d\s]+)/gm,r="";null!==(t=n.exec(e));)r+=t[0];return r},extrctNumbers:function(e){for(var t,n=/(\d+)/gm,r=[];null!==(t=n.exec(e));)r.push(parseInt(t[0]));return r},emailFormat:function(e){var t;return null!==(t=/([\w]*[-\.]?[\w]+)@([a-z]+).com/gm.exec(e))&&t[0]},extractUserName:function(e){var t;return null!==(t=/([\w]+_?[\w]+)/gm.exec(e))&&t[0]},checkUserNameFormat:function(e){return null==/([^\w+])/gm.exec(e)}}},1830:function(e,t,n){"use strict";n.d(t,{Qo:function(){return u},Yi:function(){return l},uq:function(){return h}});var r=n(4165),o=n(5861),i=n(5390),a=n(9864),s=n(6325),c=n(918).Buffer,u=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.Z.getState().globalState.pubKey){e.next=4;break}return e.next=4,(0,s.EU)().then((function(e){n=e.data.publicKey})).catch((function(e){throw Error("unable to get public key")}));case 4:if(!n){e.next=8;break}return e.abrupt("return",(0,i.r0)(n,c.from(JSON.stringify(t))).toString("base64"));case 8:throw Error("no public key available");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"hex";return(0,i.O6)(64).toString(t).substring(0,e)},h=function(e,t){var n=String(t).substring(0,32),r=String(t).substring(32),o=(0,i.G_)("aes256",c.from(n),c.from(r));return o.update(e,"base64","utf-8")+o.final("utf-8")}},1391:function(e,t,n){"use strict";var r=n(9439),o=n(7313),i=n(6417);t.Z=function(e){setTimeout(e.callBack,e.timeOut||2e3);var t=(0,o.useState)(!0),n=(0,r.Z)(t,2),a=n[0],s=n[1];return(0,i.jsx)("div",{onClick:function(){return s(!1)},className:"".concat({primary:"bg-Primary",secondary:"bg-[#DBDCDD]",danger:"bg-[#f38463]",error:"bg-light_crimson",success:"bg-light_green",info:"bg-light_blue",warning:"bg-light_amber"}[e.type]," ").concat(e.className," ").concat(a?"visible":"hidden"," mobile:top-8 mobile:p-1 \n            mobile:w-fit mobile:text-xs mobile:left-1 right-0 bottom-4 px-2 py-4 text-sm \n            rounded-sm absolute w-1/3 h-fit "),children:(0,i.jsx)("p",{children:e.text})})}},4319:function(e,t,n){"use strict";var r=n(7313),o=n(6371),i=n(9864),a=n(6417);t.Z=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").query,t={mobile:"(min-width: 300px) and (max-width: 640px)",desktop:"(min-width: '640px')"},n=function(){Object.entries(t).some((function(e){return!!window.matchMedia(e[1]).matches&&(i.Z.dispatch((0,o.xl)({device:e[0]})),!0)}))};return r.useEffect((function(){var t=window.matchMedia(e);return n(),t.addEventListener("change",n),function(){t.removeEventListener("change",n)}}),[e]),(0,a.jsx)(a.Fragment,{})}},7224:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(4942),o=n(1413),i=n(9439),a=n(9284),s=n.n(a),c=n(7313),u=n(1973),l=n(4873),h=(n(1391),n(40));var d=n.p+"static/media/HamburgerIcon.10d0afd4ea4980f81c9217a0376b2245.svg",m=n(5034);var p=n.p+"static/media/authedUser.de1ff283f8ec5dbda3be572798c7f20a.svg",f=n(3392),g=n(8467),b=n(5131),x=(n(4319),n(6417)),y=function(e){return(0,x.jsxs)(s(),{isOpen:e.isOpen,shouldCloseOnOverlayClick:!0,style:{content:{top:"50%",left:"50%",right:"auto",width:"80%",height:"80%",bottom:"auto",transform:"translate(-50%, -50%)",backgroundColor:"#E6E6F9"},overlay:{backgroundColor:"#3C3838"}},children:[(0,x.jsxs)("header",{className:" flex justify-between bg-Primary-500",children:[(0,x.jsx)("h2",{children:"Community Guidelines"}),(0,x.jsx)("button",{onClick:function(){return e.handleClose("community")},children:(0,x.jsx)("img",{src:u.Z})})]}),(0,x.jsxs)("body",{className:" mt-2 text-sm",children:[(0,x.jsx)("h4",{children:"We want to ensure a safe and enjoyable experience for all users. To maintain a respectful and fun environment, please follow these community guidelines"}),(0,x.jsx)("h4",{className:" mt-2 font-semibold",children:"Respect Boundaries: "}),(0,x.jsx)("p",{children:"Treat fellow users with respect and courtesy. Avoid any form of harassment, bullying, or offensive language. Remember, everyone is here to connect and have a good time!"}),(0,x.jsx)("h4",{className:" mt-2 font-semibold",children:"Privacy and Confidentiality:"}),(0,x.jsx)("p",{children:"Respect the privacy of others and refrain from sharing personal information without their explicit consent. Safeguard your own personal information as well. Avoid sharing private details such as full names, addresses, phone numbers, or financial information."}),(0,x.jsx)("h4",{className:" mt-2 font-semibold",children:"No Illegal Content:"}),(0,x.jsx)("p",{children:"Do not share or request any illegal content, including but not limited to explicit, abusive, violent, or harmful materials. Penguin Duo strictly prohibits the sharing of adult or explicit content."}),(0,x.jsx)("h4",{className:" mt-2 font-semibold",children:"Reporting Inappropriate Behaviour:"}),(0,x.jsx)("p",{children:"If you encounter any user who violates these guidelines or engages in harmful behaviour, please report them immediately using the provided reporting tools. We take user safety seriously and will take appropriate action."}),(0,x.jsx)("h4",{className:" mt-2 font-semibold",children:"No Spam or Scams:"}),(0,x.jsx)("p",{children:"Do not engage in spamming, phishing, or any form of fraudulent activity. Penguin Duo is a platform for genuine connections, so let's keep it that way. Do not share any links or content that may harm or deceive others."}),(0,x.jsx)("h4",{className:" mt-2 font-semibold",children:"Use Common Sense:"}),(0,x.jsx)("p",{children:"Exercise common sense and be responsible for your actions. Think before you speak or send messages, and be mindful of the potential impact your words may have on others. Let's foster a friendly and positive atmosphere."})]}),(0,x.jsxs)("footer",{className:" mt-2 text-sm",children:["*Failure to comply with these guidelines may result in temporary or permanent suspension of your Penguin Duo account. We reserve the right to enforce these guidelines and take necessary actions to maintain a safe and enjoyable environment for all users.",(0,x.jsx)("br",{}),"Thank you for being part of the Penguin Duo community. Let's connect, chat responsibly, and have a great time together!"]})]})},w=function(e){return(0,x.jsxs)(s(),{isOpen:e.isOpen,style:{content:{top:"50%",left:"50%",right:"auto",width:"80%",height:"80%",bottom:"auto",transform:"translate(-50%, -50%)",backgroundColor:"#E6E6F9"},overlay:{backgroundColor:"#3C3838"}},children:[(0,x.jsxs)("header",{className:" flex justify-between bg-Primary-500",children:[(0,x.jsx)("h2",{children:"Privacy and Security"}),(0,x.jsx)("button",{onClick:function(){return e.handleClose("privacy")},children:(0,x.jsx)("img",{src:u.Z})})]}),(0,x.jsxs)("body",{className:"text-sm mt-2",children:[(0,x.jsx)("h4",{children:'Please read these Terms and Conditions ("Terms") carefully before using Penguin Duo ("the App"), a random chat app for adults. These Terms constitute a legal agreement between you ("User") and Penguin Duo ("we," "us," or "our"). By using the App, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please refrain from using the App.'}),(0,x.jsx)("h4",{className:"font-semibold mt-2",children:"User Eligibility:"}),(0,x.jsx)("p",{children:"By using the App, you affirm that you are at least 18 years old and have the legal capacity to enter into these Terms. The App is intended for use by adults only. Any use of the App by individuals under 18 years of age is strictly prohibited."}),(0,x.jsx)("h4",{className:"font-semibold mt-2",children:"User Conduct:"}),(0,x.jsx)("p",{children:"You agree to use the App in a responsible and lawful manner. You shall not engage in any activities that violate applicable laws or infringe upon the rights of others. This includes but is not limited to sharing illegal, explicit, abusive, or harmful content."}),(0,x.jsx)("h4",{className:"font-semibold mt-2",children:"Account Registration:"}),(0,x.jsx)("p",{children:"In order to use certain features of the App, you may be required to create a user account. You agree to provide accurate and complete information during the registration process. You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account."}),(0,x.jsx)("h4",{className:"font-semibold mt-2",children:"Privacy:"}),(0,x.jsx)("p",{children:"We respect your privacy and handle your personal information in accordance with our Privacy Policy. By using the App, you consent to the collection, use, and disclosure of your information as described in the Privacy Policy."}),(0,x.jsx)("h4",{className:"font-semibold mt-2",children:"Intellectual Property:"}),(0,x.jsx)("p",{children:"The App and its content, including but not limited to text, graphics, logos, trademarks, and software, are the property of Penguin Duo or its licensors. You are granted a limited, non-exclusive, non-transferable licence to use the App solely for personal, non-commercial purposes. You shall not copy, modify, distribute, or exploit any part of the App without prior written permission from Penguin Duo."}),(0,x.jsx)("h4",{className:"font-semibold mt-2",children:"Limitation of Liability:"}),(0,x.jsx)("p",{children:'The App is provided on an "as is" basis without warranties of any kind, whether expressed or implied. Penguin Duo shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with the use or inability to use the App.'}),(0,x.jsx)("h4",{className:"font-semibold mt-2",children:"Modification of Terms:"}),(0,x.jsx)("p",{children:"We reserve the right to modify these Terms at any time. Updated Terms will be posted within the App, and it is your responsibility to review them periodically. Your continued use of the App after any modifications constitutes acceptance of the revised Terms."}),(0,x.jsx)("h4",{className:"font-semibold mt-2",children:"Termination:"}),(0,x.jsx)("p",{children:"We reserve the right to suspend or terminate your access to the App at any time, for any reason, without prior notice or liability."}),(0,x.jsx)("h4",{className:"font-semibold mt-2",children:"Entire Agreement:"}),(0,x.jsx)("p",{children:"These Terms constitute the entire agreement between you and Penguin Duo regarding the use of the App, superseding any prior agreements or understandings."})]})]})},v=function(e){var t=(0,c.useState)({name:"",email:"",type:"Bug",text:""}),n=(0,i.Z)(t,2),a=n[0],h=n[1],d=function(e,t){h((0,o.Z)((0,o.Z)({},a),{},(0,r.Z)({},t,e)))};return(0,x.jsxs)(s(),{isOpen:e.isOpen,style:{content:{top:"50%",left:"50%",right:"auto",width:"100%",height:"fit",bottom:"auto",transform:"translate(-50%, -50%)",backgroundColor:"#E6E6F9"},overlay:{backgroundColor:"#3C3838"}},children:[(0,x.jsxs)("header",{className:" flex justify-between bg-Primary-500",children:[(0,x.jsx)("h2",{children:"Feedback"}),(0,x.jsx)("button",{onClick:function(){return e.handleClose("feedback")},children:(0,x.jsx)("img",{src:u.Z})})]}),(0,x.jsxs)("body",{className:"text-sm",children:[(0,x.jsx)("h4",{className:"mt-4",children:"Name"}),(0,x.jsx)("input",{placeholder:"John Doh",value:a.name,onChange:function(e){return d(e.target.value,"name")},maxLength:100,className:"outline-none  px-2 h-8 w-48"}),(0,x.jsx)("h4",{className:"mt-4",children:"Feedback Type"}),(0,x.jsxs)("select",{onChange:function(e){return d(e.target.value,"type")},defaultValue:"Bug",value:a.type,className:"bg-white px-2 h-8 w-48 outline-none",children:[(0,x.jsx)("option",{value:"Bug",children:"Bug"}),(0,x.jsx)("option",{value:"Enhancement",children:"Enhancement"}),(0,x.jsx)("option",{value:"Suggestion",children:"Suggestion"})]}),(0,x.jsx)("h4",{className:"mt-4",children:"Email"}),(0,x.jsx)("input",{placeholder:"Doh@mail.com",value:a.email,onChange:function(e){return d(e.target.value,"email")},maxLength:100,className:"outline-none px-2 h-8 w-48"}),(0,x.jsx)("h4",{className:"mt-4",children:"Feedback Area"}),(0,x.jsx)("textarea",{value:a.text,onChange:function(e){return d(e.target.value,"text")},className:"w-[80%] h-[25VH] outline-none"}),(0,x.jsx)("div",{}),(0,x.jsx)("button",{disabled:!a.name.length|!a.email.length|!a.text.length,onClick:function(){(0,l.fA)(a).finally((function(){h({name:"",email:"",type:"",text:""})}))},className:"bg-light_green text-white font-semibold w-40 h-6 float-right mt-2",children:"Submit"}),(0,x.jsxs)("h4",{className:"text-xs",children:["Your feedback is atmost important for the growth of user experience.",(0,x.jsx)("br",{}),(0,x.jsx)("span",{className:"font-Allura text-lg",children:"Thank You !!! "})]})]})]})},j=function(e){var t=(0,c.useState)({community:{isOpen:!1},privacy:{isOpen:!1},feedback:{isOpen:!1},mobileMenuOpen:!1,redirect:void 0}),n=(0,i.Z)(t,2),a=n[0],s=n[1],l=(0,c.useState)({show:!1,hover:!1}),j=(0,i.Z)(l,2),k=j[0],Z=j[1],N=(0,f.v9)((function(e){return e.authentication.userName})),C=" rounded-md h-fit font-roboto\n    text-sm text-BrandColor font-medium px-2 py-1 cursor-pointer hover:bg-BrandColor-500 border border-BrandColor\n    ",P=function(e){var t;s((0,o.Z)((0,o.Z)({},a),{},(t={},(0,r.Z)(t,e,{isOpen:!a[e].isOpen}),(0,r.Z)(t,"mobileMenuOpen",!1),t)))};return(0,x.jsxs)("div",{className:" h-12 w-full px-2 py-1 bg-gradient-to-l from-Ghostwhite to-BrandColor flex items-center justify-between relative mobile:h-fit mobile:py-2",children:[a.redirect&&(0,x.jsx)(g.Fg,{to:a.redirect,replace:!0}),(0,x.jsx)(b.Z,{}),(0,x.jsxs)("div",{className:"flex w-fit",children:[(0,x.jsx)("div",{onClick:function(){return s((0,o.Z)((0,o.Z)({},a),{},{redirect:"/"}))},className:" rounded-md aspect-square h-[100%] mobile:bg-Primary-500 mobile:h-fit",children:(0,x.jsx)("img",{src:h.Z,className:"w-[35px] p-1 mobile:w-5"})}),(0,x.jsxs)("div",{onTransitionEnd:function(e){Z((0,o.Z)((0,o.Z)({},k),{},{show:!0}))},onMouseEnter:function(e){Z({show:!1,hover:!0})},onMouseLeave:function(e){Z({show:!1,hover:!1})},className:"h-min-full mobile:hidden bg-white shadow-white shadow-sm flex items-center justify-evenly mx-2 rounded-md w-10 transition-all ease-linear hover:w-28 duration-500 ",children:[(0,x.jsx)("img",{className:"rounded-full",width:"15px",src:N?p:m.Z}),k.show&&k.hover&&(0,x.jsx)("p",{className:"text-xs",children:N||"Hello Stranger"})]})]}),(0,x.jsx)("h5",{className:"text-xs mx-2 hidden mobile:show",children:N||"Hello Stranger"}),(0,x.jsx)("h5",{className:"hidden mobile:show text-xs",children:"PenguinDuo"}),(0,x.jsxs)("div",{className:"flex items-center justify-between w-2/3 mobile:hidden",children:[(0,x.jsx)("div",{className:C,children:(0,x.jsx)("a",{href:"./about",children:"About Us"})}),(0,x.jsx)("div",{onClick:function(){return P("community")},className:C,children:"Community guidelines"}),(0,x.jsx)("div",{onClick:function(){return P("privacy")},className:C,children:"Privacy and security"}),(0,x.jsx)("div",{onClick:function(){return P("feedback")},className:C,children:"Feedback"}),(0,x.jsx)("div",{className:C,children:(0,x.jsx)("a",{href:"https://penguinduo.com/blog",children:"Blog"})}),(0,x.jsx)("button",{onClick:function(){return s((0,o.Z)((0,o.Z)({},a),{},{redirect:"/auth"}))},className:"text-white text-xs px-2 min-w-max py-2 shadow-md rounded-md bg-gradient-to-r from-[#23a50a] to-[#060c6b]",children:"Sign Up / Sign In"})]}),(0,x.jsx)("div",{onClick:function(){return s((0,o.Z)((0,o.Z)({},a),{},{mobileMenuOpen:!a.mobileMenuOpen}))},className:"hidden mobile:show z-100",children:(0,x.jsx)("img",{src:a.mobileMenuOpen?u.Z:d,width:"20px"})}),a.mobileMenuOpen&&(0,x.jsxs)("div",{className:"hidden mobile:show absolute bg-white z-10 shadow-md w-full h-[50vh] top-full right-0 rounded-md m-0",children:[(0,x.jsx)("h6",{onClick:function(){return s((0,o.Z)((0,o.Z)({},a),{},{redirect:"/"}))},className:"w-full text-sm p-2 border-b border-b-Primary ",children:"Home"}),(0,x.jsx)("h6",{onClick:function(){return s((0,o.Z)((0,o.Z)({},a),{},{redirect:"/lounge"}))},className:"w-full text-sm p-2 border-b border-b-Primary ",children:"Group chat"}),(0,x.jsx)("h6",{onClick:function(){P("community")},className:"w-full text-sm p-2 border-b border-b-Primary ",children:"Community guidelines"}),(0,x.jsx)("h6",{onClick:function(){P("privacy")},className:"w-full text-sm p-2 border-b border-b-Primary ",children:"Privacy and security"}),(0,x.jsx)("h6",{onClick:function(){P("feedback")},className:"w-full text-sm p-2 border-b border-b-Primary ",children:"Feedback"}),(0,x.jsx)("h6",{className:"w-full text-sm p-2 border-b border-b-Primary ",children:(0,x.jsx)("a",{href:"https://penguinduo.com/blog",children:"Blog"})}),(0,x.jsx)("h6",{onClick:function(){return s((0,o.Z)((0,o.Z)({},a),{},{redirect:"/auth"}))},className:"w-full text-sm p-2 border-b border-b-Primary ",children:"Sign In / Sign Up"})]}),(0,x.jsx)(y,{isOpen:a.community.isOpen,handleClose:P}),(0,x.jsx)(w,{isOpen:a.privacy.isOpen,handleClose:P}),(0,x.jsx)(v,{isOpen:a.feedback.isOpen,handleClose:P})]})}},5131:function(e,t,n){"use strict";n(7313);var r=n(5964),o=n(6417);t.Z=function(e){return(0,o.jsxs)(r.ql,{children:[(0,o.jsx)("title",{children:"PenguinDuo:Chat Online with Best Random Chat Website"}),(0,o.jsx)("meta",{name:"description",content:"Explore PenguinDuo, where fun meets connection! Immerse yourself in the best random chat website for laughter, new friendships, and memorable moments. Join the chatter now!"}),(0,o.jsx)("meta",{property:"og:type",content:"website"}),(0,o.jsx)("meta",{property:"og:title",content:"PenguinDuo:Chat Online with Best Random Chat Website"}),(0,o.jsx)("meta",{property:"og:description",content:"Explore PenguinDuo, where fun meets connection! Immerse yourself in the best random chat website for laughter, new friendships, and memorable moments. Join the chatter now!"}),(0,o.jsx)("meta",{property:"keywords",content:"chat with strangers, talk to strangers, random chat, free online chat ,chat rooms, omegle alternative, online chat platform, live chat website, random video chat, meet strangers online"}),(0,o.jsx)("meta",{property:"og:image",itemprop:"image",content:"https://blogpost.penguinduo.com/Articles/assets/logo.jpg"}),(0,o.jsx)("link",{rel:"canonical",href:"https://penguinduo.com/"}),(0,o.jsx)("meta",{property:"og:url",content:"https://penguinduo.com"}),(0,o.jsx)("meta",{property:"og:image:width",content:"250"}),(0,o.jsx)("meta",{property:"og:image:height",content:"250"}),(0,o.jsx)("meta",{httpEquiv:"Content-Security-Policy",content:"\n                      default-src 'self' https://backend.penguinduo.com http://localhost:2000 ws:;\n                      script-src 'self' https://www.google.com https://www.gstatic.com https://fonts.gstatic.com https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net http://localhost:3030;\n                      img-src 'self' https://blogpost.penguinduo.com https://www.facebook.com data:;\n                      media-src 'self';\n                      connect-src 'self' https://www.facebook.com https://www.google-analytics.com http://localhost:2000 https://backend.penguinduo.com ws:;\n                      style-src 'unsafe-inline';\n                      frame-src https://www.google.com https://accounts.google.com;\n                "})]})}},950:function(){},6601:function(){},9214:function(){},8623:function(){},7748:function(){},5568:function(){},6619:function(){},7108:function(){},2361:function(){},4616:function(){}}]);