import{c as i,B as n}from"./p-3df3e749.js";import{c as e}from"./p-21bf1337.js";const a="ionViewWillEnter",o="ionViewDidEnter",s="ionViewWillLeave",t="ionViewDidLeave",r="ionViewWillUnload",c=n=>new Promise(((e,a)=>{i((()=>{p(n),w(n).then((i=>{i.animation&&i.animation.destroy(),l(n),e(i)}),(i=>{l(n),a(i)}))}))})),p=i=>{const n=i.enteringEl,e=i.leavingEl;E(n,e,i.direction),i.showGoBack?n.classList.add("can-go-back"):n.classList.remove("can-go-back"),P(n,!1),n.style.setProperty("pointer-events","none"),e&&(P(e,!1),e.style.setProperty("pointer-events","none"))},w=async i=>{const e=await d(i);return e&&n.isBrowser?v(e,i):m(i)},l=i=>{const n=i.enteringEl,e=i.leavingEl;n.classList.remove("ion-page-invisible"),n.style.removeProperty("pointer-events"),void 0!==e&&(e.classList.remove("ion-page-invisible"),e.style.removeProperty("pointer-events"))},d=async i=>{if(i.leavingEl&&i.animated&&0!==i.duration)return i.animationBuilder?i.animationBuilder:"ios"===i.mode?(await __sc_import_ionic("./p-436137b3.js")).iosTransitionAnimation:(await __sc_import_ionic("./p-b996402a.js")).mdTransitionAnimation},v=async(i,n)=>{await b(n,!0);const e=i(n.baseEl,n);g(n.enteringEl,n.leavingEl);const a=await f(e,n);return n.progressCallback&&n.progressCallback(void 0),a&&V(n.enteringEl,n.leavingEl),{hasCompleted:a,animation:e}},m=async i=>{const n=i.enteringEl,e=i.leavingEl;return await b(i,!1),g(n,e),V(n,e),{hasCompleted:!0}},b=async(i,n)=>{const e=(void 0!==i.deepWait?i.deepWait:n)?[h(i.enteringEl),h(i.leavingEl)]:[_(i.enteringEl),_(i.leavingEl)];await Promise.all(e),await u(i.viewIsReady,i.enteringEl)},u=async(i,n)=>{i&&await i(n)},f=(i,n)=>{const e=n.progressCallback,a=new Promise((n=>{i.onFinish((i=>n(1===i)))}));return e?(i.progressStart(!0),e(i)):i.play(),a},g=(i,n)=>{y(n,"ionViewWillLeave"),y(i,"ionViewWillEnter")},V=(i,n)=>{y(i,"ionViewDidEnter"),y(n,"ionViewDidLeave")},y=(i,n)=>{if(i){const e=new CustomEvent(n,{bubbles:!1,cancelable:!1});i.dispatchEvent(e)}},_=i=>i?new Promise((n=>e(i,n))):Promise.resolve(),h=async i=>{const n=i;if(n){if(null!=n.componentOnReady&&null!=await n.componentOnReady())return;await Promise.all(Array.from(n.children).map(h))}},P=(i,n)=>{n?(i.setAttribute("aria-hidden","true"),i.classList.add("ion-page-hidden")):(i.hidden=!1,i.removeAttribute("aria-hidden"),i.classList.remove("ion-page-hidden"))},E=(i,n,e)=>{void 0!==i&&(i.style.zIndex="back"===e?"99":"101"),void 0!==n&&(n.style.zIndex="100")},L=i=>{if(i.classList.contains("ion-page"))return i;return i.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||i};export{a as L,o as a,s as b,t as c,r as d,h as e,L as g,y as l,P as s,c as t}