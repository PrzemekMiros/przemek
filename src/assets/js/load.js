(function e(t,n){if(typeof exports==="object"&&typeof module==="object")module.exports=n();else if(typeof define==="function"&&define.amd)define([],n);else if(typeof exports==="object")exports["SwupProgressPlugin"]=n();else t["SwupProgressPlugin"]=n()})(window,function(){return function(e){var t={};function n(r){if(t[r]){return t[r].exports}var i=t[r]={i:r,l:false,exports:{}};e[r].call(i.exports,i,i.exports,n);i.l=true;return i.exports}n.m=e;n.c=t;n.d=function(e,t,r){if(!n.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:r})}};n.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};n.t=function(e,t){if(t&1)e=n(e);if(t&8)return e;if(t&4&&typeof e==="object"&&e&&e.__esModule)return e;var r=Object.create(null);n.r(r);Object.defineProperty(r,"default",{enumerable:true,value:e});if(t&2&&typeof e!="string")for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r};n.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};n.d(t,"a",t);return t};n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};n.p="";return n(n.s=0)}([function(e,t,n){"use strict";var r=n(1);var i=o(r);function o(e){return e&&e.__esModule?e:{default:e}}e.exports=i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e};var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();var o=n(2);var s=l(o);var a=n(3);var u=l(a);function l(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function c(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function h(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var d=function(e){h(t,e);function t(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};f(this,t);var n=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));n.name="SwupProgressPlugin";n.startShowingProgress=function(){n.progressBar.setValue(0);n.showProgressBarAfterDelay()};n.stopShowingProgress=function(){n.progressBar.setValue(1);if(n.options.hideImmediately){n.hideProgressBar()}else{n.finishAnimationAndHideProgressBar()}};n.showProgressBar=function(){n.cancelHideProgressBarTimeout();n.progressBar.show()};n.showProgressBarAfterDelay=function(){n.cancelShowProgressBarTimeout();n.cancelHideProgressBarTimeout();n.showProgressBarTimeout=window.setTimeout(n.showProgressBar,n.options.delay)};n.hideProgressBar=function(){n.cancelShowProgressBarTimeout();n.progressBar.hide()};n.finishAnimationAndHideProgressBar=function(){n.cancelShowProgressBarTimeout();n.hideProgressBarTimeout=window.setTimeout(n.hideProgressBar,n.options.transition)};n.cancelShowProgressBarTimeout=function(){window.clearTimeout(n.showProgressBarTimeout);delete n.showProgressBarTimeout};n.cancelHideProgressBarTimeout=function(){window.clearTimeout(n.hideProgressBarTimeout);delete n.hideProgressBarTimeout};var i={className:"swup-progress-bar",delay:300,transition:undefined,minValue:undefined,initialValue:undefined,hideImmediately:true};n.options=r({},i,e);n.showProgressBarTimeout=null;n.hideProgressBarTimeout=null;n.progressBar=new u.default({className:n.options.className,animationDuration:n.options.transition,minValue:n.options.minValue,initialValue:n.options.initialValue});return n}i(t,[{key:"mount",value:function e(){this.swup.on("transitionStart",this.startShowingProgress);this.swup.on("contentReplaced",this.stopShowingProgress)}},{key:"unmount",value:function e(){this.swup.off("transitionStart",this.startShowingProgress);this.swup.off("contentReplaced",this.stopShowingProgress)}}]);return t}(s.default);t.default=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();function i(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var o=function(){function e(){i(this,e);this.isSwupPlugin=true}r(e,[{key:"mount",value:function e(){}},{key:"unmount",value:function e(){}},{key:"_beforeMount",value:function e(){}},{key:"_afterUnmount",value:function e(){}}]);return e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();function i(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var o=function(){function e(){var t=this;var n=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},r=n.className,o=r===undefined?"progress-bar":r,s=n.styleAttr,a=s===undefined?"data-progressbar-styles":s,u=n.animationDuration,l=u===undefined?300:u,f=n.minValue,c=f===undefined?.1:f,h=n.initialValue,d=h===undefined?.25:h,m=n.trickleValue,p=m===undefined?.03:m;i(this,e);this.styleElement=null;this.progressElement=null;this.value=0;this.visible=false;this.hiding=false;this.trickleInterval=null;this.trickle=function(){var e=Math.random()*t.trickleValue;t.setValue(t.value+e)};this.className=o;this.styleAttr=a;this.animationDuration=l;this.minValue=c;this.initialValue=d;this.trickleValue=p;this.styleElement=this.createStyleElement();this.progressElement=this.createProgressElement()}r(e,[{key:"show",value:function e(){if(!this.visible){this.visible=true;this.installStyleElement();this.installProgressElement();this.startTrickling()}}},{key:"hide",value:function e(){var t=this;if(this.visible&&!this.hiding){this.hiding=true;this.fadeProgressElement(function(){t.uninstallProgressElement();t.stopTrickling();t.visible=false;t.hiding=false})}}},{key:"setValue",value:function e(t){this.value=Math.min(1,Math.max(this.minValue,t));this.refresh()}},{key:"installStyleElement",value:function e(){document.head.insertBefore(this.styleElement,document.head.firstChild)}},{key:"installProgressElement",value:function e(){this.progressElement.style.width="0%";this.progressElement.style.opacity="1";document.documentElement.insertBefore(this.progressElement,document.body);this.progressElement.scrollTop=0;this.setValue(Math.random()*this.initialValue)}},{key:"fadeProgressElement",value:function e(t){this.progressElement.style.opacity="0";setTimeout(t,this.animationDuration*1.5)}},{key:"uninstallProgressElement",value:function e(){if(this.progressElement.parentNode){document.documentElement.removeChild(this.progressElement)}}},{key:"startTrickling",value:function e(){if(!this.trickleInterval){this.trickleInterval=window.setInterval(this.trickle,this.animationDuration)}}},{key:"stopTrickling",value:function e(){window.clearInterval(this.trickleInterval);delete this.trickleInterval}},{key:"refresh",value:function e(){var t=this;requestAnimationFrame(function(){t.progressElement.style.width=t.value*100+"%"})}},{key:"createStyleElement",value:function e(){var t=document.createElement("style");t.setAttribute(this.styleAttr,"");t.textContent=this.defaultStyles;return t}},{key:"createProgressElement",value:function e(){var t=document.createElement("div");t.className=this.className;return t}},{key:"defaultStyles",get:function e(){return"\n\t\t."+this.className+" {\n\t\t\t\tposition: fixed;\n\t\t\t\tdisplay: block;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\theight: 3px;\n\t\t\t\tbackground-color: black;\n\t\t\t\tz-index: 9999;\n\t\t\t\ttransition:\n\t\t\t\t\twidth "+this.animationDuration+"ms ease-out,\n\t\t\t\t\topacity "+this.animationDuration/2+"ms "+this.animationDuration/2+"ms ease-in;\n\t\t\t\ttransform: translate3d(0, 0, 0);\n\t\t\t}\n\t\t"}}]);return e}();t.default=o}])});

