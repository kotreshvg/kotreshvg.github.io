"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[849],{9780:(e,s,a)=>{a.d(s,{A:()=>t});a(9950);const t=a.p+"static/media/DeleteIcon.5d30c3105e59d4b9bfb1217c2ee2233a.svg"},2637:(e,s,a)=>{a.d(s,{A:()=>t});a(9950);const t=a.p+"static/media/Editicon.a55d5498ee44d9403ea47f9de49231ed.svg"},5415:(e,s,a)=>{a.d(s,{A:()=>t});a(9950);const t=a.p+"static/media/camera.41ab8f869278450ea87f7359cefc43e7.svg"},3300:(e,s,a)=>{a.d(s,{A:()=>t});a(9950);const t=a.p+"static/media/cancel.e75b17a9b8b64ba1432f663619f1d27a.svg"},9663:(e,s,a)=>{a.d(s,{A:()=>t});a(9950);const t=a.p+"static/media/location.a6e241b5b6e7450e23b981c83d5b0347.svg"},7227:(e,s,a)=>{a.d(s,{Ax:()=>o,MK:()=>n,Zx:()=>r,lW:()=>i,r6:()=>l});var t=a(5887);a(3325).Buffer;const l=e=>{try{const s=new Date(e),a=s.getDate().toString().padStart(2,"0"),t=(s.getMonth()+1).toString().padStart(2,"0"),l=s.getFullYear();let n=s.getHours();const i=s.getMinutes().toString().padStart(2,"0"),r=s.getSeconds().toString().padStart(2,"0"),o=n>=12?"PM":"AM";n=n%12||12;const d="".concat(a,"-").concat(t,"-").concat(l),c="".concat(n.toString().padStart(2,"0"),":").concat(i,":").concat(r," ").concat(o);return"".concat(d," ").concat(c)}catch(s){return""}};function n(e,s){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Obj";const t=new Date(e),l=new Date(s)-t,n=Math.ceil(l/864e5),i=n>0?n-1:0;return"str"===a?n+" Days "+i+" Nights":{days:n,nights:i}}function i(e){navigator.clipboard.writeText(e).then((()=>{console.log("Text copied to clipboard")})).catch((e=>{console.error("Failed to copy text: ",e)}))}const r=e=>{(0,t.Ay)(e,{style:{background:"#02B41F",borderRadius:"5px",fontSize:"14px",padding:"2px",color:"white"},duration:5e3})},o=e=>{(0,t.Ay)(e,{style:{background:"#E90000",borderRadius:"5px",fontSize:"14px",padding:"2px",color:"white"},duration:5e3})}},849:(e,s,a)=>{a.r(s),a.d(s,{default:()=>j});var t=a(9950),l=(a(2637),a(9780)),n=a(1395),i=a(5887);const r=a.p+"static/media/BusinessIcon.5d65cb00a2ccad8f4f64baaea4fe2ae3.svg";const o=a.p+"static/media/GalleryIcon.6230c99301137dceca3fb563579ed37b.svg";const d=a.p+"static/media/BadgeIcon.08140c5410ceda942604eaa9e7174715.svg";const c=a.p+"static/media/QuestionFilled.c637b1f0a46b5bdb7245d97b9880e46d.svg";var m=a(8541),u=a(5415),p=a(9663),h=a(1908),g=a(7227),x=a(7956),b=a(6435),f=a(4414);const j=e=>{const[s,a]=(0,t.useState)({menu:"basicinfo"}),j=(0,t.useRef)(null),v=(0,t.useRef)(null),y=(0,t.useRef)(null),w=(0,t.useRef)(null),[_,N]=(0,t.useState)({business_name:"my business",legal_business_name:"",business_email:"",business_contact:"",business_address:"",short_description:"",cover_img_url:"",logo_url:"",faqs:[],question:"",answer:"",selected_regions:[]}),[B,A]=(0,t.useState)({gallery:[],certificates:[],uploaded_gallery_assets:[],uploaded_cert_assets:[],modal_open:!1,modal_type:"gallery"}),[C,F]=(0,t.useState)([]);(0,t.useEffect)((()=>{(0,h.t5)().then((e=>{200==e.status&&F(e.data)})).catch((e=>{console.log(e)}))}),[]),(0,t.useEffect)((()=>{C.length&&(0,h.vr)().then((e=>{if(e.data.result.data){console.log(e.data.result.data);let{business_name:s,contact_email:a,contact_phone:t,address:l,legal_name:n,logo_url:i,cover_url:r,gallery:o,certificates:d,short_description:c,faqs:m,business_operating_regions:u}=e.data.result.data;N({..._,business_name:s,business_email:a,legal_business_name:n,business_contact:t,business_address:l,logo_url:i,cover_img_url:r,short_description:c,faqs:m,selected_regions:C.filter((e=>u.includes(e.region_id))).map((e=>({label:e.region_name,value:e.region_id})))}),A({...B,gallery:o,certificates:d})}})).catch((e=>{(0,g.Ax)(e.response.data.message)}))}),[C]);const D=e=>{document.getElementById(e).scrollIntoView({behavior:"smooth"}),a({...s,menu:e})},k=(e,s)=>{N({..._,[s]:e})},R=(e,s)=>{let a=B[s="gallery"===s?"uploaded_gallery_assets":"uploaded_cert_assets"];a.splice(e,1),A({...B,[s]:a})};return(0,f.jsxs)("div",{className:"w-full relative py-4 flex h-full",children:[(0,f.jsx)(i.l$,{}),(0,f.jsxs)("div",{className:"w-1/4 h-[50vh] py-6 px-2 font-Nunito bg-white rounded-md border shadow-UI",children:[(0,f.jsxs)("div",{onClick:e=>D("basicinfo"),style:"basicinfo"==s.menu?{backgroundColor:"#F4FBFF"}:{},className:"flex cursor-pointer items-center h-10",children:["basicinfo"==s.menu&&(0,f.jsx)("div",{className:"w-1 h-[100%] mr-4 bg-[#A2DDFF]"}),(0,f.jsx)("img",{src:r,alt:"basic info icon"}),(0,f.jsx)("p",{className:"ml-4",children:"Basic Info"})]}),(0,f.jsxs)("div",{onClick:e=>D("gallery"),style:"gallery"==s.menu?{backgroundColor:"#F4FBFF"}:{},className:"flex cursor-pointer items-center h-10 ",children:["gallery"==s.menu&&(0,f.jsx)("div",{className:"w-1 h-[100%] mr-4 bg-[#A2DDFF]"}),(0,f.jsx)("img",{src:o,alt:"gallery icon"}),(0,f.jsx)("p",{className:"ml-4",children:"Gallery"})]}),(0,f.jsxs)("div",{onClick:e=>D("badge"),style:"badge"==s.menu?{backgroundColor:"#F4FBFF"}:{},className:"flex cursor-pointer items-center h-10 ",children:["badge"==s.menu&&(0,f.jsx)("div",{className:"w-1 h-[100%] mr-4 bg-[#A2DDFF]"}),(0,f.jsx)("img",{src:d,alt:"badges icon"}),(0,f.jsx)("p",{className:"ml-4",children:"Badges / Certificates"})]}),(0,f.jsxs)("div",{onClick:e=>D("faq"),style:"faq"==s.menu?{backgroundColor:"#F4FBFF"}:{},className:"flex cursor-pointer items-center h-10 ",children:["faq"==s.menu&&(0,f.jsx)("div",{className:"w-1 h-[100%] mr-4 bg-[#A2DDFF]"}),(0,f.jsx)("img",{src:c,alt:"faq icon"}),(0,f.jsx)("p",{className:"ml-4",children:"FAQ"})]})]}),(0,f.jsxs)("div",{className:"w-3/4 ml-2 font-Nunito h-[89vh] overflow-scroll shadow-UI",children:[(0,f.jsxs)("div",{className:"w-full relative h-[60vh] rounded-lg border bg-white shadow-UI",children:[(0,f.jsx)("img",{src:_.cover_img_url||"https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"profile banner",className:"h-1/2 w-full rounded-t-lg object-cover"}),(0,f.jsxs)("div",{className:"absolute w-32 rounded-full aspect-square bg-white top-[calc(30vh-4rem)] border p-1 ml-4",children:[(0,f.jsx)("img",{src:_.logo_url||m.A,alt:"logo",className:"w-full rounded-full aspect-square "}),(0,f.jsxs)("div",{onClick:()=>v.current.click(),className:"w-full cursor-pointer aspect-square rounded-full absolute top-0 left-0 opacity-0 flex-col hover:opacity-90 bg-white flex justify-center items-center",children:[(0,f.jsx)("img",{src:u.A,alt:"logo change icon"}),(0,f.jsx)("p",{children:"Upload Logo"})]})]}),(0,f.jsxs)("div",{onClick:()=>j.current.click(),className:"absolute opacity-50 hover:opacity-100 cursor-pointer rounded-md bg-white flex items-center px-4 py-2 top-[calc(30vh-3rem)] right-4",children:[(0,f.jsx)("img",{src:u.A,alt:"cover image",className:"mr-2"}),(0,f.jsx)("p",{children:"Upload Cover"})]}),(0,f.jsxs)("div",{className:"h-1/2 w-full pt-24 px-8",children:[(0,f.jsxs)("div",{className:"flex py-4",children:[(0,f.jsx)("img",{src:r,width:"20px",alt:"business icon"}),(0,f.jsx)("p",{className:"ml-4",children:_.business_name||"Business Name"})]}),(0,f.jsxs)("div",{className:"flex",children:[(0,f.jsx)("img",{src:p.A,width:"20px",alt:"location icon"}),(0,f.jsx)("p",{className:"ml-4",children:_.business_address||"Business Location"})]})]})]}),(0,f.jsxs)("div",{id:"basicinfo",className:"w-full relative h-fit p-4 rounded-lg border bg-white shadow-UI mt-4",children:[(0,f.jsx)("p",{className:"mt-4",children:"Basic Info"}),(0,f.jsx)("hr",{}),(0,f.jsxs)("div",{className:"flex items-center mt-4 justify-start",children:[(0,f.jsxs)("div",{className:"w-1/2",children:[(0,f.jsx)("p",{className:"text-xs",children:"Business Name"}),(0,f.jsx)("input",{value:_.business_name,onChange:e=>k(e.target.value,"business_name"),placeholder:"Business Name",className:" mr-4 placeholder:font-RedHatLight outline-none w-5/6 border rounded-md border-[#BDB8B8] px-2 py-1"})]}),(0,f.jsxs)("div",{className:"w-1/2",children:[(0,f.jsx)("p",{className:"text-xs",children:"Legal Name"}),(0,f.jsx)("input",{value:_.legal_business_name,onChange:e=>k(e.target.value,"legal_business_name"),placeholder:"Business Legal Name",className:"placeholder:font-RedHatLight outline-none w-5/6 border rounded-md border-[#BDB8B8] px-2 py-1"})]})]}),(0,f.jsxs)("div",{className:"flex items-center justify-start mt-4",children:[(0,f.jsxs)("div",{className:"w-1/2",children:[(0,f.jsx)("p",{className:"text-xs",children:"Email"}),(0,f.jsx)("input",{value:_.business_email,onChange:e=>k(e.target.value,"business_email"),placeholder:"Business Email",className:" mr-4 placeholder:font-RedHatLight outline-none w-5/6 border rounded-md border-[#BDB8B8] px-2 py-1"})]}),(0,f.jsxs)("div",{className:"w-1/2",children:[(0,f.jsx)("p",{className:"text-xs",children:"Mobile"}),(0,f.jsx)("input",{value:_.business_contact,onChange:e=>k(e.target.value,"business_contact"),placeholder:"Business mobile",className:"placeholder:font-RedHatLight outline-none w-5/6 border rounded-md border-[#BDB8B8] px-2 py-1"})]})]}),(0,f.jsxs)("div",{className:"flex items-center justify-start mt-4",children:[(0,f.jsxs)("div",{className:"w-1/2",children:[(0,f.jsx)("p",{className:"text-xs",children:"Short Description"}),(0,f.jsx)("textarea",{value:_.short_description,onChange:e=>k(e.target.value,"short_description"),placeholder:"short description",className:" mr-4 placeholder:font-RedHatLight outline-none w-5/6 border rounded-md border-[#BDB8B8] px-2 py-1"})]}),(0,f.jsxs)("div",{className:"w-1/2",children:[(0,f.jsx)("p",{className:"text-xs",children:"Business Address"}),(0,f.jsx)("textarea",{value:_.business_address,onChange:e=>k(e.target.value,"business_address"),placeholder:"Business Address",className:"placeholder:font-RedHatLight outline-none w-5/6 border rounded-md border-[#BDB8B8] px-2 py-1"})]})]}),(0,f.jsx)("div",{className:"flex items-center justify-start mt-4",children:(0,f.jsxs)("div",{className:"w-1/2",children:[(0,f.jsx)("p",{className:"text-xs",children:"Operating Regions"}),(0,f.jsx)(n.Ay,{className:"placeholder:font-RedHatLight outline-none w-5/6 ",value:_.selected_regions,onChange:e=>{k(e,"selected_regions")},styles:{multiValue:e=>({...e,fontSize:"12px"})},isMulti:!0,options:C.filter((e=>null!=e.region_id)).map((e=>({value:e.region_id,label:e.region_name})))})]})}),(0,f.jsx)("button",{onClick:()=>{(0,h.GD)({business_name:_.business_name,legal_name:_.legal_business_name,business_email:_.business_email,business_contact:_.business_contact,short_description:_.short_description,business_address:_.business_address,operating_regions:_.selected_regions.map((e=>e.value))}).then((e=>{(0,g.Zx)(e.data.message)})).catch((e=>{(0,g.Ax)(e.response.data.message)}))},className:"bg-[#1E90FF] px-4 py-2 font-RedHatMedium mt-4 text-xs text-white rounded-md",children:"Save"})]}),(0,f.jsxs)("div",{id:"gallery",className:"w-full relative h-fit p-4 rounded-lg border bg-white shadow-UI mt-4",children:[(0,f.jsx)("p",{className:"mt-4",children:"Gallery"}),(0,f.jsx)("p",{className:"font-RobotoCondensedLight mb-2 text-sm",children:"These images and videos are visible to profile visitors, maintain relevance to your business and use good quality images"}),(0,f.jsx)("hr",{}),(0,f.jsx)("div",{className:"flex my-4 overflow-scroll",children:B.gallery.length>0&&B.gallery.map((e=>(0,f.jsx)("img",{className:"w-1/4 aspect-square mx-2 object-contain border rounded-lg",src:e,alt:"business gallery"})))}),(0,f.jsx)("button",{onClick:()=>y.current.click(),className:"bg-[#1E90FF] px-4 py-2 font-RedHatMedium mt-4 text-xs text-white rounded-md",children:"Add More"})]}),(0,f.jsxs)("div",{id:"badge",className:"w-full relative h-fit p-4 rounded-lg border bg-white shadow-UI mt-4",children:[(0,f.jsx)("p",{className:"mt-4",children:"Badges / Certificates"}),(0,f.jsx)("p",{className:"font-RobotoCondensedLight mb-2 text-sm",children:"Adding Badge / Certificates enhances business authority and trustworthiness and can impact your package bookings positively"}),(0,f.jsx)("hr",{}),(0,f.jsx)("div",{className:"flex my-4 overflow-scroll",children:B.certificates.length>0&&B.certificates.map((e=>(0,f.jsx)("img",{className:"w-1/4 aspect-square mx-2 object-contain border rounded-lg",src:e,alt:"business certificates"})))}),(0,f.jsx)("button",{onClick:()=>w.current.click(),className:"bg-[#1E90FF] px-4 py-2 font-RedHatMedium mt-4 text-xs text-white rounded-md",children:"Add More"})]}),(0,f.jsxs)("div",{id:"faq",className:"w-full relative h-fit p-4 rounded-lg border bg-white shadow-UI mt-4",children:[(0,f.jsx)("p",{className:"mt-4",children:"FAQ"}),(0,f.jsx)("p",{className:"font-RobotoCondensedLight text-sm mb-4",children:"Adding Badge / Certificates enhances business authority and trustworthiness and can impact your package bookings positively"}),(0,f.jsx)("hr",{}),(0,f.jsx)("p",{className:"w-full text-center my-4 text-xs",children:"Available FAQ s"}),_.faqs.length>0&&_.faqs.map((e=>(0,f.jsxs)("div",{className:"my-4",children:[(0,f.jsx)("p",{children:e.question}),(0,f.jsx)("p",{className:"font-RedHatLight",children:e.answer})]}))),(0,f.jsx)("hr",{}),(0,f.jsxs)("div",{className:"my-8 overflow-scroll",children:[(0,f.jsxs)("div",{className:"flex justify-between",children:[(0,f.jsx)("label",{children:"Question"}),(0,f.jsx)("input",{value:_.question,onChange:e=>k(e.target.value,"question"),className:"placeholder:font-RedHatLight outline-none w-5/6 border rounded-md border-[#BDB8B8] px-2 py-1",placeholder:"Write question"})]}),(0,f.jsxs)("div",{className:"flex justify-between mt-4",children:[(0,f.jsx)("label",{children:"Answer"}),(0,f.jsx)("textarea",{value:_.answer,onChange:e=>k(e.target.value,"answer"),className:"placeholder:font-RedHatLight outline-none w-5/6 border rounded-md border-[#BDB8B8] px-2 py-1",placeholder:"Answer"})]})]}),(0,f.jsx)("button",{onClick:()=>{(0,h.a4)({question:_.question,answer:_.answer}).then((e=>{(0,g.Zx)(e.data.message),N({..._,question:"",answer:"",faqs:[..._.faqs,{question:_.question,answer:_.answer}]})})).catch((e=>{(0,g.Ax)(e.response.data.message)}))},className:"bg-[#1E90FF] px-4 py-2 font-RedHatMedium text-xs text-white rounded-md",children:"Add FAQ"})]})]}),(0,f.jsx)("input",{onChange:e=>(e=>{if(e&&(e.size/1048576).toFixed(2)>5)return void(0,g.Ax)("logo size should be below 5 MB");let s=new FormData;s.append("images",e),(0,h.xP)(s).then((e=>{e.data.asset_url&&N({..._,cover_img_url:e.data.asset_url+"?".concat((0,x.A)())}),(0,g.Zx)(e.data.message)})).catch((e=>{(0,g.Ax)(e.response.data.message)}))})(e.target.files[0]),multiple:!1,ref:j,accept:"image/*",className:"hidden",type:"file",id:"bannerinput"}),(0,f.jsx)("input",{onChange:e=>(e=>{if(e&&(e.size/1048576).toFixed(2)>.5)return void(0,g.Ax)("logo size should be below 500 KB");let s=new FormData;s.append("images",e),(0,h.H)(s).then((e=>{e.data.asset_url&&N({..._,logo_url:e.data.asset_url+"?".concat((0,x.A)())}),(0,g.Zx)(e.data.message)})).catch((e=>{(0,g.Ax)(e.response.data.message)}))})(e.target.files[0]),multiple:!1,ref:v,accept:"image/*",className:"hidden",type:"file",id:"logoinput"}),(0,f.jsx)("input",{onChange:e=>A({...B,uploaded_gallery_assets:[...e.target.files],modal_type:"gallery",modal_open:!0}),ref:y,multiple:!0,className:"hidden",type:"file",id:"galleryinput"}),(0,f.jsx)("input",{onChange:e=>A({...B,uploaded_cert_assets:[...e.target.files],modal_type:"certificates",modal_open:!0}),ref:w,multiple:!0,accept:"image/*",className:"hidden",type:"file",id:"badgeinput"}),(0,f.jsx)(b.A,{open:B.modal_open,close:()=>{A({...B,modal_open:!1})},closeOnDocumentClick:!1,children:(0,f.jsxs)("div",{children:["gallery"===B.modal_type&&(0,f.jsx)("p",{className:"w-full bg-[#003640] rounded-t-md p-2 mb-8 text-white",children:"Uploading To Business Gallery"}),"certificates"===B.modal_type&&(0,f.jsx)("p",{className:"w-full bg-[#003640] rounded-t-md p-2 mb-8 text-white",children:"Uploading To Business Badges / Certificates"}),(0,f.jsxs)("div",{className:"flex items-center w-3/4 justify-evenly overflow-scroll",children:["gallery"===B.modal_type&&B.uploaded_gallery_assets.map(((e,s)=>(0,f.jsxs)("div",{className:"relative mx-2",children:[(0,f.jsx)("img",{onClick:()=>R(s,"gallery"),src:l.A,alt:"image delete icon",width:"20px",className:"absolute border cursor-pointer bg-white border-white"}),(0,f.jsx)("img",{className:"h-[10vw] rounded-md aspect-auto",src:URL.createObjectURL(e),alt:"gallery image"})]}))),"certificates"===B.modal_type&&B.uploaded_cert_assets.map(((e,s)=>(0,f.jsxs)("div",{className:"relative mx-2",children:[(0,f.jsx)("img",{onClick:()=>R(s,"certificates"),src:l.A,alt:"image delete icon",width:"20px",className:"absolute border cursor-pointer bg-white border-white"}),(0,f.jsx)("img",{className:"h-[10vw] rounded-md aspect-auto",src:URL.createObjectURL(e),alt:"Certificate image"})]})))]}),(0,f.jsx)("button",{onClick:()=>{let e="gallery"===B.modal_type?B.uploaded_gallery_assets:B.uploaded_cert_assets;if(e.length>3)return void(0,g.Ax)("You can only upload up to 3 files at a time");let s=new FormData;s.append("type",B.modal_type),e.forEach((e=>{s.append("images",e)})),(0,h.Zn)(s).then((e=>{A({...B,[B.modal_type]:[...B[B.modal_type],...e.data.asset_url],modal_open:!1}),(0,g.Zx)(e.data.message)})).catch((e=>{(0,g.Ax)(e.response.data.message)}))},className:"px-4 py-2 bg-[#1E90FF] text-white font-Nunito rounded-md float-right my-2",children:"Upload"})]})})]})}},6435:(e,s,a)=>{a.d(s,{A:()=>i});var t=a(9950),l=a(3300),n=a(4414);const i=e=>{const[s,a]=(0,t.useState)({...e});return(0,n.jsx)("div",{id:"backdrop",onClick:s=>{s.preventDefault(),!1!==e.closeOnDocumentClick&&"backdrop"===s.target.id&&e.close()},style:{display:e.open?"inherit":"none"},className:"fixed z-10 left-0 top-0 w-[100vw] h-[100vh] bg-[#1b1818c7] flex justify-center items-center",children:(0,n.jsxs)("section",{className:"fixed h-auto min-w-[20vw] bg-white rounded-lg p-4 ",children:[(0,n.jsx)("div",{onClick:e.close,className:"mobile:hidden mobile:-top-10 absolute p-2 bg-slate-300 rounded-full -top-6 -right-6 hover:scale-105 border border-dotted border-black",children:(0,n.jsx)("img",{className:"",width:"",src:l.A,alt:"modal Close Btn"})}),t.Children.map(e.children,(s=>t.cloneElement(s,e)))]})})}},7956:(e,s,a)=>{a.d(s,{A:()=>d});const t={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let l;const n=new Uint8Array(16);function i(){if(!l&&(l="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!l))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return l(n)}const r=[];for(let c=0;c<256;++c)r.push((c+256).toString(16).slice(1));function o(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(r[e[s+0]]+r[e[s+1]]+r[e[s+2]]+r[e[s+3]]+"-"+r[e[s+4]]+r[e[s+5]]+"-"+r[e[s+6]]+r[e[s+7]]+"-"+r[e[s+8]]+r[e[s+9]]+"-"+r[e[s+10]]+r[e[s+11]]+r[e[s+12]]+r[e[s+13]]+r[e[s+14]]+r[e[s+15]]).toLowerCase()}const d=function(e,s,a){if(t.randomUUID&&!s&&!e)return t.randomUUID();const l=(e=e||{}).random||(e.rng||i)();if(l[6]=15&l[6]|64,l[8]=63&l[8]|128,s){a=a||0;for(let e=0;e<16;++e)s[a+e]=l[e];return s}return o(l)}}}]);