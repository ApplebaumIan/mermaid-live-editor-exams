import{c as I,e as v,k as O,g as _,j as E,l as F,m,t as M,n as P}from"./_baseUniq.BozPGLMR.js";import{aU as o,aE as w,aV as A,aW as N,aX as G,aY as x,aZ as L,a_ as R,a$ as S,b0 as h,b1 as T,b2 as X}from"./state.Dtj93Fyf.js";var l=1/0,Y=17976931348623157e292;function q(n){if(!n)return n===0?n:0;if(n=o(n),n===l||n===-l){var a=n<0?-1:1;return a*Y}return n===n?n:0}function z(n){var a=q(n),r=a%1;return a===a?r?a-r:a:0}function Q(n){var a=n==null?0:n.length;return a?I(n):[]}var b=Object.prototype,B=b.hasOwnProperty,p=w(function(n,a){n=Object(n);var r=-1,e=a.length,t=e>2?a[2]:void 0;for(t&&A(a[0],a[1],t)&&(e=1);++r<e;)for(var f=a[r],i=N(f),s=-1,u=i.length;++s<u;){var d=i[s],g=n[d];(g===void 0||G(g,b[d])&&!B.call(n,d))&&(n[d]=f[d])}return n});function V(n){var a=n==null?0:n.length;return a?n[a-1]:void 0}function C(n){return function(a,r,e){var t=Object(a);if(!x(a)){var f=v(r);a=O(a),r=function(s){return f(t[s],s,t)}}var i=n(a,r,e);return i>-1?t[f?a[i]:i]:void 0}}var K=Math.max;function U(n,a,r){var e=n==null?0:n.length;if(!e)return-1;var t=r==null?0:z(r);return t<0&&(t=K(e+t,0)),_(n,v(a),t)}var k=C(U);function W(n,a){var r=-1,e=x(n)?Array(n.length):[];return E(n,function(t,f,i){e[++r]=a(t,f,i)}),e}function y(n,a){var r=L(n)?F:W;return r(n,v(a))}function Z(n,a){return n<a}function $(n,a,r){for(var e=-1,t=n.length;++e<t;){var f=n[e],i=a(f);if(i!=null&&(s===void 0?i===i&&!R(i):r(i,s)))var s=i,u=f}return u}function j(n){return n&&n.length?$(n,S,Z):void 0}function D(n,a,r,e){if(!h(n))return n;a=m(a,n);for(var t=-1,f=a.length,i=f-1,s=n;s!=null&&++t<f;){var u=M(a[t]),d=r;if(u==="__proto__"||u==="constructor"||u==="prototype")return n;if(t!=i){var g=s[u];d=void 0,d===void 0&&(d=h(g)?g:T(a[t+1])?[]:{})}X(s,u,d),s=s[u]}return n}function c(n,a,r){for(var e=-1,t=a.length,f={};++e<t;){var i=a[e],s=P(n,i);r(s,i)&&D(f,m(i,n),s)}return f}export{Z as a,$ as b,W as c,c as d,j as e,Q as f,k as g,p as h,z as i,V as l,y as m,q as t};
