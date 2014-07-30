webshims.register("details",function(e,t,a,r,i,n){var s=function(t){var a=e(t).parent("details");return a[0]&&a.children(":first").get(0)===t?a:i},o=function(t,a){t=e(t),a=e(a);var r=e.data(a[0],"summaryElement");e.data(t[0],"detailsElement",a),r&&t[0]===r[0]||(r&&(r.hasClass("fallback-summary")?r.remove():r.unbind(".summaryPolyfill").removeData("detailsElement").removeAttr("role").removeAttr("tabindex").removeAttr("aria-expanded").removeClass("summary-button").find("span.details-open-indicator").remove()),e.data(a[0],"summaryElement",t),a.prop("open",a.prop("open")))},c=function(t){var a=e.data(t,"summaryElement");return a||(a=e("> summary:first-child",t),a[0]?o(a,t):(e(t).prependPolyfill('<summary class="fallback-summary">'+n.text+"</summary>"),a=e.data(t,"summaryElement"))),a};t.createElement("summary",function(){var a=s(this);if(a&&!e.data(this,"detailsElement")){var r,i,n=e.attr(this,"tabIndex")||"0";o(this,a),e(this).on({"focus.summaryPolyfill":function(){e(this).addClass("summary-has-focus")},"blur.summaryPolyfill":function(){e(this).removeClass("summary-has-focus")},"mouseenter.summaryPolyfill":function(){e(this).addClass("summary-has-hover")},"mouseleave.summaryPolyfill":function(){e(this).removeClass("summary-has-hover")},"click.summaryPolyfill":function(t){var a=s(this);if(a){if(!i&&t.originalEvent)return i=!0,t.stopImmediatePropagation(),t.preventDefault(),e(this).trigger("click"),i=!1,!1;clearTimeout(r),r=setTimeout(function(){t.isDefaultPrevented()||a.prop("open",!a.prop("open"))},0)}},"keydown.summaryPolyfill":function(t){13!=t.keyCode&&32!=t.keyCode||t.isDefaultPrevented()||(i=!0,t.preventDefault(),e(this).trigger("click"),i=!1)}}).attr({tabindex:n,role:"button"}).prepend('<span class="details-open-indicator" />'),t.moveToFirstEvent(this,"click")}});var d;t.defineNodeNamesBooleanProperty("details","open",function(t){var a=e(e.data(this,"summaryElement"));if(a){var r=t?"removeClass":"addClass",i=e(this);if(!d&&n.animate){i.stop().css({width:"",height:""});var s={width:i.width(),height:i.height()}}if(a.attr("aria-expanded",""+t),i[r]("closed-details-summary").children().not(a[0])[r]("closed-details-child"),!d&&n.animate){var o={width:i.width(),height:i.height()};i.css(s).animate(o,{complete:function(){e(this).css({width:"",height:""})}})}}}),t.createElement("details",function(){d=!0,c(this),e.prop(this,"open",e.prop(this,"open")),d=!1})}),webshims.register("track",function(e,t,a,r){"use strict";var i=t.mediaelement;(new Date).getTime(),e.fn.addBack?"addBack":"andSelf";var n={subtitles:1,captions:1,descriptions:1},s=e("<track />"),o=Modernizr.ES5&&Modernizr.objectAccessor,c=function(e){var a={};return e.addEventListener=function(e,r){a[e]&&t.error("always use $.on to the shimed event: "+e+" already bound fn was: "+a[e]+" your fn was: "+r),a[e]=r},e.removeEventListener=function(e,r){a[e]&&a[e]!=r&&t.error("always use $.on/$.off to the shimed event: "+e+" already bound fn was: "+a[e]+" your fn was: "+r),a[e]&&delete a[e]},e},d={getCueById:function(e){for(var t=null,a=0,r=this.length;r>a;a++)if(this[a].id===e){t=this[a];break}return t}},u={0:"disabled",1:"hidden",2:"showing"},l={shimActiveCues:null,_shimActiveCues:null,activeCues:null,cues:null,kind:"subtitles",label:"",language:"",id:"",mode:"disabled",oncuechange:null,toString:function(){return"[object TextTrack]"},addCue:function(e){if(this.cues){var a=this.cues[this.cues.length-1];a&&a.startTime>e.startTime&&t.error("cue startTime higher than previous cue's startTime")}else this.cues=i.createCueList();e.track&&e.track.removeCue&&e.track.removeCue(e),e.track=this,this.cues.push(e)},removeCue:function(e){var a=this.cues||[],r=0,i=a.length;if(e.track!=this)return t.error("cue not part of track"),void 0;for(;i>r;r++)if(a[r]===e){a.splice(r,1),e.track=null;break}return e.track?(t.error("cue not part of track"),void 0):void 0}},p=["kind","label","srclang"],m={srclang:"language"},h=Function.prototype.call.bind(Object.prototype.hasOwnProperty),f=function(a,r){var i,n,s=[],o=[],c=[];if(a||(a=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{})),r||(a.blockTrackListUpdate=!0,r=e.prop(this,"textTracks"),a.blockTrackListUpdate=!1),clearTimeout(a.updateTrackListTimer),e("track",this).each(function(){var t=e.prop(this,"track");c.push(t),-1==r.indexOf(t)&&o.push(t)}),a.scriptedTextTracks)for(i=0,n=a.scriptedTextTracks.length;n>i;i++)c.push(a.scriptedTextTracks[i]),-1==r.indexOf(a.scriptedTextTracks[i])&&o.push(a.scriptedTextTracks[i]);for(i=0,n=r.length;n>i;i++)-1==c.indexOf(r[i])&&s.push(r[i]);if(s.length||o.length){for(r.splice(0),i=0,n=c.length;n>i;i++)r.push(c[i]);for(i=0,n=s.length;n>i;i++)e([r]).triggerHandler(e.Event({type:"removetrack",track:s[i]}));for(i=0,n=o.length;n>i;i++)e([r]).triggerHandler(e.Event({type:"addtrack",track:o[i]}));(a.scriptedTextTracks||s.length)&&e(this).triggerHandler("updatetrackdisplay")}},k=function(a,r){r||(r=t.data(a,"trackData")),r&&!r.isTriggering&&(r.isTriggering=!0,setTimeout(function(){e(a).closest("audio, video").triggerHandler("updatetrackdisplay"),r.isTriggering=!1},1))},g=function(){var a={subtitles:{subtitles:1,captions:1},descriptions:{descriptions:1},chapters:{chapters:1}};return a.captions=a.subtitles,function(r){var i,n,s=e.prop(r,"default");return s&&"metadata"!=(i=e.prop(r,"kind"))&&(n=e(r).parent().find("track[default]").filter(function(){return!!a[i][e.prop(this,"kind")]})[0],n!=r&&(s=!1,t.error("more than one default track of a specific kind detected. Fall back to default = false"))),s}}(),v=e("<div />")[0],T=function(e,a,r){3!=arguments.length&&t.error("wrong arguments.length for TextTrackCue.constructor"),this.startTime=e,this.endTime=a,this.text=r,c(this)};T.prototype={onenter:null,onexit:null,pauseOnExit:!1,getCueAsHTML:function(){var e,t="",a="",n=r.createDocumentFragment();return h(this,"getCueAsHTML")||(e=this.getCueAsHTML=function(){var e,r;if(t!=this.text)for(t=this.text,a=i.parseCueTextToHTML(t),v.innerHTML=a,e=0,r=v.childNodes.length;r>e;e++)n.appendChild(v.childNodes[e].cloneNode(!0));return n.cloneNode(!0)}),e?e.apply(this,arguments):n.cloneNode(!0)},track:null,id:""},a.TextTrackCue=T,i.createCueList=function(){return e.extend([],d)},i.parseCueTextToHTML=function(){var e=/(<\/?[^>]+>)/gi,t=/^(?:c|v|ruby|rt|b|i|u)/,a=/\<\s*\//,r=function(e,t,r,i){var n;return a.test(i)?n="</"+e+">":(r.splice(0,1),n="<"+e+" "+t+'="'+r.join(" ").replace(/\"/g,"&#34;")+'">'),n},i=function(e){var a=e.replace(/[<\/>]+/gi,"").split(/[\s\.]+/);return a[0]&&(a[0]=a[0].toLowerCase(),t.test(a[0])?"c"==a[0]?e=r("span","class",a,e):"v"==a[0]&&(e=r("q","title",a,e)):e=""),e};return function(t){return t.replace(e,i)}}(),i.loadTextTrack=function(a,r,s,o){var c="play playing updatetrackdisplay",d=s.track,u=function(){var n,o,l;if("disabled"!=d.mode&&e.attr(r,"src")&&(l=e.prop(r,"src"))&&(e(a).unbind(c,u),!s.readyState)){n=function(){s.readyState=3,d.cues=null,d.activeCues=d.shimActiveCues=d._shimActiveCues=null,e(r).triggerHandler("error")},s.readyState=1;try{d.cues=i.createCueList(),d.activeCues=d.shimActiveCues=d._shimActiveCues=i.createCueList(),o=e.ajax({dataType:"text",url:l,success:function(c){"text/vtt"!=o.getResponseHeader("content-type")&&t.error("set the mime-type of your WebVTT files to text/vtt. see: http://dev.w3.org/html5/webvtt/#text/vtt"),i.parseCaptions(c,d,function(t){t&&"length"in t?(s.readyState=2,e(r).triggerHandler("load"),e(a).triggerHandler("updatetrackdisplay")):n()})},error:n})}catch(p){n(),t.error(p)}}};s.readyState=0,d.shimActiveCues=null,d._shimActiveCues=null,d.activeCues=null,d.cues=null,e(a).unbind(c,u),e(a).on(c,u),o&&(d.mode=n[d.kind]?"showing":"hidden",u())},i.createTextTrack=function(a,r){var n,s;return r.nodeName&&(s=t.data(r,"trackData"),s&&(k(r,s),n=s.track)),n||(n=c(t.objectCreate(l)),o||p.forEach(function(t){var a=e.prop(r,t);a&&(n[m[t]||t]=a)}),r.nodeName?(o&&p.forEach(function(a){t.defineProperty(n,m[a]||a,{get:function(){return e.prop(r,a)}})}),n.id=e(r).prop("id"),s=t.data(r,"trackData",{track:n}),i.loadTextTrack(a,r,s,g(r))):(o&&p.forEach(function(e){t.defineProperty(n,m[e]||e,{value:r[e],writeable:!1})}),n.cues=i.createCueList(),n.activeCues=n._shimActiveCues=n.shimActiveCues=i.createCueList(),n.mode="hidden",n.readyState=2),"subtitles"!=n.kind||n.language||t.error("you must provide a language for track in subtitles state"),n.__wsmode=n.mode),n},i.parseCaptionChunk=function(){var e=/^(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s+\-\-\>\s+(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s*(.*)/,a=/^(DEFAULTS|DEFAULT)\s+\-\-\>\s+(.*)/g,r=/^(STYLE|STYLES)\s+\-\-\>\s*\n([\s\S]*)/g,i=/^(COMMENT|COMMENTS)\s+\-\-\>\s+(.*)/g;return function(n){var s,o,c,d,u,l,p,m,h,f;if(m=a.exec(n))return null;if(m=r.exec(n))return null;if(m=i.exec(n))return null;for(s=n.split(/\n/g);!s[0].replace(/\s+/gi,"").length&&s.length>0;)s.shift();for(s[0].match(/^\s*[a-z0-9-\_]+\s*$/gi)&&(p=s.shift().replace(/\s*/gi,"")+""),l=0;s.length>l;l++){var k=s[l];(h=e.exec(k))&&(u=h.slice(1),o=parseInt(3600*(u[0]||0),10)+parseInt(60*(u[1]||0),10)+parseInt(u[2]||0,10)+parseFloat("0."+(u[3]||0)),c=parseInt(3600*(u[4]||0),10)+parseInt(60*(u[5]||0),10)+parseInt(u[6]||0,10)+parseFloat("0."+(u[7]||0))),s=s.slice(0,l).concat(s.slice(l+1));break}return o||c?(d=s.join("\n"),f=new T(o,c,d),p&&(f.id=p),f):(t.warn("couldn't extract time information: "+[o,c,s.join("\n"),p].join(" ; ")),null)}}(),i.parseCaptions=function(e,a,r){i.createCueList();var n,s,o,c,d;e?(o=/^WEBVTT(\s*FILE)?/gi,s=function(u,l){for(;l>u;u++){if(n=e[u],o.test(n))d=!0;else if(n.replace(/\s*/gi,"").length){if(!d){t.error("please use WebVTT format. This is the standard"),r(null);break}n=i.parseCaptionChunk(n,u),n&&a.addCue(n)}if((new Date).getTime()-30>c){u++,setTimeout(function(){c=(new Date).getTime(),s(u,l)},90);break}}u>=l&&(d||t.error("please use WebVTT format. This is the standard"),r(a.cues))},e=e.replace(/\r\n/g,"\n"),setTimeout(function(){e=e.replace(/\r/g,"\n"),setTimeout(function(){c=(new Date).getTime(),e=e.split(/\n\n+/g),s(0,e.length)},9)},9)):t.error("Required parameter captionData not supplied.")},i.createTrackList=function(a,r){return r=r||t.data(a,"mediaelementBase")||t.data(a,"mediaelementBase",{}),r.textTracks||(r.textTracks=[],t.defineProperties(r.textTracks,{onaddtrack:{value:null},onremovetrack:{value:null},onchange:{value:null},getTrackById:{value:function(e){for(var t=null,a=0;r.textTracks.length>a;a++)if(e==r.textTracks[a].id){t=r.textTracks[a];break}return t}}}),c(r.textTracks),e(a).on("updatetrackdisplay",function(){for(var t,a=0;r.textTracks.length>a;a++)t=r.textTracks[a],t.__wsmode!=t.mode&&(t.__wsmode=t.mode,e([r.textTracks]).triggerHandler("change"))})),r.textTracks},Modernizr.track||(t.defineNodeNamesBooleanProperty(["track"],"default"),t.reflectProperties(["track"],["srclang","label"]),t.defineNodeNameProperties("track",{src:{reflect:!0,propType:"src"}})),t.defineNodeNameProperties("track",{kind:{attr:Modernizr.track?{set:function(e){var a=t.data(this,"trackData");this.setAttribute("data-kind",e),a&&(a.attrKind=e)},get:function(){var e=t.data(this,"trackData");return e&&"attrKind"in e?e.attrKind:this.getAttribute("kind")}}:{},reflect:!0,propType:"enumarated",defaultValue:"subtitles",limitedTo:["subtitles","captions","descriptions","chapters","metadata"]}}),e.each(p,function(a,r){var i=m[r]||r;t.onNodeNamesPropertyModify("track",r,function(){var a=t.data(this,"trackData");a&&("kind"==r&&k(this,a),o||(a.track[i]=e.prop(this,r)))})}),t.onNodeNamesPropertyModify("track","src",function(a){if(a){var r,n=t.data(this,"trackData");n&&(r=e(this).closest("video, audio"),r[0]&&i.loadTextTrack(r,this,n))}}),t.defineNodeNamesProperties(["track"],{ERROR:{value:3},LOADED:{value:2},LOADING:{value:1},NONE:{value:0},readyState:{get:function(){return(t.data(this,"trackData")||{readyState:0}).readyState},writeable:!1},track:{get:function(){return i.createTextTrack(e(this).closest("audio, video")[0],this)},writeable:!1}},"prop"),t.defineNodeNamesProperties(["audio","video"],{textTracks:{get:function(){var e=this,a=t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{}),r=i.createTrackList(e,a);return a.blockTrackListUpdate||f.call(e,a,r),r},writeable:!1},addTextTrack:{value:function(e,a,r){var n=i.createTextTrack(this,{kind:s.prop("kind",e||"").prop("kind"),label:a||"",srclang:r||""}),o=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{});return o.scriptedTextTracks||(o.scriptedTextTracks=[]),o.scriptedTextTracks.push(n),f.call(this),n}}},"prop"),e(r).on("emptied ended updatetracklist",function(a){if(e(a.target).is("audio, video")){var r=t.data(a.target,"mediaelementBase");r&&(clearTimeout(r.updateTrackListTimer),r.updateTrackListTimer=setTimeout(function(){f.call(a.target,r)},0))}});var y=function(e,t){return t.readyState||e.readyState},x=function(e){e.originalEvent&&e.stopImmediatePropagation()},b=function(){if(t.implement(this,"track")){var a,r,i=e.prop(this,"track"),n=this.track;n&&(a=e.prop(this,"kind"),r=y(this,n),(n.mode||r)&&(i.mode=u[n.mode]||n.mode),"descriptions"!=a&&(n.mode="string"==typeof n.mode?"disabled":0,this.kind="metadata",e(this).attr({kind:a}))),e(this).on("load error",x)}};t.addReady(function(a,r){var i=r.filter("video, audio, track").closest("audio, video");e("video, audio",a).add(i).each(function(){f.call(this)}).each(function(){if(Modernizr.track){var a=e.prop(this,"textTracks"),r=this.textTracks;a.length!=r.length&&t.error("textTracks couldn't be copied"),e("track",this).each(b)}}),i.each(function(){var e=this,a=t.data(e,"mediaelementBase");a&&(clearTimeout(a.updateTrackListTimer),a.updateTrackListTimer=setTimeout(function(){f.call(e,a)},9))})}),Modernizr.texttrackapi&&e("video, audio").trigger("trackapichange")});