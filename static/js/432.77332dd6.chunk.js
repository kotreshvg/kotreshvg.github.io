"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[432],{7231:(e,s,t)=>{t.d(s,{A:()=>l});t(9950);const l=t.p+"static/media/AddiconWhite.5100a9f308c15b352ca926a827147e82.svg"},1003:(e,s,t)=>{t.d(s,{A:()=>l});t(9950);const l=t.p+"static/media/arrow-left-solid.07f8c39113e8fb15b640ecafe6256813.svg"},432:(e,s,t)=>{t.r(s),t.d(s,{default:()=>S});var l=t(9950),a=t(8429),i=(t(1840),t(2832)),n=t(3999),c=(t(8341),t(5887)),d=t(9663),r=t(5916),o=t(8606),m=t(1003),x=t(7227),u=t(1908),h=t(8583),p=t(7231);const f=t.p+"static/media/minus.f186aa3ef5ab5ee608137ba8d3ac5e42.svg";const g=t.p+"static/media/PickupIcon.3e64c2d928b08dc013a3414de9a28523.svg";var j=t(9426),N=t(9749),v=t(6435),b=t(863),_=t(3696);const w=t.p+"static/media/ShareIcon.c34a3955001498073421e4090e21998a.svg";const y=t.p+"static/media/Love.e1f04c07441e7e041f03c55646a9f918.svg";const k=t.p+"static/media/lovefalse.4450294d82b1842c8b4f9cae5d7c0f16.svg";var C=t(4127),A=t(4414);const S=e=>{var s,t,S,F,P,I,R;const E=(0,a.Zp)(),{packagename:M,packageid:L}=(0,a.g)(),[B,D]=(0,l.useState)(void 0),[H,q]=(0,l.useState)({inc_collapsed:!0,canc_collapsed:!0,selected_spots:1,selected_info:"package",selected_schedule:void 0,selected_sharing:void 0,taxes_collapsed:!0,display_mode:"package",login_warning_modal:!1,guest_user_signin:!1,guest_full_name:"",guest_email:"",guest_phone:"",guest_otp:"",display_sharing_modal:!1,required_mobile:!1,mobile:""}),[T,O]=(0,l.useState)([]),[z,Y]=(0,l.useState)(0),[G,W]=(0,l.useState)([]),[U,Z]=(0,l.useState)(localStorage.getItem("favorite")||[]),K=(0,l.useRef)(null);(0,l.useEffect)((()=>((0,u.xG)(L).then((e=>{e.data.result.length&&(D(e.data.result[0]||{}),se(e.data.result[0].images),(0,u.nX)(e.data.result[0].business_packages).then((e=>{W(Object.values(e.data.packageData))})))})).catch((e=>{console.log(e)})),ne(),()=>{D(void 0),O([])})),[M,L]);const $=()=>{q({...H,selected_spots:H.selected_spots+1})},J=()=>{1!==H.selected_spots&&q({...H,selected_spots:H.selected_spots-1})},Q=e=>{q({...H,selected_info:e})},X=e=>{H.selected_schedule?!B.details.accommodation_sharing||H.selected_sharing?((0,C.Rt)({eventType:"ButtonClick",triggerelement:"Book now"}),(0,h.Fg)({product_service_id:B.product_service_id,schedule_id:H.selected_schedule,user_token:N.A.getState().authentication.authToken||localStorage.getItem("authToken"),number_of_slots:H.selected_spots,sharing_mode:B.details.accommodation_sharing?H.selected_sharing:null}).then((s=>{q({...H,display_mode:e,checkout_info:s.data.result.checkout_info,required_mobile:s.data.required_mobile})})).catch((e=>{(0,c.Ay)(e.response.data.message,{style:{background:"#E90000",borderRadius:"5px",fontSize:"12px",padding:"2px",color:"white"},duration:5e3}),401==e.response.status&&q({...H,login_warning_modal:!0})}))):(0,c.Ay)("Select Sharing and continue",{style:{background:"#E90000",borderRadius:"5px",fontSize:"12px",padding:"2px",color:"white"},duration:5e3}):(0,c.Ay)("Select Schedule and continue",{style:{background:"#E90000",borderRadius:"5px",fontSize:"12px",padding:"2px",color:"white"},duration:5e3})},V=e=>{(0,C.Rt)({eventType:"ButtonClick",triggerelement:"schedule selected"}),q({...H,selected_schedule:e})},ee=e=>{q({...H,selected_sharing:e})},se=e=>{const s=e.map((e=>{const s=new Image;return s.src=e+"?timestamp=".concat(Date.now()),s.onload=()=>console.log("Image loaded successfully: ".concat(e)),s.onerror=()=>console.error("Failed to load image: ".concat(e)),s}));O(s)};(0,l.useEffect)((()=>(K.current=setInterval((()=>{Y((e=>(e+1)%B.images.length))}),3e3),()=>{K.current&&clearInterval(K.current)})),[B]);const te=(e,s)=>{q((t=>({...t,[e]:s})))},le=(e,s)=>{E("/packages/".concat(s,"/").concat(e))},ae=()=>{navigator.share?navigator.share({title:"Check out this package to ".concat(B.details.destination," !"),text:B.short_description,url:window.location.href}).then((()=>console.log("Content shared successfully"))).catch((e=>console.error("Error sharing content:",e))):alert("Sharing is not supported on this browser")},ie=()=>{(0,h.$h)({product_service_id:B.product_service_id}).then((e=>{localStorage.setItem("favorite",[...localStorage.getItem("favorite")||[],L]),Z(localStorage.getItem("favorite")),(0,x.Zx)("Package added to favorites")})).catch((e=>{var s;401!=(null===(s=e.response)||void 0===s?void 0:s.status)?(0,x.Ax)("Error while adding to favorites"):(0,x.Ax)("Please login")}))},ne=()=>{(0,h.Iz)().then((e=>{var s,t;localStorage.setItem("favorite",null===(s=e.data)||void 0===s||null===(t=s.result)||void 0===t?void 0:t.map((e=>e.product_service_id)))})).catch((e=>{}))},ce=()=>{(0,h.Fy)({product_service_id:B.product_service_id}).then((e=>{localStorage.setItem("favorite",[...localStorage.getItem("favorite")].filter((e=>e!=L))),Z(localStorage.getItem("favorite"))})).catch((e=>{console.log(e)}))},de=()=>{H.required_mobile&&10==H.mobile.length?q({...H,required_mobile:!1}):(0,x.Ax)("Enter Mobile to continue !!")};return(0,A.jsxs)("div",{className:"w-[100vw] h-[100vh",children:[(0,A.jsx)(i.A,{}),(0,A.jsx)(c.l$,{}),(0,A.jsxs)("div",{className:"flex justify-center items-center",children:[(0,A.jsx)(v.A,{open:H.login_warning_modal,close:()=>{q({...H,login_warning_modal:!1})},closeOnDocumentClick:!0,children:(0,A.jsxs)("div",{className:"w-[50vw] mobile:w-full",children:[!H.guest_user_signin&&(0,A.jsxs)("div",{className:"text-center",children:["Sign Up to Save Your Booking!",(0,A.jsx)("p",{className:"text-sm",children:"We're almost there! Creating an account allows you to view and manage all your bookings in one place and enjoy a seamless experience on your trips. It only takes a moment!"}),(0,A.jsx)("button",{onClick:e=>E("/auth",{state:{redirect:window.location.pathname,mode:"SignIn"}}),className:" py-2 px-4 mt-10 mx-2 rounded-md bg-black text-white",children:"Login / Sign Up"}),(0,A.jsx)("button",{onClick:e=>q((e=>({...e,guest_user_signin:!0}))),className:" p-2 rounded-md text-black border-black border",children:"Continue as Guest"})]}),H.guest_user_signin&&(0,A.jsxs)("div",{className:"text-center",children:["Complete Your Booking as a Guest",(0,A.jsx)("p",{className:"my-4",children:"Just a few details, and you're all set! You'll receive a confirmation and can manage your booking anytime."}),(0,A.jsx)("p",{className:"text-left text-sm font-RedHatLight",children:"Full Name"}),(0,A.jsx)("input",{value:H.guest_full_name,onChange:e=>te("guest_full_name",e.target.value),className:"w-full p-1 outline-none border-slate-300 border rounded-md"}),(0,A.jsx)("p",{className:"text-left text-sm font-RedHatLight",children:"Mobile"}),(0,A.jsx)("input",{value:H.guest_phone,onChange:e=>te("guest_phone",e.target.value),maxLength:10,className:"w-full p-1 outline-none border-slate-300 border rounded-md"}),(0,A.jsx)("p",{className:"text-left text-sm font-RedHatLight",children:"Email"}),(0,A.jsx)("input",{value:H.guest_email,onChange:e=>te("guest_email",e.target.value),className:"w-full p-1 outline-none border-slate-300 border rounded-md"}),(0,A.jsxs)("p",{className:"text-left text-sm font-RedHatLight",children:["Enter OTP ",(0,A.jsx)("span",{className:"text-[10px] text-green",children:"(OTP will be sent to Email)"})]}),(0,A.jsx)("input",{value:H.guest_otp,onChange:e=>te("guest_otp",e.target.value),maxLength:10,className:"w-full p-1 outline-none border-slate-300 border rounded-md"}),(0,A.jsx)("button",{onClick:()=>{(0,h.mW)({full_name:H.guest_full_name,email:H.guest_email,mobile:H.guest_phone}).then((e=>{(0,x.Zx)(e.data.message)})).catch((e=>{(0,x.Ax)(e.response.data.message)}))},className:" py-2 px-4 mt-10 mx-2 rounded-md bg-black text-white",children:"Send OTP"}),(0,A.jsx)("button",{onClick:()=>{(0,C.Rt)({eventType:"ButtonClick",triggerelement:"Create Guest user"}),(0,h.OB)({full_name:H.guest_full_name,email:H.guest_email,mobile:H.guest_phone,otp:H.guest_otp,promoter_id:localStorage.getItem("promoter_id")||null}).then((e=>{localStorage.setItem("authToken",e.data.accesstoken),localStorage.setItem("refreshToken",e.data.refreshtoken),N.A.dispatch((0,b.mP)({...e.data,username:null})),q((e=>({...e,guest_email:"",guest_full_name:"",guest_otp:"",guest_phone:"",guest_user_signin:!1,login_warning_modal:!1})))})).catch((e=>{(0,x.Ax)(e.response.data.message)}))},className:" py-2 px-4 mt-10 mx-2 rounded-md bg-black text-white",children:"Confirm and Continue"}),(0,A.jsx)("button",{onClick:e=>E("/auth",{state:{redirect:window.location.pathname,mode:"SignIn"}}),className:" p-2 rounded-md text-black ",children:"Create an Account Instead"})]})]})}),(0,A.jsx)(v.A,{open:H.display_sharing_modal,close:()=>{q({...H,display_sharing_modal:!1})},closeOnDocumentClick:!0,children:(0,A.jsxs)("div",{className:"mx-2 w-[60vw] mobile:w-full",children:[(0,A.jsx)("p",{className:"mb-4",children:"Accommodation sharing allows travelers to share their stay with others, helping reduce costs or make the trip more social. Based on your preference, you can choose from different sharing options:"}),(0,A.jsxs)("ul",{children:[(0,A.jsxs)("li",{className:"mb-2",children:[(0,A.jsx)("em",{children:"Single Sharing"}),": You'll stay solo in your accommodation"]}),(0,A.jsxs)("li",{className:"mb-2",children:[(0,A.jsx)("em",{children:"Double Sharing"}),": Share with one other person for a lower cost"]}),(0,A.jsxs)("li",{className:"mb-2",children:[(0,A.jsx)("em",{children:"Triple / Quad Sharing"}),": Share with three / four people, perfect for friends group."]}),(0,A.jsxs)("li",{className:"mb-2",children:[(0,A.jsx)("em",{children:"Group Sharing"}),": Share with multiple people, perfect for families or groups."]})]}),(0,A.jsx)("p",{className:"mt-4",children:"This feature is set up by the trip organizer to provide flexible pricing and options. Choose what fits your budget and comfort!"})]})}),(0,A.jsx)(v.A,{open:H.required_mobile,close:de,closeOnDocumentClick:!1,children:(0,A.jsxs)("div",{className:"w-[50vw] mobile:w-full",children:[(0,A.jsx)("p",{className:"text-sm my-4",children:"We're almost there! We need your mobile number to complete booking"}),(0,A.jsxs)("p",{className:"text-left text-sm font-RedHatLight",children:["Mobile ",(0,A.jsx)("span",{className:"text-red",children:"*"})]}),(0,A.jsx)("input",{value:H.mobile,onChange:e=>te("mobile",e.target.value),className:"w-full p-1 outline-none border-slate-300 border rounded-md"}),(0,A.jsx)("button",{onClick:de,className:" py-2 px-4 mt-10 mx-2 float-right rounded-md bg-black text-white",children:"Continue"})]})})]}),B&&"package"===H.display_mode&&(0,A.jsxs)("div",{className:"w-full hidden mobile:flex mobile:flex-col relative",children:[B.images.length>0&&(0,A.jsx)("img",{className:"w-full aspect-video object-contain",src:null!==(s=B.images)&&void 0!==s&&s.length?null===(t=T[z])||void 0===t?void 0:t.src:"",alt:"package cover image"}),(0,A.jsx)("p",{className:"px-2 py-4 text-2xl font-PoppinsMedium",children:B.title}),(0,A.jsxs)("div",{className:"w-full grid grid-cols-2 mt-2 grid-rows-2 gap-5 px-2",children:[(0,A.jsxs)("div",{className:"flex",children:[(0,A.jsx)("img",{src:r.A,className:"h-10 p-2 aspect-square border-2 border-stone-300 rounded-full",alt:"duration"}),(0,A.jsxs)("div",{className:"pl-2",children:[(0,A.jsx)("p",{className:"font-PoppinsMedium text-sm",children:"Duration"}),(0,A.jsxs)("p",{className:"text-sm text-stone-700 font-Nunito",children:[B.details.duration," Days"]})]})]}),(0,A.jsxs)("div",{className:"flex",children:[(0,A.jsx)("img",{src:o.A,className:"h-10 p-2 aspect-square border-2 border-stone-300 rounded-full",alt:"duration"}),(0,A.jsxs)("div",{className:"pl-2",children:[(0,A.jsx)("p",{className:"font-PoppinsMedium text-sm",children:"Slots"}),(0,A.jsx)("p",{className:"text-sm text-stone-700 font-Nunito",children:B.schedules.length?B.schedules[0].availability:0})]})]}),(0,A.jsxs)("div",{className:"flex",children:[(0,A.jsx)("img",{src:d.A,className:"h-10 p-2 aspect-square border-2 border-stone-300 rounded-full",alt:"duration"}),(0,A.jsxs)("div",{className:"pl-2",children:[(0,A.jsx)("p",{className:"font-PoppinsMedium text-sm",children:"Destination"}),(0,A.jsx)("p",{className:"text-sm text-stone-700 font-Nunito",children:B.details.destination})]})]}),(0,A.jsxs)("div",{className:"flex",children:[(0,A.jsx)("img",{src:_.A,className:"h-10 p-2 aspect-square border-2 border-stone-300 rounded-full",alt:"duration"}),(0,A.jsxs)("div",{className:"pl-2",children:[(0,A.jsx)("p",{className:"font-PoppinsMedium text-sm",children:"Price"}),(0,A.jsxs)("p",{className:"text-sm text-stone-700 font-Nunito",children:[B.details.currency," ",B.details.base_price," per slot"]})]})]}),(0,A.jsxs)("div",{className:"flex justify-between w-3/4 mt-4 mb-4 p-1 rounded-xl bg-stone-100",children:[(0,A.jsx)("img",{onClick:J,className:" rounded-full bg-white border border-[#1E90FF]",width:"25px",src:f,alt:"slot add icon"}),(0,A.jsxs)("div",{className:"flex justify-center",children:[(0,A.jsx)("img",{src:o.A,className:" aspect-square",width:"25px"}),(0,A.jsx)("p",{className:"",children:H.selected_spots})]}),(0,A.jsx)("img",{onClick:$,className:" rounded-full bg-[#1E90FF]",width:"25px",src:p.A,alt:"slot add icon"})]}),(0,A.jsxs)("div",{className:"flex justify-end mt-4",children:[(0,A.jsx)("img",{onClick:ae,className:"bg-stone-100 mx-1 h-3/4 p-2 rounded aspect-square",src:w,alt:"share icon"}),(0,A.jsx)("img",{onClick:U.includes(B.product_service_id)?ce:ie,className:"bg-stone-100 h-3/4 p-2 rounded aspect-square",src:U.includes(B.product_service_id)?y:k,alt:"favorite icon"})]})]}),(0,A.jsx)("hr",{}),(0,A.jsxs)("div",{className:"px-2 w-full mt-6",children:[(0,A.jsx)("p",{className:"font-RedHatLight font-semibold text-sm text-stone-600",children:"Select Your Departure Schedule"}),(0,A.jsx)("div",{className:"w-full mt-2 bg-stone-100 h-fit flex-nowrap flex flex-row overflow-x-scroll py-1 rounded",children:B.schedules.map((e=>{let s=(0,x.r6)(e.start_datetime),t=(0,x.r6)(e.end_datetime);return(0,A.jsxs)("div",{onClick:()=>V(e.schedule_id),style:e.schedule_id===H.selected_schedule?{backgroundColor:"#7E6CEF",color:"white"}:{},className:"w-3/4 mr-4 cursor-pointer bg-white text-sm p-2 border border-[#1E90FF] rounded-md font-RedHatLight flex-shrink-0",children:[(0,A.jsxs)("div",{className:" flex py-2 justify-between",children:[(0,A.jsx)("p",{children:s}),(0,A.jsxs)("div",{className:"flex ",children:[(0,A.jsx)("img",{src:o.A,width:"20px",alt:"schedule availability"}),(0,A.jsxs)("p",{children:[e.availability," Available"]})]})]}),(0,A.jsxs)("div",{className:" flex py-2 justify-between",children:[(0,A.jsx)("p",{children:t}),(0,A.jsxs)("div",{className:"flex ",children:[(0,A.jsx)("img",{src:g,className:"mr-2",width:"20px",alt:"schedule availability"}),(0,A.jsx)("p",{children:e.location})]})]})]},e.schedule_id)}))})]}),B.details.accommodation_sharing&&(0,A.jsxs)("div",{className:"px-2 w-full mt-6",children:[(0,A.jsxs)("div",{className:"w-full flex justify-between",children:[(0,A.jsx)("p",{className:"font-RedHatLight font-semibold text-sm text-stone-600",children:"Select Accommodation Sharing"}),(0,A.jsx)("p",{onClick:e=>q({...H,display_sharing_modal:!0}),className:"float-right text-xs underline text-blue",children:"More Info"})]}),(0,A.jsx)("div",{className:"rounded-md bg-[#F7F7F7] h-fit mt-2 overflow-scroll flex flex-shrink-0 p-2",children:null===(S=B.details.accomodation_sharing_options)||void 0===S?void 0:S.sort(((e,s)=>e.additional_Price-s.additional_Price)).map((e=>(0,A.jsxs)("div",{onClick:s=>ee(e.id),className:"w-2/5 shrink-0 mr-2 font-Nunito h-fit rounded-md bg-white",children:[(0,A.jsx)("p",{className:"w-full px-2 py-1 rounded-t-md text-center bg-stone-800 text-sm text-white",children:e.sharing_mode}),e.additional_Price>0&&(0,A.jsxs)("p",{style:e.id==H.selected_sharing?{backgroundColor:"#7E6CEF",color:"white"}:{},className:"p-2 rounded-b-md text-center text-base",children:["Base Price + ",B.details.currency," ",e.additional_Price]}),0==e.additional_Price&&(0,A.jsx)("p",{style:e.id==H.selected_sharing?{backgroundColor:"#7E6CEF",color:"white"}:{},className:"p-2 rounded-b-md text-center text-base",children:"No Additional Cost"})]})))})]}),(0,A.jsx)("div",{className:"w-full flex justify-center",children:(0,A.jsx)("button",{onClick:()=>X("summary"),className:"bg-[#FBB428] mt-6 font-PoppinsMedium text-sm h-10 rounded-xl w-3/4",children:"Book Now"})}),(0,A.jsxs)("div",{className:"w-full px-2 mt-10",children:[(0,A.jsx)("p",{className:"font-PoppinsMedium text-lg",children:"About Package"}),(0,A.jsx)("p",{className:"font-Nunito text-stone-700 text-base mt-2",children:B.short_description}),(0,A.jsx)("div",{className:"flex my-2",children:B.categoriesInfo.map((e=>(0,A.jsx)("p",{className:"underline mr-2 font-Nunito text-stone-500 text-sm",children:e.category_name})))})]}),(0,A.jsxs)("div",{className:"mt-8 mx-2",children:[(0,A.jsxs)("div",{className:"flex justify-start",children:[(0,A.jsx)("p",{onClick:()=>Q("itinerary"),className:"mr-8 ".concat("itinerary"==H.selected_info?"text-stone-800 border-b-2 border-stone-600":"text-stone-500"),children:"Itinerary"}),(0,A.jsx)("p",{onClick:()=>Q("package"),className:"mr-8 ".concat("package"==H.selected_info?"text-stone-800 border-b-2 border-stone-600":"text-stone-500"),children:"More Details"})]}),(0,A.jsx)("hr",{})]}),(0,A.jsxs)("div",{className:"px-2",children:["itinerary"===H.selected_info&&(0,A.jsxs)("div",{className:"p-2 grid grid-cols-[auto_1fr] gap-4",children:[(0,A.jsx)("div",{className:"flex flex-col items-center overflow-scroll ",children:B.details.itinerary&&B.details.itinerary.map(((e,s)=>(0,A.jsxs)("div",{className:"relative flex flex-col mt-2 items-center",style:{height:"120px"},children:[(0,A.jsx)("div",{className:"w-6 h-6 bg-[#0D47A1] rounded-full flex items-center justify-center text-white",children:s+1}),(0,A.jsx)("div",{className:"line-segment"})]})))}),(0,A.jsx)("div",{className:"",children:B.details.itinerary&&B.details.itinerary.map(((e,s)=>(0,A.jsxs)("div",{className:" bg-[#EAF2FF] shadow my-2 rounded-lg flex ",style:{height:"120px"},children:[(0,A.jsx)("div",{className:"w-[10%] rounded-l-lg bg-[#0D47A1] h-full text-white flex flex-col justify-center font-bold",children:(0,A.jsx)("span",{className:"rotated-text",children:e.day})}),(0,A.jsx)("div",{className:"text-gray-600 overflow-scroll p-2",children:e.description})]},s)))})]}),"package"===H.selected_info&&(0,A.jsxs)("div",{className:"my-2 mx-1",children:[(0,A.jsxs)("div",{className:"my-6 px-1",children:[(0,A.jsx)("div",{className:"bg-stone-200 font-PoppinsMedium text-base rounded-t-xl w-fit py-1 px-4",children:(0,A.jsx)("p",{children:"Tax And Fees"})}),(0,A.jsxs)("div",{className:"w-full py-4 flex-wrap rounded-b-xl rounded-tr-xl bg-stone-100 p-2 flex",children:[(0,A.jsxs)("p",{className:"font-RedHatLight",children:["Tax of ",B.details.currency," ",B.details.tax_fees?B.details.tax_fees:0," applicable per unit"]}),(0,A.jsxs)("p",{className:"font-RedHatLight",children:["Discount of ",B.details.currency," ",B.details.discount?B.details.discount:0," applicable per unit"]})]})]}),(0,A.jsxs)("div",{className:"my-6 px-1",children:[(0,A.jsx)("div",{className:"bg-stone-200 font-PoppinsMedium text-base rounded-t-xl w-fit py-1 px-4",children:(0,A.jsx)("p",{children:"Included In Package"})}),(0,A.jsx)("div",{className:"w-full flex-wrap rounded-b-xl rounded-tr-xl bg-stone-100 p-2 flex",children:B.details.included_in_package.map((e=>(0,A.jsx)("div",{className:"w-fit px-4 font-Nunito py-1 text-base m-1 rounded-full bg-stone-600 text-white border ",children:e},e)))})]}),(0,A.jsxs)("div",{className:"my-6 px-1",children:[(0,A.jsx)("div",{className:"bg-rose-200 font-PoppinsMedium text-base rounded-t-xl w-fit py-1 px-4",children:(0,A.jsx)("p",{children:"Cancellation Policy"})}),(0,A.jsx)("div",{className:"w-full flex-wrap rounded-b-xl rounded-tr-xl bg-rose-100 p-2 flex",children:(0,A.jsx)("p",{className:"my-4 text-base font-RedHatLight",children:B.details.cancellation_terms})})]})]})]}),(0,A.jsxs)("div",{className:"flex my-2 sticky bottom-0 left-0 w-full",children:[(0,A.jsxs)("div",{className:"flex w-1/2 mx-1 bg-[#F4FBFF] p-2 items-center justify-evenly rounded-md border border-[#10A3FF]",children:[(0,A.jsx)("p",{className:"text-xs font-RedHatLight",children:"Total cost"}),(0,A.jsxs)("p",{children:[B.details.currency," ",(B.details.base_price-B.details.discount+B.details.tax_fees)*H.selected_spots]})]}),(0,A.jsx)("div",{onClick:()=>X("summary"),className:"cursor-pointer mx-1 flex w-1/2 bg-[#FBB428] rounded-md justify-center items-center",children:(0,A.jsx)("p",{className:"font-Nunito mr-4",children:"Book Now"})})]}),G.length>0&&(0,A.jsxs)("div",{className:"mt-10",children:[(0,A.jsx)("p",{className:"pl-2 font-PoppinsMedium",children:"More From Organiser"}),(0,A.jsx)("hr",{}),(0,A.jsx)("div",{className:"mt-4 p-1 grid gap-1 grid-cols-2",children:G.filter((e=>e.product_service_id!=L)).map((e=>(0,A.jsxs)("div",{className:"p-1 bg-[#F8F8F8]",onClick:()=>le(e.product_service_id,String(e.title).replace(/ /g,"-")),children:[(0,A.jsx)("img",{src:e.thumbnailimg,className:"w-full rounded aspect-square",alt:"package thumbnail"}),(0,A.jsx)("p",{className:"text-stone-600 mt-2 w-full overflow-clip",children:e.title}),(0,A.jsxs)("p",{className:"text-stone-500 text-xs mt-1 w-full overflow-clip",children:[e.duration," Days"]}),e.categories.slice(0,2).map((e=>(0,A.jsx)("p",{className:" text-xs underline mt-1 text-stone-500",children:e}))),(0,A.jsxs)("p",{className:"w-full mt-3 overflow-clip",children:["INR ",parseInt(e.price)]})]},e.product_service_id)))})]})]}),B&&"package"===H.display_mode&&(0,A.jsxs)("div",{className:"w-full my-10 mobile:hidden  relative",children:[(0,A.jsxs)("div",{className:"w-full h-[60vh] flex justify-center",children:[T.length>0&&(0,A.jsx)("img",{className:"w-1/5 rounded-xl mx-2 h-full object-cover",src:null!==T&&void 0!==T&&T.length?null===(F=T[(z-1+(null===T||void 0===T?void 0:T.length))%(null===T||void 0===T?void 0:T.length)])||void 0===F?void 0:F.src:"",alt:"package cover image"}),T.length>0&&(0,A.jsx)("img",{className:"w-3/5 rounded-xl mx-2 h-full object-cover",src:null!==T&&void 0!==T&&T.length?null===(P=T[z])||void 0===P?void 0:P.src:"",alt:"package cover image"}),T.length>0&&(0,A.jsx)("img",{className:"w-1/5 rounded-xl mx-2 h-full object-cover",src:null!==T&&void 0!==T&&T.length?null===(I=T[(z+1+(null===T||void 0===T?void 0:T.length))%(null===T||void 0===T?void 0:T.length)])||void 0===I?void 0:I.src:"",alt:"package cover image"})]}),(0,A.jsxs)("div",{className:"w-full h-14 mt-2 mb-16 flex justify-center",children:[(0,A.jsx)("div",{onClick:()=>Y((e=>(e-1+(null===T||void 0===T?void 0:T.length))%(null===T||void 0===T?void 0:T.length))),className:"h-full mr-2 aspect-square rounded-full border flex justify-center items-center border-slate-200",children:(0,A.jsx)("img",{src:j.A,width:"30px",className:" rotate-90 rounded-full aspect-square "})}),(0,A.jsx)("div",{onClick:()=>Y((e=>(e+1+(null===T||void 0===T?void 0:T.length))%(null===T||void 0===T?void 0:T.length))),className:"h-full ml-2 aspect-square rounded-full border flex justify-center items-center border-slate-200",children:(0,A.jsx)("img",{src:j.A,width:"30px",className:" -rotate-90 rounded-full aspect-square "})})]}),(0,A.jsxs)("div",{className:"w-full px-24",children:[(0,A.jsx)("p",{className:"text-6xl font-PoppinsMedium",children:B.title}),(0,A.jsxs)("div",{className:"w-full mt-8 h-20 grid grid-cols-4 gap-4",children:[(0,A.jsxs)("div",{className:"w-full flex items-center ",children:[(0,A.jsx)("img",{src:r.A,width:"60px",className:"p-4 border border-stone-300 rounded-xl"}),(0,A.jsxs)("div",{className:"ml-2",children:[(0,A.jsx)("p",{className:"font-PoppinsMedium text-xl",children:"Duration"}),(0,A.jsxs)("p",{className:"text-stone-600 font-Nunito",children:[B.details.duration," Days"]})]})]}),(0,A.jsxs)("div",{className:"w-full flex items-center ",children:[(0,A.jsx)("img",{src:d.A,width:"60px",className:"p-4 border border-stone-300 rounded-xl"}),(0,A.jsxs)("div",{className:"ml-2",children:[(0,A.jsx)("p",{className:"font-PoppinsMedium text-xl",children:"Destination"}),(0,A.jsx)("p",{className:"text-stone-600 font-Nunito",children:B.details.destination})]})]}),(0,A.jsxs)("div",{className:"w-full flex items-center ",children:[(0,A.jsx)("img",{src:o.A,width:"60px",className:"p-4 border border-stone-300 rounded-xl"}),(0,A.jsxs)("div",{className:"ml-2",children:[(0,A.jsx)("p",{className:"font-PoppinsMedium text-xl",children:"Slots Available"}),(0,A.jsx)("p",{className:"text-stone-600 font-Nunito",children:B.schedules.length?B.schedules[0].availability:0})]})]}),(0,A.jsxs)("div",{className:"w-full flex items-center ",children:[(0,A.jsx)("img",{src:_.A,width:"60px",className:"p-4 border border-stone-300 rounded-xl"}),(0,A.jsxs)("div",{className:"ml-2",children:[(0,A.jsx)("p",{className:"font-PoppinsMedium text-xl",children:"Price"}),(0,A.jsxs)("p",{className:"text-stone-600 font-Nunito",children:[B.details.currency," ",B.details.base_price," per Slot"]})]})]})]}),(0,A.jsxs)("div",{className:"mt-20 grid gap-4 grid-cols-3",children:[(0,A.jsxs)("div",{className:"col-span-2",children:[(0,A.jsxs)("div",{className:"",children:[(0,A.jsxs)("div",{className:"flex justify-between w-full items-center",children:[(0,A.jsx)("p",{className:"text-3xl font-PoppinsMedium",children:"About Package"}),(0,A.jsxs)("div",{className:"flex justify-end",children:[(0,A.jsx)("img",{onClick:ae,className:"bg-stone-100 mx-1 h-3/4 p-2 rounded aspect-square",src:w,alt:"share icon"}),(0,A.jsx)("img",{onClick:U.includes(B.product_service_id)?ce:ie,className:"bg-stone-100 h-3/4 p-2 rounded aspect-square",src:U.includes(B.product_service_id)?y:k,alt:"favorite icon"})]})]}),(0,A.jsx)("p",{className:"mt-4 font-Nunito",children:B.short_description}),(0,A.jsx)("div",{className:"flex my-4",children:B.categoriesInfo.map((e=>(0,A.jsx)("p",{className:"underline mr-2 font-Nunito text-stone-500 text-sm",children:e.category_name})))})]}),(0,A.jsxs)("div",{className:" mt-8 ",children:[(0,A.jsx)("p",{className:"text-3xl font-PoppinsMedium",children:"Included in Package"}),(0,A.jsx)("div",{className:" w-full mt-2 flex flex-wrap",children:B.details.included_in_package.map((e=>(0,A.jsx)("div",{className:"flex m-1 px-6 text-white py-2 justify-between rounded-full bg-stone-700 w-fit ",children:(0,A.jsx)("p",{className:"text-base font-Nunito",children:e})},e)))})]}),(0,A.jsxs)("div",{className:"mt-8  h-fit",children:[(0,A.jsx)("p",{className:"text-3xl font-PoppinsMedium",children:"Package Initnerary"}),(0,A.jsxs)("div",{className:"py-2 grid grid-cols-[auto_1fr] gap-4",children:[(0,A.jsx)("div",{className:"flex flex-col items-center overflow-scroll ",children:B.details.itinerary&&B.details.itinerary.map(((e,s)=>(0,A.jsxs)("div",{className:"relative flex flex-col mt-2 items-center",style:{height:"120px"},children:[(0,A.jsx)("div",{className:"w-6 h-6 bg-[#0D47A1] rounded-full flex items-center justify-center text-white",children:s+1}),(0,A.jsx)("div",{className:"line-segment"})]})))}),(0,A.jsx)("div",{className:"",children:B.details.itinerary&&B.details.itinerary.map(((e,s)=>(0,A.jsxs)("div",{className:" bg-[#EAF2FF] shadow my-2 rounded-lg flex ",style:{height:"120px"},children:[(0,A.jsx)("div",{className:"w-[5%] rounded-l-lg bg-[#0D47A1] h-full text-white flex flex-col justify-center font-bold",children:(0,A.jsx)("span",{className:"rotated-text",children:e.day})}),(0,A.jsx)("div",{className:"text-gray-600 overflow-scroll p-2",children:e.description})]},s)))})]})]})]}),(0,A.jsxs)("div",{className:"col-span-1 w-full",children:[(0,A.jsxs)("div",{className:"w-full rounded-xl border border-stone-300 p-4",children:[(0,A.jsx)("p",{className:" font-PoppinsMedium",children:"Select Your slots"}),(0,A.jsxs)("div",{className:"flex justify-between my-2 h-10 rounded-full border border-[#10A3FF]",children:[(0,A.jsx)("img",{onClick:J,className:" cursor-pointer aspect-square rounded-l-full border border-[#1E90FF]",width:"25px",src:f,alt:"slot add icon"}),(0,A.jsxs)("div",{className:"flex justify-center items-center",children:[(0,A.jsx)("img",{src:o.A,className:" aspect-square",width:"25px"}),(0,A.jsx)("p",{className:"",children:H.selected_spots})]}),(0,A.jsx)("img",{onClick:$,className:" cursor-pointer rounded-r-full bg-[#1E90FF]",width:"25px",src:p.A,alt:"slot add icon"})]}),(0,A.jsx)("p",{className:" mt-8 font-PoppinsMedium",children:"Select Your Schedule"}),(0,A.jsx)("div",{className:"w-full h-fit mt-2 flex-nowrap flex flex-row overflow-x-scroll",children:B.schedules.map((e=>{let s=(0,x.r6)(e.start_datetime),t=(0,x.r6)(e.end_datetime);return(0,A.jsxs)("div",{onClick:()=>V(e.schedule_id),style:e.schedule_id===H.selected_schedule?{backgroundColor:"#7E6CEF",color:"white"}:{},className:"w-3/4 mr-4 text-sm p-2 border border-[#1E90FF] rounded-md font-RedHatLight flex-shrink-0",children:[(0,A.jsxs)("div",{className:" flex py-2 justify-between",children:[(0,A.jsx)("p",{children:s}),(0,A.jsxs)("div",{className:"flex ",children:[(0,A.jsx)("img",{src:o.A,width:"20px",alt:"schedule availability"}),(0,A.jsxs)("p",{children:[e.availability," Available"]})]})]}),(0,A.jsxs)("div",{className:" flex py-2 justify-between",children:[(0,A.jsx)("p",{children:t}),(0,A.jsxs)("div",{className:"flex ",children:[(0,A.jsx)("img",{src:g,className:"mr-2",width:"20px",alt:"schedule availability"}),(0,A.jsx)("p",{children:e.location})]})]})]},e.schedule_id)}))}),B.details.accommodation_sharing&&(0,A.jsxs)("div",{className:"w-full",children:[(0,A.jsxs)("div",{className:"w-full mt-8 flex justify-between items-center",children:[(0,A.jsx)("p",{className:"font-PoppinsMedium",children:"Select Accommodation Sharing"}),(0,A.jsx)("p",{onClick:e=>q({...H,display_sharing_modal:!0}),className:"float-right text-xs cursor-pointer underline text-blue",children:"More Info"})]}),(0,A.jsx)("div",{className:"rounded-md bg-[#F7F7F7] h-fit mt-2 overflow-scroll flex flex-shrink-0 p-2",children:null===(R=B.details.accomodation_sharing_options)||void 0===R?void 0:R.map((e=>(0,A.jsxs)("div",{onClick:s=>ee(e.id),className:"w-2/5 shrink-0 mr-2 font-Nunito h-fit rounded-md bg-white cursor-pointer",children:[(0,A.jsx)("p",{className:"w-full px-2 py-1 rounded-t-md text-center bg-stone-800 text-white",children:e.sharing_mode}),(0,A.jsxs)("p",{style:e.id==H.selected_sharing?{backgroundColor:"#7E6CEF",color:"white"}:{},className:"p-2 rounded-b-md text-center text-base",children:["Base Price + ",B.details.currency," ",e.additional_Price]})]})))})]}),(0,A.jsx)("p",{className:" mt-8 font-PoppinsMedium",children:"Discount And Tax"}),(0,A.jsxs)("div",{className:"w-full rounded-xl border mt-2 p-2 border-stone-400",children:[(0,A.jsxs)("p",{className:"font-nunito text-xs text-stone-500",children:["Tax of ",B.details.currency," ",B.details.tax_fees?B.details.tax_fees:0," applicable per unit"]}),(0,A.jsxs)("p",{className:"font-nunito text-xs text-stone-500",children:["Discount of ",B.details.currency," ",B.details.discount?B.details.discount:0," applicable per unit"]})]}),(0,A.jsxs)("div",{className:"mt-8 flex justify-between",children:[(0,A.jsx)("p",{className:"font-PoppinsMedium",children:"Total Amount"}),(0,A.jsxs)("p",{children:[B.details.currency," ",(B.details.base_price-B.details.discount+B.details.tax_fees)*H.selected_spots]})]}),(0,A.jsx)("div",{onClick:()=>X("summary"),className:"cursor-pointer py-2 mx-auto mt-4 flex w-1/2 bg-[#FBB428] rounded-full justify-center items-center",children:(0,A.jsx)("p",{className:"font-Nunito",children:"Book Now"})})]}),(0,A.jsxs)("div",{className:"bg-[#FFEFEF] rounded-xl mt-4 p-4",children:[(0,A.jsx)("p",{className:"font-PoppinsMedium",children:"Cancellation Policy"}),(0,A.jsx)("p",{className:"font-nunito text-xs mt-2 text-stone-500",children:B.details.cancellation_terms})]})]})]}),G.length>0&&(0,A.jsxs)("div",{className:"mt-10",children:[(0,A.jsx)("p",{className:"pl-2 text-2xl font-PoppinsMedium",children:"More From Organiser"}),(0,A.jsx)("hr",{}),(0,A.jsx)("div",{className:"mt-4 p-1 flex overflow-scroll flex-nowrap",children:G.filter((e=>e.product_service_id!=L)).map((e=>(0,A.jsxs)("div",{className:"p-1 w-1/6 flex-shrink-0 bg-[#F8F8F8]",onClick:()=>le(e.product_service_id,String(e.title).replace(/ /g,"-")),children:[(0,A.jsx)("img",{src:e.thumbnailimg,className:"w-full rounded aspect-square",alt:"package thumbnail"}),(0,A.jsx)("p",{className:"text-stone-600 mt-2 w-full overflow-clip",children:e.title}),(0,A.jsxs)("p",{className:"text-stone-500 text-xs mt-1 w-full overflow-clip",children:[e.duration," Days"]}),e.categories.slice(0,2).map((e=>(0,A.jsx)("p",{className:" text-xs underline mt-1 text-stone-500",children:e}))),(0,A.jsxs)("p",{className:"w-full mt-3 overflow-clip",children:["INR ",parseInt(e.price)]})]},e.product_service_id)))})]})]})]}),B&&H.checkout_info&&"summary"===H.display_mode&&(0,A.jsxs)("div",{className:"",children:[(0,A.jsxs)("div",{className:"flex p-2 border border-[#10A3FF] my-2 mx-2 rounded-md",children:[(0,A.jsx)("img",{onClick:()=>X("package"),className:"mr-4",src:m.A,width:"15px",alt:"back button"}),"Booking Overview"]}),(0,A.jsxs)("div",{className:"bg-[#F4FBFF] my-4 p-2",children:[(0,A.jsx)("p",{className:"font-RedHatLight text-xs my-2",children:"PACKAGE NAME"}),(0,A.jsx)("p",{className:"my-1",children:B.title}),(0,A.jsx)("hr",{}),(0,A.jsx)("p",{className:"font-RedHatLight text-center text-xs my-2",children:"SCHEDULE INFO"}),B.schedules.filter((e=>e.schedule_id==H.selected_schedule)).map((e=>(0,A.jsxs)("div",{className:"my-2",children:[(0,A.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,A.jsx)("p",{className:"font-RedHatLight w-1/2",children:"Start Date"}),(0,A.jsx)("p",{className:"w-1/2",children:(0,x.r6)(e.start_datetime)})]}),(0,A.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,A.jsx)("p",{className:"font-RedHatLight w-1/2",children:"End Date"}),(0,A.jsx)("p",{className:"w-1/2",children:(0,x.r6)(e.end_datetime)})]}),(0,A.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,A.jsx)("p",{className:"font-RedHatLight w-1/2",children:"Pickup Location"}),(0,A.jsx)("p",{className:"w-1/2",children:e.location})]})]},e.schedule_id))),(0,A.jsx)("hr",{}),(0,A.jsxs)("div",{className:"my-2",children:[(0,A.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,A.jsx)("p",{className:"font-RedHatLight w-1/2",children:"Slots Booked"}),(0,A.jsx)("p",{className:"w-1/2",children:H.checkout_info.slots})]}),(0,A.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,A.jsx)("p",{className:"font-RedHatLight w-1/2",children:"Included Items"}),(0,A.jsx)("p",{className:"w-1/2",children:B.details.included_in_package.join(", ")})]})]}),(0,A.jsx)("hr",{}),(0,A.jsx)("p",{className:"font-RedHatLight text-center text-xs my-2",children:"COST BREAKDOWN"}),(0,A.jsxs)("div",{className:"my-2",children:[(0,A.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,A.jsx)("p",{className:"font-RedHatLight w-1/2",children:"Base Price"}),(0,A.jsxs)("p",{className:"w-1/2",children:[H.checkout_info.currency," ",H.checkout_info.base_price]})]}),(0,A.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,A.jsx)("p",{className:"font-RedHatLight w-1/2",children:"Accommodation Sharing"}),(0,A.jsx)("p",{className:"w-1/2",children:H.checkout_info.accommodation_sharing?H.checkout_info.accomodation_sharing_options.filter((e=>e.id==H.selected_sharing))[0].sharing_mode:"No"})]}),(0,A.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,A.jsx)("p",{className:"font-RedHatLight w-1/2",children:"Sharing Cost"}),(0,A.jsx)("p",{className:"w-1/2",children:H.checkout_info.accommodation_sharing?H.checkout_info.currency+" "+H.checkout_info.accomodation_sharing_options.filter((e=>e.id==H.selected_sharing))[0].additional_Price:"No"})]}),(0,A.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,A.jsx)("p",{className:"font-RedHatLight w-1/2",children:"Discount"}),(0,A.jsxs)("p",{className:"w-1/2",children:[H.checkout_info.currency," ",H.checkout_info.discount]})]}),(0,A.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,A.jsx)("p",{className:"font-RedHatLight w-1/2",children:"Taxes"}),(0,A.jsxs)("p",{className:"w-1/2",children:[H.checkout_info.currency," ",H.checkout_info.tax_fees]})]}),(0,A.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,A.jsx)("p",{className:"font-RedHatLight w-1/2",children:"Units"}),(0,A.jsx)("p",{className:"w-1/2",children:H.checkout_info.slots})]}),(0,A.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,A.jsx)("p",{className:"font-RedHatLight w-1/2",children:"Total Amount"}),(0,A.jsxs)("p",{className:"w-1/2",children:[H.checkout_info.currency," ",H.checkout_info.total_cost]})]})]}),(0,A.jsx)("hr",{}),(0,A.jsx)("button",{onClick:()=>{let e=N.A.getState().authentication.authToken||localStorage.getItem("authToken");(0,h.sH)({product_service_id:B.product_service_id,schedule_id:H.selected_schedule,user_token:e,number_of_slots:H.selected_spots,total_price:H.selected_spots*(B.details.base_price-B.details.discount+B.details.tax_fees),booking_status:"pending",payment_status:"unpaid",sharing_mode:B.details.accommodation_sharing?H.selected_sharing:null,mobile:H.mobile}).then((e=>{(0,c.Ay)(e.data.message,{style:{background:"#02B41F",borderRadius:"5px",fontSize:"14px",padding:"2px",color:"white"},duration:5e3}),E("/booking/success")})).catch((e=>{(0,c.Ay)(e.response.data.message,{style:{background:"#E90000",borderRadius:"5px",fontSize:"12px",padding:"2px",color:"white"},duration:5e3}),e.response.staus}))},className:"w-full p-2 bg-[#FBB428] font-Nunito rounded-md mt-2",children:"Complete Booking"})]})]}),(0,A.jsx)(n.A,{})]})}},6435:(e,s,t)=>{t.d(s,{A:()=>n});var l=t(9950),a=t(3300),i=t(4414);const n=e=>{const[s,t]=(0,l.useState)({...e});return(0,i.jsx)("div",{id:"backdrop",onClick:s=>{s.preventDefault(),!1!==e.closeOnDocumentClick&&"backdrop"===s.target.id&&e.close()},style:{display:e.open?"inherit":"none"},className:"fixed z-10 left-0 top-0 w-[100vw] h-[100vh] bg-[#1b1818c7] flex justify-center items-center",children:(0,i.jsxs)("section",{className:"fixed h-auto min-w-[20vw] bg-white rounded-lg p-4 ",children:[(0,i.jsx)("div",{onClick:e.close,className:"mobile:hidden mobile:-top-10 absolute p-2 bg-slate-300 rounded-full -top-6 -right-6 hover:scale-105 border border-dotted border-black",children:(0,i.jsx)("img",{className:"",width:"",src:a.A,alt:"modal Close Btn"})}),l.Children.map(e.children,(s=>l.cloneElement(s,e)))]})})}}}]);