(function e(t,n){if(typeof exports==="object"&&typeof module==="object")module.exports=n();else if(typeof define==="function"&&define.amd)define([],n);else if(typeof exports==="object")exports["SwupBodyClassPlugin"]=n();else t["SwupBodyClassPlugin"]=n()})(window,function(){return function(e){var t={};function n(r){if(t[r]){return t[r].exports}var o=t[r]={i:r,l:false,exports:{}};e[r].call(o.exports,o,o.exports,n);o.l=true;return o.exports}n.m=e;n.c=t;n.d=function(e,t,r){if(!n.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:r})}};n.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};n.t=function(e,t){if(t&1)e=n(e);if(t&8)return e;if(t&4&&typeof e==="object"&&e&&e.__esModule)return e;var r=Object.create(null);n.r(r);Object.defineProperty(r,"default",{enumerable:true,value:e});if(t&2&&typeof e!="string")for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r};n.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};n.d(t,"a",t);return t};n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};n.p="";return n(n.s=0)}([function(e,t,n){"use strict";var r=n(1);var o=u(r);function u(e){return e&&e.__esModule?e:{default:e}}e.exports=o.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e};var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();var u=n(2);var i=f(u);function f(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function l(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function c(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var s=function(e){c(t,e);function t(e){a(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));n.name="BodyClassPlugin";var o={prefix:""};n.options=r({},o,e);return n}o(t,[{key:"mount",value:function e(){var t=this;this.swup.on("contentReplaced",function(){var e=t.swup.cache.getCurrentPage();document.body.className.split(" ").forEach(function(e){if(t.isValidClassName(e)){document.body.classList.remove(e)}});if(e.pageClass!==""){e.pageClass.split(" ").forEach(function(e){if(t.isValidClassName(e)){document.body.classList.add(e)}})}})}},{key:"isValidClassName",value:function e(t){return t!==""&&t.indexOf(this.options.prefix)!==-1}}]);return t}(i.default);t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();function o(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var u=function(){function e(){o(this,e);this.isSwupPlugin=true}r(e,[{key:"mount",value:function e(){}},{key:"unmount",value:function e(){}}]);return e}();t.default=u}])});

