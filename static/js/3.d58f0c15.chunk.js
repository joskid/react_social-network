(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{292:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogsItem:"Dialogs_dialogsItem__8wYI2",messages:"Dialogs_messages__1w_Up",message:"Dialogs_message__1xIDh"}},293:function(e,a,t){},294:function(e,a,t){e.exports={active:"DialogItem_active__2qnc5",dialog:"DialogItem_dialog__3tDA2"}},300:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(103),o=t(292),c=t.n(o),r=t(293),l=t.n(r),m=function(e){return s.a.createElement("div",{className:l.a.message},e.message)},u=t(294),d=t.n(u),g=t(17),b=function(e){var a="/dialogs/DialogItem/"+e.id;return s.a.createElement("div",{className:d.a.dialog+" "+d.a.active},s.a.createElement(g.b,{to:a},e.name))},f=t(126),p=t(127),_=t(41),E=t(40),v=Object(E.a)(50),h=Object(p.a)({form:"dialogAddMessageForm"})(function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement(f.a,{component:_.b,validate:[E.b,v],name:"newMessageBody",placeholder:"Enter your message"}),s.a.createElement("div",null,s.a.createElement("button",null,"Send")))}),j=function(e){var a=e.dialogsPage,t=a.dialogsData.map(function(e){return s.a.createElement(b,{key:e.id,name:e.name,id:e.id})}),n=a.messagesData.map(function(e){return s.a.createElement(m,{key:e.id,message:e.message})});return s.a.createElement("div",{className:c.a.dialogs},s.a.createElement("div",{className:c.a.dialogsItem},t),s.a.createElement("div",{className:c.a.messages},s.a.createElement("div",null,n)),s.a.createElement(h,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}}))},D=t(11),O=t(34),w=t(35),I=t(37),y=t(36),A=t(38),k=t(29),M=function(e){return{isAuth:e.auth.isAuth}},N=t(6);a.default=Object(N.d)(Object(D.b)(function(e){return{dialogsPage:e.dialogsPage}},function(e){return{sendMessage:function(a){e(Object(i.b)(a))}}}),function(e){var a=function(a){function t(){return Object(O.a)(this,t),Object(I.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(A.a)(t,a),Object(w.a)(t,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(k.a,{to:"/login"})}}]),t}(s.a.Component);return Object(D.b)(M)(a)})(j)}}]);
//# sourceMappingURL=3.d58f0c15.chunk.js.map