$(document).bind("mobileinit", function(){$.extend(  $.mobile , {autoInitializePage: false})});
(function(e,t,n){typeof define=="function"&&define.amd?define(["jquery"],function(r){return n(r,e,t),r.mobile}):n(e.jQuery,e,t)})(this,document,function(e,t,n,r){(function(t){typeof define=="function"&&define.amd?define("vmouse",["jquery"],t):t(e)})(function(e){function T(e){while(e&&typeof e.originalEvent!="undefined")e=e.originalEvent;return e}function N(t,n){var i=t.type,o,a,l,c,h,p,d,v,m;t=e.Event(t),t.type=n,o=t.originalEvent,a=u,i.search(/^(mouse|click)/)>-1&&(a=f);if(o)for(d=a.length;d;)c=a[--d],t[c]=o[c];i.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1);if(i.search(/^touch/)!==-1){l=T(o),i=l.touches,h=l.changedTouches,p=i&&i.length?i[0]:h&&h.length?h[0]:r;if(p)for(v=0,m=s.length;v<m;v++)c=s[v],t[c]=p[c]}return t}function C(n){var r={},i,s;while(n){i=e.data(n,t);for(s in i)i[s]&&(r[s]=r.hasVirtualBinding=!0);n=n.parentNode}return r}function k(n,r){var i;while(n){i=e.data(n,t);if(i&&(!r||i[r]))return n;n=n.parentNode}return null}function L(){g=!1}function A(){g=!0}function O(){E=0,v.length=0,m=!1,A()}function M(){L()}function _(){c&&(clearTimeout(c),c=0)}function D(){_(),c=setTimeout(function(){c=0,O()},e.vmouse.resetTimerDuration)}function P(t,n,r){var i;if(r&&r[t]||!r&&k(n.target,t))i=N(n,t),e(n.target).trigger(i);return i}function H(t){var n=e.data(t.target,i),r;t.type==="click"&&e.data(t.target,"lastTouchType")==="touchstart"&&setTimeout(function(){e.data(t.target,"lastTouchType")==="touchstart"&&(O(),delete e.data(t.target).lastTouchType,H(t))},e.vmouse.maximumTimeBetweenTouches),!m&&(!E||E!==n)&&(r=P("v"+t.type,t),r&&(r.isDefaultPrevented()&&t.preventDefault(),r.isPropagationStopped()&&t.stopPropagation(),r.isImmediatePropagationStopped()&&t.stopImmediatePropagation()))}function B(t){var n=T(t).touches,r,s,o;n&&n.length===1&&(r=t.target,s=C(r),e.data(t.target,"lastTouchType",t.type),s.hasVirtualBinding&&(E=w++,e.data(r,i,E),_(),M(),d=!1,o=T(t).touches[0],h=o.pageX,p=o.pageY,P("vmouseover",t,s),P("vmousedown",t,s)))}function j(t){if(g)return;d||P("vmousecancel",t,C(t.target)),e.data(t.target,"lastTouchType",t.type),d=!0,D()}function F(t){if(g)return;var n=T(t).touches[0],r=d,i=e.vmouse.moveDistanceThreshold,s=C(t.target);e.data(t.target,"lastTouchType",t.type),d=d||Math.abs(n.pageX-h)>i||Math.abs(n.pageY-p)>i,d&&!r&&P("vmousecancel",t,s),P("vmousemove",t,s),D()}function I(t){if(g||e.data(t.target,"lastTouchType")===r)return;A(),delete e.data(t.target).lastTouchType;var n=C(t.target),i,s;P("vmouseup",t,n),d||(i=P("vclick",t,n),i&&i.isDefaultPrevented()&&(s=T(t).changedTouches[0],v.push({touchID:E,x:s.clientX,y:s.clientY}),m=!0)),P("vmouseout",t,n),d=!1,D()}function q(n){var r=e.data(n,t),i;if(r)for(i in r)if(r[i])return!0;return!1}function R(){}function U(n){var r=n.substr(1);return{setup:function(){q(this)||e.data(this,t,{});var i=e.data(this,t);i[n]=!0,l[n]=(l[n]||0)+1,l[n]===1&&b.bind(r,H),e(this).bind(r,R),y&&(l.touchstart=(l.touchstart||0)+1,l.touchstart===1&&b.bind("touchstart",B).bind("touchend",I).bind("touchmove",F).bind("scroll",j))},teardown:function(){--l[n],l[n]||b.unbind(r,H),y&&(--l.touchstart,l.touchstart||b.unbind("touchstart",B).unbind("touchmove",F).unbind("touchend",I).unbind("scroll",j));var i=e(this),s=e.data(this,t);s&&(s[n]=!1),i.unbind(r,R),q(this)||i.removeData(t)}}}var t="virtualMouseBindings",i="virtualTouchID",s="clientX clientY pageX pageY screenX screenY".split(" "),o="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),u="altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),a=e.event.mouseHooks?e.event.mouseHooks.props:[],f=u.concat(a),l={},c=0,h=0,p=0,d=!1,v=[],m=!1,g=!1,y="addEventListener"in n,b=e(n),w=1,E=0,S,x;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500,maximumTimeBetweenTouches:100};for(x=0;x<o.length;x++)e.event.special[o[x]]=U(o[x]);y&&n.addEventListener("click",function(t){var n=v.length,r=t.target,s,o,u,a,f,l;if(n){s=t.clientX,o=t.clientY,S=e.vmouse.clickDistanceThreshold,u=r;while(u){for(a=0;a<n;a++){f=v[a],l=0;if(u===r&&Math.abs(f.x-s)<S&&Math.abs(f.y-o)<S||e.data(u,i)===f.touchID){t.preventDefault(),t.stopPropagation();return}}u=u.parentNode}}},!0)}),function(t){typeof define=="function"&&define.amd?define("ns",["jquery"],t):t(e)}(function(e){return e.mobile={version:"@VERSION"},e.mobile}),function(t){typeof define=="function"&&define.amd?define("support/touch",["jquery","../ns"],t):t(e)}(function(e){var t={touch:"ontouchend"in n};return e.mobile.support=e.mobile.support||{},e.extend(e.support,t),e.extend(e.mobile.support,t),e.support}),function(t){typeof define=="function"&&define.amd?define("events/touch",["jquery","../vmouse","../support/touch"],t):t(e)}(function(e){function f(t,n,i,s){var o=i.type;i.type=n,s?e.event.trigger(i,r,t):e.event.dispatch.call(t,i),i.type=o}var i=e(n),s=e.mobile.support.touch,o=s?"touchstart":"mousedown",u=s?"touchend":"mouseup",a=s?"touchmove":"mousemove";return e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)}),e.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var t=this,n=e(t),r=!1;n.bind("vmousedown",function(s){function l(){u&&(n.bind("vclick",a),clearTimeout(u))}function c(){l(),n.unbind("vclick",a).unbind("vmouseup",l),i.unbind("vmousecancel",c)}r=!1;if(s.which&&s.which!==1)return!0;var o=s.target,u,a;a=function(e){c(),!r&&o===e.target?f(t,"tap",e):r&&e.preventDefault()},n.bind("vmouseup",l),i.bind("vmousecancel",c),u=setTimeout(function(){e.event.special.tap.emitTapOnTaphold||(r=!0),u=0,f(t,"taphold",e.Event("taphold",{target:o}))},e.event.special.tap.tapholdThreshold)})},teardown:function(){e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),i.unbind("vmousecancel")}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:t.devicePixelRatio>=2?15:30,verticalDistanceThreshold:t.devicePixelRatio>=2?15:30,getLocation:function(e){var n=t.pageXOffset,r=t.pageYOffset,i=e.clientX,s=e.clientY;if(e.pageY===0&&Math.floor(s)>Math.floor(e.pageY)||e.pageX===0&&Math.floor(i)>Math.floor(e.pageX))i-=n,s-=r;else if(s<e.pageY-r||i<e.pageX-n)i=e.pageX-n,s=e.pageY-r;return{x:i,y:s}},start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y],origin:e(t.target)}},stop:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y]}},handleSwipe:function(t,n,r,i){if(n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold){var s=t.coords[0]>n.coords[0]?"swipeleft":"swiperight";return f(r,"swipe",e.Event("swipe",{target:i,swipestart:t,swipestop:n}),!0),f(r,s,e.Event(s,{target:i,swipestart:t,swipestop:n}),!0),!0}return!1},eventInProgress:!1,setup:function(){var t,n=this,r=e(n),s={};t=e.data(this,"mobile-events"),t||(t={length:0},e.data(this,"mobile-events",t)),t.length++,t.swipe=s,s.start=function(t){if(e.event.special.swipe.eventInProgress)return;e.event.special.swipe.eventInProgress=!0;var r,o=e.event.special.swipe.start(t),f=t.target,l=!1;s.move=function(t){if(!o||t.isDefaultPrevented())return;r=e.event.special.swipe.stop(t),l||(l=e.event.special.swipe.handleSwipe(o,r,n,f),l&&(e.event.special.swipe.eventInProgress=!1)),Math.abs(o.coords[0]-r.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault()},s.stop=function(){l=!0,e.event.special.swipe.eventInProgress=!1,i.off(a,s.move),s.move=null},i.on(a,s.move).one(u,s.stop)},r.on(o,s.start)},teardown:function(){var t,n;t=e.data(this,"mobile-events"),t&&(n=t.swipe,delete t.swipe,t.length--,t.length===0&&e.removeData(this,"mobile-events")),n&&(n.start&&e(this).off(o,n.start),n.move&&i.off(a,n.move),n.stop&&i.off(u,n.stop))}},e.each({taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)},teardown:function(){e(this).unbind(n)}}}),e.event.special})});