(function e(t,r){if(typeof exports==="object"&&typeof module==="object")module.exports=r();else if(typeof define==="function"&&define.amd)define([],r);else if(typeof exports==="object")exports["SwupScriptsPlugin"]=r();else t["SwupScriptsPlugin"]=r()})(window,function(){return function(e){var t={};function r(n){if(t[n]){return t[n].exports}var o=t[n]={i:n,l:false,exports:{}};e[n].call(o.exports,o,o.exports,r);o.l=true;return o.exports}r.m=e;r.c=t;r.d=function(e,t,n){if(!r.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:n})}};r.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};r.t=function(e,t){if(t&1)e=r(e);if(t&8)return e;if(t&4&&typeof e==="object"&&e&&e.__esModule)return e;var n=Object.create(null);r.r(n);Object.defineProperty(n,"default",{enumerable:true,value:e});if(t&2&&typeof e!="string")for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n};r.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};r.d(t,"a",t);return t};r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};r.p="";return r(r.s=0)}([function(e,t,r){"use strict";var n=r(1);var o=u(n);function u(e){return e&&e.__esModule?e:{default:e}}e.exports=o.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e};var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();var u=r(2);var i=a(u);function a(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function c(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function l(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var s=function e(t){return Array.prototype.slice.call(t)};var p=function(e){l(t,e);function t(e){f(this,t);var r=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));r.name="ScriptsPlugin";r.runScripts=function(){var e=r.options.head&&r.options.body?document:r.options.head?document.head:document.body;var t=r.options.optin?"script[data-swup-reload-script]":"script:not([data-swup-ignore-script])";var n=s(e.querySelectorAll(t));n.forEach(function(e){return r.runScript(e)});r.swup.log("Executed "+n.length+" scripts.")};r.runScript=function(e){var t=document.createElement("script");var r=true;var n=false;var o=undefined;try{for(var u=s(e.attributes)[Symbol.iterator](),i;!(r=(i=u.next()).done);r=true){var a=i.value;var f=a.name,c=a.value;t.setAttribute(f,c)}}catch(e){n=true;o=e}finally{try{if(!r&&u.return){u.return()}}finally{if(n){throw o}}}t.textContent=e.textContent;t.setAttribute("async","false");e.replaceWith(t);return t};var o={head:true,body:true,optin:false};r.options=n({},o,e);return r}o(t,[{key:"mount",value:function e(){this.swup.on("contentReplaced",this.runScripts)}},{key:"unmount",value:function e(){this.swup.off("contentReplaced",this.runScripts)}}]);return t}(i.default);t.default=p},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();function o(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var u=function(){function e(){o(this,e);this.isSwupPlugin=true}n(e,[{key:"mount",value:function e(){}},{key:"unmount",value:function e(){}},{key:"_beforeMount",value:function e(){}},{key:"_afterUnmount",value:function e(){}}]);return e}();t.default=u}])});

