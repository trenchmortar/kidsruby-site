!function(e,t){"use strict";var r,a,i=t.$,n=e.audio&&e.video,o=!1,s=t.bugs,d="mediaelement-jaris",c=function(){t.ready(d,function(){t.mediaelement.createSWF||(t.mediaelement.loadSwf=!0,t.reTest([d],n))})},u=t.cfg,l=u.mediaelement;if(!l)return t.error("mediaelement wasn't implemented but loaded"),void 0;if(n){var p=document.createElement("video");if(e.videoBuffered="buffered"in p,e.mediaDefaultMuted="defaultMuted"in p,o="loop"in p,t.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),e.videoBuffered||(t.addPolyfill("mediaelement-native-fix",{d:["dom-support"]}),t.loader.loadList(["mediaelement-native-fix"])),!l.preferFlash){var m={1:1},f=function(e){var r,n,o;!l.preferFlash&&(i(e.target).is("audio, video")||(o=e.target.parentNode)&&i("source:last",o)[0]==e.target)&&(r=i(e.target).closest("audio, video"))&&(n=r.prop("error"))&&!m[n.code]&&i(function(){a&&!l.preferFlash?(c(),t.ready("WINDOWLOAD "+d,function(){setTimeout(function(){l.preferFlash||!t.mediaelement.createSWF||r.is(".nonnative-api-active")||(l.preferFlash=!0,document.removeEventListener("error",f,!0),i("audio, video").each(function(){t.mediaelement.selectSource(this)}),t.error("switching mediaelements option to 'preferFlash', due to an error with native player: "+e.target.src+" Mediaerror: "+r.prop("error")+"first error: "+n))},9)})):document.removeEventListener("error",f,!0)})};document.addEventListener("error",f,!0),i("audio, video").each(function(){var e=i.prop(this,"error");return e&&!m[e]?(f({target:this}),!1):void 0})}}e.track&&!s.track&&function(){if(s.track||(s.track="number"!=typeof i("<track />")[0].readyState),!s.track)try{new TextTrackCue(2,3,"")}catch(e){s.track=!0}}(),r=e.track&&!s.track,t.register("mediaelement-core",function(t,i,s,u,l,p){a=swfmini.hasFlashPlayerVersion("9.0.115"),t("html").addClass(a?"swf":"no-swf");var m=i.mediaelement;m.parseRtmp=function(e){var t,r,a,n=e.src.split("://"),o=n[1].split("/");for(e.server=n[0]+"://"+o[0]+"/",e.streamId=[],t=1,r=o.length;r>t;t++)a||-1===o[t].indexOf(":")||(o[t]=o[t].split(":")[1],a=!0),a?e.streamId.push(o[t]):e.server+=o[t]+"/";e.streamId.length||i.error("Could not parse rtmp url"),e.streamId=e.streamId.join("/")};var f=function(e,r){e=t(e);var a,i={src:e.attr("src")||"",elem:e,srcProp:e.prop("src")};return i.src?(a=e.attr("data-server"),null!=a&&(i.server=a),a=e.attr("type")||e.attr("data-type"),a?(i.type=a,i.container=t.trim(a.split(";")[0])):(r||(r=e[0].nodeName.toLowerCase(),"source"==r&&(r=(e.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),i.server?(i.type=r+"/rtmp",i.container=r+"/rtmp"):(a=m.getTypeForSrc(i.src,r,i),a&&(i.type=a,i.container=a))),i.container||t(e).attr("data-wsrecheckmimetype",""),a=e.attr("media"),a&&(i.media=a),("audio/rtmp"==i.type||"video/rtmp"==i.type)&&(i.server?i.streamId=i.src:m.parseRtmp(i)),i):i},v=!a&&"postMessage"in s&&n,h=function(){h.loaded||(h.loaded=!0,p.noAutoTrack||i.ready("WINDOWLOAD",function(){T(),i.loader.loadList(["track-ui"])}))},g=function(){var e;return function(){!e&&v&&(e=!0,i.loader.loadScript("https://www.youtube.com/player_api"),t(function(){i._polyfill(["mediaelement-yt"])}))}}(),T=function(){a?c():g()};i.addPolyfill("mediaelement-yt",{test:!v,d:["dom-support"]}),m.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},m.mimeTypes.source=t.extend({},m.mimeTypes.audio,m.mimeTypes.video),m.getTypeForSrc=function(e,r){if(-1!=e.indexOf("youtube.com/watch?")||-1!=e.indexOf("youtube.com/v/"))return"video/youtube";if(0===e.indexOf("rtmp"))return r+"/rtmp";e=e.split("?")[0].split("#")[0].split("."),e=e[e.length-1];var a;return t.each(m.mimeTypes[r],function(t,r){return-1!==r.indexOf(e)?(a=t,!1):l}),a},m.srces=function(e,r){if(e=t(e),!r){r=[];var a=e[0].nodeName.toLowerCase(),i=f(e,a);return i.src?r.push(i):t("source",e).each(function(){i=f(this,a),i.src&&r.push(i)}),r}e.removeAttr("src").removeAttr("type").find("source").remove(),t.isArray(r)||(r=[r]),r.forEach(function(r){"string"==typeof r&&(r={src:r}),e.append(t(u.createElement("source")).attr(r))})},t.fn.loadMediaSrc=function(e,r){return this.each(function(){r!==l&&(t(this).removeAttr("poster"),r&&t.attr(this,"poster",r)),m.srces(this,e),t(this).mediaLoad()})},m.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","video/jarisplayer","jarisplayer/jarisplayer","video/youtube","video/rtmp","audio/rtmp"],m.canThirdPlaySrces=function(e,r){var i="";return(a||v)&&(e=t(e),r=r||m.srces(e),t.each(r,function(e,t){return t.container&&t.src&&(a&&-1!=m.swfMimeTypes.indexOf(t.container)||v&&"video/youtube"==t.container)?(i=t,!1):l})),i};var k={};m.canNativePlaySrces=function(e,r){var a="";if(n){e=t(e);var i=(e[0].nodeName||"").toLowerCase(),o=(k[i]||{prop:{_supvalue:!1}}).prop._supvalue||e[0].canPlayType;if(!o)return a;r=r||m.srces(e),t.each(r,function(t,r){return r.type&&o.call(e[0],r.type)?(a=r,!1):l})}return a};var y=/^\s*application\/octet\-stream\s*$/i,x=function(){var e=y.test(t.attr(this,"type")||"");return e&&t(this).removeAttr("type"),e};m.setError=function(e,r){if(t("source",e).filter(x).length){i.error('"application/octet-stream" is a useless mimetype for audio/video. Please change this attribute.');try{t(e).mediaLoad()}catch(a){}}else r||(r="can't play sources"),t(e).pause().data("mediaerror",r),i.error("mediaelementError: "+r),setTimeout(function(){t(e).data("mediaerror")&&t(e).addClass("media-error").trigger("mediaerror")},1)};var b=function(){var e,r=a?d:"mediaelement-yt";return function(a,n,o){i.ready(r,function(){m.createSWF&&t(a).parent()[0]?m.createSWF(a,n,o):e||(e=!0,T(),b(a,n,o))}),e||!v||m.createSWF||g()}}(),C=function(e,t,r,a,i){var n;r||r!==!1&&t&&"third"==t.isActive?(n=m.canThirdPlaySrces(e,a),n?b(e,n,t):i?m.setError(e,!1):C(e,t,!1,a,!0)):(n=m.canNativePlaySrces(e,a),n?t&&"third"==t.isActive&&m.setActive(e,"html5",t):i?(m.setError(e,!1),t&&"third"==t.isActive&&m.setActive(e,"html5",t)):C(e,t,!0,a,!0))},w=/^(?:embed|object|datalist)$/i,L=function(e,r){var a=i.data(e,"mediaelementBase")||i.data(e,"mediaelementBase",{}),n=m.srces(e),o=e.parentNode;clearTimeout(a.loadTimer),t(e).removeClass("media-error"),t.data(e,"mediaerror",!1),n.length&&o&&1==o.nodeType&&!w.test(o.nodeName||"")&&(r=r||i.data(e,"mediaelement"),m.sortMedia&&n.sort(m.sortMedia),C(e,r,p.preferFlash||l,n))};m.selectSource=L,t(u).on("ended",function(e){var r=i.data(e.target,"mediaelement");(!o||r&&"html5"!=r.isActive||t.prop(e.target,"loop"))&&setTimeout(function(){!t.prop(e.target,"paused")&&t.prop(e.target,"loop")&&t(e.target).prop("currentTime",0).play()},1)});var N=!1,A=function(){var r=function(){if(i.implement(this,"mediaelement")&&(L(this),e.mediaDefaultMuted||null==t.attr(this,"muted")||t.prop(this,"muted",!0),n&&(!o||"ActiveXObject"in s))){var r,a,d=this,c=function(){var e=t.prop(d,"buffered");if(e){for(var r="",a=0,i=e.length;i>a;a++)r+=e.end(a);return r}},u=function(){var e=c();e!=a&&(a=e,i.info("needed to trigger progress manually"),t(d).triggerHandler("progress"))};t(this).on({"play loadstart progress":function(e){"progress"==e.type&&(a=c()),clearTimeout(r),r=setTimeout(u,400)},"emptied stalled mediaerror abort suspend":function(e){"emptied"==e.type&&(a=!1),clearTimeout(r)}}),"ActiveXObject"in s&&t.prop(this,"paused")&&!t.prop(this,"readyState")&&t(this).is('audio[preload="none"][controls]:not([autoplay],.nonnative-api-active)')&&t(this).prop("preload","metadata").mediaLoad()}};i.ready("dom-support",function(){N=!0,o||i.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(e){var r;r=i.defineNodeNameProperty(e,"load",{prop:{value:function(){var e=i.data(this,"mediaelement");L(this,e),!n||e&&"html5"!=e.isActive||!r.prop._supvalue||r.prop._supvalue.apply(this,arguments)}}}),k[e]=i.defineNodeNameProperty(e,"canPlayType",{prop:{value:function(r){var i="";return n&&k[e].prop._supvalue&&(i=k[e].prop._supvalue.call(this,r),"no"==i&&(i="")),!i&&a&&(r=t.trim((r||"").split(";")[0]),-1!=m.swfMimeTypes.indexOf(r)&&(i="maybe")),i}}})}),i.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var e=this,t=i.data(e,"mediaelementBase")||i.data(e,"mediaelementBase",{});clearTimeout(t.loadTimer),t.loadTimer=setTimeout(function(){L(e),e=null},9)}}),i.addReady(function(e,a){var i=t("video, audio",e).add(a.filter("video, audio")).each(r);!h.loaded&&t("track",i).length&&h(),i=null})}),n&&!N&&i.addReady(function(e,r){N||t("video, audio",e).add(r.filter("video, audio")).each(function(){return m.canNativePlaySrces(this)?l:(T(),N=!0,!1)})})};r&&i.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}}),n?(i.isReady("mediaelement-core",!0),A(),i.ready("WINDOWLOAD mediaelement",T)):i.ready(d,A),i.ready("track",h)})}(Modernizr,webshims),webshims.register("track",function(e,t,r,a){"use strict";var i=t.mediaelement;(new Date).getTime(),e.fn.addBack?"addBack":"andSelf";var n={subtitles:1,captions:1,descriptions:1},o=e("<track />"),s=Modernizr.ES5&&Modernizr.objectAccessor,d=function(e){var r={};return e.addEventListener=function(e,a){r[e]&&t.error("always use $.on to the shimed event: "+e+" already bound fn was: "+r[e]+" your fn was: "+a),r[e]=a},e.removeEventListener=function(e,a){r[e]&&r[e]!=a&&t.error("always use $.on/$.off to the shimed event: "+e+" already bound fn was: "+r[e]+" your fn was: "+a),r[e]&&delete r[e]},e},c={getCueById:function(e){for(var t=null,r=0,a=this.length;a>r;r++)if(this[r].id===e){t=this[r];break}return t}},u={0:"disabled",1:"hidden",2:"showing"},l={shimActiveCues:null,_shimActiveCues:null,activeCues:null,cues:null,kind:"subtitles",label:"",language:"",id:"",mode:"disabled",oncuechange:null,toString:function(){return"[object TextTrack]"},addCue:function(e){if(this.cues){var r=this.cues[this.cues.length-1];r&&r.startTime>e.startTime&&t.error("cue startTime higher than previous cue's startTime")}else this.cues=i.createCueList();e.track&&e.track.removeCue&&e.track.removeCue(e),e.track=this,this.cues.push(e)},removeCue:function(e){var r=this.cues||[],a=0,i=r.length;if(e.track!=this)return t.error("cue not part of track"),void 0;for(;i>a;a++)if(r[a]===e){r.splice(a,1),e.track=null;break}return e.track?(t.error("cue not part of track"),void 0):void 0}},p=["kind","label","srclang"],m={srclang:"language"},f=Function.prototype.call.bind(Object.prototype.hasOwnProperty),v=function(r,a){var i,n,o=[],s=[],d=[];if(r||(r=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{})),a||(r.blockTrackListUpdate=!0,a=e.prop(this,"textTracks"),r.blockTrackListUpdate=!1),clearTimeout(r.updateTrackListTimer),e("track",this).each(function(){var t=e.prop(this,"track");d.push(t),-1==a.indexOf(t)&&s.push(t)}),r.scriptedTextTracks)for(i=0,n=r.scriptedTextTracks.length;n>i;i++)d.push(r.scriptedTextTracks[i]),-1==a.indexOf(r.scriptedTextTracks[i])&&s.push(r.scriptedTextTracks[i]);for(i=0,n=a.length;n>i;i++)-1==d.indexOf(a[i])&&o.push(a[i]);if(o.length||s.length){for(a.splice(0),i=0,n=d.length;n>i;i++)a.push(d[i]);for(i=0,n=o.length;n>i;i++)e([a]).triggerHandler(e.Event({type:"removetrack",track:o[i]}));for(i=0,n=s.length;n>i;i++)e([a]).triggerHandler(e.Event({type:"addtrack",track:s[i]}));(r.scriptedTextTracks||o.length)&&e(this).triggerHandler("updatetrackdisplay")}},h=function(r,a){a||(a=t.data(r,"trackData")),a&&!a.isTriggering&&(a.isTriggering=!0,setTimeout(function(){e(r).closest("audio, video").triggerHandler("updatetrackdisplay"),a.isTriggering=!1},1))},g=function(){var r={subtitles:{subtitles:1,captions:1},descriptions:{descriptions:1},chapters:{chapters:1}};return r.captions=r.subtitles,function(a){var i,n,o=e.prop(a,"default");return o&&"metadata"!=(i=e.prop(a,"kind"))&&(n=e(a).parent().find("track[default]").filter(function(){return!!r[i][e.prop(this,"kind")]})[0],n!=a&&(o=!1,t.error("more than one default track of a specific kind detected. Fall back to default = false"))),o}}(),T=e("<div />")[0],k=function(e,r,a){3!=arguments.length&&t.error("wrong arguments.length for TextTrackCue.constructor"),this.startTime=e,this.endTime=r,this.text=a,d(this)};k.prototype={onenter:null,onexit:null,pauseOnExit:!1,getCueAsHTML:function(){var e,t="",r="",n=a.createDocumentFragment();return f(this,"getCueAsHTML")||(e=this.getCueAsHTML=function(){var e,a;if(t!=this.text)for(t=this.text,r=i.parseCueTextToHTML(t),T.innerHTML=r,e=0,a=T.childNodes.length;a>e;e++)n.appendChild(T.childNodes[e].cloneNode(!0));return n.cloneNode(!0)}),e?e.apply(this,arguments):n.cloneNode(!0)},track:null,id:""},r.TextTrackCue=k,i.createCueList=function(){return e.extend([],c)},i.parseCueTextToHTML=function(){var e=/(<\/?[^>]+>)/gi,t=/^(?:c|v|ruby|rt|b|i|u)/,r=/\<\s*\//,a=function(e,t,a,i){var n;return r.test(i)?n="</"+e+">":(a.splice(0,1),n="<"+e+" "+t+'="'+a.join(" ").replace(/\"/g,"&#34;")+'">'),n},i=function(e){var r=e.replace(/[<\/>]+/gi,"").split(/[\s\.]+/);return r[0]&&(r[0]=r[0].toLowerCase(),t.test(r[0])?"c"==r[0]?e=a("span","class",r,e):"v"==r[0]&&(e=a("q","title",r,e)):e=""),e};return function(t){return t.replace(e,i)}}(),i.loadTextTrack=function(r,a,o,s){var d="play playing updatetrackdisplay",c=o.track,u=function(){var n,s,l;if("disabled"!=c.mode&&e.attr(a,"src")&&(l=e.prop(a,"src"))&&(e(r).unbind(d,u),!o.readyState)){n=function(){o.readyState=3,c.cues=null,c.activeCues=c.shimActiveCues=c._shimActiveCues=null,e(a).triggerHandler("error")},o.readyState=1;try{c.cues=i.createCueList(),c.activeCues=c.shimActiveCues=c._shimActiveCues=i.createCueList(),s=e.ajax({dataType:"text",url:l,success:function(d){"text/vtt"!=s.getResponseHeader("content-type")&&t.error("set the mime-type of your WebVTT files to text/vtt. see: http://dev.w3.org/html5/webvtt/#text/vtt"),i.parseCaptions(d,c,function(t){t&&"length"in t?(o.readyState=2,e(a).triggerHandler("load"),e(r).triggerHandler("updatetrackdisplay")):n()})},error:n})}catch(p){n(),t.error(p)}}};o.readyState=0,c.shimActiveCues=null,c._shimActiveCues=null,c.activeCues=null,c.cues=null,e(r).unbind(d,u),e(r).on(d,u),s&&(c.mode=n[c.kind]?"showing":"hidden",u())},i.createTextTrack=function(r,a){var n,o;return a.nodeName&&(o=t.data(a,"trackData"),o&&(h(a,o),n=o.track)),n||(n=d(t.objectCreate(l)),s||p.forEach(function(t){var r=e.prop(a,t);r&&(n[m[t]||t]=r)}),a.nodeName?(s&&p.forEach(function(r){t.defineProperty(n,m[r]||r,{get:function(){return e.prop(a,r)}})}),n.id=e(a).prop("id"),o=t.data(a,"trackData",{track:n}),i.loadTextTrack(r,a,o,g(a))):(s&&p.forEach(function(e){t.defineProperty(n,m[e]||e,{value:a[e],writeable:!1})}),n.cues=i.createCueList(),n.activeCues=n._shimActiveCues=n.shimActiveCues=i.createCueList(),n.mode="hidden",n.readyState=2),"subtitles"!=n.kind||n.language||t.error("you must provide a language for track in subtitles state"),n.__wsmode=n.mode),n},i.parseCaptionChunk=function(){var e=/^(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s+\-\-\>\s+(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s*(.*)/,r=/^(DEFAULTS|DEFAULT)\s+\-\-\>\s+(.*)/g,a=/^(STYLE|STYLES)\s+\-\-\>\s*\n([\s\S]*)/g,i=/^(COMMENT|COMMENTS)\s+\-\-\>\s+(.*)/g;return function(n){var o,s,d,c,u,l,p,m,f,v;if(m=r.exec(n))return null;if(m=a.exec(n))return null;if(m=i.exec(n))return null;for(o=n.split(/\n/g);!o[0].replace(/\s+/gi,"").length&&o.length>0;)o.shift();for(o[0].match(/^\s*[a-z0-9-\_]+\s*$/gi)&&(p=o.shift().replace(/\s*/gi,"")+""),l=0;o.length>l;l++){var h=o[l];(f=e.exec(h))&&(u=f.slice(1),s=parseInt(3600*(u[0]||0),10)+parseInt(60*(u[1]||0),10)+parseInt(u[2]||0,10)+parseFloat("0."+(u[3]||0)),d=parseInt(3600*(u[4]||0),10)+parseInt(60*(u[5]||0),10)+parseInt(u[6]||0,10)+parseFloat("0."+(u[7]||0))),o=o.slice(0,l).concat(o.slice(l+1));break}return s||d?(c=o.join("\n"),v=new k(s,d,c),p&&(v.id=p),v):(t.warn("couldn't extract time information: "+[s,d,o.join("\n"),p].join(" ; ")),null)}}(),i.parseCaptions=function(e,r,a){i.createCueList();var n,o,s,d,c;e?(s=/^WEBVTT(\s*FILE)?/gi,o=function(u,l){for(;l>u;u++){if(n=e[u],s.test(n))c=!0;else if(n.replace(/\s*/gi,"").length){if(!c){t.error("please use WebVTT format. This is the standard"),a(null);break}n=i.parseCaptionChunk(n,u),n&&r.addCue(n)}if((new Date).getTime()-30>d){u++,setTimeout(function(){d=(new Date).getTime(),o(u,l)},90);break}}u>=l&&(c||t.error("please use WebVTT format. This is the standard"),a(r.cues))},e=e.replace(/\r\n/g,"\n"),setTimeout(function(){e=e.replace(/\r/g,"\n"),setTimeout(function(){d=(new Date).getTime(),e=e.split(/\n\n+/g),o(0,e.length)},9)},9)):t.error("Required parameter captionData not supplied.")},i.createTrackList=function(r,a){return a=a||t.data(r,"mediaelementBase")||t.data(r,"mediaelementBase",{}),a.textTracks||(a.textTracks=[],t.defineProperties(a.textTracks,{onaddtrack:{value:null},onremovetrack:{value:null},onchange:{value:null},getTrackById:{value:function(e){for(var t=null,r=0;a.textTracks.length>r;r++)if(e==a.textTracks[r].id){t=a.textTracks[r];break}return t}}}),d(a.textTracks),e(r).on("updatetrackdisplay",function(){for(var t,r=0;a.textTracks.length>r;r++)t=a.textTracks[r],t.__wsmode!=t.mode&&(t.__wsmode=t.mode,e([a.textTracks]).triggerHandler("change"))})),a.textTracks},Modernizr.track||(t.defineNodeNamesBooleanProperty(["track"],"default"),t.reflectProperties(["track"],["srclang","label"]),t.defineNodeNameProperties("track",{src:{reflect:!0,propType:"src"}})),t.defineNodeNameProperties("track",{kind:{attr:Modernizr.track?{set:function(e){var r=t.data(this,"trackData");this.setAttribute("data-kind",e),r&&(r.attrKind=e)},get:function(){var e=t.data(this,"trackData");return e&&"attrKind"in e?e.attrKind:this.getAttribute("kind")}}:{},reflect:!0,propType:"enumarated",defaultValue:"subtitles",limitedTo:["subtitles","captions","descriptions","chapters","metadata"]}}),e.each(p,function(r,a){var i=m[a]||a;t.onNodeNamesPropertyModify("track",a,function(){var r=t.data(this,"trackData");r&&("kind"==a&&h(this,r),s||(r.track[i]=e.prop(this,a)))})}),t.onNodeNamesPropertyModify("track","src",function(r){if(r){var a,n=t.data(this,"trackData");n&&(a=e(this).closest("video, audio"),a[0]&&i.loadTextTrack(a,this,n))}}),t.defineNodeNamesProperties(["track"],{ERROR:{value:3},LOADED:{value:2},LOADING:{value:1},NONE:{value:0},readyState:{get:function(){return(t.data(this,"trackData")||{readyState:0}).readyState},writeable:!1},track:{get:function(){return i.createTextTrack(e(this).closest("audio, video")[0],this)},writeable:!1}},"prop"),t.defineNodeNamesProperties(["audio","video"],{textTracks:{get:function(){var e=this,r=t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{}),a=i.createTrackList(e,r);return r.blockTrackListUpdate||v.call(e,r,a),a},writeable:!1},addTextTrack:{value:function(e,r,a){var n=i.createTextTrack(this,{kind:o.prop("kind",e||"").prop("kind"),label:r||"",srclang:a||""}),s=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{});return s.scriptedTextTracks||(s.scriptedTextTracks=[]),s.scriptedTextTracks.push(n),v.call(this),n}}},"prop"),e(a).on("emptied ended updatetracklist",function(r){if(e(r.target).is("audio, video")){var a=t.data(r.target,"mediaelementBase");a&&(clearTimeout(a.updateTrackListTimer),a.updateTrackListTimer=setTimeout(function(){v.call(r.target,a)},0))}});var y=function(e,t){return t.readyState||e.readyState},x=function(e){e.originalEvent&&e.stopImmediatePropagation()},b=function(){if(t.implement(this,"track")){var r,a,i=e.prop(this,"track"),n=this.track;n&&(r=e.prop(this,"kind"),a=y(this,n),(n.mode||a)&&(i.mode=u[n.mode]||n.mode),"descriptions"!=r&&(n.mode="string"==typeof n.mode?"disabled":0,this.kind="metadata",e(this).attr({kind:r}))),e(this).on("load error",x)}};t.addReady(function(r,a){var i=a.filter("video, audio, track").closest("audio, video");e("video, audio",r).add(i).each(function(){v.call(this)}).each(function(){if(Modernizr.track){var r=e.prop(this,"textTracks"),a=this.textTracks;r.length!=a.length&&t.error("textTracks couldn't be copied"),e("track",this).each(b)}}),i.each(function(){var e=this,r=t.data(e,"mediaelementBase");r&&(clearTimeout(r.updateTrackListTimer),r.updateTrackListTimer=setTimeout(function(){v.call(e,r)},9))})}),Modernizr.texttrackapi&&e("video, audio").trigger("trackapichange")});