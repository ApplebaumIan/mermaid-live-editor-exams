var q=Object.defineProperty;var B=(t,n,e)=>n in t?q(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var f=(t,n,e)=>B(t,typeof n!="symbol"?n+"":n,e);function O(){}const ct=t=>t;function R(t,n){for(const e in n)t[e]=n[e];return t}function G(t){return t()}function st(){return Object.create(null)}function I(t){t.forEach(G)}function ot(t){return typeof t=="function"}function at(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let m;function ut(t,n){return t===n?!0:(m||(m=document.createElement("a")),m.href=n,t===m.href)}function ft(t){return Object.keys(t).length===0}function H(t,...n){if(t==null){for(const i of n)i(void 0);return O}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function _t(t){let n;return H(t,e=>n=e)(),n}function ht(t,n,e){t.$$.on_destroy.push(H(n,e))}function dt(t,n,e,i){if(t){const l=P(t,n,e,i);return t[0](l)}}function P(t,n,e,i){return t[1]&&i?R(e.ctx.slice(),t[1](i(n))):e.ctx}function mt(t,n,e,i){if(t[2]&&i){const l=t[2](i(e));if(n.dirty===void 0)return l;if(typeof l=="object"){const s=[],r=Math.max(n.dirty.length,l.length);for(let o=0;o<r;o+=1)s[o]=n.dirty[o]|l[o];return s}return n.dirty|l}return n.dirty}function pt(t,n,e,i,l,s){if(l){const r=P(n,e,i,s);t.p(r,l)}}function yt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function bt(t,n,e){return t.set(e),n}let y=!1;function gt(){y=!0}function xt(){y=!1}function z(t,n,e,i){for(;t<n;){const l=t+(n-t>>1);e(l)<=i?t=l+1:n=l}return t}function F(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<n.length;a++){const u=n[a];u.claim_order!==void 0&&c.push(u)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let l=0;for(let c=0;c<n.length;c++){const a=n[c].claim_order,u=(l>0&&n[e[l]].claim_order<=a?l+1:z(1,l,D=>n[e[D]].claim_order,a))-1;i[c]=e[u]+1;const A=u+1;e[A]=c,l=Math.max(A,l)}const s=[],r=[];let o=n.length-1;for(let c=e[l]+1;c!=0;c=i[c-1]){for(s.push(n[c-1]);o>=c;o--)r.push(n[o]);o--}for(;o>=0;o--)r.push(n[o]);s.reverse(),r.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<r.length;c++){for(;a<s.length&&r[c].claim_order>=s[a].claim_order;)a++;const u=a<s.length?s[a]:null;t.insertBefore(r[c],u)}}function U(t,n){t.appendChild(n)}function W(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;return n&&n.host?n:t.ownerDocument}function Et(t){const n=T("style");return n.textContent="/* empty */",J(W(t),n),n.sheet}function J(t,n){return U(t.head||t,n),n.sheet}function K(t,n){if(y){for(F(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function Q(t,n,e){t.insertBefore(n,e||null)}function V(t,n,e){y&&!e?K(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function vt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function T(t){return document.createElement(t)}function X(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t){return document.createTextNode(t)}function wt(){return k(" ")}function Nt(){return k("")}function Tt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function kt(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function At(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Lt(t){return t.dataset.svelteH}function Mt(t){let n;return{p(...e){n=e,n.forEach(i=>t.push(i))},r(){n.forEach(e=>t.splice(t.indexOf(e),1))}}}function Ht(t){return t===""?null:+t}function Pt(t){return Array.from(t.childNodes)}function j(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function C(t,n,e,i,l=!1){j(t);const s=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(n(o)){const c=e(o);return c===void 0?t.splice(r,1):t[r]=c,l||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(n(o)){const c=e(o);return c===void 0?t.splice(r,1):t[r]=c,l?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function Y(t,n,e,i){return C(t,l=>l.nodeName===n,l=>{const s=[];for(let r=0;r<l.attributes.length;r++){const o=l.attributes[r];e[o.name]||s.push(o.name)}s.forEach(r=>l.removeAttribute(r))},()=>i(n))}function jt(t,n,e){return Y(t,n,e,T)}function Z(t,n){return C(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>k(n),!0)}function Ct(t){return Z(t," ")}function L(t,n,e){for(let i=e;i<t.length;i+=1){const l=t[i];if(l.nodeType===8&&l.textContent.trim()===n)return i}return-1}function St(t,n){const e=L(t,"HTML_TAG_START",0),i=L(t,"HTML_TAG_END",e+1);if(e===-1||i===-1)return new g(n);j(t);const l=t.splice(e,i-e+1);v(l[0]),v(l[l.length-1]);const s=l.slice(1,l.length-1);if(s.length===0)return new g(n);for(const r of s)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new g(n,s)}function Dt(t,n){n=""+n,t.data!==n&&(t.data=n)}function qt(t,n){t.value=n??""}function Bt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,"")}function Ot(t,n,e){t.classList.toggle(n,!!e)}function $(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}class tt{constructor(n=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=X(e.nodeName):this.e=T(e.nodeType===11?"TEMPLATE":e.nodeName),this.t=e.tagName!=="TEMPLATE"?e:e.content,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)Q(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(v)}}class g extends tt{constructor(e=!1,i){super(e);f(this,"l");this.e=this.n=null,this.l=i}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let i=0;i<this.n.length;i+=1)V(this.t,this.n[i],e)}}function Rt(t,n){return new t(n)}let p;function x(t){p=t}function b(){if(!p)throw new Error("Function called outside component initialization");return p}function Gt(t){b().$$.on_mount.push(t)}function It(t){b().$$.after_update.push(t)}function zt(t){b().$$.on_destroy.push(t)}function Ft(){const t=b();return(n,e,{cancelable:i=!1}={})=>{const l=t.$$.callbacks[n];if(l){const s=$(n,e,{cancelable:i});return l.slice().forEach(r=>{r.call(t,s)}),!s.defaultPrevented}return!0}}function Ut(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const d=[],M=[];let h=[];const w=[],S=Promise.resolve();let N=!1;function nt(){N||(N=!0,S.then(it))}function Wt(){return nt(),S}function et(t){h.push(t)}function Jt(t){w.push(t)}const E=new Set;let _=0;function it(){if(_!==0)return;const t=p;do{try{for(;_<d.length;){const n=d[_];_++,x(n),lt(n.$$)}}catch(n){throw d.length=0,_=0,n}for(x(null),d.length=0,_=0;M.length;)M.pop()();for(let n=0;n<h.length;n+=1){const e=h[n];E.has(e)||(E.add(e),e())}h.length=0}while(d.length);for(;w.length;)w.pop()();N=!1,E.clear(),x(t)}function lt(t){if(t.fragment!==null){t.update(),I(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(et)}}function Kt(t){const n=[],e=[];h.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),h=n}export{Ut as $,pt as A,yt as B,mt as C,W as D,Et as E,et as F,$ as G,ct as H,st as I,it as J,ft as K,Kt as L,p as M,x as N,G as O,d as P,nt as Q,gt as R,xt as S,_t as T,Ot as U,bt as V,Tt as W,kt as X,Ft as Y,vt as Z,Jt as _,H as a,Mt as a0,Lt as a1,qt as a2,Ht as a3,zt as a4,g as a5,St as a6,ut as a7,wt as b,jt as c,Pt as d,T as e,Z as f,v as g,Ct as h,ot as i,V as j,K as k,Dt as l,ht as m,O as n,Gt as o,Nt as p,It as q,I as r,at as s,k as t,At as u,Bt as v,M as w,Rt as x,Wt as y,dt as z};
