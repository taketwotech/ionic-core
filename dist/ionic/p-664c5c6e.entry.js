import{r as t,e as o,i as n,h as r,H as e}from"./p-3df3e749.js";import{c as i,o as s}from"./p-21bf1337.js";import{b as a}from"./p-125156f2.js";import{o as c,c as h}from"./p-11181cdf.js";const u=class{constructor(n){t(this,n),this.ionRouteDataChanged=o(this,"ionRouteDataChanged",7),this.url=""}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,o){if(t===o)return;const n=t?Object.keys(t):[],r=o?Object.keys(o):[];if(n.length===r.length){for(const e of n)if(t[e]!==o[e])return void this.onUpdate(t)}else this.onUpdate(t)}connectedCallback(){this.ionRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}},l=class{constructor(n){t(this,n),this.ionRouteRedirectChanged=o(this,"ionRouteRedirectChanged",7)}propDidChange(){this.ionRouteRedirectChanged.emit()}connectedCallback(){this.ionRouteRedirectChanged.emit()}static get watchers(){return{from:["propDidChange"],to:["propDidChange"]}}},f=t=>"/"+t.filter((t=>t.length>0)).join("/"),d=t=>{let o,n=[""];if(null!=t){const r=t.indexOf("?");r>-1&&(o=t.substr(r+1),t=t.substr(0,r)),n=t.split("/").map((t=>t.trim())).filter((t=>t.length>0)),0===n.length&&(n=[""])}return{segments:n,queryString:o}},w=async(t,o,n,r,e=!1,s)=>{try{const a=m(t);if(r>=o.length||!a)return e;await new Promise((t=>i(a,t)));const c=o[r],h=await a.setRouteId(c.id,c.params,n,s);return h.changed&&(n="root",e=!0),e=await w(h.element,o,n,r+1,e,s),h.markVisible&&await h.markVisible(),e}catch(a){return console.error(a),!1}},p=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",m=t=>{if(!t)return;if(t.matches(p))return t;const o=t.querySelector(p);return null!=o?o:void 0},b=(t,o)=>o.find((o=>((t,o)=>{const{from:n,to:r}=o;if(void 0===r)return!1;if(n.length>t.length)return!1;for(let e=0;e<n.length;e++){const o=n[e];if("*"===o)return!0;if(o!==t[e])return!1}return n.length===t.length})(t,o))),g=(t,o)=>{const n=Math.min(t.length,o.length);let r=0;for(let e=0;e<n;e++){const n=t[e],i=o[e];if(n.id.toLowerCase()!==i.id)break;if(n.params){const t=Object.keys(n.params);if(t.length===i.path.length){const o=t.map((t=>`:${t}`));for(let t=0;t<o.length&&o[t].toLowerCase()===i.path[t];t++)r++}}r++}return r},y=(t,o)=>{const n=new j(t);let r,e=!1;for(let i=0;i<o.length;i++){const t=o[i].path;if(""===t[0])e=!0;else{for(const o of t){const t=n.next();if(":"===o[0]){if(""===t)return null;r=r||[],(r[i]||(r[i]={}))[o.slice(1)]=t}else if(t!==o)return null}e=!1}}return e&&e!==(""===n.next())?null:r?o.map(((t,o)=>({id:t.id,path:t.path,params:v(t.params,r[o]),beforeEnter:t.beforeEnter,beforeLeave:t.beforeLeave}))):o},v=(t,o)=>t||o?Object.assign(Object.assign({},t),o):void 0,R=(t,o)=>{let n=null,r=0;for(const e of o){const o=y(t,e);if(null!==o){const t=C(o);t>r&&(r=t,n=o)}}return n},C=t=>{let o=1,n=1;for(const r of t)for(const t of r.path)":"===t[0]?o+=Math.pow(1,n):""!==t&&(o+=Math.pow(2,n)),n++;return o};class j{constructor(t){this.path=t.slice()}next(){return this.path.length>0?this.path.shift():""}}const k=(t,o)=>o in t?t[o]:t.hasAttribute(o)?t.getAttribute(o):null,O=t=>Array.from(t.children).filter((t=>"ION-ROUTE-REDIRECT"===t.tagName)).map((t=>{const o=k(t,"to");return{from:d(k(t,"from")).segments,to:null==o?void 0:d(o)}})),D=t=>P(E(t)),E=t=>Array.from(t.children).filter((t=>"ION-ROUTE"===t.tagName&&t.component)).map((t=>{const o=k(t,"component");return{path:d(k(t,"url")).segments,id:o.toLowerCase(),params:t.componentProps,beforeLeave:t.beforeLeave,beforeEnter:t.beforeEnter,children:E(t)}})),P=t=>{const o=[];for(const n of t)L([],o,n);return o},L=(t,o,n)=>{if((t=t.slice()).push({id:n.id,path:n.path,params:n.params,beforeLeave:n.beforeLeave,beforeEnter:n.beforeEnter}),0!==n.children.length)for(const r of n.children)L(t,o,r);else o.push(t)},U=class{constructor(n){t(this,n),this.ionRouteWillChange=o(this,"ionRouteWillChange",7),this.ionRouteDidChange=o(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}async componentWillLoad(){await(m(document.body)?Promise.resolve():new Promise((t=>{window.addEventListener("ionNavWillLoad",t,{once:!0})})));const t=await this.runGuards(this.getPath());if(!0!==t){if("object"==typeof t){const{redirect:o}=t,n=d(o);this.setPath(n.segments,"root",n.queryString),await this.writeNavStateRoot(n.segments,"root")}}else await this.onRoutesChanged()}componentDidLoad(){window.addEventListener("ionRouteRedirectChanged",s(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",s(this.onRoutesChanged.bind(this),100))}async onPopState(){const t=this.historyDirection();let o=this.getPath();const n=await this.runGuards(o);if(!0!==n){if("object"!=typeof n)return!1;o=d(n.redirect).segments}return this.writeNavStateRoot(o,t)}onBackButton(t){t.detail.register(0,(t=>{this.back(),t()}))}async canTransition(){const t=await this.runGuards();return!0===t||"object"==typeof t&&t.redirect}async push(t,o="forward",n){t.startsWith(".")&&(t=new URL(t,window.location.href).pathname);let r=d(t);const e=await this.runGuards(r.segments);if(!0!==e){if("object"!=typeof e)return!1;r=d(e.redirect)}return this.setPath(r.segments,o,r.queryString),this.writeNavStateRoot(r.segments,o,n)}back(){return window.history.back(),Promise.resolve(this.waitPromise)}async printDebug(){(t=>{console.group(`[ion-core] ROUTES[${t.length}]`);for(const o of t){const t=[];o.forEach((o=>t.push(...o.path)));const n=o.map((t=>t.id));console.debug(`%c ${f(t)}`,"font-weight: bold; padding-left: 20px","=>\t",`(${n.join(", ")})`)}console.groupEnd()})(D(this.el)),(t=>{console.group(`[ion-core] REDIRECTS[${t.length}]`);for(const o of t)o.to&&console.debug("FROM: ",`$c ${f(o.from)}`,"font-weight: bold"," TO: ",`$c ${f(o.to.segments)}`,"font-weight: bold");console.groupEnd()})(O(this.el))}async navChanged(t){if(this.busy)return console.warn("[ion-router] router is busy, navChanged was cancelled"),!1;const{ids:o,outlet:n}=await(async()=>{const t=[];let o,n=window.document.body;for(;o=m(n),o;){const r=await o.getRouteId();if(!r)break;n=r.element,r.element=void 0,t.push(r)}return{ids:t,outlet:o}})(),r=((t,o)=>{let n=null,r=0;for(const e of o){const o=g(t,e);o>r&&(n=e,r=o)}return n?n.map(((o,n)=>({id:o.id,path:o.path,params:v(o.params,t[n]&&t[n].params)}))):null})(o,D(this.el));if(!r)return console.warn("[ion-router] no matching URL for ",o.map((t=>t.id))),!1;const e=(t=>{const o=[];for(const n of t)for(const t of n.path)if(":"===t[0]){const r=n.params&&n.params[t.slice(1)];if(!r)return null;o.push(r)}else""!==t&&o.push(t);return o})(r);return e?(this.setPath(e,t),await this.safeWriteNavState(n,r,"root",e,null,o.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)}onRedirectChanged(){const t=this.getPath();t&&b(t,O(this.el))&&this.writeNavStateRoot(t,"root")}onRoutesChanged(){return this.writeNavStateRoot(this.getPath(),"root")}historyDirection(){var t;const o=window;null===o.history.state&&(this.state++,o.history.replaceState(this.state,o.document.title,null===(t=o.document.location)||void 0===t?void 0:t.href));const n=o.history.state,r=this.lastState;return this.lastState=n,n>r||n>=r&&r>0?"forward":n<r?"back":"root"}async writeNavStateRoot(t,o,n){if(!t)return console.error("[ion-router] URL is not part of the routing set"),!1;const r=O(this.el),e=b(t,r);let i=null;if(e){const{segments:n,queryString:r}=e.to;this.setPath(n,o,r),i=e.from,t=n}const s=D(this.el),a=R(t,s);return a?this.safeWriteNavState(document.body,a,o,t,i,0,n):(console.error("[ion-router] the path does not match any route"),!1)}async safeWriteNavState(t,o,n,r,e,i=0,s){const a=await this.lock();let c=!1;try{c=await this.writeNavState(t,o,n,r,e,i,s)}catch(h){console.error(h)}return a(),c}async lock(){const t=this.waitPromise;let o;return this.waitPromise=new Promise((t=>o=t)),void 0!==t&&await t,o}async runGuards(t=this.getPath(),o){if(void 0===o&&(o=d(this.previousPath).segments),!t||!o)return!0;const n=D(this.el),r=R(o,n),e=r&&r[r.length-1].beforeLeave,i=!e||await e();if(!1===i||"object"==typeof i)return i;const s=R(t,n),a=s&&s[s.length-1].beforeEnter;return!a||a()}async writeNavState(t,o,n,r,e,i=0,s){if(this.busy)return console.warn("[ion-router] router is busy, transition was cancelled"),!1;this.busy=!0;const a=this.routeChangeEvent(r,e);a&&this.ionRouteWillChange.emit(a);const c=await w(t,o,n,i,!1,s);return this.busy=!1,a&&this.ionRouteDidChange.emit(a),c}setPath(t,o,n){this.state++,((t,o,n,r,e,i,s)=>{const a=((t,o,n)=>{let r=f(t);return o&&(r="#"+r),void 0!==n&&(r+="?"+n),r})([...d(o).segments,...r],n,s);"forward"===e?t.pushState(i,"",a):t.replaceState(i,"",a)})(window.history,this.root,this.useHash,t,o,this.state,n)}getPath(){return((t,o,n)=>{const r=d(this.root).segments,e=n?t.hash.slice(1):t.pathname;return((t,o)=>{if(t.length>o.length)return null;if(t.length<=1&&""===t[0])return o;for(let n=0;n<t.length;n++)if(t[n]!==o[n])return null;return o.length===t.length?[""]:o.slice(t.length)})(r,d(e).segments)})(window.location,0,this.useHash)}routeChangeEvent(t,o){const n=this.previousPath,r=f(t);return this.previousPath=r,r===n?null:{from:n,redirectedFrom:o?f(o):null,to:r}}get el(){return n(this)}},$=class{constructor(o){t(this,o),this.routerDirection="forward",this.onClick=t=>{c(this.href,t,this.routerDirection,this.routerAnimation)}}render(){const t=a(this),o={href:this.href,rel:this.rel,target:this.target};return r(e,{onClick:this.onClick,class:h(this.color,{[t]:!0,"ion-activatable":!0})},r("a",Object.assign({},o),r("slot",null)))}};$.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}";export{u as ion_route,l as ion_route_redirect,U as ion_router,$ as ion_router_link}