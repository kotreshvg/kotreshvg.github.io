"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[661],{5170:function(e,t,a){a(7313);t.Z=a.p+"static/media/sendicon.959c9c9a24b95e47529320c7bbbdd93c.svg"},1661:function(e,t,a){a.r(t),a.d(t,{default:function(){return A}});var s=a(1413),i=a(5671),n=a(3144),o=a(136),r=a(7277),c=a(7313),d=a(7224),l=a(7185),m=a(6125),h=a(5034),u=a(5170),g=a(9864),p=a(8467),f=a(6446),v=a(3392),x=a(2549),b=a(1391),w=a(942),j=a(8933),Z=a(6306),k=a(2658),y=a(1577),M=a(4725);var S=a.p+"static/media/emojij.3e6f188606533ff777f9eaf693998049.svg",N=a(3936),C=a(4949),D=a(4319),I=a(9526);var T=a.p+"static/media/camera.41ab8f869278450ea87f7359cefc43e7.svg",B=a(9439),L=a(1973),U=a(6417),V=function(e){var t=(0,c.useState)((0,s.Z)({},e)),a=(0,B.Z)(t,2);a[0],a[1];return(0,U.jsx)("div",{id:"backdrop",onClick:function(t){t.preventDefault(),!1!==e.closeOnDocumentClick&&"backdrop"===t.target.id&&e.close()},style:{display:e.open?"inherit":"none"},className:"fixed left-0 top-0 w-[100vw] h-[100vh] bg-[#1b1818c7] flex justify-center items-center",children:(0,U.jsxs)("section",{className:"fixed h-auto min-w-[20vw] bg-white rounded-lg p-4 ",children:[(0,U.jsx)("div",{onClick:e.close,className:"mobile:hidden mobile:-top-10 absolute p-2 bg-slate-300 rounded-full -top-6 -right-6 hover:scale-105 border border-dotted border-black",children:(0,U.jsx)("img",{className:"",width:"",src:L.Z,alt:"modal Close Btn"})}),c.Children.map(e.children,(function(t){return c.cloneElement(t,e)}))]})})},R=a(4165),E=a(5861);var O=a.p+"static/media/photoCapture.6b3ebffc31d1ac789109e0203554c129.svg";var q=a.p+"static/media/switchCamera.bc4f31afafac7c50f2392cbd607d77f3.svg";var G=a.p+"static/media/reload.fc439ddb9008fc80c2a5297ababb4136.svg";a.p;var F=function(e){(0,o.Z)(a,e);var t=(0,r.Z)(a);function a(e){var n;return(0,i.Z)(this,a),(n=t.call(this,e)).initializeMedia=(0,E.Z)((0,R.Z)().mark((function e(){var t;return(0,R.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState((0,s.Z)((0,s.Z)({},n.state),{},{imageDataURL:null})),"mediaDevices"in navigator||(navigator.mediaDevices={}),"getUserMedia"in navigator.mediaDevices||(navigator.mediaDevices.getUserMedia=function(e){var t=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return t?new Promise((function(a,s){t.call(navigator,e,a,s)})):Promise.reject(new Error("getUserMedia Not Implemented"))}),e.next=5,n.getListOfVideoInputs();case 5:(t=e.sent).length?navigator.mediaDevices.getUserMedia({video:{deviceId:{exact:t[n.cameraNumber].deviceId}}}).then((function(e){n.player.srcObject=e})).catch((function(e){console.error(e)})):alert("The device does not have a camera");case 7:case"end":return e.stop()}}),e)}))),n.capturePicture=function(){var e=document.createElement("canvas");e.width=n.player.videoWidth,e.height=n.player.videoHeight,e.getContext("2d").drawImage(n.player,0,0,e.width,e.height),n.player.srcObject.getVideoTracks().forEach((function(e){e.stop()}));var t=e.toDataURL();n.props.setImage(t),n.setState((0,s.Z)((0,s.Z)({},n.state),{},{imageDataURL:t}))},n.switchCamera=(0,E.Z)((0,R.Z)().mark((function e(){var t;return(0,R.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getListOfVideoInputs();case 2:(t=e.sent).length>1?(n.player.srcObject&&n.player.srcObject.getVideoTracks().forEach((function(e){e.stop()})),0===n.cameraNumber?n.cameraNumber=1:1===n.cameraNumber&&(n.cameraNumber=0),n.initializeMedia()):1===t.length?alert("The device has only one camera"):alert("The device does not have a camera");case 4:case"end":return e.stop()}}),e)}))),n.getListOfVideoInputs=(0,E.Z)((0,R.Z)().mark((function e(){var t;return(0,R.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.enumerateDevices();case 2:return t=e.sent,e.abrupt("return",t.filter((function(e){return"videoinput"===e.kind})));case 4:case"end":return e.stop()}}),e)}))),n.refresh=(0,E.Z)((0,R.Z)().mark((function e(){return(0,R.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.initializeMedia();case 1:case"end":return e.stop()}}),e)}))),n.cameraNumber=0,n.state={imageDataURL:null,open:e.open},n}return(0,n.Z)(a,[{key:"componentDidUpdate",value:function(e){if(1!=e.open&&1==this.props.open)this.initializeMedia();else if(!0!==this.props.open){var t;null!==(t=this.player)&&void 0!==t&&t.srcObject&&this.player.srcObject.getVideoTracks().forEach((function(e){e.stop()}))}}},{key:"render",value:function(){var e=this,t=Boolean(this.state.imageDataURL)?(0,U.jsx)("img",{src:this.state.imageDataURL,alt:"cameraPic"}):(0,U.jsx)("video",{ref:function(t){e.player=t},autoPlay:!0});return(0,U.jsxs)("div",{className:"App",children:[t,(0,U.jsxs)("div",{className:"mt-2 flex justify-center",children:[(0,U.jsx)("button",{onClick:this.refresh,children:(0,U.jsx)("img",{src:G,className:"mobile:mx-1 mobile:p-1 p-2 mx-2 bg-slate-300 rounded-full border border-dotted border-black",alt:"switch camera"})}),(0,U.jsx)("button",{onClick:this.capturePicture,children:(0,U.jsx)("img",{src:O,className:"mobile:p-1 p-2 bg-slate-300 rounded-full border border-dotted border-black",alt:"photo capture"})}),(0,U.jsx)("button",{onClick:this.switchCamera,children:(0,U.jsx)("img",{src:q,className:"mobile:mx-1 mobile:p-1 p-2 mx-2 bg-slate-300 rounded-full border border-dotted border-black",alt:"switch camera"})})]})]})}}]),a}(c.Component),P=function(e){return(0,U.jsx)(V,{close:e.close,open:e.open,setImage:e.setImage,children:(0,U.jsx)(F,{})})},z=function(e){(0,o.Z)(a,e);var t=(0,r.Z)(a);function a(e){var n;return(0,i.Z)(this,a),(n=t.call(this,e)).keyDown=function(e){"Enter"===e.code&&(e.preventDefault(),n.sendMessage())},n.requestMatch=function(){n.state.matchRequested?n.setState((0,s.Z)((0,s.Z)({},n.state),{},{alertMsg:"Processing match request",alertType:"info"})):(n.setState((0,s.Z)((0,s.Z)({},n.state),{},{matchRequested:!0})),n.state.Socket.emit("MatchRequest",{mode:"chat",name:n.props.authentication.name,age:n.props.authentication.age,gender:n.props.authentication.gender}))},n.revokeMatch=function(){n.state.isMatched?(n.state.Socket.emit("MatchRevoked",{recepientId:n.state.recepientId}),n.textList=[],window.sessionStorage.removeItem("recepientName"),window.sessionStorage.removeItem("recepientGender"),g.Z.dispatch((0,w.c4)())):n.setState((0,s.Z)((0,s.Z)({},n.state),{},{alertMsg:"You're not connected",alertType:"warning"}))},n.sendMessage=function(){(n.state.message.length>0||n.state.imageData)&&n.state.isMatched?(n.textList.push({type:"sent",kind:n.state.imageData?"multimedia/image":"text",image:n.state.imageData?n.state.imageData:void 0,message:n.state.message?n.state.message:"",uuid:(0,x.Z)()}),n.setState((0,s.Z)((0,s.Z)({},n.state),{},{message:"",imageData:void 0,emojiVisible:!1})),n.state.Socket.emit(n.state.imageData?"image":"chat",{recepientId:n.state.recepientId,text:n.state.message?n.state.message:"",kind:n.state.imageData?"multimedia/image":"text",image:n.state.imageData?n.state.imageData:void 0}),n.forceUpdate(),n.scrollToBottom()):n.state.isMatched||n.setState((0,s.Z)((0,s.Z)({},n.state),{},{alertMsg:"You're not matched yet \nclick on match button to get matched",alertType:"warning"}))},n.receiveMessage=function(e){n.textList.push({type:"received",message:e.text?e.text:void 0,kind:e.kind,image:"multimedia/image"===e.kind?e.image:void 0,uuid:(0,x.Z)()}),n.forceUpdate(),n.scrollToBottom()},n.setEmojiVisibility=function(){n.setState((0,s.Z)((0,s.Z)({},n.state),{},{emojiVisible:!n.state.emojiVisible}))},n.addEmoji=function(e){n.setState((0,s.Z)((0,s.Z)({},n.state),{},{message:n.state.message+e.emoji}))},n.matchTimeup=function(){n.setState((0,s.Z)((0,s.Z)({},n.state),{},{matchRequested:!1,alertMsg:"Failed to find match, try again in sometime",alertType:"success"}))},n.initImageModal=function(){n.setState((0,s.Z)((0,s.Z)({},n.state),{},{imageCaptureOpen:!n.state.imageCaptureOpen}))},n.destroyModal=function(){n.setState((0,s.Z)((0,s.Z)({},n.state),{},{imageCaptureOpen:!1}))},n.setImage=function(e){n.setState((0,s.Z)((0,s.Z)({},n.state),{},{imageData:e}))},n.getMsgElement=function(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?(0,U.jsxs)("div",{id:"end",className:" warp w-2/3 h-fit ".concat("sent"==e.type?"float-right bg-gradient-to-r from-Ghostwhite to-BrandColor-400 rounded-tr-none ":"rounded-tl-none float-left bg-gradient-to-l from-Ghostwhite to-lime-300","  px-4 py-2 rounded-full my-1 shadow-sm text-sm"),children:["multimedia/image"===e.kind?(0,U.jsx)("img",{src:e.image,alt:"image"}):null,e.message]},e.uuid):(0,U.jsxs)("div",{className:"warp w-2/3 h-fit ".concat("sent"==e.type?"float-right bg-gradient-to-r from-Ghostwhite to-BrandColor-400 rounded-tr-none":"float-left bg-gradient-to-l from-Ghostwhite to-[#e7dad1] rounded-tl-none"," px-4 py-2 rounded-full my-1 shadow-sm text-sm "),children:["multimedia/image"===e.kind?(0,U.jsx)("img",{src:e.image,alt:"image"}):null,(0,U.jsx)("p",{children:e.message})]},e.uuid)},n.deleteImage=function(){n.setState((0,s.Z)((0,s.Z)({},n.state),{},{imageData:void 0}))},n.state={message:"",redirect:n.props.authentication.name?void 0:"/",Socket:void 0,isMatched:n.props.SocConState.isMatched,recepientId:n.props.SocConState.recepientId,alertMsg:void 0,alertType:void 0,matchRequested:!1,mobileButtonVisible:!0,emojiVisible:!1,device:n.props.globalState.device,imageCaptureOpen:!1,imageData:void 0},n.textList=[],n}return(0,n.Z)(a,[{key:"scrollToBottom",value:function(){setTimeout((function(e){document.getElementById("end").scrollIntoView({behavior:"smooth",block:"nearest"})}),0)}},{key:"componentDidMount",value:function(){var e=this;this.scrollToBottom(),this.props.authentication.name&&(new f.s).getSocket().then((function(t){t.on("chat",(function(t){e.receiveMessage(t)})),t.on("image",(function(t){console.log(t),e.receiveMessage(t)})),e.setState((0,s.Z)((0,s.Z)({},e.state),{},{Socket:t}))}))}},{key:"componentWillUnmount",value:function(){this.state.Socket&&this.state.Socket.disconnect(),window.sessionStorage.removeItem("recepientName"),window.sessionStorage.removeItem("recepientGender")}},{key:"render",value:function(){var e=this;return this.textList=this.props.SocConState.isMatched?this.textList:[],(0,U.jsxs)("div",{children:[(0,U.jsxs)("div",{className:" h-[100vh] flex flex-col relative",children:[(0,U.jsx)(P,{}),(0,U.jsx)(d.Z,{}),(0,U.jsx)(D.Z,{}),this.state.redirect&&(0,U.jsx)(p.Fg,{to:this.state.redirect,replace:!0}),this.state.alertMsg&&(0,U.jsx)(b.Z,{text:this.state.alertMsg,callBack:function(){e.setState((0,s.Z)((0,s.Z)({},e.state),{},{alertMsg:void 0,alertType:void 0}))},type:this.state.alertType,timeOut:4e3}),(0,U.jsxs)("div",{className:"w-full h-[100%] flex",children:[(0,U.jsx)("div",{className:" w-[20%] h-[100%] mobile:hidden"}),(0,U.jsxs)("div",{className:" w-[60%] px-12 py-4 h-[100%] flex justify-center mobile:w-full mobile:p-0",children:[(0,U.jsxs)("div",{className:"w-1/3 flex flex-col justify-center mobile:hidden",children:[(0,U.jsxs)("button",{className:"w-40 h-10 flex p-2 justify-around my-2 rounded-full ".concat(this.state.isMatched?"bg-[#d7dbd6]":"bg-[#A7FB9A]","\n\t\t\t\t\t\t\ttext-sm hover:bg-[#8ef57e] hover:shadow-xl"),disabled:this.state.isMatched,onClick:this.requestMatch,children:[(0,U.jsx)("img",{width:"20px",src:m.Z}),this.state.matchRequested?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(y.Z,{size:4}),"desktop"==this.state.device?(0,U.jsx)(C.Z,{countdown:15,callback:this.matchTimeup}):void 0]}):"Match"]}),(0,U.jsxs)("button",{className:"w-40 h-10 flex p-2 justify-around rounded-full bg-[#FBB19A] text-sm hover:bg-[#f79b80] hover:shadow-lg",onClick:this.revokeMatch,children:[(0,U.jsx)("img",{width:"20px",src:l.Z}),"Disconnect"]})]}),(0,U.jsxs)("div",{className:" mobile:w-full mobile:h-full mobile:bg-[#ece2e47d] bg-[#ece2e47d]  w-1/2 h-[88vh] px-2 py-3 flex flex-col justify-between border ".concat(this.state.isMatched?"border-[#bfc2cc]":"border-[#f5bbaa]"," rounded-xl mobile:rounded-none"),children:[(0,U.jsxs)("div",{className:"bg-white h-10 flex justify-between p-2 rounded w-full shadow-md ",children:[(0,U.jsxs)("div",{className:"flex",children:[(0,U.jsx)("img",{className:"",src:h.Z,width:"16px"}),(0,U.jsx)("p",{className:"text-sm text-oxford_blue mt-auto mx-3",children:window.sessionStorage.getItem("recepientName")?window.sessionStorage.getItem("recepientName"):"User Name"})]}),(0,U.jsx)("img",{className:"",src:"Male"===window.sessionStorage.getItem("recepientGender")?j:"Female"===window.sessionStorage.getItem("recepientGender")?Z:k,width:"20px"})]}),(0,U.jsx)("div",{className:"h-full w-full my-1 p-2 overflow-y-scroll scroll-none scroll-hide",children:this.textList.map((function(t,a){return a+1==e.textList.length?e.getMsgElement(t,!0):e.getMsgElement(t,!1)}))}),this.state.imageData?(0,U.jsxs)("div",{className:"w-full flex justify-center",children:[(0,U.jsx)("img",{className:"w-32 rounded-lg p-1 border border-black border-dotted",src:this.state.imageData?this.state.imageData:void 0,alt:"captured image"}),(0,U.jsx)("img",{onClick:this.deleteImage,className:"p-2",src:L.Z,alt:"delete image"})]}):"",(0,U.jsxs)("div",{className:"hidden mobile:show w-full h-fit rounded-md bg-[#aaa8a850]",children:[(0,U.jsx)("div",{className:"w-full",onClick:function(){return e.setState((0,s.Z)((0,s.Z)({},e.state),{},{mobileButtonVisible:!e.state.mobileButtonVisible}))},children:(0,U.jsx)("img",{src:M.Z,className:"mx-auto bg-white rounded-b-md"})}),this.state.mobileButtonVisible&&(0,U.jsxs)("div",{className:"flex justify-around",children:[(0,U.jsx)("button",{className:"w-12 h-12 shadow flex p-2 justify-center items-center rounded-full ".concat(this.state.isMatched?"bg-[#d7dbd6]":"bg-[#A7FB9A]","\n\t\t\t\t\t\t\t\t\t\ttext-[8px] font-semibold hover:bg-[#8ef57e] hover:shadow-xl"),disabled:this.state.isMatched,onClick:this.requestMatch,children:this.state.matchRequested?(0,U.jsx)(y.Z,{size:4}):"Connect"}),this.state.matchRequested&&"mobile"===this.state.device?(0,U.jsx)(C.Z,{countdown:15,callback:this.matchTimeup}):void 0,(0,U.jsx)("button",{className:"w-12 h-12 flex p-2 justify-center items-center rounded-full bg-[#FBB19A] text-[8px] hover:bg-[#f79b80] shadow-lg font-semibold",onClick:this.revokeMatch,children:"Disconnect"})]})]}),(0,U.jsxs)("div",{className:"bg-white border border-[#e5e7eb] h-14 min-h-[2.5rem] flex items-center px-2 rounded-full w-full cursor-pointer shadow-md hover:shadow-none",children:[(0,U.jsx)("div",{onClick:this.setEmojiVisibility,children:(0,U.jsx)("img",{className:"",width:"25px",src:S})}),(0,U.jsx)("input",{value:this.state.message,onKeyDown:this.keyDown,onChange:function(t){return e.setState((0,s.Z)((0,s.Z)({},e.state),{},{message:t.target.value}))},maxLength:100,className:"outline-none rounded-full px-1 w-[100%]"}),(0,U.jsx)("img",{onClick:this.initImageModal,src:T,width:"40px",className:"mx-1 px-2",alt:"camera icon"}),(0,U.jsx)("div",{onClick:this.sendMessage,children:(0,U.jsx)("img",{src:u.Z,width:"30px"})})]}),(0,U.jsx)("div",{style:{display:this.state.emojiVisible?"initial":"none"},className:"w-full h-1/2",children:(0,U.jsx)(N.ZP,{onEmojiClick:this.addEmoji,height:"100%",width:"100%",emojiStyle:"native",searchDisabled:!0})})]})]}),(0,U.jsx)("div",{className:" w-[20%] h-[100%] mobile:hidden"})]}),(0,U.jsx)(P,{open:this.state.imageCaptureOpen,close:this.destroyModal,setImage:this.setImage})]}),(0,U.jsx)(I.Z,{})]})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return(0,s.Z)((0,s.Z)({},t),{},{isMatched:e.SocConState.isMatched,recepientId:e.SocConState.recepientId,matchRequested:e.SocConState.isMatched?!e.SocConState.isMatched:t.matchRequested,device:e.globalState.device,alertMsg:e.SocConState.isMatched!=t.isMatched&&1==t.isMatched?"User disconnected":void 0,alertType:e.SocConState.isMatched!=t.isMatched&&1==t.isMatched?"warning":void 0})}}]),a}(c.Component);var A=(0,v.$j)((function(e){return(0,s.Z)({},e)}))(z)}}]);