export{c as createAnimation}from"./animation-822d986b.js";export{iosTransitionAnimation}from"./ios.transition-7812dd37.js";export{mdTransitionAnimation}from"./md.transition-51c13987.js";export{g as getTimeGivenProgression}from"./cubic-bezier-eea9a7a9.js";export{createGesture}from"./index-34cb2743.js";export{g as getPlatforms,i as initialize,a as isPlatform}from"./ionic-global-63a97a32.js";import{a as addEventListener,r as raf,b as removeEventListener}from"./helpers-1457892a.js";export{c as componentOnReady}from"./helpers-1457892a.js";export{I as IonicSafeString}from"./index-9e3fe806.js";export{a as LIFECYCLE_DID_ENTER,c as LIFECYCLE_DID_LEAVE,L as LIFECYCLE_WILL_ENTER,b as LIFECYCLE_WILL_LEAVE,d as LIFECYCLE_WILL_UNLOAD}from"./index-a7711c1e.js";export{m as menuController}from"./index-1e16c550.js";export{b as actionSheetController,a as alertController,l as loadingController,m as modalController,p as pickerController,c as popoverController,t as toastController}from"./overlays-a62f858b.js";import"./gesture-controller-31cb6bb9.js";import"./index-7a8b7a1c.js";import"./hardware-back-button-4a6b37fb.js";var setupConfig=function(e){var i=window;var o=i.Ionic;if(o&&o.config&&o.config.constructor.name!=="Object"){return}i.Ionic=i.Ionic||{};i.Ionic.config=Object.assign(Object.assign({},i.Ionic.config),e);return i.Ionic.config};var getMode=function(){var e=window;var i=e&&e.Ionic&&e.Ionic.config;if(i){if(i.mode){return i.mode}else{return i.get("mode")}}return"md"};var setupSwiperInIonic=function(e,i){if(i===void 0){i=true}if(typeof window==="undefined"){return}var o=e.el;var t=o.closest(".ion-page");if(!t){if(i){var r=o.getRootNode();if(r.tagName==="DIV"){var a=new MutationObserver((function(i){var o=i[0];var t=o.oldValue===null;var s=r.classList.contains("ion-page");if(t&&s){a.disconnect();setupSwiperInIonic(e,false)}}));a.observe(r,{attributeFilter:["class"],attributeOldValue:true})}}return}var s=o.closest("ion-modal, ion-popover");if(s){var n=s.tagName==="ION-MODAL"?"ionModalWillPresent":"ionPopoverWillPresent";var l=function(){raf((function(){o.swiper.update();removeEventListener(s,n,l)}))};addEventListener(s,n,l)}else{var d=new MutationObserver((function(e){var i;var r=e[0];var a=(i=r.oldValue)===null||i===void 0?void 0:i.includes("ion-page-invisible");var s=t.classList.contains("ion-page-invisible");if(!s&&s!==a){o.swiper.update()}}));d.observe(t,{attributeFilter:["class"],attributeOldValue:true})}var c=function(){o.swiper.update();removeEventListener(window,"appload",c)};addEventListener(window,"appload",c)};var IonicSwiper={name:"ionic",on:{afterInit:function(e){console.warn("[Deprecation Warning]: The IonicSwiper module has been deprecated in favor of the IonSlides module. This change was made to better support the Swiper 7 release. The IonicSwiper module will be removed in Ionic 7.0. See https://ionicframework.com/docs/api/slides#migration for revised migration steps.");setupSwiperInIonic(e)}}};var IonicSlides=function(e){var i=e.swiper,o=e.extendParams;var t={effect:undefined,direction:"horizontal",initialSlide:0,loop:false,parallax:false,slidesPerView:1,spaceBetween:0,speed:300,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:false,slidesOffsetBefore:0,slidesOffsetAfter:0,touchEventsTarget:"container",autoplay:false,freeMode:false,freeModeMomentum:true,freeModeMomentumRatio:1,freeModeMomentumBounce:true,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:false,freeModeMinimumVelocity:.02,autoHeight:false,setWrapperSize:false,zoom:{maxRatio:3,minRatio:1,toggle:false},touchRatio:1,touchAngle:45,simulateTouch:true,touchStartPreventDefault:false,shortSwipes:true,longSwipes:true,longSwipesRatio:.5,longSwipesMs:300,followFinger:true,threshold:0,touchMoveStopPropagation:true,touchReleaseOnEdges:false,iOSEdgeSwipeDetection:false,iOSEdgeSwipeThreshold:20,resistance:true,resistanceRatio:.85,watchSlidesProgress:false,watchSlidesVisibility:false,preventClicks:true,preventClicksPropagation:true,slideToClickedSlide:false,loopAdditionalSlides:0,noSwiping:true,runCallbacksOnInit:true,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:true},flipEffect:{slideShadows:true,limitRotation:true},cubeEffect:{slideShadows:true,shadow:true,shadowOffset:20,shadowScale:.94},fadeEffect:{crossFade:false},a11y:{prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide"}};if(i.pagination){t.pagination={type:"bullets",clickable:false,hideOnClick:false}}if(i.scrollbar){t.scrollbar={hide:true}}o(t)};export{IonicSlides,IonicSwiper,getMode,setupConfig};