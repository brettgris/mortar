let t,e,n=!1,l=!1,o=!1,s=!1;const r="undefined"!=typeof window?window:{},c=r.CSS,i=r.document||{head:{}},a={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l)},u=t=>Promise.resolve(t),f=(t,e,n)=>{n&&n.map(([n,l,o])=>{const s=$(t,n),r=m(e,o),c=d(n);a.ael(s,l,r,c),(e.o=e.o||[]).push(()=>a.rel(s,l,r,c))})},m=(t,e)=>n=>{256&t.t?t.s[e](n):(t.u=t.u||[]).push([e,n])},$=(t,e)=>4&e?i:t,d=t=>0!=(2&t),p={},b=t=>"object"==(t=typeof t)||"function"===t,h=(t,e,...n)=>{let l=null,o=null,s=!1,r=!1,c=[];const i=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof t&&!b(l))&&(l+=""),s&&r?c[c.length-1].$+=l:c.push(s?y(null,l):l),r=s)};if(i(n),e){e.name&&(o=e.name);{const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}}const a=y(t,null);return a.p=e,c.length>0&&(a.h=c),a._=o,a},y=(t,e)=>({t:0,j:t,$:e,v:null,h:null,p:null,_:null}),w={},_=(t,e,n,l,o,s)=>{if(n!==l){let i=et(t,e),u=e.toLowerCase();if("class"===e){const e=t.classList,o=v(n),s=v(l);e.remove(...o.filter(t=>t&&!s.includes(t))),e.add(...s.filter(t=>t&&!o.includes(t)))}else if("ref"===e)l&&l(t);else if(i||"o"!==e[0]||"n"!==e[1]){const r=b(l);if((i||r&&null!==l)&&!o)try{if(t.tagName.includes("-"))t[e]=l;else{let o=null==l?"":l;"list"===e?i=!1:null!=n&&t[e]==o||(t[e]=o)}}catch(c){}null==l||!1===l?t.removeAttribute(e):(!i||4&s||o)&&!r&&t.setAttribute(e,l=!0===l?"":l)}else e="-"===e[2]?e.slice(3):et(r,u)?u.slice(2):u[2]+e.slice(3),n&&a.rel(t,e,n,!1),l&&a.ael(t,e,l,!1)}},j=/\s/,v=t=>t?t.split(j):[],g=(t,e,n,l)=>{const o=11===e.v.nodeType&&e.v.host?e.v.host:e.v,s=t&&t.p||p,r=e.p||p;for(l in s)l in r||_(o,l,s[l],void 0,n,e.t);for(l in r)_(o,l,s[l],r[l],n,e.t)},R=(l,s,r)=>{let c,a,u,f=s.h[r],m=0;if(n||(o=!0,"slot"===f.j&&(f.t|=f.h?2:1)),null!==f.$)c=f.v=i.createTextNode(f.$);else if(1&f.t)c=f.v=i.createTextNode("");else if(c=f.v=i.createElement(2&f.t?"slot-fb":f.j),g(null,f,!1),f.h)for(m=0;m<f.h.length;++m)a=R(l,f,m),a&&c.appendChild(a);return c["s-hn"]=e,3&f.t&&(c["s-sr"]=!0,c["s-cr"]=t,c["s-sn"]=f._||"",u=l&&l.h&&l.h[r],u&&u.j===f.j&&l.v&&L(l.v,!1)),c},L=(t,n)=>{a.t|=1;const l=t.childNodes;for(let s=l.length-1;s>=0;s--){const t=l[s];t["s-hn"]!==e&&t["s-ol"]&&(P(t).insertBefore(t,O(t)),t["s-ol"].remove(),t["s-ol"]=void 0,o=!0),n&&L(t,n)}a.t&=-2},M=(t,e,n,l,o,s)=>{let r,c=t["s-cr"]&&t["s-cr"].parentNode||t;for(;o<=s;++o)l[o]&&(r=R(null,n,o),r&&(l[o].v=r,c.insertBefore(r,O(e))))},k=(t,e,n,o,s)=>{for(;e<=n;++e)(o=t[e])&&(s=o.v,F(o),l=!0,s["s-ol"]?s["s-ol"].remove():L(s,!0),s.remove())},U=(t,e)=>t.j===e.j&&("slot"!==t.j||t._===e._),O=t=>t&&t["s-ol"]||t,P=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,T=(t,e)=>{const n=e.v=t.v,l=t.h,o=e.h,s=e.$;let r;null===s?("slot"===e.j||g(t,e,!1),null!==l&&null!==o?((t,e,n,l)=>{let o,s=0,r=0,c=e.length-1,i=e[0],a=e[c],u=l.length-1,f=l[0],m=l[u];for(;s<=c&&r<=u;)null==i?i=e[++s]:null==a?a=e[--c]:null==f?f=l[++r]:null==m?m=l[--u]:U(i,f)?(T(i,f),i=e[++s],f=l[++r]):U(a,m)?(T(a,m),a=e[--c],m=l[--u]):U(i,m)?("slot"!==i.j&&"slot"!==m.j||L(i.v.parentNode,!1),T(i,m),t.insertBefore(i.v,a.v.nextSibling),i=e[++s],m=l[--u]):U(a,f)?("slot"!==i.j&&"slot"!==m.j||L(a.v.parentNode,!1),T(a,f),t.insertBefore(a.v,i.v),a=e[--c],f=l[++r]):(o=R(e&&e[r],n,r),f=l[++r],o&&P(i.v).insertBefore(o,O(i.v)));s>c?M(t,null==l[u+1]?null:l[u+1].v,n,l,r,u):r>u&&k(e,s,c)})(n,l,e,o):null!==o?(null!==t.$&&(n.textContent=""),M(n,null,e,o,0,o.length-1)):null!==l&&k(l,0,l.length-1)):(r=n["s-cr"])?r.parentNode.textContent=s:t.$!==s&&(n.data=s)},x=t=>{let e,n,l,o,s,r,c=t.childNodes;for(n=0,l=c.length;n<l;n++)if(e=c[n],1===e.nodeType){if(e["s-sr"])for(s=e["s-sn"],e.hidden=!1,o=0;o<l;o++)if(c[o]["s-hn"]!==e["s-hn"])if(r=c[o].nodeType,""!==s){if(1===r&&s===c[o].getAttribute("slot")){e.hidden=!0;break}}else if(1===r||3===r&&""!==c[o].textContent.trim()){e.hidden=!0;break}x(e)}},A=[],C=t=>{let e,n,o,s,r,c,i=0,a=t.childNodes,u=a.length;for(;i<u;i++){if(e=a[i],e["s-sr"]&&(n=e["s-cr"]))for(o=n.parentNode.childNodes,s=e["s-sn"],c=o.length-1;c>=0;c--)n=o[c],n["s-cn"]||n["s-nr"]||n["s-hn"]===e["s-hn"]||(E(n,s)?(r=A.find(t=>t.g===n),l=!0,n["s-sn"]=n["s-sn"]||s,r?r.R=e:A.push({R:e,g:n}),n["s-sr"]&&A.map(t=>{E(t.g,n["s-sn"])&&(r=A.find(t=>t.g===n),r&&!t.R&&(t.R=r.R))})):A.some(t=>t.g===n)||A.push({g:n}));1===e.nodeType&&C(e)}},E=(t,e)=>1===t.nodeType?null===t.getAttribute("slot")&&""===e||t.getAttribute("slot")===e:t["s-sn"]===e||""===e,F=t=>{t.p&&t.p.ref&&t.p.ref(null),t.h&&t.h.map(F)},H=t=>Y(t).L,N=(t,e,n)=>{const l=H(t);return{emit:t=>W(l,e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t})}},W=(t,e,n)=>{const l=new CustomEvent(e,n);return t.dispatchEvent(l),l},q=(t,e)=>{e&&!t.M&&e["s-p"].push(new Promise(e=>t.M=e))},B=(t,e)=>{if(t.t|=16,4&t.t)return void(t.t|=512);const n=t.s,l=()=>D(t,n);let o;return q(t,t.k),e&&(t.t|=256,t.u&&(t.u.map(([t,e])=>I(n,t,e)),t.u=null),o=I(n,"componentWillLoad")),J(o,()=>ft(l))},D=(s,r)=>{const c=s.L,u=c["s-rc"];((s,r)=>{const c=s.L,u=s.U,f=s.O||y(null,null),m=(t=>t&&t.j===w)(r)?r:h(null,null,r);if(e=c.tagName,m.j=null,m.t|=4,s.O=m,m.v=f.v=c,t=c["s-cr"],n=0!=(1&u.t),l=!1,T(f,m),a.t|=1,o){let t,e,n,l,o,s;C(m.v);let r=0;for(;r<A.length;r++)t=A[r],e=t.g,e["s-ol"]||(n=i.createTextNode(""),n["s-nr"]=e,e.parentNode.insertBefore(e["s-ol"]=n,e));for(r=0;r<A.length;r++)if(t=A[r],e=t.g,t.R){for(l=t.R.parentNode,o=t.R.nextSibling,n=e["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===e["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==e.parentNode||e.nextSibling!==o)&&e!==o&&(!e["s-hn"]&&e["s-ol"]&&(e["s-hn"]=e["s-ol"].parentNode.nodeName),l.insertBefore(e,o))}else 1===e.nodeType&&(e.hidden=!0)}l&&x(m.v),a.t&=-2,A.length=0})(s,V(r)),s.t&=-17,s.t|=2,u&&(u.map(t=>t()),c["s-rc"]=void 0);{const t=c["s-p"],e=()=>z(s);0===t.length?e():(Promise.all(t).then(e),s.t|=4,t.length=0)}},V=t=>{try{t=t.render()}catch(e){nt(e)}return t},z=t=>{const e=t.L,n=t.s,l=t.k;64&t.t||(t.t|=64,K(e),I(n,"componentDidLoad"),t.P(e),l||G()),t.M&&(t.M(),t.M=void 0),512&t.t&&ut(()=>B(t,!1)),t.t&=-517},G=()=>{K(i.documentElement),ut(()=>W(r,"appload",{detail:{namespace:"mortar"}}))},I=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(l){nt(l)}},J=(t,e)=>t&&t.then?t.then(e):e(),K=t=>t.classList.add("hydrated"),Q=(t,e,n)=>{if(e.T){t.watchers&&(e.A=t.watchers);const l=Object.entries(e.T),o=t.prototype;if(l.map(([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,t,{get(){return((t,e)=>Y(this).C.get(e))(0,t)},set(n){((t,e,n,l)=>{const o=Y(this),s=o.C.get(e),r=o.t,c=o.s;if(n=((t,e)=>null==t||b(t)?t:4&e?"false"!==t&&(""===t||!!t):2&e?parseFloat(t):1&e?t+"":t)(n,l.T[e][0]),!(8&r&&void 0!==s||n===s)&&(o.C.set(e,n),c)){if(l.A&&128&r){const t=l.A[e];t&&t.map(t=>{try{c[t](n,s,e)}catch(l){nt(l)}})}2==(18&r)&&B(o,!1)}})(0,t,n,e)},configurable:!0,enumerable:!0})}),1&n){const e=new Map;o.attributeChangedCallback=function(t,n,l){a.jmp(()=>{const n=e.get(t);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},t.observedAttributes=l.filter(([t,e])=>15&e[0]).map(([t,n])=>{const l=n[1]||t;return e.set(l,t),l})}}return t},S=(t,e={})=>{const n=[],l=e.exclude||[],o=r.customElements,s=i.head,c=s.querySelector("meta[charset]"),u=i.createElement("style"),m=[];let $,d=!0;Object.assign(a,e),a.l=new URL(e.resourcesUrl||"./",i.baseURI).href,t.map(t=>t[1].map(e=>{const s={t:e[0],F:e[1],T:e[2],H:e[3]};s.T=e[2],s.H=e[3],s.A={};const r=s.F,c=class extends HTMLElement{constructor(t){super(t),tt(t=this,s)}connectedCallback(){$&&(clearTimeout($),$=null),d?m.push(this):a.jmp(()=>(t=>{if(0==(1&a.t)){const e=Y(t),n=e.U,l=()=>{};if(1&e.t)f(t,e,n.H);else{e.t|=1,12&n.t&&(t=>{const e=t["s-cr"]=i.createComment("");e["s-cn"]=!0,t.insertBefore(e,t.firstChild)})(t);{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){q(e,e.k=n);break}}n.T&&Object.entries(n.T).map(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),(async(t,e,n,l,o)=>{if(0==(32&e.t)){e.t|=32;{if((o=ot(n)).then){const t=()=>{};o=await o,t()}o.isProxied||(n.A=o.watchers,Q(o,n,2),o.isProxied=!0);const t=()=>{};e.t|=8;try{new o(e)}catch(c){nt(c)}e.t&=-9,e.t|=128,t()}}const s=e.k,r=()=>B(e,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(0,e,n)}l()}})(this))}disconnectedCallback(){a.jmp(()=>(()=>{if(0==(1&a.t)){const t=Y(this);t.o&&(t.o.map(t=>t()),t.o=void 0)}})())}forceUpdate(){(()=>{{const t=Y(this);t.L.isConnected&&2==(18&t.t)&&B(t,!1)}})()}componentOnReady(){return Y(this).N}};s.W=t[0],l.includes(r)||o.get(r)||(n.push(r),o.define(r,Q(c,s,1)))})),u.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",u.setAttribute("data-styles",""),s.insertBefore(u,c?c.nextSibling:s.firstChild),d=!1,m.length?m.map(t=>t.connectedCallback()):a.jmp(()=>$=setTimeout(G,30))},X=new WeakMap,Y=t=>X.get(t),Z=(t,e)=>X.set(e.s=t,e),tt=(t,e)=>{const n={t:0,L:t,U:e,C:new Map};return n.N=new Promise(t=>n.P=t),t["s-p"]=[],t["s-rc"]=[],f(t,n,e.H),X.set(t,n)},et=(t,e)=>e in t,nt=t=>console.error(t),lt=new Map,ot=t=>{const e=t.F.replace(/-/g,"_"),n=t.W,l=lt.get(n);return l?l[e]:__sc_import_mortar(`./${n}.entry.js`).then(t=>(lt.set(n,t),t[e]),nt)},st=[],rt=[],ct=(t,e)=>n=>{t.push(n),s||(s=!0,e&&4&a.t?ut(at):a.raf(at))},it=t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){nt(e)}t.length=0},at=()=>{it(st),it(rt),(s=st.length>0)&&a.raf(at)},ut=t=>u().then(t),ft=ct(rt,!0),mt=()=>c&&c.supports&&c.supports("color","var(--c)")?u():__sc_import_mortar("./p-69b85284.js").then(()=>(a.q=r.__cssshim)?(!1).i():0),$t=()=>{a.q=r.__cssshim;const t=Array.from(i.querySelectorAll("script")).find(t=>/\/mortar(\.esm)?\.js($|\?|#)/.test(t.src)||"mortar"===t.getAttribute("data-stencil-namespace")),e=t["data-opts"]||{};return"onbeforeload"in t&&!history.scrollRestoration?{then(){}}:(e.resourcesUrl=new URL(".",new URL(t.getAttribute("data-resources-url")||t.src,r.location.href)).href,dt(e.resourcesUrl,t),r.customElements?u(e):__sc_import_mortar("./p-2347dcb6.js").then(()=>e))},dt=(t,e)=>{try{r.__sc_import_mortar=Function("w",`return import(w);//${Math.random()}`)}catch(n){const l=new Map;r.__sc_import_mortar=n=>{const o=new URL(n,t).href;let s=l.get(o);if(!s){const t=i.createElement("script");t.type="module",t.crossOrigin=e.crossOrigin,t.src=URL.createObjectURL(new Blob([`import * as m from '${o}'; window.__sc_import_mortar.m = m;`],{type:"application/javascript"})),s=new Promise(e=>{t.onload=()=>{e(r.__sc_import_mortar.m),t.remove()}}),l.set(o,s),i.head.appendChild(t)}return s}}};export{w as H,mt as a,S as b,N as c,H as g,h,$t as p,Z as r}