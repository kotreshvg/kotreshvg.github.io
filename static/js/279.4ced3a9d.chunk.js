"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[279],{7231:(e,t,a)=>{a.d(t,{A:()=>s});a(9950);const s=a.p+"static/media/AddiconWhite.5100a9f308c15b352ca926a827147e82.svg"},9780:(e,t,a)=>{a.d(t,{A:()=>s});a(9950);const s=a.p+"static/media/DeleteIcon.5d30c3105e59d4b9bfb1217c2ee2233a.svg"},2637:(e,t,a)=>{a.d(t,{A:()=>s});a(9950);const s=a.p+"static/media/Editicon.a55d5498ee44d9403ea47f9de49231ed.svg"},5916:(e,t,a)=>{a.d(t,{A:()=>s});a(9950);const s=a.p+"static/media/Pendingicon.9fce8210e7d49fa9f6d16cc2cacc6eb1.svg"},7227:(e,t,a)=>{a.d(t,{MK:()=>i,lW:()=>d,r6:()=>s});a(3325).Buffer;const s=e=>{try{const t=new Date(e),a=t.getDate().toString().padStart(2,"0"),s=(t.getMonth()+1).toString().padStart(2,"0"),i=t.getFullYear();let d=t.getHours();const l=t.getMinutes().toString().padStart(2,"0"),n=t.getSeconds().toString().padStart(2,"0"),r=d>=12?"PM":"AM";d=d%12||12;const c="".concat(a,"-").concat(s,"-").concat(i),o="".concat(d.toString().padStart(2,"0"),":").concat(l,":").concat(n," ").concat(r);return"".concat(c," ").concat(o)}catch(t){return""}};function i(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Obj";const s=new Date(e),i=new Date(t)-s,d=Math.ceil(i/864e5),l=d>0?d-1:0;return"str"===a?d+" Days "+l+" Nights":{days:d,nights:l}}function d(e){navigator.clipboard.writeText(e).then((()=>{console.log("Text copied to clipboard")})).catch((e=>{console.error("Failed to copy text: ",e)}))}},6279:(e,t,a)=>{a.r(t),a.d(t,{default:()=>N});var s=a(9950),i=a(2637),d=a(9780);const l=a.p+"static/media/Greencheck.c28f7ee1e8bb8309db0a9be9592a4aa0.svg";var n=a(5916);const r=a.p+"static/media/Erroricon.e2309fd2d220f7d4a0c5461ba4da84f1.svg";var c=a(7231),o=a(1908),u=a(5887),p=a(6435),m=a(7369),x=a(3300),h=a(1395);const b=a.p+"static/media/calenderIcon.db382ba9fdc08d0d05d6e9b5e0763ca5.svg";var g=a(7227),f=a(9749),j=a(4414);const N=e=>{const[t,a]=(0,s.useState)([]),[N,F]=(0,s.useState)(!1),[v,w]=(0,s.useState)(!1),[y,_]=(0,s.useState)({package_name:"",duration:"",pickup_location:"",destination:"",short_description:"",currency:"INR",price:0,included_in_package:["Bus Fair","accomodation"],discount:"",taxes_fee:"",cancellation_terms:"",itinerary:[{day:"day 1",description:""}],included_item_:"",selcted_categories:[]}),[D,k]=(0,s.useState)({product_service_id:null,time_zone:"IST",start_date:"",start_time:"",end_date:"",end_time:"",location:"",capacity:0}),[A,C]=(0,s.useState)(!1),[S,B]=(0,s.useState)([]),E=(0,s.useRef)(null),[R,z]=(0,s.useState)([]),[P,L]=(0,s.useState)([]),I=(e,t)=>{console.log(e),_({...y,[t]:e})},M=(e,t)=>{console.log(e,t,A);let a=y.itinerary;a.splice(A,1,{...y.itinerary[A],[t]:e}),_({...y,itinerary:a})};(0,s.useEffect)((()=>{(0,o.Si)({}).then((e=>{(0,u.Ay)(e.data.message,{style:{background:"#02B41F",borderRadius:"5px",fontSize:"14px",padding:"2px",color:"white"},duration:5e3}),a(e.data.result.data)})).catch((e=>{(0,u.Ay)(e.response.data.message,{style:{background:"#FFE900",borderRadius:"5px",fontSize:"10px",padding:"2px"},duration:5e3})})),(0,o.d6)().then((e=>{console.log(e.data),z(e.data.result)})).catch((e=>{(0,u.Ay)(e.response.data.message,{style:{background:"#FFE900",borderRadius:"5px",fontSize:"10px",padding:"2px"},duration:5e3})}))}),[]);const T=(e,a)=>{var s;"deleted"!==(null===(s=t.filter((t=>t.product_service_id===e))[0])||void 0===s?void 0:s.status)&&(0,o.Og)({package_id:[e]}).then((t=>{w(!0),k({...D,package_title:a,product_service_id:e}),L(t.data.result.data)})).catch((e=>{(0,u.Ay)(e.response.data.message,{style:{background:"#FFE900",borderRadius:"5px",fontSize:"10px",padding:"2px"},duration:5e3})}))},H=(e,t)=>{console.log(e),k({...D,[t]:e})},O=(e,t,a)=>{(0,o.Fs)({product_service_id:a,schedule_id:t,status:e}).then((e=>{(0,u.Ay)(e.data.message,{style:{background:"#02B41F",borderRadius:"5px",fontSize:"14px",padding:"2px",color:"white"},duration:5e3}),T(D.product_service_id,D.package_title)})).catch((e=>{(0,u.Ay)(e.response.data.message,{style:{background:"#FFE900",borderRadius:"5px",fontSize:"10px",padding:"2px"},duration:5e3})}))};return(0,j.jsxs)("div",{className:"w-full relative flex h-full",children:[(0,j.jsx)(u.l$,{}),(0,j.jsx)("input",{ref:E,onChange:e=>B([...S,...e.target.files]),accept:"image/*",type:"file",className:"hidden"}),(0,j.jsx)(p.A,{open:N,close:()=>{F(!1)},closeOnDocumentClick:!1,children:(0,j.jsxs)("div",{className:"w-[80vw] h-[90vh] rounded-md overflow-scroll",children:[(0,j.jsx)("p",{className:"font-RobotoCondensedMedium rounded-t-md mb-2 tracking-wider bg-[#003640] text-white p-2",children:"Create Package Wizard"}),(0,j.jsxs)("div",{className:"w-full flex font-RedHatLight",children:[(0,j.jsxs)("div",{className:"w-3/5 mr-2",children:[(0,j.jsxs)("div",{className:" flex justify-between items-center bg-[#F4FBFF] border border-[#A2DDFF] p-2 rounded-md",children:[(0,j.jsxs)("div",{className:"flex",children:[(0,j.jsx)("p",{children:"Copy From"}),(0,j.jsx)("img",{width:"15px",className:"ml-2",src:m.A,alt:"copy from info icon"})]}),(0,j.jsx)("select",{className:"w-3/5 bg-[#B9F4FF] h-8 px-2 rounded-md outline-none",defaultValue:null,children:(0,j.jsx)("option",{children:"package Name"})})]}),(0,j.jsxs)("div",{className:"w-full mt-4 flex",children:[(0,j.jsxs)("div",{className:"bg-[#F4FBFF] mr-2 border border-[#A2DDFF] w-1/2 rounded-md p-2",children:[(0,j.jsx)("p",{className:"opacity-60",children:"Package Name"}),(0,j.jsx)("input",{value:y.package_name,onChange:e=>I(e.target.value,"package_name"),type:"text",className:"bg-transparent outline-none font-semibold w-full"})]}),(0,j.jsxs)("div",{className:"bg-[#F4FBFF] ml-2 border border-[#A2DDFF] w-1/2 rounded-md p-2",children:[(0,j.jsx)("p",{className:"opacity-60",children:"Duration (in days)"}),(0,j.jsx)("input",{value:y.duration,onChange:e=>I(e.target.value,"duration"),type:"text",className:"bg-transparent outline-none font-semibold w-full"})]})]}),(0,j.jsxs)("div",{className:"w-full mt-4 flex",children:[(0,j.jsxs)("div",{className:"bg-[#F4FBFF] mr-2 border border-[#A2DDFF] w-1/2 rounded-md p-2",children:[(0,j.jsx)("p",{className:"opacity-60",children:"Pickup Location"}),(0,j.jsx)("input",{value:y.pickup_location,onChange:e=>I(e.target.value,"pickup_location"),type:"text",className:"bg-transparent outline-none font-semibold w-full"})]}),(0,j.jsxs)("div",{className:"bg-[#F4FBFF] ml-2 border border-[#A2DDFF] w-1/2 rounded-md p-2",children:[(0,j.jsx)("p",{className:"opacity-60",children:"Destination"}),(0,j.jsx)("input",{value:y.destination,onChange:e=>I(e.target.value,"destination"),type:"text",className:"bg-transparent outline-none font-semibold w-full"})]})]}),(0,j.jsx)("div",{className:"w-full mt-4 flex",children:(0,j.jsxs)("div",{className:"bg-[#F4FBFF] border border-[#A2DDFF] w-full rounded-md p-2",children:[(0,j.jsx)("p",{className:"opacity-60",children:"package category"}),(0,j.jsx)(h.Ay,{value:y.selcted_categories,onChange:e=>{I(e,"selcted_categories")},styles:{multiValue:e=>({...e,fontSize:"12px"})},isMulti:!0,options:R.map((e=>({value:e.category_id,label:e.category_name})))})]})}),(0,j.jsx)("div",{className:"w-full mt-4 flex",children:(0,j.jsxs)("div",{className:"bg-[#F4FBFF] border border-[#A2DDFF] w-full rounded-md p-2",children:[(0,j.jsx)("p",{className:"opacity-60",children:"Short Description"}),(0,j.jsx)("textarea",{value:y.short_description,onChange:e=>I(e.target.value,"short_description"),type:"text",className:"bg-transparent outline-none font-semibold h-16 w-full"})]})}),(0,j.jsx)("div",{className:"w-full mt-4",children:(0,j.jsxs)("div",{className:"bg-[#F4FBFF] border flex border-[#A2DDFF] w-full rounded-md p-2",children:[(0,j.jsxs)("div",{onClick:()=>E.current.click(),className:"p-2 w-24 items-center cursor-pointer rounded-md aspect-square flex flex-col justify-center bg-gradient-to-br from-[#CE4AFD] to-[#10A3FF]",children:[(0,j.jsx)("img",{width:"25px",src:c.A,alt:"add image button"}),(0,j.jsx)("p",{className:"text-white text-sm font-Nunito",children:"Add Image"})]}),(0,j.jsxs)("div",{className:"w-full flex justify-center h-full",children:[0===S.length&&(0,j.jsx)("p",{className:"opacity-50",children:"No images"}),S.map((e=>(0,j.jsx)("img",{className:"h-24 rounded-md mx-2 aspect-auto",src:URL.createObjectURL(e)})))]})]})})]}),(0,j.jsxs)("div",{className:"w-2/5 ml-2",children:[(0,j.jsxs)("div",{className:"w-full py-2 px-4 rounded-md bg-[#F4FBFF] border border-[#A2DDFF]",children:[(0,j.jsx)("p",{className:"mb-2",children:"Pricing"}),(0,j.jsxs)("div",{className:" w-full flex",children:[(0,j.jsxs)("div",{className:"w-2/6 flex mr-1 justify-between bg-white border border-[#A2DDFF] p-2",children:[(0,j.jsx)("p",{className:"font-medium",children:"Currency"}),(0,j.jsx)("select",{className:"outline-none",children:(0,j.jsx)("option",{children:"INR"})})]}),(0,j.jsx)("div",{className:"w-4/6 ml-1 bg-white border border-[#A2DDFF] p-2",children:(0,j.jsx)("input",{value:y.price,onChange:e=>I(e.target.value,"price"),className:"w-full h-full px-2 outline-none",type:"text",placeholder:"Enter price"})})]}),(0,j.jsxs)("div",{className:"w-full bg-white mt-2 border border-[#A2DDFF] p-2",children:[(0,j.jsxs)("div",{className:"flex my-2",children:[(0,j.jsx)("p",{className:"text-sm",children:"Included in package"}),(0,j.jsx)("input",{value:y.included_item_,onChange:e=>I(e.target.value,"included_item_"),type:"text",className:"border-b ml-2 w-1/2 border-b-black outline-none"}),(0,j.jsx)("button",{onClick:()=>{""!==y.included_item_&&_({...y,included_in_package:[...y.included_in_package,y.included_item_],included_item_:""})},className:"bg-[#1E90FF] font-RedHatLight text-xs px-2 text-white rounded-md",children:"Add"})]}),(0,j.jsx)("div",{className:"flex flex-wrap",children:y.included_in_package.map((e=>(0,j.jsxs)("div",{className:"flex m-1 p-2 justify-between rounded-full border border-[#A2DDFF] w-fit ",children:[(0,j.jsx)("p",{className:"text-sm",children:e}),(0,j.jsx)("img",{onClick:()=>{return t=e,void _({...y,included_in_package:y.included_in_package.filter((e=>e!==t))});var t},className:"ml-2",width:"20px",src:x.A})]},e)))})]}),(0,j.jsxs)("div",{className:"flex w-full justify-between bg-white items-center border border-[#A2DDFF] p-2 mt-2",children:[(0,j.jsx)("p",{children:"Discount"}),(0,j.jsx)("input",{value:y.discount,onChange:e=>I(e.target.value,"discount"),type:"text",className:"w-[60%] p-1 outline-none bg-transparent border-b border-black",alt:"discount"})]}),(0,j.jsxs)("div",{className:"flex w-full justify-between bg-white items-center border border-[#A2DDFF] p-2 mt-2",children:[(0,j.jsx)("p",{children:"Taxes and Fees"}),(0,j.jsx)("input",{value:y.taxes_fee,onChange:e=>I(e.target.value,"taxes_fee"),type:"text",className:"w-[60%] p-1 outline-none bg-transparent border-b border-black",alt:"discount"})]}),(0,j.jsxs)("div",{className:"w-full bg-white border border-[#A2DDFF] p-2 mt-2",children:[(0,j.jsx)("p",{children:"Cancellation Terms"}),(0,j.jsx)("textarea",{value:y.cancellation_terms,onChange:e=>I(e.target.value,"cancellation_terms"),type:"text",className:"w-full p-1 outline-none bg-transparent border-b border-black",alt:"discount"})]})]}),(0,j.jsxs)("div",{className:"w-full py-2 px-4 rounded-md bg-[#F4FBFF] border border-[#A2DDFF] mt-4",children:[(0,j.jsx)("p",{children:"Itinerary"}),(0,j.jsxs)("div",{className:"w-full mt-2 h-[15vh] overflow-scroll relative",children:[!1!==A&&(0,j.jsxs)("div",{className:"w-full h-fit p-2 absolute bg-white border border-[#A2DDFF]",children:[(0,j.jsx)("p",{children:"Edit itinerary"}),(0,j.jsx)("input",{onChange:e=>M(e.target.value,"day"),value:y.itinerary[A].day,className:"outline-none mb-2 bg-[#F4FBFF] border border-[#A2DDFF] p-1 rounded-md",placeholder:"day 1"}),(0,j.jsx)("br",{}),(0,j.jsx)("input",{onChange:e=>M(e.target.value,"description"),value:y.itinerary[A].description,className:"outline-none w-full bg-[#F4FBFF] border border-[#A2DDFF] p-1 rounded-md",placeholder:"description"}),(0,j.jsx)("button",{onClick:()=>C(!1),className:"bg-[#1E90FF] font-RedHatLight text-xs px-2 text-white rounded-md",children:"Save"})]}),y.itinerary.map(((e,t)=>(0,j.jsxs)("div",{className:"w-full mb-2 px-2 py-1 bg-white border border-[#A2DDFF] flex items-center justify-between",children:[(0,j.jsx)("p",{children:e.day}),(0,j.jsxs)("p",{className:"text-sm text-gray-500",children:[e.description.substring(0,10),"..."]}),(0,j.jsxs)("div",{className:"flex",children:[(0,j.jsx)("img",{width:"15px",onClick:()=>C(t),src:i.A,alt:"itinerary edit"}),(0,j.jsx)("img",{width:"15px",onClick:()=>(e=>{let t=y.itinerary;t.splice(e,1),_({...y,itinerary:t})})(t),src:d.A,alt:"itinerary delete"})]})]},t)))]}),(0,j.jsx)("button",{onClick:()=>{let e=y.itinerary;e.push({day:"Day",description:""}),_({...y,itinerary:e})},className:"px-2 w-full font-Nunito cursor-pointer mt-2 flex justify-center text-white bg-gradient-to-r from-[#CE4AFD] to-[#10A3FF]",children:"Add Day"})]})]})]}),(0,j.jsxs)("div",{className:"w-full my-4 flex justify-end",children:[(0,j.jsx)("button",{className:"font-Nunito mr-2 text-white bg-[#10A3FF] px-6 py-1 rounded-md",children:"Preview"}),(0,j.jsx)("button",{className:"font-Nunito mr-2 text-white bg-[#EF780A] px-6 py-1 rounded-md",children:"Save Draft"}),(0,j.jsx)("button",{onClick:()=>{console.log(y);let e=new FormData;S.forEach((t=>{e.append("images",t)})),e.append("data",JSON.stringify({package_name:y.package_name,status:"active",duration:y.duration,pickup_location:y.pickup_location,destination:y.destination,currency:y.currency,base_price:y.price,discount:y.discount,tax_fees:y.taxes_fee,included_in_package:y.included_in_package,cancellation_terms:y.cancellation_terms,short_description:y.short_description,itinerary:y.itinerary,categories:y.selcted_categories.map((e=>e.value))})),(0,o.Qf)(e).then((e=>{(0,u.Ay)(e.data.message,{style:{background:"#02B41F",borderRadius:"5px",fontSize:"14px",padding:"2px",color:"white"},duration:5e3}),a(e.data.result.data)})).catch((e=>{(0,u.Ay)(e.response.data.message,{style:{background:"#FFE900",borderRadius:"5px",fontSize:"10px",padding:"2px"},duration:5e3})}))},className:"font-Nunito text-white bg-[#02B41F] px-6 py-1 rounded-md",children:"Publish"})]})]})}),(0,j.jsx)(p.A,{open:v,close:()=>{w(!1)},closeOnDocumentClick:!1,children:(0,j.jsxs)("div",{className:"w-[70vw] h-[80vh] rounded-md overflow-scroll",children:[(0,j.jsx)("p",{className:"font-RobotoCondensedMedium rounded-t-md mb-2 tracking-wider bg-[#003640] text-white p-2",children:"Package Schedule wizard"}),(0,j.jsxs)("p",{className:"font-Nunito text-base my-2",children:["Package Name: ",D.package_title]}),(0,j.jsxs)("div",{className:"w-full font-RedHatLight flex",children:[(0,j.jsxs)("div",{className:"w-[60%] mr-2 h-[68vh] bg-[#F4FBFF] p-2 rounded-md border border-[#A2DDFF]",children:[P.filter((e=>"active"===e.status)).length>0&&(0,j.jsx)("div",{className:"flex mb-2 justify-center",children:(0,j.jsx)("p",{className:"text-xs font-RedHatLight",children:"Active Schedules"})}),P&&P.filter((e=>"active"===e.status)).map((e=>(0,j.jsxs)("div",{className:"w-full flex justify-between items-center bg-[#F1FFF3] border mt-2 p-2 border-[#02B41F] rounded-xl",children:[(0,j.jsx)("div",{className:"max-w-[25%] flex py-1 px-2 rounded-full bg-white w-8",children:(0,j.jsx)("img",{src:l})}),(0,j.jsxs)("div",{className:"text-xs ml-2",children:[(0,j.jsxs)("p",{className:"pb-2",children:["Start ",(0,j.jsx)("span",{className:"font-Nunito",children:(0,g.r6)(e.start_time)})]}),(0,j.jsxs)("p",{className:"pt-2",children:["End ",(0,j.jsx)("span",{className:"font-Nunito",children:(0,g.r6)(e.end_time)})]})]}),(0,j.jsxs)("div",{className:"text-xs ml-2",children:[(0,j.jsxs)("p",{className:"pb-2",children:["Capacity ",(0,j.jsx)("span",{className:"font-Nunito",children:e.capacity})]}),(0,j.jsxs)("p",{className:"pt-2",children:["Available ",(0,j.jsx)("span",{className:"font-Nunito",children:e.availability})]})]}),(0,j.jsx)("button",{onClick:()=>O("cancelled",e.schedule_id,e.product_service_id),className:"flex items-center bg-[#E90000] text-white font-Nunito px-4 rounded-md justify-between",children:"cancel"})]}))),P.filter((e=>"cancelled"===e.status)).length>0&&(0,j.jsx)("div",{className:"flex my-2 justify-center",children:(0,j.jsx)("p",{className:"text-xs font-RedHatLight",children:"Cancelled Schedules"})}),P&&P.filter((e=>"cancelled"===e.status)).map((e=>(0,j.jsxs)("div",{className:"w-full flex justify-between items-center bg-[#FFF0F0] border mt-2 p-2 border-[#E90000] rounded-xl",children:[(0,j.jsx)("div",{className:" flex py-1 px-2 rounded-full bg-white w-8",children:(0,j.jsx)("img",{src:r})}),(0,j.jsxs)("div",{className:"text-xs ml-2",children:[(0,j.jsxs)("p",{className:"pb-2",children:["Start ",(0,j.jsx)("span",{className:"font-Nunito",children:(0,g.r6)(e.start_time)})]}),(0,j.jsxs)("p",{className:"pt-2",children:["End ",(0,j.jsx)("span",{className:"font-Nunito",children:(0,g.r6)(e.end_time)})]})]}),(0,j.jsxs)("div",{className:"text-xs ml-2",children:[(0,j.jsxs)("p",{className:"pb-2",children:["Capacity ",(0,j.jsx)("span",{className:"font-Nunito",children:e.capacity})]}),(0,j.jsxs)("p",{className:"pt-2",children:["Available ",(0,j.jsx)("span",{className:"font-Nunito",children:e.availability})]})]}),(0,j.jsx)("button",{onClick:()=>O("active",e.schedule_id,e.product_service_id),className:"flex items-center bg-[#02B41F] text-white font-Nunito px-4 rounded-md justify-between",children:"activate"})]})))]}),(0,j.jsxs)("div",{className:"w-[40%] p-2 ml-2 h-[68vh] bg-[#F4FBFF] rounded-md border border-[#A2DDFF]",children:[(0,j.jsx)("p",{className:"py-2",children:"Schedule"}),(0,j.jsxs)("div",{className:"w-full flex bg-white border border-[#A2DDFF] rounded-md py-1 px-2",children:[(0,j.jsx)("p",{className:"w-1/2",children:"Time Zone"}),(0,j.jsx)("select",{className:"w-1/2 outline-none",children:(0,j.jsx)("option",{children:"IST"})})]}),(0,j.jsxs)("div",{className:"w-full mt-2 flex bg-white border border-[#A2DDFF] rounded-md  py-1 px-2",children:[(0,j.jsx)("p",{className:"w-1/2",children:"Start Date"}),(0,j.jsx)("input",{onChange:e=>H(e.target.value,"start_date"),value:D.start_date,type:"date",className:"w-1/2 outline-none"})]}),(0,j.jsxs)("div",{className:"w-full mt-2 flex bg-white border border-[#A2DDFF] rounded-md  py-1 px-2",children:[(0,j.jsx)("p",{className:"w-1/2",children:"Start Time"}),(0,j.jsx)("input",{onChange:e=>H(e.target.value,"start_time"),value:D.start_time,type:"time",className:"w-1/2 outline-none"})]}),(0,j.jsxs)("div",{className:"w-full mt-2 flex bg-white border border-[#A2DDFF] rounded-md  py-1 px-2",children:[(0,j.jsx)("p",{className:"w-1/2",children:"End Date"}),(0,j.jsx)("input",{onChange:e=>H(e.target.value,"end_date"),value:D.end_date,type:"date",className:"w-1/2 outline-none"})]}),(0,j.jsxs)("div",{className:"w-full mt-2 flex bg-white border border-[#A2DDFF] rounded-md  py-1 px-2",children:[(0,j.jsx)("p",{className:"w-1/2",children:"End Time"}),(0,j.jsx)("input",{onChange:e=>H(e.target.value,"end_time"),value:D.end_time,type:"time",className:"w-1/2 outline-none"})]}),(0,j.jsxs)("div",{className:"w-full mt-2 flex bg-white border border-[#A2DDFF] rounded-md  py-1 px-2",children:[(0,j.jsx)("p",{className:"w-1/2",children:"Capacity"}),(0,j.jsx)("input",{onChange:e=>H(e.target.value,"capacity"),value:D.capacity,type:"number",className:"w-1/2 outline-none border-b border-[#A2DDFF]"})]}),(0,j.jsxs)("div",{className:"w-full mt-2 flex bg-white border border-[#A2DDFF] rounded-md  py-1 px-2",children:[(0,j.jsx)("p",{className:"w-1/2",children:"Location"}),(0,j.jsx)("input",{onChange:e=>H(e.target.value,"location"),value:D.location,type:"location",className:"w-1/2 outline-none border-b border-[#A2DDFF]"})]}),(0,j.jsx)("button",{onClick:()=>{(0,o.sF)({schedules:[{product_service_id:D.product_service_id,start_datetime:"".concat(D.start_date,"T").concat(D.start_time),end_datetime:"".concat(D.end_date,"T").concat(D.end_time),capacity:D.capacity,availability:D.capacity,location:D.location,status:"active",time_zone:"Asia/Kolkata"}]}).then((e=>{(0,u.Ay)(e.data.message,{style:{background:"#02B41F",borderRadius:"5px",fontSize:"14px",padding:"2px",color:"white"},duration:5e3}),T(D.product_service_id,D.package_title)})).catch((e=>{(0,u.Ay)(e.response.data.message,{style:{background:"#FFE900",borderRadius:"5px",fontSize:"10px",padding:"2px"},duration:5e3})}))},className:"font-Nunito bg-gradient-to-br from-[#CE4AFD] to-[#10A3FF] text-white w-full py-1 rounded-full mt-4",children:"Create Schedule"})]})]})]})}),(0,j.jsxs)("div",{className:"w-3/5 p-2",children:[(0,j.jsx)("input",{type:"text",alt:"serach bar",placeholder:"Search packages",className:"w-full px-4 py-2 mb-2 text-base rounded-full outline-none border border-[#A2DDFF] placeholder:opacity-70"}),(0,j.jsxs)("div",{className:"flex ",children:[(0,j.jsx)("a",{href:"/business/".concat(String(f.A.getState().businessState.business_name).replace(/ /g,"-"),"/packages"),target:"_blank",className:"text-[#6C757D] font-RedHatLight",children:"Public Link "}),(0,j.jsx)("img",{onClick:e=>(0,g.lW)(window.location.origin+"/business/".concat(String(f.A.getState().businessState.business_name).replace(/ /g,"-"),"/packages")),className:"bg-black p-1 mx-4 rounded-md aspect-square",width:"25px",src:"https://penguinduo.com/Blog/assets/copy.svg",alt:"copy sharable link"})]}),t.map((e=>(0,j.jsxs)("div",{className:"flex items-center mt-2 justify-between bg-[#B9F4FF] py-2 px-4 rounded-xl",children:[(0,j.jsx)("p",{className:"w-3/5",children:e.title}),(0,j.jsxs)("div",{className:"flex ",children:[(0,j.jsx)("img",{onClick:()=>T(e.product_service_id,e.title),className:"p-2 hover:scale-95 cursor-pointer mr-2 bg-white rounded-md",src:b,alt:"package schedule"}),(0,j.jsx)("img",{onClick:()=>(e=>{var a;"deleted"!==(null===(a=t.filter((t=>t.product_service_id===e))[0])||void 0===a?void 0:a.status)&&F(!0)})(e.product_service_id),className:"p-2 hover:scale-95 cursor-pointer mr-2 bg-white rounded-md",src:i.A,alt:"package edit"}),(0,j.jsx)("img",{className:"p-2 hover:scale-95 cursor-pointer bg-white rounded-md",src:d.A,alt:"package delete"})]}),(0,j.jsxs)("div",{className:"flex items-center justify-start bg-white rounded-full px-2 py-1 w-28",children:[(0,j.jsx)("img",{src:"active"===e.status?l:"deleted"===e.status?r:n.A,alt:"package Status Icon",className:"mr-2"}),(0,j.jsx)("p",{className:"font-light font-Nunito",children:e.status})]})]},e.product_service_id)))]}),(0,j.jsxs)("div",{className:"w-2/5 p-2",children:[(0,j.jsx)("div",{className:"w-full h-[40vh] bg-white rounded-md border border-[#A2DDFF]",children:(0,j.jsx)("p",{className:"bg-[#003640] w-full p-2 font-RobotoCondensedMedium tracking-wider text-sm text-white rounded-t-md",children:"Package Insights"})}),(0,j.jsx)("div",{className:"w-full h-[50vh] bg-white mt-2 rounded-md border border-[#A2DDFF]",children:(0,j.jsx)("p",{className:"bg-[#003640] w-full p-2 font-RobotoCondensedMedium tracking-wider text-sm text-white rounded-t-md",children:"Customer Queries"})})]}),(0,j.jsxs)("div",{onClick:()=>F(!0),className:"w-28 absolute z-10 right-0 bottom-0 cursor-pointer hover:shadow-xl rounded-xl flex flex-col text-white justify-center items-center aspect-square bg-gradient-to-br from-[#CE4AFD] to-[#10A3FF]",children:[(0,j.jsx)("img",{src:c.A,alt:"add package",className:""}),(0,j.jsx)("p",{className:"font-Nunito font-semibold mt-2",children:"Add Package"})]})]})}},6435:(e,t,a)=>{a.d(t,{A:()=>l});var s=a(9950),i=a(3300),d=a(4414);const l=e=>{const[t,a]=(0,s.useState)({...e});return(0,d.jsx)("div",{id:"backdrop",onClick:t=>{t.preventDefault(),!1!==e.closeOnDocumentClick&&"backdrop"===t.target.id&&e.close()},style:{display:e.open?"inherit":"none"},className:"fixed z-10 left-0 top-0 w-[100vw] h-[100vh] bg-[#1b1818c7] flex justify-center items-center",children:(0,d.jsxs)("section",{className:"fixed h-auto min-w-[20vw] bg-white rounded-lg p-4 ",children:[(0,d.jsx)("div",{onClick:e.close,className:"mobile:hidden mobile:-top-10 absolute p-2 bg-slate-300 rounded-full -top-6 -right-6 hover:scale-105 border border-dotted border-black",children:(0,d.jsx)("img",{className:"",width:"",src:i.A,alt:"modal Close Btn"})}),s.Children.map(e.children,(t=>s.cloneElement(t,e)))]})})}}}]);