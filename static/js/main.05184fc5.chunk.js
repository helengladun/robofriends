(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{43:function(e,t,n){e.exports=n(82)},61:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(15),c=n.n(o),i=n(11),s=(n(52),n(39)),l=n(35),u=n.n(l),d=n(17),f=n(18),E=n(41),m=n(36),h=n(42),v=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(E.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},n}return Object(h.a)(t,e),Object(f.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState((function(){return{hasError:!0}}))}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Ooops. That is not good"):this.props.children}}]),t}(a.Component),b=function(e){var t=e.onChangeHandler;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:function(e){return t(e.target.value)}}))},p=b;b.whyDidYouRender=!0;var O=function(){return r.a.createElement("div",{className:"full-screen flex justify-center items-center"},r.a.createElement("div",{className:"pacman"},r.a.createElement("div",{className:"pacman__mouth"}),r.a.createElement("div",{className:"pacman__food"}),r.a.createElement("div",{className:"pacman__food"}),r.a.createElement("div",{className:"pacman__food"}),r.a.createElement("div",{className:"pacman__food"})))};O.whyDidYouRender=!0;var g=function(e){return r.a.createElement("div",{className:"overflow-y-scroll ba bw3 scroll"},e.children)},S=g;g.whyDidYouRender=!0;var w,R=function(){return r.a.createElement("h1",{className:"main-title f1"},"RoboFriends ",console.log("header"))},_=r.a.memo(R);R.whyDidYouRender=!0,function(e){e.CHANGE_SEARCH_FIELD="CHANGE_SEARCH_FIELD"}(w||(w={}));var j;!function(e){e.REQUEST_ROBOTS="REQUEST_ROBOTS",e.REQUEST_ROBOTS_SUCCESS="REQUEST_ROBOTS_SUCCESS",e.REQUEST_ROBOTS_FAILED="REQUEST_ROBOTS_FAILED"}(j||(j={}));var y=function(e){var t=e.data,n=t.id,a=t.name,o=t.email;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(n,"?200x200"),alt:"robot"}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,o)))},T=r.a.memo(y);y.whyDidYouRender=!0;var C=function(e){var t=e.robots;return r.a.createElement("div",null,console.log("cardlist"),t.map((function(e){return r.a.createElement(T,{key:e.id,data:e})})))},N=C;C.whyDidYouRender=!0;var U=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.robots})),n=t.robotsList,o=t.error,c=t.loading,l=Object(i.c)((function(e){return e.search})).searchField,d=Object(a.useState)([]),f=Object(s.a)(d,2),E=f[0],m=f[1];return Object(a.useEffect)((function(){e({type:j.REQUEST_ROBOTS})}),[e]),Object(a.useEffect)((function(){var e=n.filter((function(e){return e.name.toLowerCase().search(l.toLowerCase())>-1}));m(e)}),[l,n]),c?r.a.createElement(O,null):r.a.createElement("div",{className:"tc red"},r.a.createElement(_,null),r.a.createElement(p,{onChangeHandler:u()((function(t){e(function(e){return{type:w.CHANGE_SEARCH_FIELD,payload:e}}(t))}),500)}),o&&r.a.createElement("div",{className:"red"},o),n&&n.length>0&&r.a.createElement(S,null,r.a.createElement(v,null,""===l?r.a.createElement(N,{robots:n}):r.a.createElement(N,{robots:E}))))},k=(n(61),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function L(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var B=n(7),D=n(40),A=n(12),x={robotsList:[],loading:!1,error:""},Q={searchField:""},F=Object(B.c)({robots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.REQUEST_ROBOTS:return Object(A.a)({},e,{loading:!0});case j.REQUEST_ROBOTS_SUCCESS:return Object(A.a)({},e,{loading:!1,robotsList:t.payload.data});case j.REQUEST_ROBOTS_FAILED:return Object(A.a)({},e,{loading:!1,error:t.payload.error});default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.CHANGE_SEARCH_FIELD:return Object(A.a)({},e,{searchField:t.payload});default:return e}}}),H=n(37),I=n(10),Y=n.n(I),G=n(13),W=n(38),J=n.n(W),$=function(){function e(){Object(d.a)(this,e)}return Object(f.a)(e,null,[{key:"getRobot",value:function(){return J.a.get("https://jsonplaceholder.typicode.com/users")}}]),e}(),q=Y.a.mark(M),z=Y.a.mark(P),K=Y.a.mark(V);function M(){var e;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(G.b)($.getRobot);case 3:return e=t.sent,t.next=6,Object(G.c)((a=e.data,{type:j.REQUEST_ROBOTS_SUCCESS,payload:{data:a}}));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(G.c)((n=t.t0.message,{type:j.REQUEST_ROBOTS_FAILED,payload:{error:n}}));case 12:case"end":return t.stop()}var n,a}),q,null,[[0,8]])}function P(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(j.REQUEST_ROBOTS,M);case 2:case"end":return e.stop()}}),z)}function V(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.a)([P()]);case 2:case"end":return e.stop()}}),K)}var X=function(){var e=Object(D.a)(),t=(Object(H.createLogger)(),Object(B.e)(F,Object(B.a)(e)));return e.run(V),t}();n(80)(r.a),c.a.render(r.a.createElement(i.a,{store:X},r.a.createElement("div",{className:"full-screen"},r.a.createElement(U,null))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/robofriends","/service-worker.js");k?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):L(e)}))}}()}},[[43,1,2]]]);
//# sourceMappingURL=main.05184fc5.chunk.js.map