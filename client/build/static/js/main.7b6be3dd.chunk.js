(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(13),r=a.n(i),s=a(15),l=a(9),o=a(2),d=Object(n.createContext)({});function u(e){return Object(o.jsx)(d.Provider,{value:e.value,children:e.children})}function j(){return Object(n.useContext)(d)}var m=a(204),b=a(184),h=a(33),p=a(16),g=a(186),O=a(189),x=a(190),f=a(206),v=a(191),y=a(208),N=a(192),C=a(188),k=Object(b.a)((function(e){return{toolbar:{justifyContent:"space-between"},iconButton:{fontSize:"1rem",borderRadius:"unset"},link:{textDecoration:"none",color:"inherit"},avatar:{width:40,height:40,marginLeft:e.spacing(2)}}}));function w(){var e=j(),t=k();return Object(o.jsx)(g.a,{children:Object(o.jsx)(C.a,{maxWidth:"lg",children:Object(o.jsxs)(O.a,{className:t.toolbar,children:[Object(o.jsx)(x.a,{variant:"h6",children:"EMPLOYEE DBMS"}),Object(o.jsx)(f.a,{display:"flex",alignItems:"center",children:e.isLoggedIn?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(h.b,{to:"/login",className:t.link,onClick:function(){localStorage.setItem("token",""),localStorage.setItem("user",""),e.setAuthState({isLoggedIn:!1,user:null,token:null})},children:Object(o.jsx)(v.a,{color:"inherit",className:t.iconButton,children:"Sign Out"})}),Object(o.jsx)(y.a,{className:t.avatar,children:Object(o.jsx)(N.a,{children:e.user.split(" ").map((function(e){return e[0].toUpperCase()})).join("")})})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(h.b,{to:"/login",className:t.link,children:Object(o.jsx)(v.a,{color:"inherit",className:t.iconButton,children:"Login"})}),Object(o.jsx)(h.b,{to:"/register",className:t.link,children:Object(o.jsx)(v.a,{color:"inherit",className:t.iconButton,children:"Register"})})]})})]})})})}var S=a(14),I=a.n(S),W=a(11),T=a(21),B=a(193),E=a(194),_=a(195),F=a(209),P=a(196),L=a(143),R=a(12),q=a(34),A=a.n(q),D=a(51),H=a.n(D),z=a(81),M=a.n(z);function U(){return M.a.create({baseURL:"/api"})}function G(){return M.a.create({baseURL:"/api/employees",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}})}var J=function(e){return U().post("register",Object(s.a)({},e))},Y=function(e){return U().post("login",Object(s.a)({},e))},K=Object(b.a)((function(e){return{container:{minHeight:"calc(100vh - ".concat(e.mixins.toolbar.minHeight,"px)"),display:"flex",alignItems:"center"},gridItem:{width:"100%",marginTop:e.spacing(5)},submitButton:{marginTop:e.spacing(3)},formControl:{marginBottom:e.spacing(3)},paper:{padding:e.spacing(3)},info:{marginTop:e.spacing(2),color:A.a[700]},success:{backgroundColor:Object(R.d)(H.a[500],.85),color:H.a[500],marginTop:e.spacing(3),padding:e.spacing(2),borderRadius:e.shape.borderRadius,transition:e.transitions.create("all",{duration:e.transitions.duration.enteringScreen,easing:e.transitions.easing.easeInOut})},placeholder:{marginTop:e.spacing(3),padding:e.spacing(2),borderRadius:e.shape.borderRadius}}}));function Q(){var e=K(),t=Object(n.useState)({name:"",email:"",password:""}),a=Object(l.a)(t,2),c=a[0],i=a[1],r=Object(n.useState)(!1),d=Object(l.a)(r,2),u=d[0],j=d[1],m=Object(p.g)();function b(){return(b=Object(T.a)(I.a.mark((function e(t){var a,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,J(c);case 4:(null===(n=e.sent)||void 0===n||null===(a=n.data)||void 0===a?void 0:a.message)&&(j(!0),i({name:"",email:"",password:""})),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}Object(n.useEffect)((function(){var e=setTimeout((function(){j(!1)}),4e3);return function(){clearTimeout(e)}}));var h=function(e){var t=e.target.value,a=e.target.id;i(Object(s.a)(Object(s.a)({},c),{},Object(W.a)({},a,t)))};return Object(o.jsx)(C.a,{maxWidth:"xs",className:e.container,children:Object(o.jsxs)("section",{children:[Object(o.jsx)(x.a,{variant:"h4",align:"center",children:"Register"}),Object(o.jsx)(x.a,{align:"center",className:e.info,children:"create account to access the dashboard"}),u&&Object(o.jsx)("div",{className:e.success,children:Object(o.jsx)(x.a,{children:"registration complete"})}),Object(o.jsx)(B.a,{container:!0,children:Object(o.jsx)(B.a,{item:!0,className:e.gridItem,children:Object(o.jsx)(L.a,{className:e.paper,children:Object(o.jsxs)("form",{onSubmit:function(e){return b.apply(this,arguments)},children:[Object(o.jsxs)(E.a,{fullWidth:!0,className:e.formControl,children:[Object(o.jsx)(F.a,{htmlFor:"name",children:"Name"}),Object(o.jsx)(_.a,{onChange:h,type:"text",value:c.name,id:"name",fullWidth:!0,required:!0})]}),Object(o.jsxs)(E.a,{fullWidth:!0,className:e.formControl,children:[Object(o.jsx)(F.a,{htmlFor:"email",children:"Email"}),Object(o.jsx)(_.a,{onChange:h,type:"email",value:c.email,id:"email",fullWidth:!0,required:!0})]}),Object(o.jsxs)(E.a,{fullWidth:!0,className:e.formControl,children:[Object(o.jsx)(F.a,{htmlFor:"password",children:"Password"}),Object(o.jsx)(_.a,{onChange:h,type:"password",value:c.password,id:"password",fullWidth:!0,required:!0})]}),Object(o.jsx)(P.a,{type:"submit",variant:"contained",color:"primary",size:"large",fullWidth:!0,className:e.submitButton,children:"Sign up"})]})})})}),Object(o.jsxs)("div",{style:{display:"flex",justifyContent:"center",marginTop:16},children:[Object(o.jsxs)(x.a,{style:{marginRight:5},children:["Already have an account?"," "]}),Object(o.jsx)(x.a,{style:{color:"#3f51b5",cursor:"pointer"},onClick:function(){m.push("/login")},children:"Sign in"})]})]})})}var V=Object(b.a)((function(e){return{container:{minHeight:"calc(100vh - ".concat(e.mixins.toolbar.minHeight,"px)"),display:"flex",alignItems:"center"},gridItem:{width:"100%",marginTop:e.spacing(5)},submitButton:{marginTop:e.spacing(3)},formControl:{marginBottom:e.spacing(3)},paper:{padding:e.spacing(3)},info:{marginTop:e.spacing(2),color:A.a[700]}}}));function X(){var e=Object(n.useState)({email:"",password:""}),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(p.g)(),r=j(),d=V();function u(){return(u=Object(T.a)(I.a.mark((function e(t){var n,c,s,l,o;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,Y(a);case 4:(null===(c=e.sent)||void 0===c||null===(n=c.data)||void 0===n?void 0:n.token)&&(s=c.data,l=s.name,o=s.token,localStorage.setItem("token",o),localStorage.setItem("user",l),r.setAuthState({isLoggedIn:!0,user:l}),i.push("/employees")),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}var m=function(e){var t=e.target.value,a=e.target.id;c((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(W.a)({},a,t))}))};return Object(o.jsx)(C.a,{maxWidth:"xs",className:d.container,children:Object(o.jsxs)("section",{children:[Object(o.jsx)(x.a,{variant:"h4",align:"center",children:"Log in"}),Object(o.jsx)(x.a,{align:"center",className:d.info,children:"sign in to access dashboard"}),Object(o.jsx)(B.a,{container:!0,children:Object(o.jsx)(B.a,{item:!0,className:d.gridItem,children:Object(o.jsx)(L.a,{className:d.paper,children:Object(o.jsxs)("form",{method:"post",onSubmit:function(e){return u.apply(this,arguments)},children:[Object(o.jsxs)(E.a,{fullWidth:!0,className:d.formControl,children:[Object(o.jsx)(F.a,{htmlFor:"email",children:"Email"}),Object(o.jsx)(_.a,{onChange:m,type:"email",value:a.email,id:"email",fullWidth:!0,required:!0})]}),Object(o.jsxs)(E.a,{fullWidth:!0,className:d.formControl,children:[Object(o.jsx)(F.a,{htmlFor:"password",children:"Password"}),Object(o.jsx)(_.a,{onChange:m,type:"password",value:a.password,id:"password",fullWidth:!0,required:!0})]}),Object(o.jsx)(P.a,{type:"submit",variant:"contained",color:"primary",size:"large",fullWidth:!0,className:d.submitButton,children:"Sign in"})]})})})}),Object(o.jsxs)("div",{style:{display:"flex",justifyContent:"center",marginTop:16},children:[Object(o.jsxs)(x.a,{style:{marginRight:5},children:["Don't have an account?"," "]}),Object(o.jsx)(x.a,{style:{color:"#3f51b5",cursor:"pointer"},onClick:function(){i.push("/register")},children:"register"})]})]})})}var Z=a(24),$=a(201),ee=a(202),te=a(199),ae=a(200),ne=a(197),ce=a(205),ie=a(198),re=a(210),se=a(207),le=a(95),oe=a.n(le),de=a(96),ue=a.n(de),je=a(97),me=a.n(je),be=a(30),he=a(203),pe=function(){return G().get("/")},ge=function(e){return G().delete("/".concat(e,"/delete"))},Oe=function(e,t){return G().patch("/".concat(e,"/edit"),t)},xe=function(e){return G().post("/add",e)},fe=a(211),ve=a(68),ye=a.n(ve),Ne=Object(b.a)((function(e){return{container:{minHeight:"calc(100vh - ".concat(e.mixins.toolbar.minHeight,"px)"),display:"flex",alignItems:"center"},gridItem:{width:"100%",marginTop:e.spacing(8)},submitButton:{marginTop:e.spacing(3)},formControl:{marginBottom:e.spacing(3)},paper:{padding:e.spacing(3)},info:{marginTop:e.spacing(2),color:A.a[700]},backdrop:{zIndex:e.zIndex.modal},title:{marginBottom:e.spacing(2)},heading:{display:"flex",justifyContent:"space-between",alignItems:"baseline"}}}));function Ce(e){var t=e.selectedData,a=e.isOpen,c=e.setIsOpen,i=e.handleUpdateEmployee,r=Ne(),d=Object(n.useState)(Object(s.a)({},t)),u=Object(l.a)(d,2),j=u[0],m=u[1];function b(){return(b=Object(T.a)(I.a.mark((function e(a){var n,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,Oe(t.id,j);case 4:(null===(c=e.sent)||void 0===c||null===(n=c.data)||void 0===n?void 0:n.message)&&i(j),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}var h=function(e){var t=e.target.value,a=e.target.id;m(Object(s.a)(Object(s.a)({},j),{},Object(W.a)({},a,t)))};return Object(o.jsx)(fe.a,{open:a,className:r.backdrop,children:Object(o.jsx)(C.a,{maxWidth:"xs",className:r.container,children:Object(o.jsx)(B.a,{container:!0,children:Object(o.jsx)(B.a,{item:!0,className:r.gridItem,children:Object(o.jsxs)(L.a,{className:r.paper,children:[Object(o.jsxs)("div",{className:r.heading,children:[Object(o.jsx)(x.a,{variant:"h6",className:r.title,children:"Edit Employee"}),Object(o.jsx)(v.a,{onClick:function(){c(!1)},children:Object(o.jsx)(ye.a,{})})]}),Object(o.jsxs)("form",{onSubmit:function(e){return b.apply(this,arguments)},children:[Object(o.jsxs)(E.a,{fullWidth:!0,className:r.formControl,children:[Object(o.jsx)(F.a,{htmlFor:"first_name",children:"FirstName"}),Object(o.jsx)(_.a,{onChange:h,type:"text",value:j.first_name,id:"first_name",fullWidth:!0,required:!0})]}),Object(o.jsxs)(E.a,{fullWidth:!0,className:r.formControl,children:[Object(o.jsx)(F.a,{htmlFor:"last_name",children:"LastName"}),Object(o.jsx)(_.a,{onChange:h,type:"text",value:j.last_name,id:"last_name",fullWidth:!0,required:!0})]}),Object(o.jsxs)(E.a,{fullWidth:!0,className:r.formControl,children:[Object(o.jsx)(F.a,{htmlFor:"email",children:"Email"}),Object(o.jsx)(_.a,{onChange:h,type:"email",value:j.email,id:"email",fullWidth:!0,required:!0})]}),Object(o.jsxs)(E.a,{fullWidth:!0,className:r.formControl,children:[Object(o.jsx)(F.a,{htmlFor:"gender",children:"Gender"}),Object(o.jsx)(_.a,{onChange:h,type:"gender",value:j.gender,id:"gender",fullWidth:!0,required:!0})]}),Object(o.jsx)(P.a,{type:"submit",variant:"contained",color:"primary",size:"large",fullWidth:!0,className:r.submitButton,children:"Submit"})]})]})})})})})}var ke=Object(b.a)((function(e){return{container:{minHeight:"calc(100vh - ".concat(e.mixins.toolbar.minHeight,"px)"),display:"flex",alignItems:"center"},gridItem:{width:"100%",marginTop:e.spacing(8)},submitButton:{marginTop:e.spacing(3)},formControl:{marginBottom:e.spacing(3)},paper:{padding:e.spacing(3)},info:{marginTop:e.spacing(2),color:A.a[700]},backdrop:{zIndex:e.zIndex.modal},title:{marginBottom:e.spacing(2)},heading:{display:"flex",justifyContent:"space-between",alignItems:"baseline"}}}));function we(e){var t=e.isOpen,a=e.setIsOpen,c=e.handleAddEmployee,i=ke(),r=Object(n.useState)({first_name:"",last_name:"",email:"",gender:""}),d=Object(l.a)(r,2),u=d[0],j=d[1];function m(){return(m=Object(T.a)(I.a.mark((function e(t){var a,n,i;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,xe(u);case 4:(null===(n=e.sent)||void 0===n||null===(a=n.data)||void 0===a?void 0:a.message)&&(i=n.data.employee,c(i)),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}var b=function(e){var t=e.target.value,a=e.target.id;j(Object(s.a)(Object(s.a)({},u),{},Object(W.a)({},a,t)))};return Object(o.jsx)(fe.a,{open:t,className:i.backdrop,children:Object(o.jsx)(C.a,{maxWidth:"xs",className:i.container,children:Object(o.jsx)(B.a,{container:!0,children:Object(o.jsx)(B.a,{item:!0,className:i.gridItem,children:Object(o.jsxs)(L.a,{className:i.paper,children:[Object(o.jsxs)("div",{className:i.heading,children:[Object(o.jsx)(x.a,{variant:"h6",className:i.title,children:"Add Employee"}),Object(o.jsx)(v.a,{onClick:function(){a(!1)},children:Object(o.jsx)(ye.a,{})})]}),Object(o.jsxs)("form",{onSubmit:function(e){return m.apply(this,arguments)},children:[Object(o.jsxs)(E.a,{fullWidth:!0,className:i.formControl,children:[Object(o.jsx)(F.a,{htmlFor:"first_name",children:"FirstName"}),Object(o.jsx)(_.a,{onChange:b,type:"text",value:u.first_name,id:"first_name",fullWidth:!0,required:!0})]}),Object(o.jsxs)(E.a,{fullWidth:!0,className:i.formControl,children:[Object(o.jsx)(F.a,{htmlFor:"last_name",children:"LastName"}),Object(o.jsx)(_.a,{onChange:b,type:"text",value:u.last_name,id:"last_name",fullWidth:!0,required:!0})]}),Object(o.jsxs)(E.a,{fullWidth:!0,className:i.formControl,children:[Object(o.jsx)(F.a,{htmlFor:"email",children:"Email"}),Object(o.jsx)(_.a,{onChange:b,type:"email",value:u.email,id:"email",fullWidth:!0,required:!0})]}),Object(o.jsxs)(E.a,{fullWidth:!0,className:i.formControl,children:[Object(o.jsx)(F.a,{htmlFor:"gender",children:"Gender"}),Object(o.jsx)(_.a,{onChange:b,type:"gender",value:u.gender,id:"gender",fullWidth:!0,required:!0})]}),Object(o.jsx)(P.a,{type:"submit",variant:"contained",color:"primary",size:"large",fullWidth:!0,className:i.submitButton,children:"Submit"})]})]})})})})})}function Se(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}function Ie(e,t){return"desc"===e?function(e,a){return Se(e,a,t)}:function(e,a){return-Se(e,a,t)}}function We(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}var Te=[{id:"first_name",numeric:!1,disablePadding:!0,label:"First Name"},{id:"last_name",numeric:!1,disablePadding:!0,label:"Last Name"},{id:"email",numeric:!1,disablePadding:!1,label:"Email"},{id:"gender",numeric:!1,disablePadding:!1,label:"Gender"}];function Be(e){var t=e.classes,a=e.onSelectAllClick,n=e.order,c=e.orderBy,i=e.numSelected,r=e.rowCount,s=e.onRequestSort;return Object(o.jsx)(ne.a,{children:Object(o.jsxs)(ie.a,{children:[Object(o.jsx)(te.a,{padding:"checkbox",children:Object(o.jsx)(se.a,{indeterminate:i>0&&i<r,checked:r>0&&i===r,onChange:a,inputProps:{"aria-label":"select all employees"}})}),Te.map((function(e){return Object(o.jsx)(te.a,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:c===e.id&&n,children:Object(o.jsxs)(re.a,{active:c===e.id,direction:c===e.id?n:"asc",onClick:(a=e.id,function(e){s(e,a)}),children:[e.label,c===e.id?Object(o.jsx)("span",{className:t.visuallyHidden,children:"desc"===n?"sorted descending":"sorted ascending"}):null]})},e.id);var a}))]})})}var Ee=Object(b.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:{color:e.palette.primary.main,backgroundColor:Object(R.d)(e.palette.primary.light,.85)},title:{flex:"1 1 100%"}}})),_e=function(e){var t=e.toastMessage,a=e.setToastMessage,c=e.toastAction,i=e.setToastAction,r=e.numSelected,s=e.handleDeleteEmployee,l=e.handleEditEmployee,d=Ee(),u=Object(be.a)();return Object(n.useEffect)((function(){var e=setTimeout((function(){a(""),i("")}),4e3);return function(){clearTimeout(e)}})),Object(o.jsxs)(O.a,{className:"".concat(d.root," ").concat(r>0&&d.highlight),style:{backgroundColor:"add"===c?Object(R.d)(H.a[500],.85):"delete"===c?Object(R.d)(u.palette.secondary.light,.85):"update"===c?Object(R.d)(u.palette.primary.light,.85):null,color:"add"===c?H.a[500]:"delete"===c?u.palette.secondary.main:"update"===c?u.palette.primary.main:null},children:[t.length>0&&Object(o.jsx)(x.a,{children:t}),r>0&&Object(o.jsxs)(x.a,{className:d.title,color:"inherit",variant:"subtitle1",component:"div",children:[r," selected"]}),0===r&&0===t.length&&Object(o.jsx)(x.a,{className:d.title,variant:"h6",id:"tableTitle",component:"div",children:"Employee List"}),r>0&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(v.a,{"aria-label":"delete",onClick:s,children:Object(o.jsx)(oe.a,{})}),Object(o.jsx)(v.a,{"aria-label":"edit",onClick:l,children:Object(o.jsx)(ue.a,{})})]})]})},Fe=Object(b.a)((function(e){return{container:{minHeight:"calc(100vh - ".concat(e.mixins.toolbar.minHeight,"px)"),display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},tableRow:{"&.Mui-selected, &.Mui-selected:hover":{backgroundColor:Object(R.d)(e.palette.primary.light,.85)}},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1},addButton:{marginTop:e.spacing(2),backgroundColor:e.palette.primary.main,color:e.palette.common.white,"&:hover":{backgroundColor:e.palette.primary.dark},"& svg":{fontSize:"2rem"}}}}));function Pe(){var e=Object(n.useState)("asc"),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)("gender"),r=Object(l.a)(i,2),d=r[0],u=r[1],j=Object(n.useState)([]),m=Object(l.a)(j,2),b=m[0],h=m[1],p=Object(n.useState)(0),g=Object(l.a)(p,2),O=g[0],x=g[1],f=Object(n.useState)(0),y=Object(l.a)(f,2),N=y[0],k=y[1],w=Object(n.useState)([]),S=Object(l.a)(w,2),W=S[0],B=S[1],E=Object(n.useState)(null),_=Object(l.a)(E,2),F=_[0],P=_[1],R=Object(n.useState)({}),q=Object(l.a)(R,2),A=q[0],D=q[1],H=Object(n.useState)(!1),z=Object(l.a)(H,2),M=z[0],U=z[1],G=Object(n.useState)(!1),J=Object(l.a)(G,2),Y=J[0],K=J[1],Q=Object(n.useState)(""),V=Object(l.a)(Q,2),X=V[0],ne=V[1],re=Object(n.useState)(""),le=Object(l.a)(re,2),oe=le[0],de=le[1],ue=Fe();Object(n.useEffect)((function(){!function(){var e=Object(T.a)(I.a.mark((function e(){var t,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe();case 2:a=e.sent,B(a.data),(null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.length)>0&&k(10);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]);var je=N-Math.min(N,W.length-O*N),be=function(){var e=Object(T.a)(I.a.mark((function e(){var t,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ge(F);case 2:(null===(a=e.sent)||void 0===a||null===(t=a.data)||void 0===t?void 0:t.message)&&(B((function(e){return e.filter((function(e){return e.id!==F}))})),h([]),ne("employee was deleted"),de("delete"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(T.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=W.filter((function(e){return e.id===F}))[0],D(t),U(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),xe=function(){var e=Object(T.a)(I.a.mark((function e(t){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=W.map((function(e){return e.id===t.id?Object(s.a)(Object(s.a)({},e),t):e})),B(a),U(!1),h([]),ne("employee was updated"),de("update");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fe=function(){var e=Object(T.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:B((function(e){return[].concat(Object(Z.a)(e),[t])})),K(!1),ne("employee was added"),de("add");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)(o.Fragment,{children:[M&&Object(o.jsx)(Ce,{selectedData:A,isOpen:M,setIsOpen:U,handleUpdateEmployee:xe}),Y&&Object(o.jsx)(we,{isOpen:Y,setIsOpen:K,handleAddEmployee:fe}),Object(o.jsx)(C.a,{maxWidth:"lg",className:ue.container,children:W.length>0?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:ue.root,children:Object(o.jsxs)(L.a,{className:ue.paper,children:[Object(o.jsx)(_e,{toastMessage:X,setToastMessage:ne,toastAction:oe,setToastAction:de,numSelected:b.length,handleDeleteEmployee:be,handleEditEmployee:Oe}),Object(o.jsx)(ae.a,{children:Object(o.jsxs)($.a,{className:ue.table,"aria-labelledby":"tableTitle",size:"small","aria-label":"enhanced employees table",children:[Object(o.jsx)(Be,{classes:ue,numSelected:b.length,order:a,orderBy:d,onSelectAllClick:function(e){if(e.target.checked){var t=W.map((function(e){return e.first_name}));h(t)}else h([])},onRequestSort:function(e,t){c(d===t&&"asc"===a?"desc":"asc"),u(t)},rowCount:W.length}),Object(o.jsxs)(ee.a,{children:[We(W,Ie(a,d)).slice(O*N,O*N+N).map((function(e,t){var a,n=(a=e.first_name,-1!==b.indexOf(a)),c="enhanced-table-checkbox-".concat(t);return Object(o.jsxs)(ie.a,{hover:!0,onClick:function(t){!function(e,t){var a=b.indexOf(t),n=[];-1===a?n=n.concat(b,t):0===a?n=n.concat(b.slice(1)):a===b.length-1?n=n.concat(b.slice(0,-1)):a>0&&(n=n.concat(b.slice(0,a),b.slice(a+1))),h(n)}(0,e.first_name),P(e.id)},role:"checkbox","aria-checked":n,tabIndex:-1,selected:n,className:ue.tableRow,children:[Object(o.jsx)(te.a,{padding:"checkbox",children:Object(o.jsx)(se.a,{color:"primary",checked:n,inputProps:{"aria-labelledby":c}})}),Object(o.jsx)(te.a,{component:"th",id:c,scope:"row",padding:"none",children:e.first_name}),Object(o.jsx)(te.a,{align:"left",children:e.last_name}),Object(o.jsx)(te.a,{align:"left",children:e.email}),Object(o.jsx)(te.a,{align:"left",children:e.gender})]},e.first_name)})),je>0&&Object(o.jsx)(ie.a,{style:{height:33*je},children:Object(o.jsx)(te.a,{colSpan:6})})]})]})}),Object(o.jsx)(ce.a,{rowsPerPageOptions:[],component:"div",count:W.length,rowsPerPage:N,page:O,onChangePage:function(e,t){x(t)},onChangeRowsPerPage:function(e){k(parseInt(e.target.value,10)),x(0)}})]})}),Object(o.jsx)(v.a,{"aria-label":"add employee",className:ue.addButton,onClick:function(){K(!0),h([])},children:Object(o.jsx)(me.a,{})})]}):Object(o.jsx)(he.a,{})})]})}var Le=Object(b.a)((function(e){return{main:{paddingTop:e.mixins.toolbar.minHeight}}}));var Re=function(){var e=Object(n.useState)({isLoggedIn:!!localStorage.getItem("token"),user:localStorage.getItem("user")||null}),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Le();return Object(o.jsxs)(u,{value:Object(s.a)(Object(s.a)({},a),{},{setAuthState:c}),children:[Object(o.jsx)(m.a,{}),Object(o.jsxs)(h.a,{children:[Object(o.jsx)(w,{}),Object(o.jsx)("main",{className:i.main,children:Object(o.jsxs)(p.d,{children:[Object(o.jsx)(p.b,{exact:!0,path:"/",children:a.isLoggedIn?Object(o.jsx)(p.a,{to:"/employees"}):Object(o.jsx)(p.a,{to:"/register"})}),Object(o.jsx)(p.b,{path:"/register",children:Object(o.jsx)(Q,{})}),Object(o.jsx)(p.b,{path:"/login",children:Object(o.jsx)(X,{})}),Object(o.jsx)(p.b,{path:"/employees",children:a.isLoggedIn?Object(o.jsx)(Pe,{}):Object(o.jsx)(p.a,{to:"/login"})})]})})]})]})};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(Re,{})}),document.getElementById("root"))}},[[140,1,2]]]);
//# sourceMappingURL=main.7b6be3dd.chunk.js.map