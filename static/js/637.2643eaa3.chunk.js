"use strict";(self.webpackChunkmovie_catalog=self.webpackChunkmovie_catalog||[]).push([[637],{301:function(e,s,n){n.r(s),n.d(s,{default:function(){return T}});var t=n(3433),r=n(9439),i=n(2791),l=n(3422),a=n(7337),c=n(6591),o="styles_movie_page__7y5+G",u="styles_movie_page__wrapper__ykPYr",_="styles_movie_page__header__q3tSt",d="styles_movie_page__title__glze7",v="styles_movie_page__filters__ddY16",m="styles_selected_genres__kriG0",f="styles_select_container__vEYJ5",g="styles_selected_genre__UXUJT",h="styles_select_genre__9HQXm",x="styles_select_sort__i+TrD",y="styles_resultNotFound__MkJpA",j="styles_need_more_data__BQ62R",p=n(184),M=function(e){var s=e.sortBy,n=e.setSortBy,t=e.setMoviesPage,r=(0,l.T)();return(0,p.jsx)("select",{name:"sorting",className:x,children:c.cY.map((function(e,i){return(0,p.jsx)("option",{value:e.value,onClick:function(){var i;(i=e.value)!==s&&(r((0,a.uM)()),t(1),n(i))},children:e.name},i)}))})},N=n(4026),C=n(5271),k=function(e){var s=e.setMoviesPage,n=(0,l.T)(),t=N.a.allGenres(),r=(0,l.C)((function(e){return e.selectedGenres.selectedGenres}));return(0,p.jsx)("select",{name:"genre",className:h,children:t.map((function(e,t){if(!r.includes(e.id))return(0,p.jsx)("option",{value:e.id,onClick:function(){n((0,C.vu)(e.id)),n((0,a.uM)()),s(1)},children:e.name},t)}))})},G=function(e){var s=e.setMoviesPage,n=(0,l.T)(),t=N.a.allGenres(),r=(0,l.C)((function(e){return e.selectedGenres.selectedGenres})),i=function(e){var s;return null===(s=t.find((function(s){return s.id===e})))||void 0===s?void 0:s.name};return(0,p.jsx)("div",{className:m,children:r.map((function(e,t){return(0,p.jsx)("span",{className:g,onClick:function(){n((0,C.Bm)(e)),n((0,a.uM)()),s(1)},children:i(e)},t)}))})},P=n(1281),B=n(4771),T=function(){var e=(0,l.T)(),s=(0,l.C)((function(e){return e.selectedGenres.selectedGenres})),n=(0,l.C)((function(e){return e.movies.movies})),c=(0,l.C)((function(e){return e.movies.morePages})),m=(0,i.useState)(1),g=(0,r.Z)(m,2),h=g[0],x=g[1],N=(0,i.useState)(""),C=(0,r.Z)(N,2),T=C[0],S=C[1];return(0,i.useEffect)((function(){e((0,a.uM)()),window.scrollTo(0,0)}),[]),(0,i.useEffect)((function(){e((0,a.WK)({genres:(0,t.Z)(s),pagesId:h,sortBy:T}))}),[s,h,T]),(0,p.jsx)("main",{className:o,children:(0,p.jsxs)("div",{className:u,children:[(0,p.jsxs)("div",{className:_,children:[(0,p.jsx)("div",{className:d,children:"Explore Movies"}),(0,p.jsxs)("div",{className:v,children:[(0,p.jsx)(G,{setMoviesPage:x}),(0,p.jsxs)("div",{className:f,children:[(0,p.jsx)(k,{setMoviesPage:x}),(0,p.jsx)(M,{sortBy:T,setSortBy:S,setMoviesPage:x})]})]})]}),(0,p.jsx)(B.Z,{dataLength:n.length,next:function(){x((function(e){return e+1}))},hasMore:c,loader:(0,p.jsx)("div",{className:j,children:"Loading ..."}),children:(0,p.jsx)(P.C,{movies:n})}),0===n.length?(0,p.jsx)("div",{className:y,children:"Sorry, Results not found!"}):""]})})}}}]);
//# sourceMappingURL=637.2643eaa3.chunk.js.map