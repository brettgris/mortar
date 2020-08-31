var n=function(n){for(var t=Array(n.length),r=0;r<n.length;++r)t[r]=n[r];return t},t=function(n){return Array.isArray(n)?n:[n]},r=function(n,t){var r=n.tabIndex-t.tabIndex;if(r){if(!n.tabIndex)return 1;if(!t.tabIndex)return-1}return r||n.index-t.index},u=function(t,u,o){return n(t).map((function(n,t){return{node:n,index:t,tabIndex:o&&-1===n.tabIndex?(n.dataset||{}).focusGuard?0:-1:n.tabIndex}})).filter((function(n){return!u||n.tabIndex>=0})).sort(r)};const o=["button:enabled:not([readonly])","select:enabled:not([readonly])","textarea:enabled:not([readonly])","input:enabled:not([readonly])","a[href]","area[href]","iframe","object","embed","[tabindex]","[contenteditable]","[autofocus]"];var e=o.join(","),i=e+", [data-focus-guard]",c=function(t,r){return t.reduce((function(t,u){return t.concat(n(u.querySelectorAll(r?i:e)),u.parentNode?n(u.parentNode.querySelectorAll(o.join(","))).filter((function(n){return n===u})):[])}),[])},f=function n(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return r.push(t),t.parentNode&&n(t.parentNode,r),r},a=function(n,t){for(var r=f(n),u=f(t),o=0;o<r.length;o+=1){var e=r[o];if(u.indexOf(e)>=0)return e}return!1},d=function(t){return n(t).filter((function(n){return function n(t){return!t||t===document||t.nodeType===Node.DOCUMENT_NODE||!((r=window.getComputedStyle(t,null))&&r.getPropertyValue&&("none"===r.getPropertyValue("display")||"hidden"===r.getPropertyValue("visibility")))&&n(t.parentNode);var r}(n)})).filter((function(n){return function(n){return!(("INPUT"===n.tagName||"BUTTON"===n.tagName)&&("hidden"===n.type||n.disabled))}(n)}))},l=function(n,t){return u(d(c(n,t)),!0,t)},v=function(n){return"INPUT"===n.tagName&&"radio"===n.type},m=function(n,t){return t.filter(v).filter((function(t){return t.name===n.name})).filter((function(n){return n.checked}))[0]||n},s=function(n,t){return n.length>1&&v(n[t])&&n[t].name?n.indexOf(m(n[t],n)):t},b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},y=function(r){return t(r).filter(Boolean).reduce((function(t,r){var u=r.getAttribute("data-focus-lock");return t.push.apply(t,u?function n(t){for(var r=t.length,u=0;u<r;u+=1)for(var o=function(r){if(u!==r&&t[u].contains(t[r]))return{v:n(t.filter((function(n){return n!==t[r]})))}},e=0;e<r;e+=1){var i=o(e);if("object"===(void 0===i?"undefined":b(i)))return i.v}return t}(n(function n(t){return t.parentNode?n(t.parentNode):t}(r).querySelectorAll('[data-focus-lock="'+u+'"]:not([data-focus-lock-disabled="disabled"])'))):[r]),t}),[])},h=function(n){return n&&n.dataset&&n.dataset.focusGuard},p=function(n){return!h(n)},g=function(r,o){var e=document&&document.activeElement,i=y(r).filter(p),f=function(n,r,u){var o=t(n),e=t(r),i=o[0],c=null;return e.filter(Boolean).forEach((function(n){c=a(c||n,n)||c,u.filter(Boolean).forEach((function(n){var t=a(i,n);t&&(c=!c||t.contains(c)?t:a(t,c))}))})),c}(e||r,r,i),b=l(i).filter((function(n){return p(n.node)}));if(b[0]||(b=(g=i,u(d(c(g)),!1)).filter((function(n){return p(n.node)})))[0]){var g,k,S,x,B,M=l([f]).map((function(n){return n.node})),T=(k=M,S=b,x=new Map,S.forEach((function(n){return x.set(n.node,n)})),k.map((function(n){return x.get(n)})).filter(Boolean)),N=T.map((function(n){return n.node})),w=function(n,t,r,u,o){var e,i=n.length,c=n[0],f=n[i-1],a=h(r);if(!(n.indexOf(r)>=0)){var d=t.indexOf(r),l=t.indexOf(u||d),b=n.indexOf(u),y=d-l,p=t.indexOf(c),g=t.indexOf(f),k=s(n,0),S=s(n,i-1);return-1===d||-1===b?n.indexOf((e=o&&o.length?o:n)[0]&&e.length>1&&v(e[0])&&e[0].name?m(e[0],e):e[0]):!y&&b>=0?b:d<=p&&a&&Math.abs(y)>1?S:d>=p&&a&&Math.abs(y)>1?k:y&&Math.abs(y)>1?b:d<=p?S:d>g?k:y?Math.abs(y)>1?b:(i+b+y)%i:void 0}}(N,M,e,o,N.filter((B=function(t){return t.reduce((function(t,r){return t.concat(function(t){return d((r=t.querySelectorAll("[data-autofocus-inside]"),n(r).map((function(n){return c([n])})).reduce((function(n,t){return n.concat(t)}),[])));var r}(r))}),[])}(i),function(n){return!!n.autofocus||n.dataset&&!!n.dataset.autofocus||B.indexOf(n)>=0})));return void 0===w?w:T[w]}},k=function(n){return n===document.activeElement},S=0,x=!1,B=0,M=null,T=function(){var t,r,u=!1;if(B){var o=B;document&&document.activeElement===document.body||document&&n(document.querySelectorAll("[data-no-focus-lock]")).some((function(n){return n.contains(document.activeElement)}))||(o&&(t=o,!(!(!(r=document&&document.activeElement)||r.dataset&&r.dataset.focusGuard)&&y(t).reduce((function(t,u){return t||u.contains(r)||function(t){return r=n(t.querySelectorAll("iframe")),u=k,!!r.filter((function(n){return n===u}))[0];var r,u}(u)}),!1)))&&(u=function(n){var t,r=g(n,M);if(!x&&r){if(S>2)return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),x=!0,void setTimeout((function(){x=!1}),1);S++,(t=r.node).focus(),t.contentWindow&&t.contentWindow.focus(),S--}}(o)),M=document.activeElement)}return u},N=[],w=function(n){return t=N.filter((function(n){return n})).slice(-1)[0],B=t,!!void(t&&T())&&(n&&n.preventDefault(),!0);var t},I={on:function(n){0===N.length&&document.addEventListener("focusin",w),N.indexOf(n)<0&&(N.push(n),w())},off:function(n){N=N.filter((function(t){return t!==n})),w(),0===N.length&&document.removeEventListener("focusin",w)}};export{I as f}