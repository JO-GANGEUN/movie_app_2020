(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{33:function(e,a,t){e.exports=t(66)},55:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(12),c=t.n(s),o=t(9),i=t(1);var m=function(){return r.a.createElement("div",{className:"about__container"},"about this page:")},l=t(13),u=t.n(l),v=t(26),p=t(27),d=t(28),_=t(32),E=t(31),g=t(29),f=t.n(g);t(55),t(56);var h=function(e){e.id;var a=e.year,t=e.title,n=e.summary,s=e.poster,c=e.genres;return r.a.createElement("div",{className:"movies__movie"},r.a.createElement("img",{src:s,alt:t,title:t}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},t),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("ul",{className:"movie__genres"},c.map((function(e,a){return r.a.createElement("li",{key:a,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},n.length>200?n.slice(0,200)+"... ":n)))},y=(t(59),function(e){Object(_.a)(t,e);var a=Object(E.a)(t);function t(){var e;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(v.a)(u.a.mark((function a(){var t,n;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=a.sent,n=t.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return a.stop()}}),a)}))),e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return r.a.createElement("session",{className:"container"},a?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(h,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(r.a.Component));t(60);var b=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(o.b,{to:"/"},"home"),r.a.createElement(o.b,{to:"/about"},"about"))};var N=function(){return r.a.createElement(o.a,null,r.a.createElement(b,null),r.a.createElement(i.a,{path:"/",exact:!0,component:y}),r.a.createElement(i.a,{path:"/about",component:m}))};c.a.render(r.a.createElement(N,null),document.getElementById("potato"))}},[[33,1,2]]]);
//# sourceMappingURL=main.cec2ac17.chunk.js.map