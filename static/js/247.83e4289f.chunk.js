"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{1247:function(e,r,t){t.r(r);var n=t(9439),a=t(5984),s=t(7689),u=t(2791),c=t(6124),o=t(184),i=(0,c.b)();r.default=function(){var e=(0,u.useState)([]),r=(0,n.Z)(e,2),t=r[0],c=r[1],p=(0,s.UO)().movieId;return(0,u.useEffect)((function(){i.getActors(p).then((function(e){c(e)}))}),[p]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{children:"Actors of the movie: "}),(0,o.jsx)("ul",{children:t.map((function(e){var r=(0,a.x0)();return(0,o.jsxs)("li",{children:[(0,o.jsx)("div",{children:e.name}),e.profile_path&&(0,o.jsx)("img",{alt:e.name,src:"http://image.tmdb.org/t/p/w200".concat(e.profile_path)})]},r)}))})]})}},6124:function(e,r,t){t.d(r,{b:function(){return m}});var n=t(5861),a=t(4687),s=t.n(a),u=t(1243),c=t(1686),o="713e88f7db14c265e0543f2dd0843d0c",i="https://api.themoviedb.org/3/",p="trending/all/day",f="search/movie";u.Z.defaults.baseURL=i;var l=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get(p,{params:{api_key:o,language:"en-US"}});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),c.Notify.failure("Sorry, something went wrong. Please try again."),new Error(e.t0.response.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get(f,{params:{api_key:o,language:"en-US",query:r}});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),c.Notify.failure("Sorry, something went wrong. Please try again."),new Error(e.t0.response.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(r),{params:{api_key:o,language:"en-US"}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),c.Notify.failure("Sorry, we can't find any information about this movie :("),new Error(e.t0.response.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),g=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(r,"/credits"),{params:{api_key:o,language:"en-US"}});case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:throw e.prev=7,e.t0=e.catch(0),c.Notify.failure("Sorry, we can't find this actor."),new Error(e.t0.response.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(r,"/reviews"),{params:{api_key:o,language:"en-US"}});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),c.Notify.failure("Sorry, no one has written a review yet."),new Error(e.t0.response.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),m=function(){return{getTrendingMovies:l,getMovieBySearch:v,getOneMovie:h,getActors:g,getReviews:d}}}}]);
//# sourceMappingURL=247.83e4289f.chunk.js.map