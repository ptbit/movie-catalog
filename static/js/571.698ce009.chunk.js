"use strict";(self.webpackChunkmovie_catalog=self.webpackChunkmovie_catalog||[]).push([[571],{2622:function(e,s,i){i.d(s,{O:function(){return _}});var t=i(9391),a=(i(1009),i(184)),_=function(e){var s=e.rating,i=e.type,_="big"===i?"#13293b":"#d6d6d6",l=0===s?"red":"#d6d6d6";return(0,a.jsx)(t.Ip,{value:s,maxValue:10,text:0!=s?s.toString():"0",strokeWidth:"big"===i?13:9,background:!0,backgroundPadding:5,styles:(0,t.y3)({pathColor:s<5?"red":s<7?"orange":"green",backgroundColor:_,textSize:"30px",pathTransitionDuration:3,textColor:"white",trailColor:l})})}},8430:function(e,s,i){i.d(s,{k:function(){return _}});var t=i(7087),a=(i(9713),i(184)),_=function(e){var s=e.src,i=e.alt,_=e.className;return(0,a.jsx)(t.LazyLoadImage,{effect:"blur",src:s,alt:i,className:_})}},9506:function(e,s,i){i.d(s,{u:function(){return g}});var t=i(1087),a=i(4026),_=i(3040),l="styles_movie_card__7Z2B0",n="styles_poster_wrapper__fD5x8",r="styles_poster_holder__wqMRO",o="styles_circleRating__k8xL5",c="styles_rating_text__bSfik",d="styles_genres__idU5Y",m="styles_genre__SF0Sl",v="styles_text_block__GAgMb",u="styles_movie_title__y-f9K",h="styles_movie_date__3SskO",x=i(8430),f=i(2622),p=i(184),g=function(e){var s=e.poster_path,i=e.title,g=e.vote_average,j=e.release_date,y=e.genre_ids,N=void 0===y?[]:y,w=e.id;return"https://image.tmdb.org/t/p/w220_and_h330_facenull"===s&&(s=_),(0,p.jsxs)(t.rU,{to:"/movies/"+w,className:l,children:[(0,p.jsxs)("div",{className:n,children:[(0,p.jsx)("span",{className:r,children:(0,p.jsx)(x.k,{src:s,alt:i,className:"movie_card__poster"})}),(0,p.jsx)("div",{className:o,children:(0,p.jsx)("span",{className:c,children:(0,p.jsx)(f.O,{rating:+g})})}),(0,p.jsx)("div",{className:d,children:N.map((function(e){return(0,p.jsx)("div",{className:m,children:a.a.getGenreNameById(e)},e)}))})]}),(0,p.jsxs)("div",{className:v,children:[(0,p.jsx)("div",{className:u,children:i}),(0,p.jsx)("div",{className:h,children:j})]})]})}},1572:function(e,s,i){i.r(s),i.d(s,{default:function(){return q}});var t=i(2791),a=i(7689),_=i(3422),l=i(7949),n=i(6710),r={modal:"styles_modal__c8QaF",active:"styles_active__XEk52",modal_content:"styles_modal_content__GnQti",modalHeader:"styles_modalHeader__B4BKo"},o=i(184),c=function(e){var s=e.modalActive,i=e.videoKey,t=(0,_.T)();return(0,o.jsx)("div",{className:s?"".concat(r.modal," ").concat(r.active):"".concat(r.modal),onClick:function(){t((0,l.p6)()),t((0,l.iS)(""))},children:(0,o.jsxs)("div",{className:r.modal_content,children:[(0,o.jsx)("div",{className:r.modalHeader,children:(0,o.jsx)("span",{className:r.btn,children:"Close"})}),(0,o.jsx)(n.Z,{url:"https://www.youtube.com/watch?v=".concat(i),controls:!0,width:"100%",height:"100%"})]})})},d=i(9506),m=function(e){var s=e%60;return(e-s)/60+"h "+s+"m"},v="styles_play_zone__container__cK+Qn",u="styles_play_zone__header__FJP5r",h="styles_play_zone__poster__+kGoz",x="styles_circle__sRqzX",f="styles_triangle__57CcT",p="styles_play_zone__title__5tMLB",g="styles_play_video_btn__EHOay",j="styles_text__7xCPq",y=function(){return(0,o.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"80px",height:"80px",viewBox:"0 0 213.7 213.7",enableBackground:"new 0 0 213.7 213.7",xmlSpace:"preserve",children:[(0,o.jsx)("polygon",{className:f,fill:"none",strokeWidth:"7",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",points:"73.5,62.5 148.5,105.8 73.5,149.1 "}),(0,o.jsx)("circle",{className:x,fill:"none",strokeWidth:"7",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",cx:"106.8",cy:"106.8",r:"103.3"})]})},N=function(e){var s=e.videoKey,i=e.name,t=e.watchTrailerPlayVideoBtn,a=void 0!==t&&t,n=(0,_.T)();return a?(0,o.jsxs)("span",{className:g,onClick:function(){n((0,l.gv)()),void 0!==s&&n((0,l.iS)(s))},children:[(0,o.jsx)(y,{}),(0,o.jsx)("span",{className:j,children:"Watch Trailer"})]}):(0,o.jsxs)("div",{className:v,onClick:function(){n((0,l.gv)()),void 0!==s&&n((0,l.iS)(s))},children:[(0,o.jsxs)("div",{className:u,children:[(0,o.jsx)("img",{className:h,alt:"",src:"https://img.youtube.com/vi/".concat(s,"/mqdefault.jpg")}),(0,o.jsx)(y,{})]}),(0,o.jsx)("div",{className:p,children:i})]})},w={movie_details_content:"styles_movie_details_content__V5lJT",movie_details_title:"styles_movie_details_title__wED7M",movie_details_subtitle:"styles_movie_details_subtitle__lLPpm",movie_details_genres:"styles_movie_details_genres__8YnEx",movie_details_genre:"styles_movie_details_genre__+wwXm",movie_details__row:"styles_movie_details__row__U8WUg",circular_rating:"styles_circular_rating__ONhDc",movie_details_overview_title:"styles_movie_details_overview_title__r7y9C",movie_details_overview_description:"styles_movie_details_overview_description__GzJOB",movie_details_info:"styles_movie_details_info__W53nJ",movie_details_info_item:"styles_movie_details_info_item__5bGaM",movie_details_info_item_title:"styles_movie_details_info_item_title__YKfLK",movie_details_info_item_content:"styles_movie_details_info_item_content__6xCzX"},k=i(2622),b=function(e){var s,i=e.movie,t=e.videoKey,a=(0,_.C)((function(e){return e.movie.director})),l=(0,_.C)((function(e){return e.movie.writer}));return(0,o.jsxs)("div",{className:w.movie_details_content,children:[(0,o.jsx)("h1",{className:w.movie_details_title,children:i.title}),(0,o.jsx)("h3",{className:w.movie_details_subtitle,children:i.subtitle}),(0,o.jsx)("div",{className:w.movie_details_genres,children:null===(s=i.genres)||void 0===s?void 0:s.map((function(e,s){return(0,o.jsx)("div",{className:w.movie_details_genre,children:e},s)}))}),(0,o.jsxs)("div",{className:w.movie_details__row,children:[(0,o.jsx)("span",{className:w.circular_rating,children:(0,o.jsx)(k.O,{rating:+i.vote_average||0,type:"big"})}),""!==t?(0,o.jsx)("span",{className:w.movie_details_overview,children:(0,o.jsx)(N,{videoKey:t,watchTrailerPlayVideoBtn:!0})}):(0,o.jsx)("h2",{className:w.movie_details_overview,children:"No Official Video"})]}),(0,o.jsxs)("div",{className:w.movie_details_overview,children:[(0,o.jsx)("div",{className:w.movie_details_overview_title,children:"Overview"}),(0,o.jsx)("div",{className:w.movie_details_overview_description,children:i.overview})]}),(0,o.jsxs)("div",{className:w.movie_details_info,children:[(0,o.jsxs)("div",{className:w.movie_details_info_item,children:[(0,o.jsx)("span",{className:w.movie_details_info_item_title,children:"Status:"}),(0,o.jsx)("span",{className:w.movie_details_info_item_content,children:i.status})]}),i.release_date&&(0,o.jsxs)("div",{className:w.movie_details_info_item,children:[(0,o.jsx)("span",{className:w.movie_details_info_item_title,children:"Release Date:"}),(0,o.jsx)("span",{className:w.movie_details_info_item_content,children:i.release_date})]}),(0,o.jsxs)("div",{className:w.movie_details_info_item,children:[(0,o.jsx)("span",{className:w.movie_details_info_item_title,children:"Runtime:"}),(0,o.jsx)("span",{className:w.movie_details_info_item_content,children:m(i.runtime)})]})]}),(0,o.jsx)("div",{className:w.movie_details_info,children:(0,o.jsxs)("div",{className:w.movie_details_info_item,children:[(0,o.jsx)("span",{className:w.movie_details_info_item_title,children:"Director:"}),(0,o.jsx)("span",{className:w.movie_details_info_item_content,children:a})]})}),(0,o.jsx)("div",{className:w.movie_details_info,children:(0,o.jsxs)("div",{className:w.movie_details_info_item,children:[(0,o.jsx)("span",{className:w.movie_details_info_item_title,children:"Writer:"}),(0,o.jsx)("span",{className:w.movie_details_info_item_content,children:l})]})})]})},C=i(7337),S=i.p+"static/media/no-avatar.0affc1eeb2b145c80bd1.png",O=i(8430),K="styles_actor_item__ggAXr",M="styles_actor_name__VoD46",I="styles_actor_role__0XUF9",L="styles_actor_avatar__02CIR",T=function(e){var s=e.name,i=e.avatar,t=e.role;return"https://image.tmdb.org/t/p/w138_and_h175_facenull"===i&&(i=S),(0,o.jsxs)("div",{className:K,children:[(0,o.jsx)("div",{className:L,children:(0,o.jsx)(O.k,{src:i,alt:s,className:"actor_avatar__img"})}),(0,o.jsx)("div",{className:M,children:s}),(0,o.jsx)("div",{className:I,children:t})]})},z="styles_video_item__QD-N6",B=function(e){var s=e.name,i=e.videoKey;return(0,o.jsx)("div",{className:z,children:(0,o.jsx)(N,{videoKey:i,name:s})})},G=i(3040),W="styles_movie_details_page__WO10m",D="styles_background_logo__GpKFi",P="styles_movie_details_container__2FrGO",V="styles_movie_details_poster__WLjQz",H="styles_movie_details_castSectionShadow__I+9E4",J="styles_movie_details_castSection__LWjj4",X="styles_actors_row__hIhSh",A="styles_movie_details_similarMovie__section__lqw7j",E="styles_movie_details_similarMovie__title__-aHHd",F="styles_movie_details_similarMovie__kMmIg",R="styles_movie_details_videos__section__tun5m",U="styles_movie_details_videos__title__Ovd9d",Z="styles_movie_details_videos__content__ugG+v",q=function(){var e=(0,_.T)(),s=(0,_.C)((function(e){return e.movie.movie})),i=(0,_.C)((function(e){return e.movie.team})),n=(0,_.C)((function(e){return e.movie.videoModalActive})),r=(0,_.C)((function(e){return e.movie.similarMovies})),m=(0,_.C)((function(e){return e.movie.videos})),v=(0,_.C)((function(e){return e.movie.videoKey})),u=(0,a.UO)(),h=void 0===u.id?0:+u.id;(0,t.useEffect)((function(){window.scrollTo(0,0),e((0,C.uM)()),e((0,l.HI)(h)),e((0,l.VP)(h)),e((0,l.gb)(h)),e((0,l.WY)(h))}),[u]);var x=G;return null!=s.poster_path&&(x="https://image.tmdb.org/t/p/original"+s.poster_path),(0,o.jsxs)("div",{className:W,children:[(0,o.jsx)("div",{className:D,children:s.background&&(0,o.jsx)(O.k,{src:"https://image.tmdb.org/t/p/w1920_and_h800_multi_faces"+s.background,alt:s.title,className:"movie_card__background_logo"})}),(0,o.jsx)("div",{className:H}),(0,o.jsxs)("div",{className:P,children:[(0,o.jsx)("div",{className:V,children:(0,o.jsx)(O.k,{src:x,alt:s.title})}),(0,o.jsx)(b,{movie:s,videoKey:m.length>0?m[0].key:""})]}),i.length>0&&(0,o.jsxs)("div",{className:J,children:[(0,o.jsx)("h2",{children:"Top Cast"}),(0,o.jsx)("div",{className:X,children:i.map((function(e,s){return(0,o.jsx)(T,{avatar:"https://image.tmdb.org/t/p/w138_and_h175_face"+e.profile_path,name:e.name,role:e.character?e.character:""},s)}))})]}),m.length>0&&(0,o.jsxs)("div",{className:R,children:[(0,o.jsx)(c,{modalActive:n,videoKey:v}),(0,o.jsx)("h2",{className:U,children:"Official Videos"}),(0,o.jsx)("div",{className:Z,children:m.map((function(e){var s=e.id,i=e.key,t=e.name;return(0,o.jsx)(B,{videoKey:i,name:t},s)}))})]}),r.length>0&&(0,o.jsxs)("div",{className:A,children:[(0,o.jsx)("h2",{className:E,children:"Similar Movies (API opinion)"}),(0,o.jsx)("div",{className:F,children:r.map((function(e){var s=e.id,i=e.poster_path,t=e.title,a=e.vote_average,_=e.release_date,l=e.genre_ids;return(0,o.jsx)(d.u,{id:s,poster_path:"https://image.tmdb.org/t/p/w220_and_h330_face"+i,title:t,vote_average:a,release_date:_,genre_ids:l},s)}))})]})]})}},4026:function(e,s,i){i.d(s,{a:function(){return o}});var t=i(4165),a=i(5861),_=i(1243),l=i(6591),n=!1,r=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){var s,i;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!0,s=l.T5+"genre/movie/list",e.next=4,_.Z.get(s,{headers:l.ob});case 4:if(200==(i=e.sent).status){e.next=7;break}return e.abrupt("return",!1);case 7:localStorage.setItem("genres",JSON.stringify(i.data.genres)),n=!1;case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o={getGenreNameById:function(e){var s=localStorage.getItem("genres");if(null!==s||n||r(),null!=s){var i,t=null===(i=JSON.parse(s).find((function(s){return s.id===e})))||void 0===i?void 0:i.name;if(void 0!=t)return t}return""},allGenres:function(){var e=localStorage.getItem("genres");return null!==e||n||r(),null!=e?JSON.parse(e):[]}}},3040:function(e,s,i){e.exports=i.p+"static/media/no-poster.f826e197e494e9187c82.png"}}]);
//# sourceMappingURL=571.698ce009.chunk.js.map