if (window.matchMedia("(min-width: 767px)").matches) {
var VanillaTilt=function(){"use strict";class t{constructor(e,i={}){if(!(e instanceof Node))throw"Can't initialize VanillaTilt because "+e+" is not a Node.";this.width=null,this.height=null,this.clientWidth=null,this.clientHeight=null,this.left=null,this.top=null,this.gammazero=null,this.betazero=null,this.lastgammazero=null,this.lastbetazero=null,this.transitionTimeout=null,this.updateCall=null,this.event=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=e,this.settings=this.extendSettings(i),this.reverse=this.settings.reverse?-1:1,this.glare=t.isSettingTrue(this.settings.glare),this.glarePrerender=t.isSettingTrue(this.settings["glare-prerender"]),this.fullPageListening=t.isSettingTrue(this.settings["full-page-listening"]),this.gyroscope=t.isSettingTrue(this.settings.gyroscope),this.gyroscopeSamples=this.settings.gyroscopeSamples,this.elementListener=this.getElementListener(),this.glare&&this.prepareGlare(),this.fullPageListening&&this.updateClientSize(),this.addEventListeners(),this.reset(),this.updateInitialPosition()}static isSettingTrue(t){return""===t||!0===t||1===t}getElementListener(){if(this.fullPageListening)return window.document;if("string"==typeof this.settings["mouse-event-element"]){const t=document.querySelector(this.settings["mouse-event-element"]);if(t)return t}return this.settings["mouse-event-element"]instanceof Node?this.settings["mouse-event-element"]:this.element}addEventListeners(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResize.bind(this),this.onDeviceOrientationBind=this.onDeviceOrientation.bind(this),this.elementListener.addEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.addEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.addEventListener("mousemove",this.onMouseMoveBind),(this.glare||this.fullPageListening)&&window.addEventListener("resize",this.onWindowResizeBind),this.gyroscope&&window.addEventListener("deviceorientation",this.onDeviceOrientationBind)}removeEventListeners(){this.elementListener.removeEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.removeEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.removeEventListener("mousemove",this.onMouseMoveBind),this.gyroscope&&window.removeEventListener("deviceorientation",this.onDeviceOrientationBind),(this.glare||this.fullPageListening)&&window.removeEventListener("resize",this.onWindowResizeBind)}destroy(){clearTimeout(this.transitionTimeout),null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.reset(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null}onDeviceOrientation(t){if(null===t.gamma||null===t.beta)return;this.updateElementPosition(),this.gyroscopeSamples>0&&(this.lastgammazero=this.gammazero,this.lastbetazero=this.betazero,null===this.gammazero?(this.gammazero=t.gamma,this.betazero=t.beta):(this.gammazero=(t.gamma+this.lastgammazero)/2,this.betazero=(t.beta+this.lastbetazero)/2),this.gyroscopeSamples-=1);const e=this.settings.gyroscopeMaxAngleX-this.settings.gyroscopeMinAngleX,i=this.settings.gyroscopeMaxAngleY-this.settings.gyroscopeMinAngleY,s=e/this.width,n=i/this.height,l=(t.gamma-(this.settings.gyroscopeMinAngleX+this.gammazero))/s,a=(t.beta-(this.settings.gyroscopeMinAngleY+this.betazero))/n;null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event={clientX:l+this.left,clientY:a+this.top},this.updateCall=requestAnimationFrame(this.updateBind)}onMouseEnter(){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()}onMouseMove(t){null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.updateBind)}onMouseLeave(){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)}reset(){this.event={clientX:this.left+this.width/2,clientY:this.top+this.height/2},this.element&&this.element.style&&(this.element.style.transform=`perspective(${this.settings.perspective}px) `+"rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"),this.resetGlare()}resetGlare(){this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")}updateInitialPosition(){if(0===this.settings.startX&&0===this.settings.startY)return;this.onMouseEnter(),this.fullPageListening?this.event={clientX:(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.clientWidth,clientY:(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.clientHeight}:this.event={clientX:this.left+(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.width,clientY:this.top+(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.height};let t=this.settings.scale;this.settings.scale=1,this.update(),this.settings.scale=t,this.resetGlare()}getValues(){let t,e;return this.fullPageListening?(t=this.event.clientX/this.clientWidth,e=this.event.clientY/this.clientHeight):(t=(this.event.clientX-this.left)/this.width,e=(this.event.clientY-this.top)/this.height),t=Math.min(Math.max(t,0),1),e=Math.min(Math.max(e,0),1),{tiltX:(this.reverse*(this.settings.max-t*this.settings.max*2)).toFixed(2),tiltY:(this.reverse*(e*this.settings.max*2-this.settings.max)).toFixed(2),percentageX:100*t,percentageY:100*e,angle:Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI)}}updateElementPosition(){let t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top}update(){let t=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:t.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform=`rotate(${t.angle}deg) translate(-50%, -50%)`,this.glareElement.style.opacity=`${t.percentageY*this.settings["max-glare"]/100}`),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:t})),this.updateCall=null}prepareGlare(){if(!this.glarePrerender){const t=document.createElement("div");t.classList.add("js-tilt-glare");const e=document.createElement("div");e.classList.add("js-tilt-glare-inner"),t.appendChild(e),this.element.appendChild(t)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),this.glarePrerender||(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden","pointer-events":"none","border-radius":"inherit"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}),this.updateGlareSize())}updateGlareSize(){if(this.glare){const t=2*(this.element.offsetWidth>this.element.offsetHeight?this.element.offsetWidth:this.element.offsetHeight);Object.assign(this.glareElement.style,{width:`${t}px`,height:`${t}px`})}}updateClientSize(){this.clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}onWindowResize(){this.updateGlareSize(),this.updateClientSize()}setTransition(){clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition=`opacity ${this.settings.speed}ms ${this.settings.easing}`),this.transitionTimeout=setTimeout(()=>{this.element.style.transition="",this.glare&&(this.glareElement.style.transition="")},this.settings.speed)}extendSettings(t){let e={reverse:!1,max:15,startX:0,startY:0,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1,speed:300,transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,"full-page-listening":!1,"mouse-event-element":null,reset:!0,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45,gyroscopeSamples:10},i={};for(var s in e)if(s in t)i[s]=t[s];else if(this.element.hasAttribute("data-tilt-"+s)){let t=this.element.getAttribute("data-tilt-"+s);try{i[s]=JSON.parse(t)}catch(e){i[s]=t}}else i[s]=e[s];return i}static init(e,i){e instanceof Node&&(e=[e]),e instanceof NodeList&&(e=[].slice.call(e)),e instanceof Array&&e.forEach(e=>{"vanillaTilt"in e||(e.vanillaTilt=new t(e,i))})}}return"undefined"!=typeof document&&(window.VanillaTilt=t,t.init(document.querySelectorAll("[data-tilt]"))),t}();
};

