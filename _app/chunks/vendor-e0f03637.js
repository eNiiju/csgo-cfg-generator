function y(){}const P=t=>t;function ut(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function K(){return Object.create(null)}function b(t){t.forEach(J)}function B(t){return typeof t=="function"}function at(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function Dt(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function ft(t){return Object.keys(t).length===0}function dt(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ot(t,e,n){t.$$.on_destroy.push(dt(e,n))}function Pt(t,e,n,i){if(t){const r=Q(t,e,n,i);return t[0](r)}}function Q(t,e,n,i){return t[1]&&i?ut(n.ctx.slice(),t[1](i(e))):n.ctx}function Bt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(e.dirty.length,r.length);for(let l=0;l<c;l+=1)u[l]=e.dirty[l]|r[l];return u}return e.dirty|r}return e.dirty}function Lt(t,e,n,i,r,u){if(r){const c=Q(e,n,i,u);t.p(c,r)}}function Ft(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ht(t){return t==null?"":t}const U=typeof window!="undefined";let V=U?()=>window.performance.now():()=>Date.now(),L=U?t=>requestAnimationFrame(t):y;const x=new Set;function X(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&L(X)}function Y(t){let e;return x.size===0&&L(X),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let N=!1;function _t(){N=!0}function ht(){N=!1}function mt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function pt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const o=e[s].claim_order,f=(r>0&&e[n[r]].claim_order<=o?r+1:mt(1,r,d=>e[n[d]].claim_order,o))-1;i[s]=n[f]+1;const a=f+1;n[a]=s,r=Math.max(a,r)}const u=[],c=[];let l=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(u.push(e[s-1]);l>=s;l--)c.push(e[l]);l--}for(;l>=0;l--)c.push(e[l]);u.reverse(),c.sort((s,o)=>s.claim_order-o.claim_order);for(let s=0,o=0;s<c.length;s++){for(;o<u.length&&c[s].claim_order>=u[o].claim_order;)o++;const f=o<u.length?u[o]:null;t.insertBefore(c[s],f)}}function yt(t,e){t.appendChild(e)}function Z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function gt(t){const e=tt("style");return bt(Z(t),e),e.sheet}function bt(t,e){yt(t.head||t,e)}function xt(t,e){if(N){for(pt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function It(t,e,n){N&&!n?xt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function $t(t){t.parentNode.removeChild(t)}function Wt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function tt(t){return document.createElement(t)}function F(t){return document.createTextNode(t)}function Gt(){return F(" ")}function Jt(){return F("")}function Kt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Qt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function wt(t){return Array.from(t.childNodes)}function Et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function et(t,e,n,i,r=!1){Et(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const l=t[c];if(e(l)){const s=n(l);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),l}}for(let c=t.claim_info.last_index-1;c>=0;c--){const l=t[c];if(e(l)){const s=n(l);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function kt(t,e,n,i){return et(t,r=>r.nodeName===e,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const l=r.attributes[c];n[l.name]||u.push(l.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Ut(t,e,n){return kt(t,e,n,tt)}function vt(t,e){return et(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>F(e),!0)}function Vt(t){return vt(t," ")}function Xt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function nt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Yt(t,e=document.body){return Array.from(e.querySelectorAll(t))}const j=new Map;let q=0;function At(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function St(t,e){const n={stylesheet:gt(e),rules:{}};return j.set(t,n),n}function it(t,e,n,i,r,u,c,l=0){const s=16.666/i;let o=`{
`;for(let m=0;m<=1;m+=s){const S=e+(n-e)*u(m);o+=m*100+`%{${c(S,1-S)}}
`}const f=o+`100% {${c(n,1-n)}}
}`,a=`__svelte_${At(f)}_${l}`,d=Z(t),{stylesheet:_,rules:h}=j.get(d)||St(d,t);h[a]||(h[a]=!0,_.insertRule(`@keyframes ${a} ${f}`,_.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${a} ${i}ms linear ${r}ms 1 both`,q+=1,a}function H(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),q-=r,q||Ct())}function Ct(){L(()=>{q||(j.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),j.clear())})}let w;function E(t){w=t}function M(){if(!w)throw new Error("Function called outside component initialization");return w}function Zt(t){M().$$.on_mount.push(t)}function te(t){M().$$.after_update.push(t)}function ee(){const t=M();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const u=nt(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,u)}),!u.defaultPrevented}return!0}}function ne(t,e){return M().$$.context.set(t,e),e}const k=[],rt=[],R=[],st=[],Nt=Promise.resolve();let I=!1;function jt(){I||(I=!0,Nt.then(ct))}function v(t){R.push(t)}const W=new Set;let T=0;function ct(){const t=w;do{for(;T<k.length;){const e=k[T];T++,E(e),qt(e.$$)}for(E(null),k.length=0,T=0;rt.length;)rt.pop()();for(let e=0;e<R.length;e+=1){const n=R[e];W.has(n)||(W.add(n),n())}R.length=0}while(k.length);for(;st.length;)st.pop()();I=!1,W.clear(),E(t)}function qt(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(v)}}let A;function ot(){return A||(A=Promise.resolve(),A.then(()=>{A=null})),A}function z(t,e,n){t.dispatchEvent(nt(`${e?"intro":"outro"}${n}`))}const D=new Set;let g;function ie(){g={r:0,c:[],p:g}}function re(){g.r||b(g.c),g=g.p}function Mt(t,e){t&&t.i&&(D.delete(t),t.i(e))}function se(t,e,n,i){if(t&&t.o){if(D.has(t))return;D.add(t),g.c.push(()=>{D.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const lt={duration:0};function ce(t,e,n){let i=e(t,n),r=!1,u,c,l=0;function s(){u&&H(t,u)}function o(){const{delay:a=0,duration:d=300,easing:_=P,tick:h=y,css:p}=i||lt;p&&(u=it(t,0,1,d,a,_,p,l++)),h(0,1);const m=V()+a,S=m+d;c&&c.abort(),r=!0,v(()=>z(t,!0,"start")),c=Y(O=>{if(r){if(O>=S)return h(1,0),z(t,!0,"end"),s(),r=!1;if(O>=m){const G=_((O-m)/d);h(G,1-G)}}return r})}let f=!1;return{start(){f||(f=!0,H(t),B(i)?(i=i(),ot().then(o)):o())},invalidate(){f=!1},end(){r&&(s(),r=!1)}}}function oe(t,e,n){let i=e(t,n),r=!0,u;const c=g;c.r+=1;function l(){const{delay:s=0,duration:o=300,easing:f=P,tick:a=y,css:d}=i||lt;d&&(u=it(t,1,0,o,s,f,d));const _=V()+s,h=_+o;v(()=>z(t,!1,"start")),Y(p=>{if(r){if(p>=h)return a(0,1),z(t,!1,"end"),--c.r||b(c.c),!1;if(p>=_){const m=f((p-_)/o);a(1-m,m)}}return r})}return B(i)?ot().then(()=>{i=i(),l()}):l(),{end(s){s&&i.tick&&i.tick(1,0),r&&(u&&H(t,u),r=!1)}}}const le=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function ue(t,e){const n={},i={},r={$$scope:1};let u=t.length;for(;u--;){const c=t[u],l=e[u];if(l){for(const s in c)s in l||(i[s]=1);for(const s in l)r[s]||(n[s]=l[s],r[s]=1);t[u]=l}else for(const s in c)r[s]=1}for(const c in i)c in n||(n[c]=void 0);return n}function ae(t){return typeof t=="object"&&t!==null?t:{}}function fe(t){t&&t.c()}function de(t,e){t&&t.l(e)}function Rt(t,e,n,i){const{fragment:r,on_mount:u,on_destroy:c,after_update:l}=t.$$;r&&r.m(e,n),i||v(()=>{const s=u.map(J).filter(B);c?c.push(...s):b(s),t.$$.on_mount=[]}),l.forEach(v)}function Tt(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function zt(t,e){t.$$.dirty[0]===-1&&(k.push(t),jt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function _e(t,e,n,i,r,u,c,l=[-1]){const s=w;E(t);const o=t.$$={fragment:null,ctx:null,props:u,update:y,not_equal:r,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:K(),dirty:l,skip_bound:!1,root:e.target||s.$$.root};c&&c(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(a,d,..._)=>{const h=_.length?_[0]:d;return o.ctx&&r(o.ctx[a],o.ctx[a]=h)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](h),f&&zt(t,a)),d}):[],o.update(),f=!0,b(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){_t();const a=wt(e.target);o.fragment&&o.fragment.l(a),a.forEach($t)}else o.fragment&&o.fragment.c();e.intro&&Mt(t.$$.fragment),Rt(t,e.target,e.anchor,e.customElement),ht(),ct()}E(s)}class he{$destroy(){Tt(this,1),this.$destroy=y}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ft(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const $=[];function me(t,e=y){let n;const i=new Set;function r(l){if(at(t,l)&&(t=l,n)){const s=!$.length;for(const o of i)o[1](),$.push(o,t);if(s){for(let o=0;o<$.length;o+=2)$[o][0]($[o+1]);$.length=0}}}function u(l){r(l(t))}function c(l,s=y){const o=[l,s];return i.add(o),i.size===1&&(n=e(r)||y),l(t),()=>{i.delete(o),i.size===0&&(n(),n=null)}}return{set:r,update:u,subscribe:c}}function pe(t,{delay:e=0,duration:n=400,easing:i=P}={}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:i,css:u=>`opacity: ${u*r}`}}export{Zt as A,ut as B,me as C,Pt as D,Lt as E,Ft as F,Bt as G,v as H,ce as I,oe as J,pe as K,Ht as L,xt as M,y as N,Ot as O,Kt as P,Wt as Q,Dt as R,he as S,ee as T,Yt as U,le as V,b as W,rt as X,wt as a,Qt as b,Ut as c,$t as d,tt as e,It as f,vt as g,Xt as h,_e as i,fe as j,Gt as k,Jt as l,de as m,Vt as n,Rt as o,ue as p,ae as q,ie as r,at as s,F as t,se as u,Tt as v,re as w,Mt as x,ne as y,te as z};
