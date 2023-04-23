!function(Q,Z){"object"==typeof exports&&typeof module<"u"?module.exports=Z():"function"==typeof define&&define.amd?define(Z):(Q=typeof globalThis<"u"?globalThis:Q||self).Cropper=Z()}(this,function(){"use strict";function Q(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);t&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable})),e.push.apply(e,i)}return e}function Z(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(e),!0).forEach(function(i){gi(a,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):Q(Object(e)).forEach(function(i){Object.defineProperty(a,i,Object.getOwnPropertyDescriptor(e,i))})}return a}function gt(a){return(gt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(a)}function pi(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function Bt(a,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(a,i.key,i)}}function gi(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function _t(a){return function mi(a){if(Array.isArray(a))return mt(a)}(a)||function vi(a){if(typeof Symbol<"u"&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(a)||function wi(a,t){if(a){if("string"==typeof a)return mt(a,t);var e=Object.prototype.toString.call(a).slice(8,-1);if("Object"===e&&a.constructor&&(e=a.constructor.name),"Map"===e||"Set"===e)return Array.from(a);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return mt(a,t)}}(a)||function bi(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function mt(a,t){(null==t||t>a.length)&&(t=a.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=a[e];return i}var lt=typeof window<"u"&&typeof window.document<"u",_=lt?window:{},vt=!(!lt||!_.document.documentElement)&&"ontouchstart"in _.document.documentElement,wt=!!lt&&"PointerEvent"in _,b="cropper",j="e",V="w",K="s",z="n",at="ne",rt="nw",nt="se",ot="sw",yt="".concat(b,"-crop"),Xt="".concat(b,"-disabled"),N="".concat(b,"-hidden"),zt="".concat(b,"-hide"),yi="".concat(b,"-invisible"),ft="".concat(b,"-modal"),xt="".concat(b,"-move"),st="".concat(b,"Action"),dt="".concat(b,"Preview"),Dt="crop",Et="crop",Mt="cropend",Tt="cropmove",Ct="cropstart",Ut="dblclick",jt=wt?"pointerdown":vt?"touchstart":"mousedown",Vt=wt?"pointermove":vt?"touchmove":"mousemove",Gt=wt?"pointerup pointercancel":vt?"touchend touchcancel":"mouseup",Ot="zoom",Qt="image/jpeg",Mi=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,Ti=/^data:/,Ci=/^data:image\/jpeg;base64,/,Oi=/^img|canvas$/i,Jt={viewMode:0,dragMode:Dt,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},Ai=Number.isNaN||_.isNaN;function u(a){return"number"==typeof a&&!Ai(a)}var ti=function(t){return t>0&&t<1/0};function Nt(a){return typeof a>"u"}function G(a){return"object"===gt(a)&&null!==a}var Ri=Object.prototype.hasOwnProperty;function J(a){if(!G(a))return!1;try{var t=a.constructor,e=t.prototype;return t&&e&&Ri.call(e,"isPrototypeOf")}catch{return!1}}function A(a){return"function"==typeof a}var Si=Array.prototype.slice;function ii(a){return Array.from?Array.from(a):Si.call(a)}function D(a,t){return a&&A(t)&&(Array.isArray(a)||u(a.length)?ii(a).forEach(function(e,i){t.call(a,e,i,a)}):G(a)&&Object.keys(a).forEach(function(e){t.call(a,a[e],e,a)})),a}var y=Object.assign||function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),o=1;o<e;o++)i[o-1]=arguments[o];return G(t)&&i.length>0&&i.forEach(function(r){G(r)&&Object.keys(r).forEach(function(n){t[n]=r[n]})}),t},Ii=/\.\d*(?:0|9){12}\d*$/;function tt(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e11;return Ii.test(a)?Math.round(a*t)/t:a}var Li=/^width|height|left|top|marginLeft|marginTop$/;function H(a,t){var e=a.style;D(t,function(i,o){Li.test(o)&&u(i)&&(i="".concat(i,"px")),e[o]=i})}function C(a,t){if(t){if(u(a.length))return void D(a,function(i){C(i,t)});if(a.classList)return void a.classList.add(t);var e=a.className.trim();e?e.indexOf(t)<0&&(a.className="".concat(e," ").concat(t)):a.className=t}}function k(a,t){if(t){if(u(a.length))return void D(a,function(e){k(e,t)});if(a.classList)return void a.classList.remove(t);a.className.indexOf(t)>=0&&(a.className=a.className.replace(t,""))}}function it(a,t,e){if(t){if(u(a.length))return void D(a,function(i){it(i,t,e)});e?C(a,t):k(a,t)}}var _i=/([a-z\d])([A-Z])/g;function At(a){return a.replace(_i,"$1-$2").toLowerCase()}function Rt(a,t){return G(a[t])?a[t]:a.dataset?a.dataset[t]:a.getAttribute("data-".concat(At(t)))}function ht(a,t,e){G(e)?a[t]=e:a.dataset?a.dataset[t]=e:a.setAttribute("data-".concat(At(t)),e)}var ei=/\s\s*/,ai=function(){var a=!1;if(lt){var t=!1,e=function(){},i=Object.defineProperty({},"once",{get:function(){return a=!0,t},set:function(r){t=r}});_.addEventListener("test",e,i),_.removeEventListener("test",e,i)}return a}();function B(a,t,e){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=e;t.trim().split(ei).forEach(function(r){if(!ai){var n=a.listeners;n&&n[r]&&n[r][e]&&(o=n[r][e],delete n[r][e],0===Object.keys(n[r]).length&&delete n[r],0===Object.keys(n).length&&delete a.listeners)}a.removeEventListener(r,o,i)})}function I(a,t,e){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=e;t.trim().split(ei).forEach(function(r){if(i.once&&!ai){var n=a.listeners,s=void 0===n?{}:n;o=function(){delete s[r][e],a.removeEventListener(r,o,i);for(var l=arguments.length,h=new Array(l),c=0;c<l;c++)h[c]=arguments[c];e.apply(a,h)},s[r]||(s[r]={}),s[r][e]&&a.removeEventListener(r,s[r][e],i),s[r][e]=o,a.listeners=s}a.addEventListener(r,o,i)})}function et(a,t,e){var i;return A(Event)&&A(CustomEvent)?i=new CustomEvent(t,{detail:e,bubbles:!0,cancelable:!0}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,e),a.dispatchEvent(i)}function ri(a){var t=a.getBoundingClientRect();return{left:t.left+(window.pageXOffset-document.documentElement.clientLeft),top:t.top+(window.pageYOffset-document.documentElement.clientTop)}}var St=_.location,Pi=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function ni(a){var t=a.match(Pi);return null!==t&&(t[1]!==St.protocol||t[2]!==St.hostname||t[3]!==St.port)}function oi(a){var t="timestamp=".concat((new Date).getTime());return a+(-1===a.indexOf("?")?"?":"&")+t}function ct(a){var t=a.rotate,e=a.scaleX,i=a.scaleY,o=a.translateX,r=a.translateY,n=[];u(o)&&0!==o&&n.push("translateX(".concat(o,"px)")),u(r)&&0!==r&&n.push("translateY(".concat(r,"px)")),u(t)&&0!==t&&n.push("rotate(".concat(t,"deg)")),u(e)&&1!==e&&n.push("scaleX(".concat(e,")")),u(i)&&1!==i&&n.push("scaleY(".concat(i,")"));var s=n.length?n.join(" "):"none";return{WebkitTransform:s,msTransform:s,transform:s}}function pt(a,t){var e=a.pageX,i=a.pageY,o={endX:e,endY:i};return t?o:Z({startX:e,startY:i},o)}function W(a){var t=a.aspectRatio,e=a.height,i=a.width,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"contain",r=ti(i),n=ti(e);if(r&&n){var s=e*t;"contain"===o&&s>i||"cover"===o&&s<i?e=i/t:i=e*t}else r?e=i/t:n&&(i=e*t);return{width:i,height:e}}function Hi(a,t,e,i){var o=t.aspectRatio,r=t.naturalWidth,n=t.naturalHeight,s=t.rotate,d=void 0===s?0:s,l=t.scaleX,h=void 0===l?1:l,c=t.scaleY,f=void 0===c?1:c,m=e.aspectRatio,g=e.naturalWidth,x=e.naturalHeight,v=i.fillColor,M=void 0===v?"transparent":v,O=i.imageSmoothingEnabled,E=void 0===O||O,Y=i.imageSmoothingQuality,S=void 0===Y?"low":Y,p=i.maxWidth,w=void 0===p?1/0:p,T=i.maxHeight,L=void 0===T?1/0:T,X=i.minWidth,$=void 0===X?0:X,q=i.minHeight,U=void 0===q?0:q,P=document.createElement("canvas"),R=P.getContext("2d"),F=W({aspectRatio:m,width:w,height:L}),ut=W({aspectRatio:m,width:$,height:U},"cover"),It=Math.min(F.width,Math.max(ut.width,g)),Lt=Math.min(F.height,Math.max(ut.height,x)),ci=W({aspectRatio:o,width:w,height:L}),li=W({aspectRatio:o,width:$,height:U},"cover"),fi=Math.min(ci.width,Math.max(li.width,r)),di=Math.min(ci.height,Math.max(li.height,n)),ie=[-fi/2,-di/2,fi,di];return P.width=tt(It),P.height=tt(Lt),R.fillStyle=M,R.fillRect(0,0,It,Lt),R.save(),R.translate(It/2,Lt/2),R.rotate(d*Math.PI/180),R.scale(h,f),R.imageSmoothingEnabled=E,R.imageSmoothingQuality=S,R.drawImage.apply(R,[a].concat(_t(ie.map(function(ee){return Math.floor(tt(ee))})))),R.restore(),P}var si=String.fromCharCode,Ui=/^data:.*,/;var qi={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,e=this.options,i=this.container,o=this.cropper,r=Number(e.minContainerWidth),n=Number(e.minContainerHeight);C(o,N),k(t,N);var s={width:Math.max(i.offsetWidth,r>=0?r:200),height:Math.max(i.offsetHeight,n>=0?n:100)};this.containerData=s,H(o,{width:s.width,height:s.height}),C(t,N),k(o,N)},initCanvas:function(){var t=this.containerData,e=this.imageData,i=this.options.viewMode,o=Math.abs(e.rotate)%180==90,r=o?e.naturalHeight:e.naturalWidth,n=o?e.naturalWidth:e.naturalHeight,s=r/n,d=t.width,l=t.height;t.height*s>t.width?3===i?d=t.height*s:l=t.width/s:3===i?l=t.width/s:d=t.height*s;var h={aspectRatio:s,naturalWidth:r,naturalHeight:n,width:d,height:l};this.canvasData=h,this.limited=1===i||2===i,this.limitCanvas(!0,!0),h.width=Math.min(Math.max(h.width,h.minWidth),h.maxWidth),h.height=Math.min(Math.max(h.height,h.minHeight),h.maxHeight),h.left=(t.width-h.width)/2,h.top=(t.height-h.height)/2,h.oldLeft=h.left,h.oldTop=h.top,this.initialCanvasData=y({},h)},limitCanvas:function(t,e){var i=this.options,o=this.containerData,r=this.canvasData,n=this.cropBoxData,s=i.viewMode,d=r.aspectRatio,l=this.cropped&&n;if(t){var h=Number(i.minCanvasWidth)||0,c=Number(i.minCanvasHeight)||0;s>1?(h=Math.max(h,o.width),c=Math.max(c,o.height),3===s&&(c*d>h?h=c*d:c=h/d)):s>0&&(h?h=Math.max(h,l?n.width:0):c?c=Math.max(c,l?n.height:0):l&&((c=n.height)*d>(h=n.width)?h=c*d:c=h/d));var f=W({aspectRatio:d,width:h,height:c});c=f.height,r.minWidth=h=f.width,r.minHeight=c,r.maxWidth=1/0,r.maxHeight=1/0}if(e)if(s>(l?0:1)){var m=o.width-r.width,g=o.height-r.height;r.minLeft=Math.min(0,m),r.minTop=Math.min(0,g),r.maxLeft=Math.max(0,m),r.maxTop=Math.max(0,g),l&&this.limited&&(r.minLeft=Math.min(n.left,n.left+(n.width-r.width)),r.minTop=Math.min(n.top,n.top+(n.height-r.height)),r.maxLeft=n.left,r.maxTop=n.top,2===s&&(r.width>=o.width&&(r.minLeft=Math.min(0,m),r.maxLeft=Math.max(0,m)),r.height>=o.height&&(r.minTop=Math.min(0,g),r.maxTop=Math.max(0,g))))}else r.minLeft=-r.width,r.minTop=-r.height,r.maxLeft=o.width,r.maxTop=o.height},renderCanvas:function(t,e){var i=this.canvasData,o=this.imageData;if(e){var r=function zi(a){var t=a.width,e=a.height,i=a.degree;if(90==(i=Math.abs(i)%180))return{width:e,height:t};var o=i%90*Math.PI/180,r=Math.sin(o),n=Math.cos(o),s=t*n+e*r,d=t*r+e*n;return i>90?{width:d,height:s}:{width:s,height:d}}({width:o.naturalWidth*Math.abs(o.scaleX||1),height:o.naturalHeight*Math.abs(o.scaleY||1),degree:o.rotate||0}),n=r.width,s=r.height,d=i.width*(n/i.naturalWidth),l=i.height*(s/i.naturalHeight);i.left-=(d-i.width)/2,i.top-=(l-i.height)/2,i.width=d,i.height=l,i.aspectRatio=n/s,i.naturalWidth=n,i.naturalHeight=s,this.limitCanvas(!0,!1)}(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCanvas(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,H(this.canvas,y({width:i.width,height:i.height},ct({translateX:i.left,translateY:i.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var e=this.canvasData,i=this.imageData,o=i.naturalWidth*(e.width/e.naturalWidth),r=i.naturalHeight*(e.height/e.naturalHeight);y(i,{width:o,height:r,left:(e.width-o)/2,top:(e.height-r)/2}),H(this.image,y({width:i.width,height:i.height},ct(y({translateX:i.left,translateY:i.top},i)))),t&&this.output()},initCropBox:function(){var t=this.options,e=this.canvasData,i=t.aspectRatio||t.initialAspectRatio,o=Number(t.autoCropArea)||.8,r={width:e.width,height:e.height};i&&(e.height*i>e.width?r.height=r.width/i:r.width=r.height*i),this.cropBoxData=r,this.limitCropBox(!0,!0),r.width=Math.min(Math.max(r.width,r.minWidth),r.maxWidth),r.height=Math.min(Math.max(r.height,r.minHeight),r.maxHeight),r.width=Math.max(r.minWidth,r.width*o),r.height=Math.max(r.minHeight,r.height*o),r.left=e.left+(e.width-r.width)/2,r.top=e.top+(e.height-r.height)/2,r.oldLeft=r.left,r.oldTop=r.top,this.initialCropBoxData=y({},r)},limitCropBox:function(t,e){var i=this.options,o=this.containerData,r=this.canvasData,n=this.cropBoxData,s=this.limited,d=i.aspectRatio;if(t){var l=Number(i.minCropBoxWidth)||0,h=Number(i.minCropBoxHeight)||0,c=s?Math.min(o.width,r.width,r.width+r.left,o.width-r.left):o.width,f=s?Math.min(o.height,r.height,r.height+r.top,o.height-r.top):o.height;l=Math.min(l,o.width),h=Math.min(h,o.height),d&&(l&&h?h*d>l?h=l/d:l=h*d:l?h=l/d:h&&(l=h*d),f*d>c?f=c/d:c=f*d),n.minWidth=Math.min(l,c),n.minHeight=Math.min(h,f),n.maxWidth=c,n.maxHeight=f}e&&(s?(n.minLeft=Math.max(0,r.left),n.minTop=Math.max(0,r.top),n.maxLeft=Math.min(o.width,r.left+r.width)-n.width,n.maxTop=Math.min(o.height,r.top+r.height)-n.height):(n.minLeft=0,n.minTop=0,n.maxLeft=o.width-n.width,n.maxTop=o.height-n.height))},renderCropBox:function(){var t=this.options,e=this.containerData,i=this.cropBoxData;(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCropBox(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,t.movable&&t.cropBoxMovable&&ht(this.face,st,i.width>=e.width&&i.height>=e.height?"move":"all"),H(this.cropBox,y({width:i.width,height:i.height},ct({translateX:i.left,translateY:i.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),et(this.element,Et,this.getData())}},Fi={initPreview:function(){var t=this.element,e=this.crossOrigin,i=this.options.preview,o=e?this.crossOriginUrl:this.url,r=t.alt||"The image to preview",n=document.createElement("img");if(e&&(n.crossOrigin=e),n.src=o,n.alt=r,this.viewBox.appendChild(n),this.viewBoxImage=n,i){var s=i;"string"==typeof i?s=t.ownerDocument.querySelectorAll(i):i.querySelector&&(s=[i]),this.previews=s,D(s,function(d){var l=document.createElement("img");ht(d,dt,{width:d.offsetWidth,height:d.offsetHeight,html:d.innerHTML}),e&&(l.crossOrigin=e),l.src=o,l.alt=r,l.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',d.innerHTML="",d.appendChild(l)})}},resetPreview:function(){D(this.previews,function(t){var e=Rt(t,dt);H(t,{width:e.width,height:e.height}),t.innerHTML=e.html,function ki(a,t){if(G(a[t]))try{delete a[t]}catch{a[t]=void 0}else if(a.dataset)try{delete a.dataset[t]}catch{a.dataset[t]=void 0}else a.removeAttribute("data-".concat(At(t)))}(t,dt)})},preview:function(){var t=this.imageData,e=this.canvasData,i=this.cropBoxData,o=i.width,r=i.height,n=t.width,s=t.height,d=i.left-e.left-t.left,l=i.top-e.top-t.top;!this.cropped||this.disabled||(H(this.viewBoxImage,y({width:n,height:s},ct(y({translateX:-d,translateY:-l},t)))),D(this.previews,function(h){var c=Rt(h,dt),f=c.width,m=c.height,g=f,x=m,v=1;o&&(x=r*(v=f/o)),r&&x>m&&(g=o*(v=m/r),x=m),H(h,{width:g,height:x}),H(h.getElementsByTagName("img")[0],y({width:n*v,height:s*v},ct(y({translateX:-d*v,translateY:-l*v},t))))}))}},Qi={bind:function(){var t=this.element,e=this.options,i=this.cropper;A(e.cropstart)&&I(t,Ct,e.cropstart),A(e.cropmove)&&I(t,Tt,e.cropmove),A(e.cropend)&&I(t,Mt,e.cropend),A(e.crop)&&I(t,Et,e.crop),A(e.zoom)&&I(t,Ot,e.zoom),I(i,jt,this.onCropStart=this.cropStart.bind(this)),e.zoomable&&e.zoomOnWheel&&I(i,"wheel",this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&I(i,Ut,this.onDblclick=this.dblclick.bind(this)),I(t.ownerDocument,Vt,this.onCropMove=this.cropMove.bind(this)),I(t.ownerDocument,Gt,this.onCropEnd=this.cropEnd.bind(this)),e.responsive&&I(window,"resize",this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,e=this.options,i=this.cropper;A(e.cropstart)&&B(t,Ct,e.cropstart),A(e.cropmove)&&B(t,Tt,e.cropmove),A(e.cropend)&&B(t,Mt,e.cropend),A(e.crop)&&B(t,Et,e.crop),A(e.zoom)&&B(t,Ot,e.zoom),B(i,jt,this.onCropStart),e.zoomable&&e.zoomOnWheel&&B(i,"wheel",this.onWheel,{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&B(i,Ut,this.onDblclick),B(t.ownerDocument,Vt,this.onCropMove),B(t.ownerDocument,Gt,this.onCropEnd),e.responsive&&B(window,"resize",this.onResize)}},Zi={resize:function(){if(!this.disabled){var s,d,t=this.options,e=this.container,i=this.containerData,o=e.offsetWidth/i.width,r=e.offsetHeight/i.height,n=Math.abs(o-1)>Math.abs(r-1)?o:r;1!==n&&(t.restore&&(s=this.getCanvasData(),d=this.getCropBoxData()),this.render(),t.restore&&(this.setCanvasData(D(s,function(l,h){s[h]=l*n})),this.setCropBoxData(D(d,function(l,h){d[h]=l*n}))))}},dblclick:function(){this.disabled||"none"===this.options.dragMode||this.setDragMode(function Bi(a,t){return a.classList?a.classList.contains(t):a.className.indexOf(t)>-1}(this.dragBox,yt)?"move":Dt)},wheel:function(t){var e=this,i=Number(this.options.wheelZoomRatio)||.1,o=1;this.disabled||(t.preventDefault(),!this.wheeling&&(this.wheeling=!0,setTimeout(function(){e.wheeling=!1},50),t.deltaY?o=t.deltaY>0?1:-1:t.wheelDelta?o=-t.wheelDelta/120:t.detail&&(o=t.detail>0?1:-1),this.zoom(-o*i,t)))},cropStart:function(t){var e=t.buttons,i=t.button;if(!(this.disabled||("mousedown"===t.type||"pointerdown"===t.type&&"mouse"===t.pointerType)&&(u(e)&&1!==e||u(i)&&0!==i||t.ctrlKey))){var n,o=this.options,r=this.pointers;t.changedTouches?D(t.changedTouches,function(s){r[s.identifier]=pt(s)}):r[t.pointerId||0]=pt(t),n=Object.keys(r).length>1&&o.zoomable&&o.zoomOnTouch?"zoom":Rt(t.target,st),Mi.test(n)&&!1!==et(this.element,Ct,{originalEvent:t,action:n})&&(t.preventDefault(),this.action=n,this.cropping=!1,"crop"===n&&(this.cropping=!0,C(this.dragBox,ft)))}},cropMove:function(t){var e=this.action;if(!this.disabled&&e){var i=this.pointers;t.preventDefault(),!1!==et(this.element,Tt,{originalEvent:t,action:e})&&(t.changedTouches?D(t.changedTouches,function(o){y(i[o.identifier]||{},pt(o,!0))}):y(i[t.pointerId||0]||{},pt(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var e=this.action,i=this.pointers;t.changedTouches?D(t.changedTouches,function(o){delete i[o.identifier]}):delete i[t.pointerId||0],e&&(t.preventDefault(),Object.keys(i).length||(this.action=""),this.cropping&&(this.cropping=!1,it(this.dragBox,ft,this.cropped&&this.options.modal)),et(this.element,Mt,{originalEvent:t,action:e}))}}},Ki={change:function(t){var Y,i=this.canvasData,o=this.containerData,r=this.cropBoxData,n=this.pointers,s=this.action,d=this.options.aspectRatio,l=r.left,h=r.top,c=r.width,f=r.height,m=l+c,g=h+f,x=0,v=0,M=o.width,O=o.height,E=!0;!d&&t.shiftKey&&(d=c&&f?c/f:1),this.limited&&(v=r.minTop,M=(x=r.minLeft)+Math.min(o.width,i.width,i.left+i.width),O=v+Math.min(o.height,i.height,i.top+i.height));var S=n[Object.keys(n)[0]],p={x:S.endX-S.startX,y:S.endY-S.startY},w=function(L){switch(L){case j:m+p.x>M&&(p.x=M-m);break;case V:l+p.x<x&&(p.x=x-l);break;case z:h+p.y<v&&(p.y=v-h);break;case K:g+p.y>O&&(p.y=O-g)}};switch(s){case"all":l+=p.x,h+=p.y;break;case j:if(p.x>=0&&(m>=M||d&&(h<=v||g>=O))){E=!1;break}w(j),(c+=p.x)<0&&(s=V,l-=c=-c),d&&(h+=(r.height-(f=c/d))/2);break;case z:if(p.y<=0&&(h<=v||d&&(l<=x||m>=M))){E=!1;break}w(z),h+=p.y,(f-=p.y)<0&&(s=K,h-=f=-f),d&&(l+=(r.width-(c=f*d))/2);break;case V:if(p.x<=0&&(l<=x||d&&(h<=v||g>=O))){E=!1;break}w(V),l+=p.x,(c-=p.x)<0&&(s=j,l-=c=-c),d&&(h+=(r.height-(f=c/d))/2);break;case K:if(p.y>=0&&(g>=O||d&&(l<=x||m>=M))){E=!1;break}w(K),(f+=p.y)<0&&(s=z,h-=f=-f),d&&(l+=(r.width-(c=f*d))/2);break;case at:if(d){if(p.y<=0&&(h<=v||m>=M)){E=!1;break}w(z),h+=p.y,c=(f-=p.y)*d}else w(z),w(j),p.x>=0?m<M?c+=p.x:p.y<=0&&h<=v&&(E=!1):c+=p.x,p.y<=0?h>v&&(f-=p.y,h+=p.y):(f-=p.y,h+=p.y);c<0&&f<0?(s=ot,h-=f=-f,l-=c=-c):c<0?(s=rt,l-=c=-c):f<0&&(s=nt,h-=f=-f);break;case rt:if(d){if(p.y<=0&&(h<=v||l<=x)){E=!1;break}w(z),h+=p.y,l+=r.width-(c=(f-=p.y)*d)}else w(z),w(V),p.x<=0?l>x?(c-=p.x,l+=p.x):p.y<=0&&h<=v&&(E=!1):(c-=p.x,l+=p.x),p.y<=0?h>v&&(f-=p.y,h+=p.y):(f-=p.y,h+=p.y);c<0&&f<0?(s=nt,h-=f=-f,l-=c=-c):c<0?(s=at,l-=c=-c):f<0&&(s=ot,h-=f=-f);break;case ot:if(d){if(p.x<=0&&(l<=x||g>=O)){E=!1;break}w(V),l+=p.x,f=(c-=p.x)/d}else w(K),w(V),p.x<=0?l>x?(c-=p.x,l+=p.x):p.y>=0&&g>=O&&(E=!1):(c-=p.x,l+=p.x),p.y>=0?g<O&&(f+=p.y):f+=p.y;c<0&&f<0?(s=at,h-=f=-f,l-=c=-c):c<0?(s=nt,l-=c=-c):f<0&&(s=rt,h-=f=-f);break;case nt:if(d){if(p.x>=0&&(m>=M||g>=O)){E=!1;break}w(j),f=(c+=p.x)/d}else w(K),w(j),p.x>=0?m<M?c+=p.x:p.y>=0&&g>=O&&(E=!1):c+=p.x,p.y>=0?g<O&&(f+=p.y):f+=p.y;c<0&&f<0?(s=rt,h-=f=-f,l-=c=-c):c<0?(s=ot,l-=c=-c):f<0&&(s=at,h-=f=-f);break;case"move":this.move(p.x,p.y),E=!1;break;case"zoom":this.zoom(function Yi(a){var t=Z({},a),e=0;return D(a,function(i,o){delete t[o],D(t,function(r){var n=Math.abs(i.startX-r.startX),s=Math.abs(i.startY-r.startY),d=Math.abs(i.endX-r.endX),l=Math.abs(i.endY-r.endY),h=Math.sqrt(n*n+s*s),f=(Math.sqrt(d*d+l*l)-h)/h;Math.abs(f)>Math.abs(e)&&(e=f)})}),e}(n),t),E=!1;break;case"crop":if(!p.x||!p.y){E=!1;break}Y=ri(this.cropper),l=S.startX-Y.left,h=S.startY-Y.top,c=r.minWidth,f=r.minHeight,p.x>0?s=p.y>0?nt:at:p.x<0&&(l-=c,s=p.y>0?ot:rt),p.y<0&&(h-=f),this.cropped||(k(this.cropBox,N),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}E&&(r.width=c,r.height=f,r.left=l,r.top=h,this.action=s,this.renderCropBox()),D(n,function(T){T.startX=T.endX,T.startY=T.endY})}},Ji={crop:function(){return this.ready&&!this.cropped&&!this.disabled&&(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&C(this.dragBox,ft),k(this.cropBox,N),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=y({},this.initialImageData),this.canvasData=y({},this.initialCanvasData),this.cropBoxData=y({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(y(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),k(this.dragBox,ft),C(this.cropBox,N)),this},replace:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!this.disabled&&t&&(this.isImg&&(this.element.src=t),e?(this.url=t,this.image.src=t,this.ready&&(this.viewBoxImage.src=t,D(this.previews,function(i){i.getElementsByTagName("img")[0].src=t}))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(t))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,k(this.cropper,Xt)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,C(this.cropper,Xt)),this},destroy:function(){var t=this.element;return t[b]?(t[b]=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate(),this):this},move:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.canvasData,o=i.left,r=i.top;return this.moveTo(Nt(t)?t:o+Number(t),Nt(e)?e:r+Number(e))},moveTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.canvasData,o=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.movable&&(u(t)&&(i.left=t,o=!0),u(e)&&(i.top=e,o=!0),o&&this.renderCanvas(!0)),this},zoom:function(t,e){var i=this.canvasData;return t=Number(t),this.zoomTo(i.width*(t=t<0?1/(1-t):1+t)/i.naturalWidth,null,e)},zoomTo:function(t,e,i){var o=this.options,r=this.canvasData,n=r.width,s=r.height,d=r.naturalWidth,l=r.naturalHeight;if((t=Number(t))>=0&&this.ready&&!this.disabled&&o.zoomable){var h=d*t,c=l*t;if(!1===et(this.element,Ot,{ratio:t,oldRatio:n/d,originalEvent:i}))return this;if(i){var f=this.pointers,m=ri(this.cropper),g=f&&Object.keys(f).length?function Xi(a){var t=0,e=0,i=0;return D(a,function(o){t+=o.startX,e+=o.startY,i+=1}),{pageX:t/=i,pageY:e/=i}}(f):{pageX:i.pageX,pageY:i.pageY};r.left-=(g.pageX-m.left-r.left)/n*(h-n),r.top-=(g.pageY-m.top-r.top)/s*(c-s)}else J(e)&&u(e.x)&&u(e.y)?(r.left-=(e.x-r.left)/n*(h-n),r.top-=(e.y-r.top)/s*(c-s)):(r.left-=(h-n)/2,r.top-=(c-s)/2);r.width=h,r.height=c,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return u(t=Number(t))&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var e=this.imageData.scaleY;return this.scale(t,u(e)?e:1)},scaleY:function(t){var e=this.imageData.scaleX;return this.scale(u(e)?e:1,t)},scale:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.imageData,o=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.scalable&&(u(t)&&(i.scaleX=t,o=!0),u(e)&&(i.scaleY=e,o=!0),o&&this.renderCanvas(!0,!0)),this},getData:function(){var n,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.options,i=this.imageData,o=this.canvasData,r=this.cropBoxData;if(this.ready&&this.cropped){var s=i.width/i.naturalWidth;if(D(n={x:r.left-o.left,y:r.top-o.top,width:r.width,height:r.height},function(h,c){n[c]=h/s}),t){var d=Math.round(n.y+n.height),l=Math.round(n.x+n.width);n.x=Math.round(n.x),n.y=Math.round(n.y),n.width=l-n.x,n.height=d-n.y}}else n={x:0,y:0,width:0,height:0};return e.rotatable&&(n.rotate=i.rotate||0),e.scalable&&(n.scaleX=i.scaleX||1,n.scaleY=i.scaleY||1),n},setData:function(t){var e=this.options,i=this.imageData,o=this.canvasData,r={};if(this.ready&&!this.disabled&&J(t)){var n=!1;e.rotatable&&u(t.rotate)&&t.rotate!==i.rotate&&(i.rotate=t.rotate,n=!0),e.scalable&&(u(t.scaleX)&&t.scaleX!==i.scaleX&&(i.scaleX=t.scaleX,n=!0),u(t.scaleY)&&t.scaleY!==i.scaleY&&(i.scaleY=t.scaleY,n=!0)),n&&this.renderCanvas(!0,!0);var s=i.width/i.naturalWidth;u(t.x)&&(r.left=t.x*s+o.left),u(t.y)&&(r.top=t.y*s+o.top),u(t.width)&&(r.width=t.width*s),u(t.height)&&(r.height=t.height*s),this.setCropBoxData(r)}return this},getContainerData:function(){return this.ready?y({},this.containerData):{}},getImageData:function(){return this.sized?y({},this.imageData):{}},getCanvasData:function(){var t=this.canvasData,e={};return this.ready&&D(["left","top","width","height","naturalWidth","naturalHeight"],function(i){e[i]=t[i]}),e},setCanvasData:function(t){var e=this.canvasData,i=e.aspectRatio;return this.ready&&!this.disabled&&J(t)&&(u(t.left)&&(e.left=t.left),u(t.top)&&(e.top=t.top),u(t.width)?(e.width=t.width,e.height=t.width/i):u(t.height)&&(e.height=t.height,e.width=t.height*i),this.renderCanvas(!0)),this},getCropBoxData:function(){var e,t=this.cropBoxData;return this.ready&&this.cropped&&(e={left:t.left,top:t.top,width:t.width,height:t.height}),e||{}},setCropBoxData:function(t){var o,r,e=this.cropBoxData,i=this.options.aspectRatio;return this.ready&&this.cropped&&!this.disabled&&J(t)&&(u(t.left)&&(e.left=t.left),u(t.top)&&(e.top=t.top),u(t.width)&&t.width!==e.width&&(o=!0,e.width=t.width),u(t.height)&&t.height!==e.height&&(r=!0,e.height=t.height),i&&(o?e.height=e.width/i:r&&(e.width=e.height*i)),this.renderCropBox()),this},getCroppedCanvas:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var e=this.canvasData,i=Hi(this.image,this.imageData,e,t);if(!this.cropped)return i;var o=this.getData(),r=o.x,n=o.y,s=o.width,d=o.height,l=i.width/Math.floor(e.naturalWidth);1!==l&&(r*=l,n*=l,s*=l,d*=l);var h=s/d,c=W({aspectRatio:h,width:t.maxWidth||1/0,height:t.maxHeight||1/0}),f=W({aspectRatio:h,width:t.minWidth||0,height:t.minHeight||0},"cover"),m=W({aspectRatio:h,width:t.width||(1!==l?i.width:s),height:t.height||(1!==l?i.height:d)}),g=m.width,x=m.height;g=Math.min(c.width,Math.max(f.width,g)),x=Math.min(c.height,Math.max(f.height,x));var v=document.createElement("canvas"),M=v.getContext("2d");v.width=tt(g),v.height=tt(x),M.fillStyle=t.fillColor||"transparent",M.fillRect(0,0,g,x);var O=t.imageSmoothingEnabled,E=void 0===O||O,Y=t.imageSmoothingQuality;M.imageSmoothingEnabled=E,Y&&(M.imageSmoothingQuality=Y);var L,X,$,q,U,P,S=i.width,p=i.height,w=r,T=n;w<=-s||w>S?(w=0,L=0,$=0,U=0):w<=0?($=-w,w=0,U=L=Math.min(S,s+w)):w<=S&&($=0,U=L=Math.min(s,S-w)),L<=0||T<=-d||T>p?(T=0,X=0,q=0,P=0):T<=0?(q=-T,T=0,P=X=Math.min(p,d+T)):T<=p&&(q=0,P=X=Math.min(d,p-T));var R=[w,T,L,X];if(U>0&&P>0){var F=g/s;R.push($*F,q*F,U*F,P*F)}return M.drawImage.apply(M,[i].concat(_t(R.map(function(ut){return Math.floor(tt(ut))})))),v},setAspectRatio:function(t){var e=this.options;return!this.disabled&&!Nt(t)&&(e.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var e=this.options,i=this.dragBox,o=this.face;if(this.ready&&!this.disabled){var r=t===Dt,n=e.movable&&"move"===t;e.dragMode=t=r||n?t:"none",ht(i,st,t),it(i,yt,r),it(i,xt,n),e.cropBoxMovable||(ht(o,st,t),it(o,yt,r),it(o,xt,n))}return this}},te=_.Cropper,hi=function(){function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(pi(this,a),!t||!Oi.test(t.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=t,this.options=y({},Jt,J(e)&&e),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}return function ui(a,t,e){t&&Bt(a.prototype,t),e&&Bt(a,e),Object.defineProperty(a,"prototype",{writable:!1})}(a,[{key:"init",value:function(){var o,e=this.element,i=e.tagName.toLowerCase();if(!e[b]){if(e[b]=this,"img"===i){if(this.isImg=!0,o=e.getAttribute("src")||"",this.originalUrl=o,!o)return;o=e.src}else"canvas"===i&&window.HTMLCanvasElement&&(o=e.toDataURL());this.load(o)}}},{key:"load",value:function(e){var i=this;if(e){this.url=e,this.imageData={};var o=this.element,r=this.options;if(!r.rotatable&&!r.scalable&&(r.checkOrientation=!1),!r.checkOrientation||!window.ArrayBuffer)return void this.clone();if(Ti.test(e))return void(Ci.test(e)?this.read(function ji(a){var t=a.replace(Ui,""),e=atob(t),i=new ArrayBuffer(e.length),o=new Uint8Array(i);return D(o,function(r,n){o[n]=e.charCodeAt(n)}),i}(e)):this.clone());var n=new XMLHttpRequest,s=this.clone.bind(this);this.reloading=!0,this.xhr=n,n.onabort=s,n.onerror=s,n.ontimeout=s,n.onprogress=function(){n.getResponseHeader("content-type")!==Qt&&n.abort()},n.onload=function(){i.read(n.response)},n.onloadend=function(){i.reloading=!1,i.xhr=null},r.checkCrossOrigin&&ni(e)&&o.crossOrigin&&(e=oi(e)),n.open("GET",e,!0),n.responseType="arraybuffer",n.withCredentials="use-credentials"===o.crossOrigin,n.send()}}},{key:"read",value:function(e){var i=this.options,o=this.imageData,r=function Gi(a){var e,t=new DataView(a);try{var i,o,r;if(255===t.getUint8(0)&&216===t.getUint8(1))for(var n=t.byteLength,s=2;s+1<n;){if(255===t.getUint8(s)&&225===t.getUint8(s+1)){o=s;break}s+=1}if(o){var l=o+10;if("Exif"===function Wi(a,t,e){var i="";e+=t;for(var o=t;o<e;o+=1)i+=si(a.getUint8(o));return i}(t,o+4,4)){var h=t.getUint16(l);if(((i=18761===h)||19789===h)&&42===t.getUint16(l+2,i)){var c=t.getUint32(l+4,i);c>=8&&(r=l+c)}}}if(r){var m,g,f=t.getUint16(r,i);for(g=0;g<f;g+=1)if(274===t.getUint16(m=r+12*g+2,i)){e=t.getUint16(m+=8,i),t.setUint16(m,1,i);break}}}catch{e=1}return e}(e),n=0,s=1,d=1;if(r>1){this.url=function Vi(a,t){for(var e=[],o=new Uint8Array(a);o.length>0;)e.push(si.apply(null,ii(o.subarray(0,8192)))),o=o.subarray(8192);return"data:".concat(t,";base64,").concat(btoa(e.join("")))}(e,Qt);var l=function $i(a){var t=0,e=1,i=1;switch(a){case 2:e=-1;break;case 3:t=-180;break;case 4:i=-1;break;case 5:t=90,i=-1;break;case 6:t=90;break;case 7:t=90,e=-1;break;case 8:t=-90}return{rotate:t,scaleX:e,scaleY:i}}(r);n=l.rotate,s=l.scaleX,d=l.scaleY}i.rotatable&&(o.rotate=n),i.scalable&&(o.scaleX=s,o.scaleY=d),this.clone()}},{key:"clone",value:function(){var e=this.element,i=this.url,o=e.crossOrigin,r=i;this.options.checkCrossOrigin&&ni(i)&&(o||(o="anonymous"),r=oi(i)),this.crossOrigin=o,this.crossOriginUrl=r;var n=document.createElement("img");o&&(n.crossOrigin=o),n.src=r||i,n.alt=e.alt||"The image to crop",this.image=n,n.onload=this.start.bind(this),n.onerror=this.stop.bind(this),C(n,zt),e.parentNode.insertBefore(n,e.nextSibling)}},{key:"start",value:function(){var e=this,i=this.image;i.onload=null,i.onerror=null,this.sizing=!0;var o=_.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(_.navigator.userAgent),r=function(l,h){y(e.imageData,{naturalWidth:l,naturalHeight:h,aspectRatio:l/h}),e.initialImageData=y({},e.imageData),e.sizing=!1,e.sized=!0,e.build()};if(!i.naturalWidth||o){var n=document.createElement("img"),s=document.body||document.documentElement;this.sizingImage=n,n.onload=function(){r(n.width,n.height),o||s.removeChild(n)},n.src=i.src,o||(n.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",s.appendChild(n))}else r(i.naturalWidth,i.naturalHeight)}},{key:"stop",value:function(){var e=this.image;e.onload=null,e.onerror=null,e.parentNode.removeChild(e),this.image=null}},{key:"build",value:function(){if(this.sized&&!this.ready){var e=this.element,i=this.options,o=this.image,r=e.parentNode,n=document.createElement("div");n.innerHTML='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';var s=n.querySelector(".".concat(b,"-container")),d=s.querySelector(".".concat(b,"-canvas")),l=s.querySelector(".".concat(b,"-drag-box")),h=s.querySelector(".".concat(b,"-crop-box")),c=h.querySelector(".".concat(b,"-face"));this.container=r,this.cropper=s,this.canvas=d,this.dragBox=l,this.cropBox=h,this.viewBox=s.querySelector(".".concat(b,"-view-box")),this.face=c,d.appendChild(o),C(e,N),r.insertBefore(s,e.nextSibling),k(o,zt),this.initPreview(),this.bind(),i.initialAspectRatio=Math.max(0,i.initialAspectRatio)||NaN,i.aspectRatio=Math.max(0,i.aspectRatio)||NaN,i.viewMode=Math.max(0,Math.min(3,Math.round(i.viewMode)))||0,C(h,N),i.guides||C(h.getElementsByClassName("".concat(b,"-dashed")),N),i.center||C(h.getElementsByClassName("".concat(b,"-center")),N),i.background&&C(s,"".concat(b,"-bg")),i.highlight||C(c,yi),i.cropBoxMovable&&(C(c,xt),ht(c,st,"all")),i.cropBoxResizable||(C(h.getElementsByClassName("".concat(b,"-line")),N),C(h.getElementsByClassName("".concat(b,"-point")),N)),this.render(),this.ready=!0,this.setDragMode(i.dragMode),i.autoCrop&&this.crop(),this.setData(i.data),A(i.ready)&&I(e,"ready",i.ready,{once:!0}),et(e,"ready")}}},{key:"unbuild",value:function(){if(this.ready){this.ready=!1,this.unbind(),this.resetPreview();var e=this.cropper.parentNode;e&&e.removeChild(this.cropper),k(this.element,N)}}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}],[{key:"noConflict",value:function(){return window.Cropper=te,a}},{key:"setDefaults",value:function(e){y(Jt,J(e)&&e)}}]),a}();return y(hi.prototype,qi,Fi,Qi,Zi,Ki,Ji),hi});