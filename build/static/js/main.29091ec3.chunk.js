(this["webpackJsonpfast-chat"]=this["webpackJsonpfast-chat"]||[]).push([[0],{143:function(e,t,n){},144:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(33),s=n.n(r),i=(n(80),n(23)),o=n(24),l=n(26),u=n(25),d=n(2),j=n(20),h=n(69),b=n(35),p=n(70),x=n.n(p),m=n(71),O=n.n(m),v=n(5),f={token:null,email:null,user:null,message:null},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(v.a)(Object(v.a)({},e),{},{token:t.token,message:t.message});case"UPDATE_PROFILE":return Object(v.a)(Object(v.a)({},e),{},{user:t.user});case"SEND_MAIL":return Object(v.a)(Object(v.a)({},e),{},{email:t.email});case"CLEAN_MESSAGE":return Object(v.a)(Object(v.a)({},e),{},{message:""});case"MESSAGE":return Object(v.a)(Object(v.a)({},e),{},{message:t.message});case"LOGOUT":return{token:null,email:null,user:null,message:null};default:return Object(v.a)({},e)}},w={chatFocus:null,messageHistory:[],historyInteractions:[],expandFindPeople:!1,people:[]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHAT_FOCUS":return Object(v.a)(Object(v.a)({},e),{},{chatFocus:t.chatFocus});case"HISTORY_INTERACTIONS":return Object(v.a)(Object(v.a)({},e),{},{historyInteractions:t.historyInteractions});case"MESSAGE_HISTORY":return Object(v.a)(Object(v.a)({},e),{},{messageHistory:t.messageHistory});case"EXPAND_FIND_PEOPLE":return Object(v.a)(Object(v.a)({},e),{},{expandFindPeople:t.expandFindPeople});case"GET_PEOPLE":return Object(v.a)(Object(v.a)({},e),{},{people:t.people});default:return Object(v.a)({},e)}},y={key:"authReducer",storage:x.a,stateReconciler:O.a},A=Object(j.b)({auth:Object(b.a)(y,g),chat:N}),S=function(){var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||j.c,t=Object(j.d)(A,e(Object(j.a)(h.a)));return{store:t,persistor:Object(b.b)(t)}},L=n(72),H=n(6),P=n(0),E=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props.privateComponent;return Object(P.jsx)(H.b,Object(v.a)(Object(v.a)({},this.props),{},{render:function(n){return e.props.auth.token?Object(P.jsx)(t,Object(v.a)({},n)):Object(P.jsx)(H.a,{to:{pathname:"/signin",state:{from:n.location}}})}}))}}]),n}(c.Component),I=Object(d.b)((function(e){return{auth:e.auth}}))(E),C=n(12),z=n.p+"static/media/avatar.e5117e8e.png",k=n(3),F=n.n(k),X=n(7),M=n(73),T=n.n(M),G="http://54.208.199.77:8086/",U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=e&&{authorization:"Bearer ".concat(e)};return T.a.create({baseURL:G,headers:t})},B=function(e,t){return function(){var n=Object(X.a)(F.a.mark((function n(c){var a,r,s;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=new URLSearchParams).append("email",e),a.append("pin",t),n.prev=3,n.next=6,U().patch("auth",a);case 6:r=n.sent,c({type:"LOGIN",token:r.data.results.token,message:r.data.message}),n.next=15;break;case 10:n.prev=10,n.t0=n.catch(3),s=n.t0.response.data.message,console.log(s),c({type:"MESSAGE",message:s});case 15:case"end":return n.stop()}}),n,null,[[3,10]])})));return function(e){return n.apply(this,arguments)}}()},D=function(e){return function(){var t=Object(X.a)(F.a.mark((function t(n){var c;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,U(e).get("history");case 3:c=t.sent,n({type:"HISTORY_INTERACTIONS",historyInteractions:c.data.results}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n({type:"MESSAGE",message:"Please try again later"});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},V=function(e,t){return function(){var n=Object(X.a)(F.a.mark((function n(c){var a;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c({type:"CHAT_FOCUS",chatFocus:e}),n.next=4,U(t).get("chat/".concat(e.id));case 4:a=n.sent,console.log(a),c({type:"MESSAGE_HISTORY",messageHistory:a.data.result}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},R=function(e){return function(){var t=Object(X.a)(F.a.mark((function t(n){var c;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"EXPAND_FIND_PEOPLE",expandFindPeople:!e}),t.next=4,U().get("allUser");case 4:c=t.sent,console.log(c),n({type:"GET_PEOPLE",people:c.data.results}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},W=function(e,t,n){return function(){var c=Object(X.a)(F.a.mark((function c(a){var r,s;return F.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,(r=new URLSearchParams).append("message",e),c.next=5,U(n).post("chat?receipentId=".concat(t),r);case 5:return c.next=7,U(n).get("chat/".concat(t));case 7:s=c.sent,a({type:"MESSAGE_HISTORY",messageHistory:s.data.result}),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(0),console.log(c.t0);case 14:case"end":return c.stop()}}),c,null,[[0,11]])})));return function(e){return c.apply(this,arguments)}}()};var K=function(){var e=Object(d.d)((function(e){return e.auth.user})),t=Object(d.d)((function(e){return e.chat.expandFindPeople}));console.log(t);var n=Object(d.c)(),c=function(e){var t;n((t=e,function(){var e=Object(X.a)(F.a.mark((function e(n){var c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U().get("allUser?search=".concat(t));case 3:c=e.sent,n({type:"GET_PEOPLE",people:c.data.results}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()))},a=function(){n(function(){var e=Object(X.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"LOGOUT"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())};return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)("div",{className:"col-12 bg-navbar d-flex flex-row align-items-center justify-content-between navbar-height",children:[!0===t?Object(P.jsx)(P.Fragment,{children:Object(P.jsx)("input",{type:"text",className:"form-control py-2 me-2 search-input",placeholder:"Search people","aria-label":"Search name","aria-describedby":"basic-addon1",onChange:function(e){return c(e.target.value)}})}):Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)("div",{class:"dropdown",children:[Object(P.jsx)("div",{type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:Object(P.jsx)("img",{src:e.photo==="".concat("http://54.208.199.77:8086/","null")?z:e.photo,alt:"avatar",className:"avatar-icon"})}),Object(P.jsx)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:Object(P.jsx)("li",{children:Object(P.jsx)("span",{className:"dropdown-item",onClick:function(){return a()},children:"Logout"})})})]})}),Object(P.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"bi bi-search pointer-cursor",viewBox:"0 0 16 16",onClick:function(e){n(R(t))},children:Object(P.jsx)("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})})]})})},Z=n(31),q=n.n(Z),Y="data:image/png;base64,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",J="http://54.208.199.77:8086/";var Q=function(e){var t=Object(d.d)((function(e){return e.auth.user}));return e.sender===t.id_user?Object(P.jsxs)("div",{className:"row m-0 p-0",children:[Object(P.jsxs)("div",{className:"col-12 d-flex flex-row py-3",children:[Object(P.jsx)("div",{className:"col-2 me-2",children:Object(P.jsx)("img",{src:e.receipentPhoto==="".concat(J,"null")?Y:e.receipentPhoto,alt:"profile",className:"avatar-icon"})}),Object(P.jsxs)("div",{className:"col-10 d-flex flex-row justify-content-between align-items-center px-2",children:[Object(P.jsxs)("div",{className:"overflow-hidden",children:[Object(P.jsx)("span",{className:"fw-bolder text-dark",children:e.receipentName})," ",Object(P.jsx)("br",{}),Object(P.jsx)("span",{className:"text-dark",children:e.message.length>30?"".concat(e.message.substring(0,19),"..."):e.message})]}),Object(P.jsx)("p",{className:"text-end text-muted",children:q()(e.createdAt).format("LT")})]})]}),Object(P.jsx)("div",{className:"line"})]}):Object(P.jsxs)("div",{className:"row m-0 p-0",children:[Object(P.jsxs)("div",{className:"col-12 d-flex flex-row py-3",children:[Object(P.jsx)("div",{className:"col-2 me-2",children:Object(P.jsx)("img",{src:e.senderPhoto==="".concat(J,"null")?Y:e.senderPhoto,alt:"profile",className:"avatar-icon"})}),Object(P.jsxs)("div",{className:"col-10 d-flex flex-row justify-content-between align-items-center px-2",children:[Object(P.jsxs)("div",{className:"overflow-hidden",children:[Object(P.jsx)("span",{className:"fw-bolder text-dark",children:e.senderName})," ",Object(P.jsx)("br",{}),Object(P.jsx)("span",{className:"text-dark",children:e.message.length>30?"".concat(e.message.substring(0,19),"..."):e.message})]}),Object(P.jsx)("p",{className:"text-end text-muted",children:q()(e.createdAt).format("LT")})]})]}),Object(P.jsx)("div",{className:"line"})]})};var _=function(){var e=Object(d.d)((function(e){return e.chat.chatFocus}));return Object(P.jsx)("div",{className:"col-12 bg-navbar border border-start-2 d-inline-flex navbar-height align-items-center",children:null!==e?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("div",{className:"col-md-1 col-2",children:Object(P.jsx)("img",{src:e.photo!=="".concat("http://54.208.199.77:8086/","null")?e.photo:Y,alt:"avatar",className:"avatar-icon me-3"})}),Object(P.jsxs)("div",{className:"col-md-11 col-10 d-flex flex-row align-items-center justify-content-between",children:[Object(P.jsxs)("div",{children:[Object(P.jsx)("span",{className:"fw-bold",children:e.name})," ",Object(P.jsx)("br",{}),Object(P.jsx)("span",{children:"online"})]}),Object(P.jsxs)("div",{children:[Object(P.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"bi bi-search",viewBox:"0 0 16 16",children:Object(P.jsx)("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})}),Object(P.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"bi bi-three-dots-vertical mx-3",viewBox:"0 0 16 16",children:Object(P.jsx)("path",{d:"M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"})})]})]})]}):Object(P.jsx)("h4",{className:"fw-bold color-yellow",children:"Wellcome to Fast Chat"})})};var $=function(e){var t=Object(d.d)((function(e){return e.auth.user}));return Object(P.jsx)("div",{className:"my-2 mx-0 d-inline-flex ".concat(e.sender===t.id_user?"justify-content-end":""),children:Object(P.jsxs)("div",{className:e.sender===t.id_user?"p-3 border border-2 chat-bubble-self":"bg-white p-3 border border-2 chat-bubble",children:[Object(P.jsx)("span",{children:e.message})," ",Object(P.jsx)("br",{}),Object(P.jsx)("p",{className:"text-muted text-small m-0 p-0 ".concat(e.sender===t.id_user?"text-start":"text-end"),children:q()(e.time).format("LT")})]})})},ee=n(18);var te=function(){return Object(P.jsxs)("div",{className:"col-12",children:[Object(P.jsx)("p",{className:"text-center fw-bold my-4",children:"No chat history"}),Object(P.jsx)("div",{className:"row px-3",children:Object(P.jsx)("button",{className:"btn bg-yellow text-center fw-bold text-white",children:"Find People"})})]})};var ne=function(e){return Object(P.jsxs)("div",{className:"row m-0 p-0",children:[Object(P.jsxs)("div",{className:"col-12 d-flex flex-row py-3",children:[Object(P.jsx)("div",{className:"col-2 me-2",children:Object(P.jsx)("img",{src:e.photo==="".concat("http://54.208.199.77:8086/","null")?Y:e.photo,alt:"profile",className:"avatar-icon"})}),Object(P.jsx)("div",{className:"col-10 d-flex flex-row justify-content-between align-items-center px-2",children:Object(P.jsx)("div",{className:"overflow-hidden",children:Object(P.jsx)("span",{className:"fw-bolder text-dark",children:e.name})})})]}),Object(P.jsx)("div",{className:"line"})]})};var ce=function(){var e=Object(c.useState)(1200),t=Object(C.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(C.a)(r,2),i=s[0],o=s[1],l=Object(c.useRef)(null),u=Object(d.d)((function(e){return e.chat})),j=Object(d.d)((function(e){return e.chat.chatFocus})),h=Object(d.d)((function(e){return e.chat.expandFindPeople})),b=Object(d.d)((function(e){return e.auth.user})),p=Object(d.d)((function(e){return e.auth.token})),x=Object(d.c)();Object(c.useEffect)((function(){window.addEventListener("resize",(function(e){a(null!==window.innerWidth&&window.innerWidth),console.log(n)}))}),[]),Object(c.useEffect)((function(){x(D(p))}),[]);var m=function(){var e;null===(e=l.current)||void 0===e||e.scrollIntoView({behavior:"smooth",block:"start"})};Object(c.useEffect)((function(){m()}),[u]);var O=function(e){if(e.senderId===b.id_user){var t={id:e.receipentId,name:e.receipentName,photo:e.receipentPhoto};x(V(t,p))}else{var n={id:e.senderId,name:e.senderName,photo:e.senderPhoto};x(V(n,p))}},v=function(e){x(R(h));var t={id:e.id_user,name:e.name,photo:e.photo};x(V(t,p))};return window.innerWidth<1200||n<1200?Object(P.jsx)("div",{className:"row m-0 p-0 vh-100",children:Object(P.jsxs)("div",{className:"col-12",children:[Object(P.jsx)("div",{className:"row",children:Object(P.jsx)(K,{})}),Object(P.jsx)("div",{className:"overflow-auto area-list-chat",children:!0===h?Object(P.jsx)(P.Fragment,{children:0!==u.people.length&&u.people.map((function(e,t){if(e.id_user!==b.id_user)return Object(P.jsx)(ee.b,{to:"/chat/".concat(e.senderId),className:"text-decoration-none bg-dark",onClick:function(){return v(e)},children:Object(P.jsx)(ne,{name:e.name,photo:e.photo})})}))}):Object(P.jsx)(P.Fragment,{children:0!==u.historyInteractions.length?u.historyInteractions.map((function(e,t){return Object(P.jsx)(ee.b,{to:"/chat/".concat(e.senderId),className:"text-decoration-none",onClick:function(){return O(e)},children:Object(P.jsx)(Q,{index:t,sender:e.senderId,senderName:e.senderName,senderPhoto:e.senderPhoto,receipent:e.receipentId,receipentName:e.receipentName,receipentPhoto:e.receipentPhoto,message:e.message,createdAt:e.createdAt})})})):Object(P.jsx)(te,{})})})]})}):Object(P.jsxs)("div",{className:"row m-0 p-0 vh-100",children:[Object(P.jsxs)("div",{className:"col-12 col-xl-4",children:[Object(P.jsx)("div",{className:"row",children:Object(P.jsx)(K,{})}),Object(P.jsx)("div",{className:"overflow-auto area-list-chat",children:!0===h?Object(P.jsx)(P.Fragment,{children:0!==u.people.length&&u.people.map((function(e,t){if(e.id_user!==b.id_user)return Object(P.jsx)(ee.b,{className:"text-decoration-none bg-dark",onClick:function(){return v(e)},children:Object(P.jsx)(ne,{name:e.name,photo:e.photo})})}))}):Object(P.jsx)(P.Fragment,{children:0!==u.historyInteractions.length?u.historyInteractions.map((function(e,t){return Object(P.jsx)(ee.b,{className:"text-decoration-none bg-dark",onClick:function(){return O(e)},children:Object(P.jsx)(Q,{index:t,sender:e.senderId,senderName:e.senderName,senderPhoto:e.senderPhoto,receipent:e.receipentId,receipentName:e.receipentName,receipentPhoto:e.receipentPhoto,message:e.message,createdAt:e.createdAt})})})):Object(P.jsx)(te,{})})})]}),Object(P.jsxs)("div",{className:"d-none d-xl-block col-xl-8 chat-room position-relative mx-0",children:[Object(P.jsx)("div",{className:"row",children:Object(P.jsx)(_,{})}),Object(P.jsx)("div",{className:"row chat-area pb-4",children:Object(P.jsxs)("div",{className:"col-12 px-4",children:[u.messageHistory.length>0&&u.messageHistory.map((function(e,t){return Object(P.jsx)("div",{className:"row",children:Object(P.jsx)($,{index:t,message:e.message,sender:e.senderId,receipent:e.receipentId,time:e.createdAt})})})),Object(P.jsx)("div",{ref:l})]})}),Object(P.jsx)("div",{className:"row",children:Object(P.jsx)("div",{className:"col-12 position-absolute type-chat-area py-3",children:Object(P.jsx)("div",{className:"row m-0 p-0",children:Object(P.jsxs)("div",{class:"input-group-lg d-flex flex-row align-items-center",children:[Object(P.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-emoji-smile",viewBox:"0 0 16 16",children:[Object(P.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(P.jsx)("path",{d:"M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"})]}),Object(P.jsx)("input",{type:"text",className:"form-control rounded-pill mx-3","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default",onChange:function(e){return o(e.target.value)},value:i}),Object(P.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-cursor btn-send",viewBox:"0 0 16 16",onClick:function(){return x(W(i,j.id,p)),x(D(p)),o(""),void m()},children:Object(P.jsx)("path",{d:"M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z"})})]})})})})]})]})};var ae=function(e){var t=e.children;return Object(P.jsx)("div",{className:"col-12 container-auth d-flex justify-content-center align-items-center vh-100 bg-yellow",children:t})};var re=function(){var e=Object(c.useState)(null),t=Object(C.a)(e,2),n=t[0],a=t[1],r=Object(d.d)((function(e){return e.auth.token})),s=Object(H.g)(),i=Object(d.c)(),o=function(){i(function(e){return function(){var t=Object(X.a)(F.a.mark((function t(n){var c,a;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"SEND_MAIL",email:e}),(c=new URLSearchParams).append("email",e),t.next=6,U().post("auth",c);case 6:t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),a=t.t0.response.data.message,console.log(a);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(n))};return Object(c.useEffect)((function(){return r&&s.location.state?s.push({pathname:"".concat(s.location.state.from.pathname)||"/"}):r?s.push({pathname:"/"}):void 0})),console.log(n),Object(P.jsx)(ae,{children:Object(P.jsxs)("div",{className:"card card-auth",children:[Object(P.jsx)("div",{className:"card-header bg-white",children:Object(P.jsx)("h3",{className:"fw-bold text-center",children:"Fast Chat Login"})}),Object(P.jsxs)("div",{className:"card-body",children:[Object(P.jsx)("p",{className:"text-center",children:"Input your Email"}),Object(P.jsxs)("div",{className:"input-group mb-3 position-relative justify-content-end align-items-center",children:[Object(P.jsx)("input",{type:"email",className:"form-control py-2",placeholder:"Input your email","aria-label":"Username","aria-describedby":"basic-addon1",onChange:function(e){return a(e.target.value)}}),Object(P.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19",height:"19",fill:"currentColor",className:"bi bi-envelope-open position-absolute me-3 text-muted",viewBox:"0 0 16 16",children:Object(P.jsx)("path",{d:"M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z"})})]}),Object(P.jsx)("div",{className:"d-flex justify-content-center",children:Object(P.jsx)(ee.b,{to:"/pin",children:Object(P.jsxs)("button",{className:"btn bg-yellow fw-bold text-white ".concat(null===n?"disabled":""),onClick:function(e){return o()},children:["Next",Object(P.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"bi bi-box-arrow-in-right ms-3",viewBox:"0 0 16 16",children:[Object(P.jsx)("path",{"fill-rule":"evenodd",d:"M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"}),Object(P.jsx)("path",{"fill-rule":"evenodd",d:"M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"})]})]})})})]})]})})},se=n(74),ie=n.n(se);var oe=function(){var e=Object(c.useState)(""),t=Object(C.a)(e,2),n=t[0],a=t[1],r=Object(d.d)((function(e){return e.auth.token})),s=Object(d.d)((function(e){return e.auth})),i=Object(d.c)(),o=Object(H.g)(),l=function(){var e=Object(X.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i(B(s.email,n));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){null!==r&&o.push({pathname:"/update-profile"})}),[r]),Object(P.jsx)(ae,{children:Object(P.jsxs)("div",{className:"card card-auth",children:[Object(P.jsx)("div",{className:"card-header bg-white",children:Object(P.jsx)("h3",{className:"fw-bold text-center",children:"Fast Chat Login"})}),Object(P.jsxs)("div",{className:"card-body d-flex flex-column justify-content-center align-items-center",children:[Object(P.jsxs)("p",{className:"text-center",children:["We have sent pin verification to : ",s.email]}),null!==s.message&&Object(P.jsx)("div",{class:"alert alert-danger",role:"alert",children:s.message}),Object(P.jsx)(ie.a,{length:5,initialValue:"",secret:!0,onChange:function(e,t){a(e)},type:"numeric",inputMode:"number",style:{padding:"10px"},inputStyle:{borderColor:"#A98600",borderRight:"0px",borderLeft:"0px",borderTop:"0px",marginRight:"10px",borderBottomWidth:"2px"},inputFocusStyle:{borderColor:"blue"},onComplete:function(e,t){},autoSelect:!0,regexCriteria:/^[ A-Za-z0-9_@./#&+-]*$/}),Object(P.jsx)("div",{className:"d-flex justify-content-center my-3",children:Object(P.jsxs)("div",{className:"btn bg-yellow fw-bold text-white ".concat(5!==n.length||null===n&&"disabled"),onClick:function(){return l()},children:["Login",Object(P.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"bi bi-box-arrow-in-right ms-3",viewBox:"0 0 16 16",children:[Object(P.jsx)("path",{"fill-rule":"evenodd",d:"M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"}),Object(P.jsx)("path",{"fill-rule":"evenodd",d:"M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"})]})]})})]})]})})},le=function(e,t,n){return function(){var c=Object(X.a)(F.a.mark((function c(a){var r,s,i,o;return F.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(c.prev=0,null===e){c.next=14;break}return(r=new FormData).append("photo",e),c.prev=4,c.next=7,U(n).put("profile",r);case 7:s=c.sent,console.log(s),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(4),console.log(c.t0);case 14:return(i=new URLSearchParams).append("name",t),c.next=18,U(n).patch("profile",i);case 18:o=c.sent,console.log(o),a({type:"UPDATE_PROFILE",user:o.data.results}),c.next=26;break;case 23:c.prev=23,c.t1=c.catch(0),a({type:"MESSAGE",message:"Please try again letter"});case 26:case"end":return c.stop()}}),c,null,[[0,23],[4,11]])})));return function(e){return c.apply(this,arguments)}}()};var ue=function(){var e=Object(c.useState)(null),t=Object(C.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(C.a)(r,2),i=s[0],o=s[1],l=null!==n?URL.createObjectURL(n):z,u=Object(d.d)((function(e){return e.auth.token})),j=Object(d.c)(),h=Object(H.g)(),b=function(){var e=Object(X.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j(le(n,i,u));case 3:h.push({pathname:"/fast-chat"}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){j(function(){var e=Object(X.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"CLEAN_MESSAGE"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}),[]),Object(P.jsx)(ae,{children:Object(P.jsxs)("div",{className:"card card-auth",children:[Object(P.jsx)("div",{className:"card-header bg-white",children:Object(P.jsx)("h3",{className:"fw-bold text-center",children:"Update Profile"})}),Object(P.jsxs)("div",{className:"card-body d-flex flex-column justify-content-center align-items-center",children:[Object(P.jsx)("p",{className:"text-center",children:"Complete your personal data"}),Object(P.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(P.jsx)("img",{src:l,alt:"update",className:"photo-input"}),Object(P.jsx)("input",{className:"input-photo",type:"file",name:"photo",onChange:function(e){return a(e.target.files[0])}})]}),Object(P.jsx)("p",{children:"Choose your photo, Max size 50Kb"}),Object(P.jsxs)("div",{className:"input-group mb-3 position-relative justify-content-end align-items-center",children:[Object(P.jsx)("input",{type:"text",className:"form-control py-2",placeholder:"Input your name","aria-label":"Username","aria-describedby":"basic-addon1",onChange:function(e){return o(e.target.value)}}),Object(P.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19",height:"19",fill:"currentColor",className:"bi bi-person me-3 text-muted position-absolute",viewBox:"0 0 16 16",children:Object(P.jsx)("path",{d:"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"})})]}),Object(P.jsx)("div",{className:"d-flex justify-content-center my-3",children:Object(P.jsx)("div",{className:"btn bg-yellow fw-bold text-white ".concat(0===i.length&&"disabled"),onClick:function(){return b()},children:"Next"})})]})]})})};var de=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(""),n=Object(C.a)(t,2),a=n[0],r=n[1],s=Object(d.d)((function(e){return e.chat})),i=Object(d.d)((function(e){return e.chat.chatFocus})),o=Object(d.c)(),l=Object(d.d)((function(e){return e.auth.token})),u=function(){var t;null===(t=e.current)||void 0===t||t.scrollIntoView({behavior:"smooth"})};return Object(c.useEffect)((function(){u()}),[s]),Object(P.jsx)("div",{className:"row vh-100 m-0 p-0",children:Object(P.jsxs)("div",{className:"col-12 chat-room position-relative",children:[Object(P.jsx)("div",{className:"row",children:Object(P.jsx)(_,{})}),Object(P.jsx)("div",{className:"row chat-area pb-5",children:Object(P.jsxs)("div",{className:"col-12 px-4",children:[s.messageHistory.length>0&&s.messageHistory.map((function(e,t){return Object(P.jsx)("div",{className:"row",children:Object(P.jsx)($,{index:t,message:e.message,sender:e.senderId,receipent:e.receipentId,time:e.createdAt})})})),Object(P.jsx)("div",{ref:e})]})}),Object(P.jsx)("div",{className:"row",children:Object(P.jsx)("div",{className:"position-absolute type-chat-area py-3",children:Object(P.jsx)("div",{className:"row m-0 p-0",children:Object(P.jsxs)("div",{class:"input-group-lg d-flex flex-row align-items-center",children:[Object(P.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-emoji-smile",viewBox:"0 0 16 16",children:[Object(P.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(P.jsx)("path",{d:"M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"})]}),Object(P.jsx)("input",{type:"text",className:"form-control rounded-pill mx-3","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default",onChange:function(e){return r(e.target.value)},value:a}),Object(P.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-cursor btn-send",viewBox:"0 0 16 16",onClick:function(){return o(W(a,i.id,l)),o(D(l)),r(""),void u()},children:Object(P.jsx)("path",{d:"M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z"})})]})})})})]})})};var je=function(){return Object(P.jsxs)(H.d,{children:[Object(P.jsx)(I,{exact:!0,path:"/",privateComponent:ce}),Object(P.jsx)(I,{exact:!0,path:"/update-profile",privateComponent:ue}),Object(P.jsx)(I,{exact:!0,path:"/chat/:id",privateComponent:de}),Object(P.jsx)(H.b,{exact:!0,path:"/signin",children:Object(P.jsx)(re,{})}),Object(P.jsx)(H.b,{exact:!0,path:"/pin",children:Object(P.jsx)(oe,{})})]})},he=n(75),be=Object(he.io)("http://54.208.199.77:8086/"),pe=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;be.onAny((function(t){var n=e.props.auth.user.id_user,c=e.props.auth.token,a=e.props.chat.id;"SEND_CHAT_TO_".concat(n)===t&&be.on("SEND_CHAT_TO_".concat(n),(function(t){e.props.getMessageById(a,c),e.props.historyInteractions(c)}))}))}},{key:"render",value:function(){return Object(P.jsx)(P.Fragment,{children:this.props.children})}}]),n}(c.Component),xe={historyInteractions:D,getMessageById:function(e,t){return function(){var n=Object(X.a)(F.a.mark((function n(c){var a;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,U(t).get("chat/".concat(e));case 3:a=n.sent,console.log(a),c({type:"MESSAGE_HISTORY",messageHistory:a.data.result}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}},me=Object(d.b)((function(e){return{auth:e.auth,chat:e.chat.chatFocus}}),xe)(pe),Oe=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=S(),t=e.store,n=e.persistor;return Object(P.jsx)(d.a,{store:t,children:Object(P.jsx)(L.a,{persistor:n,children:Object(P.jsx)(me,{children:Object(P.jsx)(je,{})})})})}}]),n}(c.Component),ve=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,145)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(135),n(136),n(143);s.a.render(Object(P.jsx)(a.a.StrictMode,{children:Object(P.jsx)(ee.a,{children:Object(P.jsx)(Oe,{})})}),document.getElementById("root")),ve()},80:function(e,t,n){}},[[144,1,2]]]);
//# sourceMappingURL=main.29091ec3.chunk.js.map