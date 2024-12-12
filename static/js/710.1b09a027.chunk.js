"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[710],{1003:(e,t,s)=>{s.d(t,{A:()=>i});s(9950);const i=s.p+"static/media/arrow-left-solid.07f8c39113e8fb15b640ecafe6256813.svg"},5415:(e,t,s)=>{s.d(t,{A:()=>i});s(9950);const i=s.p+"static/media/camera.41ab8f869278450ea87f7359cefc43e7.svg"},6033:(e,t,s)=>{s.d(t,{A:()=>i});s(9950);const i=s.p+"static/media/sendicon.959c9c9a24b95e47529320c7bbbdd93c.svg"},4710:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Y});var i=s(9950),a=s(2832),n=s(9182),r=s(8947),d=s(9881),o=s(6033),c=s(9749),l=s(8429),h=s(346),m=s(8341),g=s(7956),u=s(3236),x=s(9465),p=s(1277),f=s(2974),b=s(8632),v=s(2351),w=s(7246);const j=s.p+"static/media/emojij.3e6f188606533ff777f9eaf693998049.svg";var y=s(8547),N=s(3143),S=s(1840),M=s(3999),k=s(5415),I=s(6435);const C=s.p+"static/media/photoCapture.6b3ebffc31d1ac789109e0203554c129.svg";const A=s.p+"static/media/switchCamera.bc4f31afafac7c50f2392cbd607d77f3.svg";const F=s.p+"static/media/reload.fc439ddb9008fc80c2a5297ababb4136.svg";s.p;var D=s(4414);class E extends i.Component{constructor(e){super(e),this.initializeMedia=async()=>{this.setState({...this.state,imageDataURL:null}),"mediaDevices"in navigator||(navigator.mediaDevices={}),"getUserMedia"in navigator.mediaDevices||(navigator.mediaDevices.getUserMedia=function(e){var t=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return t?new Promise(((s,i)=>{t.call(navigator,e,s,i)})):Promise.reject(new Error("getUserMedia Not Implemented"))});const e=await this.getListOfVideoInputs();e.length?navigator.mediaDevices.getUserMedia({video:{deviceId:{exact:e[this.cameraNumber].deviceId}}}).then((e=>{this.player.srcObject=e})).catch((e=>{console.error(e)})):alert("The device does not have a camera")},this.capturePicture=()=>{var e=document.createElement("canvas");e.width=this.player.videoWidth,e.height=this.player.videoHeight,e.getContext("2d").drawImage(this.player,0,0,e.width,e.height),this.player.srcObject.getVideoTracks().forEach((e=>{e.stop()}));let t=e.toDataURL();this.props.setImage(t),this.setState({...this.state,imageDataURL:t})},this.switchCamera=async()=>{const e=await this.getListOfVideoInputs();e.length>1?(this.player.srcObject&&this.player.srcObject.getVideoTracks().forEach((e=>{e.stop()})),0===this.cameraNumber?this.cameraNumber=1:1===this.cameraNumber&&(this.cameraNumber=0),this.initializeMedia()):1===e.length?alert("The device has only one camera"):alert("The device does not have a camera")},this.getListOfVideoInputs=async()=>(await navigator.mediaDevices.enumerateDevices()).filter((e=>"videoinput"===e.kind)),this.refresh=async()=>{this.initializeMedia()},this.cameraNumber=0,this.state={imageDataURL:null,open:e.open}}componentDidUpdate(e){if(1!=e.open&&1==this.props.open)this.initializeMedia();else if(!0!==this.props.open){var t;null!==(t=this.player)&&void 0!==t&&t.srcObject&&this.player.srcObject.getVideoTracks().forEach((e=>{e.stop()}))}}render(){const e=Boolean(this.state.imageDataURL)?(0,D.jsx)("img",{src:this.state.imageDataURL,alt:"cameraPic"}):(0,D.jsx)("video",{ref:e=>{this.player=e},autoPlay:!0});return(0,D.jsxs)("div",{className:"App",children:[e,(0,D.jsxs)("div",{className:"mt-2 flex justify-center",children:[(0,D.jsx)("button",{onClick:this.refresh,children:(0,D.jsx)("img",{src:F,className:"mobile:mx-1 mobile:p-1 p-2 mx-2 bg-slate-300 rounded-full border border-dotted border-black",alt:"switch camera"})}),(0,D.jsx)("button",{onClick:this.capturePicture,children:(0,D.jsx)("img",{src:C,className:"mobile:p-1 p-2 bg-slate-300 rounded-full border border-dotted border-black",alt:"photo capture"})}),(0,D.jsx)("button",{onClick:this.switchCamera,children:(0,D.jsx)("img",{src:A,className:"mobile:mx-1 mobile:p-1 p-2 mx-2 bg-slate-300 rounded-full border border-dotted border-black",alt:"switch camera"})})]})]})}}const U=E,B=e=>(0,D.jsx)(I.A,{close:e.close,open:e.open,setImage:e.setImage,children:(0,D.jsx)(U,{})});var R=s(3300),T=s(4127);const O=s.p+"static/media/startyellow.dfa63203bd300817df4432ae4067cb38.svg";const L=s.p+"static/media/mobilelink.d8487383c55c009da4df6e430e46b803.svg";const q=s.p+"static/media/mobilefrinds.dd35e8a153db716c6dd329a95e01cc23.svg";const V=s.p+"static/media/mobilerandomchaticon.827840e9c548d9c173e1f07b5716f67d.svg";var P=s(1003),z=s(8583),G=s(5887);const _=new(s(6719).Ay)("penguinduo");async function W(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;try{let t=_.friends.orderBy("lastInteraction").reverse();e&&Number.isInteger(e)&&e>0&&(t=t.limit(e));const s=await t.toArray();for(let e of s){const t=await _.messages.where({sender:e.friendId,status:"unread"}).count();e.unreadCount=t}return console.log("Retrieved ".concat(s.length," friends sorted by last interaction")),s}catch(t){throw console.error("Error fetching friends sorted by last interaction:",t),t}}async function J(e){try{let t=e.sender.username===c.A.getState().authentication.userName?e.receiver.username:e.sender.username;const s=await _.messages.add({messageId:e.messageId||e.token,friendId:t,sender:e.sender.username,receiver:e.receiver.username,messageContent:JSON.stringify(e.content),timestamp:e.timestamp||(new Date).toISOString(),type:e.type,status:e.status,metadata:JSON.stringify(e.metadata)});return console.log("Message stored locally"),async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(new Date).toISOString();try{return await _.friends.update(e,{lastInteraction:t})?(console.log("Last interaction updated for friend"),!0):(console.log("Friend ".concat(e," not found")),!1)}catch(s){throw console.error("Error updating last interaction for friend ".concat(e,":"),s),s}}(t,e.timestamp||(new Date).toISOString()),s}catch(t){throw console.error("Error storing message:",t),t}}_.version(4).stores({friends:"friendId, lastInteraction",messages:"++id, messageId, friendId, sender, receiver, messageContent, timestamp, type, status, metadata",pendingMessages:"messageId, senderId, messageContent, timestamp"}),_.open().catch((e=>{console.error("Failed to open database:",e.stack||e)}));class K extends i.Component{static getDerivedStateFromProps(e,t){return{...t,isMatched:e.SocConState.isMatched,recepientId:e.SocConState.recepientId,matchRequested:e.SocConState.isMatched?!e.SocConState.isMatched:t.matchRequested,device:e.globalState.device,alertMsg:e.SocConState.isMatched!=t.isMatched&&1==t.isMatched?"User disconnected":void 0,alertType:e.SocConState.isMatched!=t.isMatched&&1==t.isMatched?"warning":void 0}}constructor(e){var t;super(e),t=this,this.keyDown=e=>{"Enter"===e.code&&(e.preventDefault(),this.sendMessage())},this.requestMatch=()=>{(0,T.Rt)({eventType:"buttonclick",triggerelement:"match button"}),this.state.matchRequested?this.setState({...this.state,alertMsg:"Processing match request",alertType:"info"}):(this.textList=[],this.setState({...this.state,matchRequested:!0,chatMode:"random"}),this.state.Socket.emit("MatchRequest",{mode:"chat",name:this.props.authentication.name,age:this.props.authentication.age,gender:this.props.authentication.gender}))},this.revokeMatch=()=>{this.state.isMatched?((0,T.Rt)({eventType:"buttonclick",triggerelement:"disconnect button"}),this.state.Socket.emit("MatchRevoked",{recepientId:this.state.recepientId}),this.textList=[],window.sessionStorage.removeItem("recepientName"),window.sessionStorage.removeItem("recepientGender"),c.A.dispatch((0,x.c1)())):this.setState({...this.state,alertMsg:"You're not connected",alertType:"warning"})},this.sendMessage=()=>{if((this.state.message.length>0||this.state.imageData)&&(this.state.isMatched||"async"===this.state.chatMode)){if(this.textList.push({type:"sent",kind:this.state.imageData?"multimedia/image":"text",image:this.state.imageData?this.state.imageData:void 0,message:this.state.message?this.state.message:"",uuid:(0,g.A)()}),this.setState({...this.state,message:"",imageData:void 0,emojiVisible:!1}),"random"===this.state.chatMode&&this.state.Socket.emit(this.state.imageData?"image":"chat",{recepientId:this.state.recepientId,text:this.state.message?this.state.message:"",kind:this.state.imageData?"multimedia/image":"text",image:this.state.imageData?this.state.imageData:void 0}),"async"===this.state.chatMode){let e=(0,g.A)(),t=this.prepareMsgObject(e);J(t),this.state.Socket.emit("asyncchat",t),this.setState({...this.state,message:"",imageData:void 0})}this.forceUpdate(),this.scrollToBottom()}else this.state.isMatched||this.setState({...this.state,alertMsg:"You're not matched yet \nclick on match button to get matched",alertType:"warning"})},this.receiveMessage=e=>{this.textList.push({type:"received",message:e.text?e.text:void 0,kind:e.kind,image:"multimedia/image"===e.kind?e.image:void 0,uuid:(0,g.A)()}),this.forceUpdate(),this.scrollToBottom()},this.setEmojiVisibility=()=>{this.setState({...this.state,emojiVisible:!this.state.emojiVisible})},this.addEmoji=e=>{this.setState({...this.state,message:this.state.message+e.emoji})},this.matchTimeup=()=>{this.setState({...this.state,matchRequested:!1,alertMsg:"Failed to find match, try again in sometime",alertType:"success"})},this.initImageModal=()=>{this.setState({...this.state,imageCaptureOpen:!this.state.imageCaptureOpen})},this.destroyModal=()=>{this.setState({...this.state,imageCaptureOpen:!1})},this.setImage=e=>{this.setState({...this.state,imageData:e})},this.getTime=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e?new Date(e):new Date,s=t.getHours();return[s>12?String(s-12).padStart(2,"0"):s,String(t.getMinutes()).padStart(2,"0"),s>12?"PM":"AM"].join(" ")},this.getMsgElement=function(e){let s,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return s=(0,D.jsxs)("div",{id:i?"end":"",className:" w-2/3 h-fit flex flex-col ".concat("sent"==e.type?"float-right items-end":"float-left items-start"),children:[(0,D.jsxs)("p",{className:"text-[10px] text-gray-400 font-light",children:[t.getTime(e.time)," ","sent"==e.type?"You":window.sessionStorage.getItem("recepientName")]}),"multimedia/image"===e.kind||"image"===e.kind?(0,D.jsx)("img",{src:e.image,alt:"image"}):null,(0,D.jsx)("div",{className:"warp w-full ".concat("sent"==e.type?"bg-[#115EBE] text-white rounded-tr-none":"bg-white border border-[#115EBE] rounded-tl-none"," px-4 py-2 rounded-lg my-1 shadow-sm text-sm"),children:e.message})]},e.uuid),s},this.deleteImage=()=>{this.setState({...this.state,imageData:void 0})},this.setMode=e=>{this.getSavedFriends(),this.setState({...this.state,selectedMode:e||"friends"})},this.getCuratedUsers=()=>{(0,z.X5)().then((async e=>{let t=await W(),s=await async function(){let e=c.A.getState().authentication.userName||void 0;if(!e)return[];const t=await _.friends.toArray(),s=new Set(t.map((e=>e.friendId)));return(await _.messages.filter((t=>!s.has(t.sender)&&t.receiver===e)).toArray()).reduce(((e,t)=>(e[t.sender]||(e[t.sender]=[]),e[t.sender].push(t),e)),{})}(),i=Object.keys(s);t=t.map((e=>e.friendId)),e.length>0&&this.setState({...this.state,curatedUsers:e.filter((e=>!t.includes(e.username))).map((e=>(i.includes(e.username)&&(e.request=!0),e)))})}))},this.getFriends=()=>{(0,z.IX)().then((e=>{try{!async function(e){try{const t=await _.friends.toCollection().primaryKeys(),s=e.filter((e=>!t.includes(e.friendId)));s.length>0?(await _.friends.bulkAdd(s),console.log("".concat(s.length," new friends added successfully"))):console.log("No new friends to add")}catch(t){throw console.error("Error adding new friends:",t),t}}(e.map((e=>({friendId:e.username,lastInteraction:e.lastInteraction||(new Date).toISOString()}))))}catch(t){}}))},this.getSavedFriends=()=>{W().then((e=>{this.setState({...this.state,savedFriends:e||[]})}))},this.refreshChatWindow=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.state.authedRecepientId;(async function(e){try{await _.messages.where("friendId").equals(e).modify({status:"read"});let t=c.A.getState().authentication.userName;return await _.messages.where("friendId").equals(e).and((e=>e.sender===t||e.receiver===t)).toArray()}catch(t){throw console.error("Failed to fetch messages:",t),t}})(e).then((s=>{t.getSavedFriends(),t.textList=[...s.map((t=>{let s=JSON.parse(t.messageContent);return{type:t.sender==e?"received":"sent",kind:t.type,image:s.mediaUrl?s.mediaUrl:void 0,message:s.text,uuid:t.messageId,time:t.timestamp}}))],t.forceUpdate(),t.scrollToBottom()}))},this.setSelectedUser=(e,t)=>{window.sessionStorage.setItem("recepientName",t),this.refreshChatWindow(e),this.setState({...this.state,authedRecepientId:e,chatMode:"async"})},this.prepareMsgObject=e=>({token:e,type:this.state.imageData?"image":"text",content:{text:this.state.message,mediaUrl:this.state.imageData||"",mediaType:this.state.imageData?"image/jpeg":""},sender:{id:"",username:c.A.getState().authentication.userName,displayName:"",avatarUrl:""},receiver:{id:"",username:this.state.authedRecepientId,displayName:"",avatarUrl:""},status:"sent",metadata:{priority:"normal",tags:[],customData:{}}}),this.createFriendship=e=>{(0,z.nO)(e).then((e=>{this.getFriends(),this.getCuratedUsers()}))},this.mobilesetExplore=()=>{c.A.getState().authentication.authenticated?this.setState({...this.state,chatMode:"async",selectedMode:"explore"}):(0,G.Ay)("Please login to use this feature",{style:{background:"#FFE900",borderRadius:"5px",fontSize:"10px",padding:"2px"}})},this.mobilesetFriends=()=>{c.A.getState().authentication.authenticated?this.setState({...this.state,chatMode:"async",selectedMode:"friends"}):(0,G.Ay)("Please login to use this feature",{style:{background:"#FFE900",borderRadius:"5px",fontSize:"10px",padding:"2px"}})},this.state={message:"",redirect:this.props.authentication.name?void 0:"/",Socket:void 0,isMatched:this.props.SocConState.isMatched,recepientId:this.props.SocConState.recepientId,alertMsg:void 0,alertType:void 0,matchRequested:!1,mobileButtonVisible:!0,emojiVisible:!1,device:this.props.globalState.device,imageCaptureOpen:!1,imageData:void 0,selectedMode:"explore",curatedUsers:[],savedFriends:[],chatMode:"",authedRecepientId:""},this.textList=[]}scrollToBottom(){setTimeout((e=>{document.getElementById("end").scrollIntoView({behavior:"smooth",block:"nearest"})}),0)}componentDidMount(){this.scrollToBottom(),this.props.authentication.name&&((new h.y).getSocket().then((e=>{e.on("chat",(e=>{this.receiveMessage(e)})),e.on("image",(e=>{this.receiveMessage(e)})),e.on("asyncchat",(t=>{t.forEach((t=>{t.status="unread",J(t).then((s=>{e.emit("asyncchatreceived",[t.messageId])}))})),this.refreshChatWindow(),this.getSavedFriends(),this.forceUpdate(),this.scrollToBottom()})),e.on("asyncMsgRecieved",(e=>{let{token:t,messageId:s}=e;!async function(e,t){try{await _.messages.where("messageId").equals(e).modify({messageId:t})>0?console.log("Message updated with server ID"):console.log("No message found with token")}catch(s){throw console.error("Error updating message with server ID:",s),s}}(t,s)})),this.setState({...this.state,Socket:e})})),async function(){try{const e=await _.messages.toArray(),t=new Set;for(const s of e)t.has(s.messageId)?await _.messages.delete(s.id):t.add(s.messageId);console.log("Duplicate messages removed successfully.")}catch(e){throw console.error("Error removing duplicate messages:",e),e}}(),this.getFriends(),this.getSavedFriends(),this.getCuratedUsers())}componentWillUnmount(){this.state.Socket&&this.state.Socket.disconnect(),window.sessionStorage.removeItem("recepientName"),window.sessionStorage.removeItem("recepientGender")}render(){return(0,D.jsxs)("div",{children:[(0,D.jsxs)("div",{className:" h-[100vh] flex flex-col relative bg-[#E5F5FF] sm:px-2",children:[(0,D.jsx)(B,{}),(0,D.jsx)(G.l$,{}),(0,D.jsx)(a.A,{}),(0,D.jsx)(S.A,{}),this.state.redirect&&(0,D.jsx)(l.C5,{to:this.state.redirect,replace:!0}),this.state.alertMsg&&(0,D.jsx)(u.A,{text:this.state.alertMsg,callBack:()=>{this.setState({...this.state,alertMsg:void 0,alertType:void 0})},type:this.state.alertType,timeOut:4e3}),(0,D.jsxs)("div",{className:"w-full h-[100%] flex",children:["mobile"!==c.A.getState().globalState.device&&(0,D.jsxs)("div",{className:" w-[40%] p-2 h-[100%] mobile:hidden",children:[(0,D.jsxs)("div",{className:"p-1 flex w-full justify-between",children:[(0,D.jsx)("button",{onClick:()=>this.setMode("friends"),className:"w-[49%] rounded-md h-fit py-2 border font-Nunito border-white ".concat("friends"==this.state.selectedMode?"bg-[#B7E3FF]":" bg-[#D1EDFF]"),children:"Friends"}),(0,D.jsx)("button",{onClick:()=>this.setMode("explore"),className:"w-[49%] rounded-md h-fit py-2 border font-Nunito border-white ".concat("explore"==this.state.selectedMode?"bg-[#B7E3FF]":" bg-[#D1EDFF]"),children:"Explore"})]}),(0,D.jsxs)("div",{className:"w-full h-[90%] px-1 relative",children:[!c.A.getState().authentication.authenticated&&(0,D.jsx)("div",{className:"absolute w-full h-full backdrop-blur-[3px] z-10 flex justify-center items-center",children:(0,D.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,D.jsx)("p",{children:"Please Login / Sign Up to use this feature"}),(0,D.jsx)("button",{onClick:()=>window.location.href="/auth",className:"flex items-center gap-3 text-sm p-3 border-b border-b-Primary rounded-md m-4 text-white bg-gradient-to-r from-[#CE4AFD] to-[#10A3FF]",children:"Login / Sign Up"})]})}),(0,D.jsx)("input",{type:"text",placeholder:"Search",className:"w-full font-thin px-2 py-[1px] outline-none rounded border border-[#B7E3FF]"}),this.state.savedFriends.map((e=>(0,D.jsxs)("div",{onClick:()=>this.setSelectedUser(e.friendId,e.friendId),style:{display:"friends"==this.state.selectedMode?"flex":"none"},className:"flex p-2 justify-between hover:bg-[#D1EDFF]",children:[(0,D.jsxs)("div",{className:"flex items-center",children:[(0,D.jsx)("div",{className:"rounded-full bg-white p-3 h-12 w-12 flex justify-center items-center",children:(0,D.jsx)("img",{src:d.A,alt:"user pic",className:"scale-75"})}),(0,D.jsxs)("div",{className:"px-4 py-1",children:[(0,D.jsx)("p",{children:e.friendId}),(0,D.jsx)("p",{className:"text-[10px] text-light_green",children:"-"})]})]}),parseInt(e.unreadCount)>0&&(0,D.jsx)("div",{className:"p-2 my-auto rounded-full flex justify-center items-center text-[10px] bg-[#5F9EA0] text-white w-5 h-5",children:(0,D.jsx)("span",{children:e.unreadCount})})]}))),this.state.curatedUsers.map((e=>(0,D.jsxs)("div",{onClick:()=>this.setSelectedUser(e.username,e.fullname),style:{display:"explore"==this.state.selectedMode?"flex":"none"},className:"flex items-center p-2 justify-between hover:bg-[#D1EDFF]",children:[(0,D.jsxs)("div",{className:" flex items-center",children:[(0,D.jsx)("div",{className:"rounded-full bg-white p-3 h-12 w-12 flex justify-center items-center",children:(0,D.jsx)("img",{src:d.A,alt:"user pic",className:"scale-75"})}),(0,D.jsxs)("div",{className:"px-4 py-1",children:[(0,D.jsx)("p",{children:e.fullname}),(0,D.jsxs)("div",{className:"flex h-fit items-center",children:[(0,D.jsx)("img",{src:"Male"==e.gender?p:"Female"==e?f:b,className:"",alt:"gender icon",width:"15px"}),(0,D.jsx)("p",{className:"text-[12px] px-1 text-slate-400",children:e.age}),(0,D.jsx)("hr",{className:"border h-4 mx-2 border-black"}),(0,D.jsx)("p",{className:"text-[12px] px-1 text-slate-400",children:e.location||"-"})]})]}),e.request&&(0,D.jsx)("button",{onClick:t=>this.createFriendship(e.username),className:"bg-gradient-to-r from-[#CE4AFD] to-[#10A3FF] text-xs p-2 rounded-full text-white",children:"Add friend"})]}),(0,D.jsxs)("div",{className:"rounded-full flex flex-col justify-center items-center text-[10px] w-6 h-6",children:[(0,D.jsx)("img",{src:O,alt:"start"}),(0,D.jsx)("p",{children:e.star||0})]})]},e.username)))]})]}),"mobile"===c.A.getState().globalState.device&&""===this.state.chatMode&&(0,D.jsx)("div",{className:"w-full hidden mobile:show",children:(0,D.jsxs)("div",{className:"grid grid-cols-7 gap-8 p-4",children:[(0,D.jsxs)("div",{onClick:this.mobilesetExplore,className:"shadow-panel hover:shadow-none text-center col-start-1 flex flex-col justify-center items-center text-white font-Nunito text-xl col-end-4 h-[25vh] bg-gradient-to-b from-[#CE4AFD] to-[#10A3FF] rounded-2xl p-2",children:[(0,D.jsx)("img",{src:L,alt:"explore connection icon"}),(0,D.jsx)("h4",{className:"mt-4",children:"Explore Connections"})]}),(0,D.jsxs)("div",{onClick:this.mobilesetFriends,className:"shadow-panel hover:shadow-none text-center col-start-4 flex flex-col justify-center items-center text-white font-Nunito text-xl col-end-7 h-[25vh] bg-gradient-to-b from-[#CE4AFD] to-[#10A3FF] rounded-2xl p-2",children:[(0,D.jsx)("img",{src:q,alt:"frinds icon"}),(0,D.jsx)("h4",{className:"mt-4",children:"Connect Friends"})]}),(0,D.jsxs)("div",{onClick:()=>this.setState({...this.state,chatMode:"random",recepientId:"",authedRecepientId:""}),className:"shadow-panel hover:shadow-none text-center col-start-1 flex flex-col justify-center items-center text-white font-Nunito text-xl col-end-4 h-[25vh] bg-gradient-to-b from-[#CE4AFD] to-[#10A3FF] rounded-2xl p-2",children:[(0,D.jsx)("img",{src:V,alt:"frinds icon"}),(0,D.jsx)("h4",{className:"mt-4",children:"Random chats"})]})]})}),"mobile"===c.A.getState().globalState.device&&"async"===this.state.chatMode&&""===this.state.authedRecepientId&&""===this.state.recepientId&&(0,D.jsxs)("div",{className:"mobile:w-full mobile:p-0",children:[(0,D.jsxs)("div",{className:"p-1 flex w-full justify-between",children:[(0,D.jsx)("div",{className:"flex",children:(0,D.jsx)("img",{onClick:e=>{this.setState({...this.state,chatMode:""}),window.sessionStorage.removeItem("recepientName"),this.textList=[]},className:"mr-4",src:P.A,alt:"back icon",width:"16px"})}),(0,D.jsx)("button",{onClick:()=>this.setMode("friends"),className:"w-[49%] rounded-md h-fit py-2 border font-Nunito  ".concat("friends"==this.state.selectedMode?"bg-[#B7E3FF]":" bg-transparent"),children:"Friends"}),(0,D.jsx)("button",{onClick:()=>this.setMode("explore"),className:"w-[49%] rounded-md h-fit py-2 border font-Nunito  ".concat("explore"==this.state.selectedMode?"bg-[#B7E3FF]":" bg-transparent"),children:"Explore"})]}),"friends"===this.state.selectedMode?this.state.savedFriends.map((e=>(0,D.jsxs)("div",{onClick:()=>this.setSelectedUser(e.friendId,e.friendId),style:{display:"friends"==this.state.selectedMode?"flex":"none"},className:"flex p-2 justify-between hover:bg-[#D1EDFF]",children:[(0,D.jsxs)("div",{className:"flex items-center",children:[(0,D.jsx)("div",{className:"rounded-full bg-white p-3 h-12 w-12 flex justify-center items-center",children:(0,D.jsx)("img",{src:d.A,alt:"user pic",className:"scale-75"})}),(0,D.jsxs)("div",{className:"px-4 py-1",children:[(0,D.jsx)("p",{children:e.friendId}),(0,D.jsx)("p",{className:"text-[10px] text-light_green",children:"-"})]})]}),parseInt(e.unreadCount)>0&&(0,D.jsx)("div",{className:"p-2 my-auto rounded-full flex justify-center items-center text-[10px] bg-[#5F9EA0] text-white w-5 h-5",children:(0,D.jsx)("span",{children:e.unreadCount})})]}))):this.state.curatedUsers.map((e=>(0,D.jsxs)("div",{onClick:()=>this.setSelectedUser(e.username,e.fullname),style:{display:"explore"==this.state.selectedMode?"flex":"none"},className:"flex items-center p-2 justify-between hover:bg-[#D1EDFF]",children:[(0,D.jsxs)("div",{className:" flex items-center",children:[(0,D.jsx)("div",{className:"rounded-full bg-white p-3 h-12 w-12 flex justify-center items-center",children:(0,D.jsx)("img",{src:d.A,alt:"user pic",className:"scale-75"})}),(0,D.jsxs)("div",{className:"px-4 py-1",children:[(0,D.jsx)("p",{children:e.fullname}),(0,D.jsxs)("div",{className:"flex h-fit items-center",children:[(0,D.jsx)("img",{src:"Male"==e.gender?p:"Female"==e?f:b,className:"",alt:"gender icon",width:"15px"}),(0,D.jsx)("p",{className:"text-[12px] px-1 text-slate-400",children:e.age}),(0,D.jsx)("hr",{className:"border h-4 mx-2 border-black"}),(0,D.jsx)("p",{className:"text-[12px] px-1 text-slate-400",children:e.location||"-"})]})]}),e.request&&(0,D.jsx)("button",{onClick:t=>this.createFriendship(e.username),className:"bg-gradient-to-r from-[#CE4AFD] to-[#10A3FF] text-xs p-2 rounded-full text-white",children:"Add friend"})]}),(0,D.jsxs)("div",{className:"rounded-full flex flex-col justify-center items-center text-[10px] w-6 h-6",children:[(0,D.jsx)("img",{src:O,alt:"start"}),(0,D.jsx)("p",{children:e.star||0})]})]},e.username)))]}),"mobile"===c.A.getState().globalState.device&&("random"===this.state.chatMode||"async"===this.state.chatMode&&this.state.authedRecepientId.length>0)&&(0,D.jsx)("div",{className:" w-[60%] px-12 py-4 h-[100%] flex justify-center mobile:w-full mobile:p-0",children:(0,D.jsxs)("div",{className:" mobile:w-full mobile:h-[92%]  w-1/2 h-[88vh] px-2 py-1 flex flex-col justify-start rounded-xl mobile:rounded-none",children:[(0,D.jsxs)("div",{className:"bg-white h-10 flex justify-between p-2 rounded w-full shadow-md ",children:[(0,D.jsxs)("div",{className:"flex",children:[(0,D.jsx)("img",{onClick:e=>{e.preventDefault(),this.setState({...this.state,chatMode:"random"===this.state.chatMode?"":this.state.chatMode,authedRecepientId:"",recepientId:""})},className:"mr-4",src:P.A,alt:"back icon",width:"16px"}),(0,D.jsx)("img",{className:"",src:d.A,width:"16px"}),(0,D.jsx)("p",{className:"text-sm text-oxford_blue mt-auto mx-3",children:window.sessionStorage.getItem("recepientName")?window.sessionStorage.getItem("recepientName"):"User Name"})]}),(0,D.jsx)("img",{className:"",src:"Male"===window.sessionStorage.getItem("recepientGender")?p:"Female"===window.sessionStorage.getItem("recepientGender")?f:b,width:"20px"})]}),(0,D.jsx)("div",{className:"h-full w-full my-1 p-2 overflow-y-scroll scroll-none scroll-hide",children:this.textList.map(((e,t)=>t+1==this.textList.length?this.getMsgElement(e,!0):this.getMsgElement(e,!1)))}),this.state.imageData?(0,D.jsxs)("div",{className:"w-full flex justify-center",children:[(0,D.jsx)("img",{className:"w-32 rounded-lg p-1 border border-black border-dotted",src:this.state.imageData?this.state.imageData:void 0,alt:"captured image"}),(0,D.jsx)("img",{onClick:this.deleteImage,className:"p-2",src:R.A,alt:"delete image"})]}):"","random"===this.state.chatMode&&(0,D.jsxs)("div",{className:"hidden mobile:show w-full h-fit rounded-md bg-[#aaa8a850]",children:[(0,D.jsx)("div",{className:"w-full",onClick:()=>this.setState({...this.state,mobileButtonVisible:!this.state.mobileButtonVisible}),children:(0,D.jsx)("img",{src:w.A,className:"mx-auto bg-white rounded-b-md"})}),this.state.mobileButtonVisible&&(0,D.jsxs)("div",{className:"flex justify-around",children:[(0,D.jsx)("button",{className:"w-12 h-12 shadow flex p-2 justify-center items-center rounded-full ".concat(this.state.isMatched?"bg-[#d7dbd6]":"bg-[#A7FB9A]","\n\t\t\t\t\t\t\t\t\t\ttext-[8px] font-semibold hover:bg-[#8ef57e] hover:shadow-xl"),disabled:this.state.isMatched,onClick:this.requestMatch,children:this.state.matchRequested?(0,D.jsx)(v.A,{size:4}):"Connect"}),this.state.matchRequested&&"mobile"===this.state.device?(0,D.jsx)(N.A,{countdown:15,callback:this.matchTimeup}):void 0,(0,D.jsx)("button",{className:"w-12 h-12 flex p-2 justify-center items-center rounded-full bg-[#FBB19A] text-[8px] hover:bg-[#f79b80] shadow-lg font-semibold",onClick:this.revokeMatch,children:"Disconnect"})]})]}),(0,D.jsxs)("div",{className:"bg-white border border-[#e5e7eb] min-h-[2.5rem] flex items-center px-2 rounded-full w-full cursor-pointer shadow-md hover:shadow-none",children:[(0,D.jsx)("div",{onClick:this.setEmojiVisibility,children:(0,D.jsx)("img",{className:"",width:"25px",src:j})}),(0,D.jsx)("input",{value:this.state.message,onKeyDown:this.keyDown,onChange:e=>this.setState({...this.state,message:e.target.value}),maxLength:100,className:"outline-none rounded-full px-1 w-[100%]"}),(0,D.jsx)("img",{onClick:this.initImageModal,src:k.A,width:"40px",className:"mx-1 px-2",alt:"camera icon"}),(0,D.jsx)("div",{onClick:this.sendMessage,children:(0,D.jsx)("img",{src:o.A,width:"30px"})})]}),(0,D.jsx)("div",{style:{display:this.state.emojiVisible?"initial":"none"},className:"w-full h-1/2",children:(0,D.jsx)(y.Ay,{onEmojiClick:this.addEmoji,height:"100%",width:"100%",emojiStyle:"native",searchDisabled:!0})})]})}),"mobile"!==c.A.getState().globalState.device&&(0,D.jsxs)("div",{className:" w-[60%] px-12 py-4 h-[100%] flex justify-center mobile:w-full mobile:p-0",children:[(0,D.jsxs)("div",{className:"w-1/3 flex flex-col justify-center mobile:hidden",children:[(0,D.jsxs)("button",{className:"w-40 h-10 flex p-2 justify-around my-2 rounded-full ".concat(this.state.isMatched?"bg-[#d7dbd6]":"bg-[#A7FB9A]","\n\t\t\t\t\t\t\ttext-sm hover:bg-[#8ef57e] hover:shadow-xl"),disabled:this.state.isMatched,onClick:this.requestMatch,children:[(0,D.jsx)("img",{width:"20px",src:r.A}),this.state.matchRequested?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(v.A,{size:4}),"desktop"==this.state.device?(0,D.jsx)(N.A,{countdown:15,callback:this.matchTimeup}):void 0]}):"Match"]}),(0,D.jsxs)("button",{className:"w-40 h-10 flex p-2 justify-around rounded-full bg-[#FBB19A] text-sm hover:bg-[#f79b80] hover:shadow-lg",onClick:this.revokeMatch,children:[(0,D.jsx)("img",{width:"20px",src:n.A}),"Disconnect"]})]}),(0,D.jsxs)("div",{className:" mobile:w-full mobile:h-full mobile:bg-[#ece2e47d] shadow-edge  w-1/2 h-[88vh] px-2 py-3 flex flex-col justify-between border rounded-xl mobile:rounded-none",children:[(0,D.jsxs)("div",{className:"bg-white h-10 flex justify-between p-2 rounded w-full shadow-md ",children:[(0,D.jsxs)("div",{className:"flex",children:[(0,D.jsx)("img",{className:"",src:d.A,width:"16px"}),(0,D.jsx)("p",{className:"text-sm text-oxford_blue mt-auto mx-3",children:window.sessionStorage.getItem("recepientName")?window.sessionStorage.getItem("recepientName"):"User Name"})]}),(0,D.jsx)("img",{className:"",src:"Male"===window.sessionStorage.getItem("recepientGender")?p:"Female"===window.sessionStorage.getItem("recepientGender")?f:b,width:"20px"})]}),(0,D.jsx)("div",{className:"h-full w-full my-1 p-2 overflow-y-scroll scroll-none scroll-hide",children:this.textList.map(((e,t)=>t+1==this.textList.length?this.getMsgElement(e,!0):this.getMsgElement(e,!1)))}),this.state.imageData?(0,D.jsxs)("div",{className:"w-full flex justify-center",children:[(0,D.jsx)("img",{className:"w-32 rounded-lg p-1 border border-black border-dotted",src:this.state.imageData?this.state.imageData:void 0,alt:"captured image"}),(0,D.jsx)("img",{onClick:this.deleteImage,className:"p-2",src:R.A,alt:"delete image"})]}):"",(0,D.jsxs)("div",{className:"hidden mobile:show w-full h-fit rounded-md bg-[#aaa8a850]",children:[(0,D.jsx)("div",{className:"w-full",onClick:()=>this.setState({...this.state,mobileButtonVisible:!this.state.mobileButtonVisible}),children:(0,D.jsx)("img",{src:w.A,className:"mx-auto bg-white rounded-b-md"})}),this.state.mobileButtonVisible&&(0,D.jsxs)("div",{className:"flex justify-around",children:[(0,D.jsx)("button",{className:"w-12 h-12 shadow flex p-2 justify-center items-center rounded-full ".concat(this.state.isMatched?"bg-[#d7dbd6]":"bg-[#A7FB9A]","\n\t\t\t\t\t\t\t\t\t\ttext-[8px] font-semibold hover:bg-[#8ef57e] hover:shadow-xl"),disabled:this.state.isMatched,onClick:this.requestMatch,children:this.state.matchRequested?(0,D.jsx)(v.A,{size:4}):"Connect"}),this.state.matchRequested&&"mobile"===this.state.device?(0,D.jsx)(N.A,{countdown:15,callback:this.matchTimeup}):void 0,(0,D.jsx)("button",{className:"w-12 h-12 flex p-2 justify-center items-center rounded-full bg-[#FBB19A] text-[8px] hover:bg-[#f79b80] shadow-lg font-semibold",onClick:this.revokeMatch,children:"Disconnect"})]})]}),(0,D.jsxs)("div",{className:"bg-white border border-[#e5e7eb] h-14 min-h-[2.5rem] flex items-center px-2 rounded-full w-full cursor-pointer shadow-md hover:shadow-none",children:[(0,D.jsx)("div",{onClick:this.setEmojiVisibility,children:(0,D.jsx)("img",{className:"",width:"25px",src:j})}),(0,D.jsx)("input",{value:this.state.message,onKeyDown:this.keyDown,onChange:e=>this.setState({...this.state,message:e.target.value}),maxLength:100,className:"outline-none rounded-full px-1 w-[100%]"}),(0,D.jsx)("img",{onClick:this.initImageModal,src:k.A,width:"40px",className:"mx-1 px-2",alt:"camera icon"}),(0,D.jsx)("div",{onClick:this.sendMessage,children:(0,D.jsx)("img",{src:o.A,width:"30px"})})]}),(0,D.jsx)("div",{style:{display:this.state.emojiVisible?"initial":"none"},className:"w-full h-1/2",children:(0,D.jsx)(y.Ay,{onEmojiClick:this.addEmoji,height:"100%",width:"100%",emojiStyle:"native",searchDisabled:!0})})]})]})]}),(0,D.jsx)(B,{open:this.state.imageCaptureOpen,close:this.destroyModal,setImage:this.setImage})]}),(0,D.jsx)(M.A,{})]})}}const Y=(0,m.Ng)((function(e){return{...e}}))(K)},6435:(e,t,s)=>{s.d(t,{A:()=>r});var i=s(9950),a=s(3300),n=s(4414);const r=e=>{const[t,s]=(0,i.useState)({...e});return(0,n.jsx)("div",{id:"backdrop",onClick:t=>{t.preventDefault(),!1!==e.closeOnDocumentClick&&"backdrop"===t.target.id&&e.close()},style:{display:e.open?"inherit":"none"},className:"fixed z-10 left-0 top-0 w-[100vw] h-[100vh] bg-[#1b1818c7] flex justify-center items-center",children:(0,n.jsxs)("section",{className:"fixed h-auto min-w-[20vw] bg-white rounded-lg p-4 ",children:[(0,n.jsx)("div",{onClick:e.close,className:"mobile:hidden mobile:-top-10 absolute p-2 bg-slate-300 rounded-full -top-6 -right-6 hover:scale-105 border border-dotted border-black",children:(0,n.jsx)("img",{className:"",width:"",src:a.A,alt:"modal Close Btn"})}),i.Children.map(e.children,(t=>i.cloneElement(t,e)))]})})}}}]);