"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[319],{7231:(e,s,l)=>{l.d(s,{A:()=>t});l(9950);const t=l.p+"static/media/AddiconWhite.5100a9f308c15b352ca926a827147e82.svg"},1003:(e,s,l)=>{l.d(s,{A:()=>t});l(9950);const t=l.p+"static/media/arrow-left-solid.07f8c39113e8fb15b640ecafe6256813.svg"},319:(e,s,l)=>{l.r(s),l.d(s,{default:()=>A});var t=l(9950),a=l(8429),i=(l(1840),l(2832)),d=l(3999),n=(l(8341),l(5887)),c=l(9663),r=l(5916),o=l(8606),m=l(1003),x=l(7227),u=l(1908),h=l(8583),p=l(7231);const f=l.p+"static/media/minus.f186aa3ef5ab5ee608137ba8d3ac5e42.svg";const j=l.p+"static/media/PickupIcon.3e64c2d928b08dc013a3414de9a28523.svg";var g=l(9426),N=l(9749),b=l(6435),v=l(863),w=l(3696);const _=l.p+"static/media/ShareIcon.c34a3955001498073421e4090e21998a.svg";const y=l.p+"static/media/Love.e1f04c07441e7e041f03c55646a9f918.svg";var k=l(4414);const A=e=>{const s=(0,a.Zp)(),{packagename:l,packageid:A}=(0,a.g)(),[C,F]=(0,t.useState)(void 0),[P,S]=(0,t.useState)({inc_collapsed:!0,canc_collapsed:!0,selected_spots:1,selected_info:"package",selected_schedule:void 0,taxes_collapsed:!0,display_mode:"package",login_warning_modal:!1,guest_user_signin:!1,guest_full_name:"",guest_email:"",guest_phone:"",guest_otp:""}),[L,R]=(0,t.useState)([]),[E,H]=(0,t.useState)(0);(0,t.useEffect)((()=>{(0,u.xG)(A).then((e=>{F(e.data.result?e.data.result[0]:{}),q(e.data.result[0].images)})).catch((e=>{console.log(e)}))}),[]);const M=()=>{S({...P,selected_spots:P.selected_spots+1})},B=()=>{1!==P.selected_spots&&S({...P,selected_spots:P.selected_spots-1})},D=e=>{S({...P,selected_info:e})},I=e=>{P.selected_schedule?(0,h.Fg)({product_service_id:C.product_service_id,schedule_id:P.selected_schedule,user_token:N.A.getState().authentication.authToken||localStorage.getItem("authToken"),number_of_slots:P.selected_spots}).then((s=>{S({...P,display_mode:e,checkout_info:s.data.result.checkout_info})})).catch((e=>{(0,n.Ay)(e.response.data.message,{style:{background:"#E90000",borderRadius:"5px",fontSize:"12px",padding:"2px",color:"white"},duration:5e3}),401==e.response.status&&S({...P,login_warning_modal:!0})})):(0,n.Ay)("Schedule not selected",{style:{background:"#E90000",borderRadius:"5px",fontSize:"12px",padding:"2px",color:"white"},duration:5e3})},T=e=>{S({...P,selected_schedule:e})},q=e=>{if(e.length){const s=e.map((e=>{const s=new Image;return s.src=e,s}));R(s),setInterval((()=>{H((s=>(s+1)%e.length))}),3e3)}},O=(e,s)=>{S((l=>({...l,[e]:s})))};return(0,k.jsxs)("div",{className:"w-[100vw] h-[100vh",children:[(0,k.jsx)(i.A,{}),(0,k.jsx)(n.l$,{}),(0,k.jsx)("div",{className:"flex justify-center items-center",children:(0,k.jsx)(b.A,{open:P.login_warning_modal,close:()=>{S({...P,login_warning_modal:!1})},closeOnDocumentClick:!0,children:(0,k.jsxs)("div",{children:[!P.guest_user_signin&&(0,k.jsxs)("div",{className:"text-center",children:["Sign Up to Save Your Booking!",(0,k.jsx)("p",{className:"text-sm",children:"We're almost there! Creating an account allows you to view and manage all your bookings in one place and enjoy a seamless experience on your trips. It only takes a moment!"}),(0,k.jsx)("button",{onClick:e=>s("/auth",{state:{redirect:window.location.pathname,mode:"SignIn"}}),className:" py-2 px-4 mt-10 mx-2 rounded-md bg-black text-white",children:"Login / Sign Up"}),(0,k.jsx)("button",{onClick:e=>S((e=>({...e,guest_user_signin:!0}))),className:" p-2 rounded-md text-black border-black border",children:"Continue as Guest"})]}),P.guest_user_signin&&(0,k.jsxs)("div",{className:"text-center",children:["Complete Your Booking as a Guest",(0,k.jsx)("p",{className:"my-4",children:"Just a few details, and you're all set! You'll receive a confirmation and can manage your booking anytime."}),(0,k.jsx)("p",{className:"text-left text-sm font-RedHatLight",children:"Full Name"}),(0,k.jsx)("input",{value:P.guest_full_name,onChange:e=>O("guest_full_name",e.target.value),className:"w-full p-1 outline-none border-slate-300 border rounded-md"}),(0,k.jsx)("p",{className:"text-left text-sm font-RedHatLight",children:"Mobile"}),(0,k.jsx)("input",{value:P.guest_phone,onChange:e=>O("guest_phone",e.target.value),maxLength:10,className:"w-full p-1 outline-none border-slate-300 border rounded-md"}),(0,k.jsx)("p",{className:"text-left text-sm font-RedHatLight",children:"Email"}),(0,k.jsx)("input",{value:P.guest_email,onChange:e=>O("guest_email",e.target.value),className:"w-full p-1 outline-none border-slate-300 border rounded-md"}),(0,k.jsx)("p",{className:"text-left text-sm font-RedHatLight",children:"Enter OTP"}),(0,k.jsx)("input",{value:P.guest_otp,onChange:e=>O("guest_otp",e.target.value),maxLength:10,className:"w-full p-1 outline-none border-slate-300 border rounded-md"}),(0,k.jsx)("button",{onClick:()=>{(0,h.mW)({full_name:P.guest_full_name,email:P.guest_email,mobile:P.guest_phone}).then((e=>{(0,x.Zx)(e.data.message)})).catch((e=>{(0,x.Ax)(e.response.data.message)}))},className:" py-2 px-4 mt-10 mx-2 rounded-md bg-black text-white",children:"Send OTP"}),(0,k.jsx)("button",{onClick:()=>{(0,h.OB)({full_name:P.guest_full_name,email:P.guest_email,mobile:P.guest_phone,otp:P.guest_otp,promoter_id:localStorage.getItem("promoter_id")||null}).then((e=>{localStorage.setItem("authToken",e.data.accesstoken),localStorage.setItem("refreshToken",e.data.refreshtoken),N.A.dispatch((0,v.mP)({...e.data,username:null})),S((e=>({...e,guest_email:"",guest_full_name:"",guest_otp:"",guest_phone:"",guest_user_signin:!1,login_warning_modal:!1})))})).catch((e=>{(0,x.Ax)(e.response.data.message)}))},className:" py-2 px-4 mt-10 mx-2 rounded-md bg-black text-white",children:"Confirm and Continue"}),(0,k.jsx)("button",{onClick:e=>s("/auth",{state:{redirect:window.location.pathname,mode:"SignIn"}}),className:" p-2 rounded-md text-black ",children:"Create an Account Instead"})]})]})})}),C&&"package"===P.display_mode&&(0,k.jsxs)("div",{className:"w-full hidden mobile:flex mobile:flex-col relative",children:[L.length>0&&(0,k.jsx)("img",{className:"w-full aspect-video object-contain",src:null!==L&&void 0!==L&&L.length?L[E].src:"",alt:"package cover image"}),(0,k.jsx)("p",{className:"px-2 py-4 text-2xl font-PoppinsMedium",children:C.title}),(0,k.jsxs)("div",{className:"w-full grid grid-cols-2 mt-2 grid-rows-2 gap-5 px-2",children:[(0,k.jsxs)("div",{className:"flex",children:[(0,k.jsx)("img",{src:r.A,className:"h-10 p-2 aspect-square border-2 border-stone-300 rounded-full",alt:"duration"}),(0,k.jsxs)("div",{className:"pl-2",children:[(0,k.jsx)("p",{className:"font-PoppinsMedium text-sm",children:"Duration"}),(0,k.jsxs)("p",{className:"text-sm text-stone-700 font-Nunito",children:[C.details.duration," Days"]})]})]}),(0,k.jsxs)("div",{className:"flex",children:[(0,k.jsx)("img",{src:o.A,className:"h-10 p-2 aspect-square border-2 border-stone-300 rounded-full",alt:"duration"}),(0,k.jsxs)("div",{className:"pl-2",children:[(0,k.jsx)("p",{className:"font-PoppinsMedium text-sm",children:"Slots"}),(0,k.jsx)("p",{className:"text-sm text-stone-700 font-Nunito",children:C.schedules.length?C.schedules[0].availability:0})]})]}),(0,k.jsxs)("div",{className:"flex",children:[(0,k.jsx)("img",{src:c.A,className:"h-10 p-2 aspect-square border-2 border-stone-300 rounded-full",alt:"duration"}),(0,k.jsxs)("div",{className:"pl-2",children:[(0,k.jsx)("p",{className:"font-PoppinsMedium text-sm",children:"Destination"}),(0,k.jsx)("p",{className:"text-sm text-stone-700 font-Nunito",children:C.details.destination})]})]}),(0,k.jsxs)("div",{className:"flex",children:[(0,k.jsx)("img",{src:w.A,className:"h-10 p-2 aspect-square border-2 border-stone-300 rounded-full",alt:"duration"}),(0,k.jsxs)("div",{className:"pl-2",children:[(0,k.jsx)("p",{className:"font-PoppinsMedium text-sm",children:"Price"}),(0,k.jsxs)("p",{className:"text-sm text-stone-700 font-Nunito",children:[C.details.currency," ",C.details.base_price," per slot"]})]})]}),(0,k.jsxs)("div",{className:"flex justify-between w-3/4 mt-4 mb-4 p-1 rounded-xl bg-stone-100",children:[(0,k.jsx)("img",{onClick:B,className:" rounded-full bg-white border border-[#1E90FF]",width:"25px",src:f,alt:"slot add icon"}),(0,k.jsxs)("div",{className:"flex justify-center",children:[(0,k.jsx)("img",{src:o.A,className:" aspect-square",width:"25px"}),(0,k.jsx)("p",{className:"",children:P.selected_spots})]}),(0,k.jsx)("img",{onClick:M,className:" rounded-full bg-[#1E90FF]",width:"25px",src:p.A,alt:"slot add icon"})]}),(0,k.jsxs)("div",{className:"flex justify-end mt-4",children:[(0,k.jsx)("img",{className:"bg-stone-100 mx-1 h-3/4 p-2 rounded aspect-square",src:_,alt:"share icon"}),(0,k.jsx)("img",{className:"bg-stone-100 h-3/4 p-2 rounded aspect-square",src:y,alt:"favorite icon"})]})]}),(0,k.jsx)("hr",{}),(0,k.jsxs)("div",{className:"px-2 w-full mt-6",children:[(0,k.jsx)("p",{className:"font-RedHatLight font-semibold text-sm text-stone-600",children:"Select Your Departure Schedule"}),(0,k.jsx)("div",{className:"w-full mt-2 bg-stone-100 h-fit flex-nowrap flex flex-row overflow-x-scroll py-1 rounded",children:C.schedules.map((e=>{let s=(0,x.r6)(e.start_datetime),l=(0,x.r6)(e.end_datetime);return(0,k.jsxs)("div",{onClick:()=>T(e.schedule_id),style:e.schedule_id===P.selected_schedule?{backgroundColor:"#7E6CEF",color:"white"}:{},className:"w-3/4 mr-4 cursor-pointer bg-white text-sm p-2 border border-[#1E90FF] rounded-md font-RedHatLight flex-shrink-0",children:[(0,k.jsxs)("div",{className:" flex py-2 justify-between",children:[(0,k.jsx)("p",{children:s}),(0,k.jsxs)("div",{className:"flex ",children:[(0,k.jsx)("img",{src:o.A,width:"20px",alt:"schedule availability"}),(0,k.jsxs)("p",{children:[e.availability," Available"]})]})]}),(0,k.jsxs)("div",{className:" flex py-2 justify-between",children:[(0,k.jsx)("p",{children:l}),(0,k.jsxs)("div",{className:"flex ",children:[(0,k.jsx)("img",{src:j,className:"mr-2",width:"20px",alt:"schedule availability"}),(0,k.jsx)("p",{children:e.location})]})]})]},e.schedule_id)}))}),(0,k.jsx)("div",{className:"w-full flex justify-center",children:(0,k.jsx)("button",{onClick:()=>I("summary"),className:"bg-[#FBB428] mt-6 font-PoppinsMedium text-sm h-10 rounded-xl w-3/4",children:"Book Now"})})]}),(0,k.jsxs)("div",{className:"w-full px-2 mt-10",children:[(0,k.jsx)("p",{className:"font-PoppinsMedium text-lg",children:"About Package"}),(0,k.jsx)("p",{className:"font-Nunito text-stone-700 text-base mt-2",children:C.short_description}),(0,k.jsx)("div",{className:"flex my-2",children:C.categoriesInfo.map((e=>(0,k.jsx)("p",{className:"underline mr-2 font-Nunito text-stone-500 text-sm",children:e.category_name})))})]}),(0,k.jsxs)("div",{className:"mt-8 mx-2",children:[(0,k.jsxs)("div",{className:"flex justify-start",children:[(0,k.jsx)("p",{onClick:()=>D("itinerary"),className:"mr-8 ".concat("itinerary"==P.selected_info?"text-stone-800 border-b-2 border-stone-600":"text-stone-500"),children:"Itinerary"}),(0,k.jsx)("p",{onClick:()=>D("package"),className:"mr-8 ".concat("package"==P.selected_info?"text-stone-800 border-b-2 border-stone-600":"text-stone-500"),children:"More Details"})]}),(0,k.jsx)("hr",{})]}),(0,k.jsxs)("div",{className:"px-2",children:["itinerary"===P.selected_info&&(0,k.jsxs)("div",{className:"p-2 grid grid-cols-[auto_1fr] gap-4",children:[(0,k.jsx)("div",{className:"flex flex-col items-center overflow-scroll ",children:C.details.itinerary&&C.details.itinerary.map(((e,s)=>(0,k.jsxs)("div",{className:"relative flex flex-col mt-2 items-center",style:{height:"120px"},children:[(0,k.jsx)("div",{className:"w-6 h-6 bg-[#0D47A1] rounded-full flex items-center justify-center text-white",children:s+1}),(0,k.jsx)("div",{className:"line-segment"})]})))}),(0,k.jsx)("div",{className:"",children:C.details.itinerary&&C.details.itinerary.map(((e,s)=>(0,k.jsxs)("div",{className:" bg-[#EAF2FF] shadow my-2 rounded-lg flex ",style:{height:"120px"},children:[(0,k.jsx)("div",{className:"w-[10%] rounded-l-lg bg-[#0D47A1] h-full text-white flex flex-col justify-center font-bold",children:(0,k.jsx)("span",{className:"rotated-text",children:e.day})}),(0,k.jsx)("div",{className:"text-gray-600 overflow-scroll p-2",children:e.description})]},s)))})]}),"package"===P.selected_info&&(0,k.jsxs)("div",{className:"my-2 mx-1",children:[(0,k.jsxs)("div",{className:"my-6 px-1",children:[(0,k.jsx)("div",{className:"bg-stone-200 font-PoppinsMedium text-base rounded-t-xl w-fit py-1 px-4",children:(0,k.jsx)("p",{children:"Tax And Fees"})}),(0,k.jsxs)("div",{className:"w-full py-4 flex-wrap rounded-b-xl rounded-tr-xl bg-stone-100 p-2 flex",children:[(0,k.jsxs)("p",{className:"font-RedHatLight",children:["Tax of ",C.details.currency," ",C.details.tax_fees?C.details.tax_fees:0," applicable per unit"]}),(0,k.jsxs)("p",{className:"font-RedHatLight",children:["Discount of ",C.details.currency," ",C.details.discount?C.details.discount:0," applicable per unit"]})]})]}),(0,k.jsxs)("div",{className:"my-6 px-1",children:[(0,k.jsx)("div",{className:"bg-stone-200 font-PoppinsMedium text-base rounded-t-xl w-fit py-1 px-4",children:(0,k.jsx)("p",{children:"Included In Package"})}),(0,k.jsx)("div",{className:"w-full flex-wrap rounded-b-xl rounded-tr-xl bg-stone-100 p-2 flex",children:C.details.included_in_package.map((e=>(0,k.jsx)("div",{className:"w-fit px-4 font-Nunito py-1 text-base m-1 rounded-full bg-stone-600 text-white border ",children:e},e)))})]}),(0,k.jsxs)("div",{className:"my-6 px-1",children:[(0,k.jsx)("div",{className:"bg-rose-200 font-PoppinsMedium text-base rounded-t-xl w-fit py-1 px-4",children:(0,k.jsx)("p",{children:"Cancellation Policy"})}),(0,k.jsx)("div",{className:"w-full flex-wrap rounded-b-xl rounded-tr-xl bg-rose-100 p-2 flex",children:(0,k.jsx)("p",{className:"my-4 text-base font-RedHatLight",children:C.details.cancellation_terms})})]})]})]}),(0,k.jsxs)("div",{className:"flex my-2 sticky bottom-0 left-0 w-full",children:[(0,k.jsxs)("div",{className:"flex w-1/2 mx-1 bg-[#F4FBFF] p-2 items-center justify-evenly rounded-md border border-[#10A3FF]",children:[(0,k.jsx)("p",{className:"text-xs font-RedHatLight",children:"Total cost"}),(0,k.jsxs)("p",{children:[C.details.currency," ",(C.details.base_price-C.details.discount+C.details.tax_fees)*P.selected_spots]})]}),(0,k.jsx)("div",{onClick:()=>I("summary"),className:"cursor-pointer mx-1 flex w-1/2 bg-[#FBB428] rounded-md justify-center items-center",children:(0,k.jsx)("p",{className:"font-Nunito mr-4",children:"Book Now"})})]})]}),C&&"package"===P.display_mode&&(0,k.jsxs)("div",{className:"w-full my-10 mobile:hidden  relative",children:[(0,k.jsxs)("div",{className:"w-full h-[60vh] flex justify-center",children:[L.length>0&&(0,k.jsx)("img",{className:"w-1/5 rounded-xl mx-2 h-full object-cover",src:null!==L&&void 0!==L&&L.length?L[(E-1+(null===L||void 0===L?void 0:L.length))%(null===L||void 0===L?void 0:L.length)].src:"",alt:"package cover image"}),L.length>0&&(0,k.jsx)("img",{className:"w-3/5 rounded-xl mx-2 h-full object-cover",src:null!==L&&void 0!==L&&L.length?L[E].src:"",alt:"package cover image"}),L.length>0&&(0,k.jsx)("img",{className:"w-1/5 rounded-xl mx-2 h-full object-cover",src:null!==L&&void 0!==L&&L.length?L[(E+1+(null===L||void 0===L?void 0:L.length))%(null===L||void 0===L?void 0:L.length)].src:"",alt:"package cover image"})]}),(0,k.jsxs)("div",{className:"w-full h-14 mt-2 mb-16 flex justify-center",children:[(0,k.jsx)("div",{onClick:()=>H((e=>(e-1+(null===L||void 0===L?void 0:L.length))%(null===L||void 0===L?void 0:L.length))),className:"h-full mr-2 aspect-square rounded-full border flex justify-center items-center border-slate-200",children:(0,k.jsx)("img",{src:g.A,width:"30px",className:" rotate-90 rounded-full aspect-square "})}),(0,k.jsx)("div",{onClick:()=>H((e=>(e+1+(null===L||void 0===L?void 0:L.length))%(null===L||void 0===L?void 0:L.length))),className:"h-full ml-2 aspect-square rounded-full border flex justify-center items-center border-slate-200",children:(0,k.jsx)("img",{src:g.A,width:"30px",className:" -rotate-90 rounded-full aspect-square "})})]}),(0,k.jsxs)("div",{className:"w-full px-24",children:[(0,k.jsx)("p",{className:"text-6xl font-PoppinsMedium",children:C.title}),(0,k.jsxs)("div",{className:"w-full mt-8 h-20 grid grid-cols-4 gap-4",children:[(0,k.jsxs)("div",{className:"w-full flex items-center ",children:[(0,k.jsx)("img",{src:r.A,width:"60px",className:"p-4 border border-stone-300 rounded-xl"}),(0,k.jsxs)("div",{className:"ml-2",children:[(0,k.jsx)("p",{className:"font-PoppinsMedium text-xl",children:"Duration"}),(0,k.jsxs)("p",{className:"text-stone-600 font-Nunito",children:[C.details.duration," Days"]})]})]}),(0,k.jsxs)("div",{className:"w-full flex items-center ",children:[(0,k.jsx)("img",{src:c.A,width:"60px",className:"p-4 border border-stone-300 rounded-xl"}),(0,k.jsxs)("div",{className:"ml-2",children:[(0,k.jsx)("p",{className:"font-PoppinsMedium text-xl",children:"Destination"}),(0,k.jsx)("p",{className:"text-stone-600 font-Nunito",children:C.details.destination})]})]}),(0,k.jsxs)("div",{className:"w-full flex items-center ",children:[(0,k.jsx)("img",{src:o.A,width:"60px",className:"p-4 border border-stone-300 rounded-xl"}),(0,k.jsxs)("div",{className:"ml-2",children:[(0,k.jsx)("p",{className:"font-PoppinsMedium text-xl",children:"Slots Available"}),(0,k.jsx)("p",{className:"text-stone-600 font-Nunito",children:C.schedules.length?C.schedules[0].availability:0})]})]}),(0,k.jsxs)("div",{className:"w-full flex items-center ",children:[(0,k.jsx)("img",{src:w.A,width:"60px",className:"p-4 border border-stone-300 rounded-xl"}),(0,k.jsxs)("div",{className:"ml-2",children:[(0,k.jsx)("p",{className:"font-PoppinsMedium text-xl",children:"Price"}),(0,k.jsxs)("p",{className:"text-stone-600 font-Nunito",children:[C.details.currency," ",C.details.base_price," per Slot"]})]})]})]}),(0,k.jsxs)("div",{className:"mt-20 grid gap-4 grid-cols-3",children:[(0,k.jsxs)("div",{className:"col-span-2",children:[(0,k.jsxs)("div",{className:"",children:[(0,k.jsx)("p",{className:"text-3xl font-PoppinsMedium",children:"About Package"}),(0,k.jsx)("p",{className:"mt-4 font-Nunito",children:C.short_description}),(0,k.jsx)("div",{className:"flex my-4",children:C.categoriesInfo.map((e=>(0,k.jsx)("p",{className:"underline mr-2 font-Nunito text-stone-500 text-sm",children:e.category_name})))})]}),(0,k.jsxs)("div",{className:" mt-8 ",children:[(0,k.jsx)("p",{className:"text-3xl font-PoppinsMedium",children:"Included in Package"}),(0,k.jsx)("div",{className:" w-full mt-2 flex flex-wrap",children:C.details.included_in_package.map((e=>(0,k.jsx)("div",{className:"flex m-1 px-6 text-white py-2 justify-between rounded-full bg-stone-700 w-fit ",children:(0,k.jsx)("p",{className:"text-base font-Nunito",children:e})},e)))})]}),(0,k.jsxs)("div",{className:"mt-8  h-fit",children:[(0,k.jsx)("p",{className:"text-3xl font-PoppinsMedium",children:"Package Initnerary"}),(0,k.jsxs)("div",{className:"py-2 grid grid-cols-[auto_1fr] gap-4",children:[(0,k.jsx)("div",{className:"flex flex-col items-center overflow-scroll ",children:C.details.itinerary&&C.details.itinerary.map(((e,s)=>(0,k.jsxs)("div",{className:"relative flex flex-col mt-2 items-center",style:{height:"120px"},children:[(0,k.jsx)("div",{className:"w-6 h-6 bg-[#0D47A1] rounded-full flex items-center justify-center text-white",children:s+1}),(0,k.jsx)("div",{className:"line-segment"})]})))}),(0,k.jsx)("div",{className:"",children:C.details.itinerary&&C.details.itinerary.map(((e,s)=>(0,k.jsxs)("div",{className:" bg-[#EAF2FF] shadow my-2 rounded-lg flex ",style:{height:"120px"},children:[(0,k.jsx)("div",{className:"w-[5%] rounded-l-lg bg-[#0D47A1] h-full text-white flex flex-col justify-center font-bold",children:(0,k.jsx)("span",{className:"rotated-text",children:e.day})}),(0,k.jsx)("div",{className:"text-gray-600 overflow-scroll p-2",children:e.description})]},s)))})]})]})]}),(0,k.jsxs)("div",{className:"col-span-1 w-full",children:[(0,k.jsxs)("div",{className:"w-full rounded-xl border border-stone-300 p-4",children:[(0,k.jsx)("p",{className:" font-PoppinsMedium",children:"Select Your slots"}),(0,k.jsxs)("div",{className:"flex justify-between my-2 h-10 rounded-full border border-[#10A3FF]",children:[(0,k.jsx)("img",{onClick:B,className:" cursor-pointer aspect-square rounded-l-full border border-[#1E90FF]",width:"25px",src:f,alt:"slot add icon"}),(0,k.jsxs)("div",{className:"flex justify-center items-center",children:[(0,k.jsx)("img",{src:o.A,className:" aspect-square",width:"25px"}),(0,k.jsx)("p",{className:"",children:P.selected_spots})]}),(0,k.jsx)("img",{onClick:M,className:" cursor-pointer rounded-r-full bg-[#1E90FF]",width:"25px",src:p.A,alt:"slot add icon"})]}),(0,k.jsx)("p",{className:" mt-8 font-PoppinsMedium",children:"Select Your Schedule"}),(0,k.jsx)("div",{className:"w-full h-fit mt-2 flex-nowrap flex flex-row overflow-x-scroll",children:C.schedules.map((e=>{let s=(0,x.r6)(e.start_datetime),l=(0,x.r6)(e.end_datetime);return(0,k.jsxs)("div",{onClick:()=>T(e.schedule_id),style:e.schedule_id===P.selected_schedule?{backgroundColor:"#7E6CEF",color:"white"}:{},className:"w-3/4 mr-4 text-sm p-2 border border-[#1E90FF] rounded-md font-RedHatLight flex-shrink-0",children:[(0,k.jsxs)("div",{className:" flex py-2 justify-between",children:[(0,k.jsx)("p",{children:s}),(0,k.jsxs)("div",{className:"flex ",children:[(0,k.jsx)("img",{src:o.A,width:"20px",alt:"schedule availability"}),(0,k.jsxs)("p",{children:[e.availability," Available"]})]})]}),(0,k.jsxs)("div",{className:" flex py-2 justify-between",children:[(0,k.jsx)("p",{children:l}),(0,k.jsxs)("div",{className:"flex ",children:[(0,k.jsx)("img",{src:j,className:"mr-2",width:"20px",alt:"schedule availability"}),(0,k.jsx)("p",{children:e.location})]})]})]},e.schedule_id)}))}),(0,k.jsx)("p",{className:" mt-8 font-PoppinsMedium",children:"Discount And Tax"}),(0,k.jsxs)("div",{className:"w-full rounded-xl border mt-2 p-2 border-stone-400",children:[(0,k.jsxs)("p",{className:"font-nunito text-xs text-stone-500",children:["Tax of ",C.details.currency," ",C.details.tax_fees?C.details.tax_fees:0," applicable per unit"]}),(0,k.jsxs)("p",{className:"font-nunito text-xs text-stone-500",children:["Discount of ",C.details.currency," ",C.details.discount?C.details.discount:0," applicable per unit"]})]}),(0,k.jsxs)("div",{className:"mt-8 flex justify-between",children:[(0,k.jsx)("p",{className:"font-PoppinsMedium",children:"Total Amount"}),(0,k.jsxs)("p",{children:[C.details.currency," ",(C.details.base_price-C.details.discount+C.details.tax_fees)*P.selected_spots]})]}),(0,k.jsx)("div",{onClick:()=>I("summary"),className:"cursor-pointer py-2 mx-auto mt-4 flex w-1/2 bg-[#FBB428] rounded-full justify-center items-center",children:(0,k.jsx)("p",{className:"font-Nunito",children:"Book Now"})})]}),(0,k.jsxs)("div",{className:"bg-[#FFEFEF] rounded-xl mt-4 p-4",children:[(0,k.jsx)("p",{className:"font-PoppinsMedium",children:"Cancellation Policy"}),(0,k.jsx)("p",{className:"font-nunito text-xs mt-2 text-stone-500",children:C.details.cancellation_terms})]})]})]})]})]}),C&&P.checkout_info&&"summary"===P.display_mode&&(0,k.jsxs)("div",{className:"",children:[(0,k.jsxs)("div",{className:"flex p-2 border border-[#10A3FF] my-2 mx-2 rounded-md",children:[(0,k.jsx)("img",{onClick:()=>I("package"),className:"mr-4",src:m.A,width:"15px",alt:"back button"}),"Booking Overview"]}),(0,k.jsxs)("div",{className:"bg-[#F4FBFF] my-4 p-2",children:[(0,k.jsx)("p",{className:"font-RedHatLight text-xs my-2",children:"PACKAGE NAME"}),(0,k.jsx)("p",{className:"my-1",children:C.title}),(0,k.jsx)("hr",{}),(0,k.jsx)("p",{className:"font-RedHatLight text-center text-xs my-2",children:"SCHEDULE INFO"}),C.schedules.filter((e=>e.schedule_id==P.selected_schedule)).map((e=>(0,k.jsxs)("div",{className:"my-2",children:[(0,k.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,k.jsx)("p",{className:"font-RedHatLight w-1/2",children:"Start Date"}),(0,k.jsx)("p",{className:"w-1/2",children:(0,x.r6)(e.start_datetime)})]}),(0,k.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,k.jsx)("p",{className:"font-RedHatLight w-1/2",children:"End Date"}),(0,k.jsx)("p",{className:"w-1/2",children:(0,x.r6)(e.end_datetime)})]}),(0,k.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,k.jsx)("p",{className:"font-RedHatLight w-1/2",children:"Pickup Location"}),(0,k.jsx)("p",{className:"w-1/2",children:e.location})]})]},e.schedule_id))),(0,k.jsx)("hr",{}),(0,k.jsxs)("div",{className:"my-2",children:[(0,k.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,k.jsx)("p",{className:"font-RedHatLight w-1/2",children:"Slots Booked"}),(0,k.jsx)("p",{className:"w-1/2",children:P.checkout_info.slots})]}),(0,k.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,k.jsx)("p",{className:"font-RedHatLight w-1/2",children:"Included Items"}),(0,k.jsx)("p",{className:"w-1/2",children:C.details.included_in_package.join(", ")})]})]}),(0,k.jsx)("hr",{}),(0,k.jsx)("p",{className:"font-RedHatLight text-center text-xs my-2",children:"COST BREAKDOWN"}),(0,k.jsxs)("div",{className:"my-2",children:[(0,k.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,k.jsx)("p",{className:"font-RedHatLight w-1/2",children:"Base Price"}),(0,k.jsxs)("p",{className:"w-1/2",children:[P.checkout_info.currency," ",P.checkout_info.base_price]})]}),(0,k.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,k.jsx)("p",{className:"font-RedHatLight w-1/2",children:"Discount"}),(0,k.jsxs)("p",{className:"w-1/2",children:[P.checkout_info.currency," ",P.checkout_info.discount]})]}),(0,k.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,k.jsx)("p",{className:"font-RedHatLight w-1/2",children:"Taxes"}),(0,k.jsxs)("p",{className:"w-1/2",children:[P.checkout_info.currency," ",P.checkout_info.tax_fees]})]}),(0,k.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,k.jsx)("p",{className:"font-RedHatLight w-1/2",children:"Units"}),(0,k.jsx)("p",{className:"w-1/2",children:P.checkout_info.slots})]}),(0,k.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,k.jsx)("p",{className:"font-RedHatLight w-1/2",children:"Total Amount"}),(0,k.jsxs)("p",{className:"w-1/2",children:[P.checkout_info.currency," ",P.checkout_info.total_cost]})]})]}),(0,k.jsx)("hr",{}),(0,k.jsx)("button",{onClick:()=>{let e=N.A.getState().authentication.authToken||localStorage.getItem("authToken");(0,h.sH)({product_service_id:C.product_service_id,schedule_id:P.selected_schedule,user_token:e,number_of_slots:P.selected_spots,total_price:P.selected_spots*(C.details.base_price-C.details.discount+C.details.tax_fees),booking_status:"pending",payment_status:"unpaid"}).then((e=>{(0,n.Ay)(e.data.message,{style:{background:"#02B41F",borderRadius:"5px",fontSize:"14px",padding:"2px",color:"white"},duration:5e3}),s("/booking/success")})).catch((e=>{(0,n.Ay)(e.response.data.message,{style:{background:"#E90000",borderRadius:"5px",fontSize:"12px",padding:"2px",color:"white"},duration:5e3}),e.response.staus}))},className:"w-full p-2 bg-[#FBB428] font-Nunito rounded-md mt-2",children:"Complete Booking"})]})]}),(0,k.jsx)(d.A,{})]})}},6435:(e,s,l)=>{l.d(s,{A:()=>d});var t=l(9950),a=l(3300),i=l(4414);const d=e=>{const[s,l]=(0,t.useState)({...e});return(0,i.jsx)("div",{id:"backdrop",onClick:s=>{s.preventDefault(),!1!==e.closeOnDocumentClick&&"backdrop"===s.target.id&&e.close()},style:{display:e.open?"inherit":"none"},className:"fixed z-10 left-0 top-0 w-[100vw] h-[100vh] bg-[#1b1818c7] flex justify-center items-center",children:(0,i.jsxs)("section",{className:"fixed h-auto min-w-[20vw] bg-white rounded-lg p-4 ",children:[(0,i.jsx)("div",{onClick:e.close,className:"mobile:hidden mobile:-top-10 absolute p-2 bg-slate-300 rounded-full -top-6 -right-6 hover:scale-105 border border-dotted border-black",children:(0,i.jsx)("img",{className:"",width:"",src:a.A,alt:"modal Close Btn"})}),t.Children.map(e.children,(s=>t.cloneElement(s,e)))]})})}}}]);