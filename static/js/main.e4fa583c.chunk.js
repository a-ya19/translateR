(this.webpackJsonprender=this.webpackJsonprender||[]).push([[0],{165:function(e,t){},361:function(e,t,c){},362:function(e,t,c){},385:function(e,t){},387:function(e,t){},420:function(e,t){},422:function(e,t){},450:function(e,t){},451:function(e,t){},456:function(e,t){},458:function(e,t){},465:function(e,t){},484:function(e,t){},556:function(e,t){},656:function(e,t){},658:function(e,t){},705:function(e,t){},707:function(e,t){},741:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),a=c(127),i=c.n(a),r=(c(361),c(38)),l=(c.p,c(362),c(742)),j=c(745),o=c(744),d=c(750),u=c(743),b=c(746),O=c(747),h=c(128),f=c(129),m=c(132),x=c(131),p=c(1),v=function(e){return console.log(e.commentData),Object(p.jsx)(l.a,{className:"comment",children:Object(p.jsxs)(u.a,{children:[Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-12",children:Object(p.jsx)("a",{href:"http://www.reddit.com"+e.commentData.permalink,children:e.commentData.author})})}),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-12",children:e.commentData.body})})]})})},g=function(e){var t=Object(n.useState)([]),c=Object(r.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)(-1),l=Object(r.a)(i,2),j=(l[0],l[1],Object(n.useState)(5)),d=Object(r.a)(j,2),u=d[0],b=d[1];Object(n.useEffect)((function(){fetch(e.commentsURL).then((function(e){200==e.status?e.json().then((function(e){null!=e&&(a(e[1].data.children),console.log(s))})):console.log("ERROR WITH COMMENTS")}))}),[]);for(var O=[],h=0;h<s.length&&h<u;h++)O.push(s[h]);return Object(p.jsxs)("div",{className:"container commentList",children:[O.map((function(e){return Object(p.jsx)(v,{commentData:e.data})})),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-12",children:Object(p.jsx)(o.a,{onClick:function(){return b(u+5)},children:"Load More"})})})]})},N=function(e){Object(m.a)(c,e);var t=Object(x.a)(c);function c(e){var n;return Object(h.a)(this,c),(n=t.call(this,e)).state={showComments:!1},n}return Object(f.a)(c,[{key:"renderText",value:function(){for(var e=this.props.text.split(/(\(https?:\/\/[^\s]+)/g),t=1;t<e.length;t+=2)e[t]=Object(p.jsx)("a",{href:e[t],children:"[Link]"},"link"+t);return e}},{key:"render",value:function(){var e=this.renderText();return Object(p.jsx)("div",{children:e})}}]),c}(n.Component),w=c(356),y=(c(366),function(e){var t=c(727)(String(e.text));return Object(p.jsx)("div",{className:"translation",children:Object(p.jsx)("div",{className:"pinyin",children:t.join(" ")})})});var k=function(e){var t=Object(n.useState)(!1),c=Object(r.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)(!1),h=Object(r.a)(i,2),f=(h[0],h[1],Object(n.useState)(!1)),m=Object(r.a)(f,2),x=m[0],v=m[1],k="https://www.reddit.com/r/"+e.subreddit+"/comments/"+e.article.id+".json";return Object(p.jsx)("div",{className:"article row",children:Object(p.jsx)("div",{className:"col-12",children:Object(p.jsx)(w.a,{popoverItems:function(e){return Object(p.jsx)("div",{className:"highlightpop",children:Object(p.jsx)(y,{text:window.getSelection()})})},children:Object(p.jsxs)(l.a,{children:[Object(p.jsx)(j.a,{className:"bg-warning",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-9 col-lg-10",children:e.article.title}),Object(p.jsxs)("div",{className:"col-3 col-lg-2",style:{display:"flex",alignItems:"center",justifyContent:"flex-end"},children:[Object(p.jsx)("a",{href:e.article.url,target:"_blank",children:Object(p.jsx)(o.a,{color:"bg-primary",children:Object(p.jsx)("span",{className:"fa fa-external-link"})})}),Object(p.jsx)(o.a,{color:"bg-primary",onClick:function(){return a(!s)},children:s?Object(p.jsx)("span",{className:"fa fa-minus"}):Object(p.jsx)("span",{className:"fa fa-plus"})})]})]})}),Object(p.jsxs)(d.a,{isOpen:s,children:[Object(p.jsx)(u.a,{children:Object(p.jsx)(b.a,{children:Object(p.jsx)(N,{text:e.article.selftext})})}),Object(p.jsxs)(O.a,{children:[Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-11",style:{display:"flex",alignItems:"center"},children:"Comments"}),Object(p.jsx)("div",{className:"col-1",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(p.jsx)(o.a,{color:"bg-primary btn-block",onClick:function(){return v(!x)},style:{width:"100%"},children:x?Object(p.jsx)("span",{className:"fa fa-minus"}):Object(p.jsx)("span",{className:"fa fa-plus"})})})]}),Object(p.jsx)(d.a,{isOpen:x,children:x?Object(p.jsx)(g,{commentsURL:k}):Object(p.jsx)("div",{})})]})]})]})})})})},C=c(748),S=c(749);n.Component;var R=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)("china_irl"),i=Object(r.a)(a,2),l=i[0],j=i[1];return Object(n.useEffect)((function(){fetch("https://www.reddit.com/r/"+l+".json").then((function(e){200==e.status?e.json().then((function(e){null!=e&&(s(e.data.children),console.log(e))})):console.log("ERROR")}))}),[l]),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)(C.a,{dark:!0,expand:"md",children:[Object(p.jsx)(S.a,{children:"translateR"}),Object(p.jsx)("input",{type:"text",className:"input",value:l,onChange:function(e){return j(e.target.value)}})]}),Object(p.jsx)("div",{className:"articles",children:null!=c?c.map((function(e,t){return Object(p.jsx)(k,{article:e.data,subreddit:l},t)})):""})]})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,751)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};c(738),c(739);i.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(R,{})}),document.getElementById("root")),I()}},[[741,1,2]]]);
//# sourceMappingURL=main.e4fa583c.chunk.js.map