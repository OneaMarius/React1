(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,c){e.exports={card:"Cart_card__3TUDf",cardMain:"Cart_cardMain__lDO8_",cardHeader:"Cart_cardHeader__3qRGK",cardFooter:"Cart_cardFooter__25KBC",type:"Cart_type__VB1ui",name:"Cart_name__YujRA",total:"Cart_total__1Hv8V",price:"Cart_price__3HkeZ",addButton:"Cart_addButton__34R-d",button:"Cart_button__2O0Ko",Movie:"Cart_Movie__3EbUc",Game:"Cart_Game__3dgux",Music:"Cart_Music__NBZlA",App:"Cart_App__2bJnV"}},,function(e,t,c){e.exports={card:"Login_card__2IoeT",form:"Login_form__2XRL0",input:"Login_input__1e88m",loading:"Login_loading__3-0s6"}},,,,,function(e,t,c){e.exports={card:"ProdItem_card__1udSm",link:"ProdItem_link__2pLkG",type:"ProdItem_type__1fA1_",name:"ProdItem_name__elB4Q",price:"ProdItem_price__1TflR",addButton:"ProdItem_addButton__3ayO2",Movie:"ProdItem_Movie__12kHs",Game:"ProdItem_Game__3WVnK",Music:"ProdItem_Music__3eAWW",App:"ProdItem_App__vfOs2"}},function(e,t,c){e.exports={header:"Header_header__2Uzh3",header1:"Header_header1__1bCLY",home:"Header_home__269yr",cart:"Header_cart__QMTQu",logout:"Header_logout__1FgqC",login:"Header_login__pTw8w",cartContainer:"Header_cartContainer__34ogH",cartItems:"Header_cartItems__2xxdj",bump:"Header_bump__2SrNm"}},,,function(e,t,c){e.exports={modal:"ErrorModal_modal__gM4H8",top:"ErrorModal_top__2Rnhr",center:"ErrorModal_center__S6407",bottom:"ErrorModal_bottom__i_FBu",backdrop:"ErrorModal_backdrop__3O4qy"}},function(e,t,c){e.exports={card:"NavigationBar_card__MZ6qQ",nav1:"NavigationBar_nav1__1ZEjB",nav2:"NavigationBar_nav2__1IT3o",searchButton:"NavigationBar_searchButton__3tpz0",input:"NavigationBar_input__15GTV"}},function(e,t,c){e.exports={name:"ProductDetail_name__30_Qd",desc:"ProductDetail_desc__3DLYm",modal:"ProductDetail_modal___HELN",top:"ProductDetail_top__32VD0",center:"ProductDetail_center__ku0up",bottom:"ProductDetail_bottom__ce_s8",link:"ProductDetail_link__dozJ_"}},,,,function(e,t,c){},function(e,t,c){e.exports={footer:"Footer_footer__354U_",credit:"Footer_credit__2Rhl6"}},,function(e,t,c){e.exports={card:"AddNewProdButton_card__1pjPA",button:"AddNewProdButton_button__3WOxO"}},function(e,t,c){e.exports={form:"AddProd_form__zbhac",card:"AddProd_card__V9MMY"}},,function(e,t,c){e.exports={button:"Button_button__3z4yN"}},function(e,t,c){e.exports={card:"Card_card__23A_9"}},,,function(e,t,c){e.exports={main:"Main_main__11zXl"}},function(e,t,c){e.exports={card:"CardBox_card__TvsmW"}},function(e,t,c){e.exports={loading:"LoadingDatabase_loading__2KCCr"}},,,,,,,,,,,,,,,function(e,t,c){"use strict";c.r(t);var a,n=c(26),r=c.n(n),o=c(1),s=c.n(o),i=c(10),l=c(21),d=c.n(l),j=c(2),u=c(27),m=c.n(u),b=c(0),p=function(e){return Object(b.jsx)("button",{className:"".concat(m.a.button," ").concat(e.className?e.className:""),type:e.type||"button",onClick:e.onClick,children:e.children})},O=c(28),h=c.n(O),x=function(e){return Object(b.jsx)("div",{className:"".concat(h.a.card," ").concat(e.className),onClick:e.onClick,children:e.children})},_=c(4),f=c.n(_),v=s.a.createContext({items:[],totalAmount:0,itemsInCart:0,addItem:function(e){},removeItem:function(e){}}),g=function(e){var t=Object(o.useContext)(v),c="".concat(f.a.type,"\n                      ").concat("Game"===e.type?f.a.Game:"","\n                      ").concat("Movie"===e.type?f.a.Movie:"","\n                      ").concat("Music"===e.type?f.a.Music:"","\n                      ").concat("App"===e.type?f.a.App:""," ");return Object(b.jsxs)(x,{className:f.a.cardMain,children:[Object(b.jsx)("div",{className:f.a.name,children:e.name}),Object(b.jsx)("div",{className:c}),Object(b.jsx)("div",{className:f.a.price,children:"".concat(e.price,"$")}),Object(b.jsx)("div",{className:f.a.addButton,children:Object(b.jsx)(p,{className:f.a.button,onClick:function(){t.removeItem(e.keyID)},children:"Remove"})})]},e.keyID)},N=function(e){var t=Object(o.useContext)(v);return console.log(t.items,t.totalAmount),Object(b.jsxs)(x,{className:f.a.card,children:[Object(b.jsxs)(x,{className:f.a.cardHeader,children:[Object(b.jsx)("div",{className:f.a.name,children:"Name"}),Object(b.jsx)("div",{className:f.a.type,children:"Type"}),Object(b.jsx)("div",{className:f.a.price,children:"Price"}),Object(b.jsx)("div",{className:f.a.addButton})]}),t.items.map((function(e){return Object(b.jsx)("div",{children:Object(b.jsx)(g,{id:e.id,name:e.name,type:e.type,price:e.price,keyID:e.key})},Math.random())})),Object(b.jsxs)(x,{className:f.a.cardFooter,children:[Object(b.jsx)("div",{className:f.a.total,children:"Total"}),Object(b.jsx)("div",{className:f.a.price,children:"".concat(t.totalAmount," $")}),Object(b.jsx)("div",{className:f.a.addButton,children:Object(b.jsx)(p,{className:f.a.button,children:"Buy"})})]})]})},y=c(22),C=c.n(y),k=function(e){return Object(b.jsx)("div",{className:C.a.footer,children:Object(b.jsx)("div",{className:C.a.credit,children:"\u24b8 Created by Onea Marius"})})},I=c(12),S=c.n(I),P=c(13),B=s.a.createContext({token:"",isLoggedIn:!1,admin:!1,login:function(e){},logout:function(e){}}),M=function(e){var t=localStorage.getItem("token"),c=Object(o.useState)(t),n=Object(j.a)(c,2),r=n[0],s=n[1],i=Object(o.useState)(!1),l=Object(j.a)(i,2),d=l[0],u=l[1],m=function(){s(null),u(!1),localStorage.removeItem("token"),a&&clearTimeout(a)},p={token:r,isLoggedIn:!!r,admin:d,login:function(e,t,c){s(e),"mariussaudaniel@gmail.com"===c&&u(!0),localStorage.setItem("token",e),localStorage.setItem("expirationTime",t);var n=function(e){var t=(new Date).getTime();return new Date(e).getTime()-t}(t);a=setTimeout(m,n)},logout:m};return Object(b.jsx)(B.Provider,{value:p,children:e.children})},T=B,A=function(e){var t=Object(o.useContext)(v),c=Object(o.useContext)(T),a=Object(P.useState)(!1),n=Object(j.a)(a,2),r=n[0],s=n[1],l="".concat(S.a.cartItems," ").concat(r?S.a.bump:""),d=c.isLoggedIn;Object(P.useEffect)((function(){t.itemsInCart&&s(!0);var e=setTimeout((function(){s(!1)}),[300]);return function(){clearTimeout(e)}}),[t.itemsInCart]);return Object(b.jsxs)("div",{children:[d&&Object(b.jsxs)("div",{className:S.a.header,children:[Object(b.jsx)(i.b,{to:"/home",className:S.a.home}),Object(b.jsxs)("div",{className:S.a.cartContainer,children:[Object(b.jsx)(i.b,{to:"/cart",className:S.a.cart}),Object(b.jsx)("div",{className:l,children:t.itemsInCart})]}),Object(b.jsx)(i.b,{to:"/login",className:S.a.logout,onClick:function(){c.logout()},children:" "})]}),!d&&Object(b.jsx)("div",{className:S.a.header1,children:Object(b.jsx)(i.b,{to:"/login",className:S.a.login})})]})},D=c(31),w=c.n(D),L=function(e){return Object(b.jsx)("div",{className:"".concat(w.a.main," ").concat(e.className?e.className:""),children:e.children})},R=c(3),E=c(6),H=c.n(E),F=function(e){var t=Object(o.useRef)(),c=Object(o.useRef)(),a=Object(o.useState)(""),n=Object(j.a)(a,2),r=n[0],s=n[1],i=Object(o.useContext)(T),l=Object(R.g)(),d=Object(o.useState)(!1),u=Object(j.a)(d,2),m=u[0],O=u[1];return Object(b.jsxs)(x,{className:H.a.card,children:[Object(b.jsx)("h2",{children:"LOGIN"}),Object(b.jsxs)("form",{className:H.a.form,onSubmit:function(e){e.preventDefault(),s(""),console.log(t.current.value,c.current.value);var a=t.current.value,n=c.current.value;if(O(!0),fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC4_ps4hI1PjQgwx1YBfyZY2vcAZ_uMqxk",{method:"POST",body:JSON.stringify({email:n,password:a,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json().then((function(e){var t=new Date((new Date).getTime()+1e3*+e.expiresIn);console.log(e),i.login(e.idToken,t.toString(),e.email),l.replace("/home"),s("User Loged In"),O(!1)})):e.json().then((function(e){console.log(e.error.message),s(e.error.message),O(!1)}))})),m)return Object(b.jsx)("section",{children:Object(b.jsx)("div",{className:H.a.loading,children:"Loading..."})})},children:[Object(b.jsx)("label",{htmlFor:"email1",className:H.a.label,children:"Email:"}),Object(b.jsx)("input",{id:"email1",type:"text",className:H.a.input,ref:c}),Object(b.jsx)("label",{htmlFor:"password1",className:H.a.label,children:"Password:"}),Object(b.jsx)("input",{id:"password1",type:"password",ref:t,className:H.a.input}),Object(b.jsx)(p,{type:"submit",onClick:function(){e.dbReload()},children:"Login"}),Object(b.jsx)("span",{children:"or"}),Object(b.jsx)(p,{onClick:function(){e.onClick()},children:"Sign Up"})]}),m&&Object(b.jsx)("h4",{className:H.a.loading,children:"Loading..."}),Object(b.jsx)("h4",{children:r})]})},G=function(e){var t=Object(o.useState)(""),c=Object(j.a)(t,2),a=c[0],n=c[1],r=Object(o.useRef)(),s=Object(o.useRef)(),i=Object(o.useRef)();return Object(b.jsxs)(x,{className:H.a.card,children:[Object(b.jsx)("h2",{children:"SIGN UP"}),Object(b.jsxs)("form",{className:H.a.form,onSubmit:function(e){e.preventDefault(),n(""),console.log(s.current.value,i.current.value);var t=r.current.value,c=s.current.value,a=i.current.value,o={username:t,password:c,email:a};fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC4_ps4hI1PjQgwx1YBfyZY2vcAZ_uMqxk",{method:"POST",body:JSON.stringify({email:a,password:c,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){if(!e.ok)return e.json().then((function(e){console.log(e.error.message),n(e.error.message)}));n("User Created"),fetch("https://react-project-1-eaa82-default-rtdb.firebaseio.com/users.json",{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}})})),r.current.value=""},children:[Object(b.jsx)("label",{htmlFor:"username2",className:H.a.label,children:"Username:"}),Object(b.jsx)("input",{id:"username2",type:"text",ref:r,required:!0,className:H.a.input}),Object(b.jsx)("label",{htmlFor:"email",className:H.a.label,children:"Email:"}),Object(b.jsx)("input",{id:"email",type:"text",ref:i,required:!0,className:H.a.input}),Object(b.jsx)("label",{htmlFor:"password2",className:H.a.label,children:"Password:"}),Object(b.jsx)("input",{id:"password2",type:"password",ref:s,required:!0,className:H.a.input}),Object(b.jsx)(p,{type:"submit",children:"Register"}),Object(b.jsx)("span",{children:"or"}),Object(b.jsx)(p,{onClick:function(){e.onClick(),console.log(s.current.value,i.current.value)},children:"Cancel"})]}),Object(b.jsx)("h4",{children:a})]})},U=c(24),q=c.n(U),V=function(e){return Object(b.jsx)(x,{className:q.a.card,children:Object(b.jsx)(p,{className:q.a.button,onClick:e.onClick,children:"Add New Product"})})},z=c(15),J=c.n(z),Y=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:J.a.backdrop,onClick:e.onClick}),Object(b.jsxs)("div",{className:J.a.modal,children:[Object(b.jsx)("header",{className:J.a.top,children:e.title}),Object(b.jsx)("main",{className:J.a.center,children:Object(b.jsx)("div",{children:e.message})}),Object(b.jsx)("footer",{className:J.a.bottom,children:Object(b.jsx)(p,{onClick:e.onClick,children:"Okay"})})]})]})},Z=c(25),Q=c.n(Z),W=function(e){var t=Object(o.useState)(""),c=Object(j.a)(t,2),a=c[0],n=c[1],r=Object(o.useState)(""),s=Object(j.a)(r,2),i=s[0],l=s[1],d=Object(o.useState)(""),u=Object(j.a)(d,2),m=u[0],O=u[1],h=Object(o.useState)(""),_=Object(j.a)(h,2),f=_[0],v=_[1],g=Object(o.useState)(),N=Object(j.a)(g,2),y=N[0],C=N[1];return Object(b.jsxs)("div",{children:[y&&Object(b.jsx)(Y,{title:y.title,message:y.message,onClick:function(){C(null)}}),Object(b.jsx)(x,{className:Q.a.card,children:Object(b.jsxs)("form",{className:Q.a.form,onSubmit:function(t){if(t.preventDefault(),0!==a.trim().length)if(0!==i.trim().length)if(0!==m.trim().length)if(0!==f.trim().length){var c={prodType:a,prodName:i,prodPrice:m,prodDescription:f};fetch("https://react-project-1-eaa82-default-rtdb.firebaseio.com/products.json",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}),e.onClick(),n(""),l(""),O(""),v("")}else C({title:"Product description is empty",message:"Type product description"});else C({title:"Product price is empty",message:"Type product price"});else C({title:"Product Name is empty",message:"Type product name"});else C({title:"Product Type is empty",message:"Select product type"})},children:[Object(b.jsx)("h3",{children:"Add new product"}),Object(b.jsx)("label",{htmlFor:"prodType",children:"Type:"}),Object(b.jsxs)("select",{id:"prodType",type:"text",value:a,onChange:function(e){n(e.target.value)},children:[Object(b.jsx)("option",{value:"empty",children:"-"}),Object(b.jsx)("option",{value:"Game",children:"Game"}),Object(b.jsx)("option",{value:"Movie",children:"Movie"}),Object(b.jsx)("option",{value:"Music",children:"Music"}),Object(b.jsx)("option",{value:"App",children:"App"})]}),Object(b.jsx)("label",{htmlFor:"prodName",children:"Name:"}),Object(b.jsx)("input",{id:"prodName",type:"text",value:i,onChange:function(e){l(e.target.value)}}),Object(b.jsx)("label",{htmlFor:"prodPrice",children:"Price:"}),Object(b.jsx)("input",{id:"prodPrice",type:"number",min:"0",value:m,onChange:function(e){O(e.target.value)}}),Object(b.jsx)("label",{htmlFor:"prodDescription",children:"Description:"}),Object(b.jsx)("textarea",{id:"prodDescription",type:"text",value:f,onChange:function(e){v(e.target.value)}}),Object(b.jsx)(p,{type:"submit",children:"Add"}),Object(b.jsx)(p,{type:"button",onClick:e.onClick,children:"Cancel"})]})})]})},K=c(32),$=c.n(K),X=function(e){return Object(b.jsx)("div",{className:"".concat($.a.card," ").concat(e.className),children:e.children})},ee=c(16),te=c.n(ee),ce=function(e){var t=Object(o.useState)(""),c=Object(j.a)(t,2),a=c[0],n=c[1],r=function(){e.searchButton(a),n("")};return Object(b.jsxs)(x,{className:te.a.card,children:[Object(b.jsxs)("div",{className:te.a.nav1,children:[Object(b.jsx)("div",{children:Object(b.jsx)(p,{onClick:r,children:"All"})}),Object(b.jsx)("div",{children:Object(b.jsx)(p,{onClick:function(){e.onClick("Game")},children:"Games"})}),Object(b.jsx)("div",{children:Object(b.jsx)(p,{onClick:function(){e.onClick("Movie")},children:"Movies"})}),Object(b.jsx)("div",{children:Object(b.jsx)(p,{onClick:function(){e.onClick("Music")},children:"Music"})}),Object(b.jsx)("div",{children:Object(b.jsx)(p,{onClick:function(){e.onClick("App")},children:"Apps"})})]}),Object(b.jsxs)("div",{className:te.a.nav2,children:[Object(b.jsx)("input",{className:te.a.input,onChange:function(e){n(e.target.value)},value:a}),Object(b.jsx)(p,{className:te.a.searchButton,onClick:r,children:"Search by name"})]})]})},ae=c(17),ne=c.n(ae),re=function(e){var t=Object(R.h)(),c=Object(o.useState)({}),a=Object(j.a)(c,2),n=a[0],r=a[1];return console.log(t.productId),Object(P.useEffect)((function(){e.products.map((function(e){return e.id===t.productId&&r({name:e.prodName,desc:e.prodDescription}),null}))}),[e.products,t.productId,r]),console.log(n),Object(b.jsx)(x,{children:Object(b.jsxs)("div",{className:ne.a.modal,children:[Object(b.jsx)("header",{className:ne.a.top,children:n.name}),Object(b.jsx)("main",{className:ne.a.center,children:Object(b.jsx)("div",{children:n.desc})}),Object(b.jsx)("footer",{className:ne.a.bottom,children:Object(b.jsx)(i.c,{className:ne.a.link,to:"/home",children:Object(b.jsx)(p,{onClick:e.onClick,children:"Okay"})})})]})})},oe={items:[],totalAmount:0,itemsInCart:0},se=function(e,t){if("ADD"===t.type)return{items:e.items.concat(t.item),totalAmount:e.totalAmount+t.item.price,itemsInCart:e.itemsInCart+1};if("REMOVE"===t.type){var c=e.items.findIndex((function(e){return e.key===t.id})),a=e.items[c];return{items:e.items.filter((function(e){return e.key!==t.id})),totalAmount:e.totalAmount-a.price,itemsInCart:e.itemsInCart-1}}return oe},ie=function(e){var t=Object(o.useReducer)(se,oe),c=Object(j.a)(t,2),a=c[0],n=c[1],r={items:a.items,totalAmount:a.totalAmount,itemsInCart:a.itemsInCart,addItem:function(e){n({type:"ADD",item:e})},removeItem:function(e){n({type:"REMOVE",id:e})}};return Object(b.jsx)(v.Provider,{value:r,children:e.children})},le=c(11),de=c.n(le),je=function(e){var t=Object(o.useContext)(v),c="".concat(de.a.type,"\n                      ").concat("Game"===e.prodType?de.a.Game:"","\n                      ").concat("Movie"===e.prodType?de.a.Movie:"","\n                      ").concat("Music"===e.prodType?de.a.Music:"","\n                      ").concat("App"===e.prodType?de.a.App:""," ");return Object(b.jsxs)(x,{className:de.a.card,children:[Object(b.jsx)("div",{className:c}),Object(b.jsx)("div",{className:de.a.name,children:Object(b.jsx)(i.c,{className:de.a.link,to:"/home/".concat(e.id),children:e.prodName})}),Object(b.jsx)("div",{className:de.a.price,children:"".concat(e.prodPrice,"$")}),Object(b.jsx)("div",{className:de.a.addButton,children:Object(b.jsx)(p,{className:de.a.button,onClick:function(){t.addItem({key:Math.random(),id:e.id,name:e.prodName,type:e.prodType,price:+e.prodPrice})},children:"Add"})})]},e.id)},ue=function(e){var t=Object(o.useState)([]),c=Object(j.a)(t,2),a=c[0],n=c[1],r=e.dataBase;return Object(P.useEffect)((function(){console.log(r);var t=r.filter((function(t){return"type"===e.sortingBy?t.prodType===e.searchBy:"name"===e.sortingBy?t.prodName.toLowerCase().includes(e.searchBy.toLowerCase()):console.log("eroare la sortare",e.searchBy)}));n(t),console.log(t)}),[r,e.searchBy,e.sortingBy]),Object(b.jsx)(x,{children:a.map((function(e){return Object(b.jsx)("div",{children:Object(b.jsx)(je,{id:e.id,prodType:e.prodType,prodName:e.prodName,prodPrice:e.prodPrice})},Math.random())}))})},me=c(34),be=c(33),pe=c.n(be),Oe=function(e){var t=Object(o.useState)(!0),c=Object(j.a)(t,2),a=c[0],n=c[1],r=Object(o.useState)([]),s=Object(j.a)(r,2),i=s[0],l=s[1];return Object(o.useEffect)((function(){n(!0),fetch("https://react-project-1-eaa82-default-rtdb.firebaseio.com/products.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var c in e){var a=Object(me.a)({id:c},e[c]);t.push(a)}n(!1),l(t)}))}),[]),a?Object(b.jsx)("section",{children:Object(b.jsx)("div",{className:pe.a.loading,children:"Loading db..."})}):(e.dataBase(i),console.log(i,a),null)};var he=function(){var e=Object(o.useState)("name"),t=Object(j.a)(e,2),c=t[0],a=t[1],n=Object(o.useState)(""),r=Object(j.a)(n,2),s=r[0],i=r[1],l=Object(o.useState)("open"),u=Object(j.a)(l,2),m=u[0],p=u[1],O=Object(o.useState)([]),h=Object(j.a)(O,2),x=h[0],_=h[1],f=Object(o.useState)(!1),v=Object(j.a)(f,2),g=v[0],y=v[1],C=Object(o.useState)(!0),I=Object(j.a)(C,2),S=I[0],P=I[1],B=function(){p("open"===m?"close":"open"),console.log(m)},M=function(){console.log(g),y(!g)},D=function(e){_(e),setTimeout((function(){P(!1)}),1e3)},w=Object(o.useContext)(T),E=w.isLoggedIn;return console.log("loggedin:",E,"admin:",w.admin,"dbReload",S),Object(b.jsx)(ie,{children:Object(b.jsxs)(R.d,{children:[Object(b.jsx)(R.b,{path:"/",exact:!0,children:Object(b.jsx)(R.a,{to:"/login"})}),Object(b.jsx)(R.b,{path:"/login",children:Object(b.jsxs)(X,{children:[Object(b.jsx)(A,{}),!E&&Object(b.jsxs)(L,{className:d.a.main,children:[!g&&Object(b.jsx)(F,{onClick:M,dbReload:function(){console.log("login Handler"),P(!1)}}),g&&Object(b.jsx)(G,{onClick:M}),Object(b.jsx)(Oe,{dataBase:D})]}),Object(b.jsx)(k,{})]})}),Object(b.jsx)(R.b,{path:"/home",exact:!0,children:Object(b.jsxs)(X,{children:[Object(b.jsx)(A,{}),E&&Object(b.jsxs)(L,{children:["open"===m&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(ce,{onClick:function(e){a("type"),i(e)},searchButton:function(e){a("name"),i(e)}}),!0===w.admin&&Object(b.jsx)(V,{onClick:B}),S&&Object(b.jsx)(Oe,{dataBase:D}),Object(b.jsx)(ue,{sortingBy:c,searchBy:s,dataBase:x})]}),"close"===m&&Object(b.jsx)(W,{onClick:B})]}),Object(b.jsx)(k,{})]})}),Object(b.jsx)(R.b,{path:"/cart",children:Object(b.jsxs)(X,{children:[Object(b.jsx)(A,{}),E&&Object(b.jsx)(L,{children:Object(b.jsx)(N,{products:x})}),Object(b.jsx)(k,{})]})}),Object(b.jsx)(R.b,{path:"/home/:productId",children:Object(b.jsxs)(X,{children:[Object(b.jsx)(A,{}),Object(b.jsx)(L,{children:Object(b.jsx)(re,{products:x})}),Object(b.jsx)(k,{})]})}),Object(b.jsx)(R.b,{path:"*",exact:!0,children:Object(b.jsx)(R.a,{to:"/"})})]})})};r.a.render(Object(b.jsx)(M,{children:Object(b.jsx)(i.a,{children:Object(b.jsx)(he,{})})}),document.getElementById("root"))}],[[48,1,2]]]);
//# sourceMappingURL=main.0274599f.chunk.js.map