(this["webpackJsonpreact-payments"]=this["webpackJsonpreact-payments"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r,a,c=n(2),s=n.n(c),i=n(10),o=n.n(i),l=n(11),u=n(3),b=n(5),j=n(1),d="cardInfos",m="cardList",x="cardAdd",O="cardAddCompletion",h={VALIDATION:"validation"},f={BACKGROUND_COLOR:"backgroundColor",BANK:"bank",CARD_NUMBERS:"cardNumbers",EXPIRATION_MONTH:"expirationMonth",EXPIRATION_YEAR:"expirationYear",OWNER_NAME:"ownerName",SECURITY_CODE:"securityCode",CARD_PASSWORDS:"cardPasswords",NICKNAME:"nickname"},N={MIN:4,MAX:4},g={MIN:2,MAX:2},p={MIN:0,MAX:30,CARD_DISPLAY:10},C={MIN:3,MAX:4},w={MIN:1,MAX:1},v={MIN:0,MAX:10},y={OWNER_NAME:new RegExp("^[\uac00-\ud7a3|A-Z|\\s]{".concat(p.MIN,",").concat(p.MAX,"}$")),NICKNAME:new RegExp("^[\uac00-\ud7a3|A-Z|\\s]{".concat(v.MIN,",").concat(v.MAX,"}$"))},A=function(e,t){if(!Object.values(h).includes(t))throw new Error("Invalid error type: ",t);var n=new Error(e);throw n.type=t,n},M=(r={},Object(j.a)(r,f.CARD_NUMBERS,(function(e){if(!Array.isArray(e))throw new TypeError("cardNumbers should be an array");return e.every((function(e){return N.MIN<=e.length&&e.length<=N.MAX}))})),Object(j.a)(r,f.EXPIRATION_MONTH,(function(e){if("string"!==typeof e)throw new TypeError("month should be a string");return 1<=Number(e)&&Number(e)<=12})),Object(j.a)(r,f.EXPIRATION_YEAR,(function(e){if("string"!==typeof e)throw new TypeError("year should be a string");var t=(new Date).getFullYear()-2e3;return Math.abs(Number(e)-t)<=5})),Object(j.a)(r,f.OWNER_NAME,(function(e){if("string"!==typeof e)throw new TypeError("ownerName should be a string");return y.OWNER_NAME.test(e)})),Object(j.a)(r,f.SECURITY_CODE,(function(e){if("string"!==typeof e)throw new TypeError("securityCode should be a string");return C.MIN<=e.length&&e.length<=C.MAX})),Object(j.a)(r,f.CARD_PASSWORDS,(function(e){if(!Array.isArray(e))throw new TypeError("cardPasswords should be an array");return e.every((function(e){return w.MIN<=e.length&&e.length<=w.MAX}))})),Object(j.a)(r,f.NICKNAME,(function(e){if("string"!==typeof e)throw new TypeError("nickname should be a string");return y.NICKNAME.test(e)})),r),I=function(e,t){try{if(!Object.values(f).includes(e))throw new TypeError("Invalid validation name");M[e](t)||A(e,h.VALIDATION)}catch(n){throw n}},k=function(){var e=0;return function(){return"".concat(Math.round(1e9*Math.random()),"-").concat(e++)}}(),E=(a={},Object(j.a)(a,f.OWNER_NAME,(function(e){return e.length>p.MAX&&(e=e.slice(p.MIN,p.MAX)),e.toUpperCase()})),Object(j.a)(a,f.NICKNAME,(function(e){return e.slice(0,v.MAX)})),a),R=function(e,t){try{if(!Object.values(f).includes(e))throw new TypeError("Invalid validation name");if("string"!==typeof t)throw new TypeError("".concat(e," should be a string"));return E[e]?E[e](t):t.replace(/[\D]/g,"")}catch(n){throw n}};var D,T,S=n(4),_=n.n(S),B=n(0),X=function(e){var t=e.backgroundColor,n=e.scale,r=e.isRegistered,a=e.children,c=e.onClick;return Object(B.jsxs)("div",{className:_()("rounded-md shadow-md p-3 relative transform w-52 h-32",t||"bg-custom-gray-200",n,"function"===typeof c&&"cursor-pointer"),onClick:c,children:[!r&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full bg-gray-600 opacity-50"}),Object(B.jsx)("span",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-800",children:"+"})]}),a]})},Y=function(e){var t;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("div",{className:"text-xs text-custom-darkgray mb-4 h-4",children:e.bank}),Object(B.jsx)("div",{className:"w-10 h-6.5 bg-custom-gold rounded mb-2"}),Object(B.jsxs)("div",{className:"flex flex-col text-custom-gray-300 items-center",children:[Object(B.jsx)("div",{className:"flex space-x-2.5 text-sm h-5",children:null===(t=e.numbers)||void 0===t?void 0:t.map((function(e){return Object(B.jsx)("span",{children:e},k())}))}),Object(B.jsxs)("div",{className:"text-sm w-11/12 flex justify-between",children:[Object(B.jsx)("span",{children:e.ownerName||"NAME"}),Object(B.jsx)("span",{children:"/"===e.expirationDate?"MM/YY":e.expirationDate})]})]})]})},L=function(e){var t=e.backgroundColor,n=e.scale,r=e.isRegistered,a=e.bank,c=e.numbers,s=e.ownerName,i=e.expirationDate,o={backgroundColor:t,scale:n,isRegistered:r,onClick:e.onClick},l={bank:a,numbers:c,ownerName:s,expirationDate:i};return Object(B.jsx)(X,Object(u.a)(Object(u.a)({},o),{},{children:Object(B.jsx)(Y,Object(u.a)({},l))}))},P=n(8),F=function(e){var t=e.name,n=e.className,r=Object(P.a)(e,["name","className"]);return Object(B.jsx)("button",Object(u.a)(Object(u.a)({className:_()("font-bold text-sm text-right text-custom-mint",n)},r),{},{children:t}))},K=function(e){var t=e.className,n=Object(P.a)(e,["className"]);return Object(B.jsx)("input",Object(u.a)({className:_()("rounded-md bg-custom-gray-100 text-custom-mint h-11 placeholder-center p-3 text-lg font-medium",t)},n))},U=function(e){return Object(B.jsx)("span",{className:"text-custom-gray-300 font-medium text-xs",children:e.innerText})},V=[{id:k(),type:"text"},{id:k(),type:"text"},{id:k(),type:"password"},{id:k(),type:"password"}],W=function(e){var t=e.cardNumbers,n=e.isValid,r=e.onChange;return Object(B.jsxs)("div",{className:_()("flex flex-col w-full mb-2",!n&&""),children:[Object(B.jsx)("div",{className:"mb-2 h-6",children:Object(B.jsx)(U,{innerText:"\uce74\ub4dc \ubc88\ud638"})}),Object(B.jsx)("label",{className:"sr-only",htmlFor:"card-number-input",children:"\uce74\ub4dc \ubc88\ud638 \uc785\ub825\ub780"}),Object(B.jsx)("div",{className:_()("bg-custom-gray-100 rounded-md flex justify-around items-center text-custom-mint text-lg font-medium",!n&&"ring-2 ring-rose-400"),children:V.map((function(e,n){var a=e.id,c=e.type;return Object(B.jsxs)(s.a.Fragment,{children:[n>0&&"-",Object(B.jsx)("label",{htmlFor:"card-number-input-".concat(n)}),Object(B.jsx)(K,{id:"card-number-input-".concat(n),type:c,className:"w-1/5 outline-none",name:f.CARD_NUMBERS,"data-index":n,minLength:N.MIN,maxLength:N.MAX,onChange:r,value:t[n],required:!0})]},a)}))})]})},H=function(e){var t=e.expirationMonth,n=e.expirationYear,r=e.isValid,a=e.onChange;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("div",{className:"mb-2 h-6",children:Object(B.jsx)(U,{innerText:"\ub9cc\ub8cc\uc77c"})}),Object(B.jsxs)("div",{className:_()("w-1/3 bg-custom-gray-100 rounded-md flex justify-around items-center text-custom-mint text-lg font-medium",!r&&"ring-2 ring-rose-400"),children:[Object(B.jsx)("label",{className:"sr-only",htmlFor:"expiration-month-input",children:"\ub9cc\ub8cc \uc6d4 \uc785\ub825\ub780"}),Object(B.jsx)(K,{id:"expiration-month-input",type:"text",className:"w-1/2 outline-none placeholder-center",name:f.EXPIRATION_MONTH,placeholder:"MM",minLength:g.MIN,maxLength:g.MAX,value:t,onChange:a,required:!0}),"/",Object(B.jsx)("label",{className:"sr-only",htmlFor:"expiration-year-input",children:"\ub9cc\ub8cc \uc5f0\ub3c4 \uc785\ub825\ub780"}),Object(B.jsx)(K,{id:"expiration-year-input",type:"text",className:"w-1/2 outline-none",name:f.EXPIRATION_YEAR,placeholder:"YY",minLength:g.MIN,maxLength:g.MAX,value:n,onChange:a,required:!0})]})]})},G=function(e){var t=e.ownerName,n=e.isValid,r=e.onChange;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)("div",{className:"mb-2 h-6 flex justify-between items-center",children:[Object(B.jsx)(U,{innerText:"\uce74\ub4dc \uc18c\uc720\uc790 \uc774\ub984(\uc120\ud0dd)"}),Object(B.jsxs)("span",{className:"text-custom-gray-300 font-medium text-xs",children:[t.length,"/",p.MAX]})]}),Object(B.jsx)("label",{className:"sr-only",htmlFor:"owner-name-input",children:"\uce74\ub4dc \uc18c\uc720\uc790 \uc774\ub984 \uc785\ub825\ub780"}),Object(B.jsx)(K,{id:"owner-name-input",type:"text",placeholder:"\uce74\ub4dc\uc5d0 \ud45c\uc2dc\ub41c \uc774\ub984\uacfc \ub3d9\uc77c\ud558\uac8c \uc785\ub825\ud558\uc138\uc694.",name:f.OWNER_NAME,className:_()("w-full outline-none",!n&&"ring-2 ring-rose-400"),min:p.MIN,max:p.MAX,value:t,onChange:r})]})},q=function(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],r=t[1];return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)("svg",{width:"27",height:"27",className:"ml-3 cursor-pointer",viewBox:"0 0 27 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:function(){r(!n)},children:[Object(B.jsx)("circle",{cx:"13.5",cy:"13.5",r:"13",fill:"white",stroke:"#BABABA"}),Object(B.jsx)("path",{d:"M12.5547 16.8203C12.5547 15.9544 12.6621 15.2643 12.877 14.75C13.0918 14.2357 13.515 13.6725 14.1465 13.0605C14.7845 12.4421 15.1882 12.0026 15.3574 11.7422C15.6178 11.3451 15.748 10.9154 15.748 10.4531C15.748 9.84115 15.5951 9.37565 15.2891 9.05664C14.9896 8.73112 14.5469 8.56836 13.9609 8.56836C13.401 8.56836 12.9486 8.72786 12.6035 9.04688C12.265 9.35938 12.0957 9.78581 12.0957 10.3262H9.72266C9.73568 9.17383 10.1263 8.26237 10.8945 7.5918C11.6693 6.92122 12.6914 6.58594 13.9609 6.58594C15.2695 6.58594 16.2884 6.91797 17.0176 7.58203C17.7533 8.24609 18.1211 9.17383 18.1211 10.3652C18.1211 11.4264 17.6263 12.4714 16.6367 13.5L15.4355 14.6816C15.0059 15.1699 14.7845 15.8828 14.7715 16.8203H12.5547ZM12.3887 19.8574C12.3887 19.4733 12.5091 19.1641 12.75 18.9297C12.9909 18.6888 13.3164 18.5684 13.7266 18.5684C14.1432 18.5684 14.472 18.6921 14.7129 18.9395C14.9538 19.1803 15.0742 19.4863 15.0742 19.8574C15.0742 20.2155 14.957 20.515 14.7227 20.7559C14.4883 20.9967 14.1562 21.1172 13.7266 21.1172C13.2969 21.1172 12.9648 20.9967 12.7305 20.7559C12.5026 20.515 12.3887 20.2155 12.3887 19.8574Z",fill:"#969696"})]}),n&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("span",{className:"w-0 h-0 border-8 border-custom-darkgray left-arrow"}),Object(B.jsx)("span",{className:"bg-custom-darkgray rounded-lg p-1 text-custom-white text-xs",children:"\uce74\ub4dc \ub4b7\uba74 \uc11c\uba85\ub780 \ub05d\uc758 3~4\uc790\ub9ac \uc22b\uc790\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."})]})]})},J=function(e){var t=e.securityCode,n=e.isValid,r=e.onChange;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("div",{className:"mb-2 h-6",children:Object(B.jsx)(U,{innerText:"\ubcf4\uc548\ucf54\ub4dc(CVC/CVV)"})}),Object(B.jsx)("label",{className:"sr-only",htmlFor:"security-code-input",children:"\ubcf4\uc548 \ucf54\ub4dc \uc785\ub825\ub780"}),Object(B.jsxs)("div",{className:"flex items-center",children:[Object(B.jsx)(K,{type:"password",className:_()("w-20 outline-none",!n&&"ring-2 ring-rose-400"),name:f.SECURITY_CODE,minLength:C.MIN,maxLength:C.MAX,value:t,onChange:r,required:!0}),Object(B.jsx)(q,{})]})]})},Z=[{id:k()},{id:k()}],z=function(e){var t=e.cardPasswords,n=e.isValid,r=e.onChange;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("div",{className:"mb-2 h-6",children:Object(B.jsx)(U,{innerText:"\uce74\ub4dc \ube44\ubc00\ubc88\ud638"})}),Object(B.jsxs)("div",{className:"flex items-center justify-between w-48",children:[Z.map((function(e,a){var c=e.id;return Object(B.jsxs)(s.a.Fragment,{children:[Object(B.jsx)("label",{className:"sr-only",htmlFor:"card-password-input-1"}),Object(B.jsx)(K,{type:"password",className:_()("w-10 outline-none text-center",!n&&"ring-2 ring-rose-400"),"data-index":a,name:f.CARD_PASSWORDS,minLength:w.MIN,maxLength:w.MAX,value:t[a],onChange:r})]},c)})),Object(B.jsx)("div",{className:"w-10 flex justify-center",children:Object(B.jsx)("svg",{width:"5",height:"5",viewBox:"0 0 5 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(B.jsx)("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"#04C09E"})})}),Object(B.jsx)("div",{className:"w-10 flex justify-center",children:Object(B.jsx)("svg",{width:"5",height:"5",viewBox:"0 0 5 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(B.jsx)("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"#04C09E"})})})]})]})},$=function(e){var t=e.onClick;return Object(B.jsx)("div",{className:"absolute top-0 left-0 z-10 w-full h-screen bg-black bg-opacity-50",onClick:t})},Q=function(e){var t=e.backgroundColor,n=e.bank,r=e.onClick;return Object(B.jsxs)("div",{className:"w-1/4 flex flex-col items-center cursor-pointer",onClick:function(){return r(t,n)},children:[Object(B.jsx)("div",{className:_()("w-9 h-9 rounded-full mb-2.5",t)}),Object(B.jsx)("div",{className:"font-medium text-xs text-custom-gray-300",children:n})]})},ee=[{backgroundColor:"bg-custom-red",bank:"\uad6d\ubbfc"},{backgroundColor:"bg-custom-blue",bank:"\uc0bc\uc131"},{backgroundColor:"bg-custom-green",bank:"\ub18d\ud611"},{backgroundColor:"bg-custom-purple",bank:"BC"},{backgroundColor:"bg-custom-gradient-mint",bank:"\ubc30\ubbfc"},{backgroundColor:"bg-custom-pink",bank:"\uc2e0\ud55c"},{backgroundColor:"bg-custom-orange",bank:"\uc81c\uc8fc"},{backgroundColor:"bg-custom-yellow",bank:"\uce74\uce74\uc624"}],te=function(e){var t=e.onClick;return Object(B.jsx)("div",{className:"flex justify-center items-center rounded-t-md bg-custom-white w-full  h-56 absolute left-0 bottom-0 z-20",children:Object(B.jsx)("div",{className:"flex flex-wrap m-auto gap-y-6",children:ee.map((function(e){return Object(B.jsx)(Q,Object(u.a)(Object(u.a)({},e),{},{onClick:t}),k())}))})})},ne=function(e){var t=e.title,n=e.hasBackButton,r=e.onClick;return Object(B.jsx)("header",{className:"w-full mb-5",children:Object(B.jsxs)("div",{className:"w-25 flex items-center",children:[Object(B.jsx)("button",{className:_()("bg-opacity-0","mr-4",!n&&"invisible"),onClick:r,children:Object(B.jsx)("svg",{width:"17",height:"17",viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(B.jsx)("path",{d:"M8.30424 1L1.36474 8.78658L9.15132 15.7261",stroke:"#525252",strokeWidth:"1.5"})})}),Object(B.jsx)("span",{className:"font-medium text-base",children:t})]})})},re=function(e){var t,n,r,a,s=e.cardInfo,i=e.validation,o=e.addBank,l=e.onInputChange,u=e.routeToBack,j=e.routeToNext,d=Object(c.useState)(!1),m=Object(b.a)(d,2),x=m[0],O=m[1],h=function(){O(!x)};return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(ne,{title:"\uce74\ub4dc \ucd94\uac00",hasBackButton:!0,onClick:u}),Object(B.jsxs)("form",{className:"w-full h-160 flex flex-col justify-center",onSubmit:function(e){e.preventDefault(),j()},children:[Object(B.jsx)("div",{className:"w-full flex justify-center mb-4",children:Object(B.jsx)(L,{backgroundColor:s.backgroundColor,bank:s.bank,numbers:s.cardNumbers,expirationDate:s.expirationMonth+"/"+s.expirationYear,ownerName:s.ownerName.slice(0,p.CARD_DISPLAY),isRegistered:!1,onClick:h})}),Object(B.jsxs)("div",{children:[Object(B.jsx)("div",{className:"flex flex-col w-full mb-2",children:Object(B.jsx)(W,{cardNumbers:s.cardNumbers,isValid:null===(t=i.cardNumbers)||void 0===t||t,onChange:l})}),Object(B.jsx)("div",{className:"flex flex-col mb-2",children:Object(B.jsx)(H,{expirationMonth:s.expirationMonth,expirationYear:s.expirationYear,isValid:null===(n=i.expirationMonth&&i.expirationYear)||void 0===n||n,onChange:l})}),Object(B.jsx)("div",{className:"flex flex-col w-full mb-2",children:Object(B.jsx)(G,{ownerName:s.ownerName,isValid:i.ownerName,onChange:l})}),Object(B.jsx)("div",{className:"flex flex-col w-full mb-2",children:Object(B.jsx)(J,{securityCode:s.securityCode,isValid:null===(r=i.securityCode)||void 0===r||r,onChange:l})}),Object(B.jsx)("div",{className:"flex flex-col w-full",children:Object(B.jsx)(z,{cardPasswords:s.cardPasswords,isValid:null===(a=i.cardPasswords)||void 0===a||a,onChange:l})})]}),Object.values(i).every(Boolean)&&Object(B.jsx)("div",{className:"flex justify-end items-center w-full h-10 absolute bottom-5 right-5",children:Object(B.jsx)(F,{name:"\ub2e4\uc74c",type:"submit"})})]}),x&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)($,{onClick:h}),Object(B.jsx)(te,{onClick:function(e,t){o(e,t),h()}})]})]})},ae=function(e){var t=e.cardInfo,n=e.onInputChange,r=e.submitCardInfo,a=e.routeToNext;return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)("section",{className:"w-full h-160 flex flex-col justify-center",children:Object(B.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(),a()},children:[Object(B.jsxs)("div",{className:"w-full h-full flex flex-col items-center",children:[Object(B.jsx)("h1",{className:"text-2xl mb-24",children:"\uce74\ub4dc\ub4f1\ub85d\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),Object(B.jsx)(L,{scale:"scale-150",backgroundColor:t.backgroundColor,bank:t.bank,numbers:t.cardNumbers,expirationDate:t.expirationMonth+"/"+t.expirationYear,ownerName:t.ownerName.slice(0,p.CARD_DISPLAY),isRegistered:!0}),Object(B.jsx)("input",{name:f.NICKNAME,className:" text-custom-darkgray text-center font-normal text-lg border-b-2 border-custom-gray-250 focus:outline-none mt-16",min:v.MIN,max:v.MAX,value:t.nickname,onChange:n})]}),Object(B.jsx)("div",{className:"flex justify-end items-center w-full h-10 absolute bottom-5 right-5",children:Object(B.jsx)(F,{name:"\ud655\uc778"})})]})})})},ce=function(e){var t=e.cardInfos,n=e.routeToNext;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(ne,{title:"\ubcf4\uc720\uce74\ub4dc",hasBackButton:!1}),Object(B.jsxs)("section",{className:"flex flex-col h-full items-center",children:[t.map((function(e){var t=e.id,n=e.cardInfo;return Object(B.jsxs)(s.a.Fragment,{children:[Object(B.jsx)(L,{backgroundColor:n.backgroundColor,bank:n.bank,numbers:n.cardNumbers,expirationDate:n.expirationMonth+"/"+n.expirationYear,ownerName:n.ownerName.slice(0,p.CARD_DISPLAY),isRegistered:!0}),Object(B.jsx)("div",{className:"font-medium text-lg mb-3",children:n.nickname})]},t)})),Object(B.jsx)(X,{isRegistered:!1,onClick:n})]})]})},se=(D={},Object(j.a)(D,f.BACKGROUND_COLOR,""),Object(j.a)(D,f.BANK,""),Object(j.a)(D,f.CARD_NUMBERS,["","","",""]),Object(j.a)(D,f.EXPIRATION_MONTH,""),Object(j.a)(D,f.EXPIRATION_YEAR,""),Object(j.a)(D,f.OWNER_NAME,""),Object(j.a)(D,f.SECURITY_CODE,""),Object(j.a)(D,f.CARD_PASSWORDS,["",""]),Object(j.a)(D,f.NICKNAME,""),D),ie=(T={},Object(j.a)(T,f.BACKGROUND_COLOR,null),Object(j.a)(T,f.BANK,null),Object(j.a)(T,f.CARD_NUMBERS,null),Object(j.a)(T,f.EXPIRATION_MONTH,null),Object(j.a)(T,f.EXPIRATION_YEAR,null),Object(j.a)(T,f.OWNER_NAME,!0),Object(j.a)(T,f.SECURITY_CODE,null),Object(j.a)(T,f.CARD_PASSWORDS,null),Object(j.a)(T,f.NICKNAME,!0),T),oe=function(){var e,t,n=Object(c.useState)(m),r=Object(b.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(null!==(t=d,e=JSON.parse(localStorage.getItem(t)))&&void 0!==e?e:[]),o=Object(b.a)(i,2),h=o[0],N=o[1],g=Object(c.useState)(se),p=Object(b.a)(g,2),C=p[0],w=p[1],v=Object(c.useState)(ie),y=Object(b.a)(v,2),A=y[0],M=y[1],E=function(e){try{var t=e.target,n=t.name,r=t.value,a=t.dataset,c=Number(a.index),s=R(n,r),i=Number.isNaN(c)?s:C[n].map((function(e,t){return t===c?s:e}));w(Object(u.a)(Object(u.a)({},C),{},Object(j.a)({},n,i))),I(n,i),M(Object(u.a)(Object(u.a)({},A),{},Object(j.a)({},n,!0)))}catch(o){if("validation"===o.type)return void M(Object(u.a)(Object(u.a)({},A),{},Object(j.a)({},o.message,!1)));console.error(o.message)}};return Object(B.jsxs)("div",{className:"relative max-w-sm h-full p-5 mx-auto flex flex-col",children:[a===x&&Object(B.jsx)(re,{cardInfo:C,validation:A,addBank:function(e,t){var n,r;w(Object(u.a)(Object(u.a)({},C),{},(n={},Object(j.a)(n,f.BACKGROUND_COLOR,e),Object(j.a)(n,f.BANK,t),n))),M(Object(u.a)(Object(u.a)({},A),{},(r={},Object(j.a)(r,f.BACKGROUND_COLOR,!0),Object(j.a)(r,f.BANK,!0),r)))},onInputChange:E,routeToBack:function(){return s(m)},routeToNext:function(){return s(O)}}),a===O&&Object(B.jsx)(ae,{cardInfo:C,onInputChange:E,submitCardInfo:function(){var e=[].concat(Object(l.a)(h),[{id:k(),cardInfo:C}]);!function(e,t){localStorage.setItem(e,JSON.stringify(t))}(d,e),N(e),w(se)},routeToNext:function(){return s(m)}}),a===m&&Object(B.jsx)(ce,{cardInfos:h,routeToNext:function(){return s(x)}})]})};n(17);o.a.render(Object(B.jsx)(s.a.StrictMode,{children:Object(B.jsx)(oe,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.fba1796a.chunk.js.map