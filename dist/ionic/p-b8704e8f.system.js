var __spreadArray=this&&this.__spreadArray||function(r,e){for(var a=0,i=e.length,t=r.length;a<i;a++,t++)r[t]=e[a];return r};System.register([],(function(r){"use strict";return{execute:function(){var e=r("c",(function(r,e){if(r.componentOnReady){r.componentOnReady().then((function(r){return e(r)}))}else{l((function(){return e(r)}))}}));var a=r("h",(function(r,e){if(e===void 0){e=[]}var a={};e.forEach((function(e){if(r.hasAttribute(e)){var i=r.getAttribute(e);if(i!==null){a[e]=r.getAttribute(e)}r.removeAttribute(e)}}));return a}));var i=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"];var t=r("i",(function(r){return a(r,i)}));var n=r("a",(function(r,e,a,i){if(typeof window!=="undefined"){var t=window;var n=t&&t.Ionic&&t.Ionic.config;if(n){var o=n.get("_ael");if(o){return o(r,e,a,i)}else if(n._ael){return n._ael(r,e,a,i)}}}return r.addEventListener(e,a,i)}));var o=r("b",(function(r,e,a,i){if(typeof window!=="undefined"){var t=window;var n=t&&t.Ionic&&t.Ionic.config;if(n){var o=n.get("_rel");if(o){return o(r,e,a,i)}else if(n._rel){return n._rel(r,e,a,i)}}}return r.removeEventListener(e,a,i)}));var u=r("g",(function(r,e){if(e===void 0){e=r}return r.shadowRoot||e}));var l=r("r",(function(r){if(typeof __zone_symbol__requestAnimationFrame==="function"){return __zone_symbol__requestAnimationFrame(r)}if(typeof requestAnimationFrame==="function"){return requestAnimationFrame(r)}return setTimeout(r)}));var d=r("l",(function(r){return!!r.shadowRoot&&!!r.attachShadow}));var c=r("j",(function(r){var e=r.closest("ion-item");if(e){return e.querySelector("ion-label")}return null}));var f=r("d",(function(r,e){var a;var i=r.getAttribute("aria-labelledby");var t=r.id;var n=i!==null&&i.trim()!==""?i:e+"-lbl";var o=i!==null&&i.trim()!==""?document.getElementById(i):c(r);if(o){if(i===null){o.id=n}a=o.textContent;o.setAttribute("aria-hidden","true")}else if(t.trim()!==""){o=document.querySelector('label[for="'+t+'"]');if(o){if(o.id!==""){n=o.id}else{o.id=n=t+"-lbl"}a=o.textContent}}return{label:o,labelId:n,labelText:a}}));var s=r("e",(function(r,e,a,i,t){if(r||d(e)){var n=e.querySelector("input.aux-input");if(!n){n=e.ownerDocument.createElement("input");n.type="hidden";n.classList.add("aux-input");e.appendChild(n)}n.disabled=t;n.name=a;n.value=i||""}}));var v=r("k",(function(r,e,a){return Math.max(r,Math.min(e,a))}));var m=r("m",(function(r,e){if(!r){var a="ASSERT: "+e;console.error(a);debugger;throw new Error(a)}}));var p=r("q",(function(r){return r.timeStamp||Date.now()}));var b=r("p",(function(r){if(r){var e=r.changedTouches;if(e&&e.length>0){var a=e[0];return{x:a.clientX,y:a.clientY}}if(r.pageX!==undefined){return{x:r.pageX,y:r.pageY}}}return{x:0,y:0}}));var h=r("n",(function(r){var e=document.dir==="rtl";switch(r){case"start":return e;case"end":return!e;default:throw new Error('"'+r+'" is not a valid value for [side]. Use "start" or "end" instead.')}}));var y=r("f",(function(r,e){var a=r._original||r;return{_original:r,emit:w(a.emit.bind(a),e)}}));var w=r("o",(function(r,e){if(e===void 0){e=0}var a;return function(){var i=[];for(var t=0;t<arguments.length;t++){i[t]=arguments[t]}clearTimeout(a);a=setTimeout.apply(void 0,__spreadArray([r,e],i))}}))}}}));