var q=Object.defineProperty;var B=(t,e,n)=>e in t?q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>B(t,typeof e!="symbol"?e+"":e,n);function O(){}const ct=t=>t;function R(t,e){for(const n in e)t[n]=e[n];return t}function G(t){return t()}function st(){return Object.create(null)}function I(t){t.forEach(G)}function ot(t){return typeof t=="function"}function at(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function ut(t,e){return t===e?!0:(m||(m=document.createElement("a")),m.href=e,t===m.href)}function ft(t){return Object.keys(t).length===0}function H(t,...e){if(t==null){for(const i of e)i(void 0);return O}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function _t(t){let e;return H(t,n=>e=n)(),e}function ht(t,e,n){t.$$.on_destroy.push(H(e,n))}function dt(t,e,n,i){if(t){const l=P(t,e,n,i);return t[0](l)}}function P(t,e,n,i){return t[1]&&i?R(n.ctx.slice(),t[1](i(e))):n.ctx}function mt(t,e,n,i){if(t[2]&&i){const l=t[2](i(n));if(e.dirty===void 0)return l;if(typeof l=="object"){const s=[],r=Math.max(e.dirty.length,l.length);for(let o=0;o<r;o+=1)s[o]=e.dirty[o]|l[o];return s}return e.dirty|l}return e.dirty}function pt(t,e,n,i,l,s){if(l){const r=P(e,n,i,s);t.p(r,l)}}function yt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function gt(t,e,n){return t.set(n),e}let y=!1;function bt(){y=!0}function xt(){y=!1}function z(t,e,n,i){for(;t<e;){const l=t+(e-t>>1);n(l)<=i?t=l+1:e=l}return t}function F(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&c.push(u)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let l=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,u=(l>0&&e[n[l]].claim_order<=a?l+1:z(1,l,D=>e[n[D]].claim_order,a))-1;i[c]=n[u]+1;const A=u+1;n[A]=c,l=Math.max(A,l)}const s=[],r=[];let o=e.length-1;for(let c=n[l]+1;c!=0;c=i[c-1]){for(s.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);s.reverse(),r.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<r.length;c++){for(;a<s.length&&r[c].claim_order>=s[a].claim_order;)a++;const u=a<s.length?s[a]:null;t.insertBefore(r[c],u)}}function U(t,e){t.appendChild(e)}function W(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=T("style");return e.textContent="/* empty */",J(W(t),e),e.sheet}function J(t,e){return U(t.head||t,e),e.sheet}function K(t,e){if(y){for(F(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Q(t,e,n){t.insertBefore(e,n||null)}function V(t,e,n){y&&!n?K(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function vt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function T(t){return document.createElement(t)}function X(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t){return document.createTextNode(t)}function wt(){return k(" ")}function Nt(){return k("")}function Tt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function kt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function At(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Lt(t){return t.dataset.svelteH}function Mt(t){return Array.from(t.childNodes)}function j(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function C(t,e,n,i,l=!1){j(t);const s=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,l||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,l?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function Y(t,e,n,i){return C(t,l=>l.nodeName===e,l=>{const s=[];for(let r=0;r<l.attributes.length;r++){const o=l.attributes[r];n[o.name]||s.push(o.name)}s.forEach(r=>l.removeAttribute(r))},()=>i(e))}function Ht(t,e,n){return Y(t,e,n,T)}function Z(t,e){return C(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>k(e),!0)}function Pt(t){return Z(t," ")}function L(t,e,n){for(let i=n;i<t.length;i+=1){const l=t[i];if(l.nodeType===8&&l.textContent.trim()===e)return i}return-1}function jt(t,e){const n=L(t,"HTML_TAG_START",0),i=L(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new b(e);j(t);const l=t.splice(n,i-n+1);v(l[0]),v(l[l.length-1]);const s=l.slice(1,l.length-1);if(s.length===0)return new b(e);for(const r of s)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new b(e,s)}function Ct(t,e){e=""+e,t.data!==e&&(t.data=e)}function St(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function Dt(t,e,n){t.classList.toggle(e,!!n)}function $(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}class tt{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=X(n.nodeName):this.e=T(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Q(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(v)}}class b extends tt{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)V(this.t,this.n[i],n)}}function qt(t,e){return new t(e)}let p;function x(t){p=t}function g(){if(!p)throw new Error("Function called outside component initialization");return p}function Bt(t){g().$$.on_mount.push(t)}function Ot(t){g().$$.after_update.push(t)}function Rt(t){g().$$.on_destroy.push(t)}function Gt(){const t=g();return(e,n,{cancelable:i=!1}={})=>{const l=t.$$.callbacks[e];if(l){const s=$(e,n,{cancelable:i});return l.slice().forEach(r=>{r.call(t,s)}),!s.defaultPrevented}return!0}}function It(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const d=[],M=[];let h=[];const w=[],S=Promise.resolve();let N=!1;function et(){N||(N=!0,S.then(it))}function zt(){return et(),S}function nt(t){h.push(t)}function Ft(t){w.push(t)}const E=new Set;let _=0;function it(){if(_!==0)return;const t=p;do{try{for(;_<d.length;){const e=d[_];_++,x(e),lt(e.$$)}}catch(e){throw d.length=0,_=0,e}for(x(null),d.length=0,_=0;M.length;)M.pop()();for(let e=0;e<h.length;e+=1){const n=h[e];E.has(n)||(E.add(n),n())}h.length=0}while(d.length);for(;w.length;)w.pop()();N=!1,E.clear(),x(t)}function lt(t){if(t.fragment!==null){t.update(),I(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(nt)}}function Ut(t){const e=[],n=[];h.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),h=e}export{It as $,pt as A,yt as B,mt as C,W as D,Et as E,nt as F,$ as G,ct as H,st as I,it as J,ft as K,Ut as L,p as M,x as N,G as O,d as P,et as Q,bt as R,xt as S,_t as T,Dt as U,gt as V,Tt as W,kt as X,Gt as Y,vt as Z,Ft as _,H as a,Rt as a0,b as a1,Lt as a2,jt as a3,ut as a4,wt as b,Ht as c,Mt as d,T as e,Z as f,v as g,Pt as h,ot as i,V as j,K as k,Ct as l,ht as m,O as n,Bt as o,Nt as p,Ot as q,I as r,at as s,k as t,At as u,St as v,M as w,qt as x,zt as y,dt as z};