class Grain {
  constructor(t) {
    this.patternSize = 150, this.patternScaleX = 1, this.patternScaleY = 1, this.patternRefreshInterval = 3, this.patternAlpha = 15, this.canvas = t, this.ctx = this.canvas.getContext("2d"), this.ctx.scale(this.patternScaleX, this.patternScaleY), this.patternCanvas = document.createElement("canvas"), this.patternCanvas.width = this.patternSize, this.patternCanvas.height = this.patternSize, this.patternCtx = this.patternCanvas.getContext("2d"), this.patternData = this.patternCtx.createImageData(this.patternSize, this.patternSize), this.patternPixelDataLength = this.patternSize * this.patternSize * 4, this.resize = this.resize.bind(this), this.loop = this.loop.bind(this), this.frame = 0, window.addEventListener("resize", this.resize), this.resize(), window.requestAnimationFrame(this.loop)
  }
  resize() {
    this.canvas.width = window.innerWidth * devicePixelRatio, this.canvas.height = window.innerHeight * devicePixelRatio
  }
  update() {
    let {
      patternPixelDataLength: t,
      patternData: e,
      patternAlpha: a,
      patternCtx: i
    } = this;
    for (let r = 0; r < t; r += 4) {
      let s = 255 * Math.random();
      e.data[r] = s, e.data[r + 1] = s, e.data[r + 2] = s, e.data[r + 3] = a
    }
    i.putImageData(e, 0, 0)
  }
  draw() {
    let {
      ctx: t,
      patternCanvas: e,
      canvas: a,
      viewHeight: i
    } = this, {
      width: r,
      height: s
    } = a;
    t.clearRect(0, 0, r, s), t.fillStyle = t.createPattern(e, "repeat"), t.fillRect(0, 0, r, s)
  }
  loop() {
    let t = ++this.frame % this.patternRefreshInterval == 0;
    t && (this.update(), this.draw()), window.requestAnimationFrame(this.loop)
  }
}
const el = document.querySelector(".grain"),
  grain = new Grain(el);


