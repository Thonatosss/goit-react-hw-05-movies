"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{213:function(n,t,e){e.d(t,{$h:function(){return c},YQ:function(){return i},_n:function(){return r}});var r="https://api.themoviedb.org/3/",c="f7d7a9b2e374f67b5381a74b61fb7dc2",i="https://image.tmdb.org/t/p/"},415:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var r=e(861),c=e(439),i=e(687),o=e.n(i),a=e(243),s=e(791),u=e(213),l=e(689),f=e(65),p=e(184);function d(){var n=(0,s.useState)([]),t=(0,c.Z)(n,2),e=t[0],i=t[1],d=(0,l.TH)();return(0,s.useEffect)((function(){function n(){return(n=(0,r.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.Z.get("".concat(u._n,"/trending/movie/day?api_key=").concat(u.$h));case 3:t=n.sent,e=t.data.results.map((function(n){var t=n.poster_path,e=n.title,r=n.id;return{poster:"".concat(u.YQ,"w500").concat(t),title:e,id:r}})),i(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,p.jsx)("div",{children:(0,p.jsx)(f.sS,{children:e.map((function(n){var t=n.id,e=n.title,r=n.poster;return(0,p.jsx)("li",{children:(0,p.jsxs)(f.sE,{to:"movies/".concat(t),state:{from:d},children:[(0,p.jsx)(f.Gv,{children:e}),(0,p.jsx)("img",{src:r,alt:"",width:"200",height:"230"})]})},t)}))})})}},65:function(n,t,e){e.d(t,{Gv:function(){return f},sE:function(){return l},sS:function(){return u}});var r,c,i,o=e(168),a=e(686),s=e(87),u=a.Z.ul(r||(r=(0,o.Z)(["\n\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nflex-wrap: wrap;\ngap: 20px;\nlist-style: none;\n\n"]))),l=(0,a.Z)(s.rU)(c||(c=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column-reverse;\n  background-color: #c9d6df;\n  width: 230px;\n  height: 320px;\n  text-decoration: none;\n"]))),f=a.Z.h2(i||(i=(0,o.Z)(["\n  font-size: 20px;\n  text-align: center;\n  color: black;\n  \n"])))}}]);
//# sourceMappingURL=415.c555f6d7.chunk.js.map