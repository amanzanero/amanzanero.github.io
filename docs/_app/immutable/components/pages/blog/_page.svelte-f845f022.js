import{S as R,i as S,s as V,k as p,q as b,a as E,l as m,m as g,r as k,h,c as N,n as P,b as v,G as d,B,e as y,J as A,u as C}from"../../../chunks/index-b46e0a50.js";function q(r,e,a){const t=r.slice();return t[1]=e[a].title,t[2]=e[a].date,t[4]=a,t}function G(r){let e,a=r[0].posts,t=[];for(let l=0;l<a.length;l+=1)t[l]=I(q(r,a,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=y()},l(l){for(let o=0;o<t.length;o+=1)t[o].l(l);e=y()},m(l,o){for(let n=0;n<t.length;n+=1)t[n].m(l,o);v(l,e,o)},p(l,o){if(o&1){a=l[0].posts;let n;for(n=0;n<a.length;n+=1){const _=q(l,a,n);t[n]?t[n].p(_,o):(t[n]=I(_),t[n].c(),t[n].m(e.parentNode,e))}for(;n<t.length;n+=1)t[n].d(1);t.length=a.length}},d(l){A(t,l),l&&h(e)}}}function J(r){let e,a;return{c(){e=p("p"),a=b("No posts yet!")},l(t){e=m(t,"P",{});var l=g(e);a=k(l,"No posts yet!"),l.forEach(h)},m(t,l){v(t,e,l),d(e,a)},p:B,d(t){t&&h(e)}}}function D(r){let e;return{c(){e=p("hr")},l(a){e=m(a,"HR",{})},m(a,t){v(a,e,t)},d(a){a&&h(e)}}}function I(r){let e,a=r[4]+1+"",t,l,o,n=r[1]+"",_,u,c,i=r[4]!==r[0].posts.length-1&&D();return{c(){e=p("div"),t=b(a),l=b(".  "),o=p("a"),_=b(n),u=E(),i&&i.c(),c=y(),this.h()},l(s){e=m(s,"DIV",{});var f=g(e);t=k(f,a),l=k(f,".  "),o=m(f,"A",{href:!0});var H=g(o);_=k(H,n),H.forEach(h),f.forEach(h),u=N(s),i&&i.l(s),c=y(),this.h()},h(){P(o,"href",`/blog/articles/${r[4]+1}`)},m(s,f){v(s,e,f),d(e,t),d(e,l),d(e,o),d(o,_),v(s,u,f),i&&i.m(s,f),v(s,c,f)},p(s,f){f&1&&n!==(n=s[1]+"")&&C(_,n),s[4]!==s[0].posts.length-1?i||(i=D(),i.c(),i.m(c.parentNode,c)):i&&(i.d(1),i=null)},d(s){s&&h(e),s&&h(u),i&&i.d(s),s&&h(c)}}}function $(r){let e,a,t,l,o,n;function _(i,s){return i[0].posts.length===0?J:G}let u=_(r),c=u(r);return{c(){e=p("div"),a=p("h1"),t=b("Blog"),l=E(),o=p("hr"),n=E(),c.c(),this.h()},l(i){e=m(i,"DIV",{class:!0});var s=g(e);a=m(s,"H1",{});var f=g(a);t=k(f,"Blog"),f.forEach(h),l=N(s),o=m(s,"HR",{}),n=N(s),c.l(s),s.forEach(h),this.h()},h(){P(e,"class","prose")},m(i,s){v(i,e,s),d(e,a),d(a,t),d(e,l),d(e,o),d(e,n),c.m(e,null)},p(i,[s]){u===(u=_(i))&&c?c.p(i,s):(c.d(1),c=u(i),c&&(c.c(),c.m(e,null)))},i:B,o:B,d(i){i&&h(e),c.d()}}}function j(r,e,a){let{data:t}=e;return r.$$set=l=>{"data"in l&&a(0,t=l.data)},[t]}class z extends R{constructor(e){super(),S(this,e,j,$,V,{data:0})}}export{z as default};
