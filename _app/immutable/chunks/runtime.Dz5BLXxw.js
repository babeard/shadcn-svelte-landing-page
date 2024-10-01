var On=Array.isArray,xn=Array.from,Nn=Object.defineProperty,at=Object.getOwnPropertyDescriptor,Kt=Object.getOwnPropertyDescriptors,Rn=Object.prototype,kn=Array.prototype,$t=Object.getPrototypeOf;function Dn(t){return typeof t=="function"}const Cn=()=>{};function qn(t){return t()}function ft(t){for(var n=0;n<t.length;n++)t[n]()}function bn(t,n,r=!1){return t===void 0?r?n():n:t}const w=2,_t=4,C=8,ct=16,I=32,z=64,O=128,U=256,v=512,A=1024,q=2048,D=4096,H=8192,Zt=16384,pt=32768,Pn=65536,zt=1<<18,vt=1<<19,ot=Symbol("$state"),Fn=Symbol("");function ht(t){return t===this.v}function Jt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function dt(t){return!Jt(t,this.v)}function Wt(t){throw new Error("effect_in_teardown")}function Xt(){throw new Error("effect_in_unowned_derived")}function Qt(t){throw new Error("effect_orphan")}function tn(){throw new Error("effect_update_depth_exceeded")}function Ln(){throw new Error("hydration_failed")}function Mn(t){throw new Error("props_invalid_value")}function Hn(){throw new Error("state_descriptors_fixed")}function Yn(){throw new Error("state_prototype_fixed")}function nn(){throw new Error("state_unsafe_local_read")}function rn(){throw new Error("state_unsafe_mutation")}function et(t){return{f:0,v:t,reactions:null,equals:ht,version:0}}function jn(t){return Et(et(t))}function en(t){var r;const n=et(t);return n.equals=dt,i!==null&&i.l!==null&&((r=i.l).s??(r.s=[])).push(n),n}function Bn(t){return Et(en(t))}function Et(t){return l!==null&&l.f&w&&(y===null?En([t]):y.push(t)),t}function yt(t,n){return l!==null&&nt()&&l.f&w&&(y===null||!y.includes(t))&&rn(),t.equals(n)||(t.v=n,t.version=Lt(),wt(t,A),nt()&&u!==null&&u.f&v&&!(u.f&I)&&(p!==null&&p.includes(t)?(E(u,A),W(u)):m===null?yn([t]):m.push(t))),n}function wt(t,n){var r=t.reactions;if(r!==null)for(var e=nt(),s=r.length,a=0;a<s;a++){var o=r[a],f=o.f;f&A||!e&&o===u||(E(o,n),f&(v|O)&&(f&w?wt(o,q):W(o)))}}const Un=1,Vn=2,Gn=4,Kn=8,$n=16,Zn=1,zn=2,Jn=4,Wn=8,Xn=16,Qn=1,tr=2,nr=4,rr=1,er=2,sn="[",an="[!",on="]",Tt={},sr=Symbol(),ar="http://www.w3.org/2000/svg";function mt(t){console.warn("hydration_mismatch")}let S=!1;function or(t){S=t}let d;function V(t){if(t===null)throw mt(),Tt;return d=t}function ur(){return V(x(d))}function lr(t){if(S){if(x(d)!==null)throw mt(),Tt;d=t}}function ir(t=1){if(S){for(var n=t,r=d;n--;)r=x(r);d=r}}function fr(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===on){if(t===0)return n;t-=1}else(r===sn||r===an)&&(t+=1)}var e=x(n);n.remove(),n=e}}var ut,un,At,It;function _r(){if(ut===void 0){ut=window,un=document;var t=Element.prototype,n=Node.prototype;At=at(n,"firstChild").get,It=at(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__e=void 0,Text.prototype.__t=void 0}}function gt(t=""){return document.createTextNode(t)}function X(t){return At.call(t)}function x(t){return It.call(t)}function cr(t){if(!S)return X(t);var n=X(d);return n===null&&(n=d.appendChild(gt())),V(n),n}function pr(t,n){if(!S){var r=X(t);return r instanceof Comment&&r.data===""?x(r):r}return d}function vr(t,n=1,r=!1){let e=S?d:t;for(;n--;)e=x(e);if(!S)return e;var s=e.nodeType;if(r&&s!==3){var a=gt();return e==null||e.before(a),V(a),a}return V(e),e}function hr(t){t.textContent=""}function St(t){u===null&&l===null&&Qt(),l!==null&&l.f&O&&Xt(),st&&Wt()}function ln(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function b(t,n,r,e=!0){var s=(t&z)!==0,a=u,o={ctx:i,deps:null,nodes_start:null,nodes_end:null,f:t|A,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var f=R;try{lt(!0),j(o),o.f|=Zt}catch(T){throw Y(o),T}finally{lt(f)}}else n!==null&&W(o);var _=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&vt)===0;if(!_&&!s&&e&&(a!==null&&ln(o,a),l!==null&&l.f&w)){var c=l;(c.children??(c.children=[])).push(o)}return o}function dr(t){const n=b(C,null,!1);return E(n,v),n.teardown=t,n}function Er(t){St();var n=u!==null&&(u.f&C)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:l})}else{var e=Ot(t);return e}}function yr(t){return St(),J(t)}function wr(t){const n=b(z,t,!0);return()=>{Y(n)}}function Ot(t){return b(_t,t,!1)}function Tr(t,n){var r=i,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=J(()=>{t(),!e.ran&&(e.ran=!0,yt(r.l.r2,!0),In(n))})}function mr(){var t=i;J(()=>{if(Vt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&v&&E(r,q),P(r)&&j(r),n.ran=!1}t.l.r2.v=!1}})}function J(t){return b(C,t,!0)}function Ar(t){return J(t)}function Ir(t,n=0){return b(C|ct|n,t,!0)}function gr(t,n=!0){return b(C|I,t,!0,n)}function xt(t){var n=t.teardown;if(n!==null){const r=st,e=l;it(!0),$(null);try{n.call(null)}finally{it(r),$(e)}}}function Y(t,n=!0){var r=!1;if((n||t.f&zt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:x(e);e.remove(),e=a}r=!0}Ht(t,n&&!r),M(t,0),E(t,H);var o=t.transitions;if(o!==null)for(const _ of o)_.stop();xt(t);var f=t.parent;f!==null&&f.first!==null&&Nt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Nt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Sr(t,n){var r=[];Rt(t,r,!0),fn(r,()=>{Y(t),n&&n()})}function fn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Rt(t,n,r){if(!(t.f&D)){if(t.f^=D,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&n.push(o);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&pt)!==0||(e.f&I)!==0;Rt(e,n,a?r:!1),e=s}}}function Or(t){kt(t,!0)}function kt(t,n){if(t.f&D){t.f^=D,P(t)&&j(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&pt)!==0||(r.f&I)!==0;kt(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const _n=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let G=!1,K=!1,Q=[],tt=[];function Dt(){G=!1;const t=Q.slice();Q=[],ft(t)}function Ct(){K=!1;const t=tt.slice();tt=[],ft(t)}function xr(t){G||(G=!0,queueMicrotask(Dt)),Q.push(t)}function Nr(t){K||(K=!0,_n(Ct)),tt.push(t)}function cn(){G&&Dt(),K&&Ct()}function pn(t){let n=w|A;u===null?n|=O:u.f|=vt;const r={children:null,deps:null,equals:ht,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(l!==null&&l.f&w){var e=l;(e.children??(e.children=[])).push(r)}return r}function Rr(t){const n=pn(t);return n.equals=dt,n}function qt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&w?vn(e):Y(e)}}}function bt(t){var n,r=u;Z(t.parent);try{qt(t),n=Mt(t)}finally{Z(r)}var e=(N||t.f&O)&&t.deps!==null?q:v;E(t,e),t.equals(n)||(t.v=n,t.version=Lt())}function vn(t){qt(t),M(t,0),E(t,H),t.children=t.deps=t.reactions=t.fn=null}function kr(){throw new Error("invalid_default_snippet")}function hn(t){throw new Error("lifecycle_outside_component")}const Pt=0,dn=1;let B=Pt,L=!1,R=!1,st=!1;function lt(t){R=t}function it(t){st=t}let g=[],k=0;let l=null;function $(t){l=t}let u=null;function Z(t){u=t}let y=null;function En(t){y=t}let p=null,h=0,m=null;function yn(t){m=t}let Ft=0,N=!1,i=null;function Lt(){return++Ft}function nt(){return i!==null&&i.l===null}function P(t){var o,f;var n=t.f;if(n&A)return!0;if(n&q){var r=t.deps,e=(n&O)!==0;if(r!==null){var s;if(n&U){for(s=0;s<r.length;s++)((o=r[s]).reactions??(o.reactions=[])).push(t);t.f^=U}for(s=0;s<r.length;s++){var a=r[s];if(P(a)&&bt(a),e&&u!==null&&!N&&!((f=a==null?void 0:a.reactions)!=null&&f.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||E(t,v)}return!1}function wn(t,n,r){throw t}function Mt(t){var T;var n=p,r=h,e=m,s=l,a=N,o=y;p=null,h=0,m=null,l=t.f&(I|z)?null:t,N=!R&&(t.f&O)!==0,y=null;try{var f=(0,t.fn)(),_=t.deps;if(p!==null){var c;if(M(t,h),_!==null&&h>0)for(_.length=h+p.length,c=0;c<p.length;c++)_[h+c]=p[c];else t.deps=_=p;if(!N)for(c=h;c<_.length;c++)((T=_[c]).reactions??(T.reactions=[])).push(t)}else _!==null&&h<_.length&&(M(t,h),_.length=h);return f}finally{p=n,h=r,m=e,l=s,N=a,y=o}}function Tn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&w&&(p===null||!p.includes(n))&&(E(n,q),n.f&(O|U)||(n.f^=U),M(n,0))}function M(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Tn(t,r[e])}function Ht(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;Y(r,n),r=e}}function j(t){var n=t.f;if(!(n&H)){E(t,v);var r=u,e=i;u=t,i=t.ctx;try{n&ct||Ht(t),xt(t);var s=Mt(t);t.teardown=typeof s=="function"?s:null,t.version=Ft}catch(a){wn(a)}finally{u=r,i=e}}}function Yt(){k>1e3&&(k=0,tn()),k++}function jt(t){var n=t.length;if(n!==0){Yt();var r=R;R=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&v||(s.f^=v);var a=[];Bt(s,a),mn(a)}}finally{R=r}}}function mn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(H|D))&&P(e)&&(j(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Nt(e):e.fn=null))}}function An(){if(L=!1,k>1001)return;const t=g;g=[],jt(t),L||(k=0)}function W(t){B===Pt&&(L||(L=!0,queueMicrotask(An)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(z|I)){if(!(r&v))return;n.f^=v}}g.push(n)}function Bt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&I)!==0,o=a&&(s&v)!==0;if(!o&&!(s&D))if(s&C){a?r.f^=v:P(r)&&j(r);var f=r.first;if(f!==null){r=f;continue}}else s&_t&&e.push(r);var _=r.next;if(_===null){let F=r.parent;for(;F!==null;){if(t===F)break t;var c=F.next;if(c!==null){r=c;continue t}F=F.parent}}r=_}for(var T=0;T<e.length;T++)f=e[T],n.push(f),Bt(f,n)}function Ut(t){var n=B,r=g;try{Yt();const s=[];B=dn,g=s,L=!1,jt(r);var e=t==null?void 0:t();return cn(),(g.length>0||s.length>0)&&Ut(),k=0,e}finally{B=n,g=r}}async function Dr(){await Promise.resolve(),Ut()}function Vt(t){var n=t.f;if(n&H)return t.v;if(l!==null){y!==null&&y.includes(t)&&nn();var r=l.deps;p===null&&r!==null&&r[h]===t?h++:p===null?p=[t]:p.push(t),m!==null&&u!==null&&u.f&v&&!(u.f&I)&&m.includes(t)&&(E(u,A),W(u))}if(n&w){var e=t;P(e)&&bt(e)}return t.v}function In(t){const n=l;try{return l=null,t()}finally{l=n}}const gn=~(A|q|v);function E(t,n){t.f=t.f&gn|n}function Cr(t){return Gt().get(t)}function qr(t,n){return Gt().set(t,n),n}function Gt(t){return i===null&&hn(),i.c??(i.c=new Map(Sn(i)||void 0))}function Sn(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function br(t,n=1){var r=+Vt(t);return yt(t,r+n),r}function Pr(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},n||(i.l={s:null,u:null,r1:[],r2:et(!1)})}function Fr(t){const n=i;if(n!==null){const o=n.e;if(o!==null){var r=u,e=l;n.e=null;try{for(var s=0;s<o.length;s++){var a=o[s];Z(a.effect),$(a.reaction),Ot(a.fn)}}finally{Z(r),$(e)}}i=n.p,n.m=!0}return{}}function Lr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ot in t)rt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ot in r&&rt(r)}}}function rt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{rt(t[e],n)}catch{}const r=$t(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Kt(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{On as $,Ir as A,Sr as B,Ot as C,J as D,In as E,xr as F,yr as G,sn as H,Er as I,ft as J,Vt as K,Lr as L,qn as M,dr as N,en as O,Cn as P,yt as Q,Jt as R,ot as S,Rn as T,kn as U,et as V,Hn as W,sr as X,at as Y,Yn as Z,$t as _,x as a,an as a0,fr as a1,Or as a2,pt as a3,Mn as a4,Pn as a5,Jn as a6,dt as a7,br as a8,Dn as a9,fn as aA,Gn as aB,Kn as aC,ar as aD,ct as aE,Zt as aF,Qn as aG,tr as aH,nr as aI,nt as aJ,ir as aK,qr as aL,Cr as aM,kr as aN,bn as aO,un as aP,Zn as aa,zn as ab,Wn as ac,pn as ad,Rr as ae,Xn as af,hn as ag,Ut as ah,Nn as ai,Dr as aj,jn as ak,Y as al,Tr as am,mr as an,Bn as ao,Fn as ap,Kt as aq,Nr as ar,zt as as,rr as at,er as au,D as av,Un as aw,Vn as ax,$n as ay,Rt as az,Tt as b,V as c,d,on as e,mt as f,X as g,ur as h,_r as i,Ln as j,hr as k,xn as l,wr as m,gt as n,gr as o,Pr as p,S as q,u as r,or as s,Fr as t,i as u,pr as v,Ar as w,cr as x,lr as y,vr as z};
