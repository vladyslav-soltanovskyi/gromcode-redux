!function(e){var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,r){if(!g[e]||!O[e])return;for(var t in O[e]=!1,r)Object.prototype.hasOwnProperty.call(r,t)&&(h[t]=r[t]);0==--b&&0===w&&D()}(e,t),r&&r(e,t)};var t,n=!0,o="0e23fd1095bb6ff1b2bb",i={},c=[],d=[];function a(e){var r=A[e];if(!r)return x;var n=function(n){return r.hot.active?(A[n]?-1===A[n].parents.indexOf(e)&&A[n].parents.push(e):(c=[e],t=n),-1===r.children.indexOf(n)&&r.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),c=[]),x(n)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return x[e]},set:function(r){x[e]=r}}};for(var i in x)Object.prototype.hasOwnProperty.call(x,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(n,i,o(i));return n.e=function(e){return"ready"===l&&s("prepare"),w++,x.e(e).then(r,(function(e){throw r(),e}));function r(){w--,"prepare"===l&&(E[e]||j(e),0===w&&0===b&&D())}},n.t=function(e,r){return 1&r&&(e=n(e)),x.t(e,-2&r)},n}function u(r){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:t!==r,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,l){case"idle":(h={})[r]=e[r],s("ready");break;case"ready":R(r);break;case"prepare":case"check":case"dispose":case"apply":(v=v||[]).push(r)}},check:m,apply:P,status:function(e){if(!e)return l;f.push(e)},addStatusHandler:function(e){f.push(e)},removeStatusHandler:function(e){var r=f.indexOf(e);r>=0&&f.splice(r,1)},data:i[r]};return t=void 0,n}var f=[],l="idle";function s(e){l=e;for(var r=0;r<f.length;r++)f[r].call(null,e)}var p,h,y,v,b=0,w=0,E={},O={},g={};function _(e){return+e+""===e?+e:e}function m(e){if("idle"!==l)throw new Error("check() is only allowed in idle status");return n=e,s("check"),(r=1e4,r=r||1e4,new Promise((function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var n=new XMLHttpRequest,i=x.p+""+o+".hot-update.json";n.open("GET",i,!0),n.timeout=r,n.send(null)}catch(e){return t(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)t(new Error("Manifest request to "+i+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)t(new Error("Manifest request to "+i+" failed."));else{try{var r=JSON.parse(n.responseText)}catch(e){return void t(e)}e(r)}}}))).then((function(e){if(!e)return s(I()?"ready":"idle"),null;O={},E={},g=e.c,y=e.h,s("prepare");var r=new Promise((function(e,r){p={resolve:e,reject:r}}));h={};return j(0),"prepare"===l&&0===w&&0===b&&D(),r}));var r}function j(e){g[e]?(O[e]=!0,b++,function(e){var r=document.createElement("script");r.charset="utf-8",r.src=x.p+""+e+"."+o+".hot-update.js",document.head.appendChild(r)}(e)):E[e]=!0}function D(){s("ready");var e=p;if(p=null,e)if(n)Promise.resolve().then((function(){return P(n)})).then((function(r){e.resolve(r)}),(function(r){e.reject(r)}));else{var r=[];for(var t in h)Object.prototype.hasOwnProperty.call(h,t)&&r.push(_(t));e.resolve(r)}}function P(r){if("ready"!==l)throw new Error("apply() is only allowed in ready status");return function r(n){var d,a,u,f,l;function p(e){for(var r=[e],t={},n=r.map((function(e){return{chain:[e],id:e}}));n.length>0;){var o=n.pop(),i=o.id,c=o.chain;if((f=A[i])&&(!f.hot._selfAccepted||f.hot._selfInvalidated)){if(f.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(f.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var d=0;d<f.parents.length;d++){var a=f.parents[d],u=A[a];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([a]),moduleId:i,parentId:a};-1===r.indexOf(a)&&(u.hot._acceptedDependencies[i]?(t[a]||(t[a]=[]),b(t[a],[i])):(delete t[a],r.push(a),n.push({chain:c.concat([a]),id:a})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:t}}function b(e,r){for(var t=0;t<r.length;t++){var n=r[t];-1===e.indexOf(n)&&e.push(n)}}I();var w={},E=[],O={},m=function(){console.warn("[HMR] unexpected require("+D.moduleId+") to disposed module")};for(var j in h)if(Object.prototype.hasOwnProperty.call(h,j)){var D;l=_(j),D=h[j]?p(l):{type:"disposed",moduleId:j};var P=!1,R=!1,S=!1,U="";switch(D.chain&&(U="\nUpdate propagation: "+D.chain.join(" -> ")),D.type){case"self-declined":n.onDeclined&&n.onDeclined(D),n.ignoreDeclined||(P=new Error("Aborted because of self decline: "+D.moduleId+U));break;case"declined":n.onDeclined&&n.onDeclined(D),n.ignoreDeclined||(P=new Error("Aborted because of declined dependency: "+D.moduleId+" in "+D.parentId+U));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(D),n.ignoreUnaccepted||(P=new Error("Aborted because "+l+" is not accepted"+U));break;case"accepted":n.onAccepted&&n.onAccepted(D),R=!0;break;case"disposed":n.onDisposed&&n.onDisposed(D),S=!0;break;default:throw new Error("Unexception type "+D.type)}if(P)return s("abort"),Promise.reject(P);if(R)for(l in O[l]=h[l],b(E,D.outdatedModules),D.outdatedDependencies)Object.prototype.hasOwnProperty.call(D.outdatedDependencies,l)&&(w[l]||(w[l]=[]),b(w[l],D.outdatedDependencies[l]));S&&(b(E,[D.moduleId]),O[l]=m)}var T,N=[];for(a=0;a<E.length;a++)l=E[a],A[l]&&A[l].hot._selfAccepted&&O[l]!==m&&!A[l].hot._selfInvalidated&&N.push({module:l,parents:A[l].parents.slice(),errorHandler:A[l].hot._selfAccepted});s("dispose"),Object.keys(g).forEach((function(e){!1===g[e]&&function(e){delete installedChunks[e]}(e)}));var k,H,M=E.slice();for(;M.length>0;)if(l=M.pop(),f=A[l]){var C={},G=f.hot._disposeHandlers;for(u=0;u<G.length;u++)(d=G[u])(C);for(i[l]=C,f.hot.active=!1,delete A[l],delete w[l],u=0;u<f.children.length;u++){var L=A[f.children[u]];L&&((T=L.parents.indexOf(l))>=0&&L.parents.splice(T,1))}}for(l in w)if(Object.prototype.hasOwnProperty.call(w,l)&&(f=A[l]))for(H=w[l],u=0;u<H.length;u++)k=H[u],(T=f.children.indexOf(k))>=0&&f.children.splice(T,1);s("apply"),void 0!==y&&(o=y,y=void 0);for(l in h=void 0,O)Object.prototype.hasOwnProperty.call(O,l)&&(e[l]=O[l]);var q=null;for(l in w)if(Object.prototype.hasOwnProperty.call(w,l)&&(f=A[l])){H=w[l];var B=[];for(a=0;a<H.length;a++)if(k=H[a],d=f.hot._acceptedDependencies[k]){if(-1!==B.indexOf(d))continue;B.push(d)}for(a=0;a<B.length;a++){d=B[a];try{d(H)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:l,dependencyId:H[a],error:e}),n.ignoreErrored||q||(q=e)}}}for(a=0;a<N.length;a++){var V=N[a];l=V.module,c=V.parents,t=l;try{x(l)}catch(e){if("function"==typeof V.errorHandler)try{V.errorHandler(e)}catch(r){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:r,originalError:e}),n.ignoreErrored||q||(q=r),q||(q=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:l,error:e}),n.ignoreErrored||q||(q=e)}}if(q)return s("fail"),Promise.reject(q);if(v)return r(n).then((function(e){return E.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e}));return s("idle"),new Promise((function(e){e(E)}))}(r=r||{})}function I(){if(v)return h||(h={}),v.forEach(R),v=void 0,!0}function R(r){Object.prototype.hasOwnProperty.call(h,r)||(h[r]=e[r])}var A={};function x(r){if(A[r])return A[r].exports;var t=A[r]={i:r,l:!1,exports:{},hot:u(r),parents:(d=c,c=[],d),children:[]};return e[r].call(t.exports,t,t.exports,a(r)),t.l=!0,t.exports}x.m=e,x.c=A,x.d=function(e,r,t){x.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},x.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},x.t=function(e,r){if(1&r&&(e=x(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(x.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)x.d(t,n,function(r){return e[r]}.bind(null,n));return t},x.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return x.d(r,"a",r),r},x.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},x.p="",x.h=function(){return o},a(0)(x.s=0)}([function(e,r,t){"use strict";function n(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}t.r(r);var o="function"==typeof Symbol&&Symbol.observable||"@@observable",i=function(){return Math.random().toString(36).substring(7).split("").join(".")},c={INIT:"@@redux/INIT"+i(),REPLACE:"@@redux/REPLACE"+i(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+i()}};function d(e){if("object"!=typeof e||null===e)return!1;for(var r=e;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(e)===r}function a(e,r,t){var i;if("function"==typeof r&&"function"==typeof t||"function"==typeof t&&"function"==typeof arguments[3])throw new Error(n(0));if("function"==typeof r&&void 0===t&&(t=r,r=void 0),void 0!==t){if("function"!=typeof t)throw new Error(n(1));return t(a)(e,r)}if("function"!=typeof e)throw new Error(n(2));var u=e,f=r,l=[],s=l,p=!1;function h(){s===l&&(s=l.slice())}function y(){if(p)throw new Error(n(3));return f}function v(e){if("function"!=typeof e)throw new Error(n(4));if(p)throw new Error(n(5));var r=!0;return h(),s.push(e),function(){if(r){if(p)throw new Error(n(6));r=!1,h();var t=s.indexOf(e);s.splice(t,1),l=null}}}function b(e){if(!d(e))throw new Error(n(7));if(void 0===e.type)throw new Error(n(8));if(p)throw new Error(n(9));try{p=!0,f=u(f,e)}finally{p=!1}for(var r=l=s,t=0;t<r.length;t++){(0,r[t])()}return e}function w(e){if("function"!=typeof e)throw new Error(n(10));u=e,b({type:c.REPLACE})}function E(){var e,r=v;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error(n(11));function t(){e.next&&e.next(y())}return t(),{unsubscribe:r(t)}}})[o]=function(){return this},e}return b({type:c.INIT}),(i={dispatch:b,subscribe:v,getState:y,replaceReducer:w})[o]=E,i}const u={products:[]};var f=a(function(e){for(var r=Object.keys(e),t={},o=0;o<r.length;o++){var i=r[o];0,"function"==typeof e[i]&&(t[i]=e[i])}var d,a=Object.keys(t);try{!function(e){Object.keys(e).forEach((function(r){var t=e[r];if(void 0===t(void 0,{type:c.INIT}))throw new Error(n(12));if(void 0===t(void 0,{type:c.PROBE_UNKNOWN_ACTION()}))throw new Error(n(13))}))}(t)}catch(e){d=e}return function(e,r){if(void 0===e&&(e={}),d)throw d;for(var o=!1,i={},c=0;c<a.length;c++){var u=a[c],f=t[u],l=e[u],s=f(l,r);if(void 0===s){r&&r.type;throw new Error(n(14))}i[u]=s,o=o||s!==l}return(o=o||a.length!==Object.keys(e).length)?i:e}}({language:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en",r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"LANGUAGE/SET_LANGUAGE":return r.payload.language;default:return e}},user:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"USER/SET_USER":return r.payload.userData;case"USER/REMOVE_USER":return null;default:return e}},cart:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"CART/ADD_PRODUCT":return{...e,products:[...e.products,r.payload.dataProduct]};case"CART/REMOVE_PRODUCT":return{...e,products:e.products.filter(e=>e.id!==r.payload.productId)};default:return e}}}));f.subscribe(()=>{console.log(f.getState())}),f.dispatch({type:"LANGUAGE/SET_LANGUAGE",payload:{language:"jp"}}),f.dispatch({type:"CART/ADD_PRODUCT",payload:{dataProduct:{id:76,name:"milk"}}}),f.dispatch({type:"CART/REMOVE_PRODUCT",payload:{productId:76}}),f.dispatch({type:"USER/SET_USER",payload:{userData:{name:"Bob"}}}),f.dispatch({type:"USER/REMOVE_USER"})}]);