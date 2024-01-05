import{__spreadArray}from"tslib";var componentOnReady=function(e,a){if(e.componentOnReady){e.componentOnReady().then((function(e){return a(e)}))}else{raf((function(){return a(e)}))}};var inheritAttributes=function(e,a){if(a===void 0){a=[]}var r={};a.forEach((function(a){if(e.hasAttribute(a)){var i=e.getAttribute(a);if(i!==null){r[a]=e.getAttribute(a)}e.removeAttribute(a)}}));return r};var ariaAttributes=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"];var inheritAriaAttributes=function(e){return inheritAttributes(e,ariaAttributes)};var addEventListener=function(e,a,r,i){if(typeof window!=="undefined"){var t=window;var n=t&&t.Ionic&&t.Ionic.config;if(n){var o=n.get("_ael");if(o){return o(e,a,r,i)}else if(n._ael){return n._ael(e,a,r,i)}}}return e.addEventListener(a,r,i)};var removeEventListener=function(e,a,r,i){if(typeof window!=="undefined"){var t=window;var n=t&&t.Ionic&&t.Ionic.config;if(n){var o=n.get("_rel");if(o){return o(e,a,r,i)}else if(n._rel){return n._rel(e,a,r,i)}}}return e.removeEventListener(a,r,i)};var getElementRoot=function(e,a){if(a===void 0){a=e}return e.shadowRoot||a};var raf=function(e){if(typeof __zone_symbol__requestAnimationFrame==="function"){return __zone_symbol__requestAnimationFrame(e)}if(typeof requestAnimationFrame==="function"){return requestAnimationFrame(e)}return setTimeout(e)};var hasShadowDom=function(e){return!!e.shadowRoot&&!!e.attachShadow};var findItemLabel=function(e){var a=e.closest("ion-item");if(a){return a.querySelector("ion-label")}return null};var getAriaLabel=function(e,a){var r;var i=e.getAttribute("aria-labelledby");var t=e.id;var n=i!==null&&i.trim()!==""?i:a+"-lbl";var o=i!==null&&i.trim()!==""?document.getElementById(i):findItemLabel(e);if(o){if(i===null){o.id=n}r=o.textContent;o.setAttribute("aria-hidden","true")}else if(t.trim()!==""){o=document.querySelector('label[for="'+t+'"]');if(o){if(o.id!==""){n=o.id}else{o.id=n=t+"-lbl"}r=o.textContent}}return{label:o,labelId:n,labelText:r}};var renderHiddenInput=function(e,a,r,i,t){if(e||hasShadowDom(a)){var n=a.querySelector("input.aux-input");if(!n){n=a.ownerDocument.createElement("input");n.type="hidden";n.classList.add("aux-input");a.appendChild(n)}n.disabled=t;n.name=r;n.value=i||""}};var clamp=function(e,a,r){return Math.max(e,Math.min(a,r))};var assert=function(e,a){if(!e){var r="ASSERT: "+a;console.error(r);debugger;throw new Error(r)}};var now=function(e){return e.timeStamp||Date.now()};var pointerCoord=function(e){if(e){var a=e.changedTouches;if(a&&a.length>0){var r=a[0];return{x:r.clientX,y:r.clientY}}if(e.pageX!==undefined){return{x:e.pageX,y:e.pageY}}}return{x:0,y:0}};var isEndSide=function(e){var a=document.dir==="rtl";switch(e){case"start":return a;case"end":return!a;default:throw new Error('"'+e+'" is not a valid value for [side]. Use "start" or "end" instead.')}};var debounceEvent=function(e,a){var r=e._original||e;return{_original:e,emit:debounce(r.emit.bind(r),a)}};var debounce=function(e,a){if(a===void 0){a=0}var r;return function(){var i=[];for(var t=0;t<arguments.length;t++){i[t]=arguments[t]}clearTimeout(r);r=setTimeout.apply(void 0,__spreadArray([e,a],i))}};export{addEventListener as a,removeEventListener as b,componentOnReady as c,getAriaLabel as d,renderHiddenInput as e,debounceEvent as f,getElementRoot as g,inheritAttributes as h,inheritAriaAttributes as i,findItemLabel as j,clamp as k,hasShadowDom as l,assert as m,isEndSide as n,debounce as o,pointerCoord as p,now as q,raf as r};