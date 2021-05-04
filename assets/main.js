/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={839:()=>{!function(e,i){"use strict";var t={item:3,autoWidth:!1,slideMove:1,slideMargin:10,addClass:"",mode:"slide",useCSS:!0,cssEasing:"ease",easing:"linear",speed:400,auto:!1,pauseOnHover:!1,loop:!1,slideEndAnimation:!0,pause:2e3,keyPress:!1,controls:!0,prevHtml:"",nextHtml:"",rtl:!1,adaptiveHeight:!1,vertical:!1,verticalHeight:500,vThumbWidth:100,thumbItem:10,pager:!0,gallery:!1,galleryMargin:5,thumbMargin:5,currentPagerPosition:"middle",enableTouch:!0,enableDrag:!0,freeMove:!0,swipeThreshold:40,responsive:[],onBeforeStart:function(e){},onSliderLoad:function(e){},onBeforeSlide:function(e,i){},onAfterSlide:function(e,i){},onBeforeNextSlide:function(e,i){},onBeforePrevSlide:function(e,i){}};e.fn.lightSlider=function(i){if(0===this.length)return this;if(this.length>1)return this.each((function(){e(this).lightSlider(i)})),this;var n={},l=e.extend(!0,{},t,i),o={},a=this;n.$el=this,"fade"===l.mode&&(l.vertical=!1);var s=a.children(),r=e(window).width(),d=null,c=0,u=0,f=!1,g=0,h="",v=0,p=!0===l.vertical?"height":"width",m=!0===l.vertical?"margin-bottom":"margin-right",S=0,b=0,M=0,T=0,C=null,x="ontouchstart"in document.documentElement,w={chbreakpoint:function(){if(r=e(window).width(),l.responsive.length){var i;if(!1===l.autoWidth&&(i=l.item),r<l.responsive[0].breakpoint)for(var t=0;t<l.responsive.length;t++)r<l.responsive[t].breakpoint&&(l.responsive[t].breakpoint,d=l.responsive[t]);if(null!=d)for(var n in d.settings)d.settings.hasOwnProperty(n)&&(void 0!==o[n]&&null!==o[n]||(o[n]=l[n]),l[n]=d.settings[n]);if(!e.isEmptyObject(o)&&r>l.responsive[0].breakpoint)for(var a in o)o.hasOwnProperty(a)&&(l[a]=o[a]);!1===l.autoWidth&&S>0&&M>0&&i!==l.item&&(v=Math.round(S/((M+l.slideMargin)*l.slideMove)))}},calSW:function(){!1===l.autoWidth&&(M=(g-(l.item*l.slideMargin-l.slideMargin))/l.item)},calWidth:function(e){var i=!0===e?h.find(".lslide").length:s.length;if(!1===l.autoWidth)u=i*(M+l.slideMargin);else{u=0;for(var t=0;t<i;t++)u+=parseInt(s.eq(t).width())+l.slideMargin}return u}};return(n={doCss:function(){return!(!l.useCSS||!function(){for(var e=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],i=document.documentElement,t=0;t<e.length;t++)if(e[t]in i.style)return!0}())},keyPress:function(){l.keyPress&&e(document).on("keyup.lightslider",(function(i){e(":focus").is("input, textarea")||(i.preventDefault?i.preventDefault():i.returnValue=!1,37===i.keyCode?a.goToPrevSlide():39===i.keyCode&&a.goToNextSlide())}))},controls:function(){l.controls&&(a.after('<div class="lSAction"><a class="lSPrev">'+l.prevHtml+'</a><a class="lSNext">'+l.nextHtml+"</a></div>"),l.autoWidth?w.calWidth(!1)<g&&h.find(".lSAction").hide():c<=l.item&&h.find(".lSAction").hide(),h.find(".lSAction a").on("click",(function(i){return i.preventDefault?i.preventDefault():i.returnValue=!1,"lSPrev"===e(this).attr("class")?a.goToPrevSlide():a.goToNextSlide(),!1})))},initialStyle:function(){var e=this;"fade"===l.mode&&(l.autoWidth=!1,l.slideEndAnimation=!1),l.auto&&(l.slideEndAnimation=!1),l.autoWidth&&(l.slideMove=1,l.item=1),l.loop&&(l.slideMove=1,l.freeMove=!1),l.onBeforeStart.call(this,a),w.chbreakpoint(),a.addClass("lightSlider").wrap('<div class="lSSlideOuter '+l.addClass+'"><div class="lSSlideWrapper"></div></div>'),h=a.parent(".lSSlideWrapper"),!0===l.rtl&&h.parent().addClass("lSrtl"),l.vertical?(h.parent().addClass("vertical"),g=l.verticalHeight,h.css("height",g+"px")):g=a.outerWidth(),s.addClass("lslide"),!0===l.loop&&"slide"===l.mode&&(w.calSW(),w.clone=function(){if(w.calWidth(!0)>g){for(var i=0,t=0,n=0;n<s.length&&(t++,!((i+=parseInt(a.find(".lslide").eq(n).width())+l.slideMargin)>=g+l.slideMargin));n++);var o=!0===l.autoWidth?t:l.item;if(o<a.find(".clone.left").length)for(var r=0;r<a.find(".clone.left").length-o;r++)s.eq(r).remove();if(o<a.find(".clone.right").length)for(var d=s.length-1;d>s.length-1-a.find(".clone.right").length;d--)v--,s.eq(d).remove();for(var c=a.find(".clone.right").length;c<o;c++)a.find(".lslide").eq(c).clone().removeClass("lslide").addClass("clone right").appendTo(a),v++;for(var u=a.find(".lslide").length-a.find(".clone.left").length;u>a.find(".lslide").length-o;u--)a.find(".lslide").eq(u-1).clone().removeClass("lslide").addClass("clone left").prependTo(a);s=a.children()}else s.hasClass("clone")&&(a.find(".clone").remove(),e.move(a,0))},w.clone()),w.sSW=function(){c=s.length,!0===l.rtl&&!1===l.vertical&&(m="margin-left"),!1===l.autoWidth&&s.css(p,M+"px"),s.css(m,l.slideMargin+"px"),u=w.calWidth(!1),a.css(p,u+"px"),!0===l.loop&&"slide"===l.mode&&!1===f&&(v=a.find(".clone.left").length)},w.calL=function(){s=a.children(),c=s.length},this.doCss()&&h.addClass("usingCss"),w.calL(),"slide"===l.mode?(w.calSW(),w.sSW(),!0===l.loop&&(S=e.slideValue(),this.move(a,S)),!1===l.vertical&&this.setHeight(a,!1)):(this.setHeight(a,!0),a.addClass("lSFade"),this.doCss()||(s.fadeOut(0),s.eq(v).fadeIn(0))),!0===l.loop&&"slide"===l.mode?s.eq(v).addClass("active"):s.first().addClass("active")},pager:function(){var e=this;if(w.createPager=function(){T=(g-(l.thumbItem*l.thumbMargin-l.thumbMargin))/l.thumbItem;var i=h.find(".lslide"),t=h.find(".lslide").length,n=0,o="",s=0;for(n=0;n<t;n++){"slide"===l.mode&&(l.autoWidth?s+=(parseInt(i.eq(n).width())+l.slideMargin)*l.slideMove:s=n*((M+l.slideMargin)*l.slideMove));var r=i.eq(n*l.slideMove).attr("data-thumb");if(!0===l.gallery?o+='<li style="width:100%;'+p+":"+T+"px;"+m+":"+l.thumbMargin+'px"><a href="#"><img src="'+r+'" /></a></li>':o+='<li><a href="#">'+(n+1)+"</a></li>","slide"===l.mode&&s>=u-g-l.slideMargin){n+=1;var d=2;l.autoWidth&&(o+='<li><a href="#">'+(n+1)+"</a></li>",d=1),n<d?(o=null,h.parent().addClass("noPager")):h.parent().removeClass("noPager");break}}var c=h.parent();c.find(".lSPager").html(o),!0===l.gallery&&(!0===l.vertical&&c.find(".lSPager").css("width",l.vThumbWidth+"px"),b=n*(l.thumbMargin+T)+.5,c.find(".lSPager").css({property:b+"px","transition-duration":l.speed+"ms"}),!0===l.vertical&&h.parent().css("padding-right",l.vThumbWidth+l.galleryMargin+"px"),c.find(".lSPager").css(p,b+"px"));var f=c.find(".lSPager").find("li");f.first().addClass("active"),f.on("click",(function(){return!0===l.loop&&"slide"===l.mode?v+=f.index(this)-c.find(".lSPager").find("li.active").index():v=f.index(this),a.mode(!1),!0===l.gallery&&e.slideThumb(),!1}))},l.pager){var i="lSpg";l.gallery&&(i="lSGallery"),h.after('<ul class="lSPager '+i+'"></ul>');var t=l.vertical?"margin-left":"margin-top";h.parent().find(".lSPager").css(t,l.galleryMargin+"px"),w.createPager()}setTimeout((function(){w.init()}),0)},setHeight:function(e,i){var t=null,n=this;t=l.loop?e.children(".lslide ").first():e.children().first();var o=function(){var n=t.outerHeight(),l=0,o=n;i&&(n=0,l=100*o/g),e.css({height:n+"px","padding-bottom":l+"%"})};o(),t.find("img").length?t.find("img")[0].complete?(o(),C||n.auto()):t.find("img").on("load",(function(){setTimeout((function(){o(),C||n.auto()}),100)})):C||n.auto()},active:function(e,i){this.doCss()&&"fade"===l.mode&&h.addClass("on");var t,n,o=0;v*l.slideMove<c?(e.removeClass("active"),this.doCss()||"fade"!==l.mode||!1!==i||e.fadeOut(l.speed),o=!0===i?v:v*l.slideMove,!0===i&&(n=(t=e.length)-1,o+1>=t&&(o=n)),!0===l.loop&&"slide"===l.mode&&(o=!0===i?v-a.find(".clone.left").length:v*l.slideMove,!0===i&&(n=(t=e.length)-1,o+1===t?o=n:o+1>t&&(o=0))),this.doCss()||"fade"!==l.mode||!1!==i||e.eq(o).fadeIn(l.speed),e.eq(o).addClass("active")):(e.removeClass("active"),e.eq(e.length-1).addClass("active"),this.doCss()||"fade"!==l.mode||!1!==i||(e.fadeOut(l.speed),e.eq(o).fadeIn(l.speed)))},move:function(e,i){!0===l.rtl&&(i=-i),this.doCss()?!0===l.vertical?e.css({transform:"translate3d(0px, "+-i+"px, 0px)","-webkit-transform":"translate3d(0px, "+-i+"px, 0px)"}):e.css({transform:"translate3d("+-i+"px, 0px, 0px)","-webkit-transform":"translate3d("+-i+"px, 0px, 0px)"}):!0===l.vertical?e.css("position","relative").animate({top:-i+"px"},l.speed,l.easing):e.css("position","relative").animate({left:-i+"px"},l.speed,l.easing);var t=h.parent().find(".lSPager").find("li");this.active(t,!0)},fade:function(){this.active(s,!1);var e=h.parent().find(".lSPager").find("li");this.active(e,!0)},slide:function(){var e=this;w.calSlide=function(){u>g&&(S=e.slideValue(),e.active(s,!1),S>u-g-l.slideMargin?S=u-g-l.slideMargin:S<0&&(S=0),e.move(a,S),!0===l.loop&&"slide"===l.mode&&(v>=c-a.find(".clone.left").length/l.slideMove&&e.resetSlide(a.find(".clone.left").length),0===v&&e.resetSlide(h.find(".lslide").length)))},w.calSlide()},resetSlide:function(e){var i=this;h.find(".lSAction a").addClass("disabled"),setTimeout((function(){v=e,h.css("transition-duration","0ms"),S=i.slideValue(),i.active(s,!1),n.move(a,S),setTimeout((function(){h.css("transition-duration",l.speed+"ms"),h.find(".lSAction a").removeClass("disabled")}),50)}),l.speed+100)},slideValue:function(){var e=0;if(!1===l.autoWidth)e=v*((M+l.slideMargin)*l.slideMove);else{e=0;for(var i=0;i<v;i++)e+=parseInt(s.eq(i).width())+l.slideMargin}return e},slideThumb:function(){var e;switch(l.currentPagerPosition){case"left":e=0;break;case"middle":e=g/2-T/2;break;case"right":e=g-T}var i=v-a.find(".clone.left").length,t=h.parent().find(".lSPager");"slide"===l.mode&&!0===l.loop&&(i>=t.children().length?i=0:i<0&&(i=t.children().length));var n=i*(T+l.thumbMargin)-e;n+g>b&&(n=b-g-l.thumbMargin),n<0&&(n=0),this.move(t,n)},auto:function(){l.auto&&(clearInterval(C),C=setInterval((function(){a.goToNextSlide()}),l.pause))},pauseOnHover:function(){var i=this;l.auto&&l.pauseOnHover&&(h.on("mouseenter",(function(){e(this).addClass("ls-hover"),a.pause(),l.auto=!0})),h.on("mouseleave",(function(){e(this).removeClass("ls-hover"),h.find(".lightSlider").hasClass("lsGrabbing")||i.auto()})))},touchMove:function(e,i){if(h.css("transition-duration","0ms"),"slide"===l.mode){var t=S-(e-i);if(t>=u-g-l.slideMargin)if(!1===l.freeMove)t=u-g-l.slideMargin;else{var n=u-g-l.slideMargin;t=n+(t-n)/5}else t<0&&(!1===l.freeMove?t=0:t/=5);this.move(a,t)}},touchEnd:function(e){if(h.css("transition-duration",l.speed+"ms"),"slide"===l.mode){var i=!1,t=!0;(S-=e)>u-g-l.slideMargin?(S=u-g-l.slideMargin,!1===l.autoWidth&&(i=!0)):S<0&&(S=0);var n=function(e){var t=0;if(i||e&&(t=1),l.autoWidth)for(var n=0,o=0;o<s.length&&(n+=parseInt(s.eq(o).width())+l.slideMargin,v=o+t,!(n>=S));o++);else{var a=S/((M+l.slideMargin)*l.slideMove);v=parseInt(a)+t,S>=u-g-l.slideMargin&&a%1!=0&&v++}};e>=l.swipeThreshold?(n(!1),t=!1):e<=-l.swipeThreshold&&(n(!0),t=!1),a.mode(t),this.slideThumb()}else e>=l.swipeThreshold?a.goToPrevSlide():e<=-l.swipeThreshold&&a.goToNextSlide()},enableDrag:function(){var i=this;if(!x){var t=0,n=0,o=!1;h.find(".lightSlider").addClass("lsGrab"),h.on("mousedown",(function(i){if(u<g&&0!==u)return!1;"lSPrev"!==e(i.target).attr("class")&&"lSNext"!==e(i.target).attr("class")&&(t=!0===l.vertical?i.pageY:i.pageX,o=!0,i.preventDefault?i.preventDefault():i.returnValue=!1,h.scrollLeft+=1,h.scrollLeft-=1,h.find(".lightSlider").removeClass("lsGrab").addClass("lsGrabbing"),clearInterval(C))})),e(window).on("mousemove",(function(e){o&&(n=!0===l.vertical?e.pageY:e.pageX,i.touchMove(n,t))})),e(window).on("mouseup",(function(a){if(o){h.find(".lightSlider").removeClass("lsGrabbing").addClass("lsGrab"),o=!1;var s=(n=!0===l.vertical?a.pageY:a.pageX)-t;Math.abs(s)>=l.swipeThreshold&&e(window).on("click.ls",(function(i){i.preventDefault?i.preventDefault():i.returnValue=!1,i.stopImmediatePropagation(),i.stopPropagation(),e(window).off("click.ls")})),i.touchEnd(s)}}))}},enableTouch:function(){var e=this;if(x){var i={},t={};h.on("touchstart",(function(e){t=e.originalEvent.targetTouches[0],i.pageX=e.originalEvent.targetTouches[0].pageX,i.pageY=e.originalEvent.targetTouches[0].pageY,clearInterval(C)})),h.on("touchmove",(function(n){if(u<g&&0!==u)return!1;var o=n.originalEvent;t=o.targetTouches[0];var a=Math.abs(t.pageX-i.pageX),s=Math.abs(t.pageY-i.pageY);!0===l.vertical?(3*s>a&&n.preventDefault(),e.touchMove(t.pageY,i.pageY)):(3*a>s&&n.preventDefault(),e.touchMove(t.pageX,i.pageX))})),h.on("touchend",(function(){if(u<g&&0!==u)return!1;var n;n=!0===l.vertical?t.pageY-i.pageY:t.pageX-i.pageX,e.touchEnd(n)}))}},build:function(){var i=this;i.initialStyle(),this.doCss()&&(!0===l.enableTouch&&i.enableTouch(),!0===l.enableDrag&&i.enableDrag()),e(window).on("focus",(function(){i.auto()})),e(window).on("blur",(function(){clearInterval(C)})),i.pager(),i.pauseOnHover(),i.controls(),i.keyPress()}}).build(),w.init=function(){w.chbreakpoint(),!0===l.vertical?(g=l.item>1?l.verticalHeight:s.outerHeight(),h.css("height",g+"px")):g=h.outerWidth(),!0===l.loop&&"slide"===l.mode&&w.clone(),w.calL(),"slide"===l.mode&&a.removeClass("lSSlide"),"slide"===l.mode&&(w.calSW(),w.sSW()),setTimeout((function(){"slide"===l.mode&&a.addClass("lSSlide")}),1e3),l.pager&&w.createPager(),!0===l.adaptiveHeight&&!1===l.vertical&&a.css("height",s.eq(v).outerHeight(!0)),!1===l.adaptiveHeight&&("slide"===l.mode?!1===l.vertical?n.setHeight(a,!1):n.auto():n.setHeight(a,!0)),!0===l.gallery&&n.slideThumb(),"slide"===l.mode&&n.slide(),!1===l.autoWidth?s.length<=l.item?h.find(".lSAction").hide():h.find(".lSAction").show():w.calWidth(!1)<g&&0!==u?h.find(".lSAction").hide():h.find(".lSAction").show()},a.goToPrevSlide=function(){v>0?(l.onBeforePrevSlide.call(this,a,v),v--,a.mode(!1),!0===l.gallery&&n.slideThumb()):!0===l.loop?(l.onBeforePrevSlide.call(this,a,v),"fade"===l.mode&&(v=parseInt((c-1)/l.slideMove)),a.mode(!1),!0===l.gallery&&n.slideThumb()):!0===l.slideEndAnimation&&(a.addClass("leftEnd"),setTimeout((function(){a.removeClass("leftEnd")}),400))},a.goToNextSlide=function(){var e=!0;"slide"===l.mode&&(e=n.slideValue()<u-g-l.slideMargin),v*l.slideMove<c-l.slideMove&&e?(l.onBeforeNextSlide.call(this,a,v),v++,a.mode(!1),!0===l.gallery&&n.slideThumb()):!0===l.loop?(l.onBeforeNextSlide.call(this,a,v),v=0,a.mode(!1),!0===l.gallery&&n.slideThumb()):!0===l.slideEndAnimation&&(a.addClass("rightEnd"),setTimeout((function(){a.removeClass("rightEnd")}),400))},a.mode=function(e){!0===l.adaptiveHeight&&!1===l.vertical&&a.css("height",s.eq(v).outerHeight(!0)),!1===f&&("slide"===l.mode?n.doCss()&&(a.addClass("lSSlide"),""!==l.speed&&h.css("transition-duration",l.speed+"ms"),""!==l.cssEasing&&h.css("transition-timing-function",l.cssEasing)):n.doCss()&&(""!==l.speed&&a.css("transition-duration",l.speed+"ms"),""!==l.cssEasing&&a.css("transition-timing-function",l.cssEasing))),e||l.onBeforeSlide.call(this,a,v),"slide"===l.mode?n.slide():n.fade(),h.hasClass("ls-hover")||n.auto(),setTimeout((function(){e||l.onAfterSlide.call(this,a,v)}),l.speed),f=!0},a.play=function(){a.goToNextSlide(),l.auto=!0,n.auto()},a.pause=function(){l.auto=!1,clearInterval(C)},a.refresh=function(){w.init()},a.getCurrentSlideCount=function(){var e=v;if(l.loop){var i=h.find(".lslide").length,t=a.find(".clone.left").length;e=v<=t-1?i+(v-t):v>=i+t?v-i-t:v-t}return e+1},a.getTotalSlideCount=function(){return h.find(".lslide").length},a.goToSlide=function(e){v=l.loop?e+a.find(".clone.left").length-1:e,a.mode(!1),!0===l.gallery&&n.slideThumb()},a.destroy=function(){a.lightSlider&&(a.goToPrevSlide=function(){},a.goToNextSlide=function(){},a.mode=function(){},a.play=function(){},a.pause=function(){},a.refresh=function(){},a.getCurrentSlideCount=function(){},a.getTotalSlideCount=function(){},a.goToSlide=function(){},a.lightSlider=null,w={init:function(){}},a.parent().parent().find(".lSAction, .lSPager").remove(),a.removeClass("lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right").removeAttr("style").unwrap().unwrap(),a.children().removeAttr("style"),s.removeClass("lslide active"),a.find(".clone").remove(),s=null,C=null,f=!1,v=0)},setTimeout((function(){l.onSliderLoad.call(this,a)}),10),e(window).on("resize orientationchange",(function(e){setTimeout((function(){e.preventDefault?e.preventDefault():e.returnValue=!1,w.init()}),200)})),this}}(jQuery)}},i={};function t(n){var l=i[n];if(void 0!==l)return l.exports;var o=i[n]={exports:{}};return e[n](o,o.exports,t),o.exports}t.n=e=>{var i=e&&e.__esModule?()=>e.default:()=>e;return t.d(i,{a:i}),i},t.d=(e,i)=>{for(var n in i)t.o(i,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:i[n]})},t.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),(()=>{"use strict";var e,i,n,l;t(839),e=document.getElementById("gsweb-mobile-menu"),i=document.getElementById("gsweb-desktop-menu"),n=document.querySelector(".logo-mobile"),l=document.querySelector(".gsweb-menu-close"),e.addEventListener("click",(function(){i.classList.add("active"),n.classList.add("visible-mobile")})),l.addEventListener("click",(function(){i.classList.remove("active"),n.classList.remove("visible-mobile")})),$(document).ready((function(){$("#lightSlider").lightSlider({item:4,autoWidth:!1,slideMove:1,slideMargin:10,addClass:"",mode:"slide",useCSS:!0,cssEasing:"ease",easing:"linear",speed:1e3,auto:!0,loop:!0,slideEndAnimation:!0,pause:2e3,keyPress:!1,controls:!1,prevHtml:"",nextHtml:"",rtl:!1,adaptiveHeight:!1,vertical:!1,verticalHeight:600,vThumbWidth:500,thumbItem:10,pager:!1,gallery:!1,galleryMargin:5,thumbMargin:5,currentPagerPosition:"middle",enableTouch:!0,enableDrag:!1,freeMove:!0,swipeThreshold:40,responsive:[{breakpoint:1400,settings:{item:4,slideMove:1,slideMargin:2}},{breakpoint:800,settings:{item:3,slideMove:1,slideMargin:6}},{breakpoint:480,settings:{item:1,slideMove:1}}],onBeforeStart:function(e){},onSliderLoad:function(e){},onBeforeSlide:function(e){},onAfterSlide:function(e){},onBeforeNextSlide:function(e){},onBeforePrevSlide:function(e){}});var e=$("#lightSliderTwo").lightSlider({item:3,autoWidth:!1,slideMove:1,slideMargin:0,addClass:"",mode:"slide",useCSS:!0,cssEasing:"ease",easing:"linear",speed:1e3,auto:!0,loop:!0,slideEndAnimation:!1,pause:2e3,keyPress:!1,controls:!1,prevHtml:"",nextHtml:">",rtl:!1,adaptiveHeight:!0,vertical:!1,verticalHeight:240,vThumbWidth:240,thumbItem:10,pager:!1,gallery:!1,galleryMargin:5,thumbMargin:5,currentPagerPosition:"middle",enableTouch:!0,enableDrag:!1,freeMove:!0,swipeThreshold:40,responsive:[{breakpoint:1400,settings:{item:4,slideMove:1,slideMargin:2}},{breakpoint:800,settings:{item:3,slideMove:1,slideMargin:6}},{breakpoint:480,settings:{item:1,slideMove:1}}],onBeforeStart:function(e){},onSliderLoad:function(e){},onBeforeSlide:function(e){},onAfterSlide:function(e){},onBeforeNextSlide:function(e){},onBeforePrevSlide:function(e){}});e.getTotalSlideCount()>3?$("#goToNextSlideTwo").on("click",(function(){e.goToNextSlide()})):$("#goToNextSlideTwo").hide()}))})()})();