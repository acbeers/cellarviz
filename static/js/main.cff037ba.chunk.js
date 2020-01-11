(this.webpackJsonpcellarviz=this.webpackJsonpcellarviz||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(3),o=n.n(r),c=(n(12),n(1)),i=n(6),u=(n(13),[[{x:50,y:35},{x:35,y:20},{x:65,y:20}],[{x:80,y:65},{x:65,y:50},{x:80,y:35}],[{x:35,y:90},{x:65,y:90},{x:50,y:75}],[{x:20,y:65},{x:35,y:50},{x:20,y:35}]]),s=function(e){var t=e.bottles,n=e.onHover,a=e.onNoHover,r=e.highlight,o=[[],[],[],[]];t.forEach((function(e){o[e.quad-1].push(e)}));var c=[];return o.forEach((function(e,t){var o=e.map((function(e,o){var c=u[t][o],i="translate(".concat(c.x,",").concat(c.y,")"),s="";return r.length>0&&(s=-1===r.indexOf(e.bottle.iWine)?"nohighlight":"highlight"),l.a.createElement("circle",{className:s,key:t+"-"+o,r:"8",transform:i,onMouseEnter:function(){n(e.bottle)},onMouseLeave:function(){a()}})}));c.splice.apply(c,[c.length,0].concat(Object(i.a)(o)))})),l.a.createElement("div",{className:"CellarBoxContainer"},l.a.createElement("div",{className:"CellarBox"},l.a.createElement("svg",{width:"100",height:"100"},l.a.createElement("line",{x1:"0",y1:"0",x2:"100",y2:"100"}),l.a.createElement("line",{x1:"100",y1:"0",x2:"0",y2:"100"}),c)))},m=function(e){return l.a.createElement("div",{className:"Placeholder"})},d=n(5),h=(n(14),n(4)),v=n.n(h),b=[[null,null,34,35,36,{label:"Aging wine"}],[null,null,1,6,11,{label:"Special"}],[null,null,2,7,12,{label:"World"}],[null,null,3,8,13,{label:"France"}],[null,null,4,9,14,{label:"Italy"}],[null,null,5,10,15,{label:"US-CA"}],[null,null,null,24,29,{label:"US-CA"}],[null,null,20,25,30,{label:"US-CA"}],[null,17,21,26,31,{label:"US-Other"}],[null,18,22,27,32,{label:"US-Other"}],[16,19,23,28,33,{label:"White & Sweet"}]],f=function(e){var t=e.user,n=e.pass,r=e.onHover,o=e.onNoHover,i=Object(a.useState)([]),u=Object(c.a)(i,2),h=u[0],f=u[1],E=Object(a.useState)(null),p=Object(c.a)(E,2),y=p[0],g=p[1],w=Object(a.useState)([]),x=Object(c.a)(w,2),k=x[0],O=x[1];Object(a.useEffect)((function(){var e="https://www.cellartracker.com/xlquery.asp?table=Inventory&User="+t+"&Password="+n+"&Format=csv";Object(d.a)(e).then((function(e){f(e),g(new v.a(e,{id:"iWine",shouldSort:!0,threshold:.3,location:0,distance:100,maxPatternLength:32,minMatchCharLength:1,keys:["Wine","Varietal","Bin","Type","Color","Category","Producer"]}))})).catch((function(e){console.log("Some error on fetching"),console.log(e)}))}),[t,n]);var j=Array.from(Array(40)).map((function(){return[]}));h.forEach((function(e){var t=e.Bin.split("-");if(2===t.length){var n={box:t[0],quad:t[1],bottle:e};j[t[0]].push(n)}else console.error("Unknown bin: ".concat(e.Bin)),console.error(e)}));var S=b.map((function(e,t){var n=e.map((function(e,t){return null==e?l.a.createElement(m,{key:t}):"object"===typeof e?l.a.createElement("div",{key:t,className:"Label"},e.label):l.a.createElement(s,{key:t,bottles:j[e],onHover:r,onNoHover:o,highlight:k})}));return l.a.createElement("div",{key:t,className:"CellarColumn"},n)}));return l.a.createElement("div",null,l.a.createElement("div",{id:"searchbox"},l.a.createElement("label",{htmlFor:"search"},"Search: "),l.a.createElement("input",{type:"text",id:"search",width:"40",onChange:function(e){var t=y.search(e.target.value);O(t)}})),l.a.createElement("div",null,S),";")},E=function(e){var t=e.bottle;if(t){var n="https://www.cellartracker.com/inmycellar.asp?iWine="+t.iWine;return l.a.createElement("div",{id:"tooltip"},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{id:"name"},t.Vintage+" "+t.Wine)),l.a.createElement("tr",null,l.a.createElement("td",{id:"varietal"},t.Varietal)),l.a.createElement("tr",null,l.a.createElement("td",{id:"bin"},t.Bin)),l.a.createElement("tr",null,l.a.createElement("td",{id:"link"},l.a.createElement("a",{href:n},"link"))))))}return l.a.createElement("div",{id:"tooltip"})};n(15);function p(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),a=0;a<n.length;a++){for(var l=n[a];" "===l.charAt(0);)l=l.substring(1);if(0===l.indexOf(t))return l.substring(t.length,l.length)}return""}var y=function(e){var t=Object(a.useState)(p("username")),n=Object(c.a)(t,2),r=n[0],o=n[1],i=Object(a.useState)(p("password")),u=Object(c.a)(i,2),s=u[0],m=u[1],d=Object(a.useState)(null),h=Object(c.a)(d,2),v=h[0],b=h[1];return l.a.createElement("div",null,l.a.createElement("div",{id:"connection"},l.a.createElement("form",null,l.a.createElement("label",{htmlFor:"username"},"User: "),l.a.createElement("input",{id:"username",name:"username",defaultValue:r,type:"text",width:"16"}),l.a.createElement("label",{htmlFor:"password"},"Password: "),l.a.createElement("input",{id:"password",name:"password",type:"password",defaultValue:s,width:"24"}),l.a.createElement("input",{onClick:function(){var e=document.getElementById("username").value,t=document.getElementById("password").value;o(e),m(t),document.cookie="username="+e+";",document.cookie="password="+t+";"},type:"button",value:"Reconnect"})),l.a.createElement("div",{id:"error"})),l.a.createElement(f,{user:r,pass:s,onHover:function(e){b(e)},onNoHover:function(){b(null)}}),l.a.createElement(E,{bottle:v}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[7,1,2]]]);
//# sourceMappingURL=main.cff037ba.chunk.js.map