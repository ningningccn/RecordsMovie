(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0536f0cb"],{"7e43":function(e,t,c){"use strict";c("e889")},b37e:function(e,t,c){},e889:function(e,t,c){},efe3:function(e,t,c){"use strict";c.r(t);var a=c("7a23"),r={class:"container-md"},s={class:"d-flex my-4"},n={class:"search-bar"},i={class:"input-group"},o={class:"search-content row g-0"};function u(e,t,c,u,l,d){var b=Object(a["C"])("Header"),m=Object(a["C"])("searchCard"),h=Object(a["C"])("Footer");return Object(a["u"])(),Object(a["f"])(a["a"],null,[Object(a["j"])(b),Object(a["g"])("div",r,[Object(a["g"])("h2",s,"搜尋結果 ("+Object(a["E"])(l.total_results)+")",1),Object(a["g"])("div",n,[Object(a["g"])("div",i,[Object(a["L"])(Object(a["g"])("input",{type:"text",class:"form-control",placeholder:"搜尋內容","onUpdate:modelValue":t[0]||(t[0]=function(e){return l.searchText=e})},null,512),[[a["H"],l.searchText]]),Object(a["g"])("button",{class:"btn btn-search",type:"button",onClick:t[1]||(t[1]=function(e){return d.searchData()})},"搜尋")])]),Object(a["g"])("div",o,[(Object(a["u"])(!0),Object(a["f"])(a["a"],null,Object(a["A"])(l.resultsData,(function(e){return Object(a["u"])(),Object(a["f"])("div",{class:"col-6 col-md-4 col-lg-3 col-xl-2 px-1 my-1 my-sm-2",key:e.id},[Object(a["j"])(m,{item:e,onGetMediaID:d.getMediaDetail},null,8,["item","onGetMediaID"])])})),128))])]),Object(a["j"])(h)],64)}var l=c("1da1"),d=(c("96cf"),c("0418")),b=["src"],m={class:"details py-2 px-3"},h={class:"details"},p={class:"card-title card-ellipsis"},j={class:"d-flex justify-content-between mb-3"},f={class:"text-muted"},O={class:"text-muted"},g={class:"overview"};function v(e,t,c,r,s,n){return Object(a["u"])(),Object(a["f"])("div",{class:"card card-shadow",onClick:t[0]||(t[0]=function(e){return n.getSearchID(c.item.id,c.item.media_type)})},[Object(a["g"])("img",{src:"https://image.tmdb.org/t/p/w300/".concat(c.item.poster_path),class:"img-size"},null,8,b),Object(a["g"])("div",m,[Object(a["g"])("div",h,[Object(a["g"])("h5",p,Object(a["E"])(n.movieName),1),Object(a["g"])("div",j,[Object(a["g"])("small",f,Object(a["E"])(n.movieDate),1),Object(a["g"])("small",O,Object(a["E"])(n.movieType),1)]),Object(a["g"])("p",g,Object(a["E"])(c.item.overview),1)])])])}c("b0c0");var y={props:["item"],emits:["getMediaID"],computed:{movieName:function(){return"tv"==this.item.media_type?this.item.name:this.item.title},movieDate:function(){return"tv"==this.item.media_type?this.item.first_air_date:this.item.release_date},movieType:function(){return"tv"==this.item.media_type?"電視劇":"電影"}},methods:{getSearchID:function(e,t){this.$emit("getMediaID",{id:e,media_type:t})}}},x=(c("7e43"),c("6b0d")),w=c.n(x);const _=w()(y,[["render",v],["__scopeId","data-v-524ba162"]]);var D=_,T=c("fd2d"),k=c("d722"),I={components:{Header:d["a"],SearchCard:D,Footer:T["a"]},data:function(){return{resultsData:[],querySearchText:"",searchText:"",total_results:0}},methods:{searchData:function(){this.$router.push("/search?searchText=".concat(this.searchText)),this.searchText=""},getMediaDetail:function(e){console.log(e),this.$router.push({name:"searched",params:{mediaType:e.media_type,mediaID:e.id}})}},created:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var c,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$watch("$route.query",Object(l["a"])(regeneratorRuntime.mark((function t(){var c,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.querySearchText=e.$route.query.searchText,t.next=3,Object(k["h"])(e.querySearchText);case 3:c=t.sent,a=c.results,r=c.total,e.resultsData=a,e.total_results=r;case 8:case"end":return t.stop()}}),t)})))),e.querySearchText=e.$route.query.searchText,t.next=4,Object(k["h"])(e.querySearchText);case 4:c=t.sent,a=c.results,r=c.total,e.resultsData=a,e.total_results=r;case 9:case"end":return t.stop()}}),t)})))()}};c("f11a");const q=w()(I,[["render",u],["__scopeId","data-v-8e178ce2"]]);t["default"]=q},f11a:function(e,t,c){"use strict";c("b37e")},fd2d:function(e,t,c){"use strict";var a=c("7a23"),r={class:"text-white p-4",style:{"background-color":"#032541"}},s=Object(a["g"])("p",null,"© Copyright 2022 Records Video",-1),n=Object(a["g"])("p",null,"不作任何商業用途 純屬練習作品",-1),i=[s,n];function o(e,t,c,s,n,o){return Object(a["u"])(),Object(a["f"])("footer",r,i)}var u={data:function(){return{}}},l=c("6b0d"),d=c.n(l);const b=d()(u,[["render",o]]);t["a"]=b}}]);
//# sourceMappingURL=chunk-0536f0cb.146ab335.js.map