(this.webpackJsonpnews=this.webpackJsonpnews||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),a=n(12),r=n.n(a),i=n(14),j=n(13),l=n.n(j),o=n(0),d=Object(c.createContext)(),u=function(e){var t=Object(c.useState)(),n=Object(i.a)(t,2),s=n[0],a=n[1];return Object(c.useEffect)((function(){l.a.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=".concat("8b30258ee98e4b318165f5d4b6ab261b")).then((function(e){return a(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(o.jsx)(d.Provider,{value:{data:s},children:e.children})};var b=function(e){var t=e.data;return Object(o.jsxs)("div",{className:"news",children:[Object(o.jsx)("h1",{className:"news__title",children:t.title}),Object(o.jsx)("p",{className:"news__desc",children:t.description}),Object(o.jsx)("span",{className:"news__author",children:t.author})," ",Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"news__published",children:t.publishedAt}),Object(o.jsx)("span",{className:"news__source",children:t.source.name})]})};var h=function(e){var t=Object(c.useContext)(d).data;return console.log(t),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"head__text",children:"News App \ud83d\udc4b"}),Object(o.jsx)("div",{className:"all__news",children:t?t.articles.map((function(e){return Object(o.jsx)(b,{data:e},e.url)})):"Loading"})]})};n(38);var O=function(){return Object(o.jsx)(u,{children:Object(o.jsx)(h,{})})};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.46ec3c0b.chunk.js.map