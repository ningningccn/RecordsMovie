(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-284299ce"],{"04d1":function(t,e,n){var r=n("342f"),c=r.match(/firefox\/(\d+)/i);t.exports=!!c&&+c[1]},"0b42":function(t,e,n){var r=n("da84"),c=n("e8b5"),o=n("68ee"),i=n("861d"),a=n("b622"),s=a("species"),u=r.Array;t.exports=function(t){var e;return c(t)&&(e=t.constructor,o(e)&&(e===u||c(e.prototype))?e=void 0:i(e)&&(e=e[s],null===e&&(e=void 0))),void 0===e?u:e}},"1dde":function(t,e,n){var r=n("d039"),c=n("b622"),o=n("2d00"),i=c("species");t.exports=function(t){return o>=51||!r((function(){var e=[],n=e.constructor={};return n[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"4dae":function(t,e,n){var r=n("da84"),c=n("23cb"),o=n("07fa"),i=n("8418"),a=r.Array,s=Math.max;t.exports=function(t,e,n){for(var r=o(t),u=c(e,r),l=c(void 0===n?r:n,r),f=a(s(l-u,0)),b=0;u<l;u++,b++)i(f,b,t[u]);return f.length=b,f}},"4de4":function(t,e,n){"use strict";var r=n("23e7"),c=n("b727").filter,o=n("1dde"),i=o("filter");r({target:"Array",proto:!0,forced:!i},{filter:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},"4e82":function(t,e,n){"use strict";var r=n("23e7"),c=n("e330"),o=n("59ed"),i=n("7b0b"),a=n("07fa"),s=n("577e"),u=n("d039"),l=n("addb"),f=n("a640"),b=n("04d1"),d=n("d998"),j=n("2d00"),v=n("512c"),O=[],p=c(O.sort),h=c(O.push),g=u((function(){O.sort(void 0)})),k=u((function(){O.sort(null)})),y=f("sort"),w=!u((function(){if(j)return j<70;if(!(b&&b>3)){if(d)return!0;if(v)return v<603;var t,e,n,r,c="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)O.push({k:e+r,v:n})}for(O.sort((function(t,e){return e.v-t.v})),r=0;r<O.length;r++)e=O[r].k.charAt(0),c.charAt(c.length-1)!==e&&(c+=e);return"DGBEFHACIJK"!==c}})),x=g||!k||!y||!w,m=function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:s(e)>s(n)?1:-1}};r({target:"Array",proto:!0,forced:x},{sort:function(t){void 0!==t&&o(t);var e=i(this);if(w)return void 0===t?p(e):p(e,t);var n,r,c=[],s=a(e);for(r=0;r<s;r++)r in e&&h(c,e[r]);l(c,m(t)),n=c.length,r=0;while(r<n)e[r]=c[r++];while(r<s)delete e[r++];return e}})},"4fad":function(t,e,n){var r=n("23e7"),c=n("6f53").entries;r({target:"Object",stat:!0},{entries:function(t){return c(t)}})},"512c":function(t,e,n){var r=n("342f"),c=r.match(/AppleWebKit\/(\d+)\./);t.exports=!!c&&+c[1]},"65f0":function(t,e,n){var r=n("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},"6f53":function(t,e,n){var r=n("83ab"),c=n("e330"),o=n("df75"),i=n("fc6a"),a=n("d1e7").f,s=c(a),u=c([].push),l=function(t){return function(e){var n,c=i(e),a=o(c),l=a.length,f=0,b=[];while(l>f)n=a[f++],r&&!s(c,n)||u(b,t?[n,c[n]]:c[n]);return b}};t.exports={entries:l(!0),values:l(!1)}},8418:function(t,e,n){"use strict";var r=n("a04b"),c=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var i=r(e);i in t?c.f(t,i,o(0,n)):t[i]=n}},"94a2":function(t,e,n){"use strict";n("9d7f")},"9d7f":function(t,e,n){},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){return 1},1)}))}},addb:function(t,e,n){var r=n("4dae"),c=Math.floor,o=function(t,e){var n=t.length,s=c(n/2);return n<8?i(t,e):a(t,o(r(t,0,s),e),o(r(t,s),e),e)},i=function(t,e){var n,r,c=t.length,o=1;while(o<c){r=o,n=t[o];while(r&&e(t[r-1],n)>0)t[r]=t[--r];r!==o++&&(t[r]=n)}return t},a=function(t,e,n,r){var c=e.length,o=n.length,i=0,a=0;while(i<c||a<o)t[i+a]=i<c&&a<o?r(e[i],n[a])<=0?e[i++]:n[a++]:i<c?e[i++]:n[a++];return t};t.exports=o},b727:function(t,e,n){var r=n("0366"),c=n("e330"),o=n("44ad"),i=n("7b0b"),a=n("07fa"),s=n("65f0"),u=c([].push),l=function(t){var e=1==t,n=2==t,c=3==t,l=4==t,f=6==t,b=7==t,d=5==t||f;return function(j,v,O,p){for(var h,g,k=i(j),y=o(k),w=r(v,O),x=a(y),m=0,C=p||s,S=e?C(j,x):n||b?C(j,0):void 0;x>m;m++)if((d||m in y)&&(h=y[m],g=w(h,m,k),t))if(e)S[m]=g;else if(g)switch(t){case 3:return!0;case 5:return h;case 6:return m;case 2:u(S,h)}else switch(t){case 4:return!1;case 7:u(S,h)}return f?-1:c||l?l:S}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},d998:function(t,e,n){var r=n("342f");t.exports=/MSIE|Trident/.test(r)},de99:function(t,e,n){"use strict";n.r(e);n("4e82");var r=n("7a23"),c=function(t){return Object(r["x"])("data-v-27f6bd40"),t=t(),Object(r["v"])(),t},o={class:"container p-1"},i={class:"d-flex my-4"},a={class:"card py-4",style:{"background-color":"#f1f1f1"}},s={class:"nav"},u=c((function(){return Object(r["g"])("h4",{class:"px-3"},"飾選",-1)})),l={class:"list d-flex"},f=c((function(){return Object(r["g"])("span",{class:"nav-link fw-bold"},"分類",-1)})),b={class:"container"},d={key:0,class:"row"},j=["onClick"],v=["src"],O={class:"py-2 px-3"},p={class:"d-flex justify-content-between"},h={class:"fw-bold card-ellipsis"},g={key:0},k=c((function(){return Object(r["g"])("i",{class:"bi bi-heart-fill text-danger"},null,-1)})),y=[k],w={key:1},x=c((function(){return Object(r["g"])("i",{class:"bi bi-heart text-danger"},null,-1)})),m=[x],C={class:"d-flex justify-content-between card-yearColor"},S={class:"d-flex"},V={key:0},D={class:"ps-1"},_={key:0},A={key:1},K={key:2},P={key:3},M={key:4},B={key:5},U={key:1,class:"my-5"},I=c((function(){return Object(r["g"])("i",{class:"bi bi-film no-data-pic-size"},null,-1)})),T=c((function(){return Object(r["g"])("h1",{class:"my-5"},"尚無資料",-1)})),z=[I,T];function E(t,e,n,c,k,x){var I=Object(r["B"])("Header"),T=Object(r["B"])("Footer");return Object(r["u"])(),Object(r["f"])(r["a"],null,[Object(r["j"])(I),Object(r["g"])("div",o,[Object(r["g"])("h2",i,"綜藝 ( "+Object(r["D"])(x.getUserPostData.length)+" )",1),Object(r["g"])("div",a,[Object(r["g"])("div",s,[u,Object(r["g"])("a",{href:"#",class:"mt-1 resetSort_size",onClick:e[0]||(e[0]=function(){return x.resetSort&&x.resetSort.apply(x,arguments)})},"重置飾選")]),Object(r["g"])("div",l,[f,Object(r["g"])("a",{class:Object(r["p"])(["nav-link",{button_selected:"all"==k.sort}]),href:"#",onClick:e[1]||(e[1]=Object(r["K"])((function(t){return x.selectSort("all")}),["prevent"]))},"全部",2),Object(r["g"])("a",{class:Object(r["p"])(["nav-link",{button_selected:"hk"==k.sort}]),href:"#",onClick:e[2]||(e[2]=Object(r["K"])((function(t){return x.selectSort("hk")}),["prevent"]))},"香港",2),Object(r["g"])("a",{class:Object(r["p"])(["nav-link",{button_selected:"tw"==k.sort}]),href:"#",onClick:e[3]||(e[3]=Object(r["K"])((function(t){return x.selectSort("tw")}),["prevent"]))},"台灣",2),Object(r["g"])("a",{class:Object(r["p"])(["nav-link",{button_selected:"kr"==k.sort}]),href:"#",onClick:e[4]||(e[4]=Object(r["K"])((function(t){return x.selectSort("kr")}),["prevent"]))},"韓國",2),Object(r["g"])("a",{class:Object(r["p"])(["nav-link",{button_selected:"jp"==k.sort}]),href:"#",onClick:e[5]||(e[5]=Object(r["K"])((function(t){return x.selectSort("jp")}),["prevent"]))},"日本",2),Object(r["g"])("a",{class:Object(r["p"])(["nav-link",{button_selected:"cn"==k.sort}]),href:"#",onClick:e[6]||(e[6]=Object(r["K"])((function(t){return x.selectSort("cn")}),["prevent"]))},"大陸",2),Object(r["g"])("a",{class:Object(r["p"])(["nav-link",{button_selected:"foreign"==k.sort}]),href:"#",onClick:e[7]||(e[7]=Object(r["K"])((function(t){return x.selectSort("foreign")}),["prevent"]))},"外國",2)])])]),Object(r["g"])("div",b,[x.getUserPostData.length>0?(Object(r["u"])(),Object(r["f"])("div",d,[(Object(r["u"])(!0),Object(r["f"])(r["a"],null,Object(r["A"])(x.getUserPostData,(function(t,e){return Object(r["u"])(),Object(r["f"])("div",{class:"col-6 col-md-4 col-lg-3 col-xl-2 px-1 my-1 my-sm-2",key:e},[Object(r["g"])("div",{class:Object(r["p"])(["card card-shadow",{bb_red:0==t[1].watched,bb_green:1==t[1].watched}]),onClick:Object(r["K"])((function(e){return x.pushRouter(t[0])}),["prevent"])},[Object(r["g"])("img",{src:"".concat(t[1].url),alt:"",class:"img-size"},null,8,v),Object(r["g"])("div",O,[Object(r["g"])("div",p,[Object(r["g"])("div",h,Object(r["D"])(t[1].movieName),1),1==t[1].favorite?(Object(r["u"])(),Object(r["f"])("div",g,y)):Object(r["e"])("",!0),0==t[1].favorite?(Object(r["u"])(),Object(r["f"])("div",w,m)):Object(r["e"])("",!0)]),Object(r["g"])("div",C,[Object(r["g"])("div",S,["TVShow"==t[1].inputMainValue?(Object(r["u"])(),Object(r["f"])("div",V,"綜藝")):Object(r["e"])("",!0),Object(r["g"])("div",D,["tw"==t[1].inputChildValue?(Object(r["u"])(),Object(r["f"])("span",_,"台灣")):Object(r["e"])("",!0),"hk"==t[1].inputChildValue?(Object(r["u"])(),Object(r["f"])("span",A,"香港")):Object(r["e"])("",!0),"cn"==t[1].inputChildValue?(Object(r["u"])(),Object(r["f"])("span",K,"大陸")):Object(r["e"])("",!0),"kr"==t[1].inputChildValue?(Object(r["u"])(),Object(r["f"])("span",P,"韓國")):Object(r["e"])("",!0),"jp"==t[1].inputChildValue?(Object(r["u"])(),Object(r["f"])("span",M,"日本")):Object(r["e"])("",!0),"foreign"==t[1].inputChildValue?(Object(r["u"])(),Object(r["f"])("span",B,"外國")):Object(r["e"])("",!0)])]),Object(r["g"])("div",null,Object(r["D"])(t[1].year),1)])])],10,j)])})),128))])):(Object(r["u"])(),Object(r["f"])("div",U,z))]),Object(r["j"])(T,{class:"footer mt-5"})],64)}n("4de4"),n("d3b7"),n("4fad");var F=n("0418"),H=n("fd2d"),J={components:{Header:F["a"],Footer:H["a"]},data:function(){return{sort:"all",filterPostData:{}}},methods:{selectSort:function(t){this.sort=t},resetSort:function(){this.sort="all"},pushRouter:function(t){console.log(t),this.$router.push("/post_detail/".concat(t))}},watch:{sort:function(){var t=this;this.filterPostData=this.getUserPostData.filter((function(e){if("all"!=t.sort)return e[1].inputChildValue==t.sort}))}},computed:{getUserPostData:function(){var t=this,e=this.$store.getters.userPostData;return Object.entries(e).reverse().filter((function(e){return"all"!==t.sort?"TVShow"==e[1].inputMainValue&&e[1].inputChildValue==t.sort:"TVShow"==e[1].inputMainValue}))}},mounted:function(){this.$store.dispatch("getDBState")}},R=(n("94a2"),n("6b0d")),$=n.n(R);const G=$()(J,[["render",E],["__scopeId","data-v-27f6bd40"]]);e["default"]=G},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);
//# sourceMappingURL=chunk-284299ce.aa3da76d.js.map