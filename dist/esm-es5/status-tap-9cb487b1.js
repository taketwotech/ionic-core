import{__awaiter,__generator}from"tslib";import{f as readTask,c as writeTask}from"./index-7a8b7a1c.js";import{c as componentOnReady}from"./helpers-1457892a.js";var startStatusTap=function(){var t=window;t.addEventListener("statusTap",(function(){readTask((function(){var e=t.innerWidth;var r=t.innerHeight;var n=document.elementFromPoint(e/2,r/2);if(!n){return}var o=n.closest("ion-content");if(o){new Promise((function(t){return componentOnReady(o,t)})).then((function(){writeTask((function(){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:o.style.setProperty("--overflow","hidden");return[4,o.scrollToTop(300)];case 1:t.sent();o.style.removeProperty("--overflow");return[2]}}))}))}))}))}}))}))};export{startStatusTap};