if (window.matchMedia("(min-width: 991px)").matches) {
  const cursor = document.querySelector('.bg-gradient-wrap');
  
  let mouseX = 0;
  let mouseY = 0;
  
  let cursorX = 0;
  let cursorY = 0;
  
  let speed = 0.15;
  
  function animate() {
      let distX = mouseX - cursorX;
      let distY = mouseY - cursorY;
  
      cursorX = cursorX + (distX * speed);
      cursorY = cursorY + (distY * speed);
  
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
  
      requestAnimationFrame(animate);
  }
  
  
  animate();
  
  document.addEventListener('mousemove', (event) => {
      mouseX = event.pageX;
      mouseY = event.pageY;
  });
  };

function accordionWrap() {
  let t = document.getElementsByClassName("accordion");
  for (let e = 0; e < t.length; e++) t[e].addEventListener("click", function () {
    let e = this.nextElementSibling;
    if (e.style.maxHeight) e.style.maxHeight = null, this.classList.remove("open");
    else {
      for (let a = 0; a < t.length; a++) t[a].classList.remove("open"), t[a].nextElementSibling.style.maxHeight = null;
      e.style.maxHeight = e.scrollHeight + "px", this.classList.toggle("open");
    }
  })
}

accordionWrap();  


function greetingsText () {
  const greeting = document.getElementById("greeting");
  const hour = new Date().getHours();
  const welcomeTypes = ["Dzień dobry", "Dobry wieczór"];
  let welcomeText = "";
  
  if ((hour < 18) && (hour > 4)) welcomeText = welcomeTypes[0];
  else welcomeText = welcomeTypes[1];
  
  greeting.innerHTML = welcomeText;
  }
  
greetingsText();

  
  function portfolioSlider() {
    let t = document.querySelector("[js-carousel-wrapper]"),
      e = document.querySelectorAll("[data-carousel-arrows]"),
      a = document.querySelectorAll("[js-data-dots]"),
      i = document.querySelector("[js-slide-number-text]"),
      r = 0;
  
    function s(t, e) {
      var a, s, n, l, o;
      let c = t.querySelectorAll("[js-carousel-item]"),
        h = t.querySelector(".next"),
        d = t.querySelector(".prev"),
        p, u;
      a = c, s = h, n = d, p = r >= a.length - 1, u = r <= 0, p ? s.setAttribute("disabled", "true") : s.removeAttribute("disabled"), u ? n.setAttribute("disabled", "true") : n.removeAttribute("disabled"), (l = c).forEach(t => {
          t.removeAttribute("data-active-slide")
        }), l[r].setAttribute("data-active-slide", !0), (o = e).forEach(t => {
          t.removeAttribute("data-active-dot")
        }), o[r].setAttribute("data-active-dot", !0),
        function t(e, a) {
          let i = e.length;
          a.textContent = `${r+1} / ${i}`
        }(c, i)
    }
  
    function n(e) {
      "next" === e ? (r++, s(t, a)) : (r--, s(t, a))
    }! function e(i) {
      i.forEach(e => {
        e.addEventListener("click", () => {
          var i;
          r = (i = parseInt(e.dataset.dotsIndex)) - 1, s(t, a)
        })
      })
    }(a),
    function t(e) {
      e.forEach(t => {
        t.addEventListener("click", () => {
          "next" === t.dataset.dir ? n("next") : n("prev")
        })
      })
    }(e), s(t, a)
  }
 portfolioSlider();
 
 if (window.matchMedia("(min-width: 767px)").matches) {
function tiltEffect() {
  VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 5,
    speed: 200,
    glare: true,
    "max-glare": 0.5,
    perspective: 1000
  });
}

tiltEffect();
};

function loadingScripts() {
  if (document.querySelector('.accordion')) {
    accordionWrap();  
  }
  
  if (document.querySelector('#greeting')) {
    greetingsText();
  }
  
  if (document.querySelector('.carousel-wrapper')) {
    portfolioSlider();
  }

  if (document.querySelector('.tilt-wrap') && window.matchMedia("(min-width: 767px)").matches) {
    tiltEffect();
  }
}

