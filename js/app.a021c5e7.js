(function(t){function e(e){for(var s,o,i=e[0],c=e[1],l=e[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},a={app:0},r=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/assignment1/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"05d7":function(t,e,n){"use strict";n("14aa")},"14aa":function(t,e,n){},"50bc":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var s=n("2909"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("159b"),n("2b0e")),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Table",{attrs:{endpoint:this.tableUrl}})],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("TableSettings",{staticClass:"mb-3",attrs:{"search-is-on":this.searchIsOn,"sort-is-on":this.sortIsOn,"pagination-is-on":this.paginationIsOn},on:{sortToggled:t.toggleSort,paginToggled:t.togglePagin,searchToggled:t.toggleSearch}}),n("SearchInput",{directives:[{name:"show",rawName:"v-show",value:this.searchIsOn,expression:"this.searchIsOn"}],on:{searchTable:function(e){return t.filterUsers(e)}}}),t.isUsersListNotEmpty?n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col col-md-10"},[n("table",{staticClass:"table"},[n("thead",[n("tr",{on:{click:t.sortColumn}},[n("th",{attrs:{scope:"col"}},[t._v("#")]),n("th",{attrs:{scope:"col"}},[t._v(" Name "),n("font-awesome-icon",{directives:[{name:"show",rawName:"v-show",value:t.sortIsOn,expression:"sortIsOn"}],attrs:{icon:["fas","angle-down"]}})],1),n("th",{attrs:{scope:"col"}},[t._v(" Email "),n("font-awesome-icon",{directives:[{name:"show",rawName:"v-show",value:t.sortIsOn,expression:"sortIsOn"}],attrs:{icon:["fas","angle-down"]}})],1),n("th",{attrs:{scope:"col"}},[t._v(" Company name "),n("font-awesome-icon",{directives:[{name:"show",rawName:"v-show",value:t.sortIsOn,expression:"sortIsOn"}],attrs:{icon:["fas","angle-down"]}})],1),n("th",{attrs:{scope:"col"}},[t._v(" City "),n("font-awesome-icon",{directives:[{name:"show",rawName:"v-show",value:t.sortIsOn,expression:"sortIsOn"}],attrs:{icon:["fas","angle-down"]}})],1),n("th",{attrs:{scope:"col"}},[t._v(" Website "),n("font-awesome-icon",{directives:[{name:"show",rawName:"v-show",value:t.sortIsOn,expression:"sortIsOn"}],attrs:{icon:["fas","angle-down"]}})],1)])]),t._l(t.usersList,(function(e){return n("tbody",{key:e.id},[n("tr",[n("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),n("td",[t._v(t._s(e.name))]),n("td",[n("a",{attrs:{href:"mailto:"+e.email}},[t._v(t._s(e.email))])]),n("td",[t._v(t._s(e.company.name))]),n("td",[t._v(t._s(e.address.city))]),n("td",[t._v(t._s(e.website))])])])}))],2),n("Paginator",{directives:[{name:"show",rawName:"v-show",value:t.paginationIsOn,expression:"paginationIsOn"}],attrs:{totalPages:t.totalPageAmount},on:{changePage:function(e){return t.getUsers(t.endpoint,e)}}})],1)]):t._e()],1)},c=[],l=n("1da1"),u=(n("96cf"),n("841c"),n("ac1f"),n("99af"),n("4de4"),n("caad"),n("2532"),n("d3b7"),n("25f0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Basic example"}},[n("button",{class:["btn",t.sortIsOn?"btn-success":"btn-secondary"],attrs:{type:"button"},on:{click:this.toggleSorting}},[t._v(" sorting ")]),n("button",{class:["btn",t.searchIsOn?"btn-success":"btn-secondary"],attrs:{type:"button"},on:{click:this.toggleSearch}},[t._v(" search ")]),n("button",{class:["btn",t.paginationIsOn?"btn-success":"btn-secondary"],attrs:{type:"button"},on:{click:this.togglePagination}},[t._v(" pagination ")])])}),p=[],d={name:"TableSettings",props:{searchIsOn:{type:Boolean,required:!0},sortIsOn:{type:Boolean,required:!0},paginationIsOn:{type:Boolean,required:!0}},methods:{toggleSorting:function(){this.$emit("sortToggled")},toggleSearch:function(){this.$emit("searchToggled")},togglePagination:function(){this.$emit("paginToggled")}}},h=d,g=n("2877"),f=Object(g["a"])(h,u,p,!1,null,"dcc10f34",null),m=f.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group mr-2 ml-2"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col offset-md-2 col-md-6"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchPhrase,expression:"searchPhrase"}],staticClass:"form-control",attrs:{type:"text",id:"searchField","aria-describedby":"searchHelp",placeholder:"Enter search phrase"},domProps:{value:t.searchPhrase},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchTable(e)},input:function(e){e.target.composing||(t.searchPhrase=e.target.value)}}})]),n("div",{staticClass:"col col-md-2"},[n("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"},on:{click:t.searchTable}},[t._v(" Search ")])])]),n("small",{staticClass:"form-text text-muted",attrs:{id:"searchHelp"}},[t._v("Enter phrase and hit enter to search")])])},b=[],w={name:"SearchInput",data:function(){return{searchPhrase:""}},methods:{searchTable:function(){this.$emit("searchTable",this.searchPhrase)}}},O=w,y=(n("635d"),Object(g["a"])(O,v,b,!1,null,null,null)),_=y.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{attrs:{"aria-label":"page navigation"}},[n("ul",{staticClass:"pagination justify-content-center",on:{click:t.moveToPage}},t._l(t.totalPages,(function(e){return n("li",{key:e,staticClass:"page-item page-link",attrs:{"data-page":e}},[t._v(" "+t._s(e)+" ")])})),0)])},I=[],P=(n("a9e3"),{name:"Paginator",props:{totalPages:{type:Number,required:!0}},methods:{moveToPage:function(t){var e,n,s,a;null!==(e=t.target)&&void 0!==e&&null!==(n=e.dataset)&&void 0!==n&&n.page&&this.$emit("changePage",null===(s=t.target)||void 0===s||null===(a=s.dataset)||void 0===a?void 0:a.page)}}}),S=P,k=(n("05d7"),Object(g["a"])(S,x,I,!1,null,"c3dedc02",null)),j=k.exports,C={name:"Table",components:{TableSettings:m,SearchInput:_,Paginator:j},data:function(){return{searchIsOn:this.search,sortIsOn:this.sorting,paginationIsOn:this.pagination,usersList:[],defaultPageSize:3,totalPageAmount:0}},props:{endpoint:{type:String,required:!0},search:{type:Boolean,default:!1},pagination:{type:Boolean,default:!1},sorting:{type:Boolean,default:!1}},mounted:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getUsers(t.endpoint);case 2:t.usersList=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{getUsers:function(t,e){var n=this;return Object(l["a"])(regeneratorRuntime.mark((function s(){var a,r,o,i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return a=t,e&&n.paginationIsOn&&(r=e*n.defaultPageSize,a="".concat(a,"/?_start=").concat(r-n.defaultPageSize,"&_end=").concat(r)),s.prev=2,s.next=5,n.axios.get(a);case 5:return i=s.sent,console.log(i),null!==i&&void 0!==i&&null!==(o=i.headers)&&void 0!==o&&o["x-total-count"]&&(n.totalPageAmount=parseInt(i.headers["x-total-count"]/n.defaultPageSize)),s.abrupt("return",i.data);case 11:s.prev=11,s.t0=s["catch"](2),console.log(s.t0);case 14:case"end":return s.stop()}}),s,null,[[2,11]])})))()},toggleSort:function(){this.sortIsOn=!this.sortIsOn},toggleSearch:function(){this.searchIsOn=!this.searchIsOn},togglePagin:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.paginationIsOn=!t.paginationIsOn,e.next=3,t.getUsers(t.endpoint,1);case 3:t.usersList=e.sent;case 4:case"end":return e.stop()}}),e)})))()},sortColumn:function(t){this.sortIsOn&&console.log(t.target)},filterUsers:function(t){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t){n.next=7;break}return n.next=3,e.getUsers(e.endpoint);case 3:e.usersList=n.sent,e.usersList=e.usersList.filter((function(e){for(var n in e)if(e[n].toString().toLowerCase().includes(t.toLowerCase()))return!0;return!1})),n.next=10;break;case 7:return n.next=9,e.getUsers(e.endpoint);case 9:e.usersList=n.sent;case 10:case"end":return n.stop()}}),n)})))()}},computed:{isUsersListNotEmpty:function(){var t;return null===(t=this.usersList)||void 0===t?void 0:t.length}}},T=C,L=Object(g["a"])(T,i,c,!1,null,"05978772",null),E=L.exports,N={name:"App",components:{Table:E},data:function(){return{tableUrl:"https://jsonplaceholder.typicode.com/users"}}},U=N,$=(n("034f"),Object(g["a"])(U,r,o,!1,null,null,null)),R=$.exports,B=(n("4989"),n("ab8b"),n("bc3a")),q=n.n(B),z=n("2106"),A=n.n(z),M=n("ecee"),H=n("c074"),J=n("ad3d");a["a"].config.productionTip=!1,M["c"].add(H["a"],H["b"]),a["a"].component("font-awesome-icon",J["a"]),[[A.a,q.a]].forEach((function(t){return a["a"].use.apply(a["a"],Object(s["a"])(t))})),new a["a"]({render:function(t){return t(R)}}).$mount("#app")},"635d":function(t,e,n){"use strict";n("50bc")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.a021c5e7.js.map