/*---svgcolor---*/  
$(function(){
    jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
    
        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');
    
            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
    
            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');
            
            // Check if the viewport is set, else we gonna set it if we can.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
    
            // Replace image with new SVG
            $img.replaceWith($svg);
    
        }, 'xml');
    
    });
});



$(document).on('mousemove', function(e){
    var width = $(document).width();
    var height = $(document).height();

    if(width > 990) {
    $('#cursor').css({'display':'block','left': Number((e.pageX)-10),'top': Number((e.pageY)-10),'z-index': '9999999'});
    if(Number((e.pageX)+24) > width) { $('#cursor').css({'display': 'none'}); }
    if(Number((e.pageX)) < 10) { $('#cursor').css({'display': 'none'}); }
    if(Number((e.pageY)+24) > height) { $('#cursor').css({'display': 'none'}); }
    if(Number((e.pageY)) < 10) { $('#cursor').css({'display': 'none'}); }

    $('a, #hamburger, button, div.round').hover(
        function() {
            $('#cursor').css({'transform':'scale(2.5)', 'background':'rgba(255,0,0,0.5)'});
        },
        function() {
            $('#cursor').css({'transform':'scale(1)', 'background':'#ff0000'});
        }
    );
    }
});


function swipeHandler(event) {
    $("front").addClass("active");
    $("front").removeClass("unactive");
    $(".right").removeClass("inactive");
    $(".left").addClass("inactive");

    $(".left h1").addClass("hide");
    $(".right h1").addClass("unhide");
    $(".left h1").removeClass("unhide");
    $(".right h1").removeClass("hide");

    $("#white, .left button, .left .bar").addClass("hide");
    $("#black, .right button, .right .bar").addClass("unhide");
    $("#white, .left button, .left .bar").removeClass("unhide");
    $("#black, .right button, .right .bar").removeClass("hide");
}


$(function(){
  $( "front" ).on( "swipeleft", swipeHandler );
  $( ".right" ).click(swipeHandler);
  $(document).keydown(
    function(e)
    {    
        if (e.keyCode == 39) {      
            swipeHandler(e)
        }
    }
);  
});




function rightHandler(event) {
    $("front").removeClass("active");
    $("front").addClass("unactive");
    $(".right").addClass("inactive");
    $(".left").removeClass("inactive");

    $(".left h1").removeClass("hide");
    $(".right h1").removeClass("unhide");
$(".right h1").addClass("hide");
$(".left h1").addClass("unhide");

$("#black, .right button, .right .bar").addClass("hide");
$("#white, .left button, .left .bar").addClass("unhide");
$("#black, .right button, .right .bar").removeClass("unhide");
$("#white, .left button, .left .bar").removeClass("hide");
}



$(function(){
  $( "front" ).on( "swiperight", rightHandler );
  $( ".left" ).click(rightHandler);
  $(document).keydown(
    function(e)
    {    
        if (e.keyCode == 37) {      
            rightHandler(e)
        }
    }
);